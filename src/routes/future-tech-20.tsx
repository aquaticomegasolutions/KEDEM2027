import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { ProjectCard } from "@/components/ui/Cards";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import {
  FUTURE_TECH_CATEGORIES,
  FUTURE_TECH_PROJECTS,
  PARTICIPATION_PATHWAYS,
  type FutureTechProject,
} from "@/data/kedem";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/future-tech-20")({
  component: FutureTechPage,
  head: () =>
    pageHead({
      title: "AOS Future Tech 20 — 20 Innovations. One Future.",
      description:
        "A curated showcase of approximately 20 selected innovations at KEDEM 2027 across AI, quantum, cybersecurity, robotics, IoT, ocean technology, sustainability, deeptech, healthtech and student innovation.",
      path: "/future-tech-20",
    }),
});

function FutureTechPage() {
  const [filter, setFilter] = useState<string>("ALL");
  const [active, setActive] = useState<FutureTechProject | null>(null);

  const visible =
    filter === "ALL"
      ? FUTURE_TECH_PROJECTS
      : FUTURE_TECH_PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="AOS Future Tech 20"
        title={
          <>
            20 innovations.
            <br />
            One future.
          </>
        }
        lead="A curated selection — approximately twenty innovations, startups and projects chosen by AOS to represent what comes next. Showcase slots below are placeholders until each selection is confirmed."
      >
        <ButtonLink to="/contact" size="lg">
          Nominate an innovation
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
          {["ALL", ...FUTURE_TECH_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                filter === c
                  ? "border-accent text-accent"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <ProjectCard {...p} onExplore={() => setActive(p)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader eyebrow="Nominate" title="Put an innovation forward." />
        <EnquiryForm
          className="mt-10"
          pathways={PARTICIPATION_PATHWAYS}
          defaultPathway="future-tech-20"
        />
      </Section>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.name ?? ""}
      >
        {active ? (
          <div>
            <p className="eyebrow">{active.category}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {active.organization}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {active.description}
            </p>
            {active.link ? (
              <a
                href={active.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm text-accent hover:underline"
              >
                Visit project →
              </a>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </>
  );
}
