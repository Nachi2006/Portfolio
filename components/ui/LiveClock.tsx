"use client";

import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

function getTime() {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export default function LiveClock({ className = "" }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(getTime());
    // Update every minute instead of every second
    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      setTime(getTime());
      const interval = setInterval(() => setTime(getTime()), 60_000);
      return () => clearInterval(interval);
    }, msToNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  if (!time) return <span className={`font-mono text-xs ${className}`}>Chennai · IST</span>;

  return (
    <span className={`font-mono text-xs tabular-nums ${className}`}>
      <span className="text-accent mr-1">◉</span>
      Chennai · {time}
    </span>
  );
}
