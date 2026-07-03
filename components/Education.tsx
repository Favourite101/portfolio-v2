import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="05" title="Education" />

      <Reveal>
        <div className="glass glow-hover rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="mt-1 rounded-xl bg-accent/10 p-3 text-accent">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {education.degree}
                </h3>
                <p className="text-white/60">
                  {education.school} · {education.location}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-sm text-amber-300">
                  <Award size={15} /> {education.honor} · CGPA {education.gpa}
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-white/40">{education.date}</span>
          </div>

          <div className="mt-6 border-t border-white/5 pt-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Thesis
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {education.thesis}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
