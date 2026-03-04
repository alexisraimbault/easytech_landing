import Image from "next/image";

export const metadata = {
  title: "Sculpt - Face Yoga & Exercises",
  description:
    "Transform your face naturally with personalized face yoga routines, guided exercises, and progress tracking.",
};

export default function SculptApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Sculpt</span>
        </h2>
        <p>Face Yoga & Exercises</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/sculpt-face-yoga-exercises/id6759115699"
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
        <h3>About Sculpt</h3>
        <p>
          Transform your face naturally with Sculpt — the all-in-one face yoga
          and facial exercise app. Whether you want a more defined jawline,
          improved face symmetry, reduced double chin, or a natural glow up,
          Sculpt gives you personalized daily routines with guided exercises.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🧘</div>
          <h4>Personalized Routines</h4>
          <p>
            Daily face yoga routines built around your goals and experience level
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎯</div>
          <h4>Target Areas</h4>
          <p>
            Jawline, cheekbones, forehead, neck, double chin — focus on what
            matters to you
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📹</div>
          <h4>Guided Exercises</h4>
          <p>
            Step-by-step animated instructions for every exercise
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Progress Tracking</h4>
          <p>
            Track your consistency and see your routine build over time
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⏱️</div>
          <h4>Quick Sessions</h4>
          <p>
            Routines fit into your morning or evening — just a few minutes a day
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔔</div>
          <h4>Daily Reminders</h4>
          <p>
            Never miss a session with customizable notifications
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Sculpt? We&apos;d love to hear from you.
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
          <a href="/privacy/sculpt" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/sculpt" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
