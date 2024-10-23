// import Image from "next/image";

import ViewContact from "@/components/omd_ViewContact";


export default function OmdContact() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
    <div className='flex items-center justify-center h-full'>
      <ViewContact />
    </div>
  </div>
  );
}

