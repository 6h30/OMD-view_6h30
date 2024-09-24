// src/components/omd_ViewBlog.tsx
import Image from "next/image";
// import styles from './omd_ViewBlogs.module.css';

export default function ViewBlogs() {
  return (

    <div class="visible h-[1700px] w-[1000px] overflow-hidden border border-black fill-black p-[20px]">
    <div class="absolute bottom-[930px] left-[680px] right-[180px] top-[500px]">
      <div class="flex h-[150px] w-[150px] items-center justify-center border">
        <p>logo</p>
      </div>
    </div>
  
    <div class="relative flex h-[1660] w-[960px] flex-row items-start justify-start gap-[10px]">
      <div class="relative flex h-[1660px] w-[25%] flex-col gap-[30px] border border-green-500 py-[20px]">
        <div class="relative flex flex-col items-center justify-center gap-[25px]">
          <div class="h-[190px] w-[80%] border border-black p-[30px]">
            <img src="" alt="" />
          </div>
          <div class="h-fit w-[150px] border border-black text-center">
            <p>PROJECT NAME</p>
          </div>
          <div class="h-fit w-[150px] border border-black text-center">
            <p>OMD</p>
          </div>
        </div>
  
        <div class="relative flex flex-row items-center justify-center gap-[20px]">
          <p>vertical line</p>
          <div>
            <p>timeline</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>
      </div>
  
      <div class="relative h-[1660px] w-[75%] gap-[10px] border border-blue-500 px-[20px] py-[20px]">
        <div class="relative flex h-[60px] w-full flex-row items-center justify-center border border-black pl-[10px]">
          <div class="relative flex w-[200px] flex-col items-center gap-[10px]">
            <p>OMG's Blog</p>
          </div>
          <div class="relative flex w-[318px] flex-row items-start gap-[10px] border-l border-black pl-[10px]">
            <p>Mạng xã hội:</p>
            <span>F</span>
            <span>T</span><span>L</span><span>G</span>
          </div>
          <div class="relative flex w-[169px] flex-row items-start justify-center gap-[10px] border-l border-black pl-[10px]">
            <p>Time</p>
          </div>
        </div>
  
        <div class="relative flex h-[205px] w-full flex-col items-start justify-start border border-black p-[10px]">
          <div class="relative flex h-[35px] w-[full] flex-row items-center justify-between gap-[20px]">
            <div class="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
              <p>Giải pháp thiết kế</p>
            </div>
            <div class="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
              <p>horizontal line</p>
            </div>
            <div class="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
              <p>12 bài viết</p>
            </div>
          </div>
          <div class="relative flex h-[35px] w-[full] flex-row items-center justify-between gap-[20px]">
            <div class="relative flex h-[25px] w-[190px] items-center justify-start border border-black pl-[10px]">
              <p>Giải pháp thiết kế</p>
            </div>
            <div class="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
              <p>horizontal line</p>
            </div>
            <div class="relative flex h-[25px] w-[190px] flex-col items-center justify-start border border-black">
              <p>12 bài viết</p>
            </div>
          </div>
        </div>
  
        <div class="relative flex h-[660px] w-full flex-row items-end gap-[30px] pb-[20px] pt-[20px]">
          <div class="relative flex h-[100%] w-[75%] flex-col items-center justify-center border border-black">
            <p class="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">image</p>
          </div>
  
          <div class="relative flex h-[150px] w-[25%] flex-col items-center justify-center border border-black">
            <p class="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">1</p>
          </div>
        </div>
  
        <div class="relative flex h-[940px] w-full flex-col items-start justify-start gap-[20px]">
          <div class="relative flex h-[150px] w-full flex-row items-center justify-between gap-[10px] px-[20px]">
            <div class="relative flex flex-col items-start justify-start gap-[10px]">
              <div>
                <p class="text-center text-[63px] leading-[53px] tracking-[5px]">OMD</p>
              </div>
              <div>
                <p>kiến tạo dự án</p>
              </div>
            </div>
  
            <div class="relative flex flex-col items-end justify-end gap-[10px]">
              <div>
                <p>được đồng hành cùng chị D trong hành trình</p>
              </div>
              <div>
                <p class="text-center text-[63px] leading-[53px] tracking-[5px]">LAPH cafe</p>
              </div>
            </div>
          </div>
  
          <div class="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
            <div class="relative flex h-[25px] w-[25%] flex-col items-center justify-center border border-black px-[10px]">
              <p>Nhiệm vụ thiết kế</p>
            </div>
  
            <div class="relative flex h-[25px] w-[65%] flex-col items-start justify-center border border-black px-[10px]">
              <p>vertical line</p>
            </div>
          </div>
  
          <div class="relative flex h-[150px] w-full flex-row items-center justify-between py-[10px]">
            <p>“Café-Cóc” – trong tiếng Việt, thuật ngữ này chỉ quán cà phê bình dân với chỗ ngồi thấp, có thể dễ dàng gấp lại và bố trí khi cần thiết. Đó là nơi mọi người có thể ghé qua một cách nhanh chóng và thuận tiện, gọi đồ uống, nhâm nhi một mình hoặc với bạn bè, sau đó tiếp tục công việc trong ngày của mình.</p>
          </div>
  
          <div class="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
            <div class="relative flex h-[25px] w-[65%] flex-col items-start justify-center border border-black px-[10px]">
              <p>vertical line</p>
            </div>
            <div class="relative flex h-[25px] w-[25%] flex-col items-center justify-center border border-black px-[10px]">
              <p>Bộ sưu tập</p>
            </div>
          </div>
  
          <div class="relative flex h-[420px] w-full flex-col items-center justify-center gap-[10px] border-t border-black">
            <div class="relative flex h-[90%] w-[100%] flex-col items-center justify-center border border-black">
              <div class="relative flex h-[80%] w-[90%] flex-col items-center justify-center border border-black">
                <img src="" alt="" />
                <p>image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
}