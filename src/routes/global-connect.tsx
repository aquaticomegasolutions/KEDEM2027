import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Panel } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { WorldMap } from "@/components/visuals/WorldMap";
import { GLOBAL_DIMENSIONS } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/global-connect")({
  component: GlobalConnectPage,
  head: () =>
    pageHead({
      title: "Global Connect — From Vizag to the World",
      description:
        "The international dimension of KEDEM 2027: global keynotes, international panellists, universities, startups, industry leaders and awardees connecting Visakhapatnam with the world.",
      path: "/global-connect",
    }),
});

function GlobalConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Connect"
        title={
          <>
            From Vizag
            <br />
            to the world.
          </>
        }
        lead="KEDEM is designed as an international platform. Visakhapatnam is not the edge of the technology map — it is a point on it, connected outward."
      >
        <ButtonLink to="/contact" size="lg">
          International participation enquiry
        </ButtonLink>
      </PageHero>

      <Section>
        <Reveal>
          <WorldMap />
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader
          eyebrow="International dimension"
          title="Six ways the world takes part."
          lead="Each of these is populated only when participation is officially confirmed. Nothing is claimed in advance."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_DIMENSIONS.map((d, i) => (
            <Reveal key={d} delay={i * 0.05} className="h-full">
              <Panel className="h-full p-6">
                <h3 className="text-lg font-semibold">{d}</h3>
                <p className="mt-3 inline-flex rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  To Be Announced
                </p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="Virtual participation"
          title="Distance is not a barrier to contribution."
          lead="Virtual participation may form part of the international dimension of KEDEM — allowing global speakers, universities and organisations to take part without travelling to Visakhapatnam."
          align="center"
        />
      </Section>
    </>
  );
}
