import { Link } from "@tanstack/react-router";

import logo from "@/assets/kedem-logo.png";
import { NAV_GROUPS, SOCIAL_LINKS, SUMMIT } from "@/data/kedem";
import { QRBlock } from "@/components/ui/QRBlock";

export function Footer() {
  return (
    <footer className="theme-deep ribbon relative overflow-hidden border-t border-border px-5 pb-10 pt-20 sm:px-8">
      {/* Large abstract AOS geometric background */}
      <svg aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
        <polygon points="0,600 420,0 560,0 140,600" fill="var(--primary)" />
        <polygon points="200,600 620,0 700,0 280,600" fill="var(--accent)" />
        <polygon points="900,600 1200,160 1200,320 1010,600" fill="var(--primary)" />
        {Array.from({ length: 10 }, (_, i) => (
          <line key={i} x1={i * 130} y1="0" x2={i * 130 - 300} y2="600" stroke="currentColor" strokeWidth="0.6" />
        ))}
      </svg>
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-16 border-b border-border pb-14">
          <p className="font-display text-[clamp(3.5rem,13vw,11rem)] font-bold leading-[0.85] tracking-[-0.05em]">
            <span className="text-gradient-brand">KEDEM</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span>{SUMMIT.full}</span>
            <span className="text-foreground">{SUMMIT.theme}</span>
            <span className="text-gradient-brand">{SUMMIT.tagline}</span>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_auto]">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.12em]">
              {SUMMIT.name}
            </p>
            <p className="mt-2 max-w-xs text-sm uppercase tracking-[0.14em] text-muted-foreground">
              {SUMMIT.full}
            </p>
            <p className="mt-4 font-display text-sm tracking-[0.22em] text-gradient-brand">
              {SUMMIT.theme}
            </p>
            <p className="mt-1 font-display text-sm tracking-[0.22em] text-muted-foreground">
              {SUMMIT.tagline}
            </p>

            <div className="mt-8 inline-flex rounded-md bg-foreground p-3">
              <img
                src={logo}
                alt="AquaticOmega Solutions Pvt. Ltd. official logo"
                className="h-20 w-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {NAV_GROUPS.map((group) => (
              <nav key={group.label} aria-label={group.label}>
                <p className="eyebrow mb-4">{group.label}</p>
                <ul className="grid gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="lg:pl-6">
            <QRBlock framed size={130} caption="One scan. Everything AOS." />
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">Organizer</p>
            <p className="text-sm text-muted-foreground">{SUMMIT.organizer}</p>
            <a
              href={`mailto:${SUMMIT.email}`}
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {SUMMIT.email}
            </a>
            <a
              href={SUMMIT.website}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {SUMMIT.websiteLabel}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-3">Social</p>
            <ul className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((s) =>
                s.href ? (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ) : (
                  <li
                    key={s.label}
                    className="text-sm text-muted-foreground/60"
                    title="Link coming soon"
                  >
                    {s.label}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Summit</p>
            <p className="text-sm text-muted-foreground">
              DATE — {SUMMIT.date}
            </p>
            <p className="text-sm text-muted-foreground">
              VENUE — {SUMMIT.venue}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SUMMIT.organizer}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-accent">
              Terms
            </Link>
            <Link to="/admin" className="transition-colors hover:text-accent">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
