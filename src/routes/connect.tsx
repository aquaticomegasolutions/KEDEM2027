import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/kedem-logo.png";
import { PageHero } from "@/components/layout/PageHero";
import { Panel } from "@/components/ui/Cards";
import { QRBlock } from "@/components/ui/QRBlock";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { SOCIAL_LINKS, SUMMIT } from "@/data/kedem";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
  head: () =>
    pageHead({
      title: "Connect with AOS",
      description:
        "Connect with AOS Private Limited for KEDEM 2027 — official QR code, website, email and social channels for summit updates and enquiries.",
      path: "/connect",
    }),
});

function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect with AOS"
        title="One scan connects you to AOS."
        lead="Summit updates, announcements and official channels — the date, venue and programme are published through these channels first."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Panel interactive={false} className="flex h-full flex-col items-center justify-center py-14">
              <QRBlock size={230} caption="Official AOS QR code" />
            </Panel>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.06}>
              <Panel interactive={false}>
                <p className="eyebrow">Official channels</p>
                <dl className="mt-5 grid gap-5 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Website</dt>
                    <dd>
                      <a
                        href={SUMMIT.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:underline"
                      >
                        {SUMMIT.websiteLabel}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${SUMMIT.email}`}
                        className="text-accent hover:underline"
                      >
                        {SUMMIT.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Organizer</dt>
                    <dd>{SUMMIT.organizer}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Location</dt>
                    <dd>Visakhapatnam, Andhra Pradesh, India</dd>
                  </div>
                </dl>
              </Panel>
            </Reveal>

            <Reveal delay={0.12}>
              <Panel interactive={false}>
                <p className="eyebrow">Social</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.label}>
                      {s.href ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-md border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <span className="block rounded-md border border-dashed border-border px-4 py-3 text-sm text-muted-foreground/70">
                          {s.label} — coming soon
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>

            <Reveal delay={0.18}>
              <Panel interactive={false} className="flex items-center gap-6">
                <div className="rounded-md bg-foreground p-3">
                  <img
                    src={logo}
                    alt="AquaticOmega Solutions Pvt. Ltd. official logo"
                    className="h-20 w-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  KEDEM is organised by {SUMMIT.organizer}.
                </p>
              </Panel>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="Summit updates"
          title="Date and venue announcements."
          lead={`DATE — ${SUMMIT.date}. VENUE — ${SUMMIT.venue}. Details are confirmed officially through the AOS channels above.`}
          align="center"
        />
      </Section>
    </>
  );
}
