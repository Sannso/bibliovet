/* empty css                                    */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7Jh5Z2yE.mjs';
export { renderers } from '../renderers.mjs';

const $$Develop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Develop Documentation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center max-w-4xl mt-10 gap-12 mx-auto"> <h1 class="text-blue-600 font-bold text-3xl">Informacion del desarollo de la pagina</h1> <article class="flex flex-col gap-3 text-gray-300"> <h2 class="text-blue-600 font-bold text-lg">Pagina principal</h2> <p>Simplemente aqui estan los temas que maneja actualmente la app, esta informacion esta en es.js</p> </article> <article class="flex flex-col gap-3 text-gray-300"> <h2 class="text-blue-600 font-bold text-lg">Tema Seleccionado</h2> <p>Toda esta informacion esta en bd.js, el cual esta organizado por las categorias.</p> <p>Segun el tema seleccionado la informacion se guardara en la seccion de topics, y cada topic puede tener subtopics.</p> <p>Cada topic o tema especifico, tiene titulo y el contenido tiene: <strong>tipo</strong>, el cual especifica como se debe organizar el parrafo, y el texto o textos.</p> </article> <article class="flex flex-col gap-3 text-gray-300"> <h2 class="text-blue-600 font-bold text-lg">Funcionamiento del store</h2> <p>Al momento de cargar el tema, la pagina envia el index de la categoria, esto se envia al header y lo maneja el componente de drawer que es el que contendra los temas de la categoria y ese es el que carga de bd.json</p> <p>Aqui en el Drawer como ya tiene <strong>TODA</strong> la informacion del tema, traida de "bd", comienza a cargar cada seccion o topic, el cual tambien puede ser un titulo con subtopics, y asi sucesivamente </p> <p>Al cargar el topic se le envia toda la informacion, el titulo y su contenido, ademas de un id, este para manejar los cambios visualez al dar click en este boton</p> <p>Al darl click en el topic, se carga su informacion en el "store" con la libreria de preact. Al mismo momento en otro componente que es el que muestra la informacion en la pagina, carga la informacion del topic y maneja cada parrafo segun el formato que tenga especificado.</p> </article> </main> ` })}`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/develop.astro", void 0);

const $$file = "E:/programacion/Sanss/BiblioVet/bibliovet/src/pages/develop.astro";
const $$url = "/develop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Develop,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
