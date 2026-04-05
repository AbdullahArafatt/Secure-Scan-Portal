# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a Plan2Scan SecureScan Web Portal — a professional corporate website demonstrating B2B document scanning and secure digitization services.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (api-server artifact — not used by portal)
- **Database**: PostgreSQL + Drizzle ORM (not used by portal)
- **Frontend**: React 18 + Vite + Tailwind CSS v4 + shadcn/ui
- **Routing**: Wouter
- **Fonts**: Inter (body) + Merriweather (headings)

## Artifacts

### securescan-portal (`/`)
A professional corporate web portal for Plan2Scan — a B2B secure document scanning and digitization services company.

**Color palette**: Navy Blue (`hsl(218,72%,22%)`), Charcoal, White  
**Pages**:
- `/` — Home: hero, services overview, stats, testimonials, blog teaser
- `/services/bulk-scanning` — Bulk Document Scanning service page
- `/services/secure-storage` — Secure Data Storage service page  
- `/services/ocr` — OCR Services page with accuracy metrics
- `/get-a-quote` — Interactive Savings Calculator + contact form
- `/blog` — Blog listing + full post for "Benefits of Digital Document Management"
- `/blog/:slug` — Individual blog post pages
- `/coverage` — Interactive Service Coverage Map (proactive feature)

**SEO**: Every page has unique `<title>`, H1–H3 hierarchy, and keyword-rich content around "secure document digitization" and "B2B scanning services".

**Key features**:
- JavaScript Savings Calculator: inputs boxes count + industry, outputs sq ft saved, annual savings, 5-year ROI, break-even months
- Service Coverage Map: interactive SVG map with 6 US regions, clickable to reveal offices, states, turnaround times
- Fully responsive layout with mobile hamburger nav

### api-server (`/api`)
Shared Express 5 backend. Not currently used by the portal (frontend-only).

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/securescan-portal run dev` — run portal locally
- `pnpm --filter @workspace/api-server run dev` — run API server locally
