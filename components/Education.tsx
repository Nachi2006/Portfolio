// Server component — no framer-motion
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications, patents } from "@/lib/data";
import { GraduationCap, Award, FileText, ExternalLink } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-muted/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" label="Academic Foundation" title="Education, Certifications & Patents" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {/* Degree */}
          <div className="glass-card rounded-2xl p-7 border border-surface-border flex flex-col justify-between hover:border-accent transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-surface-border flex items-center justify-center shrink-0 text-accent">
                <GraduationCap size={22} />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">Degree Program</span>
                <h3 className="text-lg font-bold font-display text-text-primary">{education.degree}</h3>
                <p className="text-sm font-semibold text-text-secondary">{education.institution}</p>
                <p className="text-xs text-text-muted">{education.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between pt-6 mt-4 border-t border-surface-border">
              <span className="font-mono text-xs text-text-muted">{education.period}</span>
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-accent text-surface">
                CGPA {education.cgpa}
              </span>
            </div>
          </div>

          {/* Certifications */}
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-7 border border-surface-border flex flex-col justify-between hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-surface-border flex items-center justify-center shrink-0 text-accent">
                  <Award size={22} />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">Certification</span>
                  <h3 className="text-lg font-bold font-display text-text-primary">{cert.name}</h3>
                  <p className="text-sm font-semibold text-text-secondary">{cert.issuer}</p>
                  <span className="font-mono text-xs text-text-muted block">Issued {cert.date}</span>
                </div>
              </div>
              {cert.link && (
                <div className="pt-6 mt-4 border-t border-surface-border">
                  <a 
                    href={cert.link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-xs font-mono text-text-primary hover:text-accent hover:underline transition-all"
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Patents */}
          {patents.map((patent, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-7 border border-surface-border flex flex-col justify-between hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-surface-border flex items-center justify-center shrink-0 text-accent">
                  <FileText size={22} />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">{patent.status}</span>
                  <h3 className="text-sm font-bold font-display text-text-primary leading-snug">{patent.title}</h3>
                </div>
              </div>
              {patent.applicationNumber ? (
                <div className="pt-6 mt-4 border-t border-surface-border">
                  <span className="font-mono text-xs text-text-primary">
                    {patent.applicationNumber}
                  </span>
                </div>
              ) : (
                <div className="pt-6 mt-4 border-t border-surface-border">
                  <span className="font-mono text-xs text-text-muted">Published System</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
