// src/components/omd_NameFrame.tsx
import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function NameFrame() {
  return (
    <div className="absolute items-center bg-white flex flex-col p-4 border border-black overflow-visible w-[200px] h-[900px]">
      <div className="relative mb-4 visible overflow-visible w-[170px] h-[154px] border-black">
        <Image src="" alt="Placeholder image" className="overflow-visible border-blue-50 w-full
        border-4"/>
      </div>

      <div className="flex flex-row items-center justify-center relative w-[170px] h-[488px] overflow-hidden visible fill-white border-black flex-wrap">

        <div className="w-full h-full flex flex-row items-center justify-center overflow-visible gap-3 px-4 py-4">

          <div className="flex flex-col items-center justify-center overflow-visible visible gap-3 px-3 py-3 -rotate-90">
            <p className="text-[16px] text-gray-600">OMD ARCHITECT</p>
            <p className="text-xs text-gray-600">47/12B VO THI NH0, PHUONG TAN THUAN DONG, QUAN 7, TP HCM</p>
          </div>

          <div className="flex items-center justify-center gap-3 overflow-hidden visible -rotate-90">
            <p className="text-xs tracking-[0.18] leading-normal text-black font-bold w-fit h-fit">designed and developed by DcViet</p>
          </div>

        </div>

      </div>

      <div className="relative w-full h-[200] overflow-hidden visible fill-white border-black">

        <div className="w-full h-[200px] mb-4 border border-black visible flex flex-col overflow-visible items-center justify-center">
          <div className="flex items-center justify-center flex-wrap visible overflow-hidden border-2 border-black gap-3">
            <p className="text-xs text-gray-600 w-full h-[46%]">BY DCVIET</p>
          </div>
          
          <div className="flex items-center justify-center flex-wrap visible overflow-hidden border-2 border-black gap-3">
            <p className="text-xl text-gray-600 w-full h-[46%]">A001</p>
          </div>
        
      </div>
      </div>
    </div>
  );
}



