import {
  navLinks,
  professionalProfiles,
  profile,
} from "../data";
import {
  ArrowUpRight,
  Calendar,
  LinkedIn,
  Mail,
  MapPin,
  OnlineJobs,
  Sparkle,
} from "./icons";
import { Logo } from "./Logo";

const profileIcons: Record<string, typeof LinkedIn> = {
  linkedin: LinkedIn,
  onlinejobs: OnlineJobs,
};

export function Contact() {
  return (
    <section id="contact" className="bg-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-cream sm:px-12 lg:px-20 lg:py-20">
        {/* decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-marigold/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-marigold/15 blur-3xl"
        />
        <Sparkle
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-10 h-10 w-10 text-marigold/50"
        />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-cream/25 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cream/80">
            <Sparkle className="h-3.5 w-3.5 text-marigold" />
            Get In Touch
          </span>

          <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,6vw,5.25rem)] font-black leading-[0.92] tracking-tight">
            Ready to <em className="italic text-marigold">create</em>
            <br />
            something great?
          </h2>

          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-cream/70">
            Whether you need a video editor, content designer, or creative VA —
            I&apos;d love to hear about your project. Let&apos;s build something
            your audience will love.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-marigold px-7 py-4 text-sm font-black text-ink shadow-[4px_4px_0_0_rgba(245,239,226,0.25)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              {profile.email}
            </a>
            <a
              href={`mailto:${profile.email}?subject=Discovery%20Call%20Inquiry%20—%20Minneth%20Zinnia`}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-cream/30 px-7 py-4 text-sm font-bold text-cream transition-colors hover:border-marigold hover:bg-cream hover:text-ink"
            >
              <Calendar className="h-5 w-5 text-marigold group-hover:text-ink" />
              Book a Discovery Call
            </a>
          </div>

          {/* Only LinkedIn and OnlineJobs.ph */}
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-cream/15 pt-8">
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
                  className="group inline-flex items-center gap-2.5 rounded-full border-2 border-cream/30 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-marigold hover:bg-marigold hover:text-ink"
                >
                  <Icon className="h-4 w-4 text-marigold transition-colors group-hover:text-ink" />
                  <span>{p.name}</span>
                </a>
              );
            })}
            <span className="ml-1 flex items-center gap-2 text-sm font-semibold text-cream/60">
              <MapPin className="h-4 w-4 text-marigold" />
              {profile.location} — {profile.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="rounded-b-[2rem] bg-cream px-5 pb-10 pt-12 sm:px-8 lg:rounded-b-[2.5rem] lg:px-12">
      <div className="grid gap-10 border-t-2 border-ink/10 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="group block">
            <Logo theme="dual" />
          </a>
          <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-ink/60">
            {profile.role} — {profile.tagline}. Visual poetry for brands that
            move.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-ink/45">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-ink/70 transition-colors hover:text-marigold-deep"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-ink/45">
            Connect &amp; Hire
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-bold text-ink/70">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-marigold-deep"
              >
                {profile.email}
              </a>
            </li>
            {professionalProfiles.map((p) => {
              const Icon = profileIcons[p.id];
              return (
                <li key={p.id}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-marigold-deep"
                  >
                    <Icon className="h-4 w-4 text-marigold-deep" />
                    {p.name}
                  </a>
                </li>
              );
            })}
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs font-semibold text-ink/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>
        <p>Reels · Canva Design · AI Content — made with care, remotely.</p>
      </div>
    </footer>
  );
}
