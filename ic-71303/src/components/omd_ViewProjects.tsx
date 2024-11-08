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
      <div className="gap-[10px] sm:h-[1400px] sm:w-[428px] sm:flex-col md:h-[1500px] md:w-[728px] md:flex-col lg:flex lg:min-h-[2048px] lg:w-[960px] lg:flex-row lg:items-start lg:justify-start">
        <div className="relative flex gap-[30px] border sm:h-[100px] sm:w-full sm:flex-col md:h-[350px] md:w-full md:flex-col lg:h-full lg:w-[25%] lg:flex-col lg:py-[20px]">
          <div className="relative flex gap-[25px] sm:flex-row sm:items-center sm:justify-start md:flex-row md:items-center md:justify-start lg:flex-col lg:items-center lg:justify-center">
            <div className="h-[168px] w-[173px] items-center justify-center rounded-[100%]">
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

          <div className="relative gap-[20px] sm:hidden md:flex md:flex-col lg:flex lg:flex-row lg:items-start lg:justify-center">
            <div className="gap-[80px] pl-[20px] sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-col lg:border-l lg:border-l-black">
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

        <div className="relative gap-[10px] border px-[20px] py-[20px] sm:h-[1340px] sm:w-[428px] md:h-[1440px] md:w-[728px] lg:h-[2000px] lg:w-[75%]">
          <div className="relative flex h-[60px] w-full flex-row items-center justify-center border border-black pl-[10px]">
            <div className="relative flex w-[200px] flex-row items-start gap-[10px]">
              <p>Diện tích:</p>
              <span>208m2</span>
            </div>

            <div className="relative flex w-[318px] flex-row items-start gap-[10px] border-l border-black pl-[10px]">
              <p>Kts:</p>
              <span>Trương Khâm Thành</span>
            </div>

            <div className="relative flex w-[169px] flex-row items-start justify-center gap-[10px] border-l border-black pl-[10px]">
              <p>Năm</p>
              <span>2023</span>
            </div>
          </div>

          <div className="relative flex w-full flex-row items-end gap-[30px] pb-[20px] pt-[20px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
            <div className="relative flex h-[100%] w-[75%] flex-col items-center justify-center border border-black">
              <Image
                src="/pr-mv-1.jpg"
                alt="omg image"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative flex w-[25%] flex-col items-start justify-between sm:h-[70px] md:h-[150px] lg:h-full">
              <div className="relative ml-[20px] flex h-[450px] w-[1px] bg-gray-400">
                <br />
              </div>

              <div className="absolute top-[420px] flex h-[1px] w-full bg-gray-400">
                <br />
              </div>

              <div className="relative flex w-full flex-col items-center justify-center border border-black sm:h-[70px] md:h-[150px] lg:h-[150px]">
                <div className="absolute bottom-[80px] right-[80px]">
                  <div className="h-[168px] w-[173px] items-center justify-center rounded-[100%]">
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
              <div className="relative flex flex-col items-end justify-end gap-[20px]">
                <div>
                  <p className="font-italiana text-center leading-[53px] tracking-[5px] sm:text-[33px] md:text-[53px] lg:text-[73px]">
                    OMD
                  </p>
                </div>

                <div>
                  <p className="text-[16px] leading-3 tracking-[1.2px]">
                    kiến tạo dự án
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-end justify-end gap-[20px]">
                <div>
                  <p className="text-[16px] leading-3 tracking-[1.2px]">
                    được đồng hành cùng chị D trong hành trình
                  </p>
                </div>

                <div>
                  <p className="font-italiana text-center tracking-[5px] sm:text-[33px] sm:leading-[33px] md:text-[53px] lg:text-[73px] lg:leading-[53px]">
                    MERVYN
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
              <div className="relative flex h-[25px] w-[30%] flex-col items-center justify-center border border-gray-500 px-[10px]">
                <p>Nhiệm vụ thiết kế</p>
              </div>

              <div className="relative flex h-[1px] w-[70%] flex-col items-start justify-center bg-gray-400 px-[10px]">
                <br />
              </div>
            </div>

            <div className="relative flex h-[150px] w-full flex-row items-center justify-between py-[10px]">
              {/* <p>
                “Café-Cóc” – trong tiếng Việt, thuật ngữ này chỉ quán cà phê
                bình dân với chỗ ngồi thấp, có thể dễ dàng gấp lại và bố trí khi
                cần thiết. Đó là nơi mọi người có thể ghé qua một cách nhanh
                chóng và thuận tiện, gọi đồ uống, nhâm nhi một mình hoặc với bạn
                bè, sau đó tiếp tục công việc trong ngày của mình.
              </p> */}
              <p>
                Gắn kết mọi người với môi trường xung quanh. Kiến trúc
                Mediterranean, hay Địa Trung Hải cũng là câu chuyện được Mervyn
                muốn kể lại, thiết kế thân thiện với môi trường, bền vững tạo ra
                không gian thư giãn cho cộng đồng và thế hệ tương lai.{' '}
              </p>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
              <div className="relative flex h-[1px] w-[70%] flex-col items-start justify-center bg-gray-400 px-[10px]">
                <br />
              </div>

              <div className="relative flex h-[25px] w-[30%] flex-col items-center justify-center border border-gray-500 px-[10px]">
                <p>Bộ sưu tập</p>
              </div>
            </div>

            <div className="relative flex h-[820px] w-full flex-col items-center justify-center">
              <div className="relative flex h-[720px] w-full flex-col items-center justify-start">
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
