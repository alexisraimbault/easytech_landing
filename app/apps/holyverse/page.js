import Image from "next/image";

export const metadata = {
  title: "HolyVerse - Bible Verse Widget",
  description:
    "Start every day with beautiful scripture delivered to your home screen. Daily verses, stunning widgets, and a thoughtful reading experience.",
};

export default function HolyVerseApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">HolyVerse</span>
        </h2>
        <p>Bible Verse Widget</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/holyverse-bible-verse-widget/id6758902864"
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
        <h3>About HolyVerse</h3>
        <p>
          Start every day with beautiful scripture delivered to your home screen.
          HolyVerse brings the Word of God to life with stunning widgets, daily
          notifications, and a thoughtfully designed reading experience. Whether
          you want a gentle morning reminder or a beautiful verse on your lock
          screen, HolyVerse makes daily devotion effortless.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">📖</div>
          <h4>Daily Verse</h4>
          <p>
            A hand-picked Bible verse every single day, chosen to inspire and
            uplift
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Beautiful Widgets</h4>
          <p>
            Stunning verse widgets for your home screen and lock screen
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔔</div>
          <h4>Daily Notifications</h4>
          <p>
            Receive your daily verse as a gentle morning or evening reminder
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">❤️</div>
          <h4>Save Favorites</h4>
          <p>
            Bookmark verses that speak to you and revisit them anytime
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h4>Customizable</h4>
          <p>
            Choose from beautiful themes and styles for your widgets
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📤</div>
          <h4>Share Verses</h4>
          <p>
            Share beautifully formatted verses with friends and family
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about HolyVerse? We&apos;d love to hear from you.
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
          <a href="/privacy/holyverse" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/holyverse" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
