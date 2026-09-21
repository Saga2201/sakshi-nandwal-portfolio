# Sakshi Nandwal — Portfolio

Personal portfolio for **Sakshi Nandwal**, positioned for recruitment and HR roles. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for easy content edits and free-tier hosting on Vercel.

## Local development

```bash
cd sakshi-nandwal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Dev server with hot reload |
| `npm run build`   | Production build         |
| `npm run start`   | Serve the production build |
| `npm run lint`    | ESLint                   |

## How to edit content

**All copy lives in one file:** [`src/content/site.ts`](src/content/site.ts)

Update:

- Name, tagline, location, headline
- About paragraphs
- Core expertise cards
- Experience roles, dates, bullets
- Strengths / “Why hire” cards
- Social links
- **Email** — set `email: "you@example.com"` to show a mailto button (leave `""` to keep the placeholder)

Do **not** invent employers, dates, metrics, testimonials, or contact details that are not confirmed.

### Optional photo

There is no profile photo in the brief. To add one later:

1. Place an image in `public/` (e.g. `public/sakshi.jpg`)
2. Add an `Image` from `next/image` in `src/components/Hero.tsx` or `About.tsx`

### YouTube link

The brief lists the channel as **Sakshi Nandwal** (name only). The site currently links to a YouTube search for that name. Replace `links.youtube` in `site.ts` with the exact channel URL when you have it.

## Deploy on Vercel (free tier)

### Option A — Import the folder (no GitHub required)

1. Install the CLI: `npm i -g vercel`
2. From this project root: `vercel`
3. Log in when prompted, accept defaults (Next.js is auto-detected)
4. For production: `vercel --prod`

Or drag-and-drop the project folder in the [Vercel dashboard](https://vercel.com/new) after zipping it (exclude `node_modules` and `.next`).

### Option B — GitHub (optional later)

1. Push this repo to GitHub
2. In Vercel → **Add New Project** → import the repo
3. Framework preset: **Next.js** · Build: `npm run build` · Output: default
4. Deploy

No extra env vars are required for this static-content portfolio.

## Project structure

```
src/
  app/           # App Router layout + page
  components/    # Hero, About, Expertise, Experience, Strengths, Contact, …
  content/
    site.ts      # ← edit content here
public/          # Static assets (add photo here)
```

## Accessibility & design notes

- Mobile-first layout, semantic landmarks, focus-visible rings
- Motions respect `prefers-reduced-motion`
- Warm off-white canvas with deep teal and soft indigo accents

## Contact placeholder

No email or phone is published on the site until you add them in `src/content/site.ts`. Recruiters can use LinkedIn in the meantime.
