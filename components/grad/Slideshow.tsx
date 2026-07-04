"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; caption: string; emoji?: string };

const gradients = [
  "linear-gradient(135deg,#fde68a,#f9a8d4)",
  "linear-gradient(135deg,#c4b5fd,#93c5fd)",
  "linear-gradient(135deg,#6ee7b7,#93c5fd)",
  "linear-gradient(135deg,#fdba74,#fb7fb8)",
  "linear-gradient(135deg,#f9a8d4,#c4b5fd)",
];

export default function Slideshow({ photos }: { photos: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = photos.length;

  const go = (dir: number) => setI((prev) => (prev + dir + n) % n);

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setInterval(() => setI((prev) => (prev + 1) % n), 3800);
    return () => clearInterval(t);
  }, [paused, n]);

  if (n === 0) return null;
  const photo = photos[i];

  return (
    <div
      className="mx-auto max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative rounded-[20px] bg-white p-4 pb-0 shadow-[0_20px_50px_-20px_rgba(91,59,87,0.5)]">
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 rounded-[2px] bg-pastel-pink/50"
        />
        <div className="relative aspect-square w-full overflow-hidden rounded-[12px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  <span className="text-7xl drop-shadow">{photo.emoji ?? "📸"}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-pastel-plum shadow-md transition-transform hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-pastel-plum shadow-md transition-transform hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="px-2 py-4 text-center font-hand text-2xl text-pastel-plum">
          {photo.caption}
        </p>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to photo ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              idx === i ? "w-6 bg-pastel-rose" : "w-2.5 bg-pastel-plum/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
