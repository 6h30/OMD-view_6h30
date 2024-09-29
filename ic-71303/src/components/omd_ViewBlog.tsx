// src/components/omd_ViewBlog.tsx
import Image from "next/image";
// import styles from './omd_ViewBlogs.module.css';

export default function ViewBlogs() {
  return (
<div className="font-koho visible h-[1700px] w-[100%] overflow-hidden p-[20px]">
  <div className="absolute bottom-[930px] left-[680px] right-[180px] top-[500px]">
    <div className="flex h-[150px] w-[150px] items-center justify-center border">
      <p>logo</p>
    </div>
  </div>

  <div className="relative flex h-[1660] w-[960px] flex-row items-start justify-start gap-[10px]">
    <div className="relative flex h-[1660px] w-[25%] flex-col gap-[20px] border border-green-500 py-[20px]">
      <div className="relative flex h-[260px] w-full flex-col items-center justify-center gap-[10px]">
        <div className="h-[75%] w-[80%] border border-black p-[30px]">
          <Image src="" alt="" />
        </div>
        <div className="flex h-[30%] w-[80%] flex-col items-center justify-center border border-black">
          <div>
            <p>Bài viết nổi bật</p>
          </div>
        </div>
      </div>

      <div className="relative flex h-[1400px] w-full flex-col items-center justify-center gap-[10px]">
        <div className="flex h-[24%] w-[80%] flex-col items-start justify-center border border-black p-[10px]">
          <div className="h-[60%] w-full border">
            <Image src="" alt="" />
          </div>

          <div className="h-[30%] w-full border">
            <p>title</p>
          </div>

          <div className="h-[10%] w-full border">
            <p>tag</p>
          </div>
        </div>
        <div className="flex h-[24%] w-[80%] flex-col items-start justify-center border border-black p-[10px]">
          <div className="h-[60%] w-full border">
            <Image src="" alt="" />
          </div>

          <div className="h-[30%] w-full border">
            <p>title</p>
          </div>

          <div className="h-[10%] w-full border">
            <p>tag</p>
          </div>
        </div>
        <div className="flex h-[24%] w-[80%] flex-col items-start justify-center border border-black p-[10px]">
          <div className="h-[60%] w-full border">
            <Image src="" alt="" />
          </div>

          <div className="h-[30%] w-full border">
            <p>title</p>
          </div>

          <div className="h-[10%] w-full border">
            <p>tag</p>
          </div>
        </div>
        <div className="flex h-[24%] w-[80%] flex-col items-start justify-center border border-black p-[10px]">
          <div className="h-[60%] w-full border">
            <Image src="" alt="" />
          </div>

          <div className="h-[30%] w-full border">
            <p>title</p>
          </div>

          <div className="h-[10%] w-full border">
            <p>tag</p>
          </div>
        </div>
        <div className="flex h-[4%] w-[80%] flex-col items-start justify-center border border-black p-[10px]">
          <div className="h-full w-full border">
            <p> pagaination 1 </p>
          </div>
        </div>
      </div>
    </div>

    <div className="relative flex h-[1660px] w-[75%] flex-col gap-[10px] border border-blue-500 px-[20px] py-[20px]">
      <div className="relative flex h-[60px] w-full flex-row items-center justify-center border border-black pl-[10px]">
        <div className="relative flex w-[200px] flex-col items-center gap-[10px]">
          <p>OMG`&apos`s Blog</p>
        </div>
        <div className="relative flex w-[318px] flex-row items-start gap-[10px] border-l border-black pl-[10px]">
          <p>Mạng xã hội:</p>
          <span>F</span>
          <span>T</span><span>L</span><span>G</span>
        </div>
        <div className="relative flex w-[169px] flex-row items-start justify-center gap-[10px] border-l border-black pl-[10px]">
          <p>Time</p>
        </div>
      </div>

      <div className="relative flex h-[200px] w-full flex-col items-start justify-start border border-red-500 p-[0px]">
        <div className="relative flex h-[35px] w-full flex-row items-center justify-between gap-[20px]">
          <div className="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
            <p>Giải pháp thiết kế</p>
          </div>
          <div className="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
            <p>horizontal line</p>
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
          <div className="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
            <p>horizontal line</p>
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
          <div className="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
            <p>horizontal line</p>
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
          <div className="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
            <p>horizontal line</p>
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
          <div className="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
            <p>horizontal line</p>
          </div>
          <div className="relative flex h-[25px] w-[190px] flex-row items-end justify-end border border-black pr-[10px]">
            <p>10</p>
            <span>bài viết</span>
          </div>
        </div>
      </div>

      <div className="relative flex h-[1400px] w-full flex-row items-end gap-[10px] border border-red-500">
        <div className="relative flex h-full w-[70%] flex-col items-start gap-[20px] border border-purple-500 p-[10px]">
          <div className="relative flex h-[33%] w-full flex-col items-start gap-[10px] border border-orange-300">
            <div className="relative flex h-[15%] w-full flex-col items-start border">
              <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
            </div>
            <div className="relative flex h-[60%] w-full flex-col items-start border">
              <p>image</p>
            </div>
            <div className="relative flex h-[25%] w-full flex-col items-start border">
              <p>Với bối cảnh cơ sở vật chất tại điểm Đá Trắng còn nghèo nàn, chỉ có 5 phòng học kiên cố, văn hoá đọc ở trẻ em miền núi nơi đây vẫn còn “đói sách”. Vì thế, ngôi trường này cần …</p>
            </div>
          </div>

          <div className="relative flex h-[33%] w-full flex-col items-start gap-[10px] border border-orange-300">
            <div className="relative flex h-[15%] w-full flex-col items-start border">
              <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
            </div>
            <div className="relative flex h-[60%] w-full flex-col items-start border">
              <p>image</p>
            </div>
            <div className="relative flex h-[25%] w-full flex-col items-start border">
              <p>Với bối cảnh cơ sở vật chất tại điểm Đá Trắng còn nghèo nàn, chỉ có 5 phòng học kiên cố, văn hoá đọc ở trẻ em miền núi nơi đây vẫn còn “đói sách”. Vì thế, ngôi trường này cần …</p>
            </div>
          </div>

          <div className="relative flex h-[33%] w-full flex-col items-start gap-[10px] border border-orange-300">
            <div className="relative flex h-[15%] w-full flex-col items-start border">
              <p>Mật ngọt Library - Thư viện cho trẻ em vùng núi</p>
            </div>
            <div className="relative flex h-[60%] w-full flex-col items-start border">
              <p>image</p>
            </div>
            <div className="relative flex h-[25%] w-full flex-col items-start border">
              <p>Với bối cảnh cơ sở vật chất tại điểm Đá Trắng còn nghèo nàn, chỉ có 5 phòng học kiên cố, văn hoá đọc ở trẻ em miền núi nơi đây vẫn còn “đói sách”. Vì thế, ngôi trường này cần …</p>
            </div>
          </div>

          <div className="relative h-[3%] w-full gap-[10px] border border-orange-300">
            <div className="relative flex h-full w-full flex-col items-end border">
              <p>1 2 3 pagination </p>
            </div>
          </div>
        </div>

        <div className="relative flex h-full w-[30%] flex-col items-start gap-[10px] border p-[10px]">
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
