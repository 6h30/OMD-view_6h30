// src/components/omd_ViewProjectList.tsx
'use client';
// import Image from 'next/image';
import React from 'react';

export default function ViewProjectList() {
  return (
    <div className="flex h-auto py-[20px] items-start gap-5 border p-5" style={{
      backgroundColor: '#ffffff',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23cacaca' fill-opacity='0.3'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
    }}>
      {/* <div className="flex sm:overflow-y-scroll h-[700px] w-[830px] flex-wrap justify-center border border-red-500 p-5" style={{
        backgroundColor: '#ffffff',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23cacaca' fill-opacity='0.3'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",}}>

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
              <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

      </div> */}

      <div className="flex flex-wrap justify-center items-center gap-5 p-5">

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>
        
        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

        <div className="box flex sm:w-[60%] md:w-[40%] h-[250px]">
          <div className="grid grid-rows-4 grid-flow-col gap-2 w-full h-full border">

            <div className="border row-span-3 col-span-2 flex items-center justify-center overflow-hidden">
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
                  <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-200 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="row-span-1 col-span-1 flex items-start justify-start pl-2">
              <div className="grid text-sm">
                <h1 className="text-lg font-koho-bold">Mervyn</h1>
                <p>Quán cà phê</p>
              </div>
            </div>

            <div className="row-span-1 col-span-1 flex items-center justify-end pr-2">
              <p className='text-2xl'>2022</p>
            </div>

          </div>
        </div>

      </div>


    </div>
  );
}
