import type { APIRoute } from "astro";
import { supabase, supabaseAuth } from "@/lib/supabase";
import { getSession } from "@lib/helpers";

export const POST: APIRoute = async ({ request, cookies }) => {
  const { follow_state, following_id } = await request.json();

  const { data:user, error } = await supabase
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

  const session = await getSession(cookies);
  const token = cookies.get("bv-access-token")!.value; 
  if (follow_state == "follow") {
    await supabaseAuth(token)
      .from("followers")
      .insert({
        user_uuid: session.session.data.user!.id,
        follower_uuid: user![0].uuid,
      });
  } else {
    await supabaseAuth(token)
      .from("followers")
      .delete()
      .eq("user_uuid", session.session.data.user!.id);
  }

  return new Response(
    JSON.stringify({
      status: true,
    }),
    { status: 200 }
  );
};
