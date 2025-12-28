'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { type MenuProps } from 'antd';
import AntDropdown from '../ui/AntDropdown'; // Import the new AntDropdown component

const notifications = [
  {
    id: 1,
    user: 'Terry Franci',
    image: '/images/user/user-02.jpg',
    message: 'requests permission to change Project - Nganter App',
    time: '5 min ago',
    category: 'Project',
    statusColor: 'bg-success-500',
  },
  {
    id: 2,
    user: 'Alena Franci',
    image: '/images/user/user-03.jpg',
    message: 'requests permission to change Project - Nganter App',
    time: '8 min ago',
    category: 'Project',
    statusColor: 'bg-success-500',
  },
  {
    id: 3,
    user: 'Jocelyn Kenter',
    image: '/images/user/user-04.jpg',
    message: 'requests permission to change Project - Nganter App',
    time: '15 min ago',
    category: 'Project',
    statusColor: 'bg-success-500',
  },
  {
    id: 4,
    user: 'Brandon Philips',
    image: '/images/user/user-05.jpg',
    message: 'requests permission to change Project - Nganter App',
    time: '1 hr ago',
    category: 'Project',
    statusColor: 'bg-error-500',
  },
];

export default function NotificationDropdown() {
  const [notifying, setNotifying] = useState(true);

  const items: MenuProps['items'] = [
    {
      key: 'header',
      type: 'group',
      label: (
        <div className="mb-1 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-700">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Notification</h5>
        </div>
      ),
    },
    ...notifications.map((notification) => ({
      key: notification.id.toString(),
      label: (
        <div className="flex items-start gap-3 p-1 whitespace-normal">
          <div className="relative h-10 w-10 shrink-0 rounded-full">
            <Image
              width={40}
              height={40}
              src={notification.image}
              alt={notification.user}
              className="h-full w-full overflow-hidden rounded-full object-cover"
            />
            <span
              className={`absolute end-0 bottom-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white ${notification.statusColor} dark:border-gray-900`}
            ></span>
          </div>

          <div className="flex flex-col">
            <p className="text-theme-sm mb-1 leading-snug text-gray-500 dark:text-gray-400">
              <span className="me-1 font-medium text-gray-800 dark:text-white/90">
                {notification.user}
              </span>
              {notification.message}
            </p>

            <div className="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span>{notification.category}</span>
              <span className="h-1 w-1 rounded-full bg-gray-400"></span>
              <span>{notification.time}</span>
            </div>
          </div>
        </div>
      ),
    })),
    {
      key: 'footer',
      label: (
        <Link
          href="/"
          className="mt-2 block rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          View All Notifications
        </Link>
      ),
    },
  ];

  return (
    <div className="relative">
      <AntDropdown
        menuItems={items}
        triggerButton={
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
            <span
              className={`absolute top-0.5 right-0 z-10 h-2 w-2 rounded-full bg-orange-400 ${!notifying ? 'hidden' : 'flex'}`}
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
            </span>
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
                fill="currentColor"
              />
            </svg>
          </button>
        }
        onOpenChange={(open) => {
          if (open) setNotifying(false);
        }}
        contentClassName="h-[480px] w-[calc(100vw-32px)] sm:w-[361px]"
      />
    </div>
  );
}
