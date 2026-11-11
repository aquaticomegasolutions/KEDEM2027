import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { PanelCard } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { PANELS } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/panels")({
  component: PanelsPage,
  head: () =>
    pageHead({
      title: "Signature Panels",
      description:
        "Three signature panel discussions at KEDEM 2027: Quantum + AI, From Vizag to the World — Building Global Technology Companies, and The Future of Talent: AI, Jobs & Global Careers.",
      path: "/panels",
    }),
});

function PanelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature Panels"
        title="Signature panel discussions."
        lead="Three conversations, chosen because they decide what happens next: the technology, the companies, and the people."
      />

      <Section>
        <div className="grid gap-6">
          {PANELS.map((p, i) => (
            <PanelCard key={p.id} index={i} {...p} />
          ))}
        </div>
        <Reveal className="mt-12">
          <SectionHeader
            eyebrow="Panellists"
            title="Panellists to be announced."
            lead="Panellists are published only once participation is officially confirmed. Propose a speaker or expert through the participation form."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/contact">Speaker / expert enquiry</ButtonLink>
            <ButtonLink to="/speakers" variant="outline">
              Speaker directory
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
