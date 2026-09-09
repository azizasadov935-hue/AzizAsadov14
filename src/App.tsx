import { motion, useScroll, useSpring } from "motion/react";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { getLenis, setLenis } from "./lib/scroll";
import { Preloader } from "./components/Preloader";
import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Manifesto } from "./components/Manifesto";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    setLenis(lenis);
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    if (ready) getLenis()?.start();
    else {
      getLenis()?.stop();
      window.scrollTo(0, 0);
    }
  }, [ready]);

  return (
    <div className="grain relative min-h-screen bg-bg text-fg">
      <Preloader onDone={() => setReady(true)} />
      <Cursor />

      <motion.div
        className="fixed inset-x-0 top-0 z-[85] h-px origin-left bg-fg"
        style={{ scaleX: progress }}
      />

      <Nav theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero ready={ready} />

        <div className="border-y border-line py-5">
          <Marquee
            items={[
              "AI Systems",
              "Telegram Bots",
              "Automation",
              "AI Media",
              "Web Development",
              "Prompt Engineering",
              "Startup MVP",
            ]}
            duration={35}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted"
          />
        </div>

        <About />
        <Services />
        <Manifesto />
        <Projects />
        <Experience />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
