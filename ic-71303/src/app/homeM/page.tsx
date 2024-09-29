"use client";
import CopyrightFrame from "@/components/omd_CopyrightFrame";
import NameFrame from "@/components/omd_NameFrame";
// import Image from "next/image";
import Nav from "@/components/omd_Nav";
import ViewAbout from "@/components/omd_ViewAbout";
import ViewBlogs from "@/components/omd_ViewBlog";
import ViewIntro from "@/components/omd_ViewIntro";
import ViewProject from "@/components/omd_ViewProject";

export default function Main() {
  return (
    <div className="flex flex-row gap-[20px] items-start justify-end h-[900px] border border-red-500 w-[1200px] text-black bg-white">
      <div className="flex flex-col items-center justify-center border border-green-500 w-[95%] h-full">

        <div className="flex h-[95%] border border-purple-600 justify-center w-[95%]">
          <div className="flex flex-col gap-[10px] border border-orange-700 items-center justify-start pt-[10px]">
            <div>
                <Nav />
            </div>
            <div className="scroll-smooth flex items-start justify-center overflow-y-auto w-[1024px] h-[770px]">
                 <ViewBlogs />
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[5%] border">
            
        </div>
        <div className="w-[95%] border h-[5%]">
            <CopyrightFrame />
        </div>

      </div>

      <div className="flex h-full">
        <NameFrame />
      </div>

    </div>
  );
}
