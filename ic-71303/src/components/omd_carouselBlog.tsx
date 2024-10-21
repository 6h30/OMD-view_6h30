import { useEffect, useState, useRef } from 'react';
import { Carousel } from 'flowbite';
import Image from 'next/image';

interface CarouselComponentProps {
  images?: { src: string; alt: string }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<Carousel | null>(null); // Sử dụng useRef để giữ tham chiếu tới carousel

  useEffect(() => {
    const carouselElement = document.getElementById('default-carousel');

    if (carouselElement && images.length > 0) {
      const items = Array.from(carouselElement.querySelectorAll('[data-carousel-item]')).map((item, index) => ({
        position: index,
        el: item as HTMLElement,
      }));

      if (items.length > 0) {
        carouselRef.current = new Carousel(carouselElement, items);
        carouselRef.current.cycle();

        const prevButton = carouselElement.querySelector('[data-carousel-prev]');
        const nextButton = carouselElement.querySelector('[data-carousel-next]');

        const handlePrev = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cập nhật chỉ số
          carouselRef.current?.prev(); // Sử dụng carouselRef
        };

        const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cập nhật chỉ số
          carouselRef.current?.next(); // Sử dụng carouselRef
        };

        if (prevButton) {
          prevButton.addEventListener('click', handlePrev);
        }

        if (nextButton) {
          nextButton.addEventListener('click', handleNext);
        }

        return () => {
          // Cleanup listeners
          if (prevButton) {
            prevButton.removeEventListener('click', handlePrev);
          }
          if (nextButton) {
            nextButton.removeEventListener('click', handleNext);
          }
        };
      }
    } else {
      console.error('Carousel element not found or no images provided');
    }
  }, [images]);

  return (
    <div id="default-carousel" className="w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden md:h-96">
        {images.map((image, index) => (
          <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="absolute left-1/2 top-1/2 block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-3 w-3 rounded-full border ${currentIndex === index ? 'bg-blue-500' : 'bg-transparent'}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => {
              setCurrentIndex(index);
              carouselRef.current?.cycle(); // Để đảm bảo carousel hiển thị đúng ảnh
            }}
          ></button>
        ))}
      </div>

      <button type="button" className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-prev>
        <span className="text-white">‹</span>
      </button>
      <button type="button" className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-next>
        <span className="text-white">›</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
