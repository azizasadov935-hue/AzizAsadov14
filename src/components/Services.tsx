import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { services } from "../data/content";
import { DrawLine, Reveal, SplitWords } from "./ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <p className="eyebrow">02 — Xizmatlar</p>
          <p className="eyebrow hidden md:block">Nima qila olaman</p>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <SplitWords
              as="h2"
              text="Strategiyadan ishga tushirishgacha — to'liq sikl."
              className="display text-[10vw] leading-[1] md:text-[3.2vw] md:sticky md:top-32"
            />
          </div>

          <div className="col-span-12 md:col-span-8">
            <DrawLine />
            {services.map((s, i) => {
              const open = active === i;
              return (
                <Reveal key={s.n} delay={i * 0.05}>
                  <button
                    onClick={() => setActive(open ? null : i)}
                    className="group flex w-full items-start gap-6 py-7 text-left md:gap-12 md:py-9"
                    aria-expanded={open}
                  >
                    <span className="eyebrow pt-2">{s.n}</span>
                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-6">
                        <span
                          className={`display text-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-5xl ${
                            open ? "translate-x-2 italic" : "group-hover:translate-x-2"
                          }`}
                        >
                          {s.title}
                        </span>
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            open ? "rotate-45 bg-fg text-bg" : "group-hover:bg-fg group-hover:text-bg"
                          }`}
                        >
                          <Plus size={16} strokeWidth={1.5} />
                        </span>
                      </span>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.span
                            key="body"
                            className="block overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.8, ease: EASE }}
                          >
                            <span className="block pt-6 md:grid md:grid-cols-2 md:gap-8">
                              <span className="block max-w-md text-[15px] leading-relaxed text-muted">{s.desc}</span>
                              <span className="mt-4 flex flex-wrap gap-2 md:mt-0 md:justify-end md:self-start">
                                {s.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </span>
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                  <DrawLine />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
