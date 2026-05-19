import Image from "next/image";

export const metadata = {
  title: "WorldMonitor - Real-Time Disaster Alerts",
  description:
    "Real-time global disaster monitoring. Earthquakes, wildfires, volcanoes, storms, and floods — alerts tailored to where you live and what matters to you.",
};

export default function WorldMonitorApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">WorldMonitor</span>
        </h2>
        <p>Real-Time Global Disaster Alerts</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/worldmonitor/id000000000"
            className="store-badge"
            aria-label="Download on the App Store"
          >
            <Image
              src="/app-store.png"
              alt="Download on the App Store"
              width={170}
              height={50}
              style={{ height: "auto" }}
            />
          </a>
        </div>
      </section>

      <section className="app-card">
        <h3>About WorldMonitor</h3>
        <p>
          WorldMonitor is a real-time disaster tracker that pulls directly from
          official sources — USGS, NASA EONET, NOAA, and GDACS — and pushes you
          a notification the moment something matches the alerts you set up. No
          ads, no clickbait headlines, no doom-scrolling feed. You set the
          rules: which categories, what magnitude or severity threshold, and
          which area to watch. The app stays quiet until a rule actually
          matches, then it tells you in seconds.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🌍</div>
          <h4>Multi-Hazard Coverage</h4>
          <p>
            Earthquakes, wildfires, volcanoes, tropical storms, and floods —
            all on a single map and feed
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📡</div>
          <h4>Official Sources Only</h4>
          <p>
            USGS, NASA EONET, NOAA, and GDACS — no rumors, no aggregator
            middlemen. Refreshed every 2 minutes
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔔</div>
          <h4>Custom Alert Rules</h4>
          <p>
            Set as many alert rules as you want — different category,
            threshold, and area per rule. &ldquo;M5+ near home AND wildfires within
            200km of family.&rdquo;
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📍</div>
          <h4>Proximity-Based</h4>
          <p>
            Filter alerts by distance from your location or any chosen center.
            Or keep it worldwide — your call
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌐</div>
          <h4>7 Languages</h4>
          <p>
            English, Spanish, Portuguese (BR), Indonesian, Italian, French, and
            German — including the push notification body
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h4>Privacy-First</h4>
          <p>
            No tracking beyond anonymous analytics. Your alert preferences live
            on a Cloudflare backend — nothing else
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about WorldMonitor? We&apos;d love to hear from you.
          <br />
          <a href="mailto:contact@easytech-agency.net">
            contact@easytech-agency.net
          </a>
        </p>
      </section>

      <div className="section-divider"></div>

      <section className="app-card">
        <h3>Legal Information</h3>
        <p>
          Review our legal documents to learn more about our privacy policy and
          terms of use.
        </p>
        <div className="app-links">
          <a href="/privacy/worldmonitor" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/worldmonitor" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
