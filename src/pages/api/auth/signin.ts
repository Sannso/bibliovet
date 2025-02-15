import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("bv-access-token", access_token, {
    path: "/",         // Disponibilidad en todas las rutas
    httpOnly: true,     // No accesible desde JavaScript del lado del cliente
    secure: true,       // Solo se envía por HTTPS (útil en producción)
    maxAge: 60 * 60 * 24, // Dura 2 horas
  });
  cookies.set("bv-refresh-token", refresh_token, {
    path: "/",        
    httpOnly: true,    
    secure: true,       
    maxAge: 60 * 60 * 24, 
  });
  
  return redirect("/dashboard");
};