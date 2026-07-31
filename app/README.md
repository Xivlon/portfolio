# Portfolio — Nuruddin Sattar

Industrial sci-fi themed portfolio console. Single-page interface: a pie-slice
module selector drives eight modules (summary, skills, record, projects,
deployments, education, certifications, contact). All copy follows
ASD-STE100 Simplified Technical English.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Deploy on Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages** > **Create** > **Pages** >
   **Connect to Git**. Select this repository.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push to `main` rebuilds automatically.

Hashed assets in `dist/assets/` get long-lived cache headers via
`public/_headers`.

## Edit content

All site content lives in `src/data/portfolio.ts` — skills, experience,
projects, deployments (thumbnails + links), and the certification register
(completed vs pending). Edit the data file, rebuild, push.
