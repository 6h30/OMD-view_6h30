// app/home/layout.tsx
// import Image from "next/image";
import { ReactNode } from 'react';
import NavFrame from '@/components/omd_NavFrame';
import NameFrame from '@/components/omd_TitleBlocks';
import MenuFrame from '@/components/omd_MenuFrame';
import CopyrightFrame from '@/components/omd_CopyrightFrame';
interface OmdLayoutProps {
  children: ReactNode;
}

export default function OmdLayout({ children }: OmdLayoutProps) {
  return (
    <div className="w-full md:h-[960px] border border-black">
      <div className="flex h-full flex-row items-center justify-center gap-5 bg-white text-black">
        <div className="flex h-full w-full flex-col items-center justify-center gap-1">
          <div className="flex h-[90%] w-full justify-center">
            <div className="flex w-full flex-col justify-start gap-2.5 pb-2 pt-2.5">
              <header>
                <NavFrame />
              </header>
              <main>
                {children}
              </main>
            </div>
          </div>

          <div className="h-[5%] w-full border">
            <MenuFrame />
          </div>

          <footer className="h-auto w-full">
            <CopyrightFrame />
          </footer>
        </div>

        <aside className="hidden lg:flex h-full">
          <NameFrame />
        </aside>
      </div>
    </div>

  );
}
