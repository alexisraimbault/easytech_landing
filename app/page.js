import Image from "next/image";

export const metadata = {
  title: "EasyTech Agency - Innovative Mobile Apps",
  description:
    "Development of personal development mobile applications powered by artificial intelligence",
};

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h2>
          <span className="hero-accent">Innovative</span> Mobile Apps
        </h2>
        <p>
          We create personal development applications powered by artificial
          intelligence
        </p>
      </section>

      <section className="apps-section">
        <h3>Our Applications</h3>
        <div className="app-card">
          <h3>Hibi</h3>
          <div className="app-visual">
            <Image
              src="/hibi_visual.png"
              alt="Hibi - Personal development application"
              width={600}
              height={400}
              className="app-visual-image"
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              priority
            />
          </div>
          <p>
            Personal development and habit tracking application with artificial
            intelligence. Transform your daily life with personalized advice and
            intelligent tracking of your habits.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Smart Tracking</h4>
              <p>Track your habits with detailed analytics</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h4>AI Coaching</h4>
              <p>Receive personalized recommendations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h4>Statistics</h4>
              <p>Visualize your progress over time</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/hibi" className="btn">
              Discover Hibi
            </a>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h3>Contact</h3>
        <p>
          Have a question or project? Get in touch!
          <br />
          <a href="mailto:contact@easytech-agency.net">
            contact@easytech-agency.net
          </a>
        </p>
      </section>
    </div>
  );
}
