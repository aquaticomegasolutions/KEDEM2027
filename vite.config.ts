import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: { port: 8080, host: true },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      // Use src/server.ts (our SSR error wrapper) as the server entry.
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    // Default to a plain Node server (`node .output/server/index.mjs`).
    // Override with NITRO_PRESET (e.g. vercel, netlify, cloudflare-pages).
    nitro(),
  ],
});
