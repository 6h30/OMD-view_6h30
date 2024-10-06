// app/home/layout.tsx
import { ReactNode } from 'react';
import CopyrightFrame from '@/components/omd_CopyrightFrame';
import NameFrame from '@/components/omd_TitleBLocks';
// import Image from "next/image";
import Nav from '@/components/omd_Nav';
import InfoFrame from '@/components/omd_InfoFrame';
interface OmdLayoutProps {
  children: ReactNode;
}

export default function OmdLayout({ children }: OmdLayoutProps) {
  return (
    <div className="w-inherit h-[960px]">
      <div className="flex h-full w-auto flex-row items-center justify-center gap-[20px] bg-white text-black">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2px]">
          <div className="flex h-[90%] w-full justify-center">
            <div className="flex w-full flex-col items-center justify-start gap-[10px] pt-[10px] pb-[8px]">
              <div>
                <Nav />
              </div>

              <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
                {children}
              </div>
            </div>
          </div>
          <div className="h-[5%] w-full border">
            <InfoFrame />
          </div>
          <div className="h-auto w-full border">
            <CopyrightFrame />
          </div>
        </div>

        <div className="flex h-full">
          <NameFrame />
        </div>
      </div>
    </div>
  );
}
