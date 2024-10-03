// import Image from "next/image";
import ViewAbout from "@/components/omd_ViewAbout";

export default function OmdAbout() {
    return (
        <div className="w-[1224px] flex flex-col items-center">
            <div className="flex lg:absolute md:absolute sm:absolute lg:bottom-[930px] lg:left-[680px] lg:right-[180px] lg:top-[480px] md:left-[470px] md:top-[580px] sm:left-[280px] sm:right-[310px] sm:bottom-[70px] sm:top-[380px]">
            </div>
            <ViewAbout />
        </div>
    );
}
