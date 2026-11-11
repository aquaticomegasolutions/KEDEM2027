import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/SectionHeader";
import { SUMMIT } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    pageHead({
      title: "Terms",
      description:
        "Terms of use for the KEDEM 2027 summit website, operated by AOS Private Limited.",
      path: "/terms",
    }),
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <Section>
        <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This website is published by {SUMMIT.organizer} as the official platform
            of KEDEM — Global Technology &amp; Innovation Summit 2027.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">
            Programme information
          </h2>
          <p>
            The summit date, venue, programme, speakers, panellists, awardees,
            partners, prizes and selections are confirmed progressively. Anything
            marked “Coming Soon” or “To Be Announced” is not yet final, and details
            published here may change until officially confirmed by AOS.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">
            Participation
          </h2>
          <p>
            Submitting an enquiry, project, exhibition application or nomination does
            not by itself confirm participation, selection or an award. AOS confirms
            all participation in writing.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">Brand & content</h2>
          <p>
            The AOS name, logo and summit branding belong to {SUMMIT.organizer} and
            may not be reproduced without permission.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${SUMMIT.email}`} className="text-accent hover:underline">
              {SUMMIT.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
