import Image from "next/image";

export const metadata = {
  title: "Aether - Couples Connection App",
  description:
    "Stay connected with your partner through gentle pulses and whispers. Watch your bond grow with a beautiful living visualization.",
};

export default function AetherApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Aether</span>
        </h2>
        <p>Feel close, always together.</p>
        <div className="download-badges">
          <a
            href="#"
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

      {/* TODO: Add phone screenshots section */}
      {/*
      <section className="phone-showcase">
        <div className="phone-scroll">
          <Image
            src="/aether_phone_visuals/screen1.png"
            alt="Aether - Connection visualization"
            width={280}
            height={560}
            className="phone-image"
          />
        </div>
      </section>
      */}

      <section className="app-card">
        <h3>About Aether</h3>
        <p>
          Aether is a beautifully minimal way for couples to stay connected
          throughout the day. Send a gentle pulse to let your partner know
          you&apos;re thinking of them, or whisper a sweet message — all visualized
          through a stunning, living connection that grows stronger with every
          interaction.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">💗</div>
          <h4>Pulses</h4>
          <p>A gentle tap to say &quot;I&apos;m thinking of you&quot; without words</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💬</div>
          <h4>Whispers</h4>
          <p>Share short, meaningful messages that feel personal and private</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h4>Living Visualization</h4>
          <p>Watch your connection glow brighter as you interact together</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Home Screen Widget</h4>
          <p>Keep your connection visible right on your home screen</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h4>Private by Design</h4>
          <p>Anonymous accounts — no email or phone number required</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">👥</div>
          <h4>Shared Premium</h4>
          <p>One subscription covers both you and your partner</p>
        </div>
      </section>

      <section className="app-card">
        <h3>Premium Features</h3>
        <p>
          Upgrade to Aether Premium for unlimited connection with your partner:
        </p>
        <ul style={{ marginLeft: "2rem", marginTop: "1rem", marginBottom: "1rem", textAlign: "left" }}>
          <li>Unlimited pulses (free version: 10 per day)</li>
          <li>Unlimited whispers (free version: 3 per 48 hours)</li>
          <li>Shared with your partner — only one of you needs to subscribe</li>
        </ul>
        <p>
          Available as monthly or yearly subscription.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Aether? Our team is here to help.
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
          <a href="/privacy/aether" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/aether" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
