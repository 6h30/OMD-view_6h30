// import Image from "next/image";
import LoginForm from '@/components/omd_Login';

export default function OmdLogin() {
  return (
    <div className="flex h-full md:mt-[125px] w-full  items-center justify-center lg:overflow-y-auto lg:scroll-smooth">
      <div className="flex h-full">
        <LoginForm />
      </div>
    </div>
  );
}
