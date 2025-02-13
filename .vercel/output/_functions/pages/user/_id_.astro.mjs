/* empty css                                       */
import { c as createComponent, r as renderTemplate, g as renderComponent, f as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_hdbVl3pW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C1k_9Jh4.mjs';
import { g as getSession } from '../../chunks/helpers_C4tQHmo0.mjs';
import { s as supabase } from '../../chunks/supabase_DGtTifTM.mjs';
import { $ as $$SocialHeader, a as $$UserDetails, b as $$UserArticles } from '../../chunks/UserDetails_lQ6EQG2T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const url = "https://qpets.vercel.app";
  const sessionData = await getSession(Astro2.cookies);
  if (!sessionData.status) {
    return Astro2.redirect(url + "/auth/signin");
  }
  const { data: user } = await supabase.from("user_related").select().eq("uuid", sessionData.session.data.user.id);
  if (user[0].id == id) {
    return Astro2.redirect(url + "/dashboard");
  }
  const response = await fetch(url + "/api/profile", {
    method: "GET",
    headers: { id, typeOfId: "id" }
  });
  const { data, status, image, contributions } = await response.json();
  if (!status) {
    return Astro2.redirect(url);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SocialHeader", $$SocialHeader, {})} ${maybeRenderHead()}<section class="flex flex-wrap h-full justify-center mx-auto my-10 lg:my-20 gap-10 px-7"> ${renderComponent($$result2, "UserDetails", $$UserDetails, { "image": image, "data": data[0], "type": "visitor" })} ${renderComponent($$result2, "UserArticles", $$UserArticles, { "contributions": contributions, "type": "visitor" })} </section> ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/user/[id].astro", undefined);
const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/user/[id].astro";
const $$url = "/user/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
