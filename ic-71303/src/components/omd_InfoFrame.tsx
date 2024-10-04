// import Image from "next/image";
import Link from 'next/link';

export default function InfoFrame() {
  return (
    <div className="flex h-[34px] w-[832px] flex-row items-start justify-center gap-[48px] whitespace-nowrap">
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewServices">Dịch vụ</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewProjects">Dự án</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewAbout">Về OMD</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <Link href="/homeM/viewContact">Liên hệ</Link>
      </div>
      <div className="flex h-[32px] w-[132px] flex-row items-center justify-center gap-[10px] rounded-[5px] border border-black">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-7 w-7"
          >
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
