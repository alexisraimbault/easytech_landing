import Image from "next/image";

export const metadata = {
  title: "Ninety - 90 Day Challenge Tracker",
  description:
    "Change your life in 90 days. Personalised daily disciplines, streak tracking, progress photos, and the soft-reset that gets you back on when you slip.",
};

export default function NinetyApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Ninety</span>
        </h2>
        <p>Change your life in 90 days</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/ninety-90-day-challenge/id000000000"
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
        <h3>About Ninety</h3>
        <p>
          Ninety is a 90-day transformation program built on the same psychology
          behind 75 Hard — but with the structure to actually finish. You set
          your daily disciplines, you commit, and Ninety holds you to it for 90
          days. Personalised onboarding builds your daily plan from your goals,
          level, and habits to break. Photo evidence, streak tracking, and a
          soft-reset mechanic for the inevitable slip.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🔥</div>
          <h4>99 Daily Disciplines</h4>
          <p>
            Across 10 areas of your life — Physical, Nutrition, Mind, Discipline,
            Digital, Sleep, Work, Relationships, Finance, Creative
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎯</div>
          <h4>Personalised Onboarding</h4>
          <p>
            14-step flow builds your daily contract from your goals, level,
            schedule, and the habits you want to break
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📸</div>
          <h4>Photo Evidence</h4>
          <p>
            Capture progress photos and workout proof on-device. Day 1 vs Day 90
            is the story you&apos;ll want
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Two-Counter Design</h4>
          <p>
            Day X / 90 with progress visualisation, plus an honest streak counter
            that resets on miss — no exceptions
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔄</div>
          <h4>Soft-Reset Mechanic</h4>
          <p>
            The safety net every 90-day app is missing. Slipped 3 days? Pause &amp;
            resume, push through, or start over — your call
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Streak Art</h4>
          <p>
            Auto-generated TikTok and Instagram Story-ready cards. Five rotating
            templates. Built-in viral loop
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support &amp; Contact</h3>
        <p>
          Have questions about Ninety? We&apos;d love to hear from you.
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
          <a href="/privacy/ninety" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/ninety" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
