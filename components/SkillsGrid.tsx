"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { SkillCategory } from "@/lib/data";

export default function SkillsGrid({ categories }: { categories: SkillCategory[] }) {
  const [active, setActive] = useState<{ name: string; detail: string } | null>(null);

  return (
    <div className="space-y-5">
      {active && (
        <div className="p-3 rounded-xl bg-accent/10 border border-accent/25 text-accent text-xs font-mono flex items-center gap-2">
          <Info size={13} className="shrink-0" />
          <span><strong>{active.name}:</strong> <span className="text-text-secondary">{active.detail}</span></span>
        </div>
      )}

      {categories.map((cat) => (
        <div key={cat.title} className="space-y-2">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">{cat.title}</h4>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <button
                key={skill.name}
                onMouseEnter={() => setActive(skill)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(skill)}
                className="px-3 py-1.5 rounded-xl text-xs font-mono border bg-surface/80 border-surface-border text-text-secondary hover:border-accent/50 hover:text-accent transition-all"
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
