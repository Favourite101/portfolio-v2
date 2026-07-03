import { Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="community" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="06" title="Leadership & community" />

      <div className="grid gap-5 md:grid-cols-3">
        {leadership.map((item, i) => (
          <Reveal key={item.org} delay={(i % 3) * 0.08}>
            <div className="glass glow-hover flex h-full flex-col rounded-2xl p-6">
              <span className="mb-4 w-fit rounded-xl bg-accent/10 p-2.5 text-accent">
                <Users size={20} />
              </span>
              <h3 className="font-display text-base font-semibold leading-snug">
                {item.role}
              </h3>
              <p className="mt-0.5 text-sm text-accent-soft/80">{item.org}</p>
              <p className="mb-4 mt-1 font-mono text-[11px] text-white/40">
                {item.date}
              </p>
              <p className="text-sm leading-relaxed text-white/60">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
