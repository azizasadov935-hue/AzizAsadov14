import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "../data/content";
import { SmartImage } from "./ui/SmartImage";
import { DrawLine, Reveal, SplitWords } from "./ui/Reveal";
import { getLenis } from "../lib/scroll";

const EASE = [0.16, 1, 0.3, 1] as const;

function GalleryItem({
  item,
  index,
  offset,
  onOpen,
}: {
  item: (typeof images.gallery)[number];
  index: number;
  offset: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className="group">
      <button onClick={onOpen} data-cursor="view" className="block w-full text-left">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <SmartImage
            src={item.src}
            alt={item.alt}
            label={item.caption}
            className={`w-full ${item.ratio === "3/4" ? "aspect-[3/4]" : "aspect-square"}`}
            imgClassName="scale-[1.06] group-hover:scale-100"
          />
        </motion.div>
        <div className="mt-3 flex items-center justify-between">
          <span className="eyebrow">Fig. {String(index + 3).padStart(2, "0")} — {item.caption}</span>
          <span className="eyebrow opacity-0 transition-opacity duration-500 group-hover:opacity-100">Kattalashtirish</span>
        </div>
      </button>
    </motion.div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = images.gallery;

  const next = useCallback(() => setOpen((o) => (o === null ? null : (o + 1) % items.length)), [items.length]);
  const prev = useCallback(
    () => setOpen((o) => (o === null ? null : (o - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    getLenis()?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
    };
  }, [open, next, prev]);

  // Editorial 3-column arrangement with staggered vertical offsets
  const cols = [
    [items[0], items[3]],
    [items[1], items[4]],
    [items[2], items[5]],
  ];

  return (
    <section id="gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <p className="eyebrow">05 — Galereya</p>
          <p className="eyebrow hidden md:block">Portret seriyasi</p>
        </div>

        <div className="mb-16 grid grid-cols-12 gap-x-6 md:mb-24">
          <SplitWords
            as="h2"
            text="Kadrlar ortida"
            className="display col-span-12 text-[12vw] leading-[0.95] md:col-span-7 md:text-[6vw]"
          />
          <Reveal className="col-span-12 self-end md:col-span-4 md:col-start-9" delay={0.2}>
            <p className="max-w-xs text-[15px] leading-relaxed text-muted md:ml-auto">
              Monoxrom seriya. Rangni ko'rish uchun kursorni olib boring — har bir kadr o'z hikoyasini saqlaydi.
            </p>
          </Reveal>
        </div>

        <DrawLine className="mb-12" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
          {cols.map((col, ci) => (
            <div key={ci} className={`flex flex-col gap-12 ${ci === 1 ? "md:pt-24" : ci === 2 ? "md:pt-8" : ""}`}>
              {col.map((item) => {
                const idx = items.indexOf(item);
                return (
                  <GalleryItem
                    key={item.src}
                    item={item}
                    index={idx}
                    offset={ci === 1 ? 50 : 25}
                    onOpen={() => setOpen(idx)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-bg/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-fg hover:text-bg md:right-12 md:top-10"
              onClick={() => setOpen(null)}
              aria-label="Yopish"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
            <button
              className="absolute left-6 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line transition-colors hover:bg-fg hover:text-bg md:left-12 md:flex"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Oldingi"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              className="absolute right-6 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line transition-colors hover:bg-fg hover:text-bg md:right-12 md:flex"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Keyingi"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>

            <motion.div
              key={open}
              className="max-h-[82vh] w-auto max-w-[92vw] md:max-w-[70vw]"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <SmartImage
                src={items[open].src}
                alt={items[open].alt}
                label={items[open].caption}
                mono={false}
                className="max-h-[78vh] min-h-[50vh] min-w-[60vw] md:min-w-[40vw]"
                imgClassName="!h-auto max-h-[78vh] w-auto mx-auto"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="eyebrow">{items[open].caption}</span>
                <span className="eyebrow">
                  {String(open + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
