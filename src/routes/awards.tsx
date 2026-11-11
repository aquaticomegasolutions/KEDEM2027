import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { AwardCard, Panel } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { AWARD_CATEGORIES } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/awards")({
  component: AwardsPage,
  head: () =>
    pageHead({
      title: "AOS Global Awards",
      description:
        "Fifteen AOS Global Awards at KEDEM 2027 recognising technology leadership, AI and quantum excellence, entrepreneurship, research, women in technology, social impact and global innovation.",
      path: "/awards",
    }),
});

function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="AOS Global Awards"
        title="Recognising those building what comes next."
        lead="Fifteen honours presented at KEDEM 2027. Recipients are announced only once officially confirmed."
      >
        <ButtonLink to="/contact" size="lg">
          Awards enquiry
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AWARD_CATEGORIES.map((a, i) => (
            <AwardCard key={a} name={a} index={i} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <Reveal>
          <Panel interactive={false} className="py-14 text-center">
            <p className="eyebrow">Recipients</p>
            <p className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              To Be Announced
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              No awardee, nomination outcome or jury decision is published before it
              is officially confirmed by AOS.
            </p>
          </Panel>
        </Reveal>
      </Section>
    </>
  );
}
