import { c as createComponent, a as createAstro, r as renderTemplate, f as renderScript, m as maybeRenderHead, g as renderComponent } from './astro/server_B7PLLljb.mjs';
import 'kleur/colors';
import { h as header, p as parasitologia } from './es_BWUqs16E.mjs';
import { jsxs, jsx, Fragment } from 'preact/jsx-runtime';
/* empty css                            */
import 'clsx';
import { atom, listenKeys } from 'nanostores';
import { useState, useEffect } from 'preact/hooks';

function DropInfo() {
  return jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    class: "icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium",
    children: [jsx("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }), jsx("path", {
      d: "M4 20h16"
    }), jsx("path", {
      d: "M4 12h16"
    }), jsx("path", {
      d: "M4 4h16"
    })]
  });
}

function DropIcon() {
  return jsx("svg", {
    class: "w-3 h-3",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 10 6",
    children: jsx("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m1 1 4 4 4-4"
    })
  });
}
function CloseIcon() {
  return jsx("svg", {
    class: "w-3 h-3",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 14",
    children: jsx("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    })
  });
}

atom(-1);
const topicID = atom(99);

const topicInformation = atom({});

function useStore(store, opts = {}) {
  let [, forceRender] = useState({});
  let [valueBeforeEffect] = useState(store.get());

  useEffect(() => {
    valueBeforeEffect !== store.get() && forceRender({});
  }, []);
  
  useEffect(() => {
    let batching, timer, unlisten;
    let rerender = () => {
      if (!batching) {
        batching = 1;
        timer = setTimeout(() => {
          batching = undefined;
          forceRender({});
        });
      }
    };
    if (opts.keys) {
      unlisten = listenKeys(store, opts.keys, rerender);
    } else {
      unlisten = store.listen(rerender);
    }
    return () => {
      unlisten();
      clearTimeout(timer);
    }
  }, [store, '' + opts.keys]);

  return store.get()
}

function Topic({
  topicInfo,
  id
}) {
  const $topicID = useStore(topicID);
  const topicLabel = `drawer-${id}`;
  const buttonStyle = "flex w-full px-3 py-2 items-center text-gray-900 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 transition-colors";
  const isThisTopicSelected = $topicID == id;
  return jsx("li", {
    children: jsx("button", {
      onClick: () => {
        topicID.set(id);
        topicInformation.set(topicInfo);
      },
      id: topicLabel,
      "data-drawer-hide": "drawer-navigation",
      "aria-controls": "drawer-navigation",
      type: "button",
      className: `${buttonStyle} ${isThisTopicSelected && "bg-neutral-800"}`,
      children: jsx("span", {
        class: "truncate text-sm",
        children: topicInfo.title
      })
    })
  });
}

function Topics({
  mytopic,
  subtopics
}) {
  const dropdownId = `dropdow-${mytopic}`;
  return jsxs("li", {
    children: [jsxs("button", {
      type: "button",
      class: "flex items-center w-full px-3 py-2 text-base text-gray-900 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 transition-colors ",
      "aria-controls": dropdownId,
      "data-collapse-toggle": dropdownId,
      children: [jsx("span", {
        class: "flex-1 text-sm text-left rtl:text-right whitespace-nowrap",
        children: mytopic
      }), jsx(DropIcon, {})]
    }), jsx("ul", {
      id: dropdownId,
      class: "hidden py-2 space-y-2 pl-5",
      children: subtopics && subtopics.map((value) => "subtopics" in value ? jsx(Topics, {
        mytopic: value.title,
        subtopics: value.subtopics
      }, value.id) : jsx(Topic, {
        id: value.id,
        topicInfo: value
      }, value.id))
    })]
  });
}

const categorys = /* #__PURE__ */ JSON.parse("[{\"id\":0,\"category\":\"Parasitología\",\"topics\":[{\"id\":100,\"title\":\"Artrópodos\",\"subtopics\":[{\"id\":103,\"title\":\"¿Qué son los artrópodos?\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"Son animales invertebrados que se caracterizan por tener un exoesqueleto, su cuerpo dividido en segmentos y apéndices articulados. El grupo de los artrópodos se compone de diversos organismos, como los insectos, los arácnidos y los crustáceos, se sabe que existen más de un millón de especies y se estima que hay entre cinco y diez millones. Estos animales se encuentran en casi todos los ecosistemas del planeta, cumpliendo diversas funciones tróficas que pueden ser tanto benéficas como nocivas.\"}]}},{\"id\":104,\"title\":\"Morfología\",\"content\":{\"intro\":[{\"type\":\"with-subtitle\",\"subtitle\":\"Anatomía externa\",\"texts\":[\"El cuerpo de los artrópodos está cubierto por una cutícula compuesta de proteínas y quitina, la cual es segregada por las glándulas quitinógenas. Cada segmento está conformado por una placa dorsal denominada “tergo”, una placa ventral “esternón” y dos laterales denominados “pleuras”. \"]},{\"type\":\"with-subtitle\",\"subtitle\":\"Sistema nervioso\",\"texts\":[\"Tiene sistema nervioso central conformado por los ganglios superesofágicos (proto-, deuto-, y tritocerebro) y una cadena de ganglios ventrales que incluye de 8 a 11 ganglios abdominales. El sistema nervioso sensorial que comprende estructuras como los sensilios, que son modificaciones del tegumento, estos se pueden encontrar en los ojos que pueden ser simples o compuestos y están constituidos por un cristalino y la retina.\"]},{\"type\":\"with-subtitle\",\"subtitle\":\"Aparato circulatorio\",\"texts\":[\"Su aparato circulatorio es incompletamente cerrado, el corazón es tubular y dorsal, con siete cámaras dotadas de ostiolos los cuales permiten la entrada de hemolinfa al corazón. \"]},{\"type\":\"with-subtitle\",\"subtitle\":\"Aparato digestivo\",\"texts\":[\"Tiene un aparato digestivo completo, sus piezas bucales están adaptadas para la masticación y succión. Está formado por el estomodeo, mesenterón y proctodeo.\"]},{\"type\":\"with-subtitle\",\"subtitle\":\"Aparato respiratorio\",\"texts\":[\"El sistema respiratorio está compuesto por tráqueas para el intercambio gaseoso, aunque algunos pueden realizar el intercambio gaseoso a través del tegumento.\"]},{\"type\":\"with-subtitle\",\"subtitle\":\"Aparato excretor\",\"texts\":[\"Por último está el aparato excretor conformado por los tubos de malpighi.\",\"Los artrópodos de interés en la medicina veterinaria pertenecen a la clase Insecta, Arachnida, Crustacea y Diplopoda.\"]}]}},{\"id\":105,\"title\":\"Clase ARACHNIDA\",\"subtopics\":[{\"id\":106,\"title\":\"Ácaros\",\"content\":{\"intro\":[{\"type\":\"title\",\"title\":\"Suborden Astigmata, ácaros astigmátidos\"},{\"type\":\"list\",\"items\":[\"No contienen estigmas y su respiración es tegumentaria.\",\"En este orden se encuentran los ácaros de la sarna (Familias Sarcoptidae, Knemidocoptidae y Psoroptidae). La sarna es una enfermedad donde los animales presentan prurito, alopecia e hiperplasia epidérmica con descamación. Los animales se rascan hasta provocarse heridas más profundas y serosanguinolentas, lo que podría provocar infecciones bacterianas secundarias y complicar su estado de salud.\",\"El método diagnóstico ideal consiste en sumergir una hoja de bisturí en glicerina, realizar un raspado suavemente en la zona afectada hasta que comience a salir sangre de la abrasión. Los detritos transferidos en la hoja con glicerina se depositan a un portaobjetos donde se observarán en el microscopio para buscar los ácaros.\"]},{\"type\":\"family\",\"family\":\"Familia Sarcoptidae\",\"species\":[{\"title\":\"Sarcoptes Scabiei\",\"textImg\":{\"text\":[\"Agente causal de la sarna sarcóptica en perros, zorros, caballos, vacunos, etc. y de la escabiosis en humanos. Es un ácaro que excava túneles por debajo de la capa superficial de la piel (estrato córneo) y allí depositan sus huevos, lo que provoca irritación y daño en la piel. La presencia de los ácaros, huevos, larvas y heces desencadenan una respuesta inmunológica en el huésped, provocando inflamación, enrojecimiento y picazón intensa.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sarcoptes.webp\"],\"alt\":[\"Sarcoptes macho (izquierda) y Sarcoptes hembra (derecha)\"]},\"sintomas\":{\"text\":[\"Los animales que presentan esta infestación muestran signos como prurito intenso, enrojecimiento de la piel, pérdida de pelo, erupciones y formación de costras. Los ácaros son más activos en áreas como las orejas, el abdomen, las patas y los codos.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/perrosarcoptesscabei.webp\"],\"alt\":\"Canino con sarna sarcóptica\"},\"tratamiento\":{\"text\":[\"En caninos, el mejor tratamiento de elección es la selamectina. Se puede administrar moxidectina (2,5% peso/vol), aplicación subcutánea de ivermectina. También se puede aplicar otros acaricidas eficaces como el amitraz, benzoato de bencilo, sulfuro de lima, fosmet y la rotenona.\"],\"img\":\"\"}},{\"title\":\"Notoedres cati\",\"textImg\":{\"text\":[\"Es un parásito externo de los gatos, ratas y conejos. Causa sarna notoédrica en gatos, comenzando por el borde medial del pabellón auricular y posteriormente diseminándose por toda la oreja, cara y patas. Esta enfermedad parasitaria es muy contagiosa entre los gatos y puede afectar a los humanos. Cabe aclarar que no todos los casos de sarna en felinos son causados por este agente.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/notoedrescati.webp\"],\"alt\":[\"Notoedres macho (izquierda) y Notoedres hembra (derecha)\"]},\"sintomas\":{\"text\":[\"Las manifestaciones clinícas que presentan los gatos afectados por este ácaro son: prurito intenso, papulocostras eritematosas, alopecia, seborrea y pioderma. Si la enfermedad no es tratada a tiempo se puede cronificar presentando hiperqueratosis e hiperpigmentación.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/notoedrescatitratamiento.webp\"],\"alt\":\"Gato afectado por la sarna notoedrica causada por Notoedres cati\"},\"tratamiento\":{\"text\":[\"Administración de selamectina vía topica, ivermectina (0,3 mg/kp). Bañar al paciente, sumergirlo o lavarlo con sulfuro de lima en agua caliente. El tratamiento debe ser aplicado una vez a la semana por minímo 6 semanas. \"],\"img\":\"\"}}]},{\"type\":\"family\",\"family\":\"Familia Knemidocoptidae\",\"species\":[{\"title\":\"Knemidocoptes mutans\",\"textImg\":{\"text\":[\"Este ácaro también conocido como “ácaro de las patas escamosas” es el responsable de producir descamación en las patas de los pollos, pavos, faisanes y otras aves de corral, excavando surcos en la epidermis de las patas. Esto hace que las escamas se levanten y se desprendan, lo que causa que las patas se engrosen y se deformen, causando la patología conocida como “patas roñosas o sarnosas”, “patas elefantiasicas”. La infección se transmite de un ave a otra, cuando las escamas de las patas afectadas caen al suelo y otras aves la pisan. \"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/knemidocoptes.webp\"],\"alt\":[\"Macho (izquierda) y hembra (derecha) de Knemidocoptes mutans. Lesiones producidas en la pata de un pollo infestado (abajo).\"]},\"sintomas\":{\"text\":[\"Las aves infestadas presentan síntomas como las patas aumentadas de grosor con costras ásperas y espesas.\"],\"img\":[],\"alt\":\"\"},\"tratamiento\":{\"text\":[\"Primero se deben aislar las aves afectadas para evitar que sigan contagiando otras aves. Se puede administar piretroides, bromociclenos, organofosforados, etc. Sin embargo, el tratamiento de elección es el uso de ivermectina 0,2 mg/ kg pv, repetida a la semana, o también aplicarla directamente sobre la piel 0,4 - 20 mg/ kg pv. Para la eliminación de las costras se deben realizar lavados en caliente con soda caustica al 5%.\"],\"img\":\"\"}}]},{\"type\":\"family\",\"family\":\"Familia Psoroptidae\",\"species\":[{\"title\":\"Psoroptes equi\",\"textImg\":{\"text\":[\"Parásito externo que afecta principalmente a los caballos, agente productor de sarna psoroptica en la crin o cola de los equinos.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/psoroptesequi.webp\"],\"alt\":[\"ácaro psoroptes equi\"]},\"sintomas\":{\"text\":[\"La sarna psoroptica produce sintomas como la alopecia, descamación y picor excesivo.\"],\"img\":[],\"alt\":\"\"},\"tratamiento\":{\"text\":[\"Amitrax, lactonas macrocíclicas, organofosforados (para los establos), agua y ácidos grasos.\"],\"img\":\"\"}},{\"title\":\"Psoroptes Ovis\",\"textImg\":{\"text\":[\"Es el agente productor de sarna en ovinos. En lugar de excavar túneles en la epidermis, permanece en la base de los pelos y taladra la piel con sus quelíceros, utilizandolos como estilete. Su forma de alimentarse provoca un exudado seroso en la piel, que se endurece hasta formar costras. \"],\"img\":[],\"alt\":[\"\"]},\"sintomas\":{\"text\":[\"Los ovinos infestados presentan síntomas como el prurito intenso, lesiones cutáneas, alopecia y pérdida de condición corporal (debido al estrés). \"],\"img\":[],\"alt\":\"Sarna corióptica en bovinos\"},\"tratamiento\":{\"text\":[\"Amitrax, lactonas macrocíclicas, organofosforados (para los establos), agua y ácidos grasos.\"],\"img\":\"\"}},{\"title\":\"Chorioptes bovis\",\"textImg\":{\"text\":[\"Es un ectoparásito cosmopolita que infesta principalmente al ganado bovino, provocando sarna corióptica o sarna de las patas. Generalmente, se encuentra en la cola, región perineal y en las patas, donde se alimenta de los detritos epiteliales, ya que este ectoparásito no excava por debajo de la piel. Esta sarna suele aparecer en invierno y se manifiesta como una dermatitis superficial descamativa. Sin embargo, es más frecuente que la infestación sea asintomática.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/chorioptesbovis.webp\"],\"alt\":[\"Macho (izquierda) y hembra (centro) de Chorioptes. Derecha, Macho y deutoninfa de Chorioptes.\"]},\"sintomas\":{\"text\":[\"Puede haber prurito moderado, lesiones cutáneas y pérdida de pelo (alopecia), exudado seco.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sintomachoribovis1.webp\",\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sintomachoribovis2.webp\"],\"alt\":\"Sarna corióptica en bovinos\"},\"tratamiento\":{\"text\":[\"Administración de lactonas macrociclicas, amitraz, IGR, organofosforados para la estabulaciones ya que su incidencia aumenta en ellas.\"],\"img\":\"\"}},{\"title\":\"Otodectes cynotis\",\"textImg\":{\"text\":[\"Es un ácaro que parasita a caninos y felinos, es un habitante del conducto auditivo externo, Provoca otitis externa, ocasionando inflamación del conducto, acompañado de un exudado ceruminoso. Este parásito se alimenta de cera, aceites y detritos cutáneos en el canal auditivo de su huésped. Su presencia y actividad provocan irritación e inflamación, lo que puede provocar infecciones secundarias bacterianas o fúngicas.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/otodectescynotis.webp\",\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/otodectescynotis2.webp\"],\"alt\":[\"Macho de O. cynotis (izquierda) y hembra (derecha)\",\"Hembra y huevo de O. cynotis obtenidos de un exudado del canal auditivo de un gato\"]},\"sintomas\":{\"text\":[\"Los pacientes pueden presentar exudado céreo marrón, prurito intenso, otitis bilateral eritemo-ceruminosa. Por el prurito intenso, el paciente puede presentar lesiones perifericas por el rascado excesivo.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/otodectescynotissintomas1.webp\",\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/otodectescynotissintomas2.webp\"],\"alt\":\"Conductos auditivos de un perro (A) y un gato (B) con otitis eritemo-ceruminosa producido por Otodectes cynotis. El perro presenta cerumen y sangre en el canal auditivo y el gato presenta cerumen obscuro (Foto por MVZ. Susy Estefanía Hau Can).\"},\"tratamiento\":{\"text\":[\"El tratamiento en caninos y felinos se realiza administrando agentes ceruminolíticos para remover el cerumen, piretroides, lactonas macrociclicas (selamectina) e imidacoprid. \"],\"img\":\"\"}}]},{\"type\":\"title\",\"title\":\"Suborden Mesostigmata, ácaros mesostigmátidos\"},{\"type\":\"list\",\"items\":[\"Los ácaros mesostigmátidos se caracterizan por tener estigmas los cuales son orificios naturales para su respiración, a diferencia de los ácaros astigmátidos que su respiración es tegumentaria.\",\"En este suborden hablaremos de los ácaros de la familia Dermanyssidae y Varroidae.\"]},{\"type\":\"family\",\"family\":\"Familia Dermanyssidae\",\"species\":[{\"title\":\"Dermanyssus gallinae\",\"textImg\":{\"text\":[\"Estos ácaros, también conocidos como ácaros rojos de las aves, son los responsables de causar dermatitis en las patas, anemia y estrés.  Durante el día, se esconden en los nidos o superficies y, por la noche, atacan a las aves para alimentarse de su sangre. Los adultos de este género tienen la capacidad de extraer suficiente sangre como para causar la muerte en polluelos o bajar la producción de huevos. Los ácaros rojos también son vectores de enfermedades como el virus de la enfermedad de newcastle, el virus de la viruela aviar, Salmonella sp, etc. \"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/dermanysusgallinae1.webp\",\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/dermanysusgallinae2.webp\"],\"alt\":[\"ácaros rojos en superficies de un galpón\",\"Dermanyssus gallinae\"]},\"sintomas\":{\"text\":[\"Las aves pueden presentar estrés, picoteo excesivo, costras en sus patas, pérdida de plumas, irritación, palidez e inflamación de la piel.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/dermanysusgallinaesintomas.webp\"],\"alt\":\"Pollo de engorde con signos claros de anemia por los ácaros rojos\"},\"tratamiento\":{\"text\":[\"Moxadectina\"],\"img\":\"\"}}]},{\"type\":\"family\",\"family\":\"Familia Varroidae\",\"species\":[{\"title\":\"Varroa destructor\",\"textImg\":{\"text\":[\"Es un parásito externo que afecta a las abejas melíferas, es considerado uno de los principales problemas en la apicultura debido a su impacto devastador en las colonias de las abejas. Los ácaros parasitan las larvas de los zánganos y se reproducen dentro de las celdas operculadas de las obreras y los zánganos. Para poder alimentarse debe penetrar la piel inter segmentaria entre la esclerótica abdominal de las abejas adultas para ingerir la hemolinfa y tejidos grasos. Varroa destructor puede ser vector de distintas enfermedades virales: virus de las alas deformadas, virus de las parálisis agudas de las abejas, el virus de la parálisis aguda israelí y el virus de Cachemira.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/varroadestructor1.jpg\",\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/varroadestructor2.jpg\"],\"alt\":[\"Ácaro Varroa destructor\",\"Varroa en A. melifera. Fotografía cedida por  el Dr. Rob Manning\"]},\"sintomas\":{\"text\":[\"Muchas veces los signos clínicos se manifiestan por las enfermedades virales transmitidas que por el mismo parasitismo. Si no se hace un control de los parásitos adecuado, las colonias pueden acabarse entre 1 y 4 años.\"],\"img\":[],\"alt\":\"Pollo de engorde con signos claros de anemia por los ácaros rojos\"},\"tratamiento\":{\"text\":[\"Flumetrina, fluvalinato, ácido oxálico, ácido fórmico o timol.\"],\"img\":\"\"}}]},{\"type\":\"title\",\"title\":\"Suborden Prostigmata, ácaros prostigmátidos\"},{\"type\":\"family\",\"family\":\"Familia Demodicidae\",\"species\":[{\"title\":\"Demodex spp\",\"textImg\":{\"text\":[\"Las diferentes especies de ácaros del género demodex son habitantes comensales de la piel, que viven en los folículos pilosos y glándulas sebáceas en pequeñas cantidades. Suelen alimentarse de restos celulares y sebo. La patogenia se presenta por tres factores: primero, cuando hay un crecimiento anormal de la población de ácaros del género demodex dentro del folículo piloso (efecto mecánico); segundo, el efecto inmuno-patológico, que son producidos por los antígenos liberados por las mudas de los parásitos, productos de su metabolismo y lisis de los tejidos afectados; finalmente, por la ineficacia del sistema inmunitario de algunos animales. En humanos, la enfermedad que provoca es conocida como demodicosis, mientras que en animales se conoce como  sarna demodecia. La especie que se encarga de provocar demodicosis en humanos es Demodex folliculorum, mientras que en los caninos es Demodex canis; sin embargo hay posibilidades de que existen otras dos especies responsables de esta enfermedad: Demodex injai y Demodex cornei.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/demodexspp.webp\"],\"alt\":[\"Demodex folliculorum\"]},\"sintomas\":{\"text\":[\"Los animales afectados presentan: alopecia, hiperpigmentación, hiperqueratosis y mal olor. \"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/demodexsppsintomas.webp\"],\"alt\":\"Cánino con sarna demodécica\"},\"tratamiento\":{\"text\":[\"Amitrax, lactonas macrocíclicas, organofosforados, IGR, agua, ácidos graso.\"],\"img\":\"\"}}]},{\"type\":\"family\",\"family\":\"Familia Trombiculidae\",\"species\":[{\"title\":\"Trombicula spp\",\"textImg\":{\"text\":[\"Este ácaro se conoce como “ácaro de las cosechas” o “ácaro rojo”. Son más comunes en Europa y suelen ser más activos en verano y otoño. Solo las larvas son parásitas y se alimentan de la piel de diferentes animales, incluyendo los humanos. Las larvas permanecen durante varios días en la piel del hospedador, al picar inyecta su saliva y destruye las células del hospedador y el material que resulte, el ácaro lo consume. Provoca dermatitis en las zonas afectadas por el ácaro y un prurito muy intenso hasta que las niguas se desprendan.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/trombiculaspp.webp\"],\"alt\":[\"ácaro de Trombicula irritans\"]},\"sintomas\":{\"text\":[\"Los pacientes pueden presentar: Prurito intenso en: patas, abdomen, orejas y rostro; enrojecimiento e inflamación de la piel, presencia de pequeñas costras anaranjadas o rojas, perdida de pelo por el rascado excesivo.\"],\"img\":[],\"alt\":\"\"},\"tratamiento\":{\"text\":[\"Administrar pietrinas e ivermectina.\"],\"img\":\"\"}}]},{\"type\":\"family\",\"family\":\"Familia Tarsonemidae\",\"species\":[{\"title\":\"Acarapis woodi\",\"textImg\":{\"text\":[\"Es un ácaro que parasita las tráqueas de las abejas melíferas, pudiendo acumular una gran cantidad de ácaros en los tubos traqueales, alimentándose de la hemolinfa de las abejas. Se pueden encontrar también en los sacos aéreos de la cabeza, tórax y abdomen. La enfermedad parasitaria que causa es la acarapisosis.\"],\"img\":[\"https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/acarapiswoodi.webp\"],\"alt\":[\"Presencia de Acarapis woodi en tráqueas de abejas melíferas.\"]},\"sintomas\":{\"text\":[\"No hay signos clínicos característicos de la enfermedad, aparte de la disminución de la población de las colonias. Los ácaros solamente se pueden diagnosticar mediante métodos de laboratorio y microscopía.\"],\"img\":[],\"alt\":\"\"},\"tratamiento\":{\"text\":[\"No hay 💀\"],\"img\":\"\"}}]}]}}]}]},{\"id\":101,\"title\":\"Protozoarios\",\"subtopics\":[{\"id\":107,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}}]},{\"id\":102,\"title\":\"Helmintos\",\"subtopics\":[{\"id\":108,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}}]}]},{\"id\":1,\"category\":\"Microbiología\",\"topics\":[{\"id\":100,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}},{\"id\":102,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}},{\"id\":103,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}}]},{\"id\":2,\"category\":\"Histología\",\"topics\":[{\"id\":100,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}},{\"id\":102,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}},{\"id\":103,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}}]},{\"id\":3,\"category\":\"Biología\",\"topics\":[{\"id\":100,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}},{\"id\":102,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}},{\"id\":103,\"title\":\"No hay info\",\"content\":{\"intro\":[{\"type\":\"normal\",\"text\":\"\"}]}}]}]");

function Drawer({
  category
}) {
  const $category = categorys[category];
  return jsxs("main", {
    children: [jsx("div", {
      class: "text-center flex items-center",
      children: jsx("button", {
        class: " text-gray-300 transition-colors hover:text-white",
        type: "button",
        "data-drawer-target": "drawer-navigation",
        "data-drawer-show": "drawer-navigation",
        "aria-controls": "drawer-navigation",
        children: jsx(DropInfo, {})
      })
    }), jsxs("div", {
      id: "drawer-navigation",
      class: "drawer fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-64 bg-neutral-900",
      "aria-labelledby": "drawer-navigation-label",
      children: [jsx("h5", {
        id: "drawer-navigation-label",
        class: "text-base font-semibold text-gray-400 uppercase dark:text-gray-300",
        children: "Temas"
      }), jsxs("button", {
        type: "button",
        "data-drawer-hide": "drawer-navigation",
        "aria-controls": "drawer-navigation",
        class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-neutral-800 dark:hover:text-white",
        children: [jsx(CloseIcon, {}), jsx("span", {
          class: "sr-only",
          children: "Close"
        })]
      }), jsx("div", {
        class: "py-4 overflow-y-auto",
        children: jsx("ul", {
          class: "space-y-2 font-medium",
          children: $category && $category.topics.map((value) => {
            if ("subtopics" in value) {
              return jsx(Topics, {
                mytopic: value.title,
                subtopics: value.subtopics
              }, value.id);
            } else {
              return jsx(Topic, {
                id: value.id,
                topicInfo: value
              }, value.id);
            }
          })
        })
      })]
    })]
  });
}

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { category } = Astro2.props;
  return renderTemplate`${renderScript($$result, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/Header.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<header class="header flex items-center justify-between sticky h-12 md:h-14 px-5 top-0 shadow-lg w-full text-white z-50" data-astro-cid-dvaxi3yn> ${renderComponent($$result, "Drawer", Drawer, { "category": category, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/organism/drawer", "client:component-export": "Drawer", "data-astro-cid-dvaxi3yn": true })} <h1 class="font-bold text-lg absolute left-2/4 -translate-x-2/4" data-astro-cid-dvaxi3yn> ${header.title} </h1> <a href="/" class="flex items-center justify-center h-7 w-7 rounded-full bg-neutral-800 text-neutral-300 transition-colors hover:text-neutral-50 hover:bg-neutral-600" data-astro-cid-dvaxi3yn> ${renderComponent($$result, "CloseIcon", CloseIcon, { "data-astro-cid-dvaxi3yn": true })} </a> </header> `;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center pb-4 pt-32 mt-auto text-zinc-700 font-semibold text-xs"> <p>Desarrollado por Sanss</p> <p class="text-center">Escrito y revisado por Gabriela Villamil - Estudiante de Medicina Veterinaria y Zootecnia</p> </footer>`;
}, "E:/programacion/Sanss/BiblioVet/bibliovet/src/components/organism/Footer.astro", void 0);

