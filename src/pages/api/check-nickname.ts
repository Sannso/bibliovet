import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  const { nickname } = await request.json();
    
  // BD fetch
  const { data, error } = await supabase
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
