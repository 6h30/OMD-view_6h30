// app/home/layout.tsx
import { ReactNode } from "react";
import CopyrightFrame from "@/components/omd_CopyrightFrame";
import NameFrame from "@/components/omd_TitleBLocks";
// import Image from "next/image";
import Nav from "@/components/omd_Nav";
interface OmdLayoutProps {
  children: ReactNode;
}

export default function OmdLayout({ children }: OmdLayoutProps) {
  return (
    <div className="h-[960px] w-auto">
      <div className="flex flex-row gap-[20px] items-center justify-center h-full w-auto text-black bg-white">
        <div className="flex flex-col items-center justify-center h-full w-auto">
          <div className="flex h-[90%] justify-center w-full">
            <div className="flex w-full flex-col gap-[10px] items-center justify-start py-[10px]">
              <div>
                <Nav />
              </div>

              <div className="scroll-smooth flex items-start border justify-center overflow-y-auto w-full h-full">
                {children}
              </div>
            </div>
          </div>
          <div className="w-full h-[5%] border"></div>
          <div className="w-full border h-[5%]">
            <CopyrightFrame />
          </div>
        </div>

        <div className="flex h-full w-auto">
          <NameFrame />
        </div>

      </div>
    </div>
  );
}
