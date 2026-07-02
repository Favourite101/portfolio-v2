import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04" title="Toolbox" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.06}>
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