function Normal({
  text
}) {
  return jsx("p", {
    class: "text-gray-400 text-justify font-mono text-lg",
    children: text
  });
}

function WithSubtitle({
  info
}) {
  return jsxs("article", {
    class: "flex flex-col gap-2",
    children: [jsx("h3", {
      class: "text-gray-400 font-semibold font-mono text-lg",
      children: info.subtitle
    }), info && info.texts.map((text) => jsx("p", {
      class: "text-gray-400 text-justify font-mono text-lg",
      children: text
    }))]
  });
}

function List({
  info
}) {
  return jsx("ul", {
    class: "flex flex-col gap-4",
    children: info && info.items.map((text) => jsxs("li", {
      class: "text-gray-400 text-justify pl-3 md:pl-10 font-mono text-lg",
      children: ["- ", text]
    }))
  });
}

function LeftArrowIcon() {
  return jsx("svg", {
    class: "w-4 h-4 text-neutral-800  dark:text-neutral-300 rtl:rotate-180 hover:text-neutral-500 dark:hover:text-neutral-200 transition-colors",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 6 10",
    children: jsx("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 1 1 5l4 4"
    })
  });
}
function RightArrowIcon() {
  return jsx("svg", {
    class: "w-4 h-4 text-neutral-800  dark:text-neutral-300 rtl:rotate-180 hover:text-neutral-500 dark:hover:text-neutral-200 transition-colors",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 6 10",
    children: jsx("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m1 9 4-4-4-4"
    })
  });
}

