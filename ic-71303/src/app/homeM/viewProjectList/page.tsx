// import Image from "next/image";
import ViewProjectList from '@/components/omd_ViewProjectList';

export default function OmdProjectList() {
  return (
    <div className="flex h-full w-full items-start justify-center scroll-smooth border">
      <div className="font-koho md:w-[820px] sm:w-[420px]">
        <ViewProjectList />
      </div>
    </div>
  );
}
