import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

import { JOURNEY } from "@/data/kedem";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function TimelineItem({
  no,
  title,
  note,
  orientation,
  active = false,
}: {
  no: string;
  title: string;
  note?: string;
  orientation: "horizontal" | "vertical";
  active?: boolean;
}) {
  if (orientation === "vertical") {
    return (
      <motion.li
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="relative pl-10"
      >
        <span aria-hidden="true" className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-gradient-brand" />
        <p className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground/70">{no}</p>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        {note ? <p className="mt-1 text-sm text-muted-foreground">{note}</p> : null}
      </motion.li>
    );
  }

  return (
    <li
      className={cn(
        "surface-panel relative mt-10 shrink-0 rounded-xl p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        active ? "w-[380px] -translate-y-3 border-accent/50 shadow-glow" : "w-[280px] opacity-60",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-[2.9rem] left-6 h-3 w-3 rounded-full border-2 border-accent transition-all duration-500",
          active ? "scale-150 bg-accent" : "bg-background",
        )}
      />
      <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-px bg-gradient-brand transition-opacity", active ? "opacity-100" : "opacity-40")} />
      <p className={cn("font-display font-bold transition-all duration-700", active ? "text-6xl text-gradient-brand" : "text-4xl text-muted-foreground/25")}>{no}</p>
      <h3 className={cn("mt-4 font-semibold leading-snug transition-all duration-700", active ? "text-2xl" : "text-lg")}>{title}</h3>
      {note ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p> : null}
    </li>
  );
}

export function Journey() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-80%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Background environment drifts from quantum blue toward mindset green.
  const glowX = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.35, 0.15, 0.05]);
  const greenOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.15, 0.3]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(JOURNEY.length - 1, Math.max(0, Math.floor(v * JOURNEY.length))));
  });

  return (
    <div className="theme-deep grain relative">
      <Section className="pb-0">
        <SectionHeader
          eyebrow="04 — Event Journey"
          title="One day, fourteen moments."
          lead="From registration to the global networking dinner — the KEDEM programme unfolds as a single continuous arc."
        />
      </Section>

      {/* Desktop: immersive horizontal timeline driven by scroll */}
      <div ref={trackRef} className="relative hidden h-[460vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div aria-hidden="true" style={{ left: glowX, opacity: blueOpacity }} className="absolute top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary blur-[140px]" />
          <motion.div aria-hidden="true" style={{ left: glowX, opacity: greenOpacity }} className="absolute bottom-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent blur-[140px]" />
          <p aria-hidden="true" className="pointer-events-none absolute right-8 top-24 font-display text-[12rem] font-bold leading-none tracking-[-0.06em] text-foreground/[0.04]">
            {JOURNEY[active]?.no}
          </p>
          <div className="absolute left-8 top-24 font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Stage <span className="text-foreground">{JOURNEY[active]?.no}</span> / 14
          </div>
          <div aria-hidden="true" className="absolute inset-x-8 bottom-10 h-px bg-border">
            <motion.div style={{ width: progress }} className="h-px bg-gradient-brand" />
          </div>
          <motion.ul style={{ x }} className="relative flex items-start gap-6 px-8 before:absolute before:left-8 before:right-0 before:top-[0.35rem] before:h-px before:bg-gradient-brand before:opacity-40">
            {JOURNEY.map((s, i) => (
              <TimelineItem key={s.no} no={s.no} title={s.title} {...(s.note ? { note: s.note } : {})} orientation="horizontal" active={i === active} />
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <Section className="lg:hidden">
        <ol className="relative grid gap-8 border-l border-border pl-0">
          {JOURNEY.map((s) => (
            <TimelineItem key={s.no} no={s.no} title={s.title} {...(s.note ? { note: s.note } : {})} orientation="vertical" />
          ))}
        </ol>
      </Section>
    </div>
  );
}
