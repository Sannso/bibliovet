/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderScript, g as renderComponent, f as createAstro } from '../chunks/astro/server_hdbVl3pW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C1k_9Jh4.mjs';
import { s as supabase } from '../chunks/supabase_DGtTifTM.mjs';
import { $ as $$SocialHeader, a as $$UserDetails, b as $$UserArticles } from '../chunks/UserDetails_lQ6EQG2T.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$ErrorModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full max-w-md max-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-modal="small-modal"> <!-- Modal content --> <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"> <!-- Modal header --> <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"> <h3 class="text-xl font-medium text-red-800 dark:text-red-500">Error</h3> </div> <!-- Modal body --> <div class="p-4 md:p-5 space-y-4"> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Sobrepasaste el límite de tamaño permitido.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Recomendación: Sube una imagen con un tamaño menor a 30KB. Puedes usar
        el link recomendado para reducir el tamaño de tu imagen y se
        recomenienda transformarla a formato .webp
</p> </div> <!-- Modal footer --> <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"> <button id="errorModalButton" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aceptar</button> </div> </div> </div> ${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/modals/ErrorModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/modals/ErrorModal.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const accessToken = Astro2.cookies.get("bv-access-token");
  const refreshToken = Astro2.cookies.get("bv-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/auth/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("bv-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("bv-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/auth/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("bv-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("bv-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/auth/signin");
  }
  const url = "https://qpets.vercel.app";
  const response = await fetch(url + "/api/profile", {
    method: "GET",
    headers: { id: session.data.user.id, typeOfId: "uuid" }
  });
  const { data, image, contributions } = await response.json();
  let welcome = false;
  if (data[0].nickname == null) {
    welcome = true;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard", "data-astro-cid-y55gmoyq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SocialHeader", $$SocialHeader, { "data-astro-cid-y55gmoyq": true })} ${welcome ? renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center mt-20 mb-20" data-astro-cid-y55gmoyq> <h1 class="text-4xl font-bold text-white" data-astro-cid-y55gmoyq>Bienvenido a Bibliovet</h1> <p class="text-white mt-5" data-astro-cid-y55gmoyq>
Por favor completa tu perfil para poder disfrutar de todas las
          funcionalidades de la plataforma
</p> <form class="max-w-sm mx-auto mt-10" data-astro-cid-y55gmoyq> <div class="flex gap-8" data-astro-cid-y55gmoyq> <div class="mb-5" data-astro-cid-y55gmoyq> <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-y55gmoyq>
Nombre
</label> <input type="text" id="name" name="name" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required data-astro-cid-y55gmoyq> </div> <div class="mb-5" data-astro-cid-y55gmoyq> <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-y55gmoyq>
Apellido
</label> <input type="text" id="firstname" name="firstname" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required data-astro-cid-y55gmoyq> </div> </div> <div class="flex flex-col mb-5" data-astro-cid-y55gmoyq> <label for="nickname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-y55gmoyq>
Elije tu apodo, o nombre de usuario
</label> <div class="relative w-full" data-astro-cid-y55gmoyq> <input type="search" id="nickname" name="nickname" class="block p-2.5 w-full z-20 text-sm rounded-s-gray-100 rounded-s-2 border" required data-astro-cid-y55gmoyq> <button id="check-nickname" type="button" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700" data-astro-cid-y55gmoyq>
check
</button> </div> <p id="check-alert" class="mt-2" data-astro-cid-y55gmoyq> <span class="font-medium" data-astro-cid-y55gmoyq></span> </p> </div> <div class="mb-5" data-astro-cid-y55gmoyq> <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-y55gmoyq>
A que te dedicas? (Se verificará)
</label> <select id="position" name="position" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-astro-cid-y55gmoyq> <option data-astro-cid-y55gmoyq>Estudiante</option> <option data-astro-cid-y55gmoyq>Profesor</option> <option data-astro-cid-y55gmoyq>Profesional</option> </select> </div> <div id="semester-div" class="mb-5" data-astro-cid-y55gmoyq> <label for="semester" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-y55gmoyq>
Semestre
</label> <input type="number" id="semester" name="semester" min="0" value="0" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required data-astro-cid-y55gmoyq> </div> <div class="mb-5" data-astro-cid-y55gmoyq> <label for="university" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-y55gmoyq>
Universidad
</label> <select id="university" name="university" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required data-astro-cid-y55gmoyq> <option data-astro-cid-y55gmoyq>Universidad Tecnológica de Pereira</option> <option data-astro-cid-y55gmoyq>Visión de las Américas</option> <option data-astro-cid-y55gmoyq>Unisarc</option> </select> </div> <div data-astro-cid-y55gmoyq> <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar" data-astro-cid-y55gmoyq>
Foto de perfil
</label> <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" name="user_avatar" type="file" required data-astro-cid-y55gmoyq> <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help" data-astro-cid-y55gmoyq> ${" "}
Peso Maximo 30KB y formatos: jpeg/png/webp
</div> <div class="mt-1 text-xs text-gray-400 dark:text-gray-300" id="user_avatar_help" data-astro-cid-y55gmoyq> ${" "}
Pagina para reducir peso de tu imagen -
<a href="https://squoosh.app/" class="underline text-blue-700" data-astro-cid-y55gmoyq>
squoosh.app/
</a>${" "} </div> </div> <button id="submit" type="button" class="bg-lime-500 text-white px-5 py-2 mt-5 rounded-lg" data-astro-cid-y55gmoyq>
Completar perfil
</button> </form> <div id="small-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" data-astro-cid-y55gmoyq> ${renderComponent($$result2, "ErrorModal", $$ErrorModal, { "data-astro-cid-y55gmoyq": true })} </div> </section>` : renderTemplate`<section class="flex flex-wrap h-full justify-center mx-auto my-10 lg:my-20 gap-10 px-7" data-astro-cid-y55gmoyq> ${renderComponent($$result2, "UserDetails", $$UserDetails, { "image": image, "data": data[0], "data-astro-cid-y55gmoyq": true })} ${renderComponent($$result2, "UserArticles", $$UserArticles, { "contributions": contributions, "type": "owner", "data-astro-cid-y55gmoyq": true })} </section>`}` })}  ${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/dashboard/index.astro", undefined);
const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
