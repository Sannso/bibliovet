import { topicID } from "@/nanostore/drawer/drawerState";
import { topicInformation } from "@/nanostore/topic/topicState";
import { useStore } from "@nanostores/preact";
import { parasitologia } from "@es";
import { Normal } from "./contentTemplates/normal";
import { WithSubtitle } from "./contentTemplates/withSubtitle";
import { List } from "./contentTemplates/list";
import { Family } from "./contentTemplates/family";

export function ContentTopic() {
  const topicSelected = useStore(topicID);
  const topicInfoSelected = useStore(topicInformation);

  return (
    <div>
      {topicSelected < 100 ? (
        <section class="flex h-full justify-center items-center mt-40 lg:mt-52 w-64 mx-auto">
          <h2 class="text-white text-center font-bold font-mono text-xl">
            {parasitologia.sinseleccion}
          </h2>
        </section>
      ) : (
        <section class="flex flex-col justify-center max-w-5xl mx-auto px-8 mt-10 gap-4">
          <h2 class="text-gray-400 text-justify font-bold font-mono text-xl">
            {"title" in topicInfoSelected && topicInfoSelected.title}
          </h2>
          {"content" in topicInfoSelected &&
            topicInfoSelected.content.intro.map((value) => {
              if (value.type == "normal" && "text" in value) {
                return <Normal text={value.text} />;
              } else if (value.type == "with-subtitle" && "texts" in value) {
                return (
                  <section class="flex flex-col mt-8">
                    <WithSubtitle info={value} />
                  </section>
                );
              } else if (value.type == "list" && "items" in value) {
                return <List info={value}/>;
              } else if (value.type == "family" && "species" in value) {
                return <Family info={value} />;
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
