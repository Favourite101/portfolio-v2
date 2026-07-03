"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { education, experience, profile, projects, skills, socials } from "@/lib/data";

type Line = { type: "input" | "output"; text: string };

const banner = [
  "  ┌─────────────────────────────────────────┐",
  "  │   favour@portfolio ~ interactive shell  │",
  "  └─────────────────────────────────────────┘",
  "Type `help` to see available commands.",
];

function runCommand(raw: string): string[] {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return [];

  switch (cmd) {
    case "help":
      return [
        "Available commands:",
        "  whoami       a quick intro",
        "  skills       tech I work with",
        "  projects     things I've built",
        "  experience   where I've worked",
        "  education    school & thesis",
        "  resume       download my resume",
        "  contact      how to reach me",
        "  social       find me online",
        "  clear        clear the screen",
        "  sudo hire-me you'll see",
      ];
    case "whoami":
      return [
        `${profile.name} — ${profile.title}`,
        "",
        profile.bio,
      ];
    case "skills":
      return skills.map((g) => `${g.category.padEnd(16)} ${g.items.join(", ")}`);
    case "projects":
      return projects.map(
        (p) => `• ${p.title}\n    ${p.url ?? p.status ?? "private"}`,
      );
    case "experience":
      return experience.map(
        (e) => `• ${e.role} @ ${e.company}  (${e.date})`,
      );
    case "education":
      return [
        `${education.degree} — ${education.school}`,
        `${education.honor} · CGPA ${education.gpa}  (${education.date})`,
        "",
        `Thesis: ${education.thesis}`,
      ];
    case "resume":
      if (typeof window !== "undefined") window.open(profile.resumeUrl, "_blank");
      return ["Opening résumé in a new tab… 📄"];
    case "contact":
      return [`email: ${socials.email}`, "Fire off an email — I reply fast."];
    case "social":
      return [
        `github    ${socials.github}`,
        `linkedin  ${socials.linkedin}`,
        `medium    ${socials.medium}`,
        `twitter   ${socials.twitter}`,
      ];
    case "sudo hire-me":
    case "hire-me":
    case "hire me":
      return [
        "[sudo] password for recruiter: ********",
        "Access granted. ✅",
        "",
        "Great decision. Let's talk →",
        `  ${socials.email}`,
      ];
    case "ls":
      return ["about  experience  projects  skills  education  contact  resume.pdf"];
    case "echo hello":
      return ["hello 👋 thanks for stopping by"];
    case "sudo":
      return ["usage: sudo hire-me"];
    default:
      return [`command not found: ${cmd}. Try \`help\`.`];
  }
}

export default function Terminal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const submit = () => {
    const value = input;
    if (value.trim().toLowerCase() === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    const output = runCommand(value);
    setLines((prev) => [
      ...prev,
      { type: "input", text: value },
      ...output.map((text) => ({ type: "output" as const, text })),
    ]);
    if (value.trim()) setHistory((h) => [...h, value]);
    setHistIdx(null);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === null) return;
      const idx = histIdx + 1;
      if (idx >= history.length) {
        setHistIdx(null);
        setInput("");
      } else {
        setHistIdx(idx);
        setInput(history[idx]);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="flex h-[70vh] max-h-[560px] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-900/95 shadow-2xl shadow-accent/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-white/40">
                  favour@portfolio: ~
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close terminal"
                className="text-white/40 transition-colors hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {banner.map((b, i) => (
                <div key={`b-${i}`} className="whitespace-pre text-accent/70">
                  {b}
                </div>
              ))}
              <div className="mb-2" />

              {lines.map((line, i) =>
                line.type === "input" ? (
                  <div key={i} className="flex gap-2">
                    <span className="text-accent">➜</span>
                    <span className="text-white/50">~</span>
                    <span className="text-white/90">{line.text}</span>
                  </div>
                ) : (
                  <div
                    key={i}
                    className="whitespace-pre-wrap pl-1 text-white/65"
                  >
                    {line.text}
                  </div>
                ),
              )}

              <div className="flex items-center gap-2">
                <span className="text-accent">➜</span>
                <span className="text-white/50">~</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  className="flex-1 bg-transparent text-white/90 caret-accent outline-none"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
