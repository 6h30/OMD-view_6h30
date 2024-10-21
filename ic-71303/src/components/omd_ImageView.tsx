import React, { useState } from 'react';
import Image from 'next/image';

const ImageGrid: React.FC = () => {
  const images: string[] = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg', '/image6.jpg' ];
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openViewer = (src: string) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="relative flex h-[90%] w-full flex-col items-center justify-center border border-green-500">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-full">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              alt=""
              width={200}
              height={200}
              src={src}
              className="w-[150px] h-[150px] rounded-sm object-cover cursor-pointer"
              onClick={() => openViewer(src)}
            />
          </div>
        ))}
      </div>

      {isOpen && currentImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" onClick={closeViewer}>
          <div className="relative border border-gray-500 p-4" onClick={(e) => e.stopPropagation()}> {/* Ngăn chặn sự kiện nhấp từ thẻ cha */}
            <Image
              alt=""
              src={currentImage}
              width={600}
              height={400}
              className="rounded-lg scale-100 transition-transform duration-300 transform"
            //   style={{ maxHeight: '80%', maxWidth: '80%' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
