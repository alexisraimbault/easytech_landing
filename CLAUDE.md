# EasyTech Landing - Project Architecture

## Overview

This is a landing page website for EasyTech Agency, showcasing mobile applications (Hibi and Bento Streaks) with their respective legal pages.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.0.0
- **Styling:** Tailwind CSS 4 + Custom CSS with design system variables
- **Language:** JavaScript (JSX)

## Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout (header, footer, nav)
│   ├── page.js                   # Home page
│   ├── globals.css               # Global styles & CSS variables
│   ├── apps/                     # App landing pages
│   │   ├── hibi/page.js
│   │   └── bento-streaks/page.js
│   ├── privacy/                  # Privacy policy pages
│   │   ├── hibi/page.js
│   │   └── bento-streaks/page.js
│   └── terms/                    # Terms of service pages
│       ├── hibi/page.js
│       └── bento-streaks/page.js
├── components/                   # Reusable React components
│   ├── Header.js
│   └── Footer.js
├── public/                       # Static assets
│   ├── hibi_phone_visuals/       # Phone screenshots
│   ├── *.png, *.svg              # Images and icons
└── package.json
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Agency home page |
| `/apps/hibi` | Hibi app landing page |
| `/apps/bento-streaks` | Bento Streaks app landing page |
| `/privacy/hibi` | Hibi privacy policy |
| `/privacy/bento-streaks` | Bento Streaks privacy policy |
| `/terms/hibi` | Hibi terms of service |
| `/terms/bento-streaks` | Bento Streaks terms of service |

## Design System

CSS custom properties are defined in `globals.css`:

- **Colors:** `--primary` (orange-red), `--secondary` (orange), `--background` (warm beige)
- **Spacing:** `--spacing-xs` through `--spacing-xxl` (4px to 48px)
- **Border radius:** `--radius-xs` through `--radius-round`
- **Typography:** System font stack, sizes from `--font-xs` to `--font-xxxl`

## Key Patterns

- **Page metadata:** Each page exports a `metadata` object for SEO
- **CSS classes:** `.hero`, `.app-card`, `.features-grid`, `.btn`, `.legal-content`
- **Images:** Use Next.js `Image` component for optimization
- **Navigation:** Next.js `Link` for internal routing

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## Adding a New App

1. Create app page at `app/apps/[app-name]/page.js`
2. Create privacy page at `app/privacy/[app-name]/page.js`
3. Create terms page at `app/terms/[app-name]/page.js`
4. Add phone visuals to `public/[app-name]_phone_visuals/`
5. Add app icon to `public/`

## Notes

- Hibi legal pages are in French
- Bento Streaks legal pages are in English
- Header/Footer components exist but layout is currently in `layout.js`
