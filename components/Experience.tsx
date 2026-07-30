// Server component — no framer-motion
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";
import { Calendar, MapPin } from "lucide-react";

const typeBadge = {
  internship: { bg: "rgba(255,255,255,0.1)", color: "#ffffff", border: "rgba(255,255,255,0.2)" },
  club:       { bg: "rgba(255,255,255,0.05)",  color: "#cccccc", border: "rgba(255,255,255,0.15)" },
  "full-time":{ bg: "rgba(255,255,255,0.15)", color: "#ffffff", border: "rgba(255,255,255,0.3)" },
} as const;

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02" label="Industry Track Record" title="Experience & Engineering Internships" />

        <div className="relative pl-6 sm:pl-8 space-y-7">
          {/* Timeline Line */}
          <div className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

          {experiences.map((exp, idx) => {
            const badge = typeBadge[exp.type] ?? typeBadge.internship;
            return (
              <div key={idx} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-[29px] sm:-left-[33px] top-4 w-3.5 h-3.5 rounded-full border-2 border-accent bg-surface group-hover:bg-accent transition-colors shadow-sm shadow-accent/20" />

                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-surface-border hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider border"
                          style={{ background: badge.bg, color: badge.color, borderColor: badge.border }}
                        >
                          {exp.type}
                        </span>
                        {exp.metricsBadge && (
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-accent/10 border border-accent/20 text-accent">
                            ✦ {exp.metricsBadge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold font-display text-text-primary">{exp.role}</h3>
                      <p className="text-sm font-semibold text-accent mt-0.5">{exp.org}</p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs font-mono text-text-muted space-y-1 shrink-0">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-accent" /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
