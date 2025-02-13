import { c as createComponent, r as renderTemplate, f as renderScript, m as maybeRenderHead, a as createAstro, g as renderComponent, b as addAttribute } from './astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import 'clsx';
import { h as header } from './es_BWUqs16E.mjs';
/* empty css                         */
import { R as RightIcon } from './homeIcons_Dsrvimhv.mjs';
import { s as supabase } from './supabase_DGtTifTM.mjs';
import { g as getSession } from './helpers_C4tQHmo0.mjs';
import { jsxs, jsx } from 'preact/jsx-runtime';

const $$SocialHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/SocialHeader.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<header class="header flex items-center justify-between sticky h-12 md:h-14 px-5 top-0 shadow-lg w-full text-white z-50" data-astro-cid-cnl2huly> <div data-astro-cid-cnl2huly></div> <a href="/" class="font-bold text-lg absolute left-2/4 -translate-x-2/4 hover:scale-110 transition-transform" data-astro-cid-cnl2huly> ${header.title} </a> <form action="/api/auth/signout" data-astro-cid-cnl2huly> <button class="text-red-500 opacity-70 font-semibold backdrop-blur-md bg-white bg-opacity-5 rounded-xl shadow-lg px-2.5 py-0.5 hover:bg-opacity-10 transition-colors text-sm lg:text-base" type="submit" data-astro-cid-cnl2huly>Cerrar Sesión</button> </form> </header> `;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/SocialHeader.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContributionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContributionCard;
  const { data } = Astro2.props;
  return renderTemplate`${data.type == "bibliovet" && renderTemplate`${maybeRenderHead()}<div class="flex justify-around gap-1 w-full max-w-sm p-4 bg-lime-500 hover:bg-lime-800 transition-colors backdrop-blur-md bg-opacity-65 shadow-md rounded-lg"><section class="flex flex-col w-11/12 "><h3 class="text-lg text-lime-100 font-bold">${data.title}</h3><p class="text-sm text-gray-300 line-clamp-2 text-ellipsis break-words">${data.introduction}</p></section><aside class="flex h-full w-auto items-center text-gray-200 hover:text-neutral-900 transition-colors">${renderComponent($$result, "RightIcon", RightIcon, { "size": 24 })}</aside></div>`}${data.type == "blog" && renderTemplate`<div class="flex justify-around gap-1 w-full max-w-sm p-4 bg-indigo-600 hover:bg-indigo-900 transition-colors backdrop-blur-md bg-opacity-65 shadow-md rounded-lg"><section class="flex flex-col w-11/12"><h3 class="text-lg text-indigo-100 font-bold">${data.title}</h3><p class="text-sm text-gray-300 line-clamp-2 text-ellipsis">${data.introduction}</p></section><aside class="flex h-full items-center text-gray-200 hover:text-neutral-900 transition-colors">${renderComponent($$result, "RightIcon", RightIcon, { "size": 24 })}</aside></div>`}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/molecule/ContributionCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$UserArticles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserArticles;
  const { contributions, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full min-h-48 lg:w-96 lg:h-[480px] p-8 pr-1 flex-col items-center backdrop-blur-md bg-white bg-opacity-5 rounded-xl shadow-lg text-lime-500  font-bold text-xl"> <h2 class="pr-7 text-2xl">${type == "visitor" ? "Sus Art\xEDculos" : "Mis Art\xEDculos"}</h2> ${contributions.length > 0 ? renderTemplate`<div class="flex flex-col w-full h-full items-center mt-5 gap-3 overflow-x-hidden overflow-y-auto pr-6"> ${contributions.map((contribution) => renderTemplate`${renderComponent($$result, "ContributionCard", $$ContributionCard, { "data": contribution })}`)} </div>` : renderTemplate`<div class="flex flex-col items-center w-full h-full justify-center text-white pr-7"> <p>${type == "visitor" ? "A\xFAn no tiene art\xEDculos." : "No tienes art\xEDculos."}</p> </div>`} </section>`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/profile/UserArticles.astro", void 0);

