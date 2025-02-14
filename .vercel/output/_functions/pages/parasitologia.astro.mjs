/* empty css                                    */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7Jh5Z2yE.mjs';
import { $ as $$Header, C as ContentTopic, a as $$Footer } from '../chunks/contentTopic_Baefi4e1.mjs';
export { renderers } from '../renderers.mjs';

const $$Parasitologia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Parasitologia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "category": 0 })} ${maybeRenderHead()}<main class="w-full"> ${renderComponent($$result2, "ContentTopic", ContentTopic, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/reactComponents/contentTopic", "client:component-export": "ContentTopic" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/parasitologia.astro", void 0);

const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/parasitologia.astro";
const $$url = "/parasitologia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Parasitologia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
