"use client";

import { useState } from "react";
import { Copy, Check, Terminal, ShieldCheck, Database, Layers, Sparkles, ArrowDown } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-center pt-24 pb-14 overflow-hidden tech-grid"
    >
      {/* Soft background glow — static, no JS */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/80 border border-surface-border text-xs font-mono">
              <Terminal size={13} className="text-accent" />
              <span className="text-text-muted">ml-engineer ~</span>
              <span className="text-accent font-semibold">vit-vellore</span>
              <span className="w-1.5 h-3 bg-accent animate-pulse ml-1" />
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight leading-[1.08] text-text-primary">
              S Adithya <br />
              <span className="accent-glow-text">Nachiyappan</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold font-display text-accent">
              {siteConfig.role}
            </h2>

            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              {siteConfig.pitch}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge label={siteConfig.statusBadge} />
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-surface-border bg-surface-elevated/70 text-text-secondary">
                📍 {siteConfig.location}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-projects"
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-surface font-display bg-accent hover:bg-accent-light transition-colors duration-150 shadow-md shadow-accent/20 flex items-center gap-2"
              >
                View Projects →
              </a>
              <a
                id="hero-resume"
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold font-display text-accent border border-accent/30 bg-accent/10 hover:bg-accent/20 transition-colors duration-150"
              >
                Resume PDF ↗
              </a>
              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl text-xs font-mono text-text-secondary border border-surface-border bg-surface-elevated/70 hover:border-accent hover:text-text-primary transition-all flex items-center gap-2"
              >
                {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                {copied ? "Copied!" : siteConfig.email}
              </button>
            </div>
          </div>

          {/* Right column — static metrics card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 border border-surface-border space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                <span className="font-display font-bold text-sm text-text-primary">Engineering Track Record</span>
                <span className="text-[11px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">VIT &apos;28</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <ShieldCheck size={12} />, color: "text-accent",     label: "DeepDetector",  value: "96.4%", sub: "Bi-LSTM + GRU accuracy" },
                  { icon: <Database size={12} />,    color: "text-amber-400",  label: "Aspire Systems", value: "~70%",  sub: "Infra cost reduction" },
                  { icon: <Layers size={12} />,      color: "text-accent-cyan",label: "B.Tech IT",      value: "9.00",  sub: "CGPA @ VIT Vellore" },
                  { icon: <Sparkles size={12} />,    color: "text-emerald-400",label: "EasyLLM RAG",    value: "Offline", sub: "Zero cloud cost" },
                ].map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-surface-elevated/90 border border-surface-border space-y-1">
                    <div className={`flex items-center gap-1.5 text-xs font-mono ${m.color}`}>
                      {m.icon} {m.label}
                    </div>
                    <div className="text-2xl font-bold font-display text-text-primary">{m.value}</div>
                    <p className="text-[11px] text-text-muted leading-tight">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
        <ArrowDown size={13} className="text-accent animate-bounce" />
      </button>
    </section>
  );
}
