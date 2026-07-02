"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Things I've built" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08}>
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group glass glow-hover flex h-full flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-accent">
                  {project.live ? <Star size={20} /> : <Github size={20} />}
                  {project.featured && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/30 transition-colors group-hover:text-accent"
                />
              </div>

              <h3 className="font-display text-lg font-semibold transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-white/45"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent-soft">
                {project.live ? "Live demo" : "Source"} →
              </span>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Favourite101"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80"
          >
            <Github size={16} /> More on GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
