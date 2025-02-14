import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);

export function supabaseAuth(token: string) {
  createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
    }
  );
}