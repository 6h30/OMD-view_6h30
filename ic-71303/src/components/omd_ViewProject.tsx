// src/components/omd_ViewProject.tsx
import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function ViewProject() {
  return (
    <div className="overflow-hidden border border-black bg-white p-[20px] text-black sm:h-[1460px] sm:w-[768px] sm:text-[12px] md:h-[1780px] md:w-[768px] md:text-[14px] lg:h-[1700px] lg:w-[1024px] lg:text-[16px]">
      <div className="relative flex items-start justify-start gap-[10px] sm:h-[1400px] sm:w-[428px] sm:flex-col md:h-[1500px] md:w-[728px] md:flex-col lg:h-[1660px] lg:w-[960px] lg:flex-row">
        <div className="relative flex gap-[30px] border sm:h-[100px] sm:w-full sm:flex-col sm:border-red-500 md:h-[350px] md:w-full md:flex-col md:border-yellow-700 lg:h-full lg:w-[25%] lg:flex-col lg:border-green-500 lg:py-[20px]">
          <div className="relative flex gap-[25px] sm:flex-row sm:items-center sm:justify-start md:flex-row md:items-center md:justify-start lg:flex-col lg:items-center lg:justify-center">
            <div className="border p-[30px] md:h-[190px] md:w-[30%] lg:h-[190px] lg:w-[80%] lg:border-black">
              <image src="#" alt="" />
            </div>
            <div className="h-fit w-[150px] border border-black text-center">
              <p>PROJECT NAME</p>
            </div>
            <div className="h-fit w-[150px] border border-black text-center">
              <p>OMD</p>
            </div>
          </div>

          <div className="relative gap-[20px] sm:hidden md:flex md:flex-col lg:flex lg:flex-row lg:items-start lg:justify-center">
            <p>vertical line</p>
            <div className="sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-col">
              <p>timeline</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
          </div>
        </div>

        <div className="relative gap-[10px] border border-blue-500 px-[20px] py-[20px] sm:h-[1340px] sm:w-[428px] md:h-[1440px] md:w-[728px] lg:h-[1660px] lg:w-[75%]">
          <div className="relative flex h-[60px] w-full flex-row items-center justify-center border border-black pl-[10px]">
            <div className="relative flex w-[200px] flex-row items-start gap-[10px]">
              <p>Diện tích:</p>
              <span>208m2</span>
            </div>
            <div className="relative flex w-[318px] flex-row items-start gap-[10px] border-l border-black pl-[10px]">
              <p>Kts:</p>
              <span>Tran Duc Nam</span>
            </div>
            <div className="relative flex w-[169px] flex-row items-start justify-center gap-[10px] border-l border-black pl-[10px]">
              <p>Năm</p>
              <span>2024</span>
            </div>
          </div>

          <div className="relative flex w-full flex-row items-end gap-[30px] pb-[20px] pt-[20px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
            <div className="relative flex h-[100%] w-[75%] flex-col items-center justify-center border border-black">
              <p className="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">image</p>
            </div>

            <div className="relative flex w-[25%] flex-col items-center justify-center border border-black sm:h-[70px] md:h-[150px] lg:h-[150px]">
              <p className="text-center text-[46px] leading-[1.3em] tracking-[0.18em]">1</p>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-start justify-start gap-[20px] lg:h-[940px]">
            <div className="relative flex h-[150px] w-full flex-row items-center justify-between gap-[10px] px-[20px]">
              <div className="relative flex flex-col items-start justify-end gap-[10px]">
                <div>
                  <p className="text-center leading-[53px] tracking-[5px] sm:text-[33px] md:text-[53px] lg:text-[63px]">OMD</p>
                </div>
                <div>
                  <p>kiến tạo dự án</p>
                </div>
              </div>

              <div className="relative flex flex-col items-end justify-end gap-[10px]">
                <div>
                  <p>được đồng hành cùng chị D trong hành trình</p>
                </div>
                <div>
                  <p className="text-center tracking-[5px] sm:text-[33px] sm:leading-[33px] md:text-[53px] lg:text-[63px] lg:leading-[53px]">LAPH cafe</p>
                </div>
              </div>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
              <div className="relative flex h-[25px] w-[30%] flex-col items-center justify-center border border-black px-[10px]">
                <p>Nhiệm vụ thiết kế</p>
              </div>

              <div className="relative flex h-[25px] w-[65%] flex-col items-start justify-center border border-black px-[10px]">
                <p>vertical line</p>
              </div>
            </div>

            <div className="relative flex h-[150px] w-full flex-row items-center justify-between py-[10px]">
              <p>“Café-Cóc” – trong tiếng Việt, thuật ngữ này chỉ quán cà phê bình dân với chỗ ngồi thấp, có thể dễ dàng gấp lại và bố trí khi cần thiết. Đó là nơi mọi người có thể ghé qua một cách nhanh chóng và thuận tiện, gọi đồ uống, nhâm nhi một mình hoặc với bạn bè, sau đó tiếp tục công việc trong ngày của mình.</p>
            </div>

            <div className="relative flex h-[50px] w-full flex-row items-center justify-between py-[10px]">
              <div className="relative flex h-[25px] w-[65%] flex-col items-start justify-center border border-black px-[10px]">
                <p>vertical line</p>
              </div>

              <div className="relative flex h-[25px] w-[30%] flex-col items-center justify-center border border-black px-[10px]">
                <p>Bộ sưu tập</p>
              </div>
            </div>

            <div className="relative flex h-[420px] w-full flex-col items-center justify-center gap-[10px] border-t border-black">
              <div className="relative flex h-[90%] w-[100%] flex-col items-center justify-center border border-black">
                <div className="relative flex h-[80%] w-[90%] flex-col items-center justify-center border border-black">
                  <image src="# " alt="" />
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
