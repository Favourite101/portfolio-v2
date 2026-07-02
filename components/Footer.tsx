import { profile } from "@/lib/data";

export default function Footer({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs text-white/40">
          Designed &amp; built by {profile.name}
        </p>
        <p className="font-mono text-xs text-white/25">
          Next.js · TypeScript · Tailwind · Framer Motion
        </p>
        <button
          onClick={onOpenTerminal}
          className="mt-2 font-mono text-xs text-white/30 transition-colors hover:text-accent"
        >
          psst — try the <span className="text-accent/70">$ terminal</span>
        </button>
      </div>
    </footer>
  );
}
