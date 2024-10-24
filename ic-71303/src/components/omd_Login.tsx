'use client';

// import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../utils/auth';

export default function LoginForm() {
  const router = useRouter();
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  // const [email] = useState<string>('');
  // const [password ] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);



  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (!value) {
      event.currentTarget.setCustomValidity('Email là bắt buộc');
    } else if (!value.includes('@')) {
      event.currentTarget.setCustomValidity(
        `Email phải chứa @, "${value}" thiếu @`
      );
    } else {
      event.currentTarget.setCustomValidity('');
    }
  };

  const isValidDomain = (domain: string) => {
    return domain === 'gmail.com' || domain === 'omdstudio.art';
  };

  const handleEmailInput = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value.endsWith('@') || value.split('@').length === 1) {
      event.currentTarget.setCustomValidity(
        'Vui lòng nhập tên miền sau ký tự @'
      );
    } else if (value.includes('@')) {
      const domainPart = value.split('@')[1];
      if (
        !domainPart ||
        !/\..+/.test(domainPart) ||
        !isValidDomain(domainPart)
      ) {
        event.currentTarget.setCustomValidity(
          'Email hợp lệ với đuôi @gmail.com hoặc @omdstudio.art'
        );
      } else {
        event.currentTarget.setCustomValidity('');
      }
    } else {
      event.currentTarget.setCustomValidity('');
    }
  };

  const handlePasswordInvalid = (
    event: React.InvalidEvent<HTMLInputElement>
  ) => {
    event.currentTarget.setCustomValidity('Mật khẩu là bắt buộc');
  };

  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Gọi hàm login với email và mật khẩu
    const result = await login(email, password);   

    // Kiểm tra kết quả trả về
    if (result.success) {
        // Đăng nhập thành công
        console.log(result.data); // Có thể chứa thông tin người dùng hoặc token
        // Ở đây có thể chuyển hướng người dùng đến trang khác
        // Ví dụ: router.push('/dashboard'); (Nếu sử dụng Next.js Router)
        router.push('/blogs');
    } else {
        // Đăng nhập không thành công
    
    }
};

  return (
    <div
      className="flex h-[500px] w-[500px] flex-col border border-black"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23cacaca' fill-opacity='0.1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold sm:text-3xl">
            OMD Website
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            designed and developed by dcviet
          </p>

          <form onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
          >
            <div className="relative flex flex-col">
              <p className="absolute left-4 top-3 z-10 origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                Email
              </p>

              <div className="relative flex rounded-sm border-1">
                <input
                  type="email"
                  className="w-full rounded-sm border-gray-200 p-4 pe-12 focus:outline-none focus:ring-0 focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Nhập email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  onInvalid={handleEmailInvalid}
                  onInput={handleEmailInput}
                  autoComplete="username"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="relative flex flex-col">
              <p className="absolute left-4 top-3 z-10 origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                Mật khẩu
              </p>
              <div className="relative flex rounded-sm border-1">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  className="w-full rounded-sm border-gray-200 p-4 pe-12 focus:outline-none focus:ring-0 focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Nhập mật khẩu"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  onInvalid={handlePasswordInvalid}
                  onInput={handlePasswordInput}
                  autoComplete="current-password"
                />
                <span
                  className="absolute inset-y-0 right-0 grid place-content-center px-4"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-sm border px-5 py-3 bg-white text-slate-600 hover:border-black focus:bg-gray-200 hover:text-black"
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
