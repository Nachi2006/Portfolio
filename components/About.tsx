// Server component — no framer-motion
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutBio, skillCategories } from "@/lib/data";
import { User, Terminal } from "lucide-react";
import SkillsGrid from "@/components/SkillsGrid";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-muted/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="04" label="Engineering Background" title="About Me & Skill Matrix" />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-surface-border">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center font-mono font-bold text-accent text-xl">
                SAN
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-text-primary">S Adithya Nachiyappan</h3>
                <p className="text-xs font-mono text-text-muted flex items-center gap-1.5 mt-0.5">
                  <User size={12} className="text-accent" /> Machine Learning Engineer · VIT Vellore &apos;26
                </p>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              {aboutBio.map((para, idx) => <p key={idx}>{para}</p>)}
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">B.Tech IT @ VIT Vellore</span>
              <span className="text-accent font-bold">CGPA: 9.00 / 10.0</span>
            </div>
          </div>

          {/* Skills Grid — interactive, isolated as client island */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-5">
                <h3 className="font-display font-bold text-base text-text-primary flex items-center gap-2">
                  <Terminal size={16} className="text-accent" /> Technical Skill Matrix
                </h3>
                <span className="text-xs font-mono text-text-muted">Hover for details</span>
              </div>
              <SkillsGrid categories={skillCategories} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
