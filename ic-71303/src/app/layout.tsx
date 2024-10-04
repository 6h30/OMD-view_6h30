import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/ui/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const geistItaliana = localFont({
  src: './fonts/Italiana-Regular.ttf',
  variable: '--font-dcviet-italiana',
  weight: '100 900',
});

const geistKoho = localFont({
  src: './fonts/KoHo/KoHo-Regular.ttf',
  variable: '--font-dcviet-koho',
  weight: '100 900',
});

const geistKohoBold = localFont({
  src: './fonts/KoHo/KoHo-Bold.ttf',
  variable: '--font-dcviet-koho-bold',
  weight: '100 900',
});
export const metadata: Metadata = {
  title: 'Demo OMD Web',
  description: 'created by dcviet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>  
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
          rel="stylesheet"
        />
      </head> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistItaliana.variable} ${geistKoho.variable} ${geistKohoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
