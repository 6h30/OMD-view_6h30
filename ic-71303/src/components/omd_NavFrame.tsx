// src/components/omd_Nav.tsx
// import Image from "next/image";
// import styles from './omd_Nav.module.css';
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavFrame() {
  const pathname = usePathname();

  const dichVuActive = pathname === '/homeM/viewServices';
  const duAnActive = pathname === '/homeM/viewProjectList';
  const veOmdActive = pathname === '/homeM/viewAbout';
  const lienHeActive = pathname === '/homeM/viewContact';
  const blogActive = pathname === '/homeM/blogs';

  // State để điều khiển mở/đóng modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Hàm để toggle modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className="hidden font-koho lg:flex h-[34px] w-[830px] flex-row items-start justify-center gap-[48px] whitespace-nowrap border">
          {/* Mục Dịch vụ */}
          <div className="group relative h-[32px] w-[132px] border border-black transition-colors duration-300 hover:cursor-pointer">
            <span
              className={`absolute bottom-0 left-0 h-[2px] ${dichVuActive ? 'w-full bg-gray-700' : 'w-0 bg-gray-500'
                } transition-all duration-300 group-hover:w-full`}></span>
            <Link
              href="/homeM/viewServices"
              className="flex h-full w-full items-center justify-center">
              <p className={`${dichVuActive ? 'font-koho-bold text-gray-800' : ''}`}>Dịch vụ</p>
            </Link>
          </div>

          {/* Mục Dự án */}
          <div className="group relative h-[32px] w-[132px] border border-black transition-colors duration-300 hover:cursor-pointer">
            <span
              className={`absolute bottom-0 left-0 h-[2px] ${duAnActive ? 'w-full bg-gray-700' : 'w-0 bg-gray-500'
                } transition-all duration-300 group-hover:w-full`}></span>
            <Link
              href="/homeM/viewProjectList"
              className="flex h-full w-full items-center justify-center">
              <p className={`${duAnActive ? 'font-koho-bold text-gray-800' : ''}`}>Dự án</p>
            </Link>
          </div>

          {/* Mục Về OMD */}
          <div className="group relative h-[32px] w-[132px] border border-black transition-colors duration-300 hover:cursor-pointer">
            <span
              className={`absolute bottom-0 left-0 h-[2px] ${veOmdActive ? 'w-full bg-gray-700' : 'w-0 bg-gray-500'
                } transition-all duration-300 group-hover:w-full`}></span>
            <Link href="/homeM/viewAbout" className="flex h-full w-full items-center justify-center">
              <p className={`${veOmdActive ? 'font-koho-bold text-gray-800' : ''}`}>Về OMD</p>
            </Link>
          </div>

          {/* Mục Liên hệ */}
          <div className="group relative h-[32px] w-[132px] border border-black transition-colors duration-300 hover:cursor-pointer">
            <span
              className={`absolute bottom-0 left-0 h-[2px] ${lienHeActive ? 'w-full bg-gray-700' : 'w-0 bg-gray-500'
                } transition-all duration-300 group-hover:w-full`}></span>
            <Link
              href="/homeM/viewContact"
              className="flex h-full w-full items-center justify-center">
              <p className={`${lienHeActive ? 'font-koho-bold text-gray-800' : ''}`}>Liên hệ</p>
            </Link>
          </div>

          {/* Mục Blog */}
          <div className="group relative h-[32px] w-[132px] border border-black transition-colors duration-300 hover:cursor-pointer">
            <span
              className={`absolute bottom-0 left-0 h-[2px] ${blogActive ? 'w-full bg-gray-700' : 'w-0 bg-gray-500'
                } transition-all duration-300 group-hover:w-full`}></span>
            <Link href="/homeM/blogs" className="flex h-full w-full items-center justify-center">
              <p className={`${blogActive ? 'font-koho-bold text-gray-800' : ''}`}>Blog</p>
            </Link>
          </div>
        </div>
      </div>


      <div className='flex justify-end mr-5'>
        {/* Nút để mở modal trên màn hình nhỏ */}
        <button
          className="lg:hidden p-2 border border-black rounded-sm flex items-center space-x-2" onClick={toggleModal}>
          <svg
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>

      {/* Drawer Modal cho màn hình nhỏ */}
      <div
        className={`fixed inset-0 z-50 transition-transform transform ${isModalOpen ? 'translate-x-[70%]' : 'translate-x-full'} bg-black bg-opacity-50 lg:hidden`} onClick={toggleModal}>
        <div
          className="w-[30%] bg-white h-[30%] p-4 shadow-lg transition-transform transform"
          onClick={(e) => e.stopPropagation()} // Ngừng sự kiện click cho drawer
        >
          <button
            className="text-right w-full mb-4 text-gray-600 flex items-center justify-end space-x-2"
            onClick={toggleModal}>
            <svg
              className="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Các mục trong drawer hiển thị theo chiều dọc */}
          <div className="flex flex-col items-end gap-4">
            {/* Mục Dịch vụ */}
            <Link
              href="/homeM/viewServices"
              className="w-full text-center border-b border-gray-300 py-2">
              Dịch vụ
            </Link>

            {/* Mục Dự án */}
            <Link
              href="/homeM/viewProjectList"
              className="w-full text-center border-b border-gray-300 py-2">
              Dự án
            </Link>

            <Link
              href="/homeM/viewAbout"
              className="w-full text-center border-b border-gray-300 py-2">
              Về OMD
            </Link>
            <Link
              href="/homeM/viewContact"
              className="w-full text-center border-b border-gray-300 py-2">
              Liên hệ
            </Link>
            <Link href="/homeM/blog" className="w-full text-center border-b border-gray-300 py-2">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
