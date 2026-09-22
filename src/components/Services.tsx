import { services } from "../data";
import { Marquee } from "./About";
import {
  ArrowUpRight,
  ClipboardCheck,
  PenRuler,
  Scissors,
  Wand,
} from "./icons";

const serviceIcons = [Scissors, PenRuler, ClipboardCheck, Wand];

export function Services() {
  return (
    <section id="services" className="bg-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold-deep" />
            What I Do
          </span>
          <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Everything you need to{" "}
            <em className="italic text-marigold-deep">show up</em> online
          </h2>
        </div>
        <p className="max-w-xs text-sm font-semibold leading-relaxed text-ink/60">
          Four service pillars covering short-form video, social design, VA
          support and AI-assisted production.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = serviceIcons[i];
          return (
            <article
              key={service.index}
              className="group relative overflow-hidden rounded-[1.75rem] border-2 border-ink bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-ink hover:text-cream hover:shadow-[8px_8px_0_0_#f3a328] sm:p-9"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 text-[7rem] font-black leading-none text-ink/5 transition-colors group-hover:text-cream/10">
                {service.index}
              </span>

              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-marigold text-ink transition-transform duration-300 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink/15 text-ink transition-all duration-300 group-hover:rotate-45 group-hover:border-marigold group-hover:text-marigold">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-ink-soft/80 transition-colors group-hover:text-cream/75">
                {service.text}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70 transition-colors group-hover:border-cream/30 group-hover:text-cream/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ToolsBand() {
  return (
    <section id="tools" className="bg-sand px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-marigold-deep" />
          Tools &amp; Skills
        </span>
        <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl">
          My creative <em className="italic text-marigold-deep">toolkit</em>
        </h2>
      </div>
      <Marquee />
    </section>
  );
}
