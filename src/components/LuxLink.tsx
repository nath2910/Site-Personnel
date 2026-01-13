import { THEME } from "../styles/theme.ts";

export type LuxLinkProps = {
  label: string;
  meta: string;
  href: string;
  primary?: boolean;
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LuxLink({ label, meta, href, primary }: LuxLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={[
        "group relative flex items-center justify-between gap-4 rounded-2xl border px-4 py-4",
        "border-white/10 bg-white/[0.04] text-white transition",
        "hover:bg-white/[0.06] hover:border-white/15",
        "focus:outline-none focus-visible:ring-2",
        THEME.ring,
        "will-change-transform",
      ].join(" ")}
      style={{ transform: "translateZ(0)" }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(700px 240px at 15% 0%, rgba(139,92,246,.22), transparent 55%), radial-gradient(600px 240px at 90% 30%, rgba(34,211,238,.14), transparent 55%)",
        }}
      />

      <div className="min-w-0">
        <div className="truncate text-sm font-medium tracking-tight">
          {label}
          {primary ? (
            <span className="ml-2 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-0.5 text-[10px] text-violet-200">
              featured
            </span>
          ) : null}
        </div>
        <div className="mt-0.5 text-xs text-white/60">{meta}</div>
      </div>

      <span className="inline-flex items-center gap-2 text-xs text-white/70">
        <span className="hidden sm:inline">Ouvrir</span>
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          <Arrow />
        </span>
      </span>
    </a>
  );
}
