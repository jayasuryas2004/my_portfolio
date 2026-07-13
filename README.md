# Jaya Surya — UI/UX Designer Portfolio

A production-ready personal portfolio for a 4th-year B.E. Computer Science Engineering student specializing in UI/UX design. Built with a minimal, editorial aesthetic inspired by premium design portfolios — monochrome palette, large typography, glass navigation, and refined motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript, Tailwind CSS v4
- **Animation:** Framer Motion, Lenis smooth scroll
- **Components:** shadcn/ui (Radix primitives)
- **Icons:** Lucide React + custom social icons

## Features

- **Home** — Hero with background typography, featured work, skills, services accordion, experience timeline, CTA
- **Portfolio** — Filterable project grid with magnetic hover, image zoom, gradient overlays
- **Case Studies** — Full UX process documentation (research, personas, journey maps, wireframes, design system, etc.)
- **About** — Story, education, design philosophy, workflow, toolbox, goals, printable resume
- **Contact** — Accessible form with email and social links
- **SEO** — Per-page metadata, sitemap, robots.txt
- **A11y** — Semantic HTML, skip link, ARIA labels, keyboard navigation, reduced motion support

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── portfolio/          # Portfolio grid + [slug] case studies
│   ├── about/
│   ├── contact/
│   ├── resume/             # Print-friendly resume
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Navbar, footer, smooth scroll, page transitions
│   ├── sections/           # Page-specific sections
│   ├── shared/             # Reusable UI (ProjectCard, AnimatedReveal, etc.)
│   └── ui/                 # shadcn/ui primitives
├── data/                   # Content (projects, skills, services, experience)
├── hooks/                  # useReducedMotion, useMagnetic, useScrollSection
├── lib/                    # Utils, constants, animation variants
└── types/                  # TypeScript interfaces
public/
└── images/                 # SVG placeholders for projects & case studies
```

## Customization

1. **Profile** — Edit `src/lib/constants.ts` (`SITE`, `SOCIAL_LINKS`)
2. **Projects** — Update `src/data/projects.ts` with your case studies
3. **Experience & Skills** — Edit `src/data/experience.ts` and `src/data/skills.ts`
4. **Resume** — Update `src/app/resume/page.tsx` or replace with a PDF in `/public`
5. **Domain** — Update URLs in `src/app/sitemap.ts` and `src/app/robots.ts`

## Performance Notes

- Images use Next.js `Image` with lazy loading (except above-the-fold)
- Fonts loaded via `next/font` with `display: swap`
- Static generation for all case study routes
- Target: 90+ Lighthouse score (run audit after adding real images)

## License

Private portfolio project. All rights reserved.
