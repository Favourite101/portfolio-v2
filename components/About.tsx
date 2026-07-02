import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const highlights = [
  "3+ years shipping full-stack products end to end",
  "30% faster APIs · 45% more inquiries · 50% better retrieval",
  "Backend depth in Java/Spring Boot & Python/Django",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <Reveal>
          <div className="space-y-5 text-white/70">
            <p className="text-lg leading-relaxed">{profile.bio}</p>
            <ul className="space-y-2.5 pt-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-white/60">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="group relative mx-auto w-full max-w-[280px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-accent/40 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={profile.headshot}
                alt={`Portrait of ${profile.name}`}
                width={560}
                height={700}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-accent/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
