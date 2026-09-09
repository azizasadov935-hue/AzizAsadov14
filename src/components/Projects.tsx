import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Bot, BrainCircuit, ChartNoAxesCombined, Globe, GraduationCap, Newspaper, ScanEye, Workflow } from "lucide-react";
import type { MouseEvent } from "react";
import { projects } from "../data/content";
import { DrawLine, Reveal, SplitWords } from "./ui/Reveal";

const icons = [BrainCircuit, ScanEye, Bot, Workflow, ChartNoAxesCombined, GraduationCap, Newspaper, Globe];

function Card({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const Icon = icons[i % icons.length];
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, var(--line), transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-surface p-7 transition-colors duration-700 hover:bg-fg hover:text-bg md:p-9"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted group-hover:text-bg/60">{p.n}</span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-700 group-hover:border-bg/30 group-hover:rotate-[360deg]">
          <Icon size={18} strokeWidth={1.25} />
        </span>
      </div>

      <div className="relative mt-16 md:mt-24">
        <p className="eyebrow group-hover:!text-bg/60">{p.category}</p>
        <h3 className="display mt-3 text-3xl md:text-[2.4rem] leading-[1]">{p.title}</h3>
        <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted group-hover:text-bg/70">{p.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase group-hover:border-bg/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 right-7 translate-x-3 translate-y-3 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-9 md:right-9">
        <ArrowUpRight size={22} strokeWidth={1.25} />
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <p className="eyebrow">04 — Loyihalar</p>
          <p className="eyebrow hidden md:block">Tanlangan ishlar</p>
        </div>

        <div className="mb-16 grid grid-cols-12 gap-x-6 md:mb-24">
          <SplitWords
            as="h2"
            text="Tanlangan loyihalar"
            className="display col-span-12 text-[12vw] leading-[0.95] md:col-span-8 md:text-[6vw]"
          />
          <Reveal className="col-span-12 self-end md:col-span-4" delay={0.2}>
            <p className="max-w-xs text-[15px] leading-relaxed text-muted md:ml-auto">
              Har bir loyiha — aniq muammo, o'ylangan yechim va o'lchanadigan natija. AI mahsulotlaridan tortib
              to'liq avtomatlashtirilgan ekotizimlargacha.
            </p>
          </Reveal>
        </div>

        <DrawLine className="mb-6" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={(i % 4) * 0.08} className="min-h-[380px] md:min-h-[440px]">
              <Card p={p} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
