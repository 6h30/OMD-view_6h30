// // src/middleware.ts

// import { NextResponse, NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Danh sách các đường dẫn hợp lệ trong /homeM
//   const validPaths = [
//     '/homeM', // Trang chính
//     '/homeM/blogs',
//     '/homeM/blogsDetail',
//     '/homeM/login',
//     '/homeM/viewAbout',
//     '/homeM/viewContact',
//     '/homeM/viewProjects',
//     '/homeM/viewServices'
//   ];

//   // Kiểm tra xem đường dẫn có nằm trong danh sách hợp lệ không
//   if (validPaths.includes(pathname)) {
//     return NextResponse.next(); // Tiếp tục cho các đường dẫn hợp lệ
//   }

//   // Cho phép truy cập vào các tệp trong thư mục /public
//   if (pathname.startsWith('/_next/') || pathname.startsWith('/favicon.ico') || pathname.endsWith('.jpg') || pathname.endsWith('.png')) {
//     return NextResponse.next(); // Cho phép truy cập vào tệp hình ảnh
//   }

//   // Nếu không phải là một trong các đường dẫn hợp lệ, chuyển hướng đến trang 404
//   return NextResponse.rewrite(new URL('/404', req.url));
// }

// // Xác định các đường dẫn mà middleware sẽ được áp dụng
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

// src/middleware.ts

import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  try {
    // Danh sách các đường dẫn hợp lệ
    const validPaths = [
      '/',
      '/homeM',
      '/homeM/blogs',
      '/homeM/blogsDetail',
      '/homeM/login',
      '/homeM/viewAbout',
      '/homeM/viewContact',
      '/homeM/viewProjects',
      '/homeM/viewServices',
      '/homeM/viewUser',
      '/homeM/viewProjectList',
    ];

    // Kiểm tra đường dẫn hợp lệ
    if (validPaths.includes(pathname)) {
      return NextResponse.next();
    }

    // Cho phép truy cập vào các tệp trong thư mục /public
    if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/favicon.ico') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.png')
    ) {
      return NextResponse.next();
    }

    // Chuyển hướng đến trang 400 nếu đường dẫn không hợp lệ
    return NextResponse.rewrite(new URL('/400', req.url));
  } catch (error) {
    console.error('Middleware error:', error);
    // Chuyển hướng đến trang 500 khi có lỗi xảy ra
    return NextResponse.rewrite(new URL('/500', req.url));
  }
}

// Cấu hình matcher cho middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
