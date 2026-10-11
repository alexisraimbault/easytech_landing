import Link from "next/link";
import { pageMeta } from "@/lib/site";
import appsData from "@/data/apps.json";
import AppTile from "@/components/marketing/AppTile";

export const metadata = pageMeta({
  title: "Apps",
  description: "The mobile apps published by EASYTECH: 21 live on the App Store, plus the ones still in preparation.",
  path: "/apps",
});

const live = appsData.apps.filter((a) => a.status === "live");
const other = appsData.apps.filter((a) => a.status !== "live");

export default function AppsIndex() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Apps</h1>
        <p className="lede">
          {live.length} apps are live on the App Store. Each page has the app&apos;s details, privacy policy and terms.
        </p>
      </section>

      <section className="wrap section tight" aria-labelledby="live-h">
        <h2 className="sub-h" id="live-h">Live on the App Store</h2>
        <ul className="apps-grid">
          {live.map((a) => (
            <li key={a.name}>
              <AppTile app={a} detail="tagline" />
            </li>
          ))}
        </ul>
        <p className="fine">
          Mapable is also one of our <Link className="text-link" href="/products">SaaS products</Link>.
        </p>
      </section>

      <section className="wrap section tight" aria-labelledby="soon-h">
        <h2 className="sub-h" id="soon-h">Not on the App Store yet</h2>
        <ul className="apps-grid">
          {other.map((a) => (
            <li key={a.name}>
              <AppTile app={{ ...a, category: a.slug === "unbothered" ? a.statusLabel : a.category }} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
