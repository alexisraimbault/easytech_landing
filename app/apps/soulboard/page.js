import Image from "next/image";

export const metadata = {
  title: "Soulboard - Vision Board & Daily Manifestation",
  description:
    "Manifest the life you're calling in. AI-generated daily affirmations, letters from your future self, shadow-work journaling, and beautiful vision boards for your wallpaper, stories, and widgets.",
};

export default function SoulboardApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Soulboard</span>
        </h2>
        <p>Manifest the life you&apos;re calling in</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/soulboard/id000000000"
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
        <h3>About Soulboard</h3>
        <p>
          Soulboard is a manifestation and vision-board companion built for the
          ritual of dreaming on paper — now on your phone. A short, gentle
          onboarding learns what you&apos;re calling in (love, career, health,
          spirituality, creativity, family, wealth, adventure) and the tone
          your inner voice responds to (dreamy, cosmic, earthy, ocean). From
          there, the app generates daily affirmations in your own voice,
          letters from your future self, and shadow-work questions designed
          to meet you where you are.
        </p>
        <p>
          Boards are designed as wallpapers, story-format collages, or home-screen
          widgets — so the things you&apos;re manifesting actually live in the
          spaces you look at every day.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h4>Daily Affirmation</h4>
          <p>
            A soft, hand-written line every morning — tuned to your intentions,
            categories, and aesthetic tone. Swipe for more in the feed.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💌</div>
          <h4>Letter From Your Future Self</h4>
          <p>
            Channel a heartfelt 5-year letter from who you&apos;re becoming.
            Save it, re-read it, share it as an image.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌙</div>
          <h4>Shadow-Work Journal</h4>
          <p>
            Gentle, curiosity-led questions for the parts of you that need
            love today. Mood-tagged entries, kept private on your device.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🖼️</div>
          <h4>Vision Board Templates</h4>
          <p>
            Wallpaper (9:19.5), story (9:16), and widget shapes (1×1, 2×2,
            1×2, 1×4). Grid layouts from 2×4 to 3×5 — edge-to-edge, no chrome.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h4>Editorial Aesthetic</h4>
          <p>
            Pastel gradients, brand ornaments, atmospheric backdrops, soft
            grain. A look that feels handcrafted, not algorithmic.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌍</div>
          <h4>12 Languages</h4>
          <p>
            English (US/UK/AU/CA), French, Italian, German, Spanish (ES/MX),
            Portuguese (BR), Turkish, and Vietnamese — affirmations and all.
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support &amp; Contact</h3>
        <p>
          Have questions about Soulboard? We&apos;d love to hear from you.
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
          <a href="/privacy/soulboard" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/soulboard" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
