"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LiveClock from "@/components/ui/LiveClock";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-200
        ${
          scrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-surface-border py-3 shadow-md"
            : "bg-transparent py-5"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Monogram */}
          <a
            href="#"
            id="header-logo"
            className="font-mono text-sm font-bold text-accent hover:text-accent-light transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-text-muted group-hover:text-accent transition-colors">&gt;&nbsp;</span>
            <span>{siteConfig.initials}</span>
            <span className="animate-pulse text-accent">_</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="text-xs font-mono font-medium text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            
            {/* Live Clock Widget */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-surface-border bg-surface-elevated/70 backdrop-blur-sm text-text-secondary text-xs font-mono">
              <LiveClock />
            </div>

            {/* Resume CTA */}
            <a
              id="header-resume-cta"
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden sm:inline-flex items-center gap-1.5
                px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold
                border border-accent/40 text-accent bg-accent/10
                hover:bg-accent hover:text-surface transition-all duration-150 shadow-sm
              "
            >
              Resume ↗
            </a>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden w-9 h-9 rounded-xl border border-surface-border bg-surface-elevated flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-surface-border p-4 space-y-2 bg-surface/95 backdrop-blur-xl shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm font-mono text-text-secondary hover:text-accent hover:bg-surface-elevated rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-surface-border px-3">
              <LiveClock className="text-text-muted" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
