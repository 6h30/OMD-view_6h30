// src/components/omd_Nav.tsx
// import Image from "next/image";
// import styles from './omd_Nav.module.css';

export default function Nav() {
    return (
      
  <div className="flex h-[34px] w-[832px] flex-row items-start justify-center gap-[48px] whitespace-nowrap">
    <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
      <a href="#">Dịch vụ</a>
    </div>
    <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
      <a href="#">Dự án</a>
    </div>
    <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
      <a href="#">Về OMD</a>
    </div>
    <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
      <a href="#">Liên hệ</a>
    </div>
    <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
      <a href="#">Blog</a>
    </div>
  </div>
  );
  }
  