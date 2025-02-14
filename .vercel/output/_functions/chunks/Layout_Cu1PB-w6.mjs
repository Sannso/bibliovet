import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderScript } from './astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#009578"><link rel="icon" type="image/webp" href="/images/vaca192.webp"><link rel="apple-touch-icon" href="/images/vaca192.webp"><link rel="manifest" href="../manifest.json"><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/images/vaca192.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body> </html> `;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
