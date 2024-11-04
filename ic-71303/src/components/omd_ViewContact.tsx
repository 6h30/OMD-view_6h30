import React from 'react';

export default function viewContact() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="font-koho mb-4 text-center text-3xl tracking-tight text-gray-900 dark:text-white">
          Liên hệ OMD
        </h2>
        <p className="font-koho mb-8 text-center text-gray-500 dark:text-gray-400 sm:text-lg lg:mb-16">
          Trao đổi, thảo luận, hợp tác, quảng cáo, hay chỉ gửi lời chào đến đội
          ngũ OMD studio.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Địa chỉ email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-gray-500 dark:focus:ring-gray-500"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Chủ đề
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-gray-500 dark:focus:ring-gray-500"
              placeholder="Chúng tôi có thể giúp gì cho bạn"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Lời nhắn
            </label>
            <textarea
              id="message"
              rows={3}
              className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
              placeholder="Để lại lời nhắn ..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-sm bg-gray-700 px-5 py-3 text-center text-sm font-medium text-gray-200 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-500 sm:w-fit"
          >
            Gửi lời nhắn
          </button>
        </form>
      </div>
    </section>
  );
}
