import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Panel } from "@/components/ui/Cards";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import {
  PARTICIPATION_PATHWAYS,
  PROJECT_CATEGORIES,
  PROJECT_PROCESS,
} from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/project-expo")({
  component: ProjectExpoPage,
  head: () =>
    pageHead({
      title: "Project Expo — Build. Demonstrate. Compete. Win.",
      description:
        "The KEDEM 2027 Project Expo for students, project teams, young innovators and developers: categories across AI, Quantum, Robotics, IoT, cybersecurity, healthtech, sustainability and deeptech.",
      path: "/project-expo",
    }),
});

const WHO = [
  "Students",
  "Project teams",
  "Young innovators",
  "Developers",
  "Emerging creators",
];

function ProjectExpoPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Expo"
        title="Build. Demonstrate. Compete. Win."
        lead="A competitive exhibition for student and team projects — screened, shortlisted, exhibited and judged at KEDEM."
      >
        <ButtonLink to="/contact" size="lg">
          Submit your project
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader eyebrow="Who can participate?" title="Builders, not spectators." />
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {WHO.map((w) => (
              <span
                key={w}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                {w}
              </span>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader eyebrow="Project categories" title="Where your project fits." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROJECT_CATEGORIES.map((c, i) => (
            <Reveal key={c} delay={Math.min(i * 0.03, 0.25)} className="h-full">
              <Panel className="h-full p-5">
                <p className="text-sm font-semibold">{c}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader eyebrow="How it works" title="Seven steps from idea to stage." />
        <ol className="mt-12 grid gap-4 md:grid-cols-7">
          {PROJECT_PROCESS.map((step, i) => (
            <Reveal key={step} delay={i * 0.05} className="h-full">
              <li className="h-full rounded-lg border border-border p-5">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-semibold">{step}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <Reveal>
          <Panel interactive={false} className="py-14 text-center">
            <p className="eyebrow">Exciting Prizes</p>
            <p className="mt-5 font-display text-3xl font-bold text-gradient-brand sm:text-5xl">
              PRIZES TO BE ANNOUNCED
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
              Official prize details will be published here once confirmed by AOS.
            </p>
          </Panel>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader eyebrow="Submit" title="Submit your project." />
        <EnquiryForm
          className="mt-10"
          pathways={PARTICIPATION_PATHWAYS}
          defaultPathway="project-expo"
        />
      </Section>
    </>
  );
}
