"use client";
import React from "react";
import { 
  PiUsersThree, 
  PiRobot, 
  PiArrowUpRight, 
  PiArrowDownRight, 
  PiCheckCircle, 
  PiChartLineUp,
  PiWarningCircle,
  PiUserPlus,
  PiCrown,
  PiCalendarCheck,
  PiLightning
} from "react-icons/pi";
import ComponentCard from "@/components/common/ComponentCard";

const Dashboard = () => {
  // ۱. آمار مربوط به وضعیت اشتراک و ظرفیت‌ها
  const subscriptionStats = [
  { 
    title: "نوع اشتراک", 
    value: "حرفه‌ای (Gold)", 
    subValue: "تا ۱۵ فروردین ۱۴۰۵",
    icon: <PiCrown size={26} />, 
    color: "bg-orange-100", 
    textColor: "text-orange-600",
    progressColor: "bg-orange-600",
    action: "ارتقا اشتراک",
  },
  { 
    title: "زمان باقی‌مانده", 
    value: "۲۴ روز", 
    progress: 75,
    icon: <PiCalendarCheck size={26} />, 
    color: "bg-blue-100", 
    textColor: "text-blue-600",
    progressColor: "bg-blue-600",
    subValue: "تمدید خودکار فعال"
  },
  { 
    title: "ظرفیت ربات‌ها", 
    value: "۶ از ۱۰", 
    progress: 60,
    icon: <PiRobot size={26} />, 
    color: "bg-green-100", 
    textColor: "text-green-600",
    progressColor: "bg-green-600",
    subValue: "۴ ظرفیت خالی"
  },
  { 
  title: "مخاطبین ذخیره شده", 
  value: "۲ از 50", 
  progress: 4, // (2 / 50) * 100 = 20%
  icon: <PiUsersThree size={26} />, 
  color: "bg-purple-100", 
  textColor: "text-purple-600",
  progressColor: "bg-purple-600",
  subValue: "۸ ظرفیت باقی‌مانده"
},
];

  return (
    <div className="space-y-8 p-2 animate-fade-in">
      {/* هدر صفحه */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-title-sm font-bold text-gray-900 dark:text-white font-outfit">به بات‌وات خوش آمدید، مدیر عزیز 👋</h1>
          <p className="text-theme-sm text-gray-500">وضعیت اشتراک و ظرفیت بات‌های شما در یک نگاه.</p>
        </div>
        <div className="flex gap-3">
            <button className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl text-theme-sm font-semibold hover:bg-gray-50 transition-all">
               گزارش کل
            </button>
            <button className="px-4 py-2.5 bg-green-500 text-white rounded-xl text-theme-sm font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 flex items-center gap-2">
              <PiRobot size={20} />
              ایجاد ربات جدید
            </button>
        </div>
      </div>

      {/* شبکه کارت‌های اشتراک و پیشرفت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {subscriptionStats.map((stat, index) => (
          <div key={index} className="group bg-white dark:bg-gray-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-theme-xs hover:shadow-theme-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-5">
              <div className={`p-3 rounded-2xl ${stat.color} bg-opacity-60 ${stat.textColor} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              {stat.action && (
                  <button className="text-theme-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors">
                      {stat.action}
                  </button>
              )}
            </div>
            
            <div>
              <p className="text-theme-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{stat.title}</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              
              {/* بخش Progress Bar برای کارت‌های ظرفیت */}
              {stat.progress !== undefined ? (
                <div className="mt-4">
                    <div className="flex justify-between mb-1.5">
                        <span className="text-[10px] text-gray-400 font-medium">{stat.subValue}</span>
                        <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{stat.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                            className={`h-full rounded-full ${stat.progressColor} transition-all duration-1000`} 
                            style={{ width: `${stat.progress}%` }}
                        ></div>
                    </div>
                </div>
              ) : (
                <p className="text-theme-xs text-gray-500 mt-2 font-medium">{stat.subValue}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* بخش تحلیل عملکرد */}
        <div className="lg:col-span-2">
          <ComponentCard title="تحلیل تعاملات ربات‌ها">
            <div className="relative h-80 w-full bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-hidden">
               <div className="text-center z-10">
                 <PiChartLineUp size={48} className="mx-auto text-gray-200 dark:text-gray-700 mb-2" />
                 <p className="text-gray-400 text-theme-sm font-medium">نمودار تعاملات در حال بارگذاری است...</p>
               </div>
            </div>
          </ComponentCard>
        </div>

        {/* رویدادهای اخیر سیستم */}
        <div className="lg:col-span-1">
          <ComponentCard title="آخرین رویدادهای سیستم">
            <div className="flow-root mt-2">
              <ul className="-mb-8">
                {[
                  { title: "کمپین ارسال انبوه با موفقیت به پایان رسید", time: "۵ دقیقه پیش", icon: <PiCheckCircle size={18} />, color: "text-green-500", bgColor: "bg-green-50" },
                  { title: "عدم پاسخگویی API در ربات شماره ۳", time: "۴۰ دقیقه پیش", icon: <PiWarningCircle size={18} />, color: "text-red-500", bgColor: "bg-red-50" },
                  { title: "ارتقا اشتراک توسط حساب کاربری انجام شد", time: "۲ ساعت پیش", icon: <PiCrown size={18} />, color: "text-orange-500", bgColor: "bg-orange-50" },
                  { title: "۱۵ مخاطب جدید از طریق ربات جذب شدند", time: "۵ ساعت پیش", icon: <PiUserPlus size={18} />, color: "text-blue-500", bgColor: "bg-blue-50" },
                ].map((item, idx) => (
                  <li key={idx} className="relative pb-8">
                    {idx !== 3 && <span className="absolute top-4 start-7 -ml-px h-full w-0.5 bg-gray-100 dark:bg-gray-800" aria-hidden="true"></span>}
                    <div className="relative flex space-x-3 rtl:space-x-reverse">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.bgColor} dark:bg-gray-800 ${item.color} shadow-sm border border-white/20`}>
                        {item.icon}
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 rtl:space-x-reverse px-2">
                        <p className="text-[13px] font-medium text-gray-700 dark:text-gray-300 leading-snug">{item.title}</p>
                        <div className="whitespace-nowrap text-left text-[10px] text-gray-400">{item.time}</div>
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