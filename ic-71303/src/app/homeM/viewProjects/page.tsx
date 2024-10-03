// import Image from "next/image";
import ViewProjects from "@/components/omd_ViewProjects";

export default function OmdProjects() {
    return (
        <div className="font-koho">
            <div className="lg:absolute md:absolute sm:absolute lg:bottom-[930px] lg:left-[680px] lg:right-[180px] lg:top-[480px] md:left-[470px] md:top-[580px] sm:left-[280px] sm:right-[310px] sm:bottom-[70px] sm:top-[380px]">
                <div className="flex lg:h-[150px] lg:w-[150px] items-center justify-center border sm:h-[80px] md:w-[130px] md:h-[130px] sm:w-[80px]">
                    <p>logo</p>
                </div>
            </div>
            <ViewProjects />
        </div>
    );
}
