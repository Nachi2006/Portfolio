"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="px-5 py-3 rounded-xl text-xs font-mono font-medium text-text-secondary border border-surface-border bg-surface-elevated hover:text-text-primary hover:border-accent transition-all flex items-center gap-2"
    >
      {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}
