import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("bv-access-token", { path: "/" });
  cookies.delete("bv-refresh-token", { path: "/" });
  return redirect("/auth/signin");
};