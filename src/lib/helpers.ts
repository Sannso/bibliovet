/*import { supabase } from "@/lib/supabase";


export async function getSession(cookies: any) {
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");

  const data = { session: <any>{}, status: true, token: accessToken.value};

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

  cookies.set("bv-access-token", session?.data.session?.access_token, {
    path: "/",         // Disponibilidad en todas las rutas
    httpOnly: true,     // No accesible desde JavaScript del lado del cliente
    secure: true,       // Solo se envía por HTTPS (útil en producción)
    maxAge: 60 * 60 * 2, // Dura 2 horas
  });
  cookies.set("bv-refresh-token", session?.data.session?.refresh_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 2,
  });
  return data;
}
*/

// Return the URL of the current environment
export function getUrl() {
  return import.meta.env.DEV
  ? "http://localhost:4321"
  : "https://bibliovet.vercel.app";
}

