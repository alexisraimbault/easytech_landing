import Image from "next/image";

export const metadata = {
  title: "VocalCoach - AI-Powered Speaking Coach",
  description:
    "Master public speaking with VocalCoach. Get instant AI feedback on pace, clarity, filler words, and more.",
};

export default function VocalCoachApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">VocalCoach</span>
        </h2>
        <p>Speak with Confidence</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/vocalcoach"
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
        <h3>About VocalCoach</h3>
        <p>
          VocalCoach is your personal AI-powered speaking coach available
          anytime, anywhere. Whether you&apos;re preparing for a job interview,
          perfecting a presentation, or simply wanting to communicate more
          clearly, VocalCoach provides instant, actionable feedback to help you
          speak with confidence.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🎯</div>
          <h4>Pace Analysis</h4>
          <p>Find your optimal speaking speed of 130-170 words per minute</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎤</div>
          <h4>Clarity Score</h4>
          <p>Improve your articulation for better understanding</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🚫</div>
          <h4>Filler Word Detection</h4>
          <p>Eliminate &quot;um,&quot; &quot;uh,&quot; and &quot;like&quot; from your speech</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Volume & Pitch</h4>
          <p>Project your voice and engage with vocal variety</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⏸️</div>
          <h4>Strategic Pausing</h4>
          <p>Master the power of silence for emphasis and impact</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h4>100% Private</h4>
          <p>All analysis happens on-device, your audio never leaves</p>
        </div>
      </section>

      <section className="app-card">
        <h3>Practice Modes</h3>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">☀️</div>
            <h4>Daily Exercises</h4>
            <p>Quick 5-minute drills to warm up your voice</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💼</div>
            <h4>Interview Prep</h4>
            <p>Practice answering common interview questions</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📽️</div>
            <h4>Presentation Mode</h4>
            <p>Rehearse with your talking points visible</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h4>Pitch Practice</h4>
            <p>Perfect your elevator pitch with timed sessions</p>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about VocalCoach? Our team is here to help.
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
          <a href="/privacy/vocalcoach" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/vocalcoach" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
