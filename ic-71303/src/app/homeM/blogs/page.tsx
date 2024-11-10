// import Image from "next/image";

import ViewBlogs from '@/components/omd_ViewBlogs';

export default function Blogs() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
      <div className="font-koho md:w-[820px] sm:w-[420px] h-[800px]">
        <ViewBlogs />
      </div>
    </div>
  );
}
