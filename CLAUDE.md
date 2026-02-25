# CLAUDE.md — Bramel Business Solutions Website

## Project Overview

Static brochure website for Bramel Business Solutions (Pty) Ltd, a boutique South African investment bank providing M&A advisory, trust law, and corporate finance services. This is a like-for-like replication of the existing Wix site onto Astro.

## Tech Stack

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS via CSS Modules + @apply (zero Tailwind classes in JSX)
- **Hosting:** Vercel (static deployment)
- **Package manager:** npm

## Project Structure

```
bramel-website/
├── src/
│   ├── components/        # PascalCase (e.g., NavBar.astro, Footer.astro)
│   ├── layouts/           # PascalCase (e.g., BaseLayout.astro)
│   ├── pages/             # snake_case
│   │   ├── index.astro    # Home page
│   │   ├── about_us.astro
│   │   ├── what_we_do.astro
│   │   ├── partners.astro
│   │   └── contact.astro
│   └── styles/            # kebab-case
├── public/
│   └── images/            # Site images and logos
├── content/               # Page content in markdown
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── CLAUDE.md
```

## Pages (5 total)

1. **Home** (index) — Hero, positioning statement, overview
2. **About Us** — Team bios (Chris, Tyrone, Gordon), company background
3. **What We Do** — Service offerings, notable transactions
4. **Partners** — Partner logos and descriptions (XA, Direct Engineering, Growthstar)
5. **Contact** — Contact details, office address, enquiry form

## Design Requirements

- Professional, clean investment bank aesthetic
- Existing Bramel branding and colour scheme
- Navigation bar with all pages
- Footer with contact info, copyright, email (sayhello@bramel.co.za)
- Responsive design (mobile-first)

## Conventions

- **Files:** snake_case
- **Folders:** kebab-case
- **Components/Classes:** PascalCase
- **Functions/Variables:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **CSS:** Tailwind via CSS Modules + @apply. No Tailwind classes in markup.
- **Git:** Conventional commits (feat:, fix:, chore:, docs:, test:), UK English, imperative mood

## Content & Design Reference

Screenshots of the existing Wix site are in `/screenshots/`. These are the single source of truth. Produce an exact replica of the existing site — match the layout, colours, typography, spacing, and content as closely as possible. Extract all text content directly from the screenshots. Site images are in `/public/images`.

## Known Issues from Existing Site

- URL slug "copy-of-what-we-do" is a Wix artefact — use "what-we-do" or "what_we_do"
- Phone number inconsistency: 803-9380 vs 807-9380 — confirm correct number before build
- Copyright needs updating to current year

## Security

- No PII logging
- Validate inputs on contact form
- No client-side JavaScript unless strictly necessary (static site)