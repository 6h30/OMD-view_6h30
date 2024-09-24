// import Image from "next/image";
import ViewProject from "@/components/omd_ViewProject";

export default function Main() {
    return (
        <div>
            <div className="absolute bottom-[930px] left-[680px] right-[180px] top-[500px]">
                <div className="flex h-[150px] w-[150px] items-center justify-center border">
                    <p>logo</p>
                </div>
            </div>
            <ViewProject />
        </div>
    );
}
