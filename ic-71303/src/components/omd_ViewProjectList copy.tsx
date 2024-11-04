// src/components/omd_ViewProjectList.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ViewProjectList() {
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

  return (
    <div className="flex justify-center py-[20px]">
      <div className="gap-[10px] sm:h-[1400px] sm:w-[428px] sm:flex-col md:h-[1500px] md:w-[728px] md:flex-col lg:flex lg:min-h-[2048px] lg:w-[960px] lg:flex-row lg:items-start lg:justify-start">
        <div className="relative flex gap-[30px] border sm:h-[100px] sm:w-full sm:flex-col md:h-[350px] md:w-full md:flex-col lg:h-full lg:w-[40%] lg:flex-col lg:py-[20px]">
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
              <p>Team</p>
            </div>

            <div className="h-fit w-[200px]">
              <div className="flex items-end justify-start">
                <div className="relative ml-[20px] flex h-[230px] w-[1px] bg-gray-400">
                  <br />
                </div>
                <div className="m-[5px] mb-[40px] flex h-[150px] w-full bg-gray-300">
                  <Image
                    width={200}
                    height={200}
                    src="/avatar-1a.png"
                    alt="omg image"
                    layout="fixed"
                    className="absolute bottom-[30px] right-[80px] h-[220px] w-[200px] object-cover"
                  />
                </div>
              </div>

              <div className="">
                <div className="absolute top-[450px] flex h-[1px] w-[200px] bg-gray-400">
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative gap-[10px] border px-[20px] sm:h-[1340px] sm:w-[428px] md:h-[1440px] md:w-[728px] lg:h-[2000px] lg:w-[60%]">
          <div className="relative flex w-full justify-center gap-[30px] border pb-[20px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
            <div className="relative flex h-[75%] w-[75%] border border-black">
              <Image
                src="/pr-mv-1.jpg"
                alt="omg image"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative flex w-full flex-col justify-start gap-[20px] border lg:h-[1224px]">
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
          </div>
        </div>
      </div>
    </div>
  );
}
