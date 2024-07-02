import { useEffect, useState } from "preact/hooks";
import { Gallery } from "./gallery";

export function TestingComponent() {
  /**
     * 
     * <Gallery
          info={{
            imgs: [
              "https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sintomachoribovis1.webp",
              "https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sintomachoribovis2.webp",
            ],
            alt: "anobueno",
            id: "jeje",
          }}
        />
     */

  const [show, setShow] = useState("");

  useEffect(() => {
    const initializeGallery = () => {
      setShow(
        `
        <img
              src="https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sintomachoribovis1.webp"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
        `
      );
    };
    const timeoutId = setTimeout(initializeGallery, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section class=" w-2/3 mx-auto">
      <div
        id="animation-carousel"
        class="relative w-full"
        data-carousel="static"
      >
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            class=" duration-200 ease-linear"
            data-carousel-item
            dangerouslySetInnerHTML={{ __html: show }}
            contentEditable="true"
          ></div>
          <div class=" duration-200 ease-linear" data-carousel-item>
            <img
              src="https://archivos-sanss.s3.amazonaws.com/imgs/bibliovet/parasitologia/sintomachoribovis2.webp"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}
