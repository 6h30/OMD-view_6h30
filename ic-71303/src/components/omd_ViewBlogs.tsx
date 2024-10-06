'use client';
// src/components/omd_ViewBlog.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import styles from './omd_ViewBlogs.module.css';

export default function ViewBlogs() {
  const [time, setTime] = useState<string>('');

  const fetchTime = async () => {
    try {
      const response = await fetch(
        'http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh'
      );
      const data = await response.json();
      const datetime = new Date(data.datetime);

      const day = String(datetime.getDate()).padStart(2, '0');
      const month = String(datetime.getMonth() + 1).padStart(2, '0');
      const year = datetime.getFullYear();
      const hours = String(datetime.getHours()).padStart(2, '0');
      const minutes = String(datetime.getMinutes()).padStart(2, '0');

      const formattedDateTime = ` ${hours}:${minutes} ${day}/${month}/${year} `;
      setTime(formattedDateTime);
    } catch (error) {
      console.error('Lỗi:', error);
    }
  };

  useEffect(() => {
    fetchTime();
    const intervalId = setInterval(fetchTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

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
      <div className="relative flex h-[1660] w-[960px] flex-row items-start justify-center gap-[10px] border">
        <div className="relative flex h-auto w-[24%] flex-col items-center justify-center gap-[20px] py-[20px]">
          <div className="flex h-[240px] w-full flex-col items-center justify-center gap-[10px] pl-[20px] pr-[10px]">
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

            <div className="flex h-[25%] w-full cursor-context-menu flex-col items-center justify-end">
              <div className="font-koho-bold border border-black p-[10px]">
                <p>Bài viết nổi bật</p>
              </div>
            </div>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center gap-[10px] pl-[20px] pr-[10px] pt-[5px]">
            <div className="flex h-[24%] w-full cursor-pointer flex-col">
              <div className="flex flex-col items-start justify-center gap-[10px] border-b border-black pb-[10px]">
                <div className="relative h-[50%] w-full border">
                  <Image
                    width={200}
                    height={200}
                    src="/image1.jpg"
                    alt="omg image"
                    layout="fixed"
                    className="object-cover"
                  />
                </div>

                <div className="font-koho-bold w-full text-[14px] leading-[18px]">
                  <p>
                    Thiết kế mô-đun: Liệu đây có phải là lời giải cho bài toán
                    cách mạng hóa …
                  </p>
                </div>

                <div className="w-full border text-[12px]">
                  <p>Giải pháp thiết kế</p>
                </div>
              </div>
            </div>

            <div className="flex h-[24%] w-full cursor-pointer flex-col">
              <div className="flex flex-col items-start justify-center gap-[10px] border-b border-black pb-[10px]">
                <div className="relative h-[50%] w-full border">
                  <Image
                    width={200}
                    height={200}
                    src="/image2.jpg"
                    alt="omg image"
                    layout="fixed"
                    className="object-cover"
                  />
                </div>

                <div className="font-koho-bold w-full text-[14px] leading-[18px]">
                  <p>NOM HOUSE - Tổ ấm bình yên mang đậm dấu ấn cá nhân.</p>
                </div>

                <div className="w-full border text-[12px]">
                  <p>Nhà ở</p>
                </div>
              </div>
            </div>

            <div className="flex h-[24%] w-full cursor-pointer flex-col">
              <div className="flex flex-col items-start justify-center gap-[10px] border-b border-black pb-[10px]">
                <div className="relative h-[50%] w-full border">
                  <Image
                    width={200}
                    height={200}
                    src="/image3.jpg"
                    alt="omg image"
                    layout="fixed"
                    className="object-cover"
                  />
                </div>

                <div className="font-koho-bold w-full text-[14px] leading-[18px]">
                  <p>PTH: Lựa chọn không gian sống tinh giản, gọn gàng.</p>
                </div>

                <div className="w-full border text-[12px]">
                  <p>Nhà ở</p>
                </div>
              </div>
            </div>

            <div className="flex h-[24%] w-full cursor-pointer flex-col">
              <div className="flex flex-col items-start justify-center gap-[10px] border-b border-black pb-[10px]">
                <div className="relative h-[50%] w-full border">
                  <Image
                    width={200}
                    height={200}
                    src="/image4.jpg"
                    alt="omg image"
                    layout="fixed"
                    className="object-cover"
                  />
                </div>

                <div className="font-koho-bold w-full text-[14px] leading-[18px]">
                  <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
                </div>

                <div className="w-full border text-[12px]">
                  <p>Công trình công cộng</p>
                </div>
              </div>
            </div>

            <div className="flex h-[4%] w-[80%] flex-col items-start justify-center border p-[10px]">
              <div className="h-full w-full">
                <p> pagaination 1 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-[280px] flex h-[1480px] w-[1px] bg-slate-400">
          <br />
        </div>

        <div className="relative flex h-auto w-[75%] flex-col gap-[10px] py-[20px]">
          <div className="flex pr-[20px]">
            <div className="relative flex h-[60px] w-full flex-row items-center justify-center border border-black pr-[20px]">
              <div className="relative flex w-[200px] flex-col items-center gap-[10px]">
                <p>OMD Blog</p>
              </div>

              <div className="relative flex w-[60%] flex-row items-center justify-center gap-[10px] border-x border-black pl-[0px]">
                <p>Mạng xã hội:</p>
                <span>
                  <svg
                    className="h-7 w-7 hover:fill-sky-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </span>

                <span>
                  <svg
                    className="h-7 w-7 hover:fill-sky-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span>
                  <svg
                    className="h-7 w-7 hover:fill-orange-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>

                <span>
                  <svg
                    className="h-7 w-7 hover:fill-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </span>
                <span>
                  <svg
                    className="h-7 w-7 hover:fill-pink-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                </span>
              </div>

              <div className="relative flex justify-center w-[30%] gap-[10px] pl-[0px]">
                <p className="text-center">{time}</p>
              </div>
            </div>
          </div>

          <div className="relative flex h-[180px] w-full flex-col items-start justify-start pr-[20px]">
            <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
              <div className="group relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                <p>Giải pháp thiết kế</p>
              </div>

              <div className="relative flex h-[1px] w-[40%] flex-col items-center justify-start bg-slate-400">
                <br />
              </div>
              <div className="relative flex h-[25px] w-[190px] flex-row items-end justify-end border border-black pr-[10px]">
                <p>12</p>
                <span>bài viết</span>
              </div>
            </div>

            <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
              <div className="group relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                <p>Công trình công cộng</p>
              </div>

              <div className="relative flex h-[1px] w-[40%] flex-col items-center justify-start bg-slate-400">
                <br />
              </div>
              <div className="relative flex h-[25px] w-[190px] flex-row items-end justify-end border border-black pr-[10px]">
                <p>07</p>
                <span>bài viết</span>
              </div>
            </div>

            <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
              <div className="group relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                <p>Nhà ở</p>
              </div>

              <div className="relative flex h-[1px] w-[40%] flex-col items-center justify-start bg-slate-400">
                <br />
              </div>
              <div className="relative flex h-[25px] w-[190px] flex-row items-end justify-end border border-black pr-[10px]">
                <p>10</p>
                <span>bài viết</span>
              </div>
            </div>

            <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
              <div className="group relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                <p>Nội thất</p>
              </div>

              <div className="relative flex h-[1px] w-[40%] flex-col items-center justify-start bg-slate-400">
                <br />
              </div>
              <div className="relative flex h-[25px] w-[190px] flex-row items-end justify-end border border-black pr-[10px]">
                <p>10</p>
                <span>bài viết</span>
              </div>
            </div>

            <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
              <div className="group relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px] transition-colors duration-300 hover:cursor-pointer">
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                <p>Tin tức</p>
              </div>

              <div className="relative flex h-[1px] w-[40%] flex-col items-center justify-start bg-slate-400">
                <br />
              </div>
              <div className="relative flex h-[25px] w-[190px] flex-row items-end justify-end border border-black pr-[10px]">
                <p>10</p>
                <span>bài viết</span>
              </div>
            </div>
          </div>

          <div className="relative flex h-[1400px] w-full flex-row items-end gap-[10px] pr-[20px]">
            <div className="flex h-full w-[70%] flex-col items-start gap-[20px] px-[10px]">
              <div className="relative flex h-[33%] w-full cursor-pointer flex-col items-start gap-[10px]">
                <div className="font-koho-bold relative flex h-[15%] w-full flex-col items-start text-2xl">
                  <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
                </div>
                <div className="relative flex h-[60%] w-full flex-col items-start overflow-hidden border">
                  <Image
                    width={200}
                    height={200}
                    src="/image4.jpg"
                    alt="omg image"
                    layout="responsive"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative flex h-[25%] w-full flex-col items-start border-b border-b-black">
                  <p>
                    Với bối cảnh cơ sở vật chất tại điểm Đá Trắng còn nghèo nàn,
                    chỉ có 5 phòng học kiên cố, văn hoá đọc ở trẻ em miền núi
                    nơi đây vẫn còn “đói sách”. Vì thế, ngôi trường này cần …
                  </p>
                </div>
              </div>

              <div className="relative flex h-[33%] w-full flex-col items-start gap-[10px]">
                <div className="font-koho-bold relative flex h-[15%] w-full flex-col items-start text-2xl">
                  <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
                </div>

                <div className="relative flex h-[60%] w-full flex-col items-start overflow-hidden border">
                  <Image
                    width={200}
                    height={200}
                    src="/image4.jpg"
                    alt="omg image"
                    layout="responsive"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative flex h-[25%] w-full flex-col items-start border-b border-b-black">
                  <p>
                    Với bối cảnh cơ sở vật chất tại điểm Đá Trắng còn nghèo nàn,
                    chỉ có 5 phòng học kiên cố, văn hoá đọc ở trẻ em miền núi
                    nơi đây vẫn còn “đói sách”. Vì thế, ngôi trường này cần …
                  </p>
                </div>
              </div>

              <div className="relative flex h-[33%] w-full flex-col items-start gap-[10px]">
                <div className="font-koho-bold relative flex h-[15%] w-full flex-col items-start text-2xl">
                  <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
                </div>
                <div className="relative flex h-[60%] w-full flex-col items-start overflow-hidden border">
                  <Image
                    width={200}
                    height={200}
                    src="/image4.jpg"
                    alt="omg image"
                    layout="responsive"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="items-star relative flex h-[25%] w-full flex-col">
                  <p>
                    Với bối cảnh cơ sở vật chất tại điểm Đá Trắng còn nghèo nàn,
                    chỉ có 5 phòng học kiên cố, văn hoá đọc ở trẻ em miền núi
                    nơi đây vẫn còn “đói sách”. Vì thế, ngôi trường này cần …
                  </p>
                </div>
              </div>

              <div className="gap-[10px relative h-[3%] w-full">
                <div className="relative flex h-full w-full flex-col items-end">
                  <p>1 2 3 pagination </p>
                </div>
              </div>
            </div>

            <div className="flex h-full w-[30%] flex-col items-start gap-[10px]">
              <div className="relative h-[40%] w-full border border-emerald-400"></div>
              <div className="relative h-[40%] w-full border border-emerald-400"></div>
              <div className="relative h-[20%] w-full border border-emerald-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
