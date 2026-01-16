import { useMemo } from "react";
import { motion } from "framer-motion";
import type { Locale, LinkItem, ProjectItem } from "../data/content";
import {
  PROFILE,
  LINKS,
  COPY,
  PROJECTS_FR,
  PROJECTS_EN,
} from "../data/content";
import { LuxLink } from "../components/LuxLink";
import { Pill } from "../components/Pill";
import { Section } from "../components/Section";

export default function Home({ locale }: { locale: Locale }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = COPY[locale];
  const projects: ProjectItem[] = locale === "fr" ? PROJECTS_FR : PROJECTS_EN;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      {/* Hero */}
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
    </motion.div>
  );
}