function Gallery({
  info
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const handlePrevClick = () => {
    setAnimationDirection("prev");
    setCurrentIndex((prevIndex) => prevIndex === 0 ? info.imgs.length - 1 : prevIndex - 1);
  };
  const handleNextClick = () => {
    setAnimationDirection("next");
    setCurrentIndex((prevIndex) => prevIndex === info.imgs.length - 1 ? 0 : prevIndex + 1);
  };
  let id = info.id.replace(/ /g, "");
  let size = "";
  if (info.size === "small") {
    size = "12rem";
  } else if (info.size === "medium") {
    size = "15rem";
  } else if (info.size === "big") {
    size = "18rem";
  }
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "image-gallery mx-3 backdrop-blur-md bg-neutral-800 bg-opacity-20 rounded-lg shadow-lg",
      children: [jsxs("div", {
        id: `id-${size}-${id}`,
        className: "image-gallery-container",
        children: [jsx("img", {
          src: info.imgs[currentIndex],
          alt: `Image ${currentIndex + 1}`,
          className: `gallery-image animate-once animate-ease-in-out ${animationDirection ? animationDirection === "prev" ? "animate-fade-left" : "animate-fade-right" : ""}`,
          onAnimationEnd: () => setAnimationDirection("")
        }), jsx("button", {
          className: "nav-button prev-button",
          onClick: handlePrevClick,
          children: jsx(LeftArrowIcon, {})
        }), jsx("button", {
          className: "nav-button next-button",
          onClick: handleNextClick,
          children: jsx(RightArrowIcon, {})
        })]
      }), jsx("style", {
        jsx: true,
        children: `
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
          #id-${size}-${id} {
            height: ${size};
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
        `
      })]
    }), jsxs("p", {
      className: `text-zinc-600 pl-5 mt-1 w-auto text-ellipsis ${info.size === "small" ? "line-clamp-3" : "line-clamp-2"} `,
      style: `${info.size === "small" ? "height: 4.4rem;" : "height: 3rem;"} `,
      children: ["Figura: ", Array.isArray(info.alt) ? info.alt[currentIndex] : info.alt]
    })]
  });
}

