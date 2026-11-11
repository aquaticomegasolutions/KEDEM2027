import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { ParticipationHub, PartnersEcosystem, SignatureMoments, WhyVizag } from "@/components/sections/HomeChapters";
import { WorldMap } from "@/components/visuals/WorldMap";
import { AIVisual, MindsetVisual, QuantumVisual } from "@/components/visuals/PillarVisuals";
import { ButtonLink } from "@/components/ui/ActionButton";
import { CountUp, GeoCorner, GeoDivider } from "@/components/ui/Premium";
import { QRBlock } from "@/components/ui/QRBlock";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AWARD_CATEGORIES,
  FUTURE_TECH_CATEGORIES,
  FUTURE_TECH_PROJECTS,
  GLOBAL_DIMENSIONS,
  PANELS,
  PILLARS,
  SUMMIT,
} from "@/data/kedem";
import { cn } from "@/lib/utils";

const HOME_TITLE = "KEDEM 2027 | Global Technology & Innovation Summit | Vizag";
const HOME_DESC =
  "KEDEM Global Technology & Innovation Summit 2027 brings Quantum, AI and Mindset together in Visakhapatnam — connecting technology, innovation, startups and future talent from Vizag to the world.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: "KEDEM 2027" },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KEDEM 2027" },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const EASE = [0.16, 1, 0.3, 1] as const;

function Home() {
  return (
    <>
      <Hero />
      <WhyKedem />
      <Pillars />
      <WhyVizag />
      <Journey />
      <SignatureConversations />
      <ExpoWorld />
      <GlobalConnect />
      <FutureTalent />
      <SignatureMoments />
      <Awards />
      <ParticipationHub />
      <PartnersEcosystem />
      <ConnectAOS />
    </>
  );
}

