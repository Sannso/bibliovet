import type { APIRoute } from 'astro';
import { getUserFromCookies } from '@/lib/auth';

export const GET: APIRoute = async ({ cookies }) => {
  const user = await getUserFromCookies(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'No session' }), { status: 401 });
  }
  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};