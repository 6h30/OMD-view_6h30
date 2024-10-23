// src/components/omd_TitleBLocks.tsx
import Image from 'next/image';
// import styles from './omd_NameFrame.module.css';

export default function TitleBlocks() {
  return (
    <div className="font-koho flex h-[960px] w-[200px] flex-col items-center border-l border-l-black bg-white p-4">
      <div className="flex mb-4 h-[15%] w-full justify-center items-center border border-black">
        <Image
          src="/avatar-5.jpg"
          width={100}
          height={100}
          alt="logo studio"
          className="filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>

      <div className="mb-4 flex h-[65%] w-full items-center justify-center overflow-hidden border border-black fill-white">
        <div className="relative flex h-full w-full -rotate-90 flex-col items-center justify-center gap-4">
          <div className="flex w-[370px] flex-col items-center justify-center border-b-2 border-black pb-3">
            <p className="font-italiana whitespace-nowrap text-[36px] text-gray-600">
              OMD ARCHITECT
            </p>
            <p className="whitespace-nowrap text-center text-xs text-gray-600">
              47/12B VO THI NH0, PHUONG TAN THUAN DONG, QUAN 7, TP HCM
            </p>
          </div>

          <div className="flex w-[170px] items-center justify-center px-1 py-1">
            <p className="whitespace-nowrap text-center text-xs font-bold leading-normal tracking-[0.18] text-black">
              designed and developed by DcViet
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-[20%] w-full flex-col items-center justify-center border border-black">
        <div className="flex w-[70%] flex-col items-center justify-center border-t-2 border-black py-5">
          <p className="text-[16px] text-gray-600">demo website</p>
        </div>

        <div className="flex w-[70%] flex-col items-center justify-center border-t-2 border-black py-5">
          <p className="text-[20px] font-bold text-gray-600">A001</p>
        </div>
      </div>
    </div>
  );
}
