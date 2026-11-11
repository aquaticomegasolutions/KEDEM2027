import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Panel } from "@/components/ui/Cards";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { SPEAKERS, SPEAKER_TRACKS, type Speaker } from "@/data/kedem";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/speakers")({
  component: SpeakersPage,
  head: () =>
    pageHead({
      title: "The Voices of KEDEM",
      description:
        "Speakers at KEDEM 2027 across Quantum, AI, Mindset, global, industry and academia tracks. Speakers are published as participation is officially confirmed.",
      path: "/speakers",
    }),
});

function SpeakerCard({
  speaker,
  onOpen,
}: {
  speaker: Speaker;
  onOpen: () => void;
}) {
  return (
    <Panel className="group relative flex h-full flex-col overflow-hidden p-0 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-accent/40">
      <button type="button" onClick={onOpen} className="relative block aspect-[4/5] overflow-hidden border-b border-border bg-surface-2/60 text-left" aria-label={`View profile of ${speaker.name}`}>
        {speaker.photo ? (
          <img src={speaker.photo} alt={`${speaker.name}, ${speaker.designation}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <svg viewBox="0 0 200 250" aria-hidden="true" className="h-full w-full text-muted-foreground/30 transition-transform duration-700 group-hover:scale-105">
            <circle cx="100" cy="95" r="38" fill="currentColor" />
            <path d="M30 250 Q30 150 100 150 Q170 150 170 250 Z" fill="currentColor" />
          </svg>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-gradient-brand px-3 py-1 font-display text-[0.6rem] font-bold tracking-[0.18em] text-accent-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">{speaker.track}</span>
        <span className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">View profile →</span>
        </span>
      </button>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{speaker.track}</p>
        <h3 className="mt-3 text-lg font-semibold">{speaker.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{speaker.designation}</p>
        <p className="text-sm text-muted-foreground/80">{speaker.organization}</p>
        <p className="mt-4 text-sm text-foreground/80">{speaker.topic}</p>
      </div>
    </Panel>
  );
}

function SpeakersPage() {
  const [track, setTrack] = useState<(typeof SPEAKER_TRACKS)[number]>("ALL");
  const [active, setActive] = useState<Speaker | null>(null);

  const visible =
    track === "ALL" ? SPEAKERS : SPEAKERS.filter((s) => s.track === track);

  return (
    <>
      <PageHero
        eyebrow="Speakers"
        title="The voices of KEDEM."
        lead="Quantum researchers, AI builders, founders, global industry leaders and academics. Every profile published here is officially confirmed — nothing is listed before it is."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter speakers by track">
          {SPEAKER_TRACKS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={track === t}
              onClick={() => setTrack(t)}
              className={cn(
                "rounded-full border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                track === t
                  ? "border-accent text-accent"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <Reveal key={s.id} className="h-full">
                <SpeakerCard speaker={s} onOpen={() => setActive(s)} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12">
            <Panel interactive={false} className="py-16 text-center">
              <p className="font-display text-2xl font-bold">
                Speakers — To Be Announced
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                The KEDEM speaker programme is being confirmed. Profiles appear here
                as each speaker is officially verified by AOS. No names, credentials
                or confirmations are published in advance.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink to="/contact">Speaker / expert enquiry</ButtonLink>
                <ButtonLink to="/connect" variant="outline">
                  Get summit updates
                </ButtonLink>
              </div>
            </Panel>
          </Reveal>
        )}

        <Reveal className="mt-16">
          <SectionHeader
            eyebrow="Tracks"
            title="Every speaker belongs to a track."
            lead="Quantum, AI, Mindset, Global, Industry and Academia — so the programme reads clearly for attendees, media and partners."
          />
        </Reveal>
      </Section>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.name ?? ""}
      >
        {active ? (
          <div>
            <p className="eyebrow">{active.track}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {active.designation} — {active.organization}
            </p>
            <p className="mt-5 text-base">{active.topic}</p>
            {active.bio ? (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {active.bio}
              </p>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </>
  );
}
