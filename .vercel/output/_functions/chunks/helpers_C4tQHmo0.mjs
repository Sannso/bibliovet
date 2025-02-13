import { s as supabase } from './supabase_DGtTifTM.mjs';

async function getSession(cookies) {
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");
  const data = {
    session: {},
    status: true
  };
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      cookies.delete("bv-access-token", {
        path: "/"
      });
      cookies.delete("bv-refresh-token", {
        path: "/"
      });
      data.status = false;
    }
    data.session = session;
  } catch (error) {
    cookies.delete("bv-access-token", {
      path: "/"
    });
    cookies.delete("bv-refresh-token", {
      path: "/"
    });
    data.status = false;
  }
  return data;
}

export { getSession as g };