function Family({
  info
}) {
  return jsxs("section", {
    className: "flex flex-col mt-14",
    children: [jsx("h3", {
      className: "text-gray-400 text-justify font-mono font-semibold italic text-xl mb-5",
      children: info.family
    }), info.species.map((value) => jsxs("section", {
      className: "flex flex-col gap-4 mb-16 last:mb-0",
      children: [jsx("h4", {
        className: "text-lime-900 text-justify font-mono font-semibold italic text-lg pl-5",
        children: value.title
      }), jsx("p", {
        className: "text-gray-400 text-justify font-mono text-lg",
        children: value.textImg.text
      }), value.textImg.img.length > 0 && jsx("article", {
        className: "mx-auto h-full flex flex-col justify-center just-phone:w-full md:h-3/6 md:w-3/6",
        children: value.textImg.img.length > 1 ? jsx(Gallery, {
          info: {
            imgs: value.textImg.img,
            alt: value.textImg.alt,
            id: value.title,
            size: "big"
          }
        }) : jsxs(Fragment, {
          children: [jsx("img", {
            src: value.textImg.img,
            alt: value.textImg.alt,
            className: "rounded-md md:mt-4"
          }), jsxs("p", {
            className: "text-zinc-600",
            children: ["Figura: ", value.textImg.alt]
          })]
        })
      }), jsxs("article", {
        className: "flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-10 md:gap-20 mt-10",
        children: [jsxs("section", {
          className: "just-phone:flex just-phone:items-end just-phone:gap-4 just-phone:flex-col-reverse",
          children: [value.sintomas.img.length > 0 && jsx("div", {
            className: "flex flex-col mx-auto md:mx-0 w-72 md:w-64 md:float-right",
            children: value.sintomas.img.length > 1 ? jsx(Gallery, {
              info: {
                imgs: value.sintomas.img,
                alt: value.sintomas.alt,
                id: value.title,
                size: "small"
              }
            }) : jsxs(Fragment, {
              children: [jsx("img", {
                src: value.sintomas.img,
                alt: value.sintomas.alt,
                className: "ml-4 rounded-md md:mt-4"
              }), jsxs("p", {
                className: "text-zinc-600 pl-5",
                children: ["Figura: ", value.sintomas.alt]
              })]
            })
          }), jsxs("p", {
            className: "text-gray-400 text-justify font-mono text-lg",
            children: [jsx("strong", {
              className: "text-rose-900 font-mono font-semibold italic",
              children: "Síntomas clínicos:"
            }), " ", value.sintomas.text]
          })]
        }), jsx("section", {
          children: jsxs("p", {
            className: "text-gray-400 text-justify font-mono text-lg",
            children: [jsx("strong", {
              className: "text-indigo-700 font-mono font-semibold italic",
              children: "Tratamiento:"
            }), " ", value.tratamiento.text]
          })
        })]
      }), jsx("hr", {
        className: "my-6 border-zinc-400 w-full mx-auto dark:border-zinc-800 mt-16"
      })]
    }))]
  });
}

