import Image from "next/image";

export const metadata = {
  title: "Second Spring - Tai Chi for Menopause",
  description:
    "Tai chi for your body's next chapter. Daily practice for hot flashes, sleep, mood, bone health, and more — designed for perimenopause, menopause, and postmenopause.",
};

export default function SecondSpringApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Second Spring</span>
        </h2>
        <p>Tai Chi for Your Body&apos;s Next Chapter</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/second-spring-tai-chi-for-menopause/id000000000"
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
        <h3>About Second Spring</h3>
        <p>
          In Chinese medicine, menopause is called the <em>Second Spring</em> —
          a renaissance, not a decline. This app brings that philosophy into
          daily practice: 40 tai chi exercises, daily routines tuned to
          specific menopause concerns, and multi-week programs for sleep,
          bone health, hot flashes, and more. Designed for perimenopause,
          menopause, and postmenopause alike.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">💧</div>
          <h4>Hot Flash Relief</h4>
          <p>
            A 5-minute cooling practice — Cooling Breath, Water Hands, and
            Shade of the Tree — ready when you need it
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌙</div>
          <h4>Reclaim Sleep</h4>
          <p>
            21-day evening program of heart-center breath, restorative forms,
            and moon breathing to return sleep to its rightful place
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🦴</div>
          <h4>Bone Builder</h4>
          <p>
            Weight-bearing tai chi — horse stance, bow stance, dragon steps,
            iron feet — clinically supported for postmenopausal bone density
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌸</div>
          <h4>Hips & Pelvic Floor</h4>
          <p>
            Mobility, pelvic rocks, seated butterfly, and breath-led pelvic
            floor work — the practice your body asked for
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🍃</div>
          <h4>Mood Reset</h4>
          <p>
            Grounding + heart-center breath for the days when the day feels
            bigger than you do
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🪑</div>
          <h4>Chair-Friendly</h4>
          <p>
            Every category has a seated option. A full chair routine for
            low-energy days
          </p>
        </div>
      </section>

      <section className="app-card">
        <h3>Backed by Research</h3>
        <p>
          Tai chi is one of the few practices with evidence across the menopause
          spectrum. A 2018 Maturitas review found 25% fewer hot flashes in
          regular practitioners. The 2020 Menopause Journal reported
          significant sleep-quality improvements in 12 weeks. Osteoporosis
          International has documented benefits for preserving postmenopausal
          bone density.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Second Spring? We&apos;d love to hear from you.
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
          <a href="/privacy/second-spring" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/second-spring" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
