import { motion } from "motion/react";

import coast from "@/assets/vizag-coast.jpg";
import port from "@/assets/vizag-port.jpg";
import talent from "@/assets/vizag-talent.jpg";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNER_CATEGORIES } from "@/data/kedem";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------- WHY VIZAG? ---------------- */
const VIZAG_STORY = ["Vizag", "Technology", "Talent", "Innovation", "Global"];
const VIZAG_THEMES = [
  ["Technology", "A city building its place in the digital and deeptech economy."],
  ["Talent", "Universities and young engineers ready for global careers."],
  ["Entrepreneurship", "Founders turning local ideas into products for the world."],
  ["Industry", "A long industrial and maritime heritage meeting new technology."],
  ["Connectivity", "A coastal gateway — port, air and sea links to the world."],
  ["Coastal identity", "Between the Eastern Ghats and the Bay of Bengal, looking outward."],
];

export function WhyVizag() {
  return (
    <section id="why-vizag" className="theme-light relative overflow-hidden">
      <div className="relative h-[70svh] min-h-[28rem] overflow-hidden">
        <motion.img
          src={coast}
          alt="Visakhapatnam coastline and skyline at blue hour"
          width={1600}
          height={912}
          loading="lazy"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 sm:px-8">
          <Reveal>
            <p className="eyebrow">03 — The City</p>
            <h2 className="mt-4 font-display text-6xl font-bold leading-[0.88] tracking-[-0.05em] sm:text-8xl lg:text-9xl">
              Why <span className="text-gradient-brand">Vizag?</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Visakhapatnam is not simply where KEDEM happens.{" "}
              <span className="text-muted-foreground">It is part of the idea behind KEDEM.</span>
            </p>
            <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              {VIZAG_STORY.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.2em]"
                >
                  <span className={i === VIZAG_STORY.length - 1 ? "text-gradient-brand" : ""}>{s}</span>
                  {i < VIZAG_STORY.length - 1 ? <span aria-hidden="true" className="text-accent">→</span> : null}
                </motion.li>
              ))}
            </ol>
            <dl className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {VIZAG_THEMES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.05} className="border-t border-border pt-4">
                  <dt className="font-display text-sm font-bold uppercase tracking-[0.14em]">{t}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[
              [port, "Visakhapatnam port at night — the city's gateway to the world", "mt-12"],
              [talent, "Young engineers collaborating on a hardware prototype", ""],
            ].map(([src, alt, cls]) => (
              <motion.figure
                key={alt}
                initial={{ opacity: 0, y: 40, clipPath: "inset(20% 0 0 0)" }}
                whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, ease: EASE }}
                className={`group overflow-hidden rounded-xl ${cls}`}
              >
                <img src={src} alt={alt} width={1024} height={1280} loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SIGNATURE MOMENTS (event trailer) ---------------- */
const MOMENTS = [
  "Global Keynote", "Quantum Frontier", "AI Future", "Live Projects", "Startup Floor",
  "Global Connections", "Future Talent", "Global Awards", "Networking Dinner",
];

export function SignatureMoments() {
  const loop = [...MOMENTS, ...MOMENTS];
  return (
    <section aria-labelledby="moments-title" className="theme-deep grain relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">09 — Signature Moments</p>
          <h2 id="moments-title" className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-7xl">
            One day. <span className="text-gradient-brand">Nine moments</span> you will remember.
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee flex w-max gap-5 px-5">
          {loop.map((m, i) => (
            <li
              key={`${m}-${i}`}
              aria-hidden={i >= MOMENTS.length}
              className="group relative flex h-72 w-64 shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/50 sm:h-80 sm:w-72"
            >
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-700 group-hover:bg-accent/25" />
              <span className="relative font-display text-5xl font-bold text-foreground/15">{String((i % MOMENTS.length) + 1).padStart(2, "0")}</span>
              <span className="relative">
                <span className="block h-px w-10 bg-gradient-brand transition-all duration-500 group-hover:w-20" />
                <span className="mt-4 block font-display text-2xl font-bold uppercase leading-tight">{m}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- PARTICIPATION HUB ---------------- */
const HUB = [
  { t: "Attend", d: "Join global leaders, researchers, founders and students in Vizag.", to: "/contact", cta: "Register interest" },
  { t: "Speak", d: "Share expertise on Quantum, AI or Mindset. Speaker & expert enquiries.", to: "/contact", cta: "Enquire" },
  { t: "Exhibit", d: "Put your startup on the KEDEM exhibition floor.", to: "/startup-expo", cta: "Startup Expo" },
  { t: "Build", d: "Compete with your project at the Project Expo.", to: "/project-expo", cta: "Submit a project" },
  { t: "Partner", d: "Build the future with AOS as an ecosystem partner.", to: "/partners", cta: "Become a partner" },
  { t: "Sponsor", d: "Title, gold, silver and associate opportunities.", to: "/partners", cta: "Sponsorship" },
  { t: "Connect", d: "Official AOS contact and social channels — one scan.", to: "/connect", cta: "Connect" },
] as const;

export function ParticipationHub() {
  return (
    <section id="participate" className="theme-light relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">11 — Participate</p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-7xl">
            How can you be <span className="text-gradient-brand">part of KEDEM?</span>
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {HUB.map((h, i) => (
            <motion.li
              key={h.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.7, ease: EASE }}
              className={`group relative flex min-h-[15rem] flex-col bg-background p-7 transition-colors duration-500 hover:bg-surface ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <span className="font-display text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">{h.t}</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{h.d}</p>
              <ButtonLink to={h.to} variant="link" size="sm" className="mt-auto w-fit px-0 pt-6">{h.cta}</ButtonLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ECOSYSTEM ---------------- */
export function PartnersEcosystem() {
  return (
    <section id="partners" className="theme-deep grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">12 — Partner Ecosystem</p>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-7xl">
              Build the future <span className="text-gradient-brand">with us.</span>
            </h2>
          </Reveal>
          <ButtonLink to="/partners">Become a partner</ButtonLink>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {PARTNER_CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.05} className={`group bg-background p-6 transition-colors hover:bg-surface`}>
              <p className="eyebrow">{c.name}</p>
              <div className="mt-8 flex h-16 items-center justify-center rounded-md border border-dashed border-border text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:border-accent/50">
                To Be Announced
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">Partners to be announced</p>
      </div>
    </section>
  );
}
