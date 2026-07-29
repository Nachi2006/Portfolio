// Server component — no framer-motion
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";
import { Mail, Phone, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";

const contactLinks = [
  { id: "contact-email",    icon: "mail",     label: "Direct Email",        value: siteConfig.email,            href: `mailto:${siteConfig.email}` },
  { id: "contact-phone",    icon: "phone",    label: "Phone / WhatsApp",    value: `+91 ${siteConfig.phone}`,   href: `tel:+91${siteConfig.phone}` },
  { id: "contact-linkedin", icon: "linkedin", label: "LinkedIn Profile",    value: "adithya-nachiyappan",       href: siteConfig.linkedin },
  { id: "contact-github",   icon: "github",   label: "GitHub Repositories", value: "Nachi2006",                 href: siteConfig.github },
  { id: "contact-resume",   icon: "file",     label: "Curriculum Vitae",    value: "Download PDF Resume",       href: siteConfig.resume },
] as const;

const IconMap = {
  mail:     <Mail size={17} />,
  phone:    <Phone size={17} />,
  linkedin: <Linkedin size={17} />,
  github:   <Github size={17} />,
  file:     <FileText size={17} />,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 tech-grid relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="05" label="Get In Touch" title="Let's Build Something Meaningful" />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left pitch */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-lg text-text-secondary leading-relaxed">
              I am actively open to{" "}
              <span className="text-accent font-semibold">Machine Learning, Data Science & AI Engineering</span>{" "}
              and high-impact{" "}
              <span className="text-accent-cyan font-semibold">Software / Backend Engineering</span>{" "}
              roles.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              Whether you are scaling computer vision pipelines, building RAG systems, or need an engineer who bridges neural networks with production backends — let&apos;s connect.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                id="contact-email-cta"
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3 rounded-xl text-sm font-semibold font-display text-surface bg-accent hover:bg-accent-light transition-all flex items-center gap-2 shadow-md shadow-accent/20"
              >
                <Mail size={15} /> Send Email
              </a>
              <CopyEmailButton email={siteConfig.email} />
            </div>
          </div>

          {/* Right link cards */}
          <div className="lg:col-span-6 space-y-2.5">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card rounded-2xl p-4 sm:p-5 flex items-center justify-between group border border-surface-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-surface transition-all">
                    {IconMap[link.icon]}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-text-muted block">{link.label}</span>
                    <span className="text-sm font-semibold font-display text-text-primary group-hover:text-accent transition-colors">{link.value}</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
