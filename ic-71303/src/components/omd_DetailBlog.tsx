// src/components/omd_ViewBlog.tsx
// import Image from "next/image";
// import styles from './omd_ViewBlogs.module.css';
export default function DetailBlogs() {
  return (
    <div className="flex h-[800px] w-[2020px] items-center justify-center border">
      <div className="flex h-full w-full flex-row justify-center">
        <div className="flex h-full w-[5%] flex-col items-center justify-center">
          <div className="flex h-[95%] w-[80%] flex-col justify-between border border-black">
            <div className="flex justify-center border">
              <p>user</p>
            </div>
            <div className="flex flex-col items-center gap-[20px]">
              <div className="flex border">
                <p>search</p>
              </div>
              <div className="flex border">
                <p>file</p>
              </div>
              <div className="flex border">
                <p>setup</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-[90%] flex-row justify-start border border-orange-500 py-[50px]">
          <div className="flex h-full w-[20%] flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="absolute left-[12px] top-[20px] z-[1] h-[90%] w-[90%] border border-green-500">
                <div className="flex h-full w-full flex-col items-center justify-between text-[12px]">
                  <div className="flex flex-col">
                    <p>image</p>
                    <p>author</p>
                    <p>time</p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-xl">
                      Giếng trời – Hơi thở thiên nhiên trong mỗi công trình
                    </h3>
                    <h5>Ngược dòng lịch sử kiến trúc</h5>
                    <p>
                      Xuất hiện từ hàng ngàn năm trước, gần như ở mọi nền văn
                      minh từ Hy Lạp, Ai Cập, Ấn Độ, Nhật Bản… giếng trời là một
                      cấu trúc bên trên trần nhà, có tác dụng thông gió và lấy
                      ánh sáng ban ngày cho không gian bên trong công trình. Ở
                      thời kỳ La Mã cổ đại, điển hình như đền Pantheon và một số
                      kiến trúc khác, giếng trời được gọi là Compluvium, có cấu
                      tạo mở hoàn toàn để lấy ánh sáng và hứng nước mưa vào một
                      cấu trúc bên dưới đáy gọi là Impluvium. Vài giếng trời
                      được nới rộng hơn đã hình thành dạng “sân trong”, là trung
                      gian kết nối giữa các khối nhà lớn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[-2px] bg-black"></div>
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[-0px] bg-white"></div>
              <div className="absolute bottom-[31px] left-[0%] right-[0px] z-[2] h-[2px] origin-left rotate-[0deg] transform bg-black"></div>
            </div>
          </div>

          <div className="flex h-full w-[12%] flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="clip-path-trapezoid absolute inset-0 bg-black"></div>

              <div className="clip-path-trapezoid absolute inset-[3px] bg-white"></div>

              <div className="absolute bottom-[30px] left-[0%] right-[-3px] h-[2px] origin-left rotate-[-16deg] transform bg-black"></div>
            </div>
          </div>

          <div className="flex h-full w-[40%] flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="clip-path-rec absolute inset-x-[0px] inset-y-[-4px] bg-black"></div>
              <div className="absolute bottom-[160px] left-[0%] right-[0px] z-[2] h-[2px] origin-left rotate-[0deg] transform bg-black"></div>
              <div className="absolute left-[15px] top-[130px] z-[1] h-[55%] w-[95%] border border-red-500">
                <p>image</p>
              </div>

              <div className="clip-path-rec absolute inset-x-[0px] inset-y-[-0px] bg-white"></div>
            </div>
          </div>

          <div className="flex h-full w-[12%] flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="clip-path-trapezoid-flip absolute inset-0 bg-black"></div>
              <div className="clip-path-trapezoid-flip absolute inset-[3px] bg-white"></div>
              <div className="absolute bottom-[30px] left-[-12px] right-[0%] h-[2px] origin-right rotate-[22deg] transform bg-black"></div>
            </div>
          </div>

          <div className="flex h-full w-[30%] flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="absolute left-[12px] top-[20px] z-[1] h-[90%] w-[90%] border border-green-500">
                <div className="flex h-full w-full flex-col items-center justify-between text-[12px]">
                  <article>
                    <p>
                      Bằng việc sử dụng ánh sáng tự nhiên từ trên cao, thậm chí
                      tận dụng nguồn gió và nước mưa với các giếng trời linh
                      động đóng mở, lựa chọn bố trí mảng xanh ở khu vực này là
                      hoàn toàn hợp lý và tiết kiệm năng lượng. Cũng như các góc
                      thiên nhiên khác, cây cối không chỉ cung cấp nguồn sinh
                      khí tốt lành, giúp thư giãn và giải tỏa tinh thần mà còn
                      triệt để giải quyết vấn đề thẩm mỹ cho giếng trời – một
                      không gian kiến trúc về cơ bản là để trống.
                    </p>
                    <p>
                      <br />
                      Trong kiến trúc châu Á, đặc biệt là Trung Quốc và Nhật
                      Bản, những khu vườn giếng trời đa phần là mở, hiếm khi có
                      mái che và thường là mắc xích liên kết giữa nhiều không
                      gian xung quanh. Giếng trời lúc này trở thành trung tâm
                      chính giữa của cả công trình, xoay quanh là các khối nhà
                      chính, có xuất phát từ triết lý Đông Á về sự cân bằng và
                      hài hòa. Ở Trung Quốc, khi giếng trời có diện tích lớn,
                      người ta sẽ gọi bằng “sân trời”, tại đây thường có giếng
                      nước, trồng cây cối, để chậu kiểng, là nơi sinh hoạt giặt
                      giũ, phơi phóng cũng như diễn ra các hoạt động gặp gỡ trò
                      chuyện của gia đình. Giếng trời trong kiến trúc Nhật Bản –
                      “Tsuboniwa” lại thuần về sự kết nối giữa con người và tự
                      nhiên khi gần như mặc định là khu vực bố trí sân vườn. Đó
                      có thể là khoảng không mang hơi thở truyền thống cùng đèn
                      đá, cây xanh và bể nước, hay một khu vườn Zen đậm chất
                      thiền cùng nghệ thuật sắp đặt đá sỏi và bon sai.
                    </p>
                    <p>
                      <br />
                      Từ lâu vườn giếng trời trở thành một yếu tố cực kỳ phổ
                      biến trong các thiết kế công trình công cộng hay nhà dân
                      dụng tại châu Âu. Tạo một khu vườn bên dưới giếng trời
                      thực sự đã là lựa chọn của hầu hết các kiến trúc sư.
                      Thường gọi là “Skylight”, “Skygarden” hoặc “lightwell”,
                      những khu vực giếng trời được phủ xanh mang đến sự giao
                      thoa hoàn hảo giữa kiến trúc và thiên nhiên, đồng thời
                      cũng là cách tiếp cận sáng tạo và bền vững trong việc tạo
                      lập không gian sống.
                    </p>
                    <p>
                      Từ lịch sử xa xưa đến thời kỳ hiện đại, ở phương Đông hay
                      phương Tây, từ các công trình dân dụng đến các tòa nhà
                      công cộng, những khu vườn giếng trời đã trở thành một phần
                      đặc biệt phổ biến trong kiến trúc thế giới, là “dấu gạch
                      nối nhỏ bé” nhưng rất mực quan trọng giữa con người – công
                      trình và tự nhiên. Từ đó khẳng định một không gian sống
                      giao hòa cùng cây xanh không chỉ là một xu hướng, mà còn
                      là sự phát triển bền vững tất yếu của kiến trúc và cảnh
                      quan thế giới.
                    </p>
                  </article>
                </div>
              </div>
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[-2px] bg-black"></div>
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[-0px] bg-white"></div>
              <div className="absolute bottom-[31px] left-[0%] right-[0px] z-[2] h-[2px] origin-left rotate-[0deg] transform bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
