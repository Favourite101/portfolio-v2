import type { Photo } from "@/lib/grad";

const placeholderGradients = [
  "linear-gradient(135deg,#fde68a,#f9a8d4)",
  "linear-gradient(135deg,#c4b5fd,#93c5fd)",
  "linear-gradient(135deg,#6ee7b7,#93c5fd)",
  "linear-gradient(135deg,#fdba74,#fb7fb8)",
  "linear-gradient(135deg,#f9a8d4,#c4b5fd)",
  "linear-gradient(135deg,#fde68a,#6ee7b7)",
];

export default function Polaroid({
  photo,
  index = 0,
  tape = true,
}: {
  photo: Photo;
  index?: number;
  tape?: boolean;
}) {
  const rotate = photo.rotate ?? 0;
  return (
    <figure
      className="group relative w-full rounded-[14px] bg-white p-3 pb-0 shadow-[0_10px_30px_-12px_rgba(91,59,87,0.45)] transition-transform duration-300 hover:z-10 hover:!rotate-0 hover:scale-[1.04]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape && (
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 rounded-[2px] bg-pastel-butter/70 shadow-sm"
          style={{ backdropFilter: "blur(1px)" }}
        />
      )}

      <div className="aspect-square w-full overflow-hidden rounded-[8px]">
        {photo.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.caption}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: placeholderGradients[index % placeholderGradients.length] }}
          >
            <span className="text-5xl drop-shadow-sm sm:text-6xl">
              {photo.emoji ?? "📸"}
            </span>
          </div>
        )}
      </div>

      <figcaption className="px-1 py-3 text-center font-hand text-xl leading-tight text-pastel-plum sm:text-2xl">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
