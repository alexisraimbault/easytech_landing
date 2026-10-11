// Factual product descriptions, based on the product notes in brain_v2/products/*.md
// (checked 2026-10-11). Do not add claims that are not true today: no customer
// counts, no revenue, no testimonials.
export const products = [
  {
    slug: "mapable",
    name: "Mapable",
    color: "yellow",
    glyph: "circle",
    url: "https://mapable.dev",
    urlLabel: "mapable.dev",
    status: "Live on iOS",
    summary: "An AI notes and journal app. Capture text, voice, photos, links and video, and the AI sorts them for you.",
    description: [
      "Mapable captures notes in several forms (text, voice, photo, link, video) and organizes them with AI. It sorts each capture under a small set of topics, links it to related notes, and lets you ask questions about what you saved.",
      "The iOS app has been on the App Store since April 2026. A new version of the app and of its backend is in progress.",
    ],
    facts: [
      ["Status", "iOS app on the App Store since April 2026; a new version is in progress"],
      ["Platforms", "iOS"],
      ["Model", "Free tier with a Pro subscription"],
      ["Under the hood", "SwiftUI app, FastAPI backend on Google Cloud Run, Postgres with pgvector, Gemini models"],
    ],
    links: [
      { label: "Open mapable.dev", href: "https://mapable.dev" },
      { label: "Mapable on the App Store", href: "https://apps.apple.com/app/id6761822453" },
    ],
  },
  {
    slug: "decko",
    name: "decko",
    color: "pink",
    glyph: "square",
    url: "https://decko.me",
    urlLabel: "decko.me",
    status: "Live, closed beta",
    summary: "Presentation decks drafted by AI. Chat to a plan, then edit the deck and export it as native .pptx.",
    description: [
      "decko is a chat-first deck builder. You describe the presentation, approve the outline, and get an editable deck. Slides can use web search with cited sources, and the deck exports to native PowerPoint (.pptx) and PDF.",
      "It is aimed at independent consultants and founders. decko is online and in closed beta: testers get access by invitation. We do not publish user numbers for it.",
    ],
    facts: [
      ["Status", "Online at decko.me, app at app.decko.me, closed beta"],
      ["Languages", "Interface in English and French"],
      ["Export", "Native .pptx and PDF"],
      ["Under the hood", "React and TypeScript front end on Firebase, a separate AI server on Google Cloud Run, Gemini models"],
    ],
    links: [
      { label: "Open decko.me", href: "https://decko.me" },
      { label: "Open the app", href: "https://app.decko.me" },
    ],
  },
  {
    slug: "flightdeck",
    name: "Flightdeck",
    color: "blue",
    glyph: "pill",
    url: "https://finance-cockpit.app",
    urlLabel: "finance-cockpit.app",
    status: "Live",
    summary: "A financial cockpit for active traders. Its gauges are computed from the text of the news.",
    description: [
      "Flightdeck reads a large set of news feeds continuously and scores each story with a classifier. From those answers it computes nine gauges from 0 to 100, news pressure per asset, a region map, a regular briefing and alerts. The aim is to see why a market moves without reading news all day.",
      "It is live as a paid product with a 7-day free trial that needs no card.",
    ],
    facts: [
      ["Status", "Live at finance-cockpit.app, in active development"],
      ["Audience", "Active traders: crypto, FX, futures, swing"],
      ["Pricing", "Paid subscription with a 7-day free trial, no card required"],
      ["Under the hood", "TypeScript pipeline on Google Cloud Run, Firebase, Stripe for billing"],
    ],
    links: [{ label: "Open finance-cockpit.app", href: "https://finance-cockpit.app" }],
  },
  {
    slug: "vusurplan",
    name: "vusurplan",
    color: "mint",
    glyph: "triangle",
    url: "https://vusurplan.app",
    urlLabel: "vusurplan.app",
    status: "Launching",
    summary: "Turns a property developer's sales plans into an online sales space for new-build homes.",
    description: [
      "vusurplan takes the architect's sales plans (PDF) for a new-build residential program and builds an online sales space from them: a 3D model of the building, plans and rendered ambiances for each home, and a callback form for buyers. Surface areas are read as printed on the plans and checked against each other.",
      "vusurplan is in its launch phase. The site is online with demo programs, and we are showing it to property developers. The product is in French.",
    ],
    facts: [
      ["Status", "Launch phase: online with demo programs"],
      ["Audience", "Property developers selling new-build homes in France"],
      ["Language", "French"],
      ["Under the hood", "Next.js site, Python worker, Blender renders, Google Cloud AI models"],
    ],
    links: [{ label: "Open vusurplan.app", href: "https://vusurplan.app" }],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
