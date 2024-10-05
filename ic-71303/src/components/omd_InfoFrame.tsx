// // import Image from "next/image";
// import Link from 'next/link';

export default function InfoFrame() {
  return (
    <div className="font-koho flex h-full w-full flex-row items-center justify-center gap-[10px]">
      <div className="flex w-[40%] items-center justify-start border border-black">
        <svg
          className="h-7 w-7 hover:fill-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input className="border" type="text" />
      </div>
      <div className="flex w-[75%] flex-row justify-start items-center border border-black">
        <div className="cursor-pointer flex flex-row w-[20%] items-center justify-start border">
          <span className="flex w-[30%]">
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {' '}
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />{' '}
              <polyline points="10 17 15 12 10 7" />{' '}
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </span>
          <p className="flex">login</p>
        </div>
        <div className="cursor-not-allowed flex w-[20%] items-center justify-center border">
          <p>signup</p>
        </div>
        <div className="flex w-[20%] items-center justify-center border">
          <p>01</p>
        </div>
      </div>
    </div>
  );
}
