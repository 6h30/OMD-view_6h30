// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logout } from '../utils/auth';

interface Province {
  code: number;
  name: string;
}

interface District {
  code: number;
  name: string;
  wards?: Ward[];
}

interface Ward {
  code: number;
  name: string;
}

export default function UserSetting() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [selectedWard, setSelectedWard] = useState<number | null>(null);
  const [wardDetail, setWardDetail] = useState<Ward | null>(null);

  const apiBaseUrl = 'https://provinces.open-api.vn';

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get<Province[]>(`${apiBaseUrl}/api/p/`);
        setProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedProvince) {
        try {
          const response = await axios.get<{ districts: District[] }>(`${apiBaseUrl}/api/p/${selectedProvince}?depth=2`);
          setDistricts(response.data.districts);
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      } else {
        setDistricts([]);
        setWards([]);
        setWardDetail(null);
      }
    };

    fetchDistricts();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchWards = async () => {
      if (selectedDistrict) {
        try {
          const response = await axios.get<{ wards: Ward[] }>(`${apiBaseUrl}/api/d/${selectedDistrict}?depth=2`);
          setWards(response.data.wards);
        } catch (error) {
          console.error('Error fetching wards:', error);
        }
      } else {
        setWards([]);
        setWardDetail(null);
      }
    };

    fetchWards();
  }, [selectedDistrict]);

  useEffect(() => {
    const fetchWardDetail = async () => {
      if (selectedWard) {
        try {
          const response = await axios.get<Ward>(`${apiBaseUrl}/api/w/${selectedWard}`);
          setWardDetail(response.data);
        } catch (error) {
          console.error('Error fetching ward details:', error);
        }
      } else {
        setWardDetail(null);
      }
    };

    fetchWardDetail();
  }, [selectedWard]);

  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [verificationLink, setVerificationLink] = useState('');

  const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail) {
      try {
        const response = await fetch('/api/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: newEmail }),
        });

        const data = await response.json();
        if (response.ok) {
          setIsVerified(data.verified); // Giả sử server trả về { verified: true/false }
          if (!data.verified) {
            setConfirmationMessage('Vui lòng kiểm tra email của bạn để xác nhận.');
            setVerificationLink(data.verificationLink); // Giả sử server trả về đường dẫn xác thực
          } else {
            setConfirmationMessage('');
            setVerificationLink('');
          }
        } else {
          // Nếu có lỗi, chỉ cần xóa thông báo mà không hiển thị
          setConfirmationMessage('');
          setVerificationLink('');
        }
      } catch (error) {
        // Nếu có lỗi, chỉ cần xóa thông báo mà không hiển thị
        setConfirmationMessage('');
        setVerificationLink('');
      }
    } else {
      setIsVerified(false);
      setConfirmationMessage('');
      setVerificationLink('');
    }
  };

  const handleLogout = async () => {
    try {
        const response = await logout();
        const text = await response.text(); // Đọc phản hồi dưới dạng text
        console.log('Logout response:', text); // Ghi log nội dung phản hồi

        if (!response.ok) {
            // Nếu không phải là mã trạng thái 200
            console.error('Logout failed:', text);
            return;
        }

        const result = JSON.parse(text); // Thử phân tích JSON
        console.log('Logout result:', result);

        if (result.success) {
            console.log('Logged out successfully');
        } else {
            console.error(result.message);
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
};





  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Hồ sơ cá nhân</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Thông tin này sẽ được hiển thị công khai nên hãy cẩn thận khi chia sẻ.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Tên hiển thị
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">omdstudio.art/</span>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="dcviet"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Giới thiệu
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Viết một vài câu về bản thân bạn.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Ảnh
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {/* <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" /> */}
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Thay đổi
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Ảnh bìa
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 hover:text-gray-500"
                    >
                      <span>Tải lên một tập tin</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">hoặc kéo và thả</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Thông tin cá nhân</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Sử dụng địa chỉ cố định nơi bạn có thể nhận thư.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Họ - tên đệm
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Tên
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Địa chỉ email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Địa chỉ email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
              {isVerified && (
                <div className="mt-2 flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.629 12.724l-3.37-3.37a1 1 0 00-1.415 1.415l4.793 4.793a1 1 0 001.415 0l10-10a1 1 0 00-1.415-1.415L7.629 12.724z" />
                  </svg>
                  <span>Email đã được xác nhận</span>
                </div>
              )}
              {!isVerified && confirmationMessage && (
                <div className="mt-2 text-yellow-600">
                  {confirmationMessage}
                  {verificationLink && (
                    <div className="mt-1">
                      <a href={verificationLink} className="text-blue-600 hover:underline">
                        Nhấp vào đây để xác thực email.
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="number-phone" className="block text-sm font-medium leading-6 text-gray-900">
                Số điện thoại
              </label>
              <div className="mt-2">
                <input
                  id="number-phone"
                  name="number-phone"
                  type="tel"
                  autoComplete="tel"
                  pattern="^\0[1-9][0-9]{8}$"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Địa chỉ
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Tỉnh/Thành phố
              </label>
              <div className="mt-2">
                <select id="city"
                  name="city"
                  autoComplete="city-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"

                  onChange={(e) => setSelectedProvince(Number(e.target.value))} value={selectedProvince || ''}>
                  <option value="">Chọn tỉnh</option>
                  {provinces.map(province => (
                    <option key={province.code} value={province.code}>{province.name}</option>
                  ))}
                </select>
              </div>
            </div>



            <div className="sm:col-span-2">
              <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                Huyện/Quận
              </label>
              <div className="mt-2">
                <select id="district"
                  name="district"
                  autoComplete="district-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => setSelectedDistrict(Number(e.target.value))} value={selectedDistrict || ''}>
                  <option value="">Chọn quận</option>
                  {districts.map(district => (
                    <option key={district.code} value={district.code}>{district.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="ward" className="block text-sm font-medium leading-6 text-gray-900">
                Xã/Phường
              </label>
              <div className="mt-2">
                <select id="ward"
                  name="ward"
                  autoComplete="ward-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => setSelectedWard(Number(e.target.value))} value={selectedWard || ''}>
                  <option value="">Chọn phường</option>
                  {wards.map(ward => (
                    <option key={ward.code} value={ward.code}>{ward.name}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Thông báo</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Chúng tôi sẽ luôn thông báo cho bạn về những thay đổi quan trọng, nhưng bạn có thể chọn những thông tin khác mà bạn muốn biết.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Bình luận
                    </label>
                    <p className="text-gray-500">Nhận thông báo khi có người đăng bình luận trên bài đăng.</p>
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Gắn thẻ
                    </label>
                    <p className="text-gray-500">Nhận thông báo khi có người nhắc đến tên bạn.</p>
                  </div>
                </div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Lưu
        </button>

        <button
                type="button" // Chọn type="button" để không gửi form
                onClick={handleLogout} // Gọi hàm logout khi nhấn nút
                className="ml-4 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
                Đăng xuất
            </button>
      </div>
    </form>
  );
}
