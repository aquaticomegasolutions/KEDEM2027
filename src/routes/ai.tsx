import { createFileRoute } from "@tanstack/react-router";

import { PillarPage } from "@/components/sections/PillarPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ai")({
  component: () => <PillarPage id="ai" />,
  head: () =>
    pageHead({
      title: "AI — Build What's Next",
      description:
        "The AI pillar of KEDEM 2027: generative AI, agentic AI, AI for business, AI and cybersecurity, healthcare, education and the future of work.",
      path: "/ai",
    }),
});
