/* empty css                                    */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_hdbVl3pW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C1k_9Jh4.mjs';
export { renderers } from '../renderers.mjs';

const $$Testing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pruebas BiblioVet." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center py-8 px-10 w-full h-full"></main> ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/testing.astro", undefined);

const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/testing.astro";
const $$url = "/testing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
