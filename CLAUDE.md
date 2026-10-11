# EASYTECH landing - Project Architecture

## RULE ZERO: never break the legal routes

This site is a public contract with Apple and Google. About 56 distinct URLs
of this site are stored in App Store Connect (privacy policy, terms, support and
marketing URLs), in store listings and in the code of published iOS apps. Those
apps cannot be changed without a new release.

- `/privacy`, `/privacy/<slug>`, `/terms`, `/terms/<slug>`, `/apps/<slug>` and `/`
  must always answer **HTTP 200 on the same path**.
- **No redirect, no rename, no move of those paths.** Never add a `redirects()`
  or rewrite rule (or middleware) that can match `/privacy/*`, `/terms/*` or `/apps/*`.
- Historical slugs stay as they are: `debate-coach` (Argue), `vocalcoach` (Clarion),
  `pacent`, `second-spring`, `ai-nail-design`, `ai-spiritual-readings`, `pdfmarmot`,
  `bento-streaks`, `worldmonitor`, and both `/privacy/lightmeter-pro` and
  `/privacy/lightmeter_pro` (underscore, the one the stores use).
- `/privacy` and `/terms` (no slug) are dynamic: they read `?app=Name`. Keep that.
- Legal text is not rewritten as part of marketing work. It says "EasyTech Agency".
  French only for Hibi.
- `master` deploys to production on Vercel at every push. Work on a branch, and
  check the guard rail before merging (see below).

## Guard rail (run before and after any change to routing or layouts)

1. `npm run build` and keep the route list printed at the end. After a change,
   every route listed before must still be listed.
2. `npm run lint` must pass (a lint error fails the Vercel build).
3. Run the URL check: the script lives outside the repo (so it does not trigger a
   deploy). It starts `npm run start` on a free port and requires HTTP 200,
   without following redirects, for every URL in the App Store Connect export plus
   every legal/app/marketing route. Reference copy:
   `/private/tmp/claude-501/-Users-alexisraimbault-Documents-projets/cb5a9ae1-281d-477b-be8d-28109cf349ac/scratchpad/check_legal_urls.sh`
   (an older, remote version is in `brain_v2/company/landing-audit.md`, section 5.4).
   `/primacy` is a known 404 typo in a Breathly locale and is excluded.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, JavaScript
- **Marketing styling:** one plain CSS file, `app/(marketing)/marketing.css`
  (tokens, light + dark via `prefers-color-scheme`, reduced motion, mobile first)
- **Legal styling:** the original `app/(legal)/globals.css` (Tailwind import, Google
  fonts via `@import`). Do not touch it.
- **Fonts (marketing):** `next/font/google`, Bricolage Grotesque (display) and Hanken Grotesk (body)

## Structure: two route groups, two root layouts

There is deliberately **no `app/layout.js`**. Each group has its own root layout
(its own `<html>` and `<body>`), so the two groups are separate documents: CSS
from one can never leak into the other, even after client-side navigation
(Next.js does a full page load when moving between root layouts). Route groups do
not appear in URLs.

```
app/
  (marketing)/               # new site: own layout, own CSS, own fonts
    layout.js                # <html>, next/font, SiteHeader/SiteFooter, metadata (title template, metadataBase)
    marketing.css
    page.js                  # / (home)
    products/page.js         # /products
    products/[slug]/page.js  # /products/mapable|decko|flightdeck|vusurplan (data/products.js)
    shipping/page.js         # /shipping (reads data/shipping.json)
    about/page.js            # /about
    apps/page.js             # /apps (index, reads data/apps.json)
    opengraph-image.js, twitter-image.js
  (legal)/                   # ORIGINAL layout + globals.css, moved unchanged
    layout.js                # old header/footer + globals.css
    globals.css
    privacy/...              # /privacy, /privacy/<slug>, /privacy/lightmeter_pro
    terms/...                # /terms, /terms/<slug>
    apps/<slug>/page.js      # /apps/<slug> (app pages, support/marketing URL in the stores)
  icon.svg, apple-icon.png, favicon.ico   # neutral EASYTECH favicon (shared)
  robots.js, sitemap.js
components/marketing/        # SiteHeader, SiteNav (client), SiteFooter, ProductCard, AppTile, Scoreboard (client)
data/
  apps.json                  # every app with a page; live ones carry App Store id, category, first release date
  shipping.json              # dated journal behind /shipping
  products.js                # the four SaaS products (factual text)
lib/site.js                  # SITE_URL, CONTACT_EMAIL, pageMeta(), date formatting
public/                      # app-icons/, alexis.jpg, Hibi visuals, store badges
```

`/apps` (index, marketing group) and `/apps/<slug>` (legal group) live in
different groups on purpose. Both are plain static routes and do not conflict.

## Routes

| Route | Group | Notes |
|-------|-------|-------|
| `/` | marketing | Home: studio hero, scoreboard, 4 SaaS wall, apps grid, shipping teaser, AI Audit offer at the bottom |
| `/products`, `/products/<slug>` | marketing | mapable, decko, flightdeck, vusurplan |
| `/shipping` | marketing | Journal generated from `data/shipping.json` |
| `/about` | marketing | Founder page, photo `public/alexis.jpg` |
| `/apps` | marketing | Index of all 23 app pages plus Mapable |
| `/apps/<slug>` (23) | legal | Support/marketing URLs in the stores |
| `/privacy`, `/terms` | legal | Dynamic (`?app=`) |
| `/privacy/<slug>` (23 + `lightmeter_pro`), `/terms/<slug>` (23) | legal | LEGAL, never break |
| `/sitemap.xml`, `/robots.txt`, `/icon.svg`, `/apple-icon.png` | root | Canonical domain `https://www.easytech-agency.net` |

Unmatched URLs return the default Next.js 404 (no root layout at `app/`). A
branded 404 would need `experimental.globalNotFound`; not enabled on purpose.

## Content rules for marketing pages

- English, concrete. No invented customers, testimonials, logos, prices, MRR or metrics.
- The end client and the IT services firm used for consulting are never named.
- Counters must be verifiable: 21 apps live on the App Store (App Store Connect,
  state READY_FOR_SALE, Mapable included), 4 SaaS, company created 18 April 2025.
- vusurplan is described as in its launch phase; decko as closed beta.
- Consulting: a single offer, "AI Audit & Roadmap", price "on quote", no configurator.
- Contact email: `contact@easytech-agency.net` (confirmed).

## Updating the data files

- `data/shipping.json`: only entries with a verifiable date. App dates come from the
  Apple lookup `releaseDate` (cross-checked against App Store Connect version creation
  dates, read-only GET calls). Project starts come from the first git commit
  (`git log --max-parents=0`). Company date from the French company register.
  Entries without a verifiable date are omitted.
- `data/apps.json`: add a new app here when it ships, with its App Store id, and
  put its icon at `public/app-icons/<slug>.png` (160 px).

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build (also runs ESLint)
npm run start    # Production server
npm run lint     # ESLint check
```

## Adding a new app (legal + app pages)

1. App page: `app/(legal)/apps/[slug]/page.js`
2. Privacy page: `app/(legal)/privacy/[slug]/page.js`
3. Terms page: `app/(legal)/terms/[slug]/page.js`
4. Add the app to `data/apps.json` (and `data/shipping.json` once it is live) so it appears on `/apps` and `/`.
5. Add the new paths to the guard-rail script, then run build, lint and the URL check.

Pick a stable slug: it ends up in App Store Connect and can never change.

## Notes

- Hibi legal pages are in French; all others are English.
- The legal layout header still links to `Home`/`Apps` with the old look. Moving
  between groups is a full page load, which is intended.
