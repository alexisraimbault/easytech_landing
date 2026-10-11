import Image from "next/image";
import Link from "next/link";
import { pageMeta, CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description: "EASYTECH is run by Alexis Raimbault from Annecy, France. A small studio, created in April 2025.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <section className="wrap page-head">
        <h1>About</h1>
      </section>
      <section className="wrap section tight">
        <div className="about-grid">
          <figure className="portrait">
            <Image
              src="/alexis.jpg"
              alt="Alexis Raimbault, founder of EASYTECH, trail running in a mountain riverbed"
              width={803}
              height={1100}
              sizes="(min-width: 900px) 40vw, 92vw"
              priority
            />
            <figcaption>Alexis Raimbault, during a trail race.</figcaption>
          </figure>
          <div className="about-copy">
            <h2 className="h2">Alexis Raimbault</h2>
            <p style={{ marginTop: 12, fontWeight: 700 }}>Founder, EASYTECH. Annecy, France.</p>
            <div style={{ marginTop: 24 }}>
              <p>
                I created EASYTECH in April 2025. The company is based in Annecy, in the French Alps region.
              </p>
              <p>
                I build the studio&apos;s apps and SaaS products myself, using AI tools at each step from the first sketch to the release. So far that is 21 apps on the App Store and 4 SaaS products. Every release date is listed in the <Link className="text-link" href="/shipping">shipping log</Link>.
              </p>
              <p>
                EASYTECH also offers one consulting package, the <Link className="text-link" href="/#work">AI Audit &amp; Roadmap</Link>.
              </p>
              <p>
                To reach me, write to <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
