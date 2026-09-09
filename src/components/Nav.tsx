import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { images, nav, socials } from "../data/content";
import { Magnetic } from "./ui/Magnetic";
import { getLenis, scrollTo } from "../lib/scroll";

const EASE = [0.76, 0, 0.24, 1] as const;

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 200 && !open);
    setScrolled(v > 40);
  });

  useEffect(() => {
    if (open) getLenis()?.stop();
    else getLenis()?.start();
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      scrollTo(href);
    }, open ? 500 : 0);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80]"
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12 transition-[padding] duration-500 ${
            scrolled ? "py-4" : "py-6"
          }`}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(0);
            }}
            className="flex items-center gap-3"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-line">
              <img src={images.avatar} alt="Aziz Asadov" className="h-full w-full object-cover grayscale" />
            </span>
            <span className="font-mono text-xs tracking-[0.2em] uppercase mix-blend-difference text-white">Aziz Asadov</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex mix-blend-difference text-white">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.href);
                }}
                className="link-line text-[13px] tracking-wide"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic>
              <button
                onClick={onToggleTheme}
                aria-label="Mavzuni almashtirish"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg/60 backdrop-blur-md transition-colors hover:bg-fg hover:text-bg"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex"
                  >
                    {theme === "dark" ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Menyu"
                className="group relative flex h-10 items-center gap-3 rounded-full border border-line bg-bg/60 px-4 backdrop-blur-md transition-colors hover:bg-fg hover:text-bg"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase">{open ? "Yopish" : "Menyu"}</span>
                <span className="relative h-3 w-4">
                  <span
                    className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ${
                      open ? "translate-y-[5.5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform duration-500 ${
                      open ? "-translate-y-[5.5px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] bg-bg"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-8 pt-28 md:px-12 md:pb-12 md:flex-row md:items-end">
              <ul className="space-y-1">
                {nav.map((n, i) => (
                  <li key={n.href} className="overflow-hidden">
                    <motion.a
                      href={n.href}
                      onClick={(e) => {
                        e.preventDefault();
                        go(n.href);
                      }}
                      className="group flex items-baseline gap-4 md:gap-8"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.06 }}
                    >
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                      <span className="display text-[14vw] leading-[0.95] md:text-[7vw] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:italic">
                        {n.label}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-x-12 gap-y-3 md:mt-0 md:text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="eyebrow col-span-2">Ijtimoiy tarmoqlar</p>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-line inline-flex items-center gap-1 text-sm md:justify-end"
                  >
                    {s.label}
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
