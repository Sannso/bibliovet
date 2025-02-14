import { s as supabase } from '../../chunks/supabase_DGtTifTM.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({
  request,
  cookies
}) => {
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");
  let session = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  const data = await request.formData();
  const name = data.get("name").toString();
  const firstname = data.get("firstname").toString();
  const nickname = data.get("nickname").toString();
  const position = data.get("position").toString();
  const semester = data.get("semester").toString();
  const university = data.get("university").toString();
  const user_avatar = data.get("user_avatar");
  const filePath = `${session.data.user.id}.${user_avatar.name.split(".").pop()}`;
  const {
    data: responsePicStorage,
    error
  } = await supabase.storage.from("profile_pic").upload(filePath, user_avatar, {
    cacheControl: "1800",
    upsert: true,
    contentType: user_avatar.type,
    metadata: {
      user_id: session.data.user.id
    }
  });
  if (error) {
    return new Response(JSON.stringify({
      status: false,
      message: "La imagen exceede el tamaño permitido."
    }), {
      status: 400
    });
  }
  console.log(responsePicStorage);
  const {
    error: dataError
  } = await supabase.from("user_related").update({
    name,
    firstname,
    nickname,
    position,
    semester,
    university,
    user_avatar: responsePicStorage.fullPath
  }).eq("uuid", session.data.user.id).select();
  if (dataError) {
    return new Response(JSON.stringify({
      status: false,
      message: "Error de actualizacion"
    }), {
      status: 400
    });
  }
  return new Response(JSON.stringify({
    status: true
  }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
