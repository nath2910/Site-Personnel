import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale, LinkItem, ProjectItem } from "../data/content";
import {
  PROFILE,
  LINKS,
  COPY,
  PROJECTS_FR,
  PROJECTS_EN,
} from "../data/content";
import { THEME } from "../styles/theme";
import { Intro } from "../components/Intro";
import { LuxLink } from "../components/LuxLink";
import { Pill } from "../components/Pill";
import { Section } from "../components/Section";

function LangToggle({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  const base = "rounded-xl border px-3 py-1 text-xs transition";
  const active = "bg-white/10 text-white border-white/20";
  const idle =
    "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.06]";

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1">
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={`${base} ${locale === "fr" ? active : idle}`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`${base} ${locale === "en" ? active : idle}`}
      >
        EN
      </button>
    </div>
  );
}

export default function App() {
  const [intro, setIntro] = useState(true);
  const [locale, setLocale] = useState<Locale>("fr");
  const year = useMemo(() => new Date().getFullYear(), []);

  const t = COPY[locale];
  const projects: ProjectItem[] = locale === "fr" ? PROJECTS_FR : PROJECTS_EN;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070812] text-white antialiased">
      <AnimatePresence>
        {intro && (
          <Intro initials={PROFILE.initials} onDone={() => setIntro(false)} />
        )}
      </AnimatePresence>

      {/* Background : derrière tout, ne capte jamais la souris */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
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

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-14">
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
              <div className="text-xs text-white/65">{t.header.location}</div>
            </div>
          </div>

          {/* Toggle langue en haut à droite */}
          <LangToggle locale={locale} setLocale={setLocale} />
        </header>

        {/* Hero (on garde tes titres) */}
        <section className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs uppercase tracking-[0.38em] text-white/60">
              {t.hero.eyebrow}
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {t.hero.title}
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium text-white/80 sm:text-xl">
              {t.hero.subtitle}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              <span className="font-semibold text-white">{t.hero.role}</span>
              <br />
              {t.hero.tagline}
            </p>

            {/* Links */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {LINKS.map((l: LinkItem) => (
                <LuxLink key={l.label} {...l} />
              ))}
              <LuxLink
                label={t.labels.contact}
                meta={PROFILE.email}
                href={`mailto:${PROFILE.email}`}
              />
            </div>

            {/* Small highlight row */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Product Owner</Pill>
              <Pill>Gestion de projet IT</Pill>
              <Pill>Agile</Pill>
              <Pill>Jira / Confluence</Pill>
            </div>
          </motion.div>
        </section>

        {/* Content */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Section title={t.sections.projects.title}>
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {p.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {p.desc}
                      </p>
                    </div>

                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-xs text-white/70 underline-offset-4 hover:underline"
                      >
                        {t.labels.open}
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title={t.sections.more.title}>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-white/70">
                {t.sections.more.description1}
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                {t.sections.more.description2}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.sections.more.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </Section>
        </div>

        <footer className="mt-10 text-center text-xs text-white/45">
          © {year} {PROFILE.name}
        </footer>
      </div>
    </div>
  );
}
