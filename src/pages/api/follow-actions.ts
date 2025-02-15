import type { APIRoute } from "astro";
import { supabase, supabaseAuth } from "@/lib/supabase";
import { getUserFromCookies } from "@lib/auth";

export const POST: APIRoute = async ({ request, cookies }) => {
  const { follow_state, following_id } = await request.json();

  const { data:userData, error } = await supabase
    .from("user_related")
    .select("uuid")
    .eq("id", following_id);

  if (error) {
    return new Response(
      JSON.stringify({
        status: false,
        message: "Error while fetching user",
      }),
      { status: 500 }
    );
  }

  const user = await getUserFromCookies(cookies);
  const token = cookies.get("bv-access-token")!.value; 
  if (follow_state == "follow") {
    await supabaseAuth(token)
      .from("followers")
      .insert({
        user_uuid: user!.id,
        follower_uuid: userData![0].uuid,
      });
  } else {
    await supabaseAuth(token)
      .from("followers")
      .delete()
      .eq("user_uuid", user!.id);
  }

  return new Response(
    JSON.stringify({
      status: true,
    }),
    { status: 200 }
  );
};
