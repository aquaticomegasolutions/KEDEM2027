import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { Panel } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    ...pageHead({
      title: "Administration",
      description: "Restricted administration area for KEDEM 2027.",
      path: "/admin",
    }),
    meta: [
      { title: "Administration | KEDEM 2027" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

const MANAGED = [
  "Speakers",
  "Projects",
  "Startups",
  "Future Tech 20",
  "Awards",
  "Partners",
  "Announcements",
  "Social links",
  "Contact information",
];

function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Restricted"
        title="Administration."
        lead="This area is reserved for the AOS summit team. No administrative data or controls are exposed publicly."
      />

      <Section>
        <Reveal>
          <Panel interactive={false} className="py-12 text-center">
            <p className="font-display text-2xl font-bold">Sign-in required</p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Secure sign-in is activated together with the summit database. Until
              then the public site reads from versioned content files and no
              management controls exist in the browser.
            </p>
          </Panel>
        </Reveal>

        <SectionHeader
          className="mt-16"
          eyebrow="Planned scope"
          title="What the team will manage here."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MANAGED.map((m, i) => (
            <Reveal key={m} delay={i * 0.04} className="h-full">
              <Panel interactive={false} className="h-full p-6">
                <p className="text-sm font-semibold">{m}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
