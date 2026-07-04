import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import Confetti from "@/components/grad/Confetti";
import FloatingThings from "@/components/grad/FloatingThings";
import Slideshow from "@/components/grad/Slideshow";
import Polaroid from "@/components/grad/Polaroid";
import { grad } from "@/lib/grad";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: `${grad.fullName} — ${grad.classOf} 🎓`,
  description: `Celebrating ${grad.fullName}'s graduation — memories, best moments, and the best people. 💛`,
  openGraph: {
    title: `${grad.fullName} — ${grad.classOf} 🎓💛`,
    description: "A little scrapbook of memories, moments, and my people. Come celebrate with me!",
    type: "website",
  },
};

export default function GradPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans text-pastel-ink"
      style={{
        background:
          "linear-gradient(180deg,#fff0f6 0%,#f5ecff 30%,#eaf5ff 60%,#fff9f2 100%)",
      }}
    >
      <FloatingThings />

      <div className="relative z-10 mx-auto max-w-4xl px-5">
        {/* HERO */}
        <section className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
          <span className="animate-wiggle mb-6 inline-block rounded-full bg-white/70 px-5 py-2 font-cute text-sm font-semibold text-pastel-rose shadow-sm">
            🎀 {grad.classOf} 🎀
          </span>

          <h1 className="font-cute text-6xl font-bold leading-[0.95] tracking-tight text-pastel-plum sm:text-8xl">
            {grad.hero.greeting}
          </h1>

          <p className="mt-6 font-hand text-3xl text-pastel-rose sm:text-4xl">
            {grad.hero.line}
          </p>

          <div className="mt-8 rounded-3xl bg-white/60 px-6 py-4 shadow-sm backdrop-blur-sm">
            <p className="font-cute text-xl font-semibold text-pastel-plum sm:text-2xl">
              {grad.fullName}
            </p>
            <p className="mt-1 text-pastel-ink/70">
              {grad.degree} · {grad.school}
            </p>
            <p className="mt-2 inline-block rounded-full bg-pastel-butter/50 px-4 py-1 text-sm font-semibold text-pastel-plum">
              ⭐ {grad.honor} · {grad.gpa}
            </p>
          </div>

          <div className="mt-10">
            <Confetti />
          </div>

          <p className="mt-14 animate-bob font-hand text-2xl text-pastel-lilac">
            scroll for memories ↓
          </p>
        </section>

        {/* SLIDESHOW */}
        <section className="py-16">
          <SectionTitle emoji="📸">our favourite moments</SectionTitle>
          <Slideshow photos={grad.slideshow} />
        </section>

        {/* BEST MOMENTS THROUGH THE YEARS */}
        <section className="py-16">
          <SectionTitle emoji="🗓️">the journey</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {grad.moments.map((m, i) => (
              <div
                key={m.year}
                className="flex items-center gap-4 rounded-3xl bg-white/70 p-5 shadow-sm"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <span className="animate-bob text-4xl" style={{ animationDelay: `${i * 0.3}s` }}>
                  {m.emoji}
                </span>
                <div>
                  <p className="font-cute text-lg font-bold text-pastel-rose">{m.year}</p>
                  <p className="text-pastel-ink/75">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THEMED SCRAPBOOK CHAPTERS */}
        {grad.chapters.map((chapter) => (
          <section key={chapter.title} className="py-16">
            <SectionTitle emoji={chapter.emoji}>{chapter.title}</SectionTitle>
            {chapter.note && (
              <p className="mx-auto -mt-4 mb-10 max-w-lg text-center font-hand text-2xl text-pastel-rose">
                {chapter.note}
              </p>
            )}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {chapter.photos.map((photo, i) => (
                <Polaroid key={photo.src || i} photo={photo} index={i} />
              ))}
            </div>
          </section>
        ))}

        {/* COMING SOON */}
        <section className="py-16">
          <div className="mx-auto max-w-xl rounded-[32px] border-2 border-dashed border-pastel-lilac/60 bg-white/50 p-8 text-center shadow-sm sm:p-10">
            <span className="animate-bob inline-block text-5xl">{grad.comingSoon.emoji}</span>
            <h2 className="mt-3 font-cute text-3xl font-bold text-pastel-plum sm:text-4xl">
              {grad.comingSoon.title}
            </h2>
            <p className="mt-3 font-hand text-2xl text-pastel-rose">{grad.comingSoon.note}</p>
          </div>
        </section>

        {/* MY PEOPLE */}
        <section className="py-16">
          <SectionTitle emoji="🫶">my people</SectionTitle>
          <div className="mx-auto max-w-xl rounded-3xl bg-white/60 p-6 text-center shadow-sm sm:p-8">
            <p className="text-center font-hand text-2xl leading-snug text-pastel-plum">
              {grad.peopleNote}
            </p>
          </div>
        </section>

        {/* LOVE NOTE */}
        <section className="py-16">
          <div className="mx-auto max-w-2xl rounded-[32px] bg-white/70 p-8 text-center shadow-md sm:p-12">
            <Heart className="mx-auto mb-4 animate-bob fill-pastel-rose text-pastel-rose" size={40} />
            <div className="space-y-4">
              {grad.loveNote.map((para, i) => (
                <p key={i} className="text-center text-lg leading-relaxed text-pastel-ink/80">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-6 font-hand text-3xl text-pastel-rose">{grad.signoff}</p>
            <p className="font-cute text-3xl font-bold text-pastel-plum">{grad.name} 💛</p>
          </div>
        </section>

        {/* STAY IN TOUCH */}
        <section className="pb-8 pt-10 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pastel-rose to-pastel-lilac px-6 py-3 font-cute font-semibold text-white shadow-lg shadow-pastel-pink/40 transition-transform hover:scale-105"
            >
              see what i&apos;m building <ArrowRight size={17} />
            </Link>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 font-cute font-semibold text-pastel-plum shadow-sm transition-transform hover:scale-105"
            >
              let&apos;s connect 🩷
            </a>
          </div>
        </section>

        <footer className="pb-12 pt-6 text-center font-hand text-2xl text-pastel-lilac">
          {grad.name} · {grad.classOf} 🎓💛
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-center font-cute text-4xl font-bold text-pastel-plum sm:text-5xl">
      <span className="mr-2 inline-block animate-bob">{emoji}</span>
      {children}
    </h2>
  );
}
