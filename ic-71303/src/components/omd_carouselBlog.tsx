import { useState } from 'react';
import Image from 'next/image';

interface CarouselComponentProps {
  images: { src: string; alt: string }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full border ${currentIndex === index ? 'bg-blue-500' : 'bg-transparent'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-r-lg bg-gray-800 p-2 text-white"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-l-lg bg-gray-800 p-2 text-white"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
};

export default CarouselComponent;
