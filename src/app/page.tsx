'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaRobot,
  FaChartLine,
  FaUsersCog,
  FaLayerGroup,
  FaEnvelope,
  FaUserPlus,
  FaArrowUp,
  FaRocket,
  FaHeadset,
  FaShieldAlt,
  FaSync,
  FaInstagram,
  FaTelegram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

import ThemeToggleButton from '@/components/common/ThemeToggleButton';
import PhoneMockup from '@/components/templates/landing/PhoneMockup';

export default function LandingPage() {
  return (
    <div
      className="dark:bg-whatsapp-bgDark overflow-x-hidden bg-gray-50 font-sans text-gray-800 transition-colors duration-300 dark:text-gray-100"
      dir="rtl"
    >
      {/* --- HEADER --- */}
      <header className="dark:bg-whatsapp-bgDark/80 fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-gray-700/50">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4 md:gap-12">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 transition-transform hover:scale-105"
            >
              <div className="relative">
                <FaWhatsapp className="text-whatsapp-primary text-3xl drop-shadow-lg md:text-4xl" />
                <FaRobot className="dark:border-whatsapp-bgDark absolute -right-1 -bottom-1 animate-bounce rounded-full border border-white bg-blue-500 p-0.5 text-xs text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-gray-800 md:text-2xl dark:text-white">
                واتس‌<span className="text-whatsapp-primary">بات</span>
              </span>
            </Link>

            {/* Menu */}
            <nav className="hidden items-center gap-6 text-sm font-bold text-gray-600 md:flex lg:gap-8 dark:text-gray-300">
              <a href="#solutions" className="hover:text-whatsapp-primary transition-colors">
                راهکارها
              </a>
              <a href="#features" className="hover:text-whatsapp-primary transition-colors">
                امکانات
              </a>
              <a href="#pricing" className="hover:text-whatsapp-primary transition-colors">
                تعرفه‌ها
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* دکمه تغییر تم (placeholder) */}
            <div className="scale-90">
              <ThemeToggleButton />
            </div>

            <Link
              href="/signin"
              className="group bg-whatsapp-primary shadow-whatsapp-primary/30 hover:shadow-whatsapp-primary/50 relative hidden items-center gap-2 overflow-hidden rounded-2xl border border-white/20 px-6 py-2.5 text-sm font-bold text-white shadow-lg backdrop-blur-xl transition-all hover:-translate-y-0.5 md:flex dark:bg-white/5"
            >
              <span>ورود به پنل</span>
              <FaArrowUp className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[30px_30px] pt-32 pb-20 dark:bg-[radial-gradient(#334155_1px,transparent_1px)]">
        {/* Background Blobs */}
        <div className="animate-blob absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-purple-300 opacity-30 blur-3xl dark:bg-purple-900/30"></div>
        <div className="animate-blob animation-delay-2000 absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-300 opacity-30 blur-3xl dark:bg-blue-900/30"></div>

        <div className="relative z-10 container mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-4 md:flex-row">
          {/* Text */}
          <div className="w-full text-center md:w-1/2 md:text-right">
            <div className="dark:bg-whatsapp-panelDark animate-pulse-slow mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold shadow-sm dark:border-gray-700">
              <span className="h-2 w-2 animate-ping rounded-full bg-red-500"></span>
              <span className="text-gray-600 dark:text-gray-300">
                قدرتمندترین API واتس‌اپ در ایران
              </span>
            </div>

            <h1 className="mb-8 text-4xl leading-tight font-black text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
              فروش خود را با <br />
              <span className="from-whatsapp-primary to-whatsapp-primary bg-size-[200%_auto]` animate-[gradient_3s_linear_infinite] bg-linear-to-r via-[#34B7F1] bg-clip-text text-transparent">
                ربات هوشمند
              </span>
              <br />
              خودکار کنید
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed font-medium text-gray-600 md:mx-0 dark:text-gray-300">
              بدون نیاز به نیروی انسانی، ۲۴ ساعته پاسخ مشتریان را بدهید، سفارش بگیرید و پیام‌های
              انبوه هدفمند ارسال کنید.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="flex transform items-center justify-center gap-3 rounded-2xl bg-gray-900 px-8 py-3.5 font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                ساخت ربات رایگان
                <FaArrowUp className="-rotate-45" />
              </button>
              <button className="dark:bg-whatsapp-panelDark/50 hover:border-whatsapp-primary hover:text-whatsapp-primary flex items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white/50 px-8 py-3.5 font-bold text-gray-700 backdrop-blur-sm transition-all dark:border-gray-600 dark:text-white">
                مشاهده دمو
              </button>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative flex w-full scale-90 justify-center md:w-1/2 md:scale-100">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="dark:bg-whatsapp-bg-dark relative bg-white py-24">
        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-whatsapp-primary mb-2 block text-sm font-bold tracking-wider uppercase">
              چرا واتس‌بات؟
            </span>
            <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-5xl dark:text-white">
              ابزارهایی برای <span className="text-whatsapp-primary">رشد انفجاری</span> فروش
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: FaRobot,
                color: 'blue',
                title: 'پاسخگوی خودکار',
                desc: 'بدون نیاز به کدنویسی، سناریوهای پیچیده بسازید. دکمه‌های شیشه‌ای و پاسخ‌های شرطی.',
              },
              {
                icon: FaRocket,
                color: 'green',
                title: 'ارسال پیام انبوه',
                desc: 'کمپین‌های تبلیغاتی بسازید و به هزاران مشتری با یک کلیک پیام دهید. گزارش دقیق دلیوری.',
              },
              {
                icon: FaShieldAlt,
                color: 'purple',
                title: 'REST API امن',
                desc: 'اتصال سایت به واتس‌اپ. ارسال کد تایید (OTP)، فاکتور و نوتیفیکیشن‌ها به سادگی.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group hover:border-whatsapp-primary/50 hover:shadow-whatsapp-primary/5 relative rounded-4xl border border-gray-100 bg-gray-50 p-8 transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-[#1f2c34]"
              >
                <div
                  className={`h-14 w-14 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 text-${feature.color}-600 mb-6 flex items-center justify-center rounded-2xl text-2xl transition-transform group-hover:scale-110`}
                >
                  <feature.icon />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">{feature.title}</h3>
                <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW --- */}
      <section className="overflow-hidden bg-gray-50 py-24 dark:bg-[#0d161d]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <span className="mb-2 block text-sm font-bold text-blue-500 uppercase">
                گزارش‌گیری پیشرفته
              </span>
              <h2 className="mb-6 text-3xl leading-tight font-black md:text-4xl dark:text-white">
                مدیریت کامل کسب‌وکار <br /> با{' '}
                <span className="text-whatsapp-primary">پنل اختصاصی</span>
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                دیگر هیچ پیامی را از دست ندهید. تمام مکالمات، سفارشات و کمپین‌های خود را در یک نگاه
                مدیریت کنید.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                    <FaChartLine />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">تحلیل رفتار مشتریان</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      نرخ باز شدن پیام‌ها و کلیک روی دکمه‌ها
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                    <FaUsersCog />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">دسته‌بندی هوشمند</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      لیبل‌گذاری اتوماتیک بر اساس علاقه مشتری
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                    <FaLayerGroup />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">مدیریت چند اپراتور</h4>
                    <p className="mt-1 text-sm text-gray-500">پاسخگویی همزمان چندین پشتیبان</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="perspective-1000 w-full lg:w-1/2">
              <div className="relative transform rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl transition-all duration-700 hover:rotate-0 lg:rotate-x-3 lg:-rotate-y-6 dark:border-gray-700 dark:bg-[#1f2c34]">
                {/* Fake Header */}
                <div className="mb-8 flex justify-between border-b pb-4 dark:border-gray-700">
                  <div className="flex gap-4">
                    <div className="h-6 w-24 rounded bg-gray-100 dark:bg-gray-700"></div>
                    <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-700"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                  </div>
                </div>
                {/* Stats */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-blue-50 p-5 dark:bg-blue-900/10">
                    <div className="mb-2 flex justify-between">
                      <span className="text-xs font-bold text-gray-500">پیام‌های امروز</span>
                      <FaEnvelope className="text-blue-500" />
                    </div>
                    <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
                      2,543
                    </div>
                  </div>
                  <div className="rounded-2xl bg-purple-50 p-5 dark:bg-purple-900/10">
                    <div className="mb-2 flex justify-between">
                      <span className="text-xs font-bold text-gray-500">مشتریان جدید</span>
                      <FaUserPlus className="text-purple-500" />
                    </div>
                    <div className="text-3xl font-black text-purple-600 dark:text-purple-400">
                      185
                    </div>
                  </div>
                </div>
                {/* Chart Bars */}
                <div className="flex h-40 items-end justify-between gap-2 px-2">
                  {[40, 70, 50, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="bg-whatsapp-primary/30 hover:bg-whatsapp-primary w-full rounded-t transition-colors"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative overflow-hidden bg-[#0a1014] py-24">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-[#111b21]"></div>
        <div className="bg-whatsapp-primary/20 absolute top-[-10%] right-[-5%] h-100 w-100 rounded-full blur-[100px]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl leading-tight font-black text-white md:text-5xl">
            آماده‌اید فروش خود را <span className="text-whatsapp-primary">متحول</span> کنید؟
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
            همین حالا ربات خود را بسازید. ۷ روز تست رایگان بدون نیاز به کارت بانکی.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <button className="bg-whatsapp-primary hover:bg-whatsapp-secondary flex transform items-center justify-center gap-2 rounded-2xl px-10 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1">
              <FaRocket /> شروع تست رایگان
            </button>
            <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
              <FaHeadset /> مشاوره رایگان
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-white">
              <FaShieldAlt className="text-xl" /> <span>امنیت تضمینی</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FaHeadset className="text-xl" /> <span>پشتیبانی ۲۴/۷</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FaSync className="text-xl" /> <span>آپدیت رایگان</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-whatsapp-bg-dark border-t border-gray-800 pt-20 pb-10 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-12 text-sm md:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-2 text-white">
                <FaWhatsapp className="text-whatsapp-primary text-2xl" />
                <span className="text-xl font-black">
                  واتس‌<span className="text-whatsapp-primary">بات</span>
                </span>
              </div>
              <p className="mb-6 leading-7">
                اولین و قدرتمندترین پلتفرم اتوماسیون واتس‌اپ در ایران.
              </p>
              <div className="flex gap-4 text-lg">
                <a href="#" className="hover:text-whatsapp-primary transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="transition-colors hover:text-blue-500">
                  <FaTelegram />
                </a>
                <a href="#" className="transition-colors hover:text-blue-600">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="transition-colors hover:text-red-500">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Links */}
            {['محصول', 'شرکت', 'لینک‌های مفید'].map((head, i) => (
              <div key={i}>
                <h4 className="border-whatsapp-primary mb-6 inline-block border-b-2 pb-2 text-lg font-bold text-white">
                  {head}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-whatsapp-primary transition-colors">
                      لینک نمونه ۱
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-whatsapp-primary transition-colors">
                      لینک نمونه ۲
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-whatsapp-primary transition-colors">
                      لینک نمونه ۳
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-xs md:flex-row">
            <p>&copy; 1403 واتس‌بات. تمامی حقوق محفوظ است.</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span>سیستم پایدار</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
