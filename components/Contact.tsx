import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <Reveal>
        <p className="mb-4 font-mono text-sm text-accent">05. What&apos;s next</p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60">
          I&apos;m currently open to new opportunities and collaborations. Whether you
          have a role in mind or just want to connect, my inbox is always open — I&apos;ll
          get back to you.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${socials.email}`}
            className="glow-hover inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink-950"
          >
            <Mail size={18} /> Say hello
          </a>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: socials.github, label: "GitHub" },
              { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass glow-hover rounded-full p-3 text-white/60 hover:text-accent"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
