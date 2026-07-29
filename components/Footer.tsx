// Server component
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/data";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border/60 py-10 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <span className="font-mono text-sm font-bold text-accent">
              <span className="text-text-muted">&gt;&nbsp;</span>{siteConfig.initials}<span className="animate-pulse">_</span>
            </span>
            <p className="text-xs font-mono text-text-muted mt-1">{siteConfig.location} · IST</p>
          </div>

          <div className="text-xs font-mono text-text-muted space-y-1 text-center md:text-left">
            <p>© {year} S Adithya Nachiyappan · Machine Learning Engineer</p>
            <p>Built with Next.js 16 · Tailwind CSS v4 · TypeScript</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: siteConfig.github,   icon: <Github size={15} />,   label: "GitHub"   },
              { href: siteConfig.linkedin, icon: <Linkedin size={15} />, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: <Mail size={15} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-8 h-8 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all"
              >
                {icon}
              </a>
            ))}
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
