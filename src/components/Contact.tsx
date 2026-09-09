import { ArrowUpRight, Bot, MapPin, Phone, Radio, Send } from "lucide-react";
import { contact, images, socials } from "../data/content";
import { SmartImage } from "./ui/SmartImage";
import { Magnetic } from "./ui/Magnetic";
import { DrawLine, Reveal, SplitWords } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <p className="eyebrow">06 — Aloqa</p>
          <p className="eyebrow hidden md:block">Keling, gaplashamiz</p>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-8">
            <SplitWords
              as="h2"
              text="Buyuk g'oyangiz bormi? Uni birga hayotga tatbiq etaylik."
              className="display text-[12vw] leading-[0.95] md:text-[6.4vw]"
            />

            <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-fg px-8 py-4 text-sm font-medium text-bg transition-transform duration-500 hover:scale-[1.03]"
                >
                  <Send size={16} strokeWidth={1.75} />
                  Telegram orqali yozish
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-3 rounded-full border border-line px-8 py-4 text-sm transition-colors duration-500 hover:bg-fg hover:text-bg"
                >
                  <Phone size={16} strokeWidth={1.75} />
                  {contact.phone}
                </a>
              </Magnetic>
            </Reveal>

            <div className="mt-20 grid gap-y-0 md:grid-cols-3 md:gap-x-6">
              {[
                { icon: Send, k: "Telegram", v: "@Azizjon_Asadov", href: contact.telegram },
                { icon: Bot, k: "AI Bot", v: "@AzizjonAsadov_bot", href: contact.bot },
                { icon: Radio, k: "Kanal", v: "@AzizAsadov0", href: contact.channel },
              ].map((c, i) => (
                <Reveal key={c.k} delay={i * 0.08}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-t border-line py-6 transition-colors"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors duration-500 group-hover:bg-fg group-hover:text-bg">
                        <c.icon size={15} strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="eyebrow block">{c.k}</span>
                        <span className="mt-1 block text-sm">{c.v}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-fg"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <Reveal delay={0.2} className="group">
              <SmartImage
                src={images.contact}
                alt="Aziz Asadov — portret"
                label="Aloqa"
                className="aspect-[4/5] w-full"
                imgClassName="scale-[1.05] group-hover:scale-100"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="eyebrow">Fig. 10</span>
                <span className="eyebrow flex items-center gap-1.5">
                  <MapPin size={11} strokeWidth={1.5} />
                  {contact.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="mt-10">
              <p className="eyebrow mb-4">Ijtimoiy tarmoqlar</p>
              <DrawLine />
              <ul>
                {socials.map((s) => (
                  <li key={s.label} className="border-b border-line">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between py-3.5 text-sm"
                    >
                      <span className="transition-transform duration-500 group-hover:translate-x-1">{s.label}</span>
                      <span className="font-mono text-[11px] text-muted">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
