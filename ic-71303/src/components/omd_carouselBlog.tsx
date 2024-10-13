import { useEffect } from 'react';
import { Carousel } from 'flowbite';
import Image from 'next/image';

const CarouselComponent: React.FC = () => {
  useEffect(() => {
    const carouselElement = document.getElementById('default-carousel');

    if (carouselElement) {
      
      const items = Array.from(carouselElement.querySelectorAll('[data-carousel-item]')).map((item, index) => ({
        position: index,
        el: item as HTMLElement,
      }));
      const carousel = new Carousel(carouselElement, items);
      carousel.cycle();

      const prevButton = carouselElement.querySelector('[data-carousel-prev]');
      const nextButton = carouselElement.querySelector('[data-carousel-next]');

      const handlePrev = () => carousel.prev();
      const handleNext = () => carousel.next();

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
    } else {
      console.error('Carousel element not found');
    }
  }, []);

  return (
    <div id="default-carousel" className="w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/image1.jpg"
            alt="Image 1"
            width={600}
            height={400}
            className="absolute left-1/2 top-1/2 block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/image2.jpg"
            alt="Image 2"
            width={600}
            height={400}
            className="absolute left-1/2 top-1/2 block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/image3.jpg"
            alt="Image 3"
            width={600}
            height={400}
            className="absolute left-1/2 top-1/2 block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="h-3 w-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
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
