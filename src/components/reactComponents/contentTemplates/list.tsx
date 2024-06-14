type Info = {
    type: string,
    items: string[]
}

interface Props {
  info: Info;
}

export function List({ info }: Props) {
  return (
    <ul class="flex flex-col gap-2">
      {info &&
        info.items.map((text) => (
            <li class="text-gray-400 text-justify pl-10 font-mono text-lg">- {text}</li>
        ))}
    </ul>
  );
}
