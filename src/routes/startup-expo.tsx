import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Panel } from "@/components/ui/Cards";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { PARTICIPATION_PATHWAYS, STARTUP_CATEGORIES } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/startup-expo")({
  component: StartupExpoPage,
  head: () =>
    pageHead({
      title: "Startup Expo — Exhibit. Connect. Scale.",
      description:
        "The KEDEM 2027 Startup Expo for founders, deeptech ventures, AI and quantum startups, healthtech, sustainability ventures and university spin-offs.",
      path: "/startup-expo",
    }),
});

const BLOCKS = [
  {
    title: "Why exhibit?",
    body: "KEDEM places your venture in front of a technology-focused audience of industry, academia, students and ecosystem partners — in a summit built around quantum, AI and applied innovation.",
  },
  {
    title: "Exhibition experience",
    body: "A dedicated exhibition area within the summit, designed for live demonstrations and sustained conversation rather than passive booth traffic.",
  },
  {
    title: "Founder visibility",
    body: "Founders are visible on the summit floor and across KEDEM's platform. Speaking and showcase opportunities are confirmed separately.",
  },
  {
    title: "Industry connect",
    body: "Structured proximity to industry participants attending the summit programme.",
  },
  {
    title: "Investor / ecosystem connect",
    body: "Investor and ecosystem participation is being developed. Confirmed opportunities are published here as they are finalised.",
  },
  {
    title: "Media & networking",
    body: "Networking sessions, the networking lunch and the global networking dinner form part of the summit programme.",
  },
];

function StartupExpoPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup Expo"
        title="Exhibit. Connect. Scale."
        lead="An exhibition floor for startups, founders and technology companies building what comes next."
      >
        <ButtonLink to="/contact" size="lg">
          Exhibit at Startup Expo
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05} className="h-full">
              <Panel className="h-full">
                <h2 className="font-display text-lg font-bold">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </Panel>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-xs text-muted-foreground">
            Only confirmed benefits are listed. Nothing on this page is a guarantee of
            investment, coverage or partnership.
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader eyebrow="Startup categories" title="Who exhibits at KEDEM." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STARTUP_CATEGORIES.map((c, i) => (
            <Reveal key={c} delay={Math.min(i * 0.04, 0.25)} className="h-full">
              <Panel className="h-full p-5">
                <p className="text-sm font-semibold">{c}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader eyebrow="Apply" title="Apply to exhibit." />
        <EnquiryForm
          className="mt-10"
          pathways={PARTICIPATION_PATHWAYS}
          defaultPathway="startup-expo"
        />
      </Section>
    </>
  );
}
