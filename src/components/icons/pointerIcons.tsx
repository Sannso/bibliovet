interface Props {
    size: number;
  }

export function UpLeftArrowIcon({ size }: Props) {

  const rsize = "size-"+size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={`icon ${rsize} icon-tabler icons-tabler-outline icon-tabler-arrow-up-left`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l10 10" />
      <path d="M16 7l-9 0l0 9" />
    </svg>
  );
}
