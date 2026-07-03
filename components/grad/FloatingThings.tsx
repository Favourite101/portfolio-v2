"use client";

import { useMemo } from "react";

const EMOJIS = ["💛", "🎓", "🌸", "✨", "💖", "🎉", "🩷", "🦋", "⭐", "🎀", "🫶", "🌟", "💐", "🍰"];
const ANIMS = ["animate-floaty", "animate-twinkle", "animate-bob", "animate-wiggle"];

type Thing = {
  emoji: string;
  left: number;
  top: number;
  size: number;
  anim: string;
  delay: number;
  duration: number;
  opacity: number;
};

export default function FloatingThings({ count = 22 }: { count?: number }) {
  // Deterministic pseudo-random so server and client markup match.
  const things = useMemo<Thing[]>(() => {
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: count }, () => ({
      emoji: EMOJIS[Math.floor(rand() * EMOJIS.length)],
      left: rand() * 100,
      top: rand() * 100,
      size: 16 + rand() * 26,
      anim: ANIMS[Math.floor(rand() * ANIMS.length)],
      delay: rand() * 5,
      duration: 4 + rand() * 5,
      opacity: 0.45 + rand() * 0.45,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden motion-reduce:hidden"
    >
      {things.map((t, i) => (
        <span
          key={i}
          className={t.anim}
          style={{
            position: "absolute",
            left: `${t.left}%`,
            top: `${t.top}%`,
            fontSize: `${t.size}px`,
            opacity: t.opacity,
            animationDelay: `${t.delay}s`,
            animationDuration: `${t.duration}s`,
          }}
        >
          {t.emoji}
        </span>
      ))}
    </div>
  );
}
