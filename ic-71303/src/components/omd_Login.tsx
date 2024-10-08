// import Image from "next/image";
'use client';
import { useState } from 'react';

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (!value) {
      event.currentTarget.setCustomValidity('Email là bắt buộc');
    } else if (!value.includes('@')) {
      event.currentTarget.setCustomValidity(`Email phải chứa @, "${value}" thiếu @`);
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
      event.currentTarget.setCustomValidity('Vui lòng nhập tên miền sau ký tự @');
    } else if (value.includes('@')) {
      const domainPart = value.split('@')[1]; 
      if (!domainPart || !/\..+/.test(domainPart) || !isValidDomain(domainPart)) {
        event.currentTarget.setCustomValidity('Email hợp lệ với đuôi @gmail.com hoặc @omdstudio.art');
      } else {
        event.currentTarget.setCustomValidity('');
      }
    } else {
      event.currentTarget.setCustomValidity('');
    }
  };
  
  const handlePasswordInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity('Mật khẩu là bắt buộc'); 
  };
  
  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity(''); 
  };
  
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
              <p className="absolute left-4 top-3 z-10 origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                Email
              </p>

              <div className="relative flex rounded-sm border">
                <input
                  type="email"
                  className="w-full rounded-sm border-gray-200 p-4 pe-12 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Nhập email"
                  required
                  onInvalid={handleEmailInvalid}
                  onInput={handleEmailInput}
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
              <p className="absolute left-4 top-3 z-10 origin-top-left -translate-y-5 scale-75 transform border bg-white px-2 text-gray-400">
                Mật khẩu
              </p>
              <div className="relative flex rounded-sm border">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  className="w-full rounded-sm border-gray-200 p-4 pe-12 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Nhập mật khẩu"
                  required
                  onInvalid={handlePasswordInvalid}
                  onInput={handlePasswordInput}
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-sm border px-5 py-3 text-slate-600 hover:border-gray-500 hover:text-black"
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
