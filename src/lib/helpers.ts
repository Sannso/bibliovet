import { supabase } from "@/lib/supabase";

export async function getSession(cookies: any) {
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");

  const data = { session: <any>{}, status: true };

  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value,
    });
    if (session.error) {
      cookies.delete("bv-access-token", {
        path: "/",
      });
      cookies.delete("bv-refresh-token", {
        path: "/",
      });
      data.status = false;
    }

    data.session = session;
  } catch (error) {
    cookies.delete("bv-access-token", {
      path: "/",
    });
    cookies.delete("bv-refresh-token", {
      path: "/",
    });
    data.status = false;
  }

  return data;
}

// Return the URL of the current environment
export function getUrl() {
  return import.meta.env.DEV
  ? "http://localhost:4321"
  : "https://qpets.vercel.app";
}

