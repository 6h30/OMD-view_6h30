// src/components/omd_ViewProjectList.tsx
'use client';
import React from 'react';
// import Image from 'next/image';

export default function ViewProjectList() {
  return (
    <div className="flex justify-center py-[20px]">
      <div className="flex sm:overflow-scroll h-[700px] w-[830px] flex-wrap justify-center border border-red-500 p-5">

        <div className="box m-2 flex h-52 w-full items-center justify-center rounded-sm border-2 border-gray-300 bg-white text-lg text-gray-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg sm:w-[calc(70%-20px)] md:w-[calc(33.333%-20px)] ">
          <a
            href="/homeM/viewProjects"
            className="relative block h-full w-full overflow-hidden bg-black pb-[20%] shadow-[0_0_0_1px] shadow-white transition-all duration-200 hover:shadow-lg"
          >
            <article className="absolute inset-0 flex flex-col transition-opacity duration-200 group">
              <span
                className="img h-full bg-cover bg-center transition-opacity duration-200 group-hover:opacity-50"
                style={{
                  backgroundImage: 'url(/pr-mv-8.jpg)',
                }}
              ></span>
              <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"> {/* Chạy vào và ra */}
                <div>
                  <h1 className="text-lg font-bold text-white">Mervyn</h1>
                  <p className="text-white">Quán cà phê</p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-white">
                    <dt className="font-semibold">Địa điểm</dt>
                    <dd>Quận Tân Phú, Tp.HCM</dd>
                    <dt className="font-semibold">Chủ đầu tư</dt>
                    <dd>Chị D</dd>
                    <dt className="font-semibold">Năm</dt>
                    <dd>2022</dd>
                    <dt className="font-semibold">Diện tích</dt>
                    <dd>200 m²</dd>
                  </div>
                </div>
              </div>
              <span className="Zoom absolute right-[-80px] top-5 bg-white px-5 py-2 text-xs font-bold uppercase text-black transition-all duration-200 transform translate-x-5 group-hover:translate-x-[-80px]">
                Xem thêm
              </span>
            </article>
          </a>
        </div>

        <div className="box m-2 flex h-52 w-full items-center justify-center rounded-sm border-2 border-gray-300 bg-white text-lg text-gray-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg sm:w-[calc(70%-20px)] md:w-[calc(33.333%-20px)] ">
          <a
            href="/homeM/viewProjects"
            className="relative block h-full w-full overflow-hidden bg-black pb-[20%] shadow-[0_0_0_1px] shadow-white transition-all duration-200 hover:shadow-lg"
          >
            <article className="absolute inset-0 flex flex-col transition-opacity duration-200 group">
              <span
                className="img h-full bg-cover bg-center transition-opacity duration-200 group-hover:opacity-50"
                style={{
                  backgroundImage: 'url(/pr-mv-6.jpg)',
                }}
              ></span>
              <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"> {/* Chạy vào và ra */}
                <div>
                  <h1 className="text-lg font-bold text-white">Mervyn</h1>
                  <p className="text-white">Quán cà phê</p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-white">
                    <dt className="font-semibold">Địa điểm</dt>
                    <dd>Quận Tân Phú, Tp.HCM</dd>
                    <dt className="font-semibold">Chủ đầu tư</dt>
                    <dd>Chị D</dd>
                    <dt className="font-semibold">Năm</dt>
                    <dd>2022</dd>
                    <dt className="font-semibold">Diện tích</dt>
                    <dd>200 m²</dd>
                  </div>
                </div>
              </div>
              <span className="Zoom absolute right-[-80px] top-5 bg-white px-5 py-2 text-xs font-bold uppercase text-black transition-all duration-200 transform translate-x-5 group-hover:translate-x-[-80px]">
                Xem thêm
              </span>
            </article>
          </a>
        </div>
        <div className="box m-2 flex h-52 w-full items-center justify-center rounded-sm border-2 border-gray-300 bg-white text-lg text-gray-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg sm:w-[calc(70%-20px)] md:w-[calc(33.333%-20px)] ">
          <a
            href="/homeM/viewProjects"
            className="relative block h-full w-full overflow-hidden bg-black pb-[20%] shadow-[0_0_0_1px] shadow-white transition-all duration-200 hover:shadow-lg"
          >
            <article className="absolute inset-0 flex flex-col transition-opacity duration-200 group">
              <span
                className="img h-full bg-cover bg-center transition-opacity duration-200 group-hover:opacity-50"
                style={{
                  backgroundImage: 'url(/pr-mv-6.jpg)',
                }}
              ></span>
              <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"> {/* Chạy vào và ra */}
                <div>
                  <h1 className="text-lg font-bold text-white">Mervyn</h1>
                  <p className="text-white">Quán cà phê</p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-white">
                    <dt className="font-semibold">Địa điểm</dt>
                    <dd>Quận Tân Phú, Tp.HCM</dd>
                    <dt className="font-semibold">Chủ đầu tư</dt>
                    <dd>Chị D</dd>
                    <dt className="font-semibold">Năm</dt>
                    <dd>2022</dd>
                    <dt className="font-semibold">Diện tích</dt>
                    <dd>200 m²</dd>
                  </div>
                </div>
              </div>
              <span className="Zoom absolute right-[-80px] top-5 bg-white px-5 py-2 text-xs font-bold uppercase text-black transition-all duration-200 transform translate-x-5 group-hover:translate-x-[-80px]">
                Xem thêm
              </span>
            </article>
          </a>
        </div>



        <div className="box m-2 flex h-52 w-full items-center justify-center rounded-sm border-2 border-gray-300 bg-white text-lg text-gray-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg sm:w-[calc(70%-20px)] md:w-[calc(33.333%-20px)] ">
          <a
            href="/homeM/viewProjects"
            className="relative block h-full w-full overflow-hidden bg-black pb-[20%] shadow-[0_0_0_1px] shadow-white transition-all duration-200 hover:shadow-lg"
          >
            <article className="absolute inset-0 flex flex-col transition-opacity duration-200 group">
              <span
                className="img h-full bg-cover bg-center transition-opacity duration-200 group-hover:opacity-50"
                style={{
                  backgroundImage: 'url(/pr-mv-6.jpg)',
                }}
              ></span>
              <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"> {/* Chạy vào và ra */}
                <div>
                  <h1 className="text-lg font-bold text-white">Mervyn</h1>
                  <p className="text-white">Quán cà phê</p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-white">
                    <dt className="font-semibold">Địa điểm</dt>
                    <dd>Quận Tân Phú, Tp.HCM</dd>
                    <dt className="font-semibold">Chủ đầu tư</dt>
                    <dd>Chị D</dd>
                    <dt className="font-semibold">Năm</dt>
                    <dd>2022</dd>
                    <dt className="font-semibold">Diện tích</dt>
                    <dd>200 m²</dd>
                  </div>
                </div>
              </div>
              <span className="Zoom absolute right-[-80px] top-5 bg-white px-5 py-2 text-xs font-bold uppercase text-black transition-all duration-200 transform translate-x-5 group-hover:translate-x-[-80px]">
                Xem thêm
              </span>
            </article>
          </a>
        </div>

      </div>
    </div>
  );
}
