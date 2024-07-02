import { TestingComponent } from "./fortest";
import { Gallery } from "./gallery";

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
    <section className="flex flex-col mt-14 last:mt-0">
      <h3 className="text-gray-400 text-justify font-mono font-semibold italic text-xl mb-5">
        {info.family}
      </h3>

      {info.species.map((value: any) => (
        <section className="flex flex-col gap-4 mb-16">
          <h4 className="text-lime-900 text-justify font-mono font-semibold italic text-lg pl-5">
            {value.title}
          </h4>

          <p className="text-gray-400 text-justify font-mono text-lg">
            {value.textImg.text}
          </p>

          {value.textImg.img && (
            <article className="mx-auto h-full just-phone:w-full md:h-3/6 md:w-3/6">
              <img
                src={value.textImg.img}
                alt={value.textImg.alt}
                className="rounded-md"
              />
              <p className="text-zinc-600">Figura: {value.textImg.alt}</p>
            </article>
          )}

          <article className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-20 mt-10">
            <section className="just-phone:flex just-phone:items-end just-phone:gap-4 just-phone:flex-col-reverse">
              {value.sintomas.img.length > 0 && (
                <div className="flex flex-col h-64 w-64 float-right">
                  {value.sintomas.img.length > 1 ? (
                    <Gallery
                      info={{
                        imgs: value.sintomas.img,
                        alt: value.sintomas.alt,
                        id: value.title,
                      }}
                    />
                  ) : (
                    <img
                      src={value.sintomas.img}
                      alt={value.sintomas.alt}
                      className="ml-4 rounded-md md:mt-4"
                    />
                  )}

                  <p className="text-zinc-600 pl-5">
                    Figura: {value.sintomas.alt}
                  </p>
                </div>
              )}

              <p className="text-gray-400 text-justify font-mono text-lg">
                <strong className="text-rose-900 font-mono font-semibold italic">
                  Síntomas clínicos:
                </strong>{" "}
                {value.sintomas.text}
              </p>
            </section>
            <section>
              <p className="text-gray-400 text-justify font-mono text-lg">
                <strong className="text-indigo-700 font-mono font-semibold italic">
                  Tratamiento:
                </strong>{" "}
                {value.tratamiento.text}
              </p>
            </section>
          </article>

          <hr className="my-6 border-zinc-400 w-full mx-auto dark:border-zinc-800 mt-16" />
        </section>
      ))}
    </section>
  );
}
