// import Image from "next/image";
import ViewProjectList from '@/components/omd_ViewProjectList';

export default function OmdProjectList() {
  return (
    <div className="flex h-full w-full items-start justify-center border overflow-y-auto scroll-smooth">
      <div className="font-koho md:w-[820px] sm:w-[420px] h-[800px]">
        <ViewProjectList />
      </div>
    </div>
  );
}
