import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { X } from "lucide-react";

import dots from "@/data/world-dots.json";
import { Button } from "@/components/ui/ActionButton";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

// Natural Earth land outlines sampled on an equirectangular grid. Every dot sits on land.
// Connections indicate geographic reach, not confirmed attendees or partners.
const W = 1200;
const H = 560;
const project = (lon: number, lat: number): [number, number] => [((lon + 180) / 360) * W, ((85 - lat) / 145) * H];
const VIZAG = project(83.2185, 17.6868);
const REGIONS = [
  { id: "north-america", label: "North America", coords: [-100, 40] },
  { id: "south-america", label: "South America", coords: [-58, -15] },
  { id: "europe", label: "Europe", coords: [12, 49] },
  { id: "africa", label: "Africa", coords: [20, 0] },
  { id: "west-asia", label: "West Asia", coords: [47, 30] },
  { id: "east-asia", label: "East Asia", coords: [112, 33] },
  { id: "oceania", label: "Oceania", coords: [134, -25] },
] as const;

function route(to: [number, number]) {
  const dx = to[0] - VIZAG[0];
  const dy = to[1] - VIZAG[1];
  const bend = Math.min(115, Math.abs(dx) * 0.14 + Math.abs(dy) * 0.13);
  return `M ${VIZAG[0]} ${VIZAG[1]} Q ${(VIZAG[0] + to[0]) / 2} ${(VIZAG[1] + to[1]) / 2 - bend} ${to[0]} ${to[1]}`;
}

export function WorldMap({ interactive = true, className, ambient = false }: { interactive?: boolean; className?: string; ambient?: boolean }) {
  const [hover, setHover] = useState<string | null>(null);
  const [picked, setPicked] = useState<(typeof REGIONS)[number] | null>(null);
  const reduced = useReducedMotionSafe();
  const id = useId().replace(/:/g, "");
  const active = hover ?? picked?.id;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-md border border-border bg-surface/40", ambient && "border-0 bg-transparent", className)}>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role={ambient ? undefined : "img"} aria-label={ambient ? undefined : "Geographically mapped land dots and conceptual routes from Visakhapatnam to world regions"} aria-hidden={ambient ? true : undefined}>
        <defs>
          <linearGradient id={`${id}-route`} x1="0%" x2="100%">
            <stop stopColor="var(--primary)" /><stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
          <radialGradient id={`${id}-origin`}>
            <stop stopColor="var(--accent)" stopOpacity=".35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g fill="currentColor" className="text-foreground">
          {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={ambient ? 1.8 : 2} opacity={ambient ? 0.3 : 0.32} />)}
        </g>
        {REGIONS.map((region, i) => {
          const destination = project(region.coords[0], region.coords[1]);
          const selected = active === region.id;
          return (
            <g key={region.id}>
              <motion.path d={route(destination)} fill="none" stroke={`url(#${id}-route)`} strokeWidth={selected ? 2.8 : 1.5} initial={reduced ? false : { pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: selected ? 1 : 0.7 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1.5, delay: reduced ? 0 : i * 0.13, ease: [0.16, 1, 0.3, 1] }} />
              <circle cx={destination[0]} cy={destination[1]} r={selected ? 6 : 4} fill="var(--accent)" />
              {!reduced && <circle cx={destination[0]} cy={destination[1]} r="4" fill="none" stroke="var(--accent)" className="map-pulse" style={{ animationDelay: `${i * 0.3}s` }} />}
            </g>
          );
        })}
        <circle cx={VIZAG[0]} cy={VIZAG[1]} r="56" fill={`url(#${id}-origin)`} />
        <circle cx={VIZAG[0]} cy={VIZAG[1]} r="7" fill="var(--primary)" stroke="var(--accent)" strokeWidth="2" />
        {!ambient && <text x={VIZAG[0] + 15} y={VIZAG[1] + 24} fill="currentColor" fontSize="13" fontWeight="700" className="font-display" letterSpacing="2">VIZAG</text>}
      </svg>
      {interactive && !ambient && REGIONS.map((region) => {
        const [x, y] = project(region.coords[0], region.coords[1]);
        return (
          <button key={region.id} type="button" aria-label={`${region.label}: connection to be announced`} title={region.label} className="absolute z-10 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:bg-accent/20" style={{ left: `${x / W * 100}%`, top: `${y / H * 100}%` }} onMouseEnter={() => setHover(region.id)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(region.id)} onBlur={() => setHover(null)} onClick={() => setPicked(region)} />
        );
      })}
      {interactive && !ambient && <AnimatePresence>
        {picked && <motion.div key={picked.id} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between gap-3 rounded-md border border-accent/40 bg-background/95 p-3 shadow-depth backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:w-72" role="status">
          <div><p className="eyebrow text-[0.6rem]">{picked.label}</p><p className="mt-1 font-display text-xs font-bold uppercase">Connection to be announced</p></div>
          <Button type="button" variant="ghost" size="sm" magnetic={false} className="h-9 w-9 shrink-0 p-0" onClick={() => setPicked(null)} aria-label="Close connection detail"><X size={16} /></Button>
        </motion.div>}
      </AnimatePresence>}
      {!ambient && <p className="pointer-events-none absolute bottom-3 left-3 hidden text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground sm:block">Vizag · 17.6868° N, 83.2185° E</p>}
    </div>
  );
}
