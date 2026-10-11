import Link from "next/link";
import { pageMeta, formatDate, formatMonth, CONTACT_EMAIL, SITE_URL, FOUNDED } from "@/lib/site";
import { products } from "@/data/products";
import appsData from "@/data/apps.json";
import shipping from "@/data/shipping.json";
import Scoreboard from "@/components/marketing/Scoreboard";
import ProductCard from "@/components/marketing/ProductCard";
import AppTile from "@/components/marketing/AppTile";

export const metadata = pageMeta({
  description:
    "EASYTECH is an AI studio in Annecy, France. 21 apps live on the App Store, 4 SaaS products, and a dated log of everything we ship.",
  path: "/",
});

const liveApps = appsData.apps.filter((a) => a.status === "live");

export default function Home() {
  const latest = shipping.entries.slice(0, 5);
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EASYTECH",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    foundingDate: FOUNDED,
    founder: { "@type": "Person", name: "Alexis Raimbault" },
    address: { "@type": "PostalAddress", addressLocality: "Annecy", addressCountry: "FR" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <section className="hero wrap" id="top">
        <div className="stamp" aria-hidden="true">Made in<br />Annecy,<br />France</div>
        <h1>An AI studio that ships.</h1>
        <p className="sub">
          EASYTECH is a small studio in Annecy. We build and run our own apps and SaaS products with AI, and we log what we ship, with dates.
        </p>
        <div className="actions">
          <Link className="btn" href="/shipping">See what we ship</Link>
          <Link className="btn alt" href="/products">Our products</Link>
        </div>
        <div className="cloud">
          <Link className="c1" href="/products/mapable">Mapable</Link>
          <Link className="c2" href="/products/decko">decko</Link>
          <Link className="c3" href="/products/flightdeck">Flightdeck</Link>
          <Link className="c4" href="/products/vusurplan">vusurplan</Link>
          <Link className="c5" href="/apps">{liveApps.length} apps</Link>
        </div>
      </section>

      <section className="wrap section tight" aria-labelledby="proof-h">
        <h2 className="h2" id="proof-h">The scoreboard</h2>
        <p className="lede">Each number can be checked: the App Store for the apps, our product list for the SaaS, the company register for the date.</p>
        <Scoreboard apps={liveApps.length} saas={products.length} sinceLabel="April 2025" />
      </section>

      <section className="wrap section tight" id="products" aria-labelledby="prod-h">
        <h2 className="h2" id="prod-h">Four SaaS products</h2>
        <p className="lede">Products we run ourselves. Each one links to its own site.</p>
        <div className="wall">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="wrap section tight" id="apps" aria-labelledby="apps-h">
        <h2 className="sub-h" id="apps-h">{liveApps.length} apps on the App Store</h2>
        <ul className="apps-grid">
          {liveApps.map((a) => (
            <li key={a.name}>
              <AppTile app={a} />
            </li>
          ))}
        </ul>
        <p className="fine">
          Mapable is also one of the four SaaS products above. <Link className="text-link" href="/apps">All apps</Link>
        </p>
      </section>

      <section className="wrap section tight" aria-labelledby="ship-h">
        <h2 className="h2" id="ship-h">Shipping log</h2>
        <p className="lede">Releases and project starts, newest first. Only entries with a date we can verify are listed.</p>
        <ul className="log">
          {latest.map((e) => (
            <li key={e.date + e.title}>
              <time dateTime={e.date}>{formatDate(e.date)}</time>
              <div>
                <h3>{e.title}</h3>
              </div>
            </li>
          ))}
        </ul>
        <p className="fine">
          <Link className="text-link" href="/shipping">Full log since {formatMonth(shipping.entries[shipping.entries.length - 1].date)}</Link>
        </p>
      </section>

      <section className="wrap section tight" aria-label="About">
        <div className="strip">
          <p>Based in Annecy, building since April 2025.</p>
          <Link className="btn alt" href="/about">About EASYTECH</Link>
        </div>
      </section>

      <section className="offer section" id="work" aria-labelledby="work-h">
        <div className="wrap">
          <h2 className="h2" id="work-h">Work with us</h2>
          <p className="lede">One consulting offer: a week to find where AI pays off in your company, and what to build first.</p>
          <article className="ticket">
            <div className="stub"><strong>1 wk</strong><small>one week</small></div>
            <div className="body">
              <h3>AI Audit &amp; Roadmap</h3>
              <p>We look at how your teams work and list the places where AI could help. You get the use cases ranked, an estimate of the return on each, and a plan to build the first ones.</p>
              <ul>
                <li>Use cases mapped and ranked</li>
                <li>Return estimated for each</li>
                <li>Execution plan</li>
              </ul>
              <div className="meta">
                <span>A few slots each quarter</span>
                <span>Price: on quote</span>
              </div>
            </div>
          </article>
          <div className="actions">
            <a className="btn" href={`mailto:${CONTACT_EMAIL}?subject=AI%20Audit%20%26%20Roadmap`}>Ask for an AI audit</a>
            <span>or write to {CONTACT_EMAIL}</span>
          </div>
        </div>
      </section>
    </>
  );
}
