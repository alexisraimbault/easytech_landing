import Image from "next/image";

export const metadata = {
  title: "Bento Streaks - Habit Tracker with Widget",
  description:
    "Track your habits and build streaks with Bento Streaks. Watch your bento box fill with delicious food as you maintain your habits.",
};

export default function BentoStreaksApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Bento Streaks</span>
        </h2>
        <p>Track habits. Build streaks. Fill your bento.</p>
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
            src="/bento_phone_visuals/screen1.png"
            alt="Bento Streaks - Home screen"
            width={280}
            height={560}
            className="phone-image"
          />
        </div>
      </section>
      */}

      <section className="app-card">
        <h3>About Bento Streaks</h3>
        <p>
          Bento Streaks is a habit tracking app where the widget IS the product.
          Track your daily habits and watch your bento box come to life as you
          build your streak. Each milestone unlocks new food items to place in
          your personalized bento box.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🍱</div>
          <h4>Bento Box System</h4>
          <p>Fill your bento with food as you maintain your habits</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔥</div>
          <h4>Streak Tracking</h4>
          <p>Build and maintain daily streaks for your habits</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Widget First</h4>
          <p>Beautiful widgets to display your progress on your home screen</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h4>Customizable Layouts</h4>
          <p>Choose from multiple bento box layouts and styles</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🏆</div>
          <h4>Milestone Rewards</h4>
          <p>Unlock new food items at streak milestones</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h4>Private & Local</h4>
          <p>Your data stays on your device, always</p>
        </div>
      </section>

      <section className="app-card">
        <h3>Premium Features</h3>
        <p>
          Upgrade to Premium to unlock the full Bento Streaks experience:
        </p>
        <ul style={{ marginLeft: "2rem", marginTop: "1rem", marginBottom: "1rem", textAlign: "left" }}>
          <li>Unlimited habits (free version limited to 1)</li>
          <li>Premium bento layouts: Elegant, Grid, and Zen styles</li>
          <li>Rare food items to customize your bento</li>
          <li>Exclusive color themes</li>
        </ul>
        <p>
          Available as monthly or yearly subscription.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Bento Streaks? Our team is here to help.
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
          <a href="/privacy/bento-streaks" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/bento-streaks" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
