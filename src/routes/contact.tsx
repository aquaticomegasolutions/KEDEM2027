import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { Panel } from "@/components/ui/Cards";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { QRBlock } from "@/components/ui/QRBlock";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { PARTICIPATION_PATHWAYS, SUMMIT } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageHead({
      title: "Participate & Contact",
      description:
        "Participation pathways for KEDEM 2027: attend the summit, enter the Project Expo, exhibit at the Startup Expo, nominate for Future Tech 20, partner with us or propose a speaker.",
      path: "/contact",
    }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Participate"
        title="Choose how you join KEDEM."
        lead="Six pathways into the summit. Pick one, tell us a little, and the AOS team will follow up."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <EnquiryForm pathways={PARTICIPATION_PATHWAYS} />

          <div className="grid gap-6">
            <Reveal>
              <Panel interactive={false}>
                <p className="eyebrow">Official contact</p>
                <a
                  href={`mailto:${SUMMIT.email}`}
                  className="mt-4 block text-lg text-accent hover:underline"
                >
                  {SUMMIT.email}
                </a>
                <a
                  href={SUMMIT.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm text-muted-foreground hover:text-accent"
                >
                  {SUMMIT.websiteLabel}
                </a>
                <p className="mt-6 text-sm text-muted-foreground">
                  {SUMMIT.organizer}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </Panel>
            </Reveal>
            <Reveal delay={0.1}>
              <Panel interactive={false} className="flex justify-center">
                <QRBlock size={170} />
              </Panel>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="Pathways"
          title="What each pathway means."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTICIPATION_PATHWAYS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04} className="h-full">
              <Panel className="h-full p-6">
                <h3 className="font-display text-sm font-bold tracking-[0.14em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
