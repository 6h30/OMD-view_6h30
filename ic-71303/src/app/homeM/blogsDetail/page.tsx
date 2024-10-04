'use client';
// import Image from "next/image";
import DetailBlogs from '@/components/omd_DetailBlog';
import { useRef } from 'react';

export default function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      event.preventDefault();
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };
  return (
    <div
      className="h-[950px] w-[1000px] overflow-x-auto bg-white text-black"
      onWheel={handleScroll}
      ref={scrollRef}
    >
      <DetailBlogs />
    </div>
  );
}
