import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { ExpoCard, Panel } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { EXPO_EXPERIENCES } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/expo")({
  component: ExpoPage,
  head: () =>
    pageHead({
      title: "KEDEM Expo & Innovation",
      description:
        "Three distinct experiences at KEDEM 2027: the competitive Project Expo, the Startup Expo exhibition floor, and the curated AOS Future Tech 20 showcase.",
      path: "/expo",
    }),
});

const COMPARISON = [
  {
    title: "PROJECT EXPO",
    nature: "Competition",
    entry: "Open submission, then screening and shortlisting",
    outcome: "Judged, evaluated, winners announced",
  },
  {
    title: "STARTUP EXPO",
    nature: "Exhibition",
    entry: "Application to exhibit",
    outcome: "Visibility, industry and ecosystem connections",
  },
  {
    title: "AOS FUTURE TECH 20",
    nature: "Curated showcase",
    entry: "Selection by AOS — approximately 20 innovations",
    outcome: "Featured on the KEDEM stage and platform",
  },
];

function ExpoPage() {
  return (
    <>
      <PageHero
        eyebrow="KEDEM Expo & Innovation"
        title={
          <>
            Don't just listen.
            <br />
            Experience the future.
          </>
        }
        lead="A competition, an exhibition floor and a curated selection — three distinct experiences, each with its own purpose and pathway."
      >
        <ButtonLink to="/contact" size="lg">
          Participate
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {EXPO_EXPERIENCES.map((e, i) => (
            <ExpoCard key={e.id} index={i} {...e} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="The distinction"
          title="They are not three versions of the same thing."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {COMPARISON.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <Panel interactive={false} className="h-full">
                <h3 className="font-display text-xl font-bold">{c.title}</h3>
                <dl className="mt-6 grid gap-4 text-sm">
                  <div>
                    <dt className="eyebrow">Nature</dt>
                    <dd className="mt-1 text-muted-foreground">{c.nature}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">How you enter</dt>
                    <dd className="mt-1 text-muted-foreground">{c.entry}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Outcome</dt>
                    <dd className="mt-1 text-muted-foreground">{c.outcome}</dd>
                  </div>
                </dl>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
