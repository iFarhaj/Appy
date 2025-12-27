"use client";

import React, { useEffect, useState } from "react";
import { Segmented } from "antd";
import { useTheme } from "../../context/ThemeContext";
import { PiMoonStars, PiSun } from "react-icons/pi";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (value: string) => {
    if (value === "dark" && theme === "light") {
      toggleTheme();
    } else if (value === "light" && theme === "dark") {
      toggleTheme();
    }
  };

  if (!mounted) {
    return (
      <div className="h-8 w-[88px] animate-pulse rounded-full bg-gray-100 dark:bg-gray-700" />
    );
  }

  return (
    <span dir="ltr" className="mt-1">
      <Segmented
        size="middle"
        shape="round"
        options={[
          { value: "light", icon: <PiSun className="mt-1 size-5" /> },
          { value: "dark", icon: <PiMoonStars className="mt-1 size-5" /> },
        ]}
        value={theme}
        onChange={handleThemeChange}
      />
    </span>
  );
};

export default ThemeToggle;
