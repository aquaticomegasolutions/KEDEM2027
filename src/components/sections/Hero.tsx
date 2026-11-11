import { motion, type MotionValue, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

import { ButtonLink } from "@/components/ui/ActionButton";
import { QuantumField } from "@/components/visuals/QuantumField";
import { SUMMIT } from "@/data/kedem";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Three energy zones — Quantum, AI, Mindset — that converge toward KEDEM on scroll. */
const ZONES = [
  { label: "Quantum", pos: "left-[6%] top-[18%]", tone: "bg-primary/25", dx: 260, dy: 140 },
  { label: "AI", pos: "right-[6%] top-[14%]", tone: "bg-ring/20", dx: -260, dy: 160 },
  { label: "Mindset", pos: "left-[38%] bottom-[4%]", tone: "bg-accent/20", dx: 0, dy: -180 },
];

export function Hero() {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const tx = useTransform(sx, [-1, 1], [-12, 12]);
  const ty = useTransform(sy, [-1, 1], [-6, 6]);
  const bgx = useTransform(sx, [-1, 1], [18, -18]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fieldOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fieldScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(8px)"]);
  const converge = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  return (
    <section ref={ref} className="theme-deep grain relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-14 pt-28 sm:px-8 lg:pt-32">
      <motion.div aria-hidden="true" style={reduced ? {} : { opacity: fieldOpacity, scale: fieldScale, x: bgx }} className="absolute inset-0">
        <div className="veil absolute inset-0" />
        <div className="grid-mesh absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {ZONES.map((z, i) => (
          <Zone key={z.label} {...z} index={i} converge={converge} reduced={reduced} />
        ))}
        <QuantumField />
        {/* Floating orbital geometry + faint world contours: quantum → AI → human → global */}
        <motion.svg
          viewBox="0 0 800 800"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 top-1/2 hidden h-[52rem] w-[52rem] -translate-y-1/2 text-foreground/10 lg:block"
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.8">
            <ellipse cx="400" cy="400" rx="380" ry="140" />
            <ellipse cx="400" cy="400" rx="380" ry="140" transform="rotate(60 400 400)" />
            <ellipse cx="400" cy="400" rx="380" ry="140" transform="rotate(120 400 400)" />
            <circle cx="400" cy="400" r="300" strokeDasharray="2 8" />
            <path d="M120 360 Q400 300 680 360 M110 440 Q400 500 690 440 M400 100 Q330 400 400 700 M400 100 Q470 400 400 700" opacity="0.6" />
          </g>
          <circle cx="780" cy="400" r="4" fill="var(--accent)" />
          <circle cx="210" cy="235" r="3" fill="var(--primary)" />
        </motion.svg>
      </motion.div>

      <motion.div
        style={reduced ? {} : { x: tx, y: contentY, opacity: contentOpacity, filter: blur }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <motion.div style={reduced ? {} : { y: ty }}>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-accent" /> {SUMMIT.organizer} presents
          </motion.p>

          <h1 className="mt-6">
            <span className="sr-only">KEDEM — Global Technology &amp; Innovation Summit 2027</span>
            <span aria-hidden="true" className="block overflow-hidden">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
                className="text-display-xl block"
              >
                <span className="text-gradient-brand">KEDEM</span>
              </motion.span>
            </span>
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="mt-5 block max-w-3xl font-display text-xl font-semibold uppercase leading-[1.1] tracking-[0.01em] text-foreground/90 sm:text-3xl lg:text-4xl"
            >
              Global Technology <span className="text-accent">&amp;</span>
              <br />
              Innovation Summit 2027
            </motion.span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="font-display text-sm font-semibold tracking-[0.4em] text-muted-foreground sm:text-base">
                QUANTUM <span className="text-accent">•</span> AI <span className="text-accent">•</span> MINDSET
              </motion.p>
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.14em" }}
                transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
                className="mt-4 font-display text-2xl font-bold sm:text-4xl"
              >
                FROM VIZAG <span className="text-gradient-brand">TO THE WORLD</span>
              </motion.p>
              <motion.blockquote initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.75 }} className="mt-7 max-w-lg border-l border-accent/70 pl-5 text-lg italic text-foreground/80 sm:text-xl">
                “{SUMMIT.statement}”
              </motion.blockquote>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.85 }} className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/summit" size="lg">Explore KEDEM</ButtonLink>
                <ButtonLink to="/connect" variant="outline" size="lg">Get Summit Updates</ButtonLink>
              </motion.div>
            </div>

            <motion.dl initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9, ease: EASE }} className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border backdrop-blur-sm lg:grid-cols-1">
              <div className="bg-background/70 p-5">
                <dt className="eyebrow">Date</dt>
                <dd className="mt-2 flex items-center gap-2 font-display text-lg font-bold tracking-[0.12em]">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" /><span className="relative h-2 w-2 rounded-full bg-accent" /></span>
                  JANUARY 8–9, 2027
                </dd>
              </div>
              <div className="bg-background/70 p-5">
                <dt className="eyebrow">Venue</dt>
                <dd className="mt-2 font-display text-sm font-bold tracking-[0.1em] sm:text-base">VISAKHAPATNAM, ANDHRA PRADESH</dd>
              </div>
            </motion.dl>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        Enter the story
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <motion.span animate={reduced ? {} : { y: ["-100%", "100%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-x-0 h-1/2 bg-accent" />
        </span>
      </motion.a>
    </section>
  );
}

function Zone({
  label, pos, tone, dx, dy, index, converge, reduced,
}: (typeof ZONES)[number] & { index: number; converge: MotionValue<number>; reduced: boolean }) {
  const x = useTransform(converge, [0, 1], [0, dx]);
  const y = useTransform(converge, [0, 1], [0, dy]);
  return (
    <motion.div style={reduced ? {} : { x, y }} className={`absolute ${pos} hidden sm:block`}>
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9 + index * 2, repeat: Infinity, ease: "easeInOut" }}
        className={`h-72 w-72 rounded-full blur-3xl ${tone}`}
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[0.6rem] uppercase tracking-[0.5em] text-foreground/25">
        {label}
      </span>
    </motion.div>
  );
}
