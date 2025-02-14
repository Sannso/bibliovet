/* empty css                                       */
import { c as createComponent, a as createAstro, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_7Jh5Z2yE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies } = Astro2;
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex w-auto mx-auto my-auto p-10 flex-col items-center justify-center backdrop-blur-md bg-white bg-opacity-5 rounded-xl shadow-lg"> <h1 class="text-2xl font-bold text-white mb-5">Iniciar Sesión</h1> <form action="/api/auth/signin" method="post"> <div class="mb-5"> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label> <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@ejemplo.com" required> </div> <div class="mb-5"> <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label> <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required> </div> <div class="flex items-start mb-2"> <div class="flex items-center h-5"> <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required> </div> <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recordarme</label> </div> <div class="flex items-start mb-5 text-white [&_a]:text-blue-500 [&_a]:hover:text-blue-600 [&_a]:underline"> <p>Nuevo aquí? <a href="/auth/register">Crea una cuenta</a></p> </div> <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button> </form> </section> ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/auth/signin.astro", void 0);

const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/auth/signin.astro";
const $$url = "/auth/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
