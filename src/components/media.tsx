import { useState } from "react";
import type { CSSProperties } from "react";

/** Builds a lightweight inline SVG placeholder so the layout never breaks. */
function fallbackDataUri(label: string, tone: "marigold" | "ink" = "marigold") {
  const bg = tone === "marigold" ? "%23f3a328" : "%230d0d0c";
  const fg = tone === "marigold" ? "%230d0d0c" : "%23f5efe2";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'>
    <rect width='100%' height='100%' fill='${bg}'/>
    <g fill='none' stroke='${fg}' stroke-width='3' opacity='0.55'>
      <rect x='60' y='60' width='680' height='880' rx='40' stroke-dasharray='14 12'/>
    </g>
    <text x='50%' y='49%' fill='${fg}' font-family='Arial, sans-serif' font-size='44' font-weight='bold' text-anchor='middle'>${label}</text>
    <text x='50%' y='55%' fill='${fg}' font-family='Arial, sans-serif' font-size='24' opacity='0.8' text-anchor='middle'>media coming soon</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

type SmartImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
};

export function SmartImage({
  src,
  alt,
  label = "Minneth Zinnia",
  className = "",
  imgClassName = "",
  style,
  loading = "lazy",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <img
        src={failed ? fallbackDataUri(label) : src}
        alt={alt}
        loading={loading}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

type SmartVideoProps = {
  src: string;
  poster: string;
  label: string;
  index: string;
};

export function SmartVideo({ src, poster, label, index }: SmartVideoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group relative">
      <span className="absolute left-4 top-4 z-10 rounded-full bg-cream px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-ink shadow-sm">
        {label}
      </span>
      <span className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-ink text-xs font-black text-marigold">
        {index}
      </span>
      <div className="aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border-2 border-ink bg-ink">
        {!failed ? (
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-marigold to-marigold-deep p-6 text-center">
            <span className="rounded-full border-2 border-ink px-4 py-1 text-xs font-black uppercase tracking-widest">
              {label}
            </span>
            <a
              href="#contact"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:scale-105"
            >
              Inquire for Full Reel
            </a>
          </div>
        )}
      </div>
    </figure>
  );
}
