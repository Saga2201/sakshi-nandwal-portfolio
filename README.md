# Sakshi Nandwal — Portfolio

Personal portfolio for **Sakshi Nandwal**, positioned for recruitment and HR roles. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

**Live content source of truth:** [`src/content/site.ts`](src/content/site.ts)

## Local development

```bash
git clone https://github.com/Saga2201/sakshi-nandwal-portfolio.git
cd sakshi-nandwal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Dev server with hot reload |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | ESLint                     |

## Deploy on Vercel (free)

The easiest free path is to import this GitHub repo:

1. Open [vercel.com/new](https://vercel.com/new) and sign in (GitHub works well).
2. **Import** `Saga2201/sakshi-nandwal-portfolio` (or your fork).
3. Keep defaults — Framework: **Next.js**, Build: `npm run build`, Output: default.
4. Click **Deploy**. No environment variables are required.

After deploy, every push to `main` (or your production branch) updates the site automatically.

### CLI alternative

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## How to edit content

**Edit only:** [`src/content/site.ts`](src/content/site.ts)

You can change:

- Name, tagline, location, headline, positioning
- About paragraphs
- Core expertise cards (set `highlight: true` on the signature skill)
- Experience roles, dates, bullets
- Strengths / “Why hire” cards
- Social links (LinkedIn, YouTube, Instagram)
- **Email** — set `email: "you@example.com"` to show a mailto button; leave `""` to hide email entirely

Do **not** invent employers, dates, metrics, testimonials, phone numbers, or contact details that are not confirmed.

### Optional photo

1. Add an image under `public/` (e.g. `public/sakshi.jpg`)
2. Use `next/image` in `src/components/Hero.tsx` or `About.tsx`

### YouTube

The site currently links to a YouTube search for “Sakshi Nandwal”. Replace `links.youtube` in `site.ts` with the exact channel URL when you have it.

## Project structure

```
src/
  app/           # App Router layout, page, styles, metadata
  components/    # Hero, About, Expertise, Experience, Strengths, Contact, …
  content/
    site.ts      # ← edit all copy here
public/          # Static assets (add a photo here when ready)
```

## Accessibility & design

- Warm off-white canvas, deep teal, soft indigo, and warm accent
- Core Expertise is the visual highlight section
- Mobile-first layout, semantic landmarks, skip link, focus-visible rings
- Motions respect `prefers-reduced-motion`
