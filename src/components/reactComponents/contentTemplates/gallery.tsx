import { LeftArrowIcon, RightArrowIcon } from "@components/icons/arrowsIcons";
import { useEffect, useState } from "preact/hooks";

type Info = {
  imgs: string[];
  alt: string;
  id: string;
};

interface Props {
  info: Info;
}

export function Gallery({ info }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handlePrevClick = () => {
    setAnimationDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? info.imgs.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setAnimationDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === info.imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-gallery mx-3 w-full h-52 backdrop-blur-md bg-neutral-800 bg-opacity-20 rounded-lg shadow-lg">
      <div className="image-gallery-container">
        <img
          src={info.imgs[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`gallery-image animate-once animate-ease-in-out ${
            animationDirection
              ? animationDirection === "prev"
                ? "animate-fade-left"
                : "animate-fade-right"
              : ""
          }`}
          onAnimationEnd={() => setAnimationDirection("")}
        />
        <button className="nav-button prev-button" onClick={handlePrevClick}>
          <LeftArrowIcon />
        </button>
        <button className="nav-button next-button" onClick={handleNextClick}>
          <RightArrowIcon />
        </button>
      </div>
      <style jsx>{`
        .image-gallery {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .image-gallery-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 9999px;
          border: none;
          color: white;
          width: 2.5rem;
          height: 2.5rem;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .nav-button:hover {
          background: rgba(0, 0, 0, 0.6);
        }
        .prev-button {
          left: 5px;
        }
        .next-button {
          right: 5px;
        }
        .gallery-image {
          max-width: 100%;
          max-height: 500px;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
