import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ActionButton";
import { Panel } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { GlobalConnections } from "@/components/visuals/GlobalConnections";
import { AIVisual, MindsetVisual, QuantumVisual } from "@/components/visuals/PillarVisuals";
import { PILLARS } from "@/data/kedem";

const feature = {
  quantum: { label: "01 / POSSIBILITY", title: "Beyond the limits of the familiar.", lead: "Computation. Communication. Security. A frontier that asks us to rethink what technology can do.", points: ["COMPUTATION", "COMMUNICATION", "DISCOVERY"], Visual: QuantumVisual },
  ai: { label: "02 / INTELLIGENCE", title: "Intelligence, in motion.", lead: "From connected ideas to real-world applications — AI is reshaping how people build, work and solve problems.", points: ["LEARN", "CONNECT", "CREATE"], Visual: AIVisual },
  mindset: { label: "03 / HUMAN POTENTIAL", title: "The future begins with people.", lead: "Technology can open the door. Curiosity, leadership and a global outlook are what take us through it.", points: ["CURIOSITY", "LEADERSHIP", "GLOBAL THINKING"], Visual: MindsetVisual },
} as const;

export function PillarPage({ id }: { id: "quantum" | "ai" | "mindset" }) {
  const pillar = PILLARS.find((p) => p.id === id);
  if (!pillar) return null;
  const others = PILLARS.filter((p) => p.id !== id);
  const { label, title, lead, points, Visual } = feature[id];

  return (
    <>
      <PageHero
        eyebrow={`Pillar — ${pillar.name}`}
        title={pillar.title}
        lead={pillar.description}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact" size="lg">
            Participate
          </ButtonLink>
          <ButtonLink to="/summit" variant="outline" size="lg">
            The Summit
          </ButtonLink>
        </div>
      </PageHero>

      <section className="theme-deep relative overflow-hidden border-b border-border px-5 py-16 sm:px-8 lg:py-24" aria-label={`${pillar.name} visual story`}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">{label}</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5">
              {points.map((point, i) => <span key={point} className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-foreground/75"><span className="mr-2 text-accent">0{i + 1}</span>{point}</span>)}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-[8%] rounded-full border border-primary/15" aria-hidden="true" />
            <div className="absolute inset-0 text-foreground"><Visual active /></div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Session themes"
          title={`What ${pillar.name} covers at KEDEM.`}
          lead="Sessions, keynotes and working conversations across the full track."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillar.topics.map((t, i) => (
            <Reveal key={t} delay={i * 0.04} className="h-full">
              <Panel className="h-full p-6">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {id === "mindset" ? (
        <Section className="border-y border-border bg-surface/30">
          <SectionHeader
            eyebrow="Human-centred"
            title="The technology is new. The thinking has to be too."
            lead="Mindset is the human half of KEDEM — leadership, creativity, global thinking and the courage to build. Every technical session at the summit is anchored back to the people who carry it forward."
            align="center"
          />
        </Section>
      ) : (
        <Section className="border-y border-border bg-surface/30">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SectionHeader
              eyebrow="Global dimension"
              title={`${pillar.name} is not a local conversation.`}
              lead="KEDEM connects Visakhapatnam's researchers, students and founders with the international ecosystem building this technology."
            />
            <Reveal delay={0.1}>
              <GlobalConnections />
            </Reveal>
          </div>
        </Section>
      )}

      <Section>
        <SectionHeader eyebrow="Continue" title="The other pillars." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {others.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.06}>
              <Panel className="group">
                <p className="eyebrow">{o.name}</p>
                <h3 className="mt-3 text-2xl font-bold">{o.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.description}</p>
                <ButtonLink to={o.to} variant="outline" size="sm" className="mt-6">
                  Explore {o.name}
                </ButtonLink>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
