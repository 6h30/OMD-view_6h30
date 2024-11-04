// import React, { useState } from 'react';
// import Image from 'next/image';

// const ImageGrid: React.FC = () => {
//   const images: string[] = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg', '/image6.jpg' ];
//   const [currentImage, setCurrentImage] = useState<string | null>(null);
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const openViewer = (src: string) => {
//     setCurrentImage(src);
//     setIsOpen(true);
//   };

//   const closeViewer = () => {
//     setIsOpen(false);
//     setCurrentImage(null);
//   };

//   return (
//     <div className="relative flex h-[50%] w-full flex-col items-center justify-center border border-sky-500">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-full">
//         {images.map((src, index) => (
//           <div key={index} className="flex justify-center items-center">
//             <Image
//               alt=""
//               width={200}
//               height={200}
//               src={src}
//               className="w-[150px] h-[150px] rounded-sm object-cover cursor-pointer"
//               onClick={() => openViewer(src)}
//             />
//           </div>
//         ))}
//       </div>

//       {isOpen && currentImage && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" onClick={closeViewer}>
//           <div className="relative border border-gray-500 p-4" onClick={(e) => e.stopPropagation()}> {/* Ngăn chặn sự kiện nhấp từ thẻ cha */}
//             <Image
//               alt=""
//               src={currentImage}
//               width={600}
//               height={400}
//               className="rounded-lg scale-100 transition-transform duration-300 transform"
//             //   style={{ maxHeight: '80%', maxWidth: '80%' }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGrid;

// import React, { useState } from 'react';

// const ImageGrid: React.FC = () => {
//   const images: string[] = [
//     '/image1.jpg',
//     '/image2.jpg',
//     '/image3.jpg',
//     '/image4.jpg',
//     '/image5.jpg',
//     '/image6.jpg',
//     '/image7.jpg',
//     '/image8.jpg',
//     '/image9.jpg',
//     '/image10.jpg',
//   ];

//   const [currentImage, setCurrentImage] = useState<string>(images[0]);

//   const handleClick = (src: string) => {
//     if (document.startViewTransition) {
//       document.startViewTransition(() => setCurrentImage(src));
//     } else {
//       setCurrentImage(src);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center h-[90%] w-full">
//       <div className="mb-4">
//         <div
//           className="w-[550px] h-[400px] bg-cover bg-center"
//           style={{ backgroundImage: url(${currentImage}) }}
//         />
//       </div>
//       <ul className="overflow-scroll gallery grid grid-cols-5 gap-2 w-full max-w-[550px] scroll-smooth">
//         {images.map((src, index) => (
//           <li
//             key={index}
//             className="item relative cursor-pointer bg-cover bg-center"
//             onClick={() => handleClick(src)}
//             style={{
//               backgroundImage: url(${src}),
//               height: '13vmin',
//               backgroundSize: 'cover', // Sử dụng cover để lấp đầy không gian
//               backgroundPosition: 'cover', // Đặt vị trí ảnh ở giữa
//             }}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ImageGrid;

import React, { useState } from 'react';
import Image from 'next/image';

const ImageView: React.FC = () => {
  const images: string[] = [
    '/pr-mv-1.jpg',
    '/pr-mv-2.jpg',
    '/pr-mv-3.jpg',
    '/pr-mv-4.jpg',
    '/pr-mv-5.jpg',
    '/pr-mv-6.jpg',
    '/pr-mv-7.jpg',
    '/pr-mv-8.jpg',
    '/pr-mv-9.jpg',
    '/pr-mv-10.jpg',
  ];

  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  const handleClick = (src: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => setCurrentImage(src));
    } else {
      setCurrentImage(src);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="relative mb-4 h-[450px] w-[550px] border">
        <Image
          src={currentImage}
          alt="Current Image"
          layout="fill"
          className="object-cover transition-transform duration-300"
        />
      </div>
      <ul className="gallery grid w-full max-w-[550px] grid-cols-5 gap-2 overflow-scroll scroll-smooth">
        {images.map((src, index) => (
          // <li
          //   key={index}
          //   className="item relative cursor-pointer"
          //   onClick={() => handleClick(src)}
          // >
          //   <Image
          //     src={src}
          //     width={200}
          //     height={200}
          //     alt={`Image ${index + 1}`}
          //     layout="fixed"
          //     className="object-cover"
          //   />
          // </li>

          <li
            key={index}
            className="item relative h-[110px] w-[100px] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-95 hover:border hover:border-gray-500"
            onClick={() => handleClick(src)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageView;
