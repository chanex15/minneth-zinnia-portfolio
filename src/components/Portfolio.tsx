import { useEffect, useState } from "react";
import { portfolioImages, portfolioVideos } from "../data";
import { SmartImage, SmartVideo } from "./media";
import { ArrowUpRight, Close, Play, ZoomIn } from "./icons";

type Tab = "images" | "videos";

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("images");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (lightbox === null) return;
      if (e.key === "ArrowRight")
        setLightbox((v) => (v === null ? v : (v + 1) % portfolioImages.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) =>
          v === null ? v : (v - 1 + portfolioImages.length) % portfolioImages.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="portfolio" className="bg-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold-deep" />
            Selected Work
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The <em className="italic text-marigold-deep">portfolio</em>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="inline-flex w-fit rounded-full border-2 border-ink bg-paper p-1.5">
          {(
            [
              { id: "images", label: "Images" },
              { id: "videos", label: "Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                tab === t.id
                  ? "bg-ink text-cream"
                  : "text-ink/55 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Images grid */}
      {tab === "images" && (
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden rounded-[1.75rem] border-2 border-ink text-left shadow-[5px_5px_0_0_#0d0d0c] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/5] w-full">
                <SmartImage
                  src={img.src}
                  alt={`${img.label} by Minneth Zinnia`}
                  label={img.label}
                  className="h-full w-full"
                  imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-marigold text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" />
              </span>

              <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-black uppercase tracking-wider text-ink shadow-sm">
                <span className="text-marigold-deep">{img.index}</span>
                {img.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Videos grid */}
      {tab === "videos" && (
        <div className="mt-12">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioVideos.map((v) => (
              <SmartVideo
                key={v.src}
                src={v.src}
                poster={v.poster}
                label={v.label}
                index={v.index}
              />
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-semibold text-ink/55">
            <Play className="h-4 w-4 text-marigold-deep" />
            Short-form edits — Reels, Shorts, UGC-style and AI-assisted content
          </p>
        </div>
      )}

      <a
        href="#contact"
        className="group mx-auto mt-12 flex w-fit items-center gap-3 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        Start a project like these
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </a>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-5 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image preview"
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-cream text-ink transition-transform hover:rotate-90"
            onClick={() => setLightbox(null)}
          >
            <Close className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + portfolioImages.length) % portfolioImages.length
              );
            }}
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink hover:bg-marigold sm:grid"
          >
            <ArrowUpRight className="h-5 w-5 rotate-[225deg]" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % portfolioImages.length);
            }}
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink hover:bg-marigold sm:grid"
          >
            <ArrowUpRight className="h-5 w-5 -rotate-45" />
          </button>

          <figure
            className="max-h-[88vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={portfolioImages[lightbox].src}
              alt={`${portfolioImages[lightbox].label} by Minneth Zinnia`}
              label={portfolioImages[lightbox].label}
              className="mx-auto max-h-[80vh] w-fit rounded-3xl border-2 border-cream/20"
              imgClassName="max-h-[80vh] w-auto rounded-3xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-cream">
              {portfolioImages[lightbox].label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
