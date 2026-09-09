import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images, skills } from "../data/content";
import { SmartImage } from "./ui/SmartImage";
import { Marquee } from "./Marquee";
import { Reveal } from "./ui/Reveal";

const quote =
  "Kod — bu vosita. G'oya — bu boshlanish. Intellekt — bu tezlashtirgich. Natija — yagona o'lchov.";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.1]);

  const words = quote.split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden bg-invert text-invert-fg">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 py-28 md:px-12 md:py-40">
        <div className="col-span-12 md:col-span-5">
          <motion.div style={{ y: imgY }} className="group relative overflow-hidden">
            <motion.div style={{ scale }}>
              <SmartImage
                src={images.manifesto}
                alt="Aziz Asadov — o'ylanib"
                label="Manifest"
                className="aspect-[1/1] w-full"
              />
            </motion.div>
            <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-white mix-blend-difference">
              Fig. 09 — Manifest
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 mt-12 flex flex-col justify-between md:col-span-6 md:col-start-7 md:mt-0">
          <p className="eyebrow !text-invert-fg/50">Manifest</p>
          <p className="display mt-10 text-[9vw] leading-[1.02] md:mt-0 md:text-[3.4vw]">
            {words.map((w, i) => (
              <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </p>
          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center gap-6">
              <span className="h-px w-16 bg-invert-fg/30" />
              <span className="text-sm text-invert-fg/60">Aziz Asadov, AI Team Leader</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-invert-fg/10 py-8">
        <Marquee items={[...skills.ai, ...skills.dev]} duration={50} className="display text-3xl md:text-5xl" />
        <div className="h-6" />
        <Marquee items={[...skills.tools, ...skills.ai.slice(0, 3)]} reverse duration={60} className="font-mono text-xs tracking-[0.25em] uppercase text-invert-fg/50" />
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = 0.2 + (index / total) * 0.4;
  const end = start + 0.08;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}