/* ---------------- WHY KEDEM (light, editorial) ---------------- */
function WhyKedem() {
  const lines = [
    "Technology is moving faster than ever.",
    "Quantum is redefining what is possible.",
    "AI is redefining what can be built.",
    "But technology alone does not define the future.",
  ];
  return (
    <section id="why" className="theme-light relative overflow-hidden px-5 pb-24 pt-0 sm:px-8 lg:pb-36">
      {/* The hero's particle field collapses into a single point, which expands into the manifesto. */}
      <div aria-hidden="true" className="relative mx-auto flex h-40 max-w-7xl items-center justify-center lg:h-56">
        <motion.span
          initial={{ scale: 6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: EASE }}
          className="h-3 w-3 rounded-full bg-gradient-brand shadow-glow"
        />
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
          className="absolute inset-x-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        />
      </div>
      <GeoCorner className="right-0 top-0 rotate-90" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="origin-left lg:sticky lg:top-28 lg:self-start"
        >
          <p className="eyebrow">01 — The Manifesto</p>
          <h2 className="mt-5 font-display text-6xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-8xl">
            Why
            <br />
            KEDEM?
          </h2>
        </motion.div>
        <div>
          <ul className="grid gap-5">
            {lines.map((l, i) => (
              <motion.li
                key={l}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                className="border-b border-border pb-5 text-xl font-medium text-foreground/80 sm:text-3xl"
              >
                {l}
              </motion.li>
            ))}
          </ul>
          <motion.p
            initial={{ opacity: 0, scale: 0.94, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, scale: 1, letterSpacing: "-0.02em" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
            className="mt-10 origin-left font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl"
          >
            The mindset
            <br />
            behind it <span className="text-gradient-brand">does.</span>
          </motion.p>
        </div>
      </div>
      <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {[
          [3, "Pillars"],
          [14, "Programme moments"],
          [3, "Signature panels"],
          [20, "Future Tech selections"],
        ].map(([n, l], i) => (
          <Reveal key={l as string} delay={i * 0.08} className="border-t border-foreground/20 pt-5">
            <CountUp to={n as number} className="block font-display text-7xl font-bold leading-none tracking-[-0.05em] sm:text-8xl lg:text-9xl" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* Quantum → AI → Mindset: particles become data structures become human connections. */
function PillarFlow({ active }: { active: number }) {
  const stages = ["Quantum particles", "AI structures", "Human & global connections"];
  return (
    <div className="mt-12 hidden items-center gap-4 lg:flex" aria-hidden="true">
      {stages.map((s, i) => (
        <div key={s} className="flex flex-1 items-center gap-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className={cn("h-10 w-10 transition-all duration-700", i <= active ? "text-accent" : "text-muted-foreground/40")}>
              {i === 0 && [8, 16, 24, 32].map((x, k) => <circle key={k} cx={x} cy={12 + ((k * 7) % 18)} r="2" fill="currentColor" />)}
              {i === 1 && (
                <g stroke="currentColor" strokeWidth="1" fill="currentColor">
                  <line x1="8" y1="10" x2="20" y2="20" /><line x1="8" y1="30" x2="20" y2="20" /><line x1="20" y1="20" x2="32" y2="12" /><line x1="20" y1="20" x2="32" y2="28" />
                  <circle cx="8" cy="10" r="2" /><circle cx="8" cy="30" r="2" /><circle cx="20" cy="20" r="2.5" /><circle cx="32" cy="12" r="2" /><circle cx="32" cy="28" r="2" />
                </g>
              )}
              {i === 2 && (
                <g fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="20" cy="12" r="4" /><path d="M11 32c0-6 4-10 9-10s9 4 9 10" /><circle cx="20" cy="20" r="17" strokeDasharray="2 3" />
                </g>
              )}
            </svg>
            <span className={cn("font-display text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-colors duration-700", i <= active ? "text-foreground" : "text-muted-foreground/50")}>{s}</span>
          </div>
          {i < stages.length - 1 ? (
            <div className="relative h-px flex-1 bg-border">
              <motion.div className="absolute inset-y-0 left-0 bg-gradient-brand" animate={{ width: i < active ? "100%" : "0%" }} transition={{ duration: 0.9, ease: EASE }} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/* ---------------- THREE PILLARS (interactive) ---------------- */
const VISUALS = { quantum: QuantumVisual, ai: AIVisual, mindset: MindsetVisual } as const;

function Pillars() {
  const [active, setActive] = useState(0);
  return (
    <section id="pillars" className="grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="02 — Three Pillars"
          title={<>Quantum. AI. <span className="text-gradient-brand">Mindset.</span></>}
          lead="Three tracks, one argument about the future. Explore each pillar."
        />
        <div className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:h-[36rem] lg:overflow-visible lg:px-0">
          {PILLARS.map((p, i) => {
            const on = active === i;
            const Visual = VISUALS[p.id];
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group relative flex min-h-[32rem] w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-xl border bg-surface/60 p-7 transition-[flex-grow,border-color,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[60%] lg:w-auto lg:min-h-0 lg:shrink",
                  on ? "border-accent/40 bg-surface lg:flex-[2.2]" : "border-border lg:flex-1",
                )}
              >
                <div className={cn("absolute inset-0 transition-opacity duration-700", on ? "opacity-100" : "opacity-40")}>
                  <div className={cn("absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl", p.id === "mindset" ? "bg-accent/20" : "bg-primary/25")} />
                </div>
                <div className={cn("pointer-events-none absolute right-0 top-10 h-64 w-64 text-foreground transition-all duration-700 sm:h-80 sm:w-80", on ? "opacity-100" : "opacity-40 lg:opacity-25")}>
                  <Visual active={on} />
                </div>
                <div className="relative mt-auto">
                  <p className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={cn("mt-2 font-display font-bold tracking-[-0.03em] transition-all duration-700", on ? "text-5xl sm:text-7xl" : "text-5xl")}>
                    {p.name}
                  </h3>
                  <p className="eyebrow mt-3">{p.title}</p>
                  <div className={cn("grid transition-all duration-700", on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0")}>
                    <div className="overflow-hidden">
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                      <ul className="mt-5 flex max-w-lg flex-wrap gap-2">
                        {p.topics.map((t) => (
                          <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">{t}</li>
                        ))}
                      </ul>
                      <ButtonLink to={p.to} variant="outline" size="sm" className="mt-6">
                        Explore {p.name}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground lg:hidden">Swipe to explore →</p>
        <PillarFlow active={active} />
        <Reveal className="mt-16 text-center">
          <p className="font-display text-2xl font-bold uppercase tracking-[0.2em] sm:text-3xl">
            People create <span className="text-gradient-brand">the future.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SIGNATURE CONVERSATIONS (light) ---------------- */
const PANEL_HEAD: [string, string][] = [
  ["QUANTUM + AI", "THE NEXT TECHNOLOGY REVOLUTION"],
  ["FROM VIZAG TO THE WORLD", "BUILDING GLOBAL TECHNOLOGY COMPANIES"],
  ["THE FUTURE OF TALENT", "AI, JOBS & GLOBAL CAREERS"],
];

const P2_THEMES = ["Global Markets", "International Partnerships", "Startup Ecosystem", "Product Innovation", "Investment", "Global Talent"];

function SignatureConversations() {
  const side = PANELS.filter((p) => !p.signature);
  const sig = PANELS.find((p) => p.signature)!;
  const sideIdx = PANELS.map((p, i) => (p.signature ? -1 : i)).filter((i) => i >= 0);
  return (
    <section id="panels" className="theme-light relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="05 — Signature Panels" title="Signature Conversations." lead="Three conversations that define the agenda of the summit." />
          <ButtonLink to="/panels" variant="outline">All panels</ButtonLink>
        </div>

        {/* PANEL 02 — the hero panel */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: EASE }}
          className="theme-deep grain relative mt-14 overflow-hidden rounded-2xl shadow-depth"
        >
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
          <div className="grid lg:grid-cols-[1fr_1.15fr]">
            <div className="relative p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">{sig.label}</span>
                <span className="rounded-full bg-gradient-brand px-3 py-1 font-display text-[0.6rem] font-bold tracking-[0.18em] text-accent-foreground">THE SIGNATURE PANEL</span>
              </div>
              <h3 className="mt-8 font-display text-4xl font-bold leading-[0.92] tracking-[-0.03em] sm:text-6xl">
                <span className="text-gradient-brand">From Vizag to the World</span>
              </h3>
              <p className="mt-3 font-display text-sm font-semibold tracking-[0.14em] text-muted-foreground">BUILDING GLOBAL TECHNOLOGY COMPANIES</p>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {P2_THEMES.map((t, i) => (
                  <motion.li key={t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.07 }} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {t}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative border-t border-border p-4 lg:border-l lg:border-t-0 lg:p-6">
              <WorldMap interactive={false} className="border-0 bg-transparent" />
              <div className="mt-2 flex items-center justify-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-muted-foreground">
                <span className="text-foreground">VIZAG</span><span className="text-accent">→</span><span>INDIA</span><span className="text-accent">→</span><span className="text-gradient-brand">WORLD</span>
              </div>
            </div>
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="border-t border-border px-8 py-10 text-center font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:px-12 sm:text-5xl lg:text-6xl"
          >
            “Can global technology companies <span className="text-gradient-brand">emerge from Vizag?</span>”
          </motion.blockquote>
        </motion.article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {side.map((p, k) => {
            const i = sideIdx[k]!;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: k * 0.12, ease: EASE }}
                whileHover={{ y: -6 }}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-depth sm:p-10"
              >
                <span className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">{p.label}</span>
                <h3 className="mt-10 font-display text-3xl font-bold leading-[0.95] tracking-[-0.02em] sm:text-4xl">{PANEL_HEAD[i]![0]}</h3>
                <p className="mt-3 font-display text-sm font-semibold tracking-[0.12em] text-muted-foreground">{PANEL_HEAD[i]![1]}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {p.points.slice(0, 4).map((pt) => (
                    <li key={pt} className="rounded-full border border-border px-3 py-1 text-xs">{pt}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- KEDEM EXPO & INNOVATION (largest) ---------------- */
const FLOW = ["IDEA", "BUILD", "SUBMIT", "SHORTLIST", "EXHIBIT", "EVALUATE", "WIN"];
const STARTUP_CONCEPTS = ["Founder", "Product", "Technology", "Market", "Capital", "Global"];

function ExpoWorld() {
  const [cat, setCat] = useState<string>("ALL");
  const slots = FUTURE_TECH_PROJECTS.slice(0, 20);
  return (
    <section id="expo" className="theme-deep grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">05 — KEDEM Expo &amp; Innovation</p>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Don't just listen.
            <br />
            <span className="text-gradient-brand">Experience the future.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">Three distinct worlds — a competition, an exhibition floor, and a curated showcase.</p>
        </Reveal>

        {/* Project Expo */}
        <ExpoBlock no="01" title="PROJECT EXPO" words={["Build.", "Demonstrate.", "Compete.", "Win."]} to="/project-expo" cta="Submit your project">
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <p className="eyebrow">Exciting Prizes</p>
            <p className="mt-2 font-display text-2xl font-bold">PRIZES — TO BE ANNOUNCED</p>
          </div>
          <ol className="mt-6 flex flex-wrap items-center gap-2">
            {FLOW.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className={cn("rounded-md border px-3 py-2 font-display text-[0.7rem] font-bold tracking-[0.14em]", f === "WIN" ? "border-accent bg-accent text-accent-foreground" : "border-border")}>{f}</span>
                {i < FLOW.length - 1 ? <span aria-hidden="true" className="text-accent">→</span> : null}
              </motion.li>
            ))}
          </ol>
        </ExpoBlock>

        {/* Startup Expo */}
        <ExpoBlock no="02" title="STARTUP EXPO" words={["Exhibit.", "Connect.", "Scale."]} to="/startup-expo" cta="Exhibit at Startup Expo" flip>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {STARTUP_CONCEPTS.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-border bg-surface/70 p-5 transition-colors hover:border-primary/50"
              >
                <span className="font-display text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-6 font-display text-lg font-bold">{c}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Visibility and ecosystem connections — no guaranteed investment, funding or partnerships.</p>
        </ExpoBlock>

        {/* Future Tech 20 */}
        <div className="mt-28 border-t border-border pt-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="font-display text-sm text-muted-foreground">03</p>
              <h3 className="mt-2 font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl">AOS FUTURE TECH 20</h3>
              <p className="mt-3 font-display text-lg font-semibold tracking-[0.12em] text-gradient-brand">20 INNOVATIONS. ONE FUTURE.</p>
            </Reveal>
            <ButtonLink to="/future-tech-20" variant="outline">Explore the wall</ButtonLink>
          </div>
          <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:px-0">
            {["ALL", ...FUTURE_TECH_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={cn("shrink-0 rounded-full border px-4 py-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors", cat === c ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted-foreground hover:text-foreground")}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {slots.map((s, i) => {
              const match = cat === "ALL" || s.category === cat;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: match ? 1 : 0.15 }}
                  whileHover={{ scale: 1.04, zIndex: 2 }}
                  transition={{ duration: 0.4, delay: (i % 5) * 0.04 }}
                  tabIndex={0}
                  className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface/50 p-4 outline-none transition-colors hover:border-accent/60 focus-visible:border-accent lg:aspect-[5/4]"
                >
                  <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <circle cx="78" cy="22" r="18" fill="none" stroke="currentColor" strokeWidth="0.4" />
                    <circle cx="78" cy="22" r="30" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 2" />
                    <circle cx="78" cy="22" r="2" fill="currentColor" />
                  </svg>
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 transition-colors duration-500 group-hover:from-primary/15 group-hover:to-accent/10" />
                  <span className="relative font-display text-4xl font-bold text-foreground/85 transition-transform duration-500 group-hover:-translate-y-1 sm:text-6xl">{String(i + 1).padStart(2, "0")}</span>
                  <span className="relative">
                    <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-accent">{s.category}</span>
                    <span className="mt-1 block max-h-0 overflow-hidden text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100 group-focus-visible:max-h-10 group-focus-visible:opacity-100">
                      Innovation · To Be Announced
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpoBlock({
  no, title, words, to, cta, flip, children,
}: {
  no: string; title: string; words: string[]; to: "/project-expo" | "/startup-expo"; cta: string; flip?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="mt-28 grid gap-12 border-t border-border pt-16 lg:grid-cols-2 lg:items-center">
      <div className={cn(flip && "lg:order-2")}>
        <p className="font-display text-sm text-muted-foreground">{no}</p>
        <h3 className="mt-2 font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl">{title}</h3>
        <ul className="mt-6">
          {words.map((w, i) => (
            <motion.li
              key={w}
              initial={{ opacity: 0, x: flip ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className={cn("font-display text-3xl font-bold uppercase leading-none sm:text-5xl", i === words.length - 1 ? "text-gradient-brand" : "text-foreground/30")}
            >
              {w}
            </motion.li>
          ))}
        </ul>
        <ButtonLink to={to} className="mt-10" size="lg">{cta}</ButtonLink>
      </div>
      <Reveal delay={0.1} className={cn(flip && "lg:order-1")}>{children}</Reveal>
    </div>
  );
}

/* ---------------- GLOBAL CONNECT (cinematic map) ---------------- */
function GlobalConnect() {
  return (
    <section id="global" className="theme-deep grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow">07 — Global Connect</p>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              From Vizag<br /><span className="text-gradient-brand">to the world.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-muted-foreground">An international platform. Global voices — in person and virtually — connecting Visakhapatnam with technology ecosystems worldwide.</p>
            <ButtonLink to="/global-connect" variant="outline" className="mt-6">Global Connect</ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-12">
          <WorldMap />
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {GLOBAL_DIMENSIONS.map((d, i) => (
            <Reveal key={d} delay={i * 0.05} className="bg-background p-4">
              <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em]">{d}</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-accent/80">To Be Announced</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FUTURE TALENT (light, human) ---------------- */
const TALENT = ["Students", "Researchers", "Engineers", "Founders", "Leaders", "Global Talent"];

function FutureTalent() {
  const pts = TALENT.map((_, i) => {
    const a = (i / TALENT.length) * Math.PI * 2 - Math.PI / 2;
    return [50 + Math.cos(a) * 38, 50 + Math.sin(a) * 38] as [number, number];
  });
  return (
    <section className="theme-light relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <GeoDivider className="absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">08 — Future Talent</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl">The future of talent</h2>
          <p className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-7xl">
            AI.<br /><span className="text-foreground/40">Jobs.</span><br /><span className="text-gradient-brand">Global careers.</span>
          </p>
          <p className="mt-6 max-w-md text-muted-foreground">
            From a classroom in Vizag to a career anywhere in the world — KEDEM connects the people who will build what comes next.
          </p>
          <ButtonLink to="/future-talent" className="mt-10">Explore Future Talent</ButtonLink>
        </Reveal>
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full">
            {pts.map((p, i) =>
              pts.slice(i + 1).map((q, j) => (
                <motion.line
                  key={`${i}-${j}`}
                  x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]}
                  stroke="var(--primary)"
                  strokeWidth="0.18"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3 + (i + j) * 0.06 }}
                />
              )),
            )}
            {pts.map((p, i) => (
              <line key={`c${i}`} x1="50" y1="50" x2={p[0]} y2={p[1]} stroke="var(--accent)" strokeWidth="0.35" opacity="0.7" />
            ))}
          </svg>
          <div aria-hidden="true" className="absolute inset-[38%] flex items-center justify-center rounded-full bg-gradient-brand shadow-glow">
            <span className="font-display text-[0.6rem] font-bold tracking-[0.2em] text-accent-foreground sm:text-xs">KEDEM</span>
          </div>
          <ul>
            {TALENT.map((l, i) => (
              <motion.li
                key={l}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: EASE }}
                style={{ left: `${pts[i]![0]}%`, top: `${pts[i]![1]}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold shadow-depth"
              >
                {l}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl text-sm text-muted-foreground">
        Leads into Panel 3 — <Link to="/panels" className="link-underline text-foreground">The Future of Talent: AI, Jobs &amp; Global Careers</Link>
      </p>
    </section>
  );
}

function TrophyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className={className}>
      <path d="M30 14h40v18a20 20 0 0 1-40 0z" />
      <path d="M30 20H18a12 12 0 0 0 12 16M70 20h12a12 12 0 0 1-12 16" />
      <path d="M50 52v18M36 86h28M40 70h20l4 16H36z" />
      <path d="M50 22l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" />
    </svg>
  );
}

/* ---------------- AWARDS (deep, metallic) ---------------- */
function Awards() {
  return (
    <section className="theme-deep grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="eyebrow">08 — Recognition</p>
          <h2 className="mt-5 font-display text-5xl font-bold tracking-[-0.04em] sm:text-7xl">AOS GLOBAL AWARDS</h2>
          <p className="mt-4 font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground sm:text-base">RECOGNISING THOSE BUILDING WHAT COMES NEXT.</p>
        </Reveal>
        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {AWARD_CATEGORIES.map((a, i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 5) * 0.06, ease: EASE }}
              whileHover={{ y: -8 }}
              className={cn("metal group relative flex min-h-[15rem] flex-col overflow-hidden rounded-xl border border-border p-6", i === 14 && "xl:col-span-1 border-accent/40")}
            >
              <TrophyMark className="absolute -right-6 -top-4 h-36 w-36 text-foreground/10 transition-all duration-700 group-hover:rotate-6 group-hover:text-accent/30" />
              <span className="relative font-display text-4xl font-bold text-foreground/25 transition-colors group-hover:text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="relative mt-auto block font-display text-base font-semibold uppercase leading-snug tracking-[0.02em]">
                {/award|honour/i.test(a) ? a : `${a} Award`}
              </span>
              <span className="relative mt-3 block border-t border-border pt-3 text-[0.6rem] uppercase tracking-[0.2em] text-accent/80">Recipient to be announced</span>
            </motion.li>
          ))}
        </ol>
        <Reveal className="mt-10 text-center">
          <ButtonLink to="/awards" variant="outline">View the awards</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONNECT WITH AOS (QR) ---------------- */
function ConnectAOS() {
  return (
    <section id="connect" className="theme-light relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <GeoCorner className="bottom-0 left-0 -rotate-90" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Connect with AOS</p>
          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl">
            One scan.
            <br />
            <span className="text-gradient-brand">Everything AOS.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Official contact and social channels.</p>
          <div className="mt-8 flex flex-col gap-2 text-sm">
            <a href={`mailto:${SUMMIT.email}`} className="link-underline w-fit font-semibold">{SUMMIT.email}</a>
            <a href={SUMMIT.website} target="_blank" rel="noreferrer" className="link-underline w-fit text-muted-foreground">{SUMMIT.websiteLabel}</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/contact" size="lg">Join KEDEM</ButtonLink>
            <ButtonLink to="/partners" variant="outline" size="lg">Become a partner</ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center">
          <motion.div whileHover={{ y: -6 }} className="theme-deep rounded-3xl p-6 shadow-depth sm:p-10">
            <QRBlock framed size={240} caption="Official AOS QR · scan with your phone camera" />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
