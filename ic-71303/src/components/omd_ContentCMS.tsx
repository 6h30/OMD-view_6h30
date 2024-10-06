// import Image from "next/image";

export default function OmdCms() {
  return (
    <div className="flex flex-col justify-center gap-[10px] py-[20px]">
      <div className="flex border">
        <div className="font-koho flex h-full w-full flex-row items-center justify-center gap-[10px]">
          <div className="flex w-[40%] items-center justify-center gap-[10px] border-r-2 px-[12px]">
            <svg
              className="h-7 w-7 hover:fill-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="block w-full rounded-sm border border-slate-300 bg-white py-1 pl-7 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Tìm kiếm ..."
              type="text"
              name="search"
            />
          </div>

          <div className="flex w-[60%] flex-row items-center justify-between">
            <div className="group/item flex w-[50%] cursor-pointer flex-row items-center justify-center border border-red-500">
              <span className="flex w-[30%]">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  rounded-sm
                  <polyline points="16 17 21 12 16 7" />
                  rounded-sm
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </span>
              <div className="group/edit visible flex group-hover/item:visible">
                <p>Đăng xuất</p>
              </div>
            </div>
            <div className="group/item flex w-[50%] cursor-not-allowed items-center justify-center border border-blue-500">
              <div className="group/edit visible flex group-hover/item:visible">
                <p>Trần Đức Nam</p>
              </div>
              <span className="flex w-[30%]">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  rounded-sm
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  rounded-sm
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[1660] w-[960px] flex-row items-start justify-center gap-[10px] border">
        <div className="relative flex h-full w-[24%] flex-col items-center justify-center gap-[20px] border border-orange-500 py-[20px]"></div>

        <div className="relative mt-[280px] flex h-[1640px] w-[1px] bg-slate-400">
          <br /> line
        </div>

        <div className="relative flex h-[1660px] w-full flex-col gap-[20px] py-[10px]">

          <div className="relative flex h-[110px] w-full flex-col gap-[10px]">
            <div className="flex flex-col border border-red-300">
              <div className="flex flex-col">
                <div className="relative flex h-[120px] w-full flex-col items-center justify-start">
                  <div className="flex w-full flex-row items-end justify-start">
                    <div className="flex h-[60px] w-auto">
                      <div className="relative flex flex-col">
                        <div className="relative flex rounded-sm border border-sky-600">
                          <span>
                            <svg
                              className="h-10 w-40 text-gray-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              rounded-sm
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              rounded-sm
                              <polyline points="14 2 14 8 20 8" />
                              rounded-sm
                              <line x1="16" y1="13" x2="8" y2="13" />
                              rounded-sm
                              <line x1="16" y1="17" x2="8" y2="17" />
                              rounded-sm
                              <polyline points="10 9 9 9 8 9" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[50px] w-full">
                      <div className="relative flex w-full flex-col">
                        <p className="absolute right-4 top-2 z-10 w-[120px] origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                          Slug
                        </p>
                        <div className="relative flex rounded-sm border">
                          <textarea
                            id="SlugInput"
                            className="mt-2 w-full rounded-sm border-gray-200 px-2 pe-12 align-top text-sm"
                            rows={2}
                            placeholder="gieng-troi-hoi-tho-thien-nhien-trong-moi-cong-trinh.html"
                          ></textarea>
                          <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                            <svg
                              className="h-6 w-6 text-gray-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              rounded-sm
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                                ry="2"
                              />
                              rounded-sm
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1 flex h-[40px] w-full flex-col items-center justify-start">
                  <div className="flex w-full flex-row items-end justify-start">
                    <div className="flex h-[40px] w-full">
                      <div className="relative flex w-full flex-col">
                        <p className="absolute left-4 top-2 z-10 w-[120px] origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                          URL đầy đủ
                        </p>
                        <div className="relative flex rounded-sm border-y">
                          <p className="w-full rounded-sm border-gray-200 p-2 pe-12 text-sm text-gray-400">
                            https://www.omdarchitect.com/blog/gieng-troi-hoi-tho-thien-nhien-trong-moi-cong-trinh.html
                          </p>

                          <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                            <svg
                              className="h-6 w-6 text-gray-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              rounded-sm
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                                ry="2"
                              />
                              rounded-sm
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-[110px] w-full flex-col gap-[10px]">
            <div className="flex flex-col border border-red-300">
              <div className="flex flex-col">
                <div className="relative flex h-[120px] w-full flex-col items-center justify-start">
                  <div className="flex w-full flex-row items-end justify-start">
                    <div className="flex h-[60px] w-auto">
                      <div className="relative flex flex-col">
                        <div className="relative flex rounded-sm border border-sky-600">
                          <span>
                            <svg
                              className="h-10 w-40 text-gray-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              rounded-sm
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              rounded-sm
                              <polyline points="14 2 14 8 20 8" />
                              rounded-sm
                              <line x1="16" y1="13" x2="8" y2="13" />
                              rounded-sm
                              <line x1="16" y1="17" x2="8" y2="17" />
                              rounded-sm
                              <polyline points="10 9 9 9 8 9" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[50px] w-full">
                      <div className="relative flex w-full flex-col">
                        <p className="absolute right-4 top-2 z-10 w-[120px] origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                          Slug
                        </p>
                        <div className="relative flex rounded-sm border">
                          <textarea
                            id="SlugInput"
                            className="mt-2 w-full rounded-sm border-gray-200 px-2 pe-12 align-top text-sm"
                            rows={2}
                            placeholder="gieng-troi-hoi-tho-thien-nhien-trong-moi-cong-trinh.html"
                          ></textarea>
                          <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                            <svg
                              className="h-6 w-6 text-gray-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              rounded-sm
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                                ry="2"
                              />
                              rounded-sm
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1 flex h-[40px] w-full flex-col items-center justify-start">
                  <div className="flex w-full flex-row items-end justify-start">
                    <div className="flex h-[40px] w-full">
                      <div className="relative flex w-full h-[200px] flex-col">
                        <p className="absolute left-4 top-2 z-10 w-[120px] origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                          Ảnh đặc trưng
                        </p>
                        <div className="relative w-[30%] h-full flex rounded-sm border border-black">
                          <div className="rounded-sm w-full h-full border-gray-200 p-2 pe-12 text-wrap text-sm text-gray-400">
                            https://www.omdarchitect.com/blog/gieng-troi-hoi-tho-thien-nhien-trong-moi-cong-trinh.html
                          </div>

                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
}
