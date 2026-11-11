import { WorldMap } from "@/components/visuals/WorldMap";

/** Shared geographic visual; all destinations are conceptual until confirmed. */
export function GlobalConnections() {
  return <WorldMap interactive={false} />;
}
