interface Props {
  text: string;
}

export function Normal({ text }: Props) {
  return <p class="text-gray-400 text-justify font-mono text-lg">{text}</p>;
}
