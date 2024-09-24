// src/components/omd_NameFrame.tsx
import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function NameFrame() {
  return (
    
<div className="flex h-[34px] w-[832px] flex-row items-start justify-center gap-[48px] overflow-visible whitespace-nowrap">
  <div className="visible flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] overflow-visible rounded-[5px] border border-black">
    <a href="#">Service</a>
  </div>
  <div className="visible flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] overflow-visible rounded-[5px] border border-black">
    <a href="#">Project</a>
  </div>
  <div className="visible flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] overflow-visible rounded-[5px] border border-black">
    <a href="#">OMD ..?</a>
  </div>
  <div className="visible flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] overflow-visible rounded-[5px] border border-black">
    <a href="#">About</a>
  </div>
  <div className="visible flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] overflow-visible rounded-[5px] border border-black">
    <a href="#">Blog</a>
  </div>
</div>
);
}
