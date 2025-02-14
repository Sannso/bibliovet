/* empty css                                       */
import { c as createComponent, a as createAstro, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_7Jh5Z2yE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Register = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const { cookies } = Astro2;
  const accessToken = cookies.get("bv-access-token");
  const refreshToken = cookies.get("bv-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex w-auto mx-auto my-auto p-10 flex-col items-center justify-center backdrop-blur-md bg-white bg-opacity-5 rounded-xl shadow-lg"> <h1 class="text-2xl font-bold text-white mb-5">Registrarse</h1> <form action="/api/auth/register" method="post" class="max-w-sm mx-auto"> <div class="mb-5"> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label> <input type="email" id="email" name="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="nombre@ejemplo.com" required> </div> <div class="mb-5"> <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label> <input type="password" id="password" name="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required> </div> <div class="mb-5"> <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repetir Contraseña</label> <input type="password" id="repeat-password" name="repeat-password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required> </div> <div class="flex items-start mb-5"> <div class="flex items-center h-5"> <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required> </div> <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto los <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</a></label> </div> <div class="flex items-start mb-5 text-white [&_a]:text-blue-500 [&_a]:hover:text-blue-600 [&_a]:underline"> <p>Ya tienes cuenta? <a href="/auth/signin">Inicia sesión aquí</a></p> </div> <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarme</button> </form> </section> ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/auth/register.astro", void 0);

const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/auth/register.astro";
const $$url = "/auth/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
