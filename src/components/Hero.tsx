import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { images, contact } from "../data/content";
import { SmartImage } from "./ui/SmartImage";
import { Magnetic } from "./ui/Magnetic";
import { scrollTo } from "../lib/scroll";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const line = (text: string, delay: number, className = "") => (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={ready ? { y: 0 } : {}}
        transition={{ duration: 1.4, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 pt-32 md:px-12 md:pt-40">
        {/* Eyebrow row */}
        <motion.div
          className="col-span-12 mb-10 flex flex-wrap items-center justify-between gap-4 md:mb-16"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fg" />
            </span>
            Yangi loyihalar uchun ochiq
          </p>
          <p className="eyebrow hidden md:block">AI Builder · Digital Creator · Team Leader</p>
        </motion.div>

        {/* Headline */}
        <motion.div style={{ y: textY, opacity }} className="col-span-12 relative z-10">
          <h1 className="display text-[15vw] md:text-[11.5vw] leading-[0.88]">
            {line("Aziz", 0.1)}
            {line("Asadov", 0.2, "md:pl-[18vw]")}
          </h1>
        </motion.div>

        {/* Image + description row */}
        <div className="col-span-12 mt-10 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-[-3vw]">
          <motion.div
            className="col-span-12 md:col-span-4 md:col-start-1 md:pt-[10vw] order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
          >
            <p className="max-w-sm text-[15px] leading-relaxed text-muted md:text-base">
              Sun'iy intellekt asosida real biznes yechimlari, avtomatlashtirish tizimlari va premium raqamli
              tajribalar yarataman. Oddiy g'oyani ishlaydigan mahsulotga aylantiraman.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-transform duration-500 hover:scale-[1.03]"
                >
                  Loyihani boshlash
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#projects");
                  }}
                  className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3.5 text-sm transition-colors duration-500 hover:bg-fg hover:text-bg"
                >
                  Ishlarni ko'rish
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6 md:col-start-6 order-1 md:order-2"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={ready ? { clipPath: "inset(0% 0 0 0)" } : {}}
            transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
          >
            <motion.div style={{ y: imgY }} className="group relative">
              <SmartImage
                src={images.hero}
                alt="Aziz Asadov — ofisda"
                label="Hero"
                priority
                className="aspect-[4/5] md:aspect-[1/1] w-full"
                imgClassName="scale-[1.08] group-hover:scale-100"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between text-white mix-blend-difference">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Fig. 01 — Studio</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Toshkent</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-1 md:col-start-12 order-3 hidden md:flex items-end justify-end"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="eyebrow [writing-mode:vertical-rl] rotate-180">Pastga aylantiring</span>
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
                <ArrowDown size={16} strokeWidth={1.5} />
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
