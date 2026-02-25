# bramel.co.za — Build Brief

## Overview

Restructure bramel.co.za from a multi-page Wix site into a single-page, statically hosted website. This is not a redesign — the existing colours, typography and overall aesthetic should be preserved. The change is structural: consolidating five pages into one clean scrolling page, tightening the copy, and removing Wix. The vibe is "if you know, you know."

## Tech Stack

- **Framework:** Next.js (static export) or Astro — whichever is leaner for a single-page site
- **Styling:** Tailwind via CSS Modules + `@apply`. Zero Tailwind classes in JSX.
- **Hosting:** To be determined (likely Vercel or Railway)
- **Domain:** bramel.co.za (existing, DNS to be migrated from Wix)
- **No CMS, no blog, no JS-heavy interactivity** — this is a static brochure site

## Design Direction

### Palette & Typography
- **Preserve the existing bramel.co.za aesthetic** — light background, current colour palette, current typographic feel
- Reference the live Wix site (https://www.bramel.co.za) for colours, fonts and general tone
- If exact Wix fonts are not available, match as closely as possible

### Layout
- Single page, smooth vertical scroll
- Generous whitespace between sections — let the page breathe
- Max content width ~800px, centred
- No images, no stock photography, no icons
- No hamburger menu — just logo (top left) and "Contact" anchor link (top right)
- Mobile responsive
- Clean, professional — maintain the existing understated feel

### Interactions
- Smooth scroll to sections
- Hover state on "Contact" link and email/phone in footer
- No parallax, no heavy animations, no loading screens

## Page Structure & Copy

### 1. Header (fixed/sticky)
- **Left:** Bramel logo (source SVG from existing site)
- **Right:** "Contact" — anchor link to footer

### 2. Hero (full viewport height, vertically centred)

```
Corporate action specialists
```

Nothing else. No subtitle, no CTA button, no tagline beneath it. Just the line, centred, in large type matching existing heading style.

### 3. Positioning

```
For over 20 years, Bramel has partnered with shareholders and management
teams on complex corporate transactions. We don't advise from the
sidelines — we've been principals, operators and funders. That proximity
to risk is what sets us apart.
```

Single paragraph, centred. No heading for this section.

### 4. Services

**Heading:** What we do

Render as a clean, minimal list — no descriptions, no icons, no cards:

- Mergers & acquisitions
- Management and leveraged buyouts
- Listings and delistings
- Capital raising
- Special opportunity transactions
- Strategic advisory

### 5. Credentials

**Heading:** Select experience

Render as brief, standalone statements — each on its own line or as a subtle block. No company names:

- JSE delisting and management buyout of a South African industrial conglomerate, subsequently acquired by a JSE-listed group
- Establishment of a US consumer finance business for a prominent South African financial institution
- Capital raising and operational restructuring for engineering and technology businesses
- Cross-border M&A advisory for European and African principals

### 6. Team

**Heading:** Team

Two team members, displayed side by side on desktop, stacked on mobile. LinkedIn links as subtle outbound icons or text links.

**Chris Ransome, CA(SA)**
Deloitte alumni. Over 25 years in corporate finance, having promoted two JSE IPOs and led transactions across engineering, industrial, automotive and IT. Holds three non-executive board positions.
[LinkedIn ↗]

**Tyrone Niland**
15 years across digital communications, media, property, software and travel. Leads capital raising, M&A and strategy engagements for engineering, technology and industrial clients.
[LinkedIn ↗]

### 7. Footer

Understated, no visual separation — just a subtle shift or rule line.

```
Bramel Business Solutions (Pty) Ltd

Bradenham Hall · 7 Mellis Road · Rivonia · South Africa
Associate offices in Botswana · Luxembourg · United States

reach@bramel.co.za · +27 (11) 803-9380

© 2021–2025
```

Email should be a mailto: link. Phone should be a tel: link.

## Naming Conventions

- Files: `snake_case`
- Folders: `kebab-case`
- Components/classes: `PascalCase`
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

## Git

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`
- UK English, imperative mood

## Security & Quality

- No PII logging
- Validate inputs at API boundaries (contact form if added later)
- Flag any security implications
- Ensure accessibility basics: semantic HTML, sufficient contrast ratios on dark background, proper heading hierarchy

## Out of Scope (for now)

- Contact form (email/tel links are sufficient)
- Analytics (can be added later)
- SEO meta tags beyond basics (title, description, OG image)
- Cookie banners
- Blog or news section
- Partner logos
