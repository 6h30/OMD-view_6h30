// import Image from "next/image";

import ViewBlogs from '@/components/omd_ViewBlogs';

export default function Blogs() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
      <div className="font-koho w-[1024px]">
        <ViewBlogs />
      </div>
    </div>
  );
}
