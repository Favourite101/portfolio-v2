import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02" title="Where I've worked" />

      <div className="relative space-y-10 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink-950" />
              <div className="glass glow-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-white/40">{job.date}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/65">
                      <span className="mt-1.5 text-accent">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
