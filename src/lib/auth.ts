import type { AstroCookies } from "astro";
import { supabaseAuth } from "./supabase";

export async function getUserFromCookies(cookies: AstroCookies) {
    const token = cookies.get('bv-access-token')?.value;
    if (!token) return null;

    const supabase = supabaseAuth(token);
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) return null;
    
    return data.user;
  }