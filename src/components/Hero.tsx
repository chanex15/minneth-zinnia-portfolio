import {
  heroChips,
  heroStats,
  media,
  professionalProfiles,
  profile,
} from "../data";
import { SmartImage } from "./media";
import {
  ArrowUpRight,
  Globe,
  LinkedIn,
  OnlineJobs,
  Play,
  Sparkle,
} from "./icons";

const profileIcons: Record<string, typeof LinkedIn> = {
  linkedin: LinkedIn,
  onlinejobs: OnlineJobs,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-12"
    >
      {/* soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-marigold/30 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        {/* ───────────── Left: type + stats ───────────── */}
        <div className="relative">
          {/* Eyebrow tag */}
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink shadow-[2px_2px_0_0_#0d0d0c]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-marigold-deep" />
              {profile.role}
            </span>
            <span className="hidden h-px flex-1 bg-ink/15 sm:block" />
          </div>

          {/* Headline */}
          <h1 className="relative font-black leading-[0.8] tracking-[-0.05em] text-ink">
            <span className="block text-[clamp(3.2rem,9.5vw,9.75rem)]">
              creative
            </span>
            <span className="relative block w-fit text-[clamp(3.2rem,9.5vw,9.75rem)]">
              <span
                className="pointer-events-none absolute -left-1 bottom-[0.14em] -z-0 h-[0.32em] w-[calc(100%+0.35em)] -rotate-1 rounded-sm bg-marigold"
                aria-hidden="true"
              />
              <span className="relative z-10">that delivers</span>
              <span className="text-marigold-deep">.</span>
              {/* script accent */}
              <span
                className="animate-floaty pointer-events-none absolute -right-2 -top-6 rotate-[-8deg] font-script text-2xl font-bold text-marigold-deep sm:-right-4 sm:top-1 sm:text-4xl"
                aria-hidden="true"
              >
                on brand
              </span>
            </span>
          </h1>

          {/* Core positioning statement supplied by Minneth. */}
          <div className="mt-8 max-w-xl">
            <h2 className="font-serif text-2xl font-normal tracking-[-0.02em] text-[#8b796b] sm:text-3xl">
              Social Media Content &amp; Video Editor
            </h2>
            <p className="mt-7 text-[15px] font-medium leading-[1.8] text-[#8b796b] sm:text-base">
              Creative and detail-oriented professional specializing in short-form
              video editing, social media content creation, and visual design —
              helping brands show up beautifully online.
            </p>
          </div>

          {/* Professional profile links (LinkedIn & OnlineJobs.ph only) + CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {professionalProfiles.map((p) => {
                const Icon = profileIcons[p.id];
                return (
                  <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={p.name}
                    title={p.hint}
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-2 text-xs font-black uppercase tracking-wider text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream shadow-[2px_2px_0_0_#0d0d0c]"
                  >
                    <Icon className="h-4 w-4 text-marigold-deep transition-colors group-hover:text-marigold" />
                    <span>{p.name}</span>
                  </a>
                );
              })}
            </div>

            <a
              href="#portfolio"
              className="group hidden items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-marigold text-ink">
                <Play className="h-2.5 w-2.5" />
              </span>
              View My Work
            </a>
          </div>

          {/* Big stats */}
          <div className="mt-12 grid grid-cols-2 gap-8 border-t-2 border-ink/10 pt-8 sm:gap-10">
            {heroStats.map((stat) => (
              <div key={stat.value}>
                <p className="font-black leading-none tracking-tight text-ink">
                  <span className="text-[clamp(3rem,6vw,5rem)]">
                    {stat.value}
                  </span>
                  <span className="text-[clamp(2.4rem,4.6vw,3.8rem)] text-marigold-deep">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mt-3 text-sm font-black uppercase tracking-wide text-ink">
                  {stat.title}
                </p>
                <p className="mt-1.5 max-w-xs text-[13px] font-semibold leading-snug text-ink/60">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ───────────── Right: portrait panel ───────────── */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          {/* floating globe */}
          <a
            href="#contact"
            aria-label="Available worldwide — get in touch"
            className="animate-floaty absolute -top-5 right-2 z-20 grid h-16 w-16 place-items-center rounded-full bg-ink text-cream shadow-[4px_4px_0_0_rgba(13,13,12,0.18)] ring-4 ring-cream transition-transform hover:scale-105 sm:-right-4 sm:h-[72px] sm:w-[72px]"
          >
            <Globe className="h-8 w-8" />
          </a>

          {/* orange panel */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.6rem] bg-marigold shadow-[10px_14px_0_0_rgba(13,13,12,0.12)] ring-1 ring-marigold-deep/30 sm:aspect-[5/5.4]">
            <SmartImage
              src={media.profile}
              alt={`${profile.fullName}, ${profile.role}`}
              label="Minneth Zinnia"
              loading="eager"
              className="absolute inset-0 h-full w-full"
              imgClassName="object-cover object-top"
            />

            {/* legibility gradients */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-marigold-deep/85 via-marigold/25 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-marigold-deep/45 to-transparent" />

            {/* hand-written signature */}
            <div className="pointer-events-none absolute left-5 top-5 rotate-[-8deg] sm:left-8 sm:top-7">
              <span className="font-script text-5xl font-bold text-white drop-shadow-sm sm:text-6xl">
                Minneth
              </span>
            </div>

            {/* role chips */}
            <div className="absolute bottom-5 left-5 flex flex-col gap-2 sm:bottom-7 sm:left-7">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-cream/92 px-3.5 py-1.5 text-xs font-extrabold text-ink shadow-sm backdrop-blur-sm"
                >
                  <Sparkle className="h-3.5 w-3.5 text-marigold-deep" />
                  {chip}
                </span>
              ))}
            </div>

            {/* inner ring */}
            <div className="pointer-events-none absolute inset-3 rounded-[2.2rem] ring-1 ring-cream/50" />
          </div>

          {/* edge stack: thumbnails + arrow */}
          <div className="absolute -left-3 top-[54%] z-20 flex flex-col items-center gap-3 sm:-left-7">
            <a
              href="#portfolio"
              className="animate-floaty-delay grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-marigold ring-4 ring-cream transition-transform hover:scale-105 sm:h-16 sm:w-16"
              aria-label="View Instagram carousel work"
            >
              <SmartImage
                src={media.work1}
                alt="Instagram carousel design by Minneth Zinnia"
                label="Work 01"
                className="h-full w-full"
                imgClassName="object-cover"
              />
            </a>
            <a
              href="#portfolio"
              className="animate-floaty grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-marigold ring-4 ring-cream transition-transform hover:scale-105 sm:h-16 sm:w-16"
              style={{ animationDelay: "0.6s" }}
              aria-label="View brand visual work"
            >
              <SmartImage
                src={media.work2}
                alt="Brand visual by Minneth Zinnia"
                label="Work 02"
                className="h-full w-full"
                imgClassName="object-cover"
              />
            </a>
            <a
              href="#portfolio"
              aria-label="Open portfolio"
              className="grid h-14 w-14 place-items-center rounded-full bg-ink text-cream ring-4 ring-cream transition-all duration-300 hover:rotate-45 hover:bg-marigold hover:text-ink sm:h-16 sm:w-16"
            >
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
