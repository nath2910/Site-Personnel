import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import type { Locale } from "../data/content";
import { COPY, PROFILE } from "../data/content";
import { THEME } from "../styles/theme";
import { Intro } from "../components/Intro";
import Home from "./Home";
import Slash from "./Slash";

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
  const location = useLocation();
  const t = COPY[locale];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070812] text-white antialiased">
      <AnimatePresence>
        {intro && (
          <Intro initials={PROFILE.initials} onDone={() => setIntro(false)} />
        )}
      </AnimatePresence>

      {/* Background */}
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

          <LangToggle locale={locale} setLocale={setLocale} />
        </header>

        {/* Routes */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home locale={locale} />} />
            <Route path="/myslash" element={<Slash locale={locale} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
