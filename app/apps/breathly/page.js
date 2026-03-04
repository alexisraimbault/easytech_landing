import Image from "next/image";

export const metadata = {
  title: "Breathly - Breathing Exercises",
  description:
    "Guided breathing exercises for stress relief, better sleep, sharper focus, and more energy. 15+ scientifically-backed techniques.",
};

export default function BreathlyApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Breathly</span>
        </h2>
        <p>Breathing Exercises for Calm & Focus</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/breathly-breathing-exercises/id6758902787"
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
        <h3>About Breathly</h3>
        <p>
          Breathe better. Feel better. One session at a time. Breathly guides you
          through beautiful breathing exercises for stress relief, better sleep,
          sharper focus, and more energy. Follow mesmerizing animations
          synchronized to your breath, feel gentle haptic pulses on each
          transition, and let ambient sounds carry you to calm.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🌬️</div>
          <h4>15+ Techniques</h4>
          <p>
            Box Breathing, 4-7-8, Wim Hof, Alternate Nostril, Coherent
            Breathing, Physiological Sigh, and more
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h4>Beautiful Animations</h4>
          <p>
            Mesmerizing visual guides synchronized to your breath for deep
            relaxation
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📳</div>
          <h4>Haptic Feedback</h4>
          <p>
            Gentle vibrations on each transition so you can breathe with eyes
            closed
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎵</div>
          <h4>Ambient Sounds</h4>
          <p>
            Calming soundscapes to enhance your breathing sessions
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">😴</div>
          <h4>Sleep & Stress</h4>
          <p>
            Techniques specifically designed for falling asleep and managing
            anxiety
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Session History</h4>
          <p>
            Track your breathing practice and build a consistent habit
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Breathly? We&apos;d love to hear from you.
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
          <a href="/privacy/breathly" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/breathly" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
