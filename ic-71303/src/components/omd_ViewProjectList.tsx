// src/components/omd_ViewProjectList.tsx
'use client';
import React from 'react';
// import Image from 'next/image';

export default function ViewProjectList() {
  return (
    <div className="flex justify-center py-[20px]">
      <div className="flex min-h-fit w-[960px] flex-wrap justify-center border p-5">
        <a
          href="/homeM/viewProjects"
          target=""
          rel="noopener noreferrer"
          className="box group relative m-2 flex h-36 w-full items-center justify-center rounded-sm border-2 border-gray-300 text-sm text-gray-800 transition-all duration-300 hover:shadow-lg sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)]"
          // style={{ backgroundImage: "url('/pr-mv-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid rounded p-2">
            <div className="grid grid-cols-2 text-center">
              <p>id: 01</p>
              <p className="font-koho-bold">Mvyn</p>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-gray-200 pt-2 leading-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p>Địa điểm:</p>
              <p>Q. Tân Phú, Tp HCM</p>

              <p>Chủ đầu tư:</p>
              <p>Chi D</p>

              <p>Năm:</p>
              <p>2022</p>

              <p>Diện tích:</p>
              <p>200 m²</p>
            </div>
          </div>
        </a>

        <div className="box m-2 flex h-36 w-full items-center justify-center rounded-sm border-2 border-gray-300 bg-white text-lg text-gray-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)]">
          <a
            href="/projects/malokacka"
            className="relative block h-full w-full overflow-hidden bg-black pb-[20%] shadow-[0_0_0_1px] shadow-white transition-all duration-200 hover:shadow-lg"
          >
            <article className="absolute inset-0 flex flex-col">
              <span
                className="img h-full bg-cover bg-center transition-opacity duration-200 hover:opacity-25"
                style={{
                  backgroundImage: `url(https://bjk.pl/images/cache/thumb_700x350/projects/malokacka/1mkacka.jpg)`,
                }}
              ></span>
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <h1 className="text-lg font-bold text-white">Mervyn</h1>
                  <p className="text-white">Tòa nhà dân cư</p>
                  <dl className="mt-2 space-y-1 text-sm text-white">
                    <dt className="font-semibold">Địa điểm</dt>
                    <dd>Gdynia, Đường Małokacka</dd>
                    <dt className="font-semibold">Chủ đầu tư</dt>
                    <dd>INVEST KOMFORT</dd>
                    <dt className="font-semibold">Năm</dt>
                    <dd>2023</dd>
                    <dt className="font-semibold">Diện tích</dt>
                    <dd>11.600 m²</dd>
                  </dl>
                </div>
              </div>
              <span className="Zoom absolute right-[-80px] top-5 bg-white px-5 py-2 text-xs font-bold uppercase text-black transition-all duration-200 hover:right-5">
                Xem thêm
              </span>
            </article>
          </a>
        </div>

        <div className="box m-2 flex h-48 w-full items-center justify-center rounded-sm border-2 border-gray-300 bg-white text-lg text-gray-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)]">
          Cherry
        </div>

        {/* <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Date
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Elderberry
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Fig
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Grape
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Honeydew
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Kiwi
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Lemon
        </div> */}
      </div>
    </div>
  );
}
