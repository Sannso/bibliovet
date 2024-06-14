import { topicID } from "@/nanostore/drawer/drawerState";
import { topicInformation } from "@/nanostore/topic/topicState";
import { useStore } from "@nanostores/preact";

interface Props {
  topicInfo: any;
  id: number;
}

export function Topic({ topicInfo, id }: Props) {
  const $topicID = useStore(topicID);
  const topicLabel = `drawer-${id}`;
  const buttonStyle =
    "flex w-full px-3 py-2 items-center text-gray-900 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 transition-colors";
  const isThisTopicSelected = $topicID == id;

  return (
    <li>
      <button
        onClick={() => {
          topicID.set(id);
          topicInformation.set(topicInfo);
        }}
        id={topicLabel}
        type="button"
        className={`${buttonStyle} ${isThisTopicSelected && "bg-neutral-800"}`}
      >
        <span class="truncate text-sm">{topicInfo.title}</span>
      </button>
    </li>
  );
}
