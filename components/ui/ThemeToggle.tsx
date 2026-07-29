"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
  };

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      className="
        w-8 h-8 rounded-lg flex items-center justify-center
        border border-surface-border text-text-secondary
        hover:border-accent hover:text-accent
        transition-all duration-200
        focus-visible:ring-2 focus-visible:ring-accent
      "
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
