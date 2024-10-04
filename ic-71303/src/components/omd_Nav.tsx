// src/components/omd_Nav.tsx
// import Image from "next/image";
// import styles from './omd_Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="flex h-[34px] w-[832px] flex-row items-start justify-center gap-[48px] whitespace-nowrap">
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewServices">Dịch vụ</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewProjects">Dự án</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewAbout">Về OMD</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewContact">Liên hệ</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/blogs">Blog</Link>
      </div>
    </div>
  );
}
