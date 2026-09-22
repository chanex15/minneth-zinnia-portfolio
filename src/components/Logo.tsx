import type { SVGProps } from "react";

type LogoMarkProps = SVGProps<SVGSVGElement> & {
  theme?: "dark" | "light" | "dual";
};

/**
 * Bespoke geometric emblem for Minneth Zinnia:
 * Interlocking "M" & "Z" letterforms structured around an optical aperture / film lens.
 * Modernist, bold, razor-sharp, and cinematic.
 */
export function LogoMark({
  className = "h-9 w-9",
  theme = "dual",
  ...props
}: LogoMarkProps) {
  const isLight = theme === "light";
  const isDark = theme === "dark";

  const primaryFill = isLight ? "#fbf7ee" : "#0d0d0c";
  const accentFill = isLight ? "#f3a328" : isDark ? "#f3a328" : "#f3a328";
  const secondaryFill = isLight ? "rgba(251,247,238,0.7)" : "rgba(13,13,12,0.65)";

  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Outer subtle guide ring */}
      <circle
        cx="27"
        cy="27"
        r="25"
        stroke={isLight ? "rgba(255,255,255,0.18)" : "rgba(13,13,12,0.14)"}
        strokeWidth="1.5"
      />

      {/* Primary geometric emblem: Interlocking 'M' & 'Z' precision cut */}
      {/* Left 'M' wing & vertical pillar */}
      <path
        d="M10 39V15L20 27L27 18.5"
        stroke={primaryFill}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right 'M' pillar cascading into dynamic 'Z' */}
      <path
        d="M27 18.5L34 27L44 15V24"
        stroke={primaryFill}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Horizontal & diagonal 'Z' lower sweep */}
      <path
        d="M19 39H39.5L25 28.5H41"
        stroke={secondaryFill}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Golden aperture lens element / focal spark */}
      <circle cx="27" cy="27" r="3.75" fill={accentFill} />
      <circle
        cx="27"
        cy="27"
        r="6.5"
        stroke={accentFill}
        strokeWidth="1.5"
        strokeDasharray="2.5 2.5"
      />
    </svg>
  );
}

type LogoProps = {
  theme?: "dark" | "light" | "dual";
  showSubtitle?: boolean;
  className?: string;
};

export function Logo({
  theme = "dual",
  showSubtitle = true,
  className = "",
}: LogoProps) {
  const isLight = theme === "light";
  const textColor = isLight ? "text-cream" : "text-ink";
  const subColor = isLight ? "text-cream/60" : "text-ink/55";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Cool badge container for the mark */}
      <div
        className={`grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? "border border-cream/20 bg-cream/10 backdrop-blur-sm"
            : "border-2 border-ink bg-cream shadow-[3px_3px_0_0_#0d0d0c]"
        }`}
      >
        <LogoMark className="h-7 w-7" theme={theme} />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`flex items-center gap-1 leading-none ${textColor}`}>
          <span className="text-xl font-black tracking-tight">MINNETH</span>
          <span className="text-xl font-black tracking-tight text-marigold-deep">
            ZINNIA
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-marigold-deep" />
        </div>
        {showSubtitle && (
          <span
            className={`mt-1 text-[9.5px] font-black uppercase tracking-[0.26em] ${subColor}`}
          >
            Creative VA · Visuals
          </span>
        )}
      </div>
    </div>
  );
}
