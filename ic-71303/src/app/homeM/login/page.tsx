// import Image from "next/image";
import LoginForm from '@/components/omd_Login';

export default function OmdLogin() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto scroll-smooth border">
      <div className='flex items-center justify-center h-full'>
        <LoginForm />
      </div>
    </div>

  );
}
