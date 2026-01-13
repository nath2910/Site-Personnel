import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.38em] text-white/60">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
          {title}
        </h2>
      )}
      <div className="mt-4">{children}</div>
    </section>
  );
}