function SimpleTitle({
  info
}) {
  return jsx("h3", {
    className: "text-gray-400 text-justify font-bold font-mono text-xl mt-5",
    children: info.title
  });
}

function ContentTopic() {
  const topicSelected = useStore(topicID);
  const topicInfoSelected = useStore(topicInformation);
  return jsx("div", {
    children: topicSelected < 100 ? jsx("section", {
      className: "flex relative h-full w-full justify-center items-center mx-auto",
      children: jsx("h2", {
        className: "text-white text-center font-bold font-mono text-xl mt-52 w-64",
        children: parasitologia.sinseleccion
      })
    }) : jsxs("section", {
      className: "flex flex-col justify-center max-w-5xl mx-auto px-8 mt-10 gap-4",
      children: [jsx("h2", {
        className: "text-gray-300 text-justify font-bold font-mono text-xl",
        children: "title" in topicInfoSelected && topicInfoSelected.title
      }), "content" in topicInfoSelected && topicInfoSelected.content.intro.map((value, index) => {
        if (value.type === "normal" && "text" in value) {
          return jsx(Normal, {
            text: value.text
          }, index);
        } else if (value.type === "with-subtitle" && "texts" in value) {
          return jsx("section", {
            class: "flex flex-col mt-8",
            children: jsx(WithSubtitle, {
              info: value
            }, index)
          });
        } else if (value.type === "list" && "items" in value) {
          return jsx(List, {
            info: value
          }, index);
        } else if (value.type === "family" && "species" in value) {
          return jsx(Family, {
            info: value
          }, index);
        } else if (value.type === "title" && "title" in value) {
          return jsx(SimpleTitle, {
            info: value
          }, index);
        } else {
          return jsx("p", {
            class: "text-gray-400 text-justify font-mono text-lg",
            children: "Formato No Valido"
          });
        }
      })]
    })
  });
}

export { $$Header as $, ContentTopic as C, $$Footer as a };
