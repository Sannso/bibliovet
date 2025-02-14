import { s as supabase } from '../../chunks/supabase_DGtTifTM.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({
  request
}) => {
  const {
    nickname
  } = await request.json();
  const {
    data,
    error
  } = await supabase.from("user_related").select().eq("nickname", nickname);
  if (error) {
    return new Response(error.message, {
      status: 500
    });
  }
  if (data && data.length > 0) {
    return new Response(JSON.stringify({
      status: true
    }), {
      status: 200
    });
  } else {
    return new Response(JSON.stringify({
      status: false
    }), {
      status: 200
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
