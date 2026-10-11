import Image from "next/image";

export const metadata = {
  title: "Nervine - Somatic Exercises",
  description:
    "Daily somatic exercises to quiet your nervous system. Voice-guided practices for stress, anxiety, burnout, and better sleep.",
};

export default function NervineApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Nervine</span>
        </h2>
        <p>Somatic Exercises for Your Nervous System</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/nervine-somatic-exercises/id000000000"
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
        <h3>About Nervine</h3>
        <p>
          Nervine helps you calm your nervous system in minutes — with guided
          somatic exercises backed by neuroscience. Whether you&apos;re dealing with
          stress, burnout, anxiety, or tension you can&apos;t shake, Nervine gives
          you science-backed practices that work with your body, not against it.
          30+ exercises across 7 categories, voice guidance for eyes-closed
          practice, and before/after check-ins so you can see the change.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🧠</div>
          <h4>30+ Somatic Exercises</h4>
          <p>
            Vagal toning, orienting, discharge, breathwork, grounding, release,
            and activation — each backed by polyvagal theory
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎙️</div>
          <h4>Voice Guidance</h4>
          <p>
            Close your eyes and follow along. Every exercise is voice-guided so
            you can stay present in your body
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Before/After Check-ins</h4>
          <p>
            Rate your tension, energy, and calm before and after each session.
            See the change in real time
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h4>Instant Relief Mode</h4>
          <p>
            Tell the app how you feel — anxious, wired, frozen, overwhelmed —
            and get a practice matched to your state
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📅</div>
          <h4>Guided Programs</h4>
          <p>
            Multi-day structured programs: First Week, Sleep Wind-Down, Vagus
            Activation, Release Stored Tension, and more
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌿</div>
          <h4>Botanical Design</h4>
          <p>
            Crafted with care — dark botanical aesthetic, organic animations,
            and an apothecary-inspired visual language
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Nervine? We&apos;d love to hear from you.
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
          <a href="/privacy/nervine" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/nervine" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
