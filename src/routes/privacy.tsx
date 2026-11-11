import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/SectionHeader";
import { SUMMIT } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description:
        "How AOS Private Limited handles information submitted through the KEDEM 2027 summit website.",
      path: "/privacy",
    }),
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This website is operated by {SUMMIT.organizer} for KEDEM — Global
            Technology &amp; Innovation Summit 2027.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">
            Information we collect
          </h2>
          <p>
            We collect only the information you choose to send us through a
            participation or enquiry form: your name, email address, an optional
            organisation name, and your message. We do not collect unnecessary
            personal data and we do not sell your information.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">How it is used</h2>
          <p>
            Your details are used solely to respond to your enquiry and to keep you
            informed about the summit where you have asked us to.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For any privacy question, or to ask us to delete your details, write to{" "}
            <a href={`mailto:${SUMMIT.email}`} className="text-accent hover:underline">
              {SUMMIT.email}
            </a>
            .
          </p>
          <p className="pt-6 text-xs">
            This policy is updated as the summit platform develops.
          </p>
        </div>
      </Section>
    </>
  );
}
