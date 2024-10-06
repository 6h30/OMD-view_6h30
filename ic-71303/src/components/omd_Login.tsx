// import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="flex h-[500px] w-[500px] flex-col border">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold sm:text-3xl">
            OMD Website
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            designed and developed by dcviet
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
          >
            <div className="relative flex flex-col">
            <p className="absolute left-4 top-3 border bg-white px-2 text-gray-400 transform -translate-y-5 scale-75 origin-top-left z-10">
                Email
              </p>

              <div className="relative flex border rounded-sm">
                <input
                  type="email"
                  className="w-full rounded-sm border-gray-200 p-4 pe-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="relative flex flex-col">
              <p className="absolute left-4 top-3 border bg-white px-2 text-gray-400 transform -translate-y-5 scale-75 origin-top-left z-10">
                Mật khẩu
              </p>
              <div className="relative flex border rounded-sm">
                <input
                  type="password"
                  className="w-full rounded-sm border-gray-200 p-4 pe-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập mật khẩu"
                  required
                />
                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full border rounded-lg px-5 py-3 text-slate-600 hover:bg-slate-600 hover:text-white"
            >
              Đăng nhập
            </button>

            <p className="text-center text-sm text-gray-500">
              Chưa có tài khoản? <br />
              <a className="underline" href="#">
                Liên hệ admin
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
