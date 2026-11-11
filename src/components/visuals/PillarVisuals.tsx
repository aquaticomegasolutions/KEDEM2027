import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";

/** One visual language from the homepage through the three pillar chapters. */
export function QuantumVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotionSafe();
  const moving = active && !reduced;
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full w-full overflow-visible">
      <circle cx="200" cy="200" r="178" fill="none" className="stroke-foreground/10" strokeWidth="0.8" />
      {[54, 92, 136].map((r, i) => <circle key={r} cx="200" cy="200" r={r} fill="none" className="stroke-primary/30" strokeWidth="0.8" strokeDasharray={i === 1 ? "2 7" : undefined} />)}
      {[0, 60, 120].map((angle, i) => (
        <motion.g key={angle} style={{ transformOrigin: "200px 200px" }}
          animate={moving ? { rotate: (i % 2 ? -1 : 1) * 360 } : { rotate: 0 }}
          transition={{ duration: 26 + i * 7, ease: "linear", repeat: Infinity }}>
          <ellipse cx="200" cy="200" rx="172" ry="54" fill="none" className="stroke-foreground/45" strokeWidth="1.15" transform={`rotate(${angle} 200 200)`} />
          <ellipse cx="200" cy="200" rx="172" ry="54" fill="none" className="stroke-accent/70" strokeWidth="2" strokeDasharray="35 1050" transform={`rotate(${angle} 200 200)`} />
        </motion.g>
      ))}
      {Array.from({ length: 36 }, (_, i) => {
        const theta = i * 2.39996;
        const r = 28 + Math.sqrt(i / 36) * 145;
        return <motion.circle key={i} cx={200 + Math.cos(theta) * r} cy={200 + Math.sin(theta) * r} r={i % 7 === 0 ? 2.7 : 1.25} className={i % 7 === 0 ? "fill-accent" : "fill-primary"}
          animate={moving ? { opacity: [0.25, 1, 0.25] } : { opacity: 0.7 }} transition={{ duration: 2.4 + i % 4, repeat: Infinity, delay: i * 0.1 }} />;
      })}
      <circle cx="200" cy="200" r="14" className="fill-accent/15" />
      <circle cx="200" cy="200" r="5" className="fill-accent" />
      <circle cx="345" cy="105" r="4" className="fill-primary" />
      <circle cx="67" cy="279" r="3" className="fill-accent" />
    </svg>
  );
}

export function AIVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotionSafe();
  const moving = active && !reduced;
  const columns: [number, number][][] = [
    [[55, 108], [55, 200], [55, 292]],
    [[148, 68], [148, 155], [148, 245], [148, 332]],
    [[251, 68], [251, 155], [251, 245], [251, 332]],
    [[345, 108], [345, 200], [345, 292]],
  ];
  const connections = columns.slice(0, -1).flatMap((col, c) => col.flatMap(([x1, y1], a) => (columns[c + 1] ?? []).filter((_, b) => Math.abs(a - b) <= 1).map(([x2, y2], b) => ({ x1, y1, x2, y2, key: `${c}-${a}-${b}` }))));
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full w-full overflow-visible">
      <path d="M20 200H380M200 20V380" fill="none" className="stroke-foreground/10" strokeWidth="0.8" strokeDasharray="2 8" />
      <circle cx="200" cy="200" r="170" fill="none" className="stroke-foreground/10" strokeWidth="0.8" />
      {connections.map(({ x1, y1, x2, y2, key }, i) => (
        <g key={key}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-primary/35" strokeWidth="0.9" />
          <motion.line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-accent" strokeWidth="1.8" strokeDasharray="7 300"
            animate={moving ? { strokeDashoffset: [300, 0] } : { strokeDashoffset: 0 }} transition={{ duration: 2.8, delay: (i % 9) * 0.2, repeat: Infinity, ease: "linear" }} />
        </g>
      ))}
      {columns.flatMap((col, c) => col.map(([x, y], i) => (
        <g key={`${c}-${i}`}>
          <circle cx={x} cy={y} r={c === 1 || c === 2 ? 10 : 8} className="fill-background stroke-primary/70" strokeWidth="1.5" />
          <motion.circle cx={x} cy={y} r="3.5" className={c === 2 ? "fill-accent" : "fill-foreground"}
            animate={moving ? { opacity: [0.45, 1, 0.45] } : { opacity: 1 }} transition={{ duration: 2, delay: (c + i) * 0.3, repeat: Infinity }} />
        </g>
      )))}
      <path d="M25 40h28M25 40v28M375 40h-28M375 40v28M25 360h28M25 360v-28M375 360h-28M375 360v-28" fill="none" className="stroke-accent/60" strokeWidth="1" />
    </svg>
  );
}

export function MindsetVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotionSafe();
  const moving = active && !reduced;
  const people: [number, number][] = [[200, 81], [314, 139], [322, 270], [200, 333], [78, 270], [86, 139]];
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full w-full overflow-visible">
      {[95, 157].map((r) => <circle key={r} cx="200" cy="200" r={r} fill="none" className="stroke-primary/35" strokeWidth="1" strokeDasharray={r === 157 ? "3 7" : undefined} />)}
      {people.map(([x, y], i) => (
        <g key={i}>
          <motion.path d={`M200 200 Q${(x + 200) / 2 + (i % 2 ? 20 : -20)} ${(y + 200) / 2} ${x} ${y}`} fill="none" className="stroke-accent/55" strokeWidth="1.3"
            initial={false} animate={{ pathLength: moving ? 1 : 0.75 }} transition={{ duration: 1.6, delay: i * 0.12 }} />
          <circle cx={x} cy={y} r="20" className="fill-background stroke-primary/65" strokeWidth="1" />
          <circle cx={x} cy={y - 5} r="5" className="fill-foreground/85" />
          <path d={`M${x - 9} ${y + 10}q0 -11 9 -11t9 11`} fill="none" className="stroke-foreground/85" strokeWidth="2" strokeLinecap="round" />
          <motion.circle cx={x} cy={y} r="24" fill="none" className="stroke-accent/40" strokeWidth="1"
            animate={moving ? { opacity: [0, 0.8, 0], scale: [0.85, 1.16, 0.85] } : { opacity: 0.35 }} style={{ transformOrigin: `${x}px ${y}px` }} transition={{ duration: 3.5, delay: i * 0.45, repeat: Infinity }} />
        </g>
      ))}
      <circle cx="200" cy="200" r="45" className="fill-background stroke-accent/65" strokeWidth="1.5" />
      <circle cx="200" cy="188" r="11" className="fill-accent" />
      <path d="M178 226q0 -23 22 -23t22 23" fill="none" className="stroke-accent" strokeWidth="5" strokeLinecap="round" />
      <circle cx="200" cy="200" r="66" fill="none" className="stroke-accent/25" strokeWidth="1" />
    </svg>
  );
}
