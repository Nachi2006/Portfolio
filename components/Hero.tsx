"use client";

import { useState } from "react";
import { Copy, Check, Terminal, ShieldCheck, Database, Layers, Sparkles, ArrowRight } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-14">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]"
        >
          
          {/* Main Hero Card (Spans 2 columns, 2 rows) */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-border bg-surface-muted text-xs font-mono text-text-secondary">
                <Terminal size={14} className="text-text-primary" />
                <span>ml-engineer ~</span>
                <span className="text-text-primary font-semibold">vit-vellore</span>
                <span className="w-1.5 h-3 bg-white animate-pulse ml-1" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold font-display tracking-tight leading-[1.1] text-text-primary">
                S Adithya <br />
                <span className="text-text-secondary">Nachiyappan</span>
              </h1>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-bold font-mono bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                View Work <ArrowRight size={16} />
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-bold font-mono border border-surface-border text-text-primary hover:border-white transition-colors"
              >
                Resume PDF ↗
              </a>
            </div>
          </motion.div>

          {/* About / Pitch Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-card rounded-2xl p-6 flex flex-col justify-center">
            <h2 className="text-lg font-bold font-display mb-2 text-text-primary">The Pitch</h2>
            <p className="text-sm text-text-secondary leading-relaxed font-mono">
              {siteConfig.pitch}
            </p>
          </motion.div>

          {/* Location & Status */}
          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center bg-surface-muted">
              📍
            </div>
            <div className="font-mono text-xs text-text-secondary">{siteConfig.location}</div>
          </motion.div>

          {/* Email Action */}
          <motion.div 
            variants={itemVariants} 
            className="glass-card rounded-2xl p-6 flex flex-col justify-center items-center cursor-pointer hover:border-white transition-colors group"
            onClick={copyEmail}
          >
            <div className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center bg-surface-muted group-hover:bg-white group-hover:text-black transition-colors">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </div>
            <div className="font-mono text-xs font-semibold mt-3 text-text-primary">
              {copied ? "Copied!" : "Copy Email"}
            </div>
          </motion.div>

          {/* Metrics / Track Record (Spans 4 cols on md, 2 rows on lg) */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4 glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-4">
              <span className="font-mono font-bold text-sm text-text-primary">Track Record</span>
              <span className="text-[11px] font-mono border border-surface-border px-2 py-0.5 rounded text-text-secondary">VIT &apos;28</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <ShieldCheck size={14} />, label: "Patents",  value: "1", sub: "Geo-Spatial Tracking and Location Obfuscation" },
                { icon: <Database size={14} />,    label: "Internships", value: "3",  sub: "Experience in Research and Industry" },
                { icon: <Layers size={14} />,      label: "B.Tech IT",      value: "9.00",  sub: "CGPA @ VIT" },
                { icon: <Sparkles size={14} />,    label: "Projects Deployed",    value: "10+", sub: "Spanning AI,Backend,DevOps" },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-surface-border bg-surface-muted/50 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary mb-2">
                    {m.icon} {m.label}
                  </div>
                  <div className="text-2xl font-bold font-display text-text-primary">{m.value}</div>
                  <p className="text-[11px] text-text-muted mt-1">{m.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
