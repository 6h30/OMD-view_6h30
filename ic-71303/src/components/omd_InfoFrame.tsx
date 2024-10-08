// import Image from "next/image";

'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const SvgDark: React.FC = () => (
  <svg
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="16 5 12 9 8 5" />
  </svg>
);

const SvgNormal: React.FC = () => (
  <svg
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="8 6 12 2 16 6" />
  </svg>
);

export default function InfoFrame() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="font-koho flex h-full w-full flex-row items-center justify-center gap-[10px]">
      <div className="flex w-[40%] items-center justify-center gap-[10px] border-r-2 px-[12px]">
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
        <input
          className="block w-full rounded-sm border border-slate-300 bg-white py-1 pl-7 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Tìm kiếm ..."
          type="text"
          name="search"
        />
      </div>
      <div className="flex w-[60%] flex-row items-center justify-between">
        <div className="group/item flex w-[20%] cursor-pointer flex-row items-center justify-start">
          <span className="flex w-[30%]">
            <Link href="/homeM/login">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </Link>
          </span>
          <Link href="/homeM/login">
            <div className="group/edit invisible flex group-hover/item:visible">
              <p>Đăng nhập</p>
            </div>
          </Link>
        </div>
        <div className="group/item flex w-[20%] cursor-not-allowed items-center justify-end">
          <span className="flex w-[30%]">
            <svg
              className="h-7 w-7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="3" y1="21" x2="21" y2="21" />
              <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />
              <path d="M9 21v-8a3 3 0 0 1 6 0v8" />
            </svg>
          </span>
          <div className="group/edit invisible flex group-hover/item:visible">
            <p>Đăng kí</p>
          </div>
        </div>
        <div
          className="flex w-[20%] cursor-pointer items-center justify-end p-4 transition-all duration-300"
          onClick={toggleMode}
        >
          {isDarkMode ? <SvgDark /> : <SvgNormal />}
        </div>
      </div>
    </div>
  );
}
