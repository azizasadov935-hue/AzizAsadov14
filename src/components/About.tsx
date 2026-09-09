import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { images, stats } from "../data/content";
import { SmartImage } from "./ui/SmartImage";
import { DrawLine, Reveal, SplitWords } from "./ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      <span className="text-muted">{suffix}</span>
    </span>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <p className="eyebrow">01 — Haqimda</p>
          <p className="eyebrow hidden md:block">Izdihom PR / Marketing Agency</p>
        </div>
        <DrawLine />

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-24">
          <div ref={ref} className="col-span-12 md:col-span-4">
            <motion.div style={{ y }} className="group sticky top-32">
              <SmartImage
                src={images.about}
                alt="Aziz Asadov — portret"
                label="Haqimda"
                className="aspect-[3/4] w-full"
                imgClassName="scale-[1.04] group-hover:scale-100"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="eyebrow">Fig. 02 — Portret</span>
                <span className="eyebrow">2026</span>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <SplitWords
              as="h2"
              text="G'oyani real ishlaydigan mahsulotga aylantiraman — sun'iy intellekt, avtomatlashtirish va nafis dizayn orqali."
              className="display text-[9vw] leading-[1] md:text-[3.6vw]"
            />

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2">
              <Reveal delay={0.1}>
                <p className="text-[15px] leading-relaxed text-muted md:text-base">
                  Hozirda <span className="text-fg">Izdihom PR/Marketing Agency</span> kompaniyasida AI Team Leader
                  lavozimida ishlayman. Faoliyatim davomida turli bizneslar uchun AI yechimlari, Telegram botlar,
                  avtomatlashtirish tizimlari va premium kontent ishlab chiqish loyihalarida qatnashganman.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[15px] leading-relaxed text-muted md:text-base">
                  Maqsadim — texnologiyalar yordamida bizneslar va insonlar uchun vaqt tejaydigan, samaradorlikni
                  oshiradigan va real natija beradigan mahsulotlar yaratish. Har bir loyiha — strategiya, dizayn va
                  texnologiyaning uyg'unligi.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 md:mt-24">
              <DrawLine />
              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.08} className="border-b border-line py-8 md:border-b-0 md:border-r md:last:border-r-0 md:pr-6 md:pl-6 md:first:pl-0">
                    <p className="display text-5xl md:text-6xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-3 text-xs tracking-wide text-muted">{s.label}</p>
                  </Reveal>
                ))}
              </div>
              <DrawLine delay={0.2} />
            </div>

            <div className="mt-12 grid gap-y-6 md:grid-cols-2">
              {[
                ["Lavozim", "AI Team Leader"],
                ["Yo'nalish", "AI tizimlar · Automation"],
                ["Mutaxassislik", "Prompt Engineering · AI Media"],
                ["Joylashuv", "Toshkent, O'zbekiston"],
              ].map(([k, v], i) => (
                <Reveal key={k} delay={i * 0.06} className="flex items-baseline gap-6">
                  <span className="eyebrow w-28 shrink-0">{k}</span>
                  <span className="text-sm">{v}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
