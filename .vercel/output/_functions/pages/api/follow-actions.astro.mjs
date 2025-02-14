import { s as supabase } from '../../chunks/supabase_DGtTifTM.mjs';
import { g as getSession } from '../../chunks/helpers_C4tQHmo0.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({
  request,
  cookies
}) => {
  const {
    follow_state,
    following_id
  } = await request.json();
  const {
    data: user,
    error
  } = await supabase.from("user_related").select("uuid").eq("id", following_id);
  if (error) {
    return new Response(JSON.stringify({
      status: false,
      message: "Error while fetching user"
    }), {
      status: 500
    });
  }
  const session = await getSession(cookies);
  if (follow_state == "follow") {
    await supabase.from("followers").insert({
      user_uuid: session.session.data.user.id,
      follower_uuid: user[0].uuid
    });
  } else {
    await supabase.from("followers").delete().eq("user_uuid", session.session.data.user.id);
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
