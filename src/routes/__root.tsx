import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorHalo } from "@/components/ui/Premium";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";
import { SUMMIT } from "@/data/kedem";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KEDEM | Global Technology & Innovation Summit 2027" },
      {
        name: "description",
        content:
          "KEDEM 2027 — a global technology and innovation summit on Quantum, AI and Mindset, from Vizag to the world: startups, deeptech, research, future talent and the global innovation ecosystem.",
      },
      { name: "author", content: SUMMIT.organizer },
      { name: "theme-color", content: "#0d2033" },
      { property: "og:site_name", content: "KEDEM 2027" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SUMMIT.siteUrl },
      { property: "og:image", content: `${SUMMIT.siteUrl}/og-image.png` },
      { property: "og:image:width", content: "1922" },
      { property: "og:image:height", content: "818" },
      { property: "og:image:alt", content: "KEDEM 2027 — Global Technology & Innovation Summit. Quantum, AI, Mindset. From Vizag to the World." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SUMMIT.siteUrl}/og-image.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon.png?v=2" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AOS Private Limited",
          alternateName: "AquaticOmega Solutions Pvt. Ltd.",
          url: SUMMIT.website,
          email: SUMMIT.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotionSafe();

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <CursorHalo />
        <Navbar />
        <motion.main
          data-page-content=""
          id="main"
          key={pathname}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </motion.main>
        <Footer />
      </MotionConfig>
    </QueryClientProvider>
  );
}
