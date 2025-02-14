/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderTemplate, f as renderScript, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7Jh5Z2yE.mjs';
import { i as index } from '../chunks/es_BWUqs16E.mjs';
import { R as RightIcon } from '../chunks/homeIcons_Dsrvimhv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$OptionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OptionCard;
  const { data } = Astro2.props;
  const link = data.link;
  return renderTemplate`${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/molecule/OptionCard.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "option-card", "option-card", { "class": "flex justify-between cursor-pointer w-full max-w-80 bg-white bg-opacity-25 hover:bg-white hover:bg-opacity-50 rounded-lg shadow-sm px-3 py-3 transition-colors", "data-link": link }, { "default": () => renderTemplate` ${maybeRenderHead()}<content class="flex flex-col gap-2" onclick=""> <p class="text-gray-800 text-xl font-bold">${data.title}</p> </content> <aside class="flex h-full items-center text-gray-900 hover:text-gray-400 transition-colors"> ${renderComponent($$result, "RightIcon", RightIcon, { "size": 24 })} </aside> ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/molecule/OptionCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const accessToken = Astro2.cookies.get("bv-access-token");
  const refreshToken = Astro2.cookies.get("bv-refresh-token");
  let loginText = "Ver Perfil";
  if (!accessToken || !refreshToken) {
    loginText = "Iniciar Sesion";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to BiblioVet.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col items-center py-8 px-10 w-full h-full" data-astro-cid-j7pv25f6> <a class="absolute right-5 top-5 lg:right-20 animate-pulse px-2 py-1 bg-lime-600 rounded-lg font-semibold text-lime-100 hover:text-black hover:animate-none hover:bg-lime-400 hover:scale-110 transition-all" href="/auth/signin" data-astro-cid-j7pv25f6>${loginText}</a> <section class="flex flex-col justify-center items-center" data-astro-cid-j7pv25f6> <img width="100" height="100" src="./images/vaca192.webp" alt="Icono Vaca logo SAC" data-astro-cid-j7pv25f6> <h1 class="text-5xl text-gray-900 font-extrabold" data-astro-cid-j7pv25f6>${index.title}</h1> <p class="text-sm text-gray-700 font-bold text-center mt-3" data-astro-cid-j7pv25f6> ${index.subtitle} </p> </section> <section class="flex flex-col py-5 px-4 mt-16 w-full max-w-4xl rounded-lg mx-auto backdrop-blur-md bg-white bg-opacity-20" data-astro-cid-j7pv25f6> <h2 class="text-xl text-gray-700 font-bold" data-astro-cid-j7pv25f6>${index.temas.title}</h2> <article class="flex flex-wrap justify-center mt-5 pl-3 gap-4 mx-auto w-full" data-astro-cid-j7pv25f6> ${index.temas && index.temas.items.map((item) => renderTemplate`${renderComponent($$result2, "OptionCard", $$OptionCard, { "data": item, "data-astro-cid-j7pv25f6": true })}`)} </article> </section> </main> ` })} `;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/index.astro", void 0);

const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
