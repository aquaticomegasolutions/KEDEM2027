import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import mark from "@/assets/kedem-mark.png";
import { NAV_GROUPS } from "@/data/kedem";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ActionButton";

const PRIMARY = [
  { label: "The Summit", to: "/summit" },
  { label: "Quantum", to: "/quantum" },
  { label: "AI", to: "/ai" },
  { label: "Mindset", to: "/mindset" },
  { label: "Expo", to: "/expo" },
  { label: "Speakers", to: "/speakers" },
  { label: "Awards", to: "/awards" },
] as const;

const PRIMARY_SET = new Set<string>(PRIMARY.map((p) => p.to));
const MORE = NAV_GROUPS.flatMap((g) => g.links).filter(
  (l) => !PRIMARY_SET.has(l.to) && l.to !== "/",
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeTo = PRIMARY.find(
    (p) => pathname === p.to || (p.to === "/expo" && /expo|future-tech/.test(pathname)),
  )?.to;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-border bg-background/75 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8",
          scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20",
        )}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="KEDEM home">
          <img
            src={mark}
            alt=""
            aria-hidden="true"
            className={cn("w-auto rounded-md transition-all duration-500", scrolled ? "h-9" : "h-10 lg:h-11")}
            width={575}
            height={490}
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-[0.18em]">KEDEM</span>
            <span className="block text-[0.6rem] tracking-[0.22em] text-muted-foreground">SUMMIT 2027</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center xl:flex">
          {PRIMARY.map((item) => {
            const active = activeTo === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-3 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </Link>
            );
          })}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="px-3 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground group-focus-within:text-foreground"
            >
              More +
            </button>
            <div className="invisible absolute right-0 top-full w-64 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <ul className="surface-panel mt-2 rounded-lg p-2">
                {MORE.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-accent"
                      activeProps={{ className: "text-accent" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="hidden items-center lg:flex">
          <ButtonLink to="/contact" variant="primary" size="sm">
            Join KEDEM
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-border xl:hidden"
        >
          <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="block h-px w-5 bg-foreground" />
          <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="block h-px w-5 bg-foreground" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="block h-px w-5 bg-foreground" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-14 z-40 h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-border bg-background px-5 pb-10 pt-6 sm:top-16 xl:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="grid">
                {PRIMARY.map((link, i) => (
                  <motion.li key={link.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}>
                    <Link to={link.to} className="flex items-baseline gap-4 border-b border-border py-3.5 font-display text-2xl font-bold uppercase tracking-tight" activeProps={{ className: "text-accent" }}>
                      <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="eyebrow mt-8 mb-3">More</p>
              <ul className="grid grid-cols-2 gap-x-4">
                {MORE.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="block py-2 text-sm text-muted-foreground" activeProps={{ className: "text-accent" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink to="/contact" size="lg" className="mt-8 w-full" magnetic={false}>
              Join KEDEM
            </ButtonLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
