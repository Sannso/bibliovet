import { useState } from "preact/hooks";

interface Props {
  images: string[];
}

export function ImageGallery({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="gallery-image"
        />
        <button className="nav-button prev-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="nav-button next-button" onClick={handleNextClick}>
          &gt;
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
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .prev-button {
          left: 0;
        }
        .next-button {
          right: 0;
        }
        .gallery-image {
          max-width: 100%;
          max-height: 500px;
        }
      `}</style>
    </div>
  );
}
