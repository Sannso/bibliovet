import{u as t,a as m,t as f,b as u}from"./jsxRuntime.module.DaX71tcn.js";import{h as d}from"./hooks.module.DpvEAJYN.js";import{k as a}from"./preact.module.mNte_dLy.js";const p={title:"Parasitología",sinseleccion:"Aún no has seleccionado ningún tema"};function y({text:i}){return t("p",{class:"text-gray-400 text-justify font-mono text-lg",children:i})}function b({info:i}){return t("article",{class:"flex flex-col gap-2",children:[t("h3",{class:"text-gray-400 font-semibold font-mono text-lg",children:i.subtitle}),i&&i.texts.map(e=>t("p",{class:"text-gray-400 text-justify font-mono text-lg",children:e}))]})}function w({info:i}){return t("ul",{class:"flex flex-col gap-4",children:i&&i.items.map(e=>t("li",{class:"text-gray-400 text-justify pl-3 md:pl-10 font-mono text-lg",children:["- ",e]}))})}function N(){return t("svg",{class:"w-4 h-4 text-neutral-800  dark:text-neutral-300 rtl:rotate-180 hover:text-neutral-500 dark:hover:text-neutral-200 transition-colors","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 1 1 5l4 4"})})}function j(){return t("svg",{class:"w-4 h-4 text-neutral-800  dark:text-neutral-300 rtl:rotate-180 hover:text-neutral-500 dark:hover:text-neutral-200 transition-colors","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})})}function x({info:i}){const[e,n]=d(0),[l,s]=d(""),g=()=>{s("prev"),n(o=>o===0?i.imgs.length-1:o-1)},h=()=>{s("next"),n(o=>o===i.imgs.length-1?0:o+1)};let c=i.id.replace(/ /g,""),r="";return i.size==="small"?r="12rem":i.size==="medium"?r="15rem":i.size==="big"&&(r="18rem"),t(a,{children:[t("div",{className:"image-gallery mx-3 backdrop-blur-md bg-neutral-800 bg-opacity-20 rounded-lg shadow-lg",children:[t("div",{id:`id-${r}-${c}`,className:"image-gallery-container",children:[t("img",{src:i.imgs[e],alt:`Image ${e+1}`,className:`gallery-image animate-once animate-ease-in-out ${l?l==="prev"?"animate-fade-left":"animate-fade-right":""}`,onAnimationEnd:()=>s("")}),t("button",{className:"nav-button prev-button",onClick:g,children:t(N,{})}),t("button",{className:"nav-button next-button",onClick:h,children:t(j,{})})]}),t("style",{jsx:!0,children:`
          .image-gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .image-gallery-container {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            border-radius: 0.5rem;
            overflow: hidden;
          }
          #id-${r}-${c} {
            height: ${r};
          }
          .nav-button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 9999px;
            border: none;
            color: white;
            width: 2.5rem;
            height: 2.5rem;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .nav-button:hover {
            background: rgba(0, 0, 0, 0.6);
          }
          .prev-button {
            left: 5px;
          }
          .next-button {
            right: 5px;
          }
          .gallery-image {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
          }
        `})]}),t("p",{className:`text-zinc-600 pl-5 mt-1 w-auto text-ellipsis ${i.size==="small"?"line-clamp-3":"line-clamp-2"} `,style:`${i.size==="small"?"height: 4.4rem;":"height: 3rem;"} `,children:["Figura: ",Array.isArray(i.alt)?i.alt[e]:i.alt]})]})}function k({info:i}){return t("section",{className:"flex flex-col mt-14",children:[t("h3",{className:"text-gray-400 text-justify font-mono font-semibold italic text-xl mb-5",children:i.family}),i.species.map(e=>t("section",{className:"flex flex-col gap-4 mb-16 last:mb-0",children:[t("h4",{className:"text-lime-900 text-justify font-mono font-semibold italic text-lg pl-5",children:e.title}),t("p",{className:"text-gray-400 text-justify font-mono text-lg",children:e.textImg.text}),e.textImg.img.length>0&&t("article",{className:"mx-auto h-full flex flex-col justify-center just-phone:w-full md:h-3/6 md:w-3/6",children:e.textImg.img.length>1?t(x,{info:{imgs:e.textImg.img,alt:e.textImg.alt,id:e.title,size:"big"}}):t(a,{children:[t("img",{src:e.textImg.img,alt:e.textImg.alt,className:"rounded-md md:mt-4"}),t("p",{className:"text-zinc-600",children:["Figura: ",e.textImg.alt]})]})}),t("article",{className:"flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-10 md:gap-20 mt-10",children:[t("section",{className:"just-phone:flex just-phone:items-end just-phone:gap-4 just-phone:flex-col-reverse",children:[e.sintomas.img.length>0&&t("div",{className:"flex flex-col mx-auto md:mx-0 w-72 md:w-64 md:float-right",children:e.sintomas.img.length>1?t(x,{info:{imgs:e.sintomas.img,alt:e.sintomas.alt,id:e.title,size:"small"}}):t(a,{children:[t("img",{src:e.sintomas.img,alt:e.sintomas.alt,className:"ml-4 rounded-md md:mt-4"}),t("p",{className:"text-zinc-600 pl-5",children:["Figura: ",e.sintomas.alt]})]})}),t("p",{className:"text-gray-400 text-justify font-mono text-lg",children:[t("strong",{className:"text-rose-900 font-mono font-semibold italic",children:"Síntomas clínicos:"})," ",e.sintomas.text]})]}),t("section",{children:t("p",{className:"text-gray-400 text-justify font-mono text-lg",children:[t("strong",{className:"text-indigo-700 font-mono font-semibold italic",children:"Tratamiento:"})," ",e.tratamiento.text]})})]}),t("hr",{className:"my-6 border-zinc-400 w-full mx-auto dark:border-zinc-800 mt-16"})]}))]})}function I({info:i}){return t("h3",{className:"text-gray-400 text-justify font-bold font-mono text-xl mt-5",children:i.title})}function A(){const i=m(f),e=m(u);return t("div",{children:i<100?t("section",{className:"flex relative h-full w-full justify-center items-center mx-auto",children:t("h2",{className:"text-white text-center font-bold font-mono text-xl mt-52 w-64",children:p.sinseleccion})}):t("section",{className:"flex flex-col justify-center max-w-5xl mx-auto px-8 mt-10 gap-4",children:[t("h2",{className:"text-gray-300 text-justify font-bold font-mono text-xl",children:"title"in e&&e.title}),"content"in e&&e.content.intro.map((n,l)=>n.type==="normal"&&"text"in n?t(y,{text:n.text},l):n.type==="with-subtitle"&&"texts"in n?t("section",{class:"flex flex-col mt-8",children:t(b,{info:n},l)}):n.type==="list"&&"items"in n?t(w,{info:n},l):n.type==="family"&&"species"in n?t(k,{info:n},l):n.type==="title"&&"title"in n?t(I,{info:n},l):t("p",{class:"text-gray-400 text-justify font-mono text-lg",children:"Formato No Valido"}))]})})}export{A as ContentTopic};
