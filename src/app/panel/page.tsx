'use client';
import React from 'react';
import {
  PiUsersThree,
  PiRobot,
  PiCheckCircle,
  PiChartLineUp,
  PiWarningCircle,
  PiUserPlus,
  PiCrown,
  PiCalendarCheck,
} from 'react-icons/pi';
import ComponentCard from '@/components/common/ComponentCard';

const Dashboard = () => {
  // ۱. آمار مربوط به وضعیت اشتراک و ظرفیت‌ها
  const subscriptionStats = [
    {
      title: 'نوع اشتراک',
      value: 'حرفه‌ای (Gold)',
      subValue: 'تا ۱۵ فروردین ۱۴۰۵',
      icon: <PiCrown size={26} />,
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      progressColor: 'bg-orange-600',
      action: 'ارتقا اشتراک',
    },
    {
      title: 'زمان باقی‌مانده',
      value: '۲۴ روز',
      progress: 75,
      icon: <PiCalendarCheck size={26} />,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      progressColor: 'bg-blue-600',
      subValue: 'تمدید خودکار فعال',
    },
    {
      title: 'ظرفیت ربات‌ها',
      value: '۶ از ۱۰',
      progress: 60,
      icon: <PiRobot size={26} />,
      color: 'bg-green-100',
      textColor: 'text-green-600',
      progressColor: 'bg-green-600',
      subValue: '۴ ظرفیت خالی',
    },
    {
      title: 'مخاطبین ذخیره شده',
      value: '۲ از 50',
      progress: 4, // (2 / 50) * 100 = 20%
      icon: <PiUsersThree size={26} />,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      progressColor: 'bg-purple-600',
      subValue: '۸ ظرفیت باقی‌مانده',
    },
  ];

  return (
    <div className="animate-fade-in space-y-8 p-2">
      {/* هدر صفحه */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-title-sm font-outfit font-bold text-gray-900 dark:text-white">
            به بات‌وات خوش آمدید، مدیر عزیز 👋
          </h1>
          <p className="text-theme-sm text-gray-500">
            وضعیت اشتراک و ظرفیت بات‌های شما در یک نگاه.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="text-theme-sm rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
            گزارش کل
          </button>
          <button className="text-theme-sm flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 font-semibold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-green-600">
            <PiRobot size={20} />
            ایجاد ربات جدید
          </button>
        </div>
      </div>

      {/* شبکه کارت‌های اشتراک و پیشرفت */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {subscriptionStats.map((stat, index) => (
          <div
            key={index}
            className="group dark:bg-gray-dark shadow-theme-xs hover:shadow-theme-lg rounded-3xl border border-gray-100 bg-white p-6 transition-all duration-300 dark:border-gray-800"
          >
            <div className="mb-5 flex items-start justify-between">
              <div
                className={`rounded-2xl p-3 ${stat.color} bg-opacity-60 ${stat.textColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {stat.icon}
              </div>
              {stat.action && (
                <button className="text-theme-xs rounded-full bg-orange-50 px-3 py-1 font-bold text-orange-600 transition-colors hover:bg-orange-100">
                  {stat.action}
                </button>
              )}
            </div>

            <div>
              <p className="text-theme-xs mb-1 font-medium tracking-wider text-gray-400 uppercase">
                {stat.title}
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>

              {/* بخش Progress Bar برای کارت‌های ظرفیت */}
              {stat.progress !== undefined ? (
                <div className="mt-4">
                  <div className="mb-1.5 flex justify-between">
                    <span className="text-[10px] font-medium text-gray-400">{stat.subValue}</span>
                    <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">
                      {stat.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className={`h-full rounded-full ${stat.progressColor} transition-all duration-1000`}
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <p className="text-theme-xs mt-2 font-medium text-gray-500">{stat.subValue}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* بخش تحلیل عملکرد */}
        <div className="lg:col-span-2">
          <ComponentCard title="تحلیل تعاملات ربات‌ها">
            <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="z-10 text-center">
                <PiChartLineUp
                  size={48}
                  className="mx-auto mb-2 text-gray-200 dark:text-gray-700"
                />
                <p className="text-theme-sm font-medium text-gray-400">
                  نمودار تعاملات در حال بارگذاری است...
                </p>
              </div>
            </div>
          </ComponentCard>
        </div>

        {/* رویدادهای اخیر سیستم */}
        <div className="lg:col-span-1">
          <ComponentCard title="آخرین رویدادهای سیستم">
            <div className="mt-2 flow-root">
              <ul className="-mb-8">
                {[
                  {
                    title: 'کمپین ارسال انبوه با موفقیت به پایان رسید',
                    time: '۵ دقیقه پیش',
                    icon: <PiCheckCircle size={18} />,
                    color: 'text-green-500',
                    bgColor: 'bg-green-50',
                  },
                  {
                    title: 'عدم پاسخگویی API در ربات شماره ۳',
                    time: '۴۰ دقیقه پیش',
                    icon: <PiWarningCircle size={18} />,
                    color: 'text-red-500',
                    bgColor: 'bg-red-50',
                  },
                  {
                    title: 'ارتقا اشتراک توسط حساب کاربری انجام شد',
                    time: '۲ ساعت پیش',
                    icon: <PiCrown size={18} />,
                    color: 'text-orange-500',
                    bgColor: 'bg-orange-50',
                  },
                  {
                    title: '۱۵ مخاطب جدید از طریق ربات جذب شدند',
                    time: '۵ ساعت پیش',
                    icon: <PiUserPlus size={18} />,
                    color: 'text-blue-500',
                    bgColor: 'bg-blue-50',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="relative pb-8">
                    {idx !== 3 && (
                      <span
                        className="absolute start-7 top-4 -ml-px h-full w-0.5 bg-gray-100 dark:bg-gray-800"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div className="relative flex space-x-3 rtl:space-x-reverse">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.bgColor} dark:bg-gray-800 ${item.color} border border-white/20 shadow-sm`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 px-2 pt-1.5 rtl:space-x-reverse">
                        <p className="text-[13px] leading-snug font-medium text-gray-700 dark:text-gray-300">
                          {item.title}
                        </p>
                        <div className="text-left text-[10px] whitespace-nowrap text-gray-400">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
