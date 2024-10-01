// app/home/layout.tsx
import { ReactNode } from "react";
import CopyrightFrame from "@/components/omd_CopyrightFrame";
import NameFrame from "@/components/omd_NameFrame";
// import Image from "next/image";
import Nav from "@/components/omd_Nav";
interface OmdLayoutProps {
  children: ReactNode;
}

export default function OmdLayout({ children }: OmdLayoutProps) {
  return (
    <div className="flex flex-row gap-[20px] items-center justify-center h-[960px] border border-black w-[1200px] text-black bg-white">
      <div className="flex flex-col items-center justify-center w-[95%] h-full">
        <div className="flex h-[90%] justify-center w-[99%]">
          <div className="flex w-full flex-col gap-[10px] items-center justify-start py-[10px]">
            <div>
              <Nav />
            </div>

            <div className="scroll-smooth flex items-start border justify-center overflow-y-auto w-full h-full">
              {children}
            </div>

          </div>
        </div>
        <div className="w-[99%] h-[5%] border"></div>
        <div className="w-[99%] border h-[5%]">
          <CopyrightFrame />
        </div>
      </div>

      <div className="flex h-full">
        <NameFrame />
      </div>
    </div>
  );
}
