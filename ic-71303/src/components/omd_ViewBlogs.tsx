// src/components/omd_ViewBlog.tsx
import Image from 'next/image';

export default function ViewBlogs() {
  return (
    <div className="flex justify-center py-[20px]">
      <div className="relative flex h-[1660] w-[960px] flex-row items-start justify-center gap-[10px] border">
        <div className="relative flex h-auto w-[24%] flex-col items-center justify-center gap-[20px] py-[20px]">
          <div className="flex h-[240px] w-full flex-col items-center justify-center gap-[10px] pl-[20px] pr-[10px]">
            <div className="h-[75%] w-[85%] rounded-[100%] border border-black">
              <Image
                width="200"
                height="0"
                src="img.svg"
                style={{ filter: 'grayscale(1)' }}
                alt="omd logo"
              />
            </div>
            <div className="flex h-[25%] w-full cursor-pointer flex-col items-center justify-end">
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
            <div className="relative flex h-[60px] w-full flex-row items-center justify-start border border-black pr-[20px]">
              <div className="relative flex w-[30%] flex-col items-center gap-[10px]">
                <p>OMD Blog</p>
              </div>

              <div className="relative flex w-[60%] flex-row items-start gap-[10px] border-l border-black pl-[10px]">
                <p>Mạng xã hội:</p>
              </div>

              <div className="relative flex w-[10%] flex-row items-start justify-center gap-[10px] border-l border-black pl-[10px]">
                <p>Time</p>
              </div>
            </div>
          </div>

          <div className="relative flex h-[180px] w-full flex-col items-start justify-start pr-[20px]">
            <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
              <div className="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
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
              <div className="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
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
              <div className="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
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
              <div className="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
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
              <div className="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
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
