"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, CornerDownLeft, Sparkles } from "lucide-react";
import { siteConfig, projects } from "@/lib/data";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: number;
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 0,
      command: "welcome",
      output: (
        <div className="space-y-1 text-text-secondary">
          <p className="text-accent font-semibold">
            ✦ SAN Portfolio Interactive Developer Console v2.0
          </p>
          <p className="text-xs">
            Type <span className="text-accent font-mono">help</span> to view available commands or press <span className="text-accent font-mono">ESC</span> to exit.
          </p>
        </div>
      ),
    },
  ]);
  const [matrixMode, setMatrixMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via custom event or props handling
          const toggleBtn = document.getElementById("terminal-trigger");
          toggleBtn?.click();
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-text-secondary">
            <p className="text-accent font-semibold">Available Commands:</p>
            <p><span className="text-accent font-bold">projects</span> - View featured engineering projects</p>
            <p><span className="text-accent font-bold">skills</span> - Display key technical stack</p>
            <p><span className="text-accent font-bold">bio</span> - Read brief engineer bio</p>
            <p><span className="text-accent font-bold">contact</span> - Show email, LinkedIn, and GitHub</p>
            <p><span className="text-accent font-bold">matrix</span> - Toggle matrix terminal theme</p>
            <p><span className="text-accent font-bold">clear</span> - Clear terminal log</p>
            <p><span className="text-accent font-bold">exit</span> - Close terminal console</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-accent font-semibold">Selected Projects Overview:</p>
            {projects.map((p) => (
              <div key={p.id} className="pl-2 border-l border-surface-border">
                <span className="text-text-primary font-bold">{p.id}. {p.title}</span>{" "}
                <span className="text-text-muted">[{p.category}]</span>
                <p className="text-accent-cyan">{p.result}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-xs font-mono text-text-secondary space-y-1">
            <p className="text-accent font-semibold">Technical Stack Summary:</p>
            <p>• ML / AI: PyTorch, TensorFlow, OpenCV, YOLO, Bi-LSTM/GRU, Scikit-learn</p>
            <p>• GenAI / RAG: Ollama, ChromaDB, Tesseract OCR, PyPDF2, Stable Diffusion</p>
            <p>• Engineering: VictoriaMetrics, Grafana, FastAPI, Docker, MQTT, PostgreSQL</p>
            <p>• Languages: Python, Go, Java, C/C++, SQL, TypeScript</p>
          </div>
        );
        break;

      case "bio":
        outputNode = (
          <div className="text-xs text-text-secondary leading-relaxed">
            <p className="text-accent font-semibold mb-1">S Adithya Nachiyappan</p>
            <p>
              B.Tech IT student at VIT Vellore (CGPA 9.00/10.0) with hands-on experience building machine learning systems and backend infrastructure. Internships at Aspire Systems (~70% cost reduction) and Qube Cinemas (OCR & Document RAG).
            </p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-text-secondary">
            <p className="text-accent font-semibold">Direct Communication:</p>
            <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a></p>
            <p>LinkedIn: <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-accent-cyan underline">{siteConfig.linkedin}</a></p>
            <p>GitHub: <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-accent-cyan underline">{siteConfig.github}</a></p>
          </div>
        );
        break;

      case "matrix":
        setMatrixMode((prev) => !prev);
        outputNode = (
          <p className="text-xs font-mono text-emerald-400">
            [SYS] Matrix visual theme {matrixMode ? "disabled" : "enabled"}.
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose();
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-red-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-accent underline">help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { id: Date.now(), command: input, output: outputNode }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className={`w-full max-w-2xl rounded-2xl border border-surface-border shadow-2xl overflow-hidden glass-card ${
              matrixMode ? "border-emerald-500/40 bg-black/90 text-emerald-400 font-mono" : ""
            }`}
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border/80 bg-surface-elevated/90">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-text-muted flex items-center gap-1.5">
                  <Terminal size={13} className="text-accent" /> san-cli ~ developer-console
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/25 text-accent hidden sm:inline">
                  Ctrl + K
                </span>
                <button
                  onClick={onClose}
                  className="text-text-muted hover:text-text-primary transition-colors p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Output Area */}
            <div className="p-4 max-h-[360px] overflow-y-auto space-y-4 font-mono text-xs">
              {history.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-text-muted">
                    <span className="text-accent">&gt;</span>
                    <span className="text-text-primary font-semibold">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 border-t border-surface-border/80 bg-surface/90">
              <span className="text-accent font-mono font-bold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help', 'projects', 'skills', 'bio', 'contact'..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-text-primary placeholder:text-text-muted/60"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-surface transition-colors"
                title="Execute command"
              >
                <CornerDownLeft size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
