"use client";

import { useCallback, useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";

const PASTELS = ["#f9a8d4", "#c4b5fd", "#fde68a", "#6ee7b7", "#93c5fd", "#fdba74"];

export default function Confetti() {
  const burst = useCallback(() => {
    const hearts = confetti.shapeFromText({ text: "💛", scalar: 2.2 });
    const spark = confetti.shapeFromText({ text: "✨", scalar: 2 });

    // A cheerful pop from the middle.
    confetti({
      particleCount: 60,
      spread: 90,
      startVelocity: 40,
      origin: { y: 0.5 },
      colors: PASTELS,
      scalar: 1.1,
    });
    // Raining hearts + sparkles.
    confetti({
      particleCount: 24,
      spread: 120,
      startVelocity: 30,
      origin: { y: 0.4 },
      shapes: [hearts, spark],
      scalar: 2,
      gravity: 0.7,
    });
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(burst, 400);
    return () => clearTimeout(t);
  }, [burst]);

  return (
    <button
      onClick={burst}
      className="animate-bob inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pastel-rose to-pastel-lilac px-6 py-3 font-cute text-base font-semibold text-white shadow-lg shadow-pastel-pink/40 transition-transform hover:scale-105"
    >
      <Sparkles size={18} /> press me 😗
    </button>
  );
}
