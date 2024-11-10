// src/components/omd_ViewProject.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// import CarouselComponent from './omd_carouselBlog';

import ImageGrid from './omd_ImageView';
// import styles from './omd_NameFrame.module.css';

export default function ViewProjects() {
  const rotateStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'rotate 15s linear infinite',
  };

  const keyframes = `
  @keyframes rotate {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
`;
  // const images = [
  //   { src: '/image8.jpg', alt: 'Image 1' },
  //   { src: '/image9.jpg', alt: 'Image 2' },
  //   { src: '/image10.jpg', alt: 'Image 3' },
  // ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const journeys = [
    { month: '02/2023', info: 'Trình phương án đầu tiên' },
    { month: '03/2023', info: 'Thảo luận và chốt phương án' },
    { month: '04/2023', info: 'Hoàn thành phần thô' },
    { month: '05/2023', info: 'Hoàn thiện' },
    { month: '06/2023', info: 'Bàn giao dự án' },
  ];

  return (
    <div className="flex justify-center py-[20px]">
      <div className="gap-3 sm:h-[1400px] sm:w-[420px] sm:flex-col md:w-[728px] md:flex-col lg:flex lg:w-[960px] lg:flex-row lg:items-start">

        <div className="relative flex gap-[30px] lg:border sm:h-[50px] sm:w-full sm:flex-col md:h-[160px] md:w-full md:flex-col lg:h-[2000px] lg:w-[25%] lg:py-[20px] md:items-center">
          
          <div className="relative flex gap-[25px] sm:flex-row sm:items-center sm:justify-around lg:justify-center lg:flex-col lg:items-center ">
            
            <div className="hidden lg:flex lg:h-[168px] lg:w-[173px] rounded-[100%]">
              <style>{keyframes}</style>
              <div id="circle" style={rotateStyle}>
                <svg
                  className="h-full w-full"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 200 200"
                  xmlSpace="preserve"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0 "
                    />
                  </defs>

                  <circle cx="100" cy="100" r="80" fill="none" />
                  <g>
                    <use href="#circlePath" fill="none" />
                    <text className="text-lg tracking-[0.22em]">
                      <textPath href="#circlePath">
                        DESIGN YOUR HOUSE WITH OMD ARCHITECT
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <div className="h-fit w-[150px] border border-black text-center">
              <p className="font-koho-bold">MERVYN cafe</p>
            </div>

            <div className="h-fit w-[150px] border border-black text-center">
              <p>OMD Studio</p>
            </div>
          </div>

          <div className="relative gap-[20px] hidden md:flex md:flex-col md:items-center lg:flex-row lg:items-start lg:justify-center">

            <div className="gap-[80px] lg:pl-[20px] flex sm:flex-row md:flex-row lg:flex-col lg:border-l lg:border-l-black">
              {journeys.map((journey, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <p className="cursor-pointer">{journey.month}</p>
                  {hoveredIndex === index && (
                    <div className="absolute mt-1 w-32 rounded border border-gray-300 p-2 shadow-md">
                      {journey.info}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="relative gap-[10px] lg:border px-[20px] py-[20px] sm:h-[1750px] sm:w-[428px] md:w-[728px] md:h-[2000px] lg:w-[75%]">

          <div className="relative flex h-[60px] sm:h-[40px] w-full flex-row items-center justify-center border border-black">
            <div className="relative flex w-[210px] sm:flex-wrap sm:text-[12px] md:text-[16px] flex-row items-start gap-1 justify-center">
              <p>Diện tích:</p>
              <span>200m2</span>
            </div>

            <div className="relative flex w-[315px] sm:flex-wrap sm:text-[12px] md:text-[16px] flex-row items-start justify-center gap-1 border-l border-black">
              <p>Kts:</p>
              <span>Trương Khâm Thành</span>
            </div>

            <div className="relative flex w-[169px] sm:flex-wrap sm:text-[12px] md:text-[16px] flex-row items-start justify-center gap-1 border-l border-black">
              <p>Năm</p>
              <span>2022</span>
            </div>
          </div>

          <div className="relative flex w-full flex-row items-end gap-[30px] pb-[20px] pt-[20px] sm:h-[420px] md:h-[660px]">

            <div className="relative flex h-[100%] w-[75%] flex-col items-center justify-center border border-black">
              <Image
                src="/pr-mv-1.jpg"
                alt="omg image"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative flex w-[25%] flex-col items-start justify-between h-full ">
              <div className="relative ml-[20px] flex lg:h-[450px] sm:h-[73%] w-[1px] bg-gray-400">
                <br />
              </div>

              <div className="absolute lg:top-[420px] sm:top-[68%] flex h-[1px] w-full bg-gray-400">
                <br />
              </div>

              <div className="relative flex w-full flex-col items-center justify-center border border-black sm:h-[80px] md:h-[150px]">
                <div className="absolute md:right-[80px] md:bottom-[80px] sm:right-[40px] sm:bottom-[40px] ">
                  <div className="md:h-[168px] md:w-[173px] sm:h-[120px] sm:w-[120px] items-center justify-center rounded-[100%]">
                    <style>{keyframes}</style>
                    <div id="circle" style={rotateStyle}>
                      <svg
                        className="h-full w-full"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 200 200"
                        xmlSpace="preserve"
                      >
                        <defs>
                          <path
                            id="circlePath"
                            d="M 100, 100 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0 "
                          />
                        </defs>

                        <circle cx="100" cy="100" r="80" fill="none" />
                        <g>
                          <use href="#circlePath" fill="none" />
                          <text className="text-lg tracking-[0.22em]">
                            <textPath href="#circlePath">
                              DESIGN YOUR HOUSE WITH OMD ARCHITECT
                            </textPath>
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">
                  1
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-start justify-start gap-[20px] lg:h-[1224px]">
            <div className="relative flex h-[150px] w-full flex-row items-center justify-between px-[20px]">
              <div className="relative flex flex-col items-end justify-end lg:gap-[30px] md:gap-[40px] sm:gap-[10px]">
                <div>
                  <p className="font-italiana text-center leading-[53px] tracking-[5px] sm:text-[43px] md:text-[63px] lg:text-[73px]">
                    OMD
                  </p>
                </div>

                <div>
                  <p className="md:text-[16px] sm:text-[12px] leading-3 tracking-[1.2px]">
                    kiến tạo dự án
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-end justify-end lg:gap-[30px] md:gap-[40px] sm:gap-[10px]">
                <div>
                  <p className="md:text-[16px] sm:text-[12px] sm:text-end sm:leading-4 leading-3 tracking-[1.2px]">
                    được đồng hành cùng chị D trong hành trình
                  </p>
                </div>

                <div>
                  <p className="font-italiana text-center tracking-[5px] sm:text-[43px] sm:leading-[33px] md:text-[63px] lg:text-[73px] lg:leading-[53px]">
                    MERVYN
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
              <div className="relative flex h-[25px] w-[40%] sm:text-[12px] md:text-[16px] flex-col items-center justify-center border border-gray-500 px-[10px]">
                <p>Nhiệm vụ thiết kế</p>
              </div>

              <div className="relative flex h-[1px] w-[70%] flex-col items-start justify-center bg-gray-400 px-[10px]">
                <br />
              </div>
            </div>

            <div className="relative flex md:h-[150px] sm:text-[12px] md:text-[16px] w-full flex-row items-center justify-between py-[10px]">
              <p>
                Gắn kết mọi người với môi trường xung quanh. Kiến trúc
                Mediterranean, hay Địa Trung Hải cũng là câu chuyện được Mervyn
                muốn kể lại, thiết kế thân thiện với môi trường, bền vững tạo ra
                không gian thư giãn cho cộng đồng và thế hệ tương lai.
              </p>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
              <div className="relative flex h-[1px] w-[70%] flex-col items-start justify-center bg-gray-400 px-[10px]">
                <br />
              </div>

              <div className="relative flex h-[25px] w-[40%] sm:text-[12px] md:text-[16px] flex-col items-center justify-center border border-gray-500 px-[10px]">
                <p>Bộ sưu tập</p>
              </div>
            </div>

            <div className="relative flex h-[820px] w-full flex-col items-center justify-center">
              <div className="relative flex h-[80%] w-full flex-col items-center justify-start">
                {/* <div className="relative flex h-[90%] w-[90%] flex-col items-center justify-center">
                  <CarouselComponent images={images} />
                </div> */}

                <ImageGrid />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
