"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Nav({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/40" : "border border-transparent"
        }`}
      >
        <a href="#home" className="font-display text-sm font-bold tracking-tight">
          <span className="text-accent">/</span>FO
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={onOpenTerminal}
          className="glow-hover rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-accent-soft"
          aria-label="Open terminal"
        >
          <span className="text-white/40">$</span> terminal
        </button>
      </nav>
    </motion.header>
  );
}
