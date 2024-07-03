import { topicID } from "@/nanostore/drawer/drawerState";
import { topicInformation } from "@/nanostore/topic/topicState";
import { useStore } from "@nanostores/preact";
import { parasitologia } from "@es";
import { Normal } from "./contentTemplates/normal";
import { WithSubtitle } from "./contentTemplates/withSubtitle";
import { List } from "./contentTemplates/list";
import { Family } from "./contentTemplates/family";
import { UpLeftArrowIcon } from "@components/icons/pointerIcons";

export function ContentTopic() {
  const topicSelected = useStore(topicID);
  const topicInfoSelected = useStore(topicInformation);

  return (
    <div>
      {topicSelected < 100 ? (
        <section className="flex relative h-full w-full justify-center items-center mx-auto">
          <section className="flex text-lime-700 absolute left-6 top-0 md:left-14 md:top-2 animate-pulse">
            <UpLeftArrowIcon size={16} />
            <p class="text-2xl font-bold pt-6">Temas</p>
          </section>
          <h2 className="text-white text-center font-bold font-mono text-xl mt-52 w-64">
            {parasitologia.sinseleccion}
          </h2>
        </section>
      ) : (
        <section className="flex flex-col justify-center max-w-5xl mx-auto px-8 mt-10 gap-4">
          <h2 className="text-gray-400 text-justify font-bold font-mono text-xl">
            {"title" in topicInfoSelected && topicInfoSelected.title}
          </h2>
          {"content" in topicInfoSelected &&
            topicInfoSelected.content.intro.map((value, index) => {
              if (value.type === "normal" && "text" in value) {
                return <Normal key={index} text={value.text} />;
              } else if (value.type === "with-subtitle" && "texts" in value) {
                return (
                  <section class="flex flex-col mt-8">
                    <WithSubtitle key={index} info={value} />
                  </section>
                );
              } else if (value.type === "list" && "items" in value) {
                return <List key={index} info={value} />;
              } else if (value.type === "family" && "species" in value) {
                return <Family key={index} info={value} />;
              } else {
                return (
                  <p class="text-gray-400 text-justify font-mono text-lg">
                    Formato No Valido
                  </p>
                );
              }
            })}
        </section>
      )}
    </div>
  );
}
