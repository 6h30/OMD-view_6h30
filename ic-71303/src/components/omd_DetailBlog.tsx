// src/components/omd_ViewBlog.tsx
import Image from 'next/image';
import CarouselComponent from './omd_carouselBlog';

// import styles from './omd_ViewBlogs.module.css';
export default function DetailBlogs() {
  return (
    <div className="flex h-[800px] min-w-[3520px] items-center justify-center overflow-hidden border">
      <div className="flex- flex h-full w-full flex-row justify-start">
        <div className="flex h-full w-[150px] flex-col items-center justify-center">
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

        <div className="grid h-full w-[3520px] grid-cols-[5fr_2fr_7fr_2fr_20fr] flex-row justify-start border border-orange-500 py-[50px]">
          <div className="flex h-full flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="absolute left-[12px] top-[20px] z-[1] h-[90%] w-[90%]">
                <div className="flex h-full w-full flex-col items-start justify-between">
                  <div className="font-koho flex flex-col">
                    <div className="flex items-center gap-4">
                      <Image
                        alt=""
                        width={200}
                        height={200}
                        src="/image1.jpg"
                        className="size-14 rounded-full object-cover"
                      />

                      <div>
                        <a href="#" className="text-md font-koho-bold">
                          Trương Khả Đậu
                        </a>

                        <div className="flow-root">
                          <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                              <a href="#" className="text-xs text-gray-500">
                                Ngày đăng:
                              </a>
                            </li>

                            <li className="p-1 leading-none">
                              <a
                                href="#"
                                className="text-xs font-medium text-gray-500"
                              >
                                2/10/2024
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-koho-bold flex flex-col gap-[10px]">
                    <h3 className="text-xl">
                      Giếng trời – Hơi thở thiên nhiên trong mỗi công trình
                    </h3>
                    <h5>Ngược dòng lịch sử kiến trúc</h5>
                    <p className="text-md font-koho">
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
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[0px] bg-black"></div>
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[2px] bg-white"></div>
              <div className="absolute bottom-[30px] left-[0%] right-[0px] z-[2] h-[3px] origin-left rotate-[0deg] transform bg-black"></div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="clip-path-trapezoid absolute inset-0 bg-black"></div>

              <div className="clip-path-trapezoid absolute inset-[3px] bg-white"></div>

              <div className="absolute bottom-[30px] left-[0%] right-[-8px] h-[2px] origin-left rotate-[-17deg] transform bg-black"></div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="clip-path-rec absolute inset-x-[0px] inset-y-[-4px] bg-black"></div>
              <div className="absolute bottom-[160px] left-[0%] right-[0px] z-[2] h-[3px] origin-left rotate-[0deg] transform bg-black"></div>
              <div className="absolute left-[15px] top-[130px] z-[1] h-[380px] w-[565px] overflow-hidden rounded-sm border">
                <CarouselComponent />
              </div>

              <div className="clip-path-rec absolute inset-x-[0px] inset-y-[-0px] bg-white"></div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-start">
            <div className="relative flex h-full w-full" >
              <div className="clip-path-trapezoid-flip absolute inset-[0px] bg-black"></div>
              <div className="clip-path-trapezoid-flip absolute inset-[3px] bg-white"></div>
                  
              <div className="absolute bottom-[30px] left-[-17px] right-[0%] h-[2px] origin-right rotate-[25deg] transform bg-black"></div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-start">
            <div className="relative flex h-full w-full">
              <div className="z-[1] h-full w-full pb-[25px]">
                <div
                  className="font-koho text-md grid h-full w-full grid-cols-[25%_25%_25%_25%] flex-row p-[20px]"
                  
                >
                  <div className="flex w-[90%] border-r">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/4qQnuxAMICc?si=6-YtV3Vp92soIzR-"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                      <article className="flex">
                        <p>
                          Bằng việc sử dụng ánh sáng tự nhiên từ trên cao, thậm
                          chí tận dụng nguồn gió và nước mưa với các giếng trời
                          linh động đóng mở, lựa chọn bố trí mảng xanh ở khu vực
                          này là hoàn toàn hợp lý và tiết kiệm năng lượng. Cũng
                          như các góc thiên nhiên khác, cây cối không chỉ cung
                          cấp nguồn sinh khí tốt lành, giúp thư giãn và giải tỏa
                          tinh thần mà còn triệt để giải quyết vấn đề thẩm mỹ
                          cho giếng trời – một không gian kiến trúc về cơ bản là
                          để trống.
                        </p>
                      </article>
                    </div>
                  </div>

                  <div className="flex w-[90%]">
                    <div className="flex h-full flex-col items-start justify-start">
                      <article className="flex">
                        <p>
                          Trong kiến trúc châu Á, đặc biệt là Trung Quốc và Nhật
                          Bản, những khu vườn giếng trời đa phần là mở, hiếm khi
                          có mái che và thường là mắc xích liên kết giữa nhiều
                          không gian xung quanh. Giếng trời lúc này trở thành
                          trung tâm chính giữa của cả công trình, xoay quanh là
                          các khối nhà chính, có xuất phát từ triết lý Đông Á về
                          sự cân bằng và hài hòa. Ở Trung Quốc, khi giếng trời
                          có diện tích lớn, người ta sẽ gọi bằng “sân trời”, tại
                          đây thường có giếng nước, trồng cây cối, để chậu
                          kiểng, là nơi sinh hoạt giặt giũ, phơi phóng cũng như
                          diễn ra các hoạt động gặp gỡ trò chuyện của gia đình.
                          Giếng trời trong kiến trúc Nhật Bản – “Tsuboniwa” lại
                          thuần về sự kết nối giữa con người và tự nhiên khi gần
                          như mặc định là khu vực bố trí sân vườn. Đó có thể là
                          khoảng không mang hơi thở truyền thống cùng đèn đá,
                          cây xanh và bể nước, hay một khu vườn Zen đậm chất
                          thiền cùng nghệ thuật sắp đặt đá sỏi và bon sai.
                        </p>
                      </article>
                      {/* <article className='flex'>
                    <p>
                      Bằng việc sử dụng ánh sáng tự nhiên từ trên cao, thậm chí
                      tận dụng nguồn gió và nước mưa với các giếng trời linh
                      động đóng mở, lựa chọn bố trí mảng xanh ở khu vực này là
                      hoàn toàn hợp lý và tiết kiệm năng lượng. Cũng như các góc
                      thiên nhiên khác, cây cối không chỉ cung cấp nguồn sinh
                      khí tốt lành, giúp thư giãn và giải tỏa tinh thần mà còn
                      triệt để giải quyết vấn đề thẩm mỹ cho giếng trời – một
                      không gian kiến trúc về cơ bản là để trống.
                    
                    
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
                  
                      Từ lâu vườn giếng trời trở thành một yếu tố cực kỳ phổ
                      biến trong các thiết kế công trình công cộng hay nhà dân
                      dụng tại châu Âu. Tạo một khu vườn bên dưới giếng trời
                      thực sự đã là lựa chọn của hầu hết các kiến trúc sư.
                      Thường gọi là “Skylight”, “Skygarden” hoặc “lightwell”,
                      những khu vực giếng trời được phủ xanh mang đến sự giao
                      thoa hoàn hảo giữa kiến trúc và thiên nhiên, đồng thời
                      cũng là cách tiếp cận sáng tạo và bền vững trong việc tạo
                      lập không gian sống.
                 
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
                  </article> */}
                      <div className="flex"></div>
                    </div>
                  </div>

                  <div className="flex w-[90%]">
                    <div className="flex h-full flex-col justify-between">
                      <article className="flex">
                        <p>
                          Từ lâu vườn giếng trời trở thành một yếu tố cực kỳ phổ
                          biến trong các thiết kế công trình công cộng hay nhà
                          dân dụng tại châu Âu. Tạo một khu vườn bên dưới giếng
                          trời thực sự đã là lựa chọn của hầu hết các kiến trúc
                          sư. Thường gọi là “Skylight”, “Skygarden” hoặc
                          “lightwell”, những khu vực giếng trời được phủ xanh
                          mang đến sự giao thoa hoàn hảo giữa kiến trúc và thiên
                          nhiên, đồng thời cũng là cách tiếp cận sáng tạo và bền
                          vững trong việc tạo lập không gian sống.
                        </p>
                      </article>

                      <div className="flex">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/6PjNXfkWc_g?si=YlXpPEyPiTpbIvNW"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[90%]">
                    <div className="flex h-full flex-col items-start justify-start">
                      <article className="flex">
                        <p>
                          Từ lịch sử xa xưa đến thời kỳ hiện đại, ở phương Đông
                          hay phương Tây, từ các công trình dân dụng đến các tòa
                          nhà công cộng, những khu vườn giếng trời đã trở thành
                          một phần đặc biệt phổ biến trong kiến trúc thế giới,
                          là “dấu gạch nối nhỏ bé” nhưng rất mực quan trọng giữa
                          con người – công trình và tự nhiên. Từ đó khẳng định
                          một không gian sống giao hòa cùng cây xanh không chỉ
                          là một xu hướng, mà còn là sự phát triển bền vững tất
                          yếu của kiến trúc và cảnh quan thế giới.
                        </p>
                      </article>
                      {/* <article className='flex'>
                    <p>
                      Bằng việc sử dụng ánh sáng tự nhiên từ trên cao, thậm chí
                      tận dụng nguồn gió và nước mưa với các giếng trời linh
                      động đóng mở, lựa chọn bố trí mảng xanh ở khu vực này là
                      hoàn toàn hợp lý và tiết kiệm năng lượng. Cũng như các góc
                      thiên nhiên khác, cây cối không chỉ cung cấp nguồn sinh
                      khí tốt lành, giúp thư giãn và giải tỏa tinh thần mà còn
                      triệt để giải quyết vấn đề thẩm mỹ cho giếng trời – một
                      không gian kiến trúc về cơ bản là để trống.
                    
                    
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
                  
                      Từ lâu vườn giếng trời trở thành một yếu tố cực kỳ phổ
                      biến trong các thiết kế công trình công cộng hay nhà dân
                      dụng tại châu Âu. Tạo một khu vườn bên dưới giếng trời
                      thực sự đã là lựa chọn của hầu hết các kiến trúc sư.
                      Thường gọi là “Skylight”, “Skygarden” hoặc “lightwell”,
                      những khu vực giếng trời được phủ xanh mang đến sự giao
                      thoa hoàn hảo giữa kiến trúc và thiên nhiên, đồng thời
                      cũng là cách tiếp cận sáng tạo và bền vững trong việc tạo
                      lập không gian sống.
                 
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
                  </article> */}
                      <div className="flex"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[0px] bg-black"></div>
              <div className="clip-path-rec-2 absolute inset-x-[0px] inset-y-[3px] bg-white"></div>
              <div className="absolute bottom-[30px] left-[0%] right-[0px] z-[2] h-[3px] origin-left rotate-[0deg] transform bg-black"></div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-[430px] flex-col">
          <div className="flex justify-center border-b font-koho-bold">
            <p>Bình luận</p>
          </div>
          <div className="flex w-full flex-col overflow-hidden font-koho">
            <div className="p-3 mt-3 h-auto overflow-y-scroll">
              <div className="mb-3 flex flex-col gap-[10px] border-b pb-3">
                <div className="flex flex-row items-center gap-3">
                  <div className="group relative">
                    <Image
                      className="h-12 w-12 rounded-full border duration-200 group-hover:scale-105"
                      src="/"
                      width={200}
                      height={200}
                      alt="avatar"
                    />
                    <div className="absolute -right-1 bottom-1 rounded-full bg-white">
                      <div>
                        <svg
                          className="h-5 w-5 text-sky-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                          <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                        </svg>
                        <span className="sr-only">stick emoji</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-between">
                    <p>Trương Tự Minh</p>
                    <span>
                      <svg
                        className="h-6 w-6 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                      <span className="sr-only">more opt</span>
                    </span>
                  </div>
                </div>

                <div className="flex h-auto w-full flex-col gap-3 text-sm">
                  <p className="w-full overflow-visible">
                    “Tsuboniwa” của Nhật Bản mới là điểm nhấn thực sự, với sự
                    kết nối hoàn hảo giữa thiên nhiên và kiến trúc. Mỗi chi tiết
                    nhỏ đều có ý nghĩa!
                  </p>
                  <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
                    <div className="flex flex-row items-center">
                      <span>
                        <svg
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span className="sr-only">love emoji</span>
                      </span>

                      <div className="flex">12</div>
                    </div>
                    <div>Phản hồi</div>
                    <div className="text-gray-500">6 giờ trước</div>
                  </div>
                </div>
              </div>

              <div className="mb-3 flex flex-col gap-[10px] border-b pb-3">
                <div className="flex flex-row items-center gap-3">
                  <div className="group relative">
                    <Image
                      className="h-12 w-12 rounded-full border duration-200 group-hover:scale-105"
                      src="/"
                      width={200}
                      height={200}
                      alt="avatar"
                    />
                    <div className="absolute -right-1 bottom-1 rounded-full bg-white">
                      <div>
                        <svg
                          className="h-5 w-5 text-sky-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                          <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                        </svg>
                        <span className="sr-only">stick emoji</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-between">
                    <p>Trương Ngọc Thành</p>
                    <span>
                      <svg
                        className="h-6 w-6 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                      <span className="sr-only">more opt</span>
                    </span>
                  </div>
                </div>

                <div className="flex h-auto w-full flex-col gap-3 text-sm">
                  <p className="w-full overflow-visible">
                    Mình không hiểu sao bạn lại nghĩ giếng trời ở Nhật Bản lại
                    hay hơn Trung Quốc! Ở Trung Quốc, “sân trời” rộng lớn mang
                    lại không gian sống động, chứ không phải cái sự đơn điệu của
                    “Tsuboniwa”
                  </p>
                  <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
                    <div className="flex flex-row items-center">
                      <span>
                        <svg
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span className="sr-only">love emoji</span>
                      </span>

                      <div className="flex">12</div>
                    </div>
                    <div>Phản hồi</div>
                    <div className="text-gray-500">6 giờ trước</div>
                  </div>
                </div>
              </div>

              <div className="mb-3 flex flex-col gap-[10px] border-b pb-3">
                <div className="flex flex-row items-center gap-3">
                  <div className="group relative">
                    <Image
                      className="h-12 w-12 rounded-full border duration-200 group-hover:scale-105"
                      src="/"
                      width={200}
                      height={200}
                      alt="avatar"
                    />
                    <div className="absolute -right-1 bottom-1 rounded-full bg-white">
                      <div>
                        <svg
                          className="h-5 w-5 text-sky-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                          <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                        </svg>
                        <span className="sr-only">stick emoji</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-between">
                    <p>Trương Khâm Hiệp</p>
                    <span>
                      <svg
                        className="h-6 w-6 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                      <span className="sr-only">more opt</span>
                    </span>
                  </div>
                </div>

                <div className="flex h-auto w-full flex-col gap-3 text-sm">
                  <p className="w-full overflow-visible">
                    Đơn điệu? Thực ra, cái bạn gọi là “sống động” lại có thể
                    khiến không gian quá ồn ào và hỗn loạn. Nhật Bản chú trọng
                    đến sự tĩnh lặng, những khu vườn Zen giúp người ta thư giãn
                    và tìm về bản thân, chứ không phải chỉ là chỗ để phơi đồ!
                  </p>
                  <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
                    <div className="flex flex-row items-center">
                      <span>
                        <svg
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span className="sr-only">love emoji</span>
                      </span>

                      <div className="flex">12</div>
                    </div>
                    <div>Phản hồi</div>
                    <div className="text-gray-500">6 giờ trước</div>
                  </div>
                </div>
              </div>

              <div className="mb-3 flex flex-col gap-[10px] border-b pb-3">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center gap-3">
                    <div className="group relative">
                      <Image
                        className="h-12 w-12 rounded-full border duration-200 group-hover:scale-105"
                        src="/"
                        width={200}
                        height={200}
                        alt="avatar"
                      />
                      <div className="absolute -right-1 bottom-1 rounded-full bg-white">
                        <div>
                          <svg
                            className="h-5 w-5 text-sky-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                            <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                          </svg>
                          <span className="sr-only">stick emoji</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-between">
                      <p>Trương Trí Lâm</p>
                      <span>
                        <svg
                          className="h-6 w-6 text-gray-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                        <span className="sr-only">more opt</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex h-auto w-full flex-col gap-3 text-sm">
                    <p className="w-full overflow-visible">
                      Nhưng gia đình cần giao lưu, bạn không thấy à? “Sân trời”
                      là nơi tụ họp, nơi có tiếng cười và hoạt động. Còn giếng
                      trời Nhật Bản thì chỉ như một góc chết, không ai muốn ngồi
                      đó lâu đâu.
                    </p>
                    <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
                      <div className="flex flex-row items-center">
                        <span>
                          <svg
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span className="sr-only">love emoji</span>
                        </span>

                        <div className="flex">12</div>
                      </div>
                      <div>Phản hồi</div>
                      <div className="text-gray-500">6 giờ trước</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col pl-5">
                  <div className="flex flex-row items-center gap-3">
                    <div className="group relative">
                      <Image
                        className="h-12 w-12 rounded-full border duration-200 group-hover:scale-105"
                        src="/"
                        width={200}
                        height={200}
                        alt="avatar"
                      />
                      <div className="absolute -right-1 bottom-1 rounded-full bg-white">
                        <div>
                          <svg
                            className="h-5 w-5 text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                            <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                          </svg>
                          <span className="sr-only">stick emoji</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-between">
                      <p>Trương Cận Nam</p>
                      <span>
                        <svg
                          className="h-6 w-6 text-gray-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                        <span className="sr-only">more opt</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex h-auto w-full flex-col gap-3 text-sm">
                    <p className="w-full overflow-visible">
                      Nói như bạn thì thực sự thiếu sót! Không gian yên tĩnh ở
                      Nhật giúp con người cảm nhận vẻ đẹp của thiên nhiên, chứ
                      không phải chỉ là để cho vui. Mỗi viên đá, mỗi cành cây
                      đều có ý nghĩa sâu sắc.
                    </p>
                    <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
                      <div className="flex flex-row items-center">
                        <span>
                          <svg
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span className="sr-only">love emoji</span>
                        </span>

                        <div className="flex">12</div>
                      </div>
                      <div>Phản hồi</div>
                      <div className="text-gray-500">6 giờ trước</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full pt-3">
              <div className="flex w-full items-center rounded-sm border py-2">
                <textarea
                  id="chat"
                  rows={2}
                  className="ml-3 block w-full rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                  placeholder="Bình luận ..."
                ></textarea>
                <button
                  type="submit"
                  className="cursor-pointer justify-start rounded-sm p-2 text-blue-600 hover:bg-gray-200"
                >
                  <svg
                    className="h-6 w-6 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
