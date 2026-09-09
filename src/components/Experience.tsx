import { experience } from "../data/content";
import { DrawLine, Reveal, SplitWords } from "./ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <p className="eyebrow">03 — Tajriba</p>
          <p className="eyebrow hidden md:block">Yo'nalishlar</p>
        </div>

        <SplitWords
          as="h2"
          text="Tajriba va yo'nalishlar"
          className="display mb-16 text-[12vw] leading-[0.95] md:mb-24 md:text-[6vw]"
        />

        <DrawLine />
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.05}>
            <div className="group grid grid-cols-12 gap-x-6 gap-y-3 py-8 md:py-10">
              <div className="col-span-12 md:col-span-2">
                <span className="eyebrow">{e.period}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="display text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-4xl">
                  {e.role}
                </h3>
                <p className="mt-2 text-sm text-muted">{e.company}</p>
              </div>
              <div className="col-span-12 md:col-span-5 md:col-start-8">
                <p className="text-[15px] leading-relaxed text-muted">{e.desc}</p>
              </div>
            </div>
            <DrawLine />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
