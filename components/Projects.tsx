"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, Star, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/lib/data";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

function CardInner({ project }: { project: Project }) {
  const Icon = project.award ? Trophy : project.url ? Star : Lock;
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 text-accent">
          <Icon size={20} />
          {project.featured && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              Featured
            </span>
          )}
          {project.award && (
            <span className="rounded-full bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
              🏆 {project.award}
            </span>
          )}
        </div>
        {project.url && (
          <ArrowUpRight
            size={20}
            className="text-white/30 transition-colors group-hover:text-accent"
          />
        )}
      </div>

      <h3 className="font-display text-lg font-semibold">{project.title}</h3>
      {project.org && (
        <p className="mt-0.5 font-mono text-xs text-accent-soft/80">{project.org}</p>
      )}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-white/45">
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent-soft">
        {project.url
          ? `${project.live ? "Live demo" : "Source"} →`
          : project.status ?? "Private work"}
      </span>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const className =
    "group glass glow-hover flex h-full flex-col rounded-2xl p-6";

  if (!project.url) {
    return (
      <div className={className}>
        <CardInner project={project} />
      </div>
    );
  }

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      <CardInner project={project} />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Things I've built" />

      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-5 mt-12 font-mono text-xs uppercase tracking-wider text-white/40">
          More projects
        </h3>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
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
