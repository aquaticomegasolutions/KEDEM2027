import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { Journey } from "@/components/sections/Journey";
import { ButtonLink } from "@/components/ui/ActionButton";
import { ExpoCard, Panel, PillarCard, StatCard } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { EXPO_EXPERIENCES, PILLARS, SUMMIT } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/summit")({
  component: SummitPage,
  head: () =>
    pageHead({
      title: "The Summit",
      description:
        "What KEDEM 2027 is, who it is for and what happens across both days — Quantum, AI and Mindset tracks, signature panels, expos, awards and global connections, from Vizag to the world.",
      path: "/summit",
    }),
});

const AUDIENCE = [
  "Government & policy leaders",
  "Global technology leaders",
  "CEOs & industry",
  "Investors",
  "Universities & researchers",
  "Startups & founders",
  "International speakers",
  "Students & young innovators",
  "Media",
];

function SummitPage() {
  return (
    <>
      <PageHero
        eyebrow="The Summit"
        title={
          <>
            A global technology summit,
            <br />
            built in Visakhapatnam.
          </>
        }
        lead={`${SUMMIT.full} — ${SUMMIT.theme}. One day that connects quantum capability, applied AI and the mindset required to turn both into companies, careers and national capability.`}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact" size="lg">
            Participate
          </ButtonLink>
          <ButtonLink to="/connect" variant="outline" size="lg">
            Get summit updates
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="JAN 8–9" label="Date" note="2027 · Two days in Visakhapatnam." />
          <StatCard value="VIZAG" label="Venue" note={SUMMIT.venue} />
          <StatCard value="3" label="Tracks" note="Quantum • AI • Mindset" />
          <StatCard value="15" label="Global awards" note="Recipients to be announced." />
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader
          eyebrow="What is KEDEM"
          title="Technology is moving faster than the thinking around it."
          lead="KEDEM exists to close that gap. It brings quantum and AI capability into the same room as the founders, students, researchers and leaders who have to apply it — and does so from a city that intends to build for the world, not only for itself."
        />
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader eyebrow="Three Pillars" title="The programme architecture." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.id} index={i} {...p} />
          ))}
        </div>
      </Section>

      <Journey />

      <Section className="border-t border-border">
        <SectionHeader
          eyebrow="Experience"
          title="Three ways to experience innovation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {EXPO_EXPERIENCES.map((e, i) => (
            <ExpoCard key={e.id} index={i} {...e} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader eyebrow="Who it is for" title="The room KEDEM is building." />
        <Reveal className="mt-10 flex flex-wrap gap-3">
          {AUDIENCE.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {a}
            </span>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Panel interactive={false} className="text-center">
            <p className="font-display text-2xl font-bold sm:text-3xl">
              “{SUMMIT.statement}”
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-muted-foreground">
              {SUMMIT.tagline}
            </p>
          </Panel>
        </Reveal>
      </Section>
    </>
  );
}
