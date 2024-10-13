// src/components/omd_Nav.tsx
// import Image from "next/image";
// import styles from './omd_Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="font-koho flex h-[34px] w-[832px] flex-row items-start justify-center gap-[48px] whitespace-nowrap">
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] border border-black">
        <Link
          href="/homeM/viewServices"
          className="flex h-full w-full items-center justify-center"
        >
          Dịch vụ
        </Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] border border-black">
        <Link
          href="/homeM/viewProjects"
          className="flex h-full w-full items-center justify-center"
        >
          Dự án
        </Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] border border-black">
        <Link
          href="/homeM/viewAbout"
          className="flex h-full w-full items-center justify-center"
        >
          Về OMD
        </Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] border border-black">
        <Link
          href="/homeM/viewContact"
          className="flex h-full w-full items-center justify-center"
        >
          Liên hệ
        </Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] border border-black">
        <Link
          href="/homeM/blogs"
          className="flex h-full w-full items-center justify-center"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
