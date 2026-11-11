# KEDEM 2027

Global Technology & Innovation Summit — **January 8–9, 2027**, Visakhapatnam.
Quantum • AI • Mindset — *From Vizag to the World.*

Stack: TanStack Start (React 19) + Vite + Tailwind CSS 4, server-rendered via Nitro.

## Develop

```bash
bun install      # or: npm install
bun run dev      # http://localhost:8080
```

## Build & run in production

```bash
bun run build
node .output/server/index.mjs   # PORT env var sets the port (default 3000)
```

Or with Docker:

```bash
docker build -t kedem-2027 .
docker run -p 3000:3000 kedem-2027
```

Netlify: `netlify.toml` is already configured (build sets `NITRO_PRESET=netlify`). Other hosts: set `NITRO_PRESET` (e.g. `vercel`).

## Content

All summit copy (name, date, venue, nav, social links) lives in `src/data/kedem.ts`.
The official QR code is `public/qr.png` and the logo is `src/assets/kedem-logo.png`..
