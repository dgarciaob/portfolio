"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <button
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        onClick={() => setTheme("light")}
      >
        <Sun className="text-black" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        onClick={() => setTheme("dark")}
      >
        <Moon className="text-black" />
      </button>
    );
  }
};

export default ThemeSwitch;
