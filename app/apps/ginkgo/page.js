import Image from "next/image";

export const metadata = {
  title: "Ginkgo - Tai Chi for Balance",
  description:
    "Gentle tai chi for balance, fall prevention, and confident steps. Daily video-guided routines, structured programs, and 38 exercises — designed for adults 50+.",
};

export default function GinkgoApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Ginkgo</span>
        </h2>
        <p>Gentle Tai Chi for Balance & Confident Steps</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/ginkgo-tai-chi-for-balance/id000000000"
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
        <h3>About Ginkgo</h3>
        <p>
          Ginkgo helps you regain balance and walk with confidence — through
          gentle tai chi practice recommended by the CDC for fall prevention.
          38 video-guided exercises across 8 categories, daily routines from
          5 to 15 minutes, and structured programs that meet you where you are.
          Designed for adults 50+, with chair options throughout and
          trauma-informed safety notes.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🌿</div>
          <h4>38 Exercises</h4>
          <p>
            Foundation stances, weight shifting, single-leg balance, walking
            forms, seated options, breathing, and cool-down — each with
            on-screen video instruction
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">▶️</div>
          <h4>Daily Routines</h4>
          <p>
            Quick 5, Morning Wake-Up, Walking Warm-Up, Before-Bed Calm, and
            more — short sequences from 5 to 15 minutes you can repeat daily
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📅</div>
          <h4>Guided Programs</h4>
          <p>
            Multi-day structured programs: Foundation (14 days), Sitting to
            Standing (10 days), Walking Confidence (14 days), Tai Chi Basics
            (21 days), and Advanced Flow
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🪑</div>
          <h4>Chair-Friendly</h4>
          <p>
            Every exercise marked with its chair option. A full seated
            routine for low-energy days. Practice however your body needs
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h4>Safety First</h4>
          <p>
            Clear safety notes on every exercise. Single-leg work always
            paired with support. Gentle, never forced
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Progress Tracking</h4>
          <p>
            Daily streaks, session history, and program progress so you can
            see the change over time
          </p>
        </div>
      </section>

      <section className="app-card">
        <h3>Backed by Research</h3>
        <p>
          The CDC recommends tai chi for fall prevention in adults over 65.
          A 2017 BMJ meta-analysis found daily practitioners experience 43%
          fewer falls. Balance scores improve up to 2× in 12 weeks of
          practice (Journal of Geriatrics, 2020). Five minutes a day is enough
          to begin (Harvard Medical School).
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Ginkgo? We&apos;d love to hear from you.
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
          <a href="/privacy/ginkgo" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/ginkgo" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
