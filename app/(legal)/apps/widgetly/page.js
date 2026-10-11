import Image from "next/image";

export const metadata = {
  title: "Widgetly - Widget & Icon Themes",
  description:
    "Design your home screen with beautifully customizable widgets, icon themes, and 200+ templates.",
};

export default function WidgetlyApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Widgetly</span>
        </h2>
        <p>Widget & Icon Themes</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/widgetly-widget-icon-themes/id6758902941"
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
        <h3>About Widgetly</h3>
        <p>
          Design your home screen. Make it yours. Widgetly gives you complete
          control over your iPhone home screen with beautifully designed custom
          widgets. Countdowns, photo frames, clocks, quotes, calendars,
          trackers, and more — all fully customizable to match your style.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h4>200+ Templates</h4>
          <p>
            Minimal, colorful, dark, pastel, vintage, Y2K, cottagecore, neon —
            every aesthetic
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Custom Widgets</h4>
          <p>
            Countdowns, photo frames, clocks, quotes, calendars, and trackers
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🖌️</div>
          <h4>Icon Themes</h4>
          <p>
            Replace your app icons with beautifully themed custom icons
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔧</div>
          <h4>Fully Customizable</h4>
          <p>
            Colors, fonts, backgrounds, sizes — tweak every detail to match your
            style
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🆕</div>
          <h4>Fresh Content</h4>
          <p>
            New collections and templates added regularly
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h4>Easy Setup</h4>
          <p>
            Pick a template, customize, and add to your home screen in seconds
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Widgetly? We&apos;d love to hear from you.
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
          <a href="/privacy/widgetly" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/widgetly" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
