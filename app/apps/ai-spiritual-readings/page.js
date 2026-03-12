export const metadata = {
  title: "AI Spiritual Readings - Tarot, Horoscope, Palm & More",
  description:
    "Your all-in-one spiritual companion. AI-powered tarot readings, daily horoscope, palm reading, numerology, angel numbers, and daily guidance.",
};

export default function AISpiritualReadingsApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">AI Spiritual Readings</span>
        </h2>
        <p>Tarot, Horoscope, Palm Reading & More</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/ai-spiritual-readings"
            className="store-badge"
            aria-label="Download on the App Store"
          >
            <img
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
        <h3>About AI Spiritual Readings</h3>
        <p>
          Your all-in-one spiritual companion powered by AI. Draw tarot cards and
          receive deeply personalized readings, get your daily horoscope based on
          your birth chart, scan your palm for an AI-powered palm analysis,
          discover your numerology numbers, decode angel number messages, and
          receive daily cosmic guidance — all in one beautifully designed app.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🃏</div>
          <h4>Tarot Readings</h4>
          <p>
            Draw cards from a full 78-card deck. Single card, 3-card spread, or
            Celtic Cross — with rich AI interpretations
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">♈</div>
          <h4>Daily Horoscope</h4>
          <p>
            Personalized daily forecasts for your sun sign — general, love,
            career, and health insights
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🤚</div>
          <h4>Palm Reading</h4>
          <p>
            Photograph your palm and let AI analyze your heart, head, life, and
            fate lines with detailed interpretations
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔢</div>
          <h4>Numerology</h4>
          <p>
            Discover your life path, expression, soul urge, and personal year
            numbers with AI-powered synthesis
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h4>Angel Numbers</h4>
          <p>
            Look up any number sequence for its spiritual meaning. Log sightings
            and track patterns over time
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌟</div>
          <h4>Daily Guidance</h4>
          <p>
            Start each day with a personalized affirmation and cosmic guidance
            tailored to your sign and interests
          </p>
        </div>
      </section>

      <section className="app-card">
        <h3>Premium Features</h3>
        <p>
          AI Spiritual Readings is free to get started with basic features.
          Upgrade to Premium for the full experience:
        </p>
        <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
          <li>AI-powered palm reading with annotated analysis</li>
          <li>Celtic Cross tarot spread (10 cards)</li>
          <li>Full horoscope sections (love, career, health)</li>
          <li>Unlimited AI interpretations across all features</li>
          <li>Save readings to your spiritual journal</li>
        </ul>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about AI Spiritual Readings? We&apos;d love to hear
          from you.
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
          <a
            href="/privacy/ai-spiritual-readings"
            className="btn btn-secondary"
          >
            Privacy Policy
          </a>
          <a href="/terms/ai-spiritual-readings" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
