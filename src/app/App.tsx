import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE, LINKS, HIGHLIGHTS } from "../data/content";
import { THEME } from "../styles/theme";
import { Intro } from "../components/Intro";
import { LuxLink } from "../components/LuxLink";
import { Pill } from "../components/Pill";
import { Section } from "../components/Section";

export default function App() {
  const [intro, setIntro] = useState(true);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070812] text-white antialiased">
      <AnimatePresence>
        {intro && (
          <Intro initials={PROFILE.initials} onDone={() => setIntro(false)} />
        )}
      </AnimatePresence>

      {/* Background “premium” mais perf-friendly: pas de gros blur */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${THEME.accent}`}
          style={{ opacity: 0.9 }}
        />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 10px)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 py-14">
        {/* Header */}
        <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
              <span className="text-sm font-semibold tracking-[0.25em]">
                {PROFILE.initials}
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">
                {PROFILE.name}
              </div>
              <div className="text-xs text-white/65">{PROFILE.location}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Pill>React</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Product</Pill>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs uppercase tracking-[0.38em] text-white/60">
              Hub personnel
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Une page propre. Des liens utiles. Zéro bruit.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              <span className="font-medium text-white">{PROFILE.role}</span>
              <span className="text-white/50"> — </span>
              {PROFILE.tagline}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {LINKS.map(
                (l: {
                  label: string;
                  meta: string;
                  href: string;
                  primary?: boolean;
                }) => (
                  <LuxLink key={l.label} {...l} />
                )
              )}
              <LuxLink
                label="Me contacter"
                meta={PROFILE.email}
                href={`mailto:${PROFILE.email}`}
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {HIGHLIGHTS.map((h: { k: string; v: string }) => (
                <div
                  key={h.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-xs uppercase tracking-[0.34em] text-white/60">
                    {h.k}
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">
                    {h.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sections */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Section eyebrow="Selected work" title="Ce que je mets en avant">
            <p className="text-sm leading-relaxed text-white/70">
              Ici tu peux ajouter 2–3 items concrets (ex: Sneaknik + un mini
              projet + une contribution). Le but : donner un angle clair à ton
              profil.
            </p>
          </Section>

          <Section eyebrow="À propos" title="En bref">
            <p className="text-sm leading-relaxed text-white/70">
              Fais 4–6 lignes très “recruteur” : ce que tu fais, ce que tu
              cherches, et ce qui te différencie (rigueur, perf, UX, sens
              produit).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>UI/UX</Pill>
              <Pill>Perf</Pill>
              <Pill>Qualité</Pill>
              <Pill>API</Pill>
            </div>
          </Section>
        </div>

        <footer className="mt-10 text-center text-xs text-white/45">
          © {year} {PROFILE.name} • React + Tailwind
        </footer>
      </div>
    </div>
  );
}
