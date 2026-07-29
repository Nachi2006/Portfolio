"use client";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center hover:bg-accent hover:text-surface transition-all ml-1"
    >
      <ArrowUp size={15} />
    </button>
  );
}
