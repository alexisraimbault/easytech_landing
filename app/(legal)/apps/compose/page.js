import Image from "next/image";

export const metadata = {
  title: "Compose - Photo Wallpapers & Widgets",
  description:
    "Turn your favorite photos into stunning wallpapers and home screen widgets with designer-quality templates.",
};

export default function ComposeApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Compose</span>
        </h2>
        <p>Photo Wallpapers & Widgets</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/compose-photo-wallpapers/id6758902820"
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
        <h3>About Compose</h3>
        <p>
          Turn your favorite photos into stunning wallpapers and home screen
          widgets. Compose gives you designer-quality templates to arrange photos
          of family, your partner, friends, or pets into beautiful lock screen
          wallpapers and widgets. No design skills needed — just pick a template,
          add your photos, and make your phone as beautiful as your memories.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🖼️</div>
          <h4>Stunning Templates</h4>
          <p>
            Professionally designed layouts for couples, families, pets, friends,
            and more
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Lock Screen Wallpapers</h4>
          <p>
            Create beautiful photo wallpapers perfectly sized for your device
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📲</div>
          <h4>Photo Widgets</h4>
          <p>
            Add photo collage widgets to your home screen in all sizes
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h4>Customizable</h4>
          <p>
            Adjust colors, backgrounds, layouts, and styles to match your
            aesthetic
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">👨‍👩‍👧‍👦</div>
          <h4>Every Occasion</h4>
          <p>
            Templates for every relationship — couple, family, pet, friends
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h4>No Design Skills</h4>
          <p>
            Pick a template, add your photos, done — beautiful results in seconds
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Compose? We&apos;d love to hear from you.
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
          <a href="/privacy/compose" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/compose" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
