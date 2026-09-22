import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";
import { Close, Menu, Plane, Sparkle } from "./icons";
import { Logo } from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 md:rounded-t-[2rem] lg:rounded-t-[2.5rem] ${
        scrolled
          ? "border-ink/10 bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-cream/40"
      }`}
    >
      <nav className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        {/* Cool, Professional Logo */}
        <a href="#home" className="group flex items-center transition-opacity hover:opacity-95">
          <Logo theme="dual" />
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[15px] font-bold text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-marigold-deep transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right availability pill */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 text-sm font-semibold text-ink/75">
            <Sparkle className="h-4 w-4 text-marigold-deep" />
            {profile.location} · Remote worldwide
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-marigold text-ink shadow-[2px_2px_0_0_#0d0d0c]">
            <Plane className="h-4 w-4" />
          </span>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-cream"
          >
            Let&apos;s Work
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink text-ink"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="animate-rise absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col gap-2 bg-cream p-7 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <Logo theme="dual" showSubtitle={false} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 text-2xl font-black tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink/70">
              <Sparkle className="h-4 w-4 text-marigold-deep" />
              {profile.location} — available worldwide
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-ink py-3.5 text-sm font-bold text-cream"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
