type Info = {
    type: string,
    subtitle: string,
    texts: string[]
}

interface Props {
  info: Info;
}

export function WithSubtitle({ info }: Props) {
  return (
    <article class="flex flex-col gap-2">
        <h3 class="text-gray-400 font-semibold font-mono text-lg">{info.subtitle}</h3>
      {info &&
        info.texts.map((text) => (
          <p class="text-gray-400 text-justify font-mono text-lg">{text}</p>
        ))}
    </article>
  );
}
