// src/components/omd_ViewProject.tsx
// import Image from "next/image";
// import styles from './omd_NameFrame.module.css';

export default function ViewAbout() {
  return (
    <div className="font-koho flex pt-[120px] h-full w-[550px] flex-col items-center justify-center gap-[100px]">
      <div className="flex h-[80%] w-full flex-col items-center justify-center gap-[20px]">
        <div>
          <p className="font-italiana text-center text-[93px] leading-[90px]">OMD</p>
        </div>
        <div className="text-center">
          <p>
            Tại OMD, mỗi công trình là một hành trình. Chúng tôi không chỉ thiết
            kế, mà đồng hành cùng khách hàng trong việc tạo ra những không gian
            sống phản ánh giá trị và cá tính riêng biệt. Mỗi dự án là một câu
            chuyện đậm chất nghệ thuật, ý nghĩa, nơi cuộc sống và cái đẹp hòa quyện.
          </p>
        </div>
        <div className="text-center">
          <p>
            Chúng tôi làm việc với sự cầu toàn và sự tận tâm, sự khởi đầu tốt sẽ từ
            niềm đam mê và thấu hiểu sâu sắc. Không chỉ là sự hợp tác, mà là sự
            kết nối chân thành, cùng nhau tạo ra những công trình mang dấu ấn cá
            nhân.
          </p>
        </div>
        <div className="text-center">
          <p>
            Mỗi thiết kế của OMD đề cao sự hài hòa giữa thực tế và nghệ thuật,
            giữa chức năng và phong cách. Hướng đến là những công trình bền
            vững, trọn vẹn về cả hình thức lẫn ý nghĩa, nơi mà mỗi khách hàng có
            thể tự hào gọi là nhà.
          </p>
        </div>
      </div>

      <div className="flex h-[20%] w-full flex-col items-center justify-center gap-[10px]">
        <div className="flex h-[50px] w-[150px] flex-row items-center justify-center gap-[10px] border">
          <button>Liên hệ ngay</button>
          <svg
            className="h-8 w-8 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="19 1 23 5 19 9" />
            <line x1="15" y1="5" x2="23" y2="5" />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
