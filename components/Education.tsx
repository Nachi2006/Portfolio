// Server component — no framer-motion
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/lib/data";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-muted/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" label="Academic Foundation" title="Education & Industry Certifications" />

        <div className="grid md:grid-cols-2 gap-5">
          {/* Degree */}
          <div className="glass-card rounded-2xl p-7 border border-surface-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <GraduationCap size={22} />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Degree Program</span>
                <h3 className="text-xl font-bold font-display text-text-primary">{education.degree}</h3>
                <p className="text-sm font-semibold text-text-secondary">{education.institution} · {education.location}</p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="font-mono text-xs text-text-muted">{education.period}</span>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
                    CGPA {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-7 border border-surface-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Award size={22} />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 size={11} /> Verified Credential
                  </span>
                  <h3 className="text-xl font-bold font-display text-text-primary">{cert.name}</h3>
                  <p className="text-sm font-semibold text-amber-400">{cert.issuer}</p>
                  <span className="font-mono text-xs text-text-muted block">Issued {cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
