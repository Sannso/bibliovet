import { DropIcon } from "@components/icons/drawerIcons";
import { Topic } from "@components/reactComponents/topic";

export type TopicType = {
  id: number;
  title: string;
  content: {
    intro: []
  };
}| {
  id: number;
  title: string;
  subtopics: TopicType[]
};

interface Props {
  mytopic: string;
  subtopics: TopicType[];
}

export function Topics({ mytopic, subtopics }: Props) {
  const dropdownId = `dropdow-${mytopic}`;

  return (
    <li>
      <button
        type="button"
        class="flex items-center w-full px-3 py-2 text-base text-gray-900 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 transition-colors "
        aria-controls={dropdownId}
        data-collapse-toggle={dropdownId}
      >
        <span class="flex-1 text-sm text-left rtl:text-right whitespace-nowrap">
          {mytopic}
        </span>
        <DropIcon />
      </button>

      <ul id={dropdownId} class="hidden py-2 space-y-2 pl-5">
        {subtopics &&
          subtopics.map((value) =>
            "subtopics" in value ? (
              <Topics
                key={value.id}
                mytopic={value.title}
                subtopics={value.subtopics}
              />
            ) : (
              <Topic key={value.id} id={value.id} topicInfo={value} />
            )
          )}
      </ul>
    </li>
  );
}
