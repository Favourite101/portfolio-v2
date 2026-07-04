import type { Group } from "@/lib/grad";

const placeholderGradients = [
  "linear-gradient(135deg,#fde68a,#f9a8d4)",
  "linear-gradient(135deg,#c4b5fd,#93c5fd)",
  "linear-gradient(135deg,#6ee7b7,#93c5fd)",
  "linear-gradient(135deg,#fdba74,#fb7fb8)",
  "linear-gradient(135deg,#f9a8d4,#c4b5fd)",
  "linear-gradient(135deg,#fde68a,#6ee7b7)",
];

function Frame({ src, emoji, index }: { src: string; emoji?: string; index: number }) {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-[8px] bg-white/40">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ background: placeholderGradients[index % placeholderGradients.length] }}
        >
          <span className="text-4xl drop-shadow-sm sm:text-5xl">{emoji ?? "📸"}</span>
        </div>
      )}
    </div>
  );
}

export default function PhotoGroup({ group, index = 0 }: { group: Group; index?: number }) {
  const rotate = group.rotate ?? 0;
  const n = group.photos.length;
  const multi = n > 1;
  const innerCols = n === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <figure
      className={`group relative rounded-[14px] bg-white p-3 pb-0 shadow-[0_10px_30px_-12px_rgba(91,59,87,0.45)] transition-transform duration-300 hover:z-10 hover:!rotate-0 hover:scale-[1.03] ${
        multi ? "col-span-2" : "col-span-1"
      }`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* tape */}
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 rounded-[2px] bg-pastel-butter/70 shadow-sm"
        style={{ backdropFilter: "blur(1px)" }}
      />

      {multi ? (
        <div className={`grid gap-1.5 ${innerCols}`}>
          {group.photos.map((p, i) => (
            <Frame key={i} src={p.src} emoji={p.emoji} index={index + i} />
          ))}
        </div>
      ) : (
        <Frame src={group.photos[0].src} emoji={group.photos[0].emoji} index={index} />
      )}

      <figcaption className="px-1 py-3 text-center font-hand text-xl leading-tight text-pastel-plum sm:text-2xl">
        {group.caption}
      </figcaption>
    </figure>
  );
}
