import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CFhhkThP.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_hdbVl3pW.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/programacion/Sanss/BiblioVet/bibliovet/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/check-nickname","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/check-nickname\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"check-nickname","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/check-nickname.ts","pathname":"/api/check-nickname","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/follow-actions","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/follow-actions\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"follow-actions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/follow-actions.ts","pathname":"/api/follow-actions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/profile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/profile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/profile.ts","pathname":"/api/profile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/update-all-user","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/update-all-user\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"update-all-user","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/update-all-user.ts","pathname":"/api/update-all-user","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"}],"routeData":{"route":"/auth/register","isIndex":false,"type":"page","pattern":"^\\/auth\\/register\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/register.astro","pathname":"/auth/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"}],"routeData":{"route":"/auth/signin","isIndex":false,"type":"page","pattern":"^\\/auth\\/signin\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/signin.astro","pathname":"/auth/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":".header[data-astro-cid-dvaxi3yn]{background-color:rgba(23,23,23,calc(1 - var(--scroll-progress)));-webkit-backdrop-filter:blur(calc(12px * var(--scroll-progress)));backdrop-filter:blur(calc(12px * var(--scroll-progress)));transition:background-color .3s ease,-webkit-backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease}\n"}],"routeData":{"route":"/biologia","isIndex":false,"type":"page","pattern":"^\\/biologia\\/?$","segments":[[{"content":"biologia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/biologia.astro","pathname":"/biologia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":".header[data-astro-cid-cnl2huly]{background-color:rgba(23,23,23,calc(1 - var(--scroll-progress)));-webkit-backdrop-filter:blur(calc(12px * var(--scroll-progress)));backdrop-filter:blur(calc(12px * var(--scroll-progress)));transition:background-color .3s ease,-webkit-backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease}.follow-button[data-astro-cid-kkdzgqi5]:hover{--tw-bg-opacity: 1;background-color:rgb(67 56 202 / var(--tw-bg-opacity, 1))}.unfollow-button[data-astro-cid-kkdzgqi5]:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1))}\n"},{"type":"external","src":"/_astro/index.sbS0K-s2.css"}],"routeData":{"route":"/dashboard","isIndex":true,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/index.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"}],"routeData":{"route":"/develop","isIndex":false,"type":"page","pattern":"^\\/develop\\/?$","segments":[[{"content":"develop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/develop.astro","pathname":"/develop","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":".header[data-astro-cid-dvaxi3yn]{background-color:rgba(23,23,23,calc(1 - var(--scroll-progress)));-webkit-backdrop-filter:blur(calc(12px * var(--scroll-progress)));backdrop-filter:blur(calc(12px * var(--scroll-progress)));transition:background-color .3s ease,-webkit-backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease}\n"}],"routeData":{"route":"/histologia","isIndex":false,"type":"page","pattern":"^\\/histologia\\/?$","segments":[[{"content":"histologia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/histologia.astro","pathname":"/histologia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":".header[data-astro-cid-dvaxi3yn]{background-color:rgba(23,23,23,calc(1 - var(--scroll-progress)));-webkit-backdrop-filter:blur(calc(12px * var(--scroll-progress)));backdrop-filter:blur(calc(12px * var(--scroll-progress)));transition:background-color .3s ease,-webkit-backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease}\n"}],"routeData":{"route":"/microbiologia","isIndex":false,"type":"page","pattern":"^\\/microbiologia\\/?$","segments":[[{"content":"microbiologia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/microbiologia.astro","pathname":"/microbiologia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":".header[data-astro-cid-dvaxi3yn]{background-color:rgba(23,23,23,calc(1 - var(--scroll-progress)));-webkit-backdrop-filter:blur(calc(12px * var(--scroll-progress)));backdrop-filter:blur(calc(12px * var(--scroll-progress)));transition:background-color .3s ease,-webkit-backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease}\n"}],"routeData":{"route":"/parasitologia","isIndex":false,"type":"page","pattern":"^\\/parasitologia\\/?$","segments":[[{"content":"parasitologia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/parasitologia.astro","pathname":"/parasitologia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"}],"routeData":{"route":"/testing","isIndex":false,"type":"page","pattern":"^\\/testing\\/?$","segments":[[{"content":"testing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testing.astro","pathname":"/testing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":".header[data-astro-cid-cnl2huly]{background-color:rgba(23,23,23,calc(1 - var(--scroll-progress)));-webkit-backdrop-filter:blur(calc(12px * var(--scroll-progress)));backdrop-filter:blur(calc(12px * var(--scroll-progress)));transition:background-color .3s ease,-webkit-backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease;transition:background-color .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease}.follow-button[data-astro-cid-kkdzgqi5]:hover{--tw-bg-opacity: 1;background-color:rgb(67 56 202 / var(--tw-bg-opacity, 1))}.unfollow-button[data-astro-cid-kkdzgqi5]:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1))}\n"}],"routeData":{"route":"/user/[id]","isIndex":false,"type":"page","pattern":"^\\/user\\/([^/]+?)\\/?$","segments":[[{"content":"user","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/user/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/register._tXxi5XD.css"},{"type":"inline","content":"body{height:100%;background-image:url(/images/campo.webp);background-repeat:no-repeat;background-position:center;background-size:100% auto;@media screen and (max-width: 500px){background-position:center left}@media screen and (max-width: 1670px){background-size:auto 100vh;@media screen and (max-height: 650px){background-size:100% auto}}@media screen and (min-width: 1670px) and (min-height: 1000px){background-size:auto 100vh}@media screen and (min-width: 1800px) and (min-height: 1000px){background-size:100% auto}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/auth/register.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/auth/signin.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/biologia.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/dashboard/index.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/develop.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/histologia.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/microbiologia.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/parasitologia.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/testing.astro",{"propagation":"none","containsHead":true}],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/user/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/check-nickname@_@ts":"pages/api/check-nickname.astro.mjs","\u0000@astro-page:src/pages/api/follow-actions@_@ts":"pages/api/follow-actions.astro.mjs","\u0000@astro-page:src/pages/api/profile@_@ts":"pages/api/profile.astro.mjs","\u0000@astro-page:src/pages/api/update-all-user@_@ts":"pages/api/update-all-user.astro.mjs","\u0000@astro-page:src/pages/auth/register@_@astro":"pages/auth/register.astro.mjs","\u0000@astro-page:src/pages/auth/signin@_@astro":"pages/auth/signin.astro.mjs","\u0000@astro-page:src/pages/biologia@_@astro":"pages/biologia.astro.mjs","\u0000@astro-page:src/pages/develop@_@astro":"pages/develop.astro.mjs","\u0000@astro-page:src/pages/histologia@_@astro":"pages/histologia.astro.mjs","\u0000@astro-page:src/pages/microbiologia@_@astro":"pages/microbiologia.astro.mjs","\u0000@astro-page:src/pages/parasitologia@_@astro":"pages/parasitologia.astro.mjs","\u0000@astro-page:src/pages/testing@_@astro":"pages/testing.astro.mjs","\u0000@astro-page:src/pages/user/[id]@_@astro":"pages/user/_id_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/dashboard/index@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","E:/programacion/Sanss/BiblioVet/bibliovet/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_lxjiSbBd.mjs","\u0000@astrojs-manifest":"manifest_5LZw0f-A.mjs","E:/programacion/Sanss/BiblioVet/bibliovet/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BOpPYTKn.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.l0sNRNKZ.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DFrTRJQw.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DuR9L1Y6.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/components/molecule/OptionCard.astro?astro&type=script&index=0&lang.ts":"_astro/OptionCard.astro_astro_type_script_index_0_lang.Bp9jYH8t.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/SocialHeader.astro?astro&type=script&index=0&lang.ts":"_astro/SocialHeader.astro_astro_type_script_index_0_lang.DuR9L1Y6.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/modals/ErrorModal.astro?astro&type=script&index=0&lang.ts":"_astro/ErrorModal.astro_astro_type_script_index_0_lang.BqaLI1yU.js","E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/profile/FollowButtons.astro?astro&type=script&index=0&lang.ts":"_astro/FollowButtons.astro_astro_type_script_index_0_lang.DFtNLMd8.js","E:/programacion/Sanss/BiblioVet/bibliovet/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.C88cKCaZ.js","@astrojs/preact/client.js":"_astro/client.D0DTxw9T.js","@components/organism/drawer":"_astro/drawer.BuLQ94Yx.js","@/components/reactComponents/contentTopic":"_astro/contentTopic.DY8mY_54.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/programacion/Sanss/BiblioVet/bibliovet/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts",""],["E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts","const p=document.getElementById(\"position\"),c=document.getElementById(\"semester-div\");p?.addEventListener(\"change\",e=>{e.target.value===\"Estudiante\"?(c?.classList.toggle(\"student\"),c?.classList.toggle(\"notStudent\")):c?.classList.add(\"notStudent\")});const v=document.getElementById(\"check-nickname\"),o=\"https://qpets.vercel.app\";v?.addEventListener(\"click\",async()=>{const e=document.getElementById(\"nickname\"),t=document.getElementById(\"check-alert\");if(!e.value){alert(\"El campo nickname no puede estar vacio\");return}const n=await fetch(`${o}/api/check-nickname`,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({nickname:e.value})}),{status:a}=await n.json();a?(e.classList.add(\"error\"),e.classList.remove(\"success\"),t.textContent=\"No es valido 😓 elige uno diferente\",t.classList.add(\"error\"),t.classList.remove(\"success\")):(e.classList.add(\"success\"),e.classList.remove(\"error\"),t.textContent=\"Es valido!\",t.classList.add(\"success\"),t.classList.remove(\"error\"))});const y=document.querySelector(\"#submit\");y?.addEventListener(\"click\",async()=>{const e=document.getElementById(\"name\"),t=document.getElementById(\"firstname\"),n=document.getElementById(\"nickname\"),a=document.getElementById(\"position\"),i=document.getElementById(\"semester\"),d=document.getElementById(\"university\"),l=document.getElementById(\"user_avatar\"),s=new FormData;s.append(\"name\",e.value),s.append(\"firstname\",t.value),s.append(\"nickname\",n.value),s.append(\"position\",a.value),s.append(\"semester\",i.value),s.append(\"university\",d.value),s.append(\"user_avatar\",l.files[0]);const r=await fetch(`${o}/api/update-all-user`,{method:\"POST\",body:s}),m=document.querySelector(\"#small-modal\"),{status:u}=await r.json();u?location.reload():m?.classList.toggle(\"hidden\")});"],["E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/Header.astro?astro&type=script&index=0&lang.ts","window.addEventListener(\"scroll\",function(){const o=document.querySelector(\".header\"),r=Math.min(window.scrollY/1e3,1).toString();o.style.setProperty(\"--scroll-progress\",r)});"],["E:/programacion/Sanss/BiblioVet/bibliovet/src/components/molecule/OptionCard.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super();const t=this.dataset.link;this.addEventListener(\"click\",()=>{window.location.href=t})}}customElements.define(\"option-card\",e);"],["E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/SocialHeader.astro?astro&type=script&index=0&lang.ts","window.addEventListener(\"scroll\",function(){const o=document.querySelector(\".header\"),r=Math.min(window.scrollY/1e3,1).toString();o.style.setProperty(\"--scroll-progress\",r)});"],["E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/modals/ErrorModal.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#small-modal\"),o=document.querySelector(\"#errorModalButton\");o.addEventListener(\"click\",()=>{e.classList.add(\"hidden\")});"],["E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/profile/FollowButtons.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"follow-button\"),o=document.querySelector(\"#follow-button-svg\"),e=document.querySelector(\"#friend-badge\");t.dataset.followState==\"follow\"?(o.classList.remove(\"hidden\"),t.classList.add(\"follow-button\")):(e.classList.remove(\"hidden\"),t.classList.add(\"unfollow-button\"));t.addEventListener(\"click\",async()=>{const l=document.querySelector(\"#follow-button span\"),s=\"https://qpets.vercel.app\";t.dataset.followState==\"follow\"?(await fetch(`${s}/api/follow-actions`,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({follow_state:t.dataset.followState,following_id:t.dataset.userId})}),t.dataset.followState=\"unfollow\",l.innerHTML=\"Dejar de seguir\",o.classList.add(\"hidden\"),e.classList.remove(\"hidden\"),t.classList.remove(\"follow-button\"),t.classList.add(\"unfollow-button\")):(await fetch(`${s}/api/follow-actions`,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({follow_state:t.dataset.followState,following_id:t.dataset.userId})}),t.dataset.followState=\"follow\",l.innerHTML=\"Seguir\",o.classList.remove(\"hidden\"),e.classList.add(\"hidden\"),t.classList.remove(\"unfollow-button\"),t.classList.add(\"follow-button\"))});"]],"assets":["/_astro/index.sbS0K-s2.css","/_astro/register._tXxi5XD.css","/favicon.svg","/images/campo.webp","/images/vaca192.webp","/images/vaca512.webp","/_astro/client.D0DTxw9T.js","/_astro/contentTopic.DY8mY_54.js","/_astro/drawer.BuLQ94Yx.js","/_astro/hooks.module.DpvEAJYN.js","/_astro/jsxRuntime.module.DaX71tcn.js","/_astro/Layout.astro_astro_type_script_index_0_lang.BOpPYTKn.js","/_astro/preact.module.mNte_dLy.js","/_astro/signals.module.C88cKCaZ.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"w7DOND7jGsbPZEkxoGjCsc1NdmovVEoAsKUh9lVS5Oo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
