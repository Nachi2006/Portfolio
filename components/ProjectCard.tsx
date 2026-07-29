"use client";

import { useState } from "react";
import { ExternalLink, Github, X, GitBranch, Code2, Sparkles } from "lucide-react";
import TechPill from "@/components/ui/TechPill";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"architecture" | "code">("architecture");

  return (
    <>
      <article
        onClick={() => { setOpen(true); setTab("architecture"); }}
        className="glass-card rounded-2xl p-6 sm:p-7 cursor-pointer border border-surface-border hover:border-accent/40 transition-all duration-200 group"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/10 border border-accent/25 text-accent">
              {project.categoryLabel}
            </span>

            <h3 className="text-2xl font-bold font-display text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
              <Sparkles size={13} />
              {project.result}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => <TechPill key={t} label={t} />)}
            </div>
          </div>

          <div className="flex md:flex-col items-center md:items-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-surface-border shrink-0">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30 hover:bg-accent hover:text-surface transition-all"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-surface-elevated text-text-secondary border border-surface-border hover:text-text-primary transition-all"
              >
                <Github size={13} /> Code
              </a>
            )}
            <span className="text-xs font-mono text-text-muted group-hover:text-accent transition-colors">
              Inspect ↗
            </span>
          </div>
        </div>
      </article>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass-card rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative border border-surface-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent transition-all"
            >
              <X size={15} />
            </button>

            <div className="space-y-4 overflow-y-auto pr-1">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">{project.categoryLabel}</span>
                <h3 className="text-2xl font-bold font-display text-text-primary mt-0.5">{project.title}</h3>
              </div>

              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold">
                ✦ {project.result}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>

              {/* Tabs */}
              <div className="flex items-center gap-2 border-b border-surface-border pb-2 pt-1">
                {(["architecture", "code"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                      tab === t ? "bg-accent text-surface" : "bg-surface-elevated text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {t === "architecture" ? <GitBranch size={12} /> : <Code2 size={12} />}
                    {t === "architecture" ? "Architecture" : "Code Snippet"}
                  </button>
                ))}
              </div>

              {tab === "architecture" && (
                <div className="space-y-2">
                  {project.architecture.map((step, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-surface-elevated/80 border border-surface-border text-xs font-mono text-text-secondary flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-bold text-[10px] shrink-0">{i + 1}</span>
                      {step}
                    </div>
                  ))}
                </div>
              )}

              {tab === "code" && (
                <pre className="p-4 rounded-xl bg-black/80 border border-surface-border text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet}</code>
                </pre>
              )}

              <div>
                <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => <TechPill key={t} label={t} />)}
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center gap-3">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-accent text-surface hover:bg-accent-light transition-all flex items-center gap-2">
                    <ExternalLink size={13} /> Open Demo
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-surface-elevated text-text-primary border border-surface-border hover:border-accent transition-all flex items-center gap-2">
                    <Github size={13} /> Repository
                  </a>
                )}
                <button onClick={() => setOpen(false)} className="ml-auto text-xs font-mono text-text-muted hover:text-text-primary transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
