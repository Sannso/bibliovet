import type { APIRoute } from "astro";
import { supabaseAuth } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies }) => {
  const { nickname } = await request.json();
  const token = cookies.get("bv-access-token")!.value;  

  // BD fetch
  const { data, error } = await supabaseAuth(token)
    .from("user_related")
    .select()
    .eq("nickname", nickname);

    if (error) {
      return new Response(error.message, { status: 500 });
    }

  if (data && data.length > 0) {
    return new Response(
      JSON.stringify({
        status: true,
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        status: false,
      }),
      { status: 200 }
    );
  }

 


};
