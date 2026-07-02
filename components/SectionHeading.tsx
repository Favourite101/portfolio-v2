import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-4">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="font-mono text-base text-accent">{index}.</span> {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>
    </Reveal>
  );
}
