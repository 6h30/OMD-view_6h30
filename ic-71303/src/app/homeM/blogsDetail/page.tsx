// 'use client';
// // import Image from "next/image";
// import DetailBlogs from '@/components/omd_DetailBlog';
// import { useRef } from 'react';

// export default function Main() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
//     if (scrollRef.current) {
//       event.preventDefault();
//       scrollRef.current.scrollLeft += event.deltaY;
//     }
//   };
//   return (
//     <div className="flex h-full w-full items-start justify-center overflow-hidden scroll-smooth border">
//       <div
//         className="h-[950px] w-[1000px] overflow-x-auto bg-white text-black"
//         onWheel={handleScroll}
//         ref={scrollRef}
//       >
//         <DetailBlogs />
//       </div>
//     </div>
//   );
// }


'use client';
import DetailBlogs from '@/components/omd_DetailBlog';
import { useRef, useEffect } from 'react';

export default function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      event.preventDefault();
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    // Đảm bảo rằng scrollRef đã được khởi tạo và không null
    if (scrollRef.current) {
      // Có thể thực hiện các tác vụ liên quan đến DOM ở đây nếu cần
    }
  }, []);

  return (
    <div className="flex h-full w-full items-start justify-center overflow-hidden scroll-smooth border">
      <div
        className="h-[950px] w-[1000px] overflow-x-auto bg-white text-black"
        onWheel={handleScroll}
        ref={scrollRef}
      >
        <DetailBlogs />
      </div>
    </div>
  );
}
