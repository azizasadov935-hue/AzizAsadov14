import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setExit(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!exit && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-invert text-invert-fg px-6 py-6 md:px-12 md:py-10"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1.1, ease: EASE } }}
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow !text-invert-fg/60">Portfolio — 2026</span>
            <span className="eyebrow !text-invert-fg/60">Toshkent, UZ</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="overflow-hidden">
              <motion.h1
                className="display text-[16vw] md:text-[9vw] leading-none"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Aziz Asadov
              </motion.h1>
            </div>
            <div className="font-mono text-4xl md:text-6xl tabular-nums leading-none">
              {String(count).padStart(3, "0")}
            </div>
          </div>

          <div className="h-px w-full bg-invert-fg/15 overflow-hidden">
            <motion.div className="h-full bg-invert-fg" style={{ width: `${count}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
