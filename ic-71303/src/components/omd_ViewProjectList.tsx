// src/components/omd_ViewProjectList.tsx
'use client'
import React from 'react';
import Image from 'next/image';

export default function ViewProjectList() {

  return (
    <div className="flex justify-center py-[20px]">

      <div className="flex flex-wrap justify-center p-5 min-h-fit w-[960px] border">

        <a href="/homeM/viewProjects"
          target="_blank"
          rel="noopener noreferrer"
          className="box group relative w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center border-2 border-gray-300 rounded-sm hover:shadow-lg transition-all duration-300 h-36 text-sm text-gray-800"
          // style={{ backgroundImage: "url('/pr-mv-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Lớp phủ nền */}
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-sm"></div>

          <div className="grid p-2 rounded">
            <div className="grid grid-cols-2 text-center">
              <p>id: 01</p>
              <p className='font-koho-bold'>Mvyn</p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-gray-200 mt-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-4">
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



        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Banana
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
          Cherry
        </div>
        <div className="box w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(30%-20px)] m-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded-sm  hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-36 text-lg text-gray-800">
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
        </div>
      </div>

    </div>

  );
}
