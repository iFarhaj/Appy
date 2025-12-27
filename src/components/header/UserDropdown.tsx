"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { type MenuProps } from "antd";
import AntDropdown from "../ui/AntDropdown";
import ThemeToggleButton from "@/components/common/ThemeToggleButton";
import { PiGear, PiSignOut, PiUserCircle } from "react-icons/pi";

export default function UserDropdown() {
  const items: MenuProps["items"] = [
    {
      key: "user-info",
      label: (
        <div className="pb-3 border-b border-gray-100 dark:border-gray-800">
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            Musharof Chowdhury
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
            randomuser@pimjo.com
          </span>
        </div>
      ),
    },
    {
      key: "profile",
      label: (
        <Link
          href="/profile"
          className="flex items-center gap-3 px-1 py-1 font-medium text-gray-700 rounded-lg group text-theme-sm hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <PiUserCircle size={22} />
          پروفایل من
        </Link>
      ),
    },
    {
      key: "settings",
      label: (
        <Link
          href="/profile"
          className="flex items-center gap-3 px-1 py-1 font-medium text-gray-700 rounded-lg group text-theme-sm hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <PiGear size={22} />
          تنظیمات پنل
        </Link>
      ),
    },
    {
      key: "logout",
      label: (
        <Link
          href="/signin"
          className="flex items-center gap-3 px-1 py-1 mt-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 border-t border-gray-100 dark:border-gray-800 pt-3"
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
        triggerButton={(
          <Image
            width={44}
            height={44}
            src="/images/user/owner.jpg"
            alt="User"
            className="rounded-full"
          />
        )}
        // contentClassName="w-[260px]"
      />
    // </div>
  );
}
