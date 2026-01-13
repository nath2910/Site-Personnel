import { motion } from "framer-motion";
import { THEME } from "../styles/theme";
import type { LinkItem } from "../data/content";

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

export function LuxLink({ label, meta, href, primary }: LinkItem) {
  const external = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={[
        "relative z-20 isolate pointer-events-auto",
        "flex items-center justify-between gap-4 rounded-2xl border px-4 py-4",
        "border-white/10 bg-white/[0.04] text-white",
        "focus:outline-none focus-visible:ring-2",
        THEME.ring,
      ].join(" ")}
      style={{ transform: "translateZ(0)" }}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18 }}
    >
      {/* Accent fond (ne capte jamais la souris) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0"
        style={{
          background:
            "radial-gradient(700px 240px at 15% 0%, rgba(139,92,246,.22), transparent 55%), radial-gradient(600px 240px at 90% 30%, rgba(34,211,238,.14), transparent 55%)",
        }}
      />

      {/* On anime l’opacité via Framer (pas via :hover) */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          background:
            "radial-gradient(700px 240px at 15% 0%, rgba(139,92,246,.22), transparent 55%), radial-gradient(600px 240px at 90% 30%, rgba(34,211,238,.14), transparent 55%)",
        }}
      />

      <div className="min-w-0">
        <div className="truncate text-sm font-semibold tracking-tight">
          {label}
          {primary ? (
            <span className="ml-2 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-0.5 text-[10px] text-violet-200">
              featured
            </span>
          ) : null}
        </div>
        <div className="mt-0.5 text-xs text-white/60">{meta}</div>
      </div>

      <div className="inline-flex items-center gap-2 text-xs text-white/70">
        <span className="hidden sm:inline">Ouvrir</span>
        <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.18 }}>
          <Arrow />
        </motion.span>
      </div>
    </motion.a>
  );
}
