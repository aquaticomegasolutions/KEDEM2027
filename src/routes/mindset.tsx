import { createFileRoute } from "@tanstack/react-router";

import { PillarPage } from "@/components/sections/PillarPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/mindset")({
  component: () => <PillarPage id="mindset" />,
  head: () =>
    pageHead({
      title: "Mindset — Think Beyond Boundaries",
      description:
        "The Mindset pillar of KEDEM 2027: innovation and entrepreneurial mindset, leadership, creativity, global thinking, future skills and building technology companies.",
      path: "/mindset",
    }),
});
