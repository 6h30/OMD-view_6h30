// src/components/omd_CopyrightFrame.tsx
// import Image from "next/image";

export default function CopyrightFrame() {
  return (
    <div className="font-koho flex h-[34px] w-full flex-row items-center justify-between whitespace-nowrap">
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-start pl-[5px]">
        <a href="#">© 2024 OMD Studio</a>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-end pr-[5px]">
        <a href="#">hello@omdstudio.art</a>
      </div>
    </div>
  );
}
