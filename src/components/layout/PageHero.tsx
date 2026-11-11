import type { ReactNode } from "react";

import { QuantumField } from "@/components/visuals/QuantumField";
import { WorldMap } from "@/components/visuals/WorldMap";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border px-5 pb-12 pt-32 sm:px-8 lg:pb-16 lg:pt-40">
      <div aria-hidden="true" className="veil absolute inset-0" />
       <QuantumField className="opacity-20" density={0.25} />
       <div className="pointer-events-none absolute -right-[38%] top-28 w-[125%] max-w-[1000px] opacity-25 sm:-right-[24%] sm:opacity-40 lg:-right-[11%] lg:top-24 lg:w-[73%] lg:opacity-75" aria-hidden="true">
         <WorldMap interactive={false} ambient />
       </div>
       <div className="relative mx-auto w-full max-w-7xl pb-14 sm:pb-20 lg:pb-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
           <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.02] drop-shadow-lg sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          ) : null}
           {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </div>
       <div className="relative mx-auto flex max-w-7xl items-center gap-3 border-t border-border pt-5 font-display text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:gap-5 sm:text-xs" aria-label="From Vizag to the world">
         <span className="shrink-0 text-foreground">VISAKHAPATNAM</span>
         <span className="relative h-px max-w-44 flex-1 bg-gradient-brand"><span className="absolute -top-1 right-0 h-2 w-2 rounded-full bg-accent" /></span>
         <span className="shrink-0 text-accent">THE WORLD</span>
         <span className="ml-auto hidden text-[0.6rem] text-muted-foreground md:block">17.6868° N / 83.2185° E</span>
       </div>
    </section>
  );
}
