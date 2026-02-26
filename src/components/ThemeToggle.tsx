"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[52px] h-[28px]" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex items-center w-[52px] h-[28px] rounded-full bg-dark-200 dark:bg-dark-700 border border-dark-300 dark:border-dark-600 transition-colors duration-300 cursor-pointer"
    >
      <div
        className={`absolute w-[22px] h-[22px] rounded-full bg-white dark:bg-dark-900 shadow-sm flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-[26px]" : "left-[2px]"
        }`}
      >
        {isDark ? (
          <Moon size={12} className="text-primary-400" />
        ) : (
          <Sun size={12} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
