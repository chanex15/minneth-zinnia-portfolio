import { aboutParagraphs, aboutStats, profile, tools } from "../data";
import { ArrowUpRight, MapPin, Sparkle } from "./icons";

export function Marquee() {
  const items = [...tools, ...tools];
  return (
    <div className="marquee-track overflow-hidden bg-ink py-5 text-cream">
      <div className="animate-marquee flex w-max items-center">
        {items.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="flex items-center whitespace-nowrap"
          >
            <span className="px-7 text-lg font-black uppercase tracking-[0.12em]">
              {tool}
            </span>
            <Sparkle className="h-4 w-4 shrink-0 text-marigold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink/70">
      <span className="h-1.5 w-1.5 rounded-full bg-marigold-deep" />
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div>
          <Eyebrow>About Me</Eyebrow>
          <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Storytelling
            <br />
            through <em className="italic text-marigold-deep">visuals</em>
          </h2>

          <div className="mt-7 space-y-4 text-[15px] font-medium leading-relaxed text-ink-soft">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
          >
            Work With Me
            <span className="grid h-6 w-6 place-items-center rounded-full bg-marigold text-ink transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-3xl border-2 border-ink bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0d0d0c]"
              >
                <p className="text-5xl font-black leading-none tracking-tight text-ink transition-colors group-hover:text-marigold-deep">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-bold leading-snug text-ink/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 rounded-3xl border-2 border-ink bg-marigold p-6 sm:mt-5 sm:p-7">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-cream">
              <MapPin className="h-7 w-7" />
            </span>
            <div>
              <p className="text-xl font-black tracking-tight">{profile.location}</p>
              <p className="mt-0.5 text-sm font-bold text-ink/70">
                Based in · {profile.availability}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border-2 border-dashed border-ink/25 bg-paper/60 p-6">
            <p className="text-sm font-semibold leading-relaxed text-ink/70">
              <span className="font-black text-ink">{profile.role}</span> for
              Instagram, TikTok and YouTube — helping brands show up beautifully
              online, one frame at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
