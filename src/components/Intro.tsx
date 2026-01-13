import { useEffect } from "react";
import { motion } from "framer-motion";

export function Intro({
  initials,
  onDone,
}: {
  initials: string;
  onDone: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onDone, 900);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#070812] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/5"
        >
          <span className="text-lg font-semibold tracking-[0.25em]">
            {initials}
          </span>
        </motion.div>

        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.38em] text-white/60">
            Portfolio
          </div>
          <motion.div
            className="mt-4 h-px w-44 bg-gradient-to-r from-violet-500/60 via-white/20 to-cyan-400/50"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
