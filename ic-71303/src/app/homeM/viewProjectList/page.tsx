// import Image from "next/image";
import ViewProjectList from '@/components/omd_ViewProjectList';

export default function OmdProjectList() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
      <div className="font-koho w-[1024px]">
        <ViewProjectList />
      </div>
    </div>
  );
}
