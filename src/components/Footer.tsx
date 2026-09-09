import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "../data/content";
import { Magnetic } from "./ui/Magnetic";
import { scrollTo } from "../lib/scroll";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("uz-UZ", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Tashkent",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-16 md:py-20">
          <div className="col-span-12 md:col-span-5">
            <p className="display text-5xl md:text-7xl leading-[0.95]">
              Aziz
              <br />
              <span className="italic">Asadov</span>
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              AI Builder & Digital Creator. G'oyalarni intellektual mahsulotlarga aylantiraman.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-8">
            <p className="eyebrow mb-5">Navigatsiya</p>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(n.href);
                    }}
                    className="link-line text-sm"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-10">
            <p className="eyebrow mb-5">Mahalliy vaqt</p>
            <p className="font-mono text-2xl tabular-nums">{time}</p>
            <p className="mt-1 text-xs text-muted">Toshkent (UTC+5)</p>
            <Magnetic className="mt-8">
              <button
                onClick={() => scrollTo(0)}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:bg-fg hover:text-bg"
                aria-label="Yuqoriga"
              >
                <ArrowUp size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 font-mono text-[10px] tracking-[0.2em] uppercase text-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Aziz Asadov. Barcha huquqlar himoyalangan.</span>
          <span>Dizayn va ishlab chiqish — Aziz Asadov</span>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="display -mb-[3vw] text-center text-[22vw] leading-none text-fg/[0.04]">ASADOV</p>
      </div>
    </footer>
  );
}
