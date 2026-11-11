import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { PartnerLogo } from "@/components/ui/Cards";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { PARTICIPATION_PATHWAYS, PARTNER_CATEGORIES } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () =>
    pageHead({
      title: "Partners — Build the Future With Us",
      description:
        "Partnership and sponsorship at KEDEM 2027: title, gold, silver and associate sponsors, industry partners and exhibition partners for the global technology and innovation summit in Visakhapatnam.",
      path: "/partners",
    }),
});

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Build the future with us."
        lead="KEDEM is built with organisations that want Visakhapatnam connected to the global technology economy. Partner categories are open."
      />

      <Section>
        <div className="grid gap-14">
          {PARTNER_CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 0.04}>
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <h2 className="font-display text-lg font-bold tracking-[0.16em]">
                    {cat.name}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Open
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {Array.from({ length: cat.slots }, (_, i) => (
                    <PartnerLogo key={i} label="Partner logo — to be announced" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="Become a partner"
          title="Partner with KEDEM 2027."
          lead="Tell us about your organisation and the category you are interested in. The AOS team will share the partnership details directly."
        />
        <EnquiryForm
          className="mt-10"
          pathways={PARTICIPATION_PATHWAYS}
          defaultPathway="partner"
        />
      </Section>
    </>
  );
}
