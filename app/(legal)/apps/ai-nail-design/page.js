import Image from "next/image";

export const metadata = {
  title: "AI Nail Design - Create & Try On Dream Nails",
  description:
    "Generate stunning AI nail art designs and try them on your hands with virtual try-on. Find your perfect manicure before your next salon visit.",
};

export default function AINailDesignApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">AI Nail Design</span>
        </h2>
        <p>Create & Try On Your Dream Nails</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/ai-nail-design"
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
        <h3>About AI Nail Design</h3>
        <p>
          Describe any nail look you can imagine, and our AI generates stunning,
          realistic nail art designs in seconds. From elegant french tips to bold
          chrome acrylics, every style is at your fingertips. Try designs on your
          real hands with our virtual try-on camera before booking your next
          salon appointment.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h4>AI Nail Generator</h4>
          <p>
            Describe your dream nails in words and watch AI create beautiful,
            realistic designs instantly
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📸</div>
          <h4>Virtual Try-On</h4>
          <p>
            See how designs look on your actual hands using your camera — no
            more guessing at the salon
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔥</div>
          <h4>Trending Designs</h4>
          <p>
            Browse daily-updated trending nail art for instant inspiration
            across all styles
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💅</div>
          <h4>Every Shape & Style</h4>
          <p>
            Almond, stiletto, coffin, square — gel, chrome, ombre, glitter,
            french and more
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📱</div>
          <h4>Story Export</h4>
          <p>
            Create beautiful collages and polls to share with friends on
            Instagram Stories
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">❤️</div>
          <h4>Save & Organize</h4>
          <p>
            Save your favorite designs and try-on results to show your nail
            technician
          </p>
        </div>
      </section>

      <section className="app-card">
        <h3>How It Works</h3>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">1️⃣</div>
            <h4>Describe Your Look</h4>
            <p>
              Type what you want — &quot;pastel lavender french tips with gold
              flakes&quot; — or browse trending designs for inspiration
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">2️⃣</div>
            <h4>AI Creates It</h4>
            <p>
              Our AI generates multiple realistic nail art designs matching your
              description, shape, and color preferences
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">3️⃣</div>
            <h4>Try It On</h4>
            <p>
              Take a photo of your hand and see the design applied to your
              actual nails with our virtual try-on
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">4️⃣</div>
            <h4>Share & Book</h4>
            <p>
              Save your favorites, create story polls, and show your nail tech
              exactly what you want
            </p>
          </div>
        </div>
      </section>

      <section className="app-card">
        <h3>Premium Features</h3>
        <p>
          AI Nail Design is free to get started. Upgrade to Premium for the
          full experience:
        </p>
        <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
          <li>Unlimited AI nail design generations</li>
          <li>High-resolution (1024px) design output</li>
          <li>Unlimited virtual hand try-ons</li>
          <li>Access to all trending designs and styles</li>
        </ul>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about AI Nail Design? We&apos;d love to hear from you.
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
          <a href="/privacy/ai-nail-design" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/ai-nail-design" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