function Plus({
  size,
  stroke
}) {
  return jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": stroke,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "icon icon-tabler icons-tabler-outline icon-tabler-plus",
    children: [jsx("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }), jsx("path", {
      d: "M12 5l0 14"
    }), jsx("path", {
      d: "M5 12l14 0"
    })]
  });
}

const $$Astro$1 = createAstro();
const $$FollowButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FollowButtons;
  const { buttonState, id, buttonContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-1" data-astro-cid-kkdzgqi5> <div id="friend-badge" class="hidden bg-indigo-700 text-white px-2 py-0.5 rounded-lg mt-5 font-bold text-sm" data-astro-cid-kkdzgqi5>
Amigos
</div> <button id="follow-button"${addAttribute(buttonState, "data-follow-state")}${addAttribute(id, "data-user-id")} class="flex items-center bg-lime-500 px-2 py-0.5 rounded-lg mt-5 font-bold text-sm hover:text-white transition-all" data-astro-cid-kkdzgqi5> <span class="mr-1" data-astro-cid-kkdzgqi5>${buttonContent}</span> <div id="follow-button-svg" class="hidden" data-astro-cid-kkdzgqi5> ${renderComponent($$result, "Plus", Plus, { "size": 18, "stroke": 3, "data-astro-cid-kkdzgqi5": true })} </div> </button> </div>  ${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/profile/FollowButtons.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/profile/FollowButtons.astro", void 0);

const $$Astro = createAstro();
const $$UserDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UserDetails;
  const { image, data, type = "owner" } = Astro2.props;
  let buttonState = "follow";
  let buttonContent = "Seguir";
  const sessionData = await getSession(Astro2.cookies);
  const { data: followData } = await supabase.from("followers").select().match({
    user_uuid: sessionData.session.data.user.id,
    follower_uuid: data.uuid
  });
  if (followData.length > 0) {
    buttonState = "unfollow";
    buttonContent = "Dejar de seguir";
  }
  return renderTemplate`${maybeRenderHead()}<section class="flex h-auto lg:h-[480px] w-auto p-10 flex-col items-center justify-center backdrop-blur-md bg-white bg-opacity-5 rounded-xl shadow-lg"> <div class="w-32 h-32 rounded-full overflow-hidden"> <img class="w-full h-full object-cover object-top"${addAttribute(image, "src")} alt="profile-user"> </div> <div class="flex flex-col items-center text-white mt-5"> <p class="text-2xl font-bold uppercase text-lime-500"> ${data.name} ${data.firstname} </p> <p class="text-base opacity-80">${data.position}</p> <div class="flex flex-col mt-5 gap-1 items-center"> <p class="text-base opacity-80">${data.university}</p> ${data.position == "Estudiante" && renderTemplate`<p class="text-base opacity-80">${data.semester} Semestre</p>`} </div> </div> <div${addAttribute(`grid grid-cols-3 mt-8 gap-5 [&_div]:flex [&_div]:flex-col [&_div]:items-center
           text-white [&_h3]:text-lime-500 
           [&_p]:opacity-60 [&_p]:text-sm `, "class")}> <div> <h3 class="text-2xl font-bold">${data.following}</h3> <p class="text-base opacity-80">Seguidos</p> </div> <div> <h3 class="text-2xl font-bold">${data.followers}</h3> <p class="text-base opacity-80">Seguidores</p> </div> <div> <h3 class="text-2xl font-bold">${data.rating}</h3> <p class="text-base opacity-80">Reputacion</p> </div> </div> ${type == "visitor" && renderTemplate`${renderComponent($$result, "FollowButtons", $$FollowButtons, { "buttonState": buttonState, "id": data.id, "buttonContent": buttonContent })}`} </section>`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/profile/UserDetails.astro", void 0);

export { $$SocialHeader as $, $$UserDetails as a, $$UserArticles as b };
