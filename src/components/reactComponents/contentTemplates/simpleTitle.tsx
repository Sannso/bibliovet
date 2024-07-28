type Info = {
    type: string,
    title: string
}

interface Props {
  info: Info;
}

export function SimpleTitle({ info }: Props) {
  return (
    <h3 className="text-gray-400 text-justify font-bold font-mono text-xl mt-5">{info.title}</h3>
  );
}
