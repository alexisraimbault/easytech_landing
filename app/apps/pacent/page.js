import Image from "next/image";

export const metadata = {
  title: "Pacent — Japanese Walking Method",
  description:
    "Walk smarter, not longer. Pacent guides you through Interval Walking Training (the Japanese Walking Method) with live cadence, audio cues, and a calibrated pace built from your own walk.",
};

export default function PacentApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Pacent</span>
        </h2>
        <p>The Japanese Walking Method, guided.</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/pacent/id000000000"
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
        <h3>About Pacent</h3>
        <p>
          Pacent guides you through Interval Walking Training — the protocol
          known in Japan as the Japanese Walking Method. Alternate 3 minutes of
          brisk walking with 3 minutes of easy walking, repeated five times,
          four days a week. The original Shinshu University study by Nemoto et
          al. found measurable gains in aerobic capacity, leg strength, and
          blood pressure where ordinary walking did not. Pacent calibrates your
          fast and slow pace from a real walk on your phone, then drives the
          intervals with live cadence, audio cues, and haptics — so all you
          have to do is step out the door.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🚶</div>
          <h4>Calibrated to You</h4>
          <p>
            Walk normally for a moment during onboarding — Pacent measures your
            cadence and derives a brisk target you can actually hit
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⏱️</div>
          <h4>Live Cadence</h4>
          <p>
            Real-time steps-per-minute with a build / in-zone / pushing chip,
            powered by the iPhone pedometer and motion sensors
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎧</div>
          <h4>Voice & Haptic Cues</h4>
          <p>
            Choose voice, chime, or silent-haptic — clear transitions between
            fast and slow intervals, with screen-off support
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">❤️</div>
          <h4>Apple Health</h4>
          <p>
            Sessions are saved as walking workouts in Apple Health and count
            toward your activity rings
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📈</div>
          <h4>Pace Progression</h4>
          <p>
            See how your brisk and easy cadence evolve session over session
            with a clean Swift Charts view
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🧠</div>
          <h4>Backed by Research</h4>
          <p>
            Built on the Nemoto et al. protocol — the same intervals shown to
            improve aerobic fitness and leg strength in adults 40+
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support &amp; Contact</h3>
        <p>
          Have questions about Pacent? We&apos;d love to hear from you.
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
          <a href="/privacy/pacent" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/pacent" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
