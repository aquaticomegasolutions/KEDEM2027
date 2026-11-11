import { animate, motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";

/** AOS geometric motif separator — angled navy/green blades, not the letterhead itself. */
export function GeoDivider({ flip = false, className }: { flip?: boolean; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none relative h-10 w-full overflow-hidden", className)}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: flip ? 1 : 0 }}
        className={cn("absolute top-1/2 h-px w-full bg-gradient-brand opacity-50")}
      />
      <motion.span
        initial={{ opacity: 0, x: flip ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className={cn(
          "absolute top-1/2 h-3 w-24 -translate-y-1/2 -skew-x-[35deg] bg-navy",
          flip ? "right-10" : "left-10",
        )}
      />
      <motion.span
        initial={{ opacity: 0, x: flip ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className={cn(
          "absolute top-1/2 h-3 w-10 -translate-y-1/2 -skew-x-[35deg] bg-accent",
          flip ? "right-36" : "left-36",
        )}
      />
    </div>
  );
}

/** Corner geometric accent. */
export function GeoCorner({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className={cn("pointer-events-none absolute h-28 w-28", className)}>
      <path d="M0 0 H120 L0 120 Z" className="fill-navy" opacity="0.55" />
      <path d="M0 0 H60 L0 60 Z" className="fill-accent" opacity="0.5" />
    </svg>
  );
}

export function CountUp({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotionSafe();
  // Always render the real value by default (SSR, no-JS, screenshots) — never "00".
  const [v, setV] = useState(to);
  const played = useRef(false);
  useEffect(() => {
    if (!inView || reduced || played.current) return;
    played.current = true;
    const c = animate(1, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (n) => setV(Math.max(1, Math.round(n))) });
    return () => { c.stop(); setV(to); };
  }, [inView, reduced, to]);
  return (
    <span ref={ref} className={className}>
      {String(v).padStart(2, "0")}
    </span>
  );
}

/** Subtle desktop-only cursor halo. Native cursor stays visible for usability. */
export function CursorHalo() {
  const reduced = useReducedMotionSafe();
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHot(!!(e.target as Element)?.closest?.("a,button,[role=button]"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
    >
      <motion.div
        animate={{ scale: hot ? 1.8 : 1, opacity: hot ? 0.9 : 0.5 }}
        transition={{ duration: 0.3 }}
        className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-accent/70 mix-blend-difference"
      />
    </motion.div>
  );
}
