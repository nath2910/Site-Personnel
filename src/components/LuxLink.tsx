import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { LinkItem } from "../data/content";
import { THEME } from "../styles/theme";

const MotionLink = motion(Link);

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

const baseClass =
  "relative z-20 isolate pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 " +
  "border-white/10 bg-white/[0.04] text-white focus:outline-none focus-visible:ring-2 " +
  THEME.ring;

const accentStyle = {
  background:
    "radial-gradient(700px 240px at 15% 0%, rgba(139,92,246,.22), transparent 55%), radial-gradient(600px 240px at 90% 30%, rgba(34,211,238,.14), transparent 55%)",
};

function Inner({
  label,
  meta,
  primary,
}: Pick<LinkItem, "label" | "meta" | "primary">) {
  return (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={accentStyle}
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
    </>
  );
}

// Petit helper: détecte un fichier "asset" (au minimum PDF)
function isAssetLink(href: string) {
  // gère aussi les query params: .pdf?x=1
  return /\.(pdf)($|\?)/i.test(href);
  // Tu peux élargir si tu veux:
  // return /\.(pdf|png|jpg|jpeg|gif|svg|webp|zip)($|\?)/i.test(href);
}

export function LuxLink({ label, meta, href, primary }: LinkItem) {
  const isInternal = href.startsWith("/");
  const asset = isAssetLink(href);

  // ✅ Cas important: lien interne mais vers un fichier (PDF) -> <a>, pas <Link>
  if (isInternal && asset) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.18 }}
        // ouvre dans un nouvel onglet (pratique pour un CV)
        target="_blank"
        rel="noopener noreferrer"
      >
        <Inner label={label} meta={meta} primary={primary} />
      </motion.a>
    );
  }

  // Routes internes SPA
  if (isInternal) {
    return (
      <MotionLink
        to={href}
        className={baseClass}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.18 }}
      >
        <Inner label={label} meta={meta} primary={primary} />
      </MotionLink>
    );
  }

  // Liens externes
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={baseClass}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18 }}
    >
      <Inner label={label} meta={meta} primary={primary} />
    </motion.a>
  );
}
