import { Geist, Geist_Mono } from 'next/font/google';
import CommonComponent from './common';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <div className="grid grid-cols-6 h-screen">
          {CommonComponent()}
          <div className="col-span-2 h-screen w-full place-content-center items-center justify-center text-black bg-slate-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
