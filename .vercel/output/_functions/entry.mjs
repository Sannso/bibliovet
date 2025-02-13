import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D-wC-ThZ.mjs';
import { manifest } from './manifest_C2jgyFfE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/register.astro.mjs');
const _page2 = () => import('./pages/api/auth/signin.astro.mjs');
const _page3 = () => import('./pages/api/auth/signout.astro.mjs');
const _page4 = () => import('./pages/api/check-nickname.astro.mjs');
const _page5 = () => import('./pages/api/follow-actions.astro.mjs');
const _page6 = () => import('./pages/api/profile.astro.mjs');
const _page7 = () => import('./pages/api/update-all-user.astro.mjs');
const _page8 = () => import('./pages/auth/register.astro.mjs');
const _page9 = () => import('./pages/auth/signin.astro.mjs');
const _page10 = () => import('./pages/biologia.astro.mjs');
const _page11 = () => import('./pages/dashboard.astro.mjs');
const _page12 = () => import('./pages/develop.astro.mjs');
const _page13 = () => import('./pages/histologia.astro.mjs');
const _page14 = () => import('./pages/microbiologia.astro.mjs');
const _page15 = () => import('./pages/parasitologia.astro.mjs');
const _page16 = () => import('./pages/testing.astro.mjs');
const _page17 = () => import('./pages/user/_id_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/register.ts", _page1],
    ["src/pages/api/auth/signin.ts", _page2],
    ["src/pages/api/auth/signout.ts", _page3],
    ["src/pages/api/check-nickname.ts", _page4],
    ["src/pages/api/follow-actions.ts", _page5],
    ["src/pages/api/profile.ts", _page6],
    ["src/pages/api/update-all-user.ts", _page7],
    ["src/pages/auth/register.astro", _page8],
    ["src/pages/auth/signin.astro", _page9],
    ["src/pages/biologia.astro", _page10],
    ["src/pages/dashboard/index.astro", _page11],
    ["src/pages/develop.astro", _page12],
    ["src/pages/histologia.astro", _page13],
    ["src/pages/microbiologia.astro", _page14],
    ["src/pages/parasitologia.astro", _page15],
    ["src/pages/testing.astro", _page16],
    ["src/pages/user/[id].astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "79e35d0f-1201-484e-881a-49f2e0dc5985",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
