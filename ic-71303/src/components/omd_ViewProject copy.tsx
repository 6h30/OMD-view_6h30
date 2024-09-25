// src/components/omd_ViewProject.tsx
import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function ViewProject() {
  return (

    <div className="h-[1700px] w-[1000px] overflow-hidden border border-black p-[20px] bg-white text-black">
      <div className="relative flex h-[1660px] w-[960px] flex-row items-start justify-start gap-[10px] ">
        <div className="relative flex h-[1660px] w-[25%] flex-col gap-[30px] border border-green-500 py-[20px]">
          <div className="relative flex flex-col items-center justify-center gap-[25px]">
            <div className="h-[190px] w-[80%] border border-black p-[30px]">
              <Image src=""alt=""/>
            </div>
            <div className="h-fit w-[150px] border border-black text-center">
              <p>PROJECT NAME</p>
            </div>
            <div className="h-fit w-[150px] border border-black text-center">
              <p>OMD</p>
            </div>
          </div>

          <div className="relative flex flex-row items-center justify-center gap-[20px]">
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

        <div className="relative h-[1660px] w-[75%] gap-[10px] border border-blue-500 px-[20px] py-[20px]">
          <div className="relative flex h-[60px] w-full flex-row items-center justify-center  border border-black pl-[10px]">
            <div className="relative flex w-[200px] flex-row items-start gap-[10px] ">
              <p>Diện tích:</p>
              <span>208m2</span>
            </div>
            <div className="relative flex w-[318px] flex-row items-start gap-[10px]  border-l border-black pl-[10px]">
              <p>Kts:</p>
              <span>Tran Duc Nam</span>
            </div>
            <div className="relative flex w-[169px] flex-row items-start justify-center gap-[10px]  border-l border-black pl-[10px]">
              <p>Năm</p>
              <span>2024</span>
            </div>
          </div>

          <div className="relative flex h-[660px] w-full flex-row items-end gap-[30px]  pb-[20px] pt-[20px]">
            <div className="relative flex h-[100%] w-[75%] flex-col items-center justify-center  border border-black">
              <p className="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">image</p>
            </div>

            <div className="relative flex h-[150px] w-[25%] flex-col items-center justify-center  border border-black">
              <p className="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">1</p>
            </div>
          </div>

          <div className="relative flex h-[940px] w-full flex-col items-start justify-start gap-[20px] ">
            <div className="relative flex h-[150px] w-full flex-row items-center justify-between gap-[10px]  px-[20px]">
              <div className="relative flex flex-col items-start justify-center gap-[10px] ">
                <div>
                  <p className="text-center text-[63px] leading-[53px] tracking-[5px]">OMD</p>
                </div>
                <div>
                  <p>kiến tạo dự án</p>
                </div>
              </div>

              <div className="relative flex flex-col items-end justify-center gap-[10px] ">
                <div>
                  <p>được đồng hành cùng chị D trong hành trình</p>
                </div>
                <div>
                  <p className="text-center text-[63px] leading-[53px] tracking-[5px]">LAPH cafe</p>
                </div>
              </div>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between  py-[10px]">
              <div className="relative flex h-[25px] w-[25%] flex-col items-center justify-center  border border-black px-[10px]">
                <p>Nhiệm vụ thiết kế</p>
              </div>

              <div className="relative flex h-[25px] w-[65%] flex-col items-start justify-center  border border-black px-[10px]">
                <p>vertical line</p>
              </div>
            </div>

            <div className="relative flex h-[150px] w-full flex-row items-center justify-between  py-[10px]">
              <p>“Café-Cóc” – trong tiếng Việt, thuật ngữ này chỉ quán cà phê bình dân với chỗ ngồi thấp, có thể dễ dàng gấp lại và bố trí khi cần thiết. Đó là nơi mọi người có thể ghé qua một cách nhanh chóng và thuận tiện, gọi đồ uống, nhâm nhi một mình hoặc với bạn bè, sau đó tiếp tục công việc trong ngày của mình.</p>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between  py-[10px]">
              <div className="relative flex h-[25px] w-[65%] flex-col items-start justify-center  border border-black px-[10px]">
                <p>vertical line</p>
              </div>

              <div className="relative flex h-[25px] w-[25%] flex-col items-center justify-center  border border-black px-[10px]">
                <p>Bộ sưu tập</p>
              </div>
            </div>

            <div className="relative flex h-[420px] w-full flex-col items-center justify-center gap-[10px]  border-t border-black">
              <div className="relative flex h-[90%] w-[100%] flex-col items-center justify-center  border border-black">
                <div className="relative flex h-[80%] w-[90%] flex-col items-center justify-center  border border-black">
                  <Image src=""alt=""/>
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