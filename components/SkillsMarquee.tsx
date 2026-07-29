// Server component — pure CSS animation, no JS
import { skillsMarqueeRow1, skillsMarqueeRow2 } from "@/lib/data";

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper overflow-hidden py-2 select-none">
      <div className={`marquee-track ${direction === "left" ? "marquee-track-left" : "marquee-track-right"}`}>
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-3 mx-2 whitespace-nowrap">
            <span className="px-4 py-1.5 rounded-xl font-mono text-xs border bg-surface-elevated/80 border-surface-border text-text-secondary hover:border-accent/40 hover:text-accent transition-colors duration-150 cursor-default">
              {item}
            </span>
            <span className="text-[10px] text-accent/30 font-mono">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section
      aria-label="Tech stack ticker"
      className="py-10 overflow-hidden border-y border-surface-border/50 bg-surface-muted/30 relative"
    >
      {/* Edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-surface-muted/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-surface-muted/30 to-transparent z-10 pointer-events-none" />

      <div className="space-y-3">
        <MarqueeRow items={skillsMarqueeRow1} direction="left" />
        <MarqueeRow items={skillsMarqueeRow2} direction="right" />
      </div>
    </section>
  );
}
