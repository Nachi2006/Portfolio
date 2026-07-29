"use client";

import { ReactNode } from "react";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply saved or preferred theme on mount
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const isDark = saved ? saved === "dark" : prefersDark !== false;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  // Prevent flash by hiding until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }} suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
