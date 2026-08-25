import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import heroImg from "@/assets/hero-zahrada.jpg";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 140]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-24 -bottom-24">
        <img
          src={heroImg}
          alt="Upravená zahrada s posekaným trávníkem a zastřiženými živými ploty"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="bg-primary-dark/75 absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pt-28 pb-20 text-center">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/85 text-sm font-semibold tracking-[0.2em] uppercase"
        >
          {site.area}
        </motion.p>

        <motion.h1
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary-foreground mt-5 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Zahradnické a technické služby
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="text-primary-foreground/90 mx-auto mt-6 max-w-2xl text-lg sm:text-xl"
        >
          Posekáme trávník, zastřihneme živý plot, dokončíme stavební práci nebo ji začneme od začátku, vyklidíme
          a odvezeme odpad. Zvládneme skoro vše, co se týče práce rukama – s profesionálním týmem{" "}
          
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href={site.phoneHref} className="btn-base btn-primary w-full sm:w-auto">
            <Phone size={18} aria-hidden="true" /> Zavolat
          </a>
          <a href="#kontakt" className="btn-base btn-on-dark w-full sm:w-auto">
            Nezávazná poptávka <ArrowDown size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
