import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Panel, PanelCard } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { PANELS } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/future-talent")({
  component: FutureTalentPage,
  head: () =>
    pageHead({
      title: "The Future of Talent — AI, Jobs & Global Careers",
      description:
        "KEDEM 2027 on future skills, AI and employability: how universities, industry and talent leaders prepare people for global careers in an AI-shaped economy.",
      path: "/future-talent",
    }),
});

const THREADS = [
  {
    title: "Future skills",
    body: "Which capabilities hold their value as AI absorbs routine work — and how they are taught, not just talked about.",
  },
  {
    title: "AI",
    body: "AI as a coworker, not a headline: what changes inside real roles, teams and organisations.",
  },
  {
    title: "Employability",
    body: "The distance between a degree and a job offer, and what closes it.",
  },
  {
    title: "Global careers",
    body: "Building an international career from an Indian city — remotely, or by moving.",
  },
  {
    title: "Industry",
    body: "What employers actually hire for now, stated plainly by the people who sign the offers.",
  },
  {
    title: "Universities",
    body: "Curriculum, research and industry partnership as the supply side of talent.",
  },
  {
    title: "Talent leaders",
    body: "Global HR and talent leadership perspectives on the next decade of work.",
  },
];

function FutureTalentPage() {
  const panel3 = PANELS[2];

  return (
    <>
      <PageHero
        eyebrow="Future Talent"
        title={
          <>
            The future of talent.
            <br />
            <span className="text-gradient-brand">AI. Jobs. Global careers.</span>
          </>
        }
        lead="Technology changes what work is. This track of KEDEM is about the people who have to live through that change — and the institutions responsible for preparing them."
      >
        <ButtonLink to="/panels" size="lg">
          Signature panels
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader eyebrow="The threads" title="Seven connected questions." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THREADS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05} className="h-full">
              <Panel className="h-full">
                <h3 className="font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="Leads into"
          title="Panel 3 at the summit."
          lead="This track culminates in the third signature panel of KEDEM."
        />
        <div className="mt-12">
          <PanelCard index={0} {...panel3} />
        </div>
      </Section>
    </>
  );
}
