import { s as supabase } from '../../../chunks/supabase_DGtTifTM.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  redirect
}) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const repeatPassword = formData.get("repeat-password")?.toString();
  if (!email || !password) {
    return new Response("Email and password are required", {
      status: 400
    });
  }
  if (password != repeatPassword) {
    return new Response("Las contraseñas no coinciden", {
      status: 400
    });
  }
  const {
    error
  } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    return new Response(error.message, {
      status: 500
    });
  }
  return redirect("/auth/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
