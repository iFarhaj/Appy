import localFont from 'next/font/local'; // وارد کردن ماژول فونت محلی
import './globals.css';
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

// تعریف فونت یکان بخ با وزن‌های مختلف
const yekanBakh = localFont({
  src: [
    {
      path: '../fonts/YekanBakhFaNum-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-SemiBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-ExtraBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-ExtraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} font-sans dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
