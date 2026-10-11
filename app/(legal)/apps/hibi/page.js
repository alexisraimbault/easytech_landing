import Image from "next/image";

export const metadata = {
  title: "Hibi - AI-Powered Personal Development App",
  description:
    "Build better habits with Hibi, your personal coach powered by artificial intelligence",
};

export default function HibiApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS & Android App</span>
        <h2>
          <span className="hero-accent">Hibi</span>
        </h2>
        <p>Your personal coach for building better habits</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/fr/app/hibi-ai-habit-coach/id6747954401"
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
          <a
            href="https://play.google.com/store/apps/details?id=com.alexisraimbault.hibi"
            className="store-badge"
            aria-label="Get it on Google Play"
          >
            <Image
              src="/playstore.png"
              alt="Get it on Google Play"
              width={170}
              height={50}
              style={{ height: "auto" }}
            />
          </a>
        </div>
      </section>

      <section className="phone-showcase">
        <div className="phone-scroll">
          <Image
            src="/hibi_phone_visuals/Slice 1.png"
            alt="Hibi - Home screen"
            width={280}
            height={560}
            className="phone-image"
          />
          <Image
            src="/hibi_phone_visuals/Slice 2.png"
            alt="Hibi - Habit tracking"
            width={280}
            height={560}
            className="phone-image"
          />
          <Image
            src="/hibi_phone_visuals/Slice 3.png"
            alt="Hibi - Statistics"
            width={280}
            height={560}
            className="phone-image"
          />
          <Image
            src="/hibi_phone_visuals/Slice 4.png"
            alt="Hibi - AI advice"
            width={280}
            height={560}
            className="phone-image"
          />
          <Image
            src="/hibi_phone_visuals/Slice 5.png"
            alt="Hibi - Reminders"
            width={280}
            height={560}
            className="phone-image"
          />
          <Image
            src="/hibi_phone_visuals/Slice 6.png"
            alt="Hibi - Settings"
            width={280}
            height={560}
            className="phone-image"
          />
        </div>
      </section>

      <section className="app-card">
        <h3>About Hibi</h3>
        <p>
          Hibi is a personal development application that uses artificial
          intelligence to help you create and maintain good habits. Thanks to
          advanced algorithms, Hibi adapts to your lifestyle and offers you
          personalized advice.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🎯</div>
          <h4>Smart Tracking</h4>
          <p>Track your daily habits with precision and simplicity</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🤖</div>
          <h4>AI Coaching</h4>
          <p>Receive personalized recommendations tailored to you</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Detailed Analytics</h4>
          <p>Visualize your statistics and progress</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔔</div>
          <h4>Adaptive Reminders</h4>
          <p>Smart notifications at the right time</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h4>Intuitive Interface</h4>
          <p>A modern and pleasant user experience</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h4>Private Data</h4>
          <p>Your data stays secure and confidential</p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Hibi? Our team is here to help.
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
          <a href="/privacy/hibi" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/hibi" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
