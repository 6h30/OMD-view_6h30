// src/components/omd_ViewProject.tsx
// import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function ViewIntro() {
  return (
    <div className="font-koho flex h-[205px] w-[665px] flex-col items-center whitespace-nowrap pt-[150px]">
      <p className="font-italiana text-[115px] leading-[1em] tracking-[0.11em]">
        OMD
      </p>
      <p className="text-center text-[18px] leading-[1.4em] tracking-[0.04em]">
        Văn phòng thiết kế kiến trúc - nội thất
      </p>

      <div className="flex h-[347px] w-[710px] flex-col items-center justify-center gap-[40px] whitespace-nowrap p-[40px]">
        <p className="relative  whitespace-normal text-center text-[18px] leading-[1.4em] tracking-[0.04em]">
          Chúng tôi khởi đầu mỗi dự án bằng việc lắng nghe, thấu hiểu nhu cầu và
          mong muốn của bạn. Với OMD Architect, kiến trúc thực sự đẹp là khi
          không gian trong đó có thể nuôi dưỡng tâm hồn, mang lại sự thư thái và
          khơi dậy cảm hứng.
        </p>

        <div className=" flex flex-col items-center justify-center ">
          <button className="text-center text-[18px] leading-[1.4em] tracking-[0.04em] border">
            Kết nối với chúng tôi
          </button>
        </div>
      </div>
    </div>
  );
}
