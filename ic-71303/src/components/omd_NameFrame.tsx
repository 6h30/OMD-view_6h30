// src/components/omd_NameFrame.tsx
import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function NameFrame() {
  return (
    <div className="absolute flex h-[900px] w-[200px] flex-col items-center  border border-black bg-white p-4">
      <div className=" relative mb-4 h-[154px] w-[170px]  border border-black">
        <Image src="" alt="Placeholder image" className="w-full  border-4 border-blue-50" />
      </div>

      <div className=" relative mb-4 flex h-[488px] w-[170px] items-center justify-center overflow-hidden border border-black fill-white">
        <div className=" relative flex h-full w-full -rotate-90 flex-col items-center justify-center  gap-4">

          <div className=" flex w-[370px] flex-col items-center justify-center  pb-3 border-b-2 border-black">
            <p className="whitespace-nowrap text-[16px] text-gray-600">OMD ARCHITECT</p>
            <p className="whitespace-nowrap text-center text-xs text-gray-600">47/12B VO THI NH0, PHUONG TAN THUAN DONG, QUAN 7, TP HCM</p>
          </div>

          <div className=" flex w-[170px] items-center justify-center  px-1 py-1">
            <p className="whitespace-nowrap text-center text-xs font-bold leading-normal tracking-[0.18] text-black">designed and developed by DcViet</p>
          </div>
        </div>
      </div>

      <div className=" relative flex h-[200px] w-full flex-col items-center justify-center  border border-black">

        <div className=" flex w-[100px] flex-col items-center justify-center  py-5 border-t-2 border-black">
          <p className="text-[16px] text-gray-600">BY DCVIET</p>
        </div>

        <div className=" flex w-[100px] flex-col items-center justify-center  py-5 border-t-2 border-black">
          <p className="text-[20px] font-bold text-gray-600">A001</p>
        </div>

      </div>
    </div>

  );
}



