import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import Confetti from "@/components/grad/Confetti";
import { grad } from "@/lib/grad";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: `${grad.name} — ${grad.classOf} 🎓`,
  description: `Celebrating ${grad.name}'s graduation — ${grad.degree}, ${grad.honor}. Thank you for being part of the journey.`,
  openGraph: {
    title: `${grad.name} — ${grad.classOf} 🎓`,
    description: `Celebrating ${grad.name}'s graduation, ${grad.honor}. Leave a well-wish!`,
    type: "website",
  },
};

export default function GradPage() {
  return (
    <main className="min-h-screen bg-cream font-sans text-cream-ink">
      {/* Soft festive glows */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "radial-gradient(40rem 30rem at 80% -5%, rgba(201,162,75,0.18), transparent 60%), radial-gradient(36rem 30rem at 0% 10%, rgba(230,207,148,0.22), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* HERO */}
        <section className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-4 py-1.5 text-sm font-medium text-gold-deep">
            <GraduationCap size={16} /> {grad.classOf}
          </span>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            {grad.name}
          </h1>

          <p className="mt-5 font-serif text-xl italic text-cream-ink/70 sm:text-2xl">
            {grad.degree}
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-5 py-2 text-gold-deep">
            <Sparkles size={16} /> {grad.honor} · CGPA {grad.gpa}
          </p>

          <div className="mt-10">
            <Confetti />
          </div>
        </section>

        {/* THANK YOU */}
        <section className="border-t border-gold/15 py-20">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold sm:text-4xl">
            A heartfelt thank you
          </h2>
          <div className="mx-auto max-w-xl space-y-5 text-lg leading-relaxed text-cream-ink/75">
            {grad.thankYou.map((para, i) => (
              <p key={i} className={i === 0 ? "text-center font-serif text-xl italic" : ""}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* MILESTONES */}
        <section className="border-t border-gold/15 py-20">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold sm:text-4xl">
            The road here
          </h2>
          <div className="space-y-4">
            {grad.milestones.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-gold/20 bg-white/50 p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-gold-deep">
                  {m.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-cream-ink/70">{m.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="border-t border-gold/15 py-20">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold sm:text-4xl">
            Moments
          </h2>
          {grad.photos.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {grad.photos.map((photo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm"
                />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-gold/40 bg-white/40 p-10 text-center text-cream-ink/50">
              📸 Graduation photos coming soon.
            </p>
          )}
        </section>

        {/* STAY IN TOUCH */}
        <section className="border-t border-gold/15 py-20 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Let&apos;s stay in touch</h2>
          <p className="mx-auto mt-4 max-w-md text-center text-cream-ink/65">
            This is just the beginning. Come see what I&apos;m building next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gold-deep px-6 py-3 font-medium text-white transition-transform hover:scale-[1.03]"
            >
              View my portfolio <ArrowRight size={17} />
            </Link>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-6 py-3 font-medium text-gold-deep transition-transform hover:scale-[1.03]"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <footer className="border-t border-gold/15 py-10 text-center text-sm text-cream-ink/45">
          With gratitude — {grad.name}, {grad.classOf} 🎓
        </footer>
      </div>
    </main>
  );
}
