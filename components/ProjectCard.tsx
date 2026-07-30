"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Project } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border hover:border-accent transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest border border-surface-border text-text-secondary bg-surface-elevated">
          {project.categoryLabel}
        </span>
        <div className="flex items-center gap-3 relative z-10">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold font-display text-text-primary mb-3 group-hover:tracking-wide transition-all duration-300">
        {project.title}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow font-mono">
        {project.description}
      </p>

      <div className="mt-auto space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-accent text-surface font-mono text-xs font-bold w-full max-w-fit">
          <Sparkles size={14} />
          {project.result}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-mono text-text-muted border border-surface-border px-2 py-1 rounded-sm bg-surface-muted hover:text-accent hover:border-text-secondary transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
