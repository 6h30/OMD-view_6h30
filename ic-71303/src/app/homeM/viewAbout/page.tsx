import ViewAbout from '@/components/omd_ViewAbout';

export default function OmdAbout() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth">
      <div className="flex md:w-[820px] sm:w-[420px] flex-col items-center">
        {/* <div className="flex sm:absolute sm:bottom-[70px] sm:left-[280px] sm:right-[310px] sm:top-[380px] md:absolute md:left-[470px] md:top-[580px] lg:absolute lg:bottom-[930px] lg:left-[680px] lg:right-[180px] lg:top-[480px]"></div> */}
        <ViewAbout />
      </div>
    </div>
  );
}
