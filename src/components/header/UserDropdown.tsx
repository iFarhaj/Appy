'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { type MenuProps } from 'antd';
import AntDropdown from '../ui/AntDropdown';
import ThemeToggleButton from '@/components/common/ThemeToggleButton';
import { PiGear, PiSignOut, PiUserCircle } from 'react-icons/pi';

export default function UserDropdown() {
  const items: MenuProps['items'] = [
    {
      key: 'user-info',
      label: (
        <div className="border-b border-gray-100 pb-3 dark:border-gray-800">
          <span className="text-theme-sm block font-medium text-gray-700 dark:text-gray-400">
            Musharof Chowdhury
          </span>
          <span className="text-theme-xs mt-0.5 block text-gray-500 dark:text-gray-400">
            randomuser@pimjo.com
          </span>
        </div>
      ),
    },
    {
      key: 'profile',
      label: (
        <Link
          href="/profile"
          className="group text-theme-sm flex items-center gap-3 rounded-lg px-1 py-1 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <PiUserCircle size={22} />
          پروفایل من
        </Link>
      ),
    },
    {
      key: 'settings',
      label: (
        <Link
          href="/profile"
          className="group text-theme-sm flex items-center gap-3 rounded-lg px-1 py-1 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <PiGear size={22} />
          تنظیمات پنل
        </Link>
      ),
    },
    {
      key: 'logout',
      label: (
        <Link
          href="/signin"
          className="group text-theme-sm mt-2 flex items-center gap-3 rounded-lg border-t border-gray-100 px-1 py-1 pt-3 font-medium text-gray-700 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <PiSignOut className="text-red-500" size={22} />
          خروج
        </Link>
      ),
    },
  ];

  return (
    // <div className="relative">
    <AntDropdown
      menuItems={items}
      contentClassName="w-48"
      triggerButton={
        <Image
          width={44}
          height={44}
          src="/images/user/owner.jpg"
          alt="User"
          className="rounded-full"
        />
      }
      // contentClassName="w-[260px]"
    />
    // </div>
  );
}
