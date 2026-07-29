# S Adithya Nachiyappan — Portfolio

Personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Inter (body) · JetBrains Mono (accents) |
| Icons | lucide-react |
| Theme | CSS variables · custom dark/light toggle |
| OG image | `next/og` edge route |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

Zero config — just push to GitHub and connect the repo to Vercel.

```bash
# Option A: via Vercel CLI
npx vercel

# Option B: Push to GitHub, import at https://vercel.com/new
```

Vercel auto-detects Next.js and handles everything. No environment variables required for the base site.

---

## Personalisation Checklist

Before going live, swap in the following:

| Item | Where | Action |
|---|---|---|
| **Headshot** | `public/headshot.jpg` | Add a square photo; update `About.tsx` to use `<Image>` |
| **Resume PDF** | Already linked to Google Drive | Update `lib/data.ts → siteConfig.resume` if URL changes |
| **DeepDetector GitHub** | `lib/data.ts → projects[0].github` | Replace `"#"` with your repo URL |
| **AttentioMate GitHub** | `lib/data.ts → projects[1].github` | Replace `"#"` with your repo URL |
| **Aspire project repo** | `lib/data.ts → projects[3].github` | Replace `"#"` or remove field |
| **Qube project repo** | `lib/data.ts → projects[4].github` | Replace `"#"` or remove field |
| **Domain** | `app/layout.tsx → metadataBase` | Update to your Vercel URL or custom domain |
| **OG image** | `public/og-image.png` | Optional: add a static fallback 1200×630 PNG |

---

## Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Tailwind v4 @theme config + CSS utilities
│   ├── layout.tsx           # Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx             # Section assembly
│   └── api/og/route.tsx     # Dynamic OG image (edge runtime)
├── components/
│   ├── ui/
│   │   ├── LiveClock.tsx    # Client-side IST clock widget
│   │   ├── StatusBadge.tsx  # Pulsing status badge
│   │   ├── TechPill.tsx     # Monospace tech stack tag
│   │   ├── SectionHeading.tsx
│   │   └── ThemeToggle.tsx  # Dark/light toggle (SSR-safe)
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── SkillsMarquee.tsx    # Infinite two-row marquee
│   ├── Projects.tsx         # Numbered featured-work list
│   ├── Experience.tsx       # Vertical timeline
│   ├── Education.tsx
│   ├── About.tsx            # Bio + categorised skills grid
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── data.ts              # ALL content as typed TS constants ← edit here
│   └── utils.ts
├── public/
│   └── favicon.svg
├── package.json
├── tsconfig.json
└── README.md
```

---

## All Content in One File

Every piece of copy, every link, every tech stack lives in **`lib/data.ts`**. 
That's the only file you need to touch for content updates.

---

## Lighthouse Notes

- Fonts loaded via `next/font/google` (no render-blocking)
- Images use `next/image` with lazy loading (swap in `<Image>` when you add a headshot)
- Semantic HTML: single `<h1>`, correct heading hierarchy, ARIA labels on icon buttons
- No layout shift: `suppressHydrationWarning` on `<html>`, ThemeProvider hides until mounted
- OG image served from edge for fast link previews

---

## License

MIT — use freely, attribution appreciated.
