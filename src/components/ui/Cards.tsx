import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Panel({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "surface-panel relative overflow-hidden rounded-xl p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8",
        interactive &&
          "hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PillarCard({
  index,
  name,
  title,
  description,
  topics,
  to,
}: {
  index: number;
  name: string;
  title: string;
  description: string;
  topics: readonly string[];
  to: string;
}) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Panel className="group flex h-full flex-col">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-60"
        />
        <p className="eyebrow">{`0${index + 1} — ${name}`}</p>
        <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {topics.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-accent/30"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          to={to}
          className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          Explore {name}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Panel>
    </Reveal>
  );
}

export function PanelCard({
  label,
  title,
  description,
  focusLabel,
  points,
  signature,
  index,
}: {
  label: string;
  title: string;
  description: string;
  focusLabel: string;
  points: readonly string[];
  signature: boolean;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.07}>
      <Panel
        className={cn(
          "grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:p-12",
          signature && "border-accent/40 shadow-glow",
        )}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{label}</p>
            {signature ? (
              <span className="rounded-full bg-gradient-brand px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-accent-foreground">
                Signature Panel
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="lg:border-l lg:border-border lg:pl-10">
          <p className="eyebrow mb-4">{focusLabel}</p>
          <ul className="grid gap-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-gradient-brand" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </Reveal>
  );
}

export function ExpoCard({
  title,
  tagline,
  who,
  distinction,
  to,
  index,
}: {
  title: string;
  tagline: string;
  who: string;
  distinction: string;
  to: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Panel className="group flex h-full flex-col">
        <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
          {`Experience 0${index + 1}`}
        </p>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{title}</h3>
        <p className="mt-3 font-display text-sm tracking-[0.14em] text-gradient-brand">
          {tagline}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {distinction}
        </p>
        <p className="mt-5 border-t border-border pt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground/80">
          For: {who}
        </p>
        <Link
          to={to}
          className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          Explore
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Panel>
    </Reveal>
  );
}

export function StatCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <Panel interactive={false} className="p-6">
      <p className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em]">
        {label}
      </p>
      {note ? (
        <p className="mt-2 text-xs text-muted-foreground">{note}</p>
      ) : null}
    </Panel>
  );
}

export function PartnerLogo({ label }: { label: string }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border bg-surface/50 px-4 text-center text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/70">
      {label}
    </div>
  );
}

export function AwardCard({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.03, 0.3)} className="h-full">
      <Panel className="group h-full p-6">
        <p className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-snug">{name}</h3>
        <p className="mt-4 inline-flex rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          To Be Announced
        </p>
      </Panel>
    </Reveal>
  );
}

export function ProjectCard({
  name,
  category,
  organization,
  description,
  image,
  link,
  onExplore,
}: {
  name: string;
  category: string;
  organization: string;
  description: string;
  image: string | null;
  link: string | null;
  onExplore: () => void;
}) {
  return (
    <Panel className="group flex h-full flex-col p-0">
      <div className="flex h-40 items-center justify-center overflow-hidden border-b border-border bg-surface-2/60">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground/60">
            Image to be added
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{category}</p>
        <h3 className="mt-3 text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {organization}
        </p>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-4 pt-2">
          <button
            type="button"
            onClick={onExplore}
            className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            Explore →
          </button>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-accent"
            >
              External link
            </a>
          ) : null}
        </div>
      </div>
    </Panel>
  );
}
