// import Image from "next/image";
import ViewProjects from '@/components/omd_ViewProjects';

export default function OmdProjects() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
      <div className="font-koho w-[1024px]">
        {/* <div className="sm:absolute sm:bottom-[70px] sm:left-[280px] sm:right-[310px] sm:top-[380px] md:absolute md:left-[470px] md:top-[580px] lg:absolute lg:bottom-[930px] lg:left-[680px] lg:right-[180px] lg:top-[480px]">
          <div className="flex items-center justify-center border sm:h-[80px] sm:w-[80px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px]">
            <p>logo</p>
          </div>
        </div> */}
        <ViewProjects />
      </div>
    </div>
  );
}
