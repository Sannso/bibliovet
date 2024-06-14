import { DropInfo } from "@components/icons/headerIcons";
import { CloseIcon } from "@components/icons/drawerIcons";
import { Topic } from "@components/reactComponents/topic";
import { Topics } from "@components/reactComponents/topics";
//--- States
import { useStore } from "@nanostores/preact";
import { categoryID } from "@/nanostore/drawer/drawerState";
import { categorys } from "@bd";

interface Props {
  category: number;
}

export function Drawer({ category }: Props) {
  // Lee el valor del store con el hook `useStore`
  // escribe en el store importado usando `.set`

  //Obtener temas de la categoria
  const $categoryID = useStore(categoryID);
  const $category = categorys[category];

  return (
    <main>
      <div class="text-center">
        <button
          class=" text-gray-300 transition-colors hover:text-white"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <DropInfo />
        </button>
      </div>

      <div
        id="drawer-navigation"
        class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-neutral-900"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          class="text-base font-semibold text-gray-400 uppercase dark:text-gray-300"
        >
          Temas
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <CloseIcon />
          <span class="sr-only">Close</span>
        </button>
        <div class="py-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">
            {$category &&
              $category.topics!.map((value: any) =>
                {
                  if ('subtopics' in value) {
                    return <Topics
                    key={value.id}
                    mytopic={value.title}
                    subtopics={value.subtopics}
                  />;
                  } else {
                    return (
                      <Topic key={value.id} id={value.id} topicInfo={value} />
                    );
                  }

                }
              )}
          </ul>
        </div>
      </div>
    </main>
  );
}
