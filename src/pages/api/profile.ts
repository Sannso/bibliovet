import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { getSession } from "@lib/helpers";

export const GET: APIRoute = async ({ request, cookies }) => {
  const dataRequest = request.headers.get("id")!;
  const typeofid = request.headers.get("typeofid")!;

  // En el "front" ya me asegure que haya una session, asi que en el back no es necesario, solo la pido
  const session:any = await getSession(cookies);

  console.log("Se obtuvo la cookie", cookies.get("bv-access-token"));


  // BD fetch
  const { data, error } = await supabase
    .from("user_related")
    .select()
    .eq(typeofid, dataRequest);

  if (error) {
    return new Response(
      JSON.stringify({
        data,
        image: "",
        status: false,
        contributions: [],
      }),
      { status: 500 }
    );
  }

  const info = {
    data,
    image: "",
    status: false,
    contributions: <any>[],
  };

  console.log("Se obtuvo la data", data![0]);

  // Las otras llamadas deben tener el mismo formato de id (uuid)
  if (data.length === 0) {
    return new Response(JSON.stringify(info), { status: 500 });
  }

  const id = typeofid === "uuid" ? dataRequest : data[0].uuid;

  const { data: dataImage, error: errorImage } = await supabase.storage
    .from("profile_pic")
    .createSignedUrl(data[0].user_avatar.split("/").pop(), 60);

  if (errorImage) {
    return new Response(JSON.stringify(info), { status: 500 });
  }

  console.log("Se obtuvo la imagen", dataImage);

  const { data: contributions, error: errorContributions } = await supabase
    .from("user_contributions")
    .select()
    .eq("user", id);

  if (errorContributions) {
    return new Response(JSON.stringify(info), { status: 500 });
  }

  console.log("Se obtuvo las contribuciones", contributions);

  info.image = dataImage.signedUrl;
  info.status = true;
  info.contributions = contributions;

  // Haz algo con los datos, luego devuelve una respuesta de éxito
  return new Response(JSON.stringify(info), { status: 200 });
};
