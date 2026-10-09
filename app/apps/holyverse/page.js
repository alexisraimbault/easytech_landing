import Image from "next/image";

export const metadata = {
  title: "HolyVerse - Daily Bible Verse",
  description:
    "HolyVerse: one Bible verse each morning with a short reflection and a prayer, on your Lock Screen and Home Screen. Read aloud, journeys through the Christian year, the whole Bible offline and a prayer journal.",
};

export default function HolyVerseApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">HolyVerse</span>
        </h2>
        <p>Begin every day with God&apos;s Word.</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/id6758902864"
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
        <h3>About HolyVerse</h3>
        <p>
          HolyVerse gives you one verse each morning, chosen for what you are
          carrying, with a short reflection and a simple prayer. It waits on
          your Lock Screen and Home Screen, turns over at midnight, and takes
          two quiet minutes: read, pray, tap Amen. The reflections and prayers
          are written for HolyVerse and always labelled, never presented as
          Scripture.
        </p>
      </section>

      <section className="app-card">
        <h3>What&apos;s Inside</h3>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">☀️</div>
            <h4>Your Daily Verse</h4>
            <p>
              A verse for what you carry, with a reflection and a prayer, from
              408 hand-picked mornings that never repeat until you have seen
              them all
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎧</div>
            <h4>Read Aloud</h4>
            <p>
              Every daily verse read aloud in a warm voice, with the words lit
              as they are read
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🕯️</div>
            <h4>Journeys</h4>
            <p>
              17 short journeys through comfort, strength and hope, and the
              Christian year from Advent to Pentecost
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📖</div>
            <h4>The Whole Bible, Offline</h4>
            <p>
              King James Version, World English Bible and Bible in Basic
              English, with search, highlights and free reading plans
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🙏</div>
            <h4>Prayer Journal</h4>
            <p>
              Keep the people and needs you pray for, tap when you have
              prayed, and mark prayers as answered
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h4>Beautiful Widgets</h4>
            <p>
              Home Screen and Lock Screen widgets with illuminated initials and
              classic serif type, plus a Praying for widget
            </p>
          </div>
        </div>
      </section>

      <section className="app-card">
        <h3>Free and Premium</h3>
        <p>
          Scripture stays free: the whole Bible, the daily verse with its
          reflection and prayer, saved verses, reading plans, memorization,
          the prayer journal and widgets. HolyVerse Premium adds listening to
          the daily verse, all 17 journeys, a second verse each day for what
          you carry, and illuminated art for widgets and cards. Your verses,
          prayers and writing stay on your phone. HolyVerse is in English.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about HolyVerse? We&apos;d love to hear from you.
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
          <a href="/privacy/holyverse" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/holyverse" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
