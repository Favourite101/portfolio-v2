"use client";

import { useCallback, useEffect } from "react";
import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react";

const GOLD = ["#c9a24b", "#e6cf94", "#a67c1e", "#f5e6c0", "#a78bfa"];

export default function Confetti() {
  const burst = useCallback(() => {
    const end = Date.now() + 900;
    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: GOLD,
        scalar: 0.9,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: GOLD,
        scalar: 0.9,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  useEffect(() => {
    // Respect users who prefer reduced motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(burst, 350);
    return () => clearTimeout(t);
  }, [burst]);

  return (
    <button
      onClick={burst}
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-5 py-2.5 text-sm font-medium text-gold-deep transition-transform hover:scale-105"
    >
      <PartyPopper size={17} /> Celebrate with me
    </button>
  );
}
