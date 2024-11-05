// src/components/omd_Nav.tsx
// import Image from "next/image";
// import styles from './omd_Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="font-koho flex h-[34px] w-[832px] flex-row items-start justify-center gap-[48px] whitespace-nowrap">

      {/* <div className="group flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] border border-black">
        <Link
          href="/homeM/viewServices"
          className="flex h-full w-full items-center justify-center"
        >
          <p>Dịch vụ</p>
        </Link>
      </div> */}

      <div className="group relative h-[32px] w-[132px] items-center justify-center border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
        <Link
          href="/homeM/viewServices"
          className="flex h-full w-full items-center justify-center"
        >
          <p>Dịch vụ</p>
        </Link>
      </div>

      <div className="group relative h-[32px] w-[132px] items-center justify-center border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
        <Link
          href="/homeM/viewProjectList"
          className="flex h-full w-full items-center justify-center"
        >
          <p>Dự án</p>
        </Link>
      </div>

      <div className="group relative h-[32px] w-[132px] items-center justify-center border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
        <Link
          href="/homeM/viewAbout"
          className="flex h-full w-full items-center justify-center"
        >
          <p>Về OMD</p>
        </Link>
      </div>

      <div className="group relative h-[32px] w-[132px] items-center justify-center border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
        <Link
          href="/homeM/viewContact"
          className="flex h-full w-full items-center justify-center"
        >
          <p>Liên hệ</p>
        </Link>
      </div>


      <div className="group relative h-[32px] w-[132px] items-center justify-center border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
        <Link
          href="/homeM/blogs"
          className="flex h-full w-full items-center justify-center"
        >
          <p>Blog</p>
        </Link>
      </div>



    </div>
  );
}
