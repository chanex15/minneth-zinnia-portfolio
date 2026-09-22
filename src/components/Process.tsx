import { processSteps, whyReasons } from "../data";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink/70">
      <span className="h-1.5 w-1.5 rounded-full bg-marigold-deep" />
      {children}
    </span>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className="bg-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <SectionLabel>How I Work</SectionLabel>
      <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        My creative <em className="italic text-marigold-deep">process</em>
      </h2>

      <div className="relative mt-12">
        {/* connector line */}
        <div
          aria-hidden="true"
          className="absolute left-6 right-6 top-[3.75rem] hidden h-0.5 bg-ink/15 lg:block"
        />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step) => (
            <li
              key={step.index}
              className="group relative rounded-[1.5rem] border-2 border-ink bg-paper p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-marigold"
            >
              <span className="relative z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border-2 border-ink bg-cream text-xl font-black transition-colors duration-300 group-hover:bg-ink group-hover:text-marigold">
                {step.index}
              </span>
              <h3 className="mt-5 text-xl font-black tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-ink/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyMe() {
  return (
    <section id="why" className="bg-sand px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Why Choose Me</SectionLabel>
          <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            A partner you can{" "}
            <em className="italic text-marigold-deep">count on</em>
          </h2>
        </div>
        <p className="max-w-xs text-sm font-semibold leading-relaxed text-ink/60">
          Reliable, detail-obsessed and audience-focused — six reasons clients
          keep coming back.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyReasons.map((reason) => (
          <article
            key={reason.index}
            className="group rounded-[1.5rem] border-2 border-ink bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[7px_7px_0_0_#0d0d0c]"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-base font-black text-marigold transition-colors duration-300 group-hover:bg-marigold group-hover:text-ink">
                {reason.index}
              </span>
              <h3 className="text-xl font-black leading-tight tracking-tight">
                {reason.title}
              </h3>
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-ink/65">
              {reason.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
