type Info = {
  type: string;
  family: string;
  species: any;
};

interface Props {
  info: Info;
}

export function Family({ info }: Props) {
  return (
    <section class="flex flex-col mt-14 last:mt-0">
      <h3 class="text-gray-400 text-justify font-mono font-semibold italic text-xl mb-5">
        {info.family}
      </h3>

      {info.species.map((value: any) => (
        <section class="flex flex-col gap-4 mb-16">
          <h4 class="text-lime-900 text-justify font-mono font-semibold italic text-lg pl-5">
            {value.title}
          </h4>

          <p class="text-gray-400 text-justify font-mono text-lg">
            {value.textImg.text}
          </p>

          {value.textImg.img && (
            <article class="mx-auto h-full w-full md:h-3/6 md:3/6">
              <img
                src={value.textImg.img}
                alt={value.textImg.alt}
                class="rounded-md"
              />
              <p class="text-zinc-600">Figura: {value.textImg.alt}</p>
            </article>
          )}

          <article class="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-20 mt-10">
            <section class="just-phone:flex just-phone:items-end just-phone:gap-4 just-phone:flex-col-reverse">
              {value.sintomas.img && (
                <div class="flex flex-col h-64 w-64 float-right">
                  <img
                    src={value.sintomas.img}
                    alt={value.sintomas.alt}
                    class="ml-4 rounded-md  md:mt-4"
                  />
                  <p class="text-zinc-600 pl-4 text-right">
                    Figura: {value.sintomas.alt}
                  </p>
                </div>
              )}

              <p class="text-gray-400 text-justify font-mono text-lg">
                <strong class="text-rose-900 font-mono font-semibold italic">
                  Síntomas clínicos:
                </strong>{" "}
                {value.sintomas.text}
              </p>
            </section>
            <section>
              <p class="text-gray-400 text-justify font-mono text-lg ">
                <strong class="text-indigo-700 font-mono font-semibold italic">
                  Tratamiento:
                </strong>{" "}
                {value.tratamiento.text}
              </p>
            </section>
          </article>

          <hr class="my-6 border-zinc-400 w-full mx-auto dark:border-zinc-800 mt-16" />
        </section>
      ))}
    </section>
  );
}
