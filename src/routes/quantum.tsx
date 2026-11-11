import { createFileRoute } from "@tanstack/react-router";

import { PillarPage } from "@/components/sections/PillarPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/quantum")({
  component: () => <PillarPage id="quantum" />,
  head: () =>
    pageHead({
      title: "Quantum — Explore What's Possible",
      description:
        "The Quantum pillar of KEDEM 2027: quantum computing, quantum AI, quantum cybersecurity, quantum communication, industry applications and India's quantum ecosystem.",
      path: "/quantum",
    }),
});
