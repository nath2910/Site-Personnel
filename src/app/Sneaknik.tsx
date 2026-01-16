import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Pill } from "../components/Pill";

type Locale = "fr" | "en";

function useAutoplayOnView(ref: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

const reveal = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Sneaknik({ locale }: { locale: Locale }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useAutoplayOnView(videoRef);

  const copy =
    locale === "fr"
      ? {
          back: "Retour",
          title: "Sneaknik",
          subtitle: "infos clés",
          lead: "Sneaknik est un outil de gestion de stock orienté sneakers, pensé pour les indépendants et les passionnés. Il aide à suivre l’inventaire, garder une vue claire des paires (tailles, état, prix d’achat/vente, marge) et mieux piloter la revente au quotidien. L’objectif, c’est aussi de mettre en avant les boutiques indépendantes : faciliter la découverte, donner de la visibilité, et connecter l’usage “terrain” avec une gestion plus propre.",
          ctaPrimary: "Ouvrir l’application",
          ctaSecondary: "Voir la démo",
          sections: {
            demo: "Démo",
            info: "La suite ...",
            features: "Une solution nouvelle ?",
          },
          bullets: [
            "Inventaire clair : tailles, categorie, prix, description. Tout est centralisé !",
            "Statistique clair et modulable : suivi achat/vente, repères sur la marge et la rotation.",
            "Moins d’oubli : une gestion structurée, pratique quand tu as beaucoup de références.",
          ],
        }
      : {
          back: "Back",
          title: "Sneaknik",
          subtitle: "Product demo • video • key info",
          lead: "Sneaknik is a sneaker-focused inventory management tool built for independent shops and enthusiasts. It helps you track stock, keep a clean view of each pair (size, condition, buy/sell price, margin), and manage resale day to day without losing information. A key goal is also to support independent stores: making them easier to discover, giving them visibility, and connecting “real-world shopping” with better stock management. The video below shows the main flow and the product logic.",
          ctaPrimary: "Open the app",
          ctaSecondary: "Watch the demo",
          sections: {
            demo: "Demo",
            info: "Next ...",
            features: "What it shows",
          },
          bullets: [
            "Clear inventory: pairs, sizes, condition, prices, notes — all in one place.",
            "Simple tracking: buy/sell follow-up, margin indicators, rotation awareness.",
            "Less friction: structured management, especially useful when you handle many references.",
          ],
        };

  const appUrl = "https://sneaknik.pages.dev/";

  return (
    <motion.div
      className="mt-7"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/75 hover:bg-white/[0.06]"
        >
          ← {copy.back}
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/75 hover:bg-white/[0.06]"
          >
            {copy.ctaSecondary}
          </a>
          <a
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-100 hover:bg-violet-500/15"
          >
            {copy.ctaPrimary}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] sm:p-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45 }}
        >
          <div className="text-xs uppercase tracking-[0.38em] text-white/60">
            {copy.subtitle}
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-6xl">
            {copy.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            {copy.lead}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>Gestion</Pill>
            <Pill>Analyses</Pill>
            <Pill>Comparatif</Pill>
            <Pill>Surveillance</Pill>
          </div>
        </motion.div>
      </section>

      {/* Demo video */}
      <section id="demo" className="mt-6">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-6"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-3 text-xs uppercase tracking-[0.38em] text-white/60">
            {copy.sections.demo}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/jai2ywmjTFI?rel=0&modestbranding=1&playsinline=1"
                  title="Sneaknik demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-100 hover:bg-violet-500/15"
            >
              {copy.ctaPrimary}
            </a>
            <a
              href="#info"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/75 hover:bg-white/[0.06]"
            >
              {copy.sections.info} ↓
            </a>
          </div>
        </motion.div>
      </section>

      {/* Info blocks */}
      <section id="info" className="mt-6 grid gap-6 md:grid-cols-2">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-xs uppercase tracking-[0.38em] text-white/60">
            {copy.sections.features}
          </div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {copy.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="text-xs uppercase tracking-[0.38em] text-white/60">
            {copy.sections.info}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {locale === "fr"
              ? "Pour l’instant, Sneaknik est surtout pensé pour les revendeurs : organiser son stock, suivre ses paires et piloter la revente. La suite du projet, c’est d’aller plus loin en intégrant davantage l’écosystème : mettre en avant les boutiques indépendantes et faciliter la découverte. L’objectif : relier la gestion (stock, suivi) à l’exploration (repérer, comparer, suivre) — sans complexifier l’usage."
              : "Right now, Sneaknik is mainly built for resellers: organizing inventory, tracking pairs, and managing resale. The next step is to expand the scope by better connecting with the ecosystem: highlighting independent stores and making discovery easier. The goal is to link management (inventory, tracking) with exploration (spot, compare, follow) — without adding friction."}
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-100 hover:bg-violet-500/15"
          >
            {copy.ctaPrimary} →
          </a>

          <div className="mt-3 text-center text-xs text-white/45">
            {year} • sneaknik.pages.dev
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
