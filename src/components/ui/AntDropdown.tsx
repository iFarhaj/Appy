"use client";
import React from "react";
import { Dropdown, type DropdownProps, type MenuProps } from "antd";
import { twMerge } from "tailwind-merge";

interface AntDropdownProps extends DropdownProps {
  menuItems: MenuProps["items"];
  triggerButton: React.ReactNode;
  // dropdownClassName?: string;
  contentClassName?: string;
}

export default function AntDropdown({
  menuItems,
  triggerButton,
  contentClassName,
  ...rest
}: AntDropdownProps) {
  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["click"]}
      placement="top"
      {...rest}
      getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
      popupRender={(menu) => (
        <div className={twMerge('w-[300px] rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800', contentClassName)}>
          {menu}
        </div>
      )}
    >
      {triggerButton}
    </Dropdown>
  );
}
