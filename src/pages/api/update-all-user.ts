import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies }) => {
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");

  let session = await supabase.auth.setSession({
    refresh_token: refreshToken!.value,
    access_token: accessToken!.value,
  });

  const data = await request.formData();
  const name = data.get("name")!.toString();
  const firstname = data.get("firstname")!.toString();
  const nickname = data.get("nickname")!.toString();
  const position = data.get("position")!.toString();
  const semester = data.get("semester")!.toString();
  const university = data.get("university")!.toString();
  const user_avatar: any = data.get("user_avatar");

  // Actualizar los datos del usuario
  const filePath = `${session.data.user!.id}.${user_avatar!.name.split(".").pop()}`;

  // Subir el archivo con metadatos que incluyan el user_id

  const { data: responsePicStorage, error } = await supabase.storage
    .from("profile_pic")
    .upload(filePath, user_avatar, {
      cacheControl: "1800",
      upsert: true,
      contentType: user_avatar.type,
      metadata: { user_id: session.data.user!.id },
    });

  if (error) {
    return new Response(
      JSON.stringify({
        status: false,
        message: "La imagen exceede el tamaño permitido.",
      }),
      { status: 400 }
    );
  }

  console.log(responsePicStorage);

  const {error: dataError } = await supabase
    .from("user_related")
    .update({
      name: name,
      firstname: firstname,
      nickname: nickname,
      position: position,
      semester: semester,
      university: university,
      user_avatar: responsePicStorage.fullPath,
    })
    .eq("uuid", session.data.user!.id)
    .select();

  if (dataError) {
    return new Response(
      JSON.stringify({
        status: false,
        message: "Error de actualizacion",
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      status: true,
    }),
    { status: 200 }
  );
};
