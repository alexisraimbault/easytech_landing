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

        <div className="app-card">
          <h3>Aether</h3>
          <p>
            A beautifully minimal way for couples to stay connected. Send gentle
            pulses and whispers to your partner, and watch your bond grow through
            a stunning living visualization.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💗</div>
              <h4>Pulses</h4>
              <p>A gentle tap to say &quot;thinking of you&quot;</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h4>Whispers</h4>
              <p>Share short, meaningful messages</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h4>Living Bond</h4>
              <p>Watch your connection grow and glow</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/aether" className="btn">
              Discover Aether
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Bento Streaks</h3>
          <p>
            Track your habits and build streaks with a unique gamified bento box
            system. Watch your bento fill with delicious food as you maintain
            your daily habits.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🍱</div>
              <h4>Bento System</h4>
              <p>Fill your bento as you build streaks</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔥</div>
              <h4>Streak Tracking</h4>
              <p>Build and maintain daily habits</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Widget First</h4>
              <p>Beautiful widgets for your home screen</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/bento-streaks" className="btn">
              Discover Bento Streaks
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>PDF Marmot</h3>
          <p>
            Your friendly PDF companion! Scan documents, add signatures, and
            merge files with ease. Meet Marvin the Marmot who guides you through
            your paperless journey with badges and achievements.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📸</div>
              <h4>Smart Scanning</h4>
              <p>Capture perfect scans with edge detection</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✍️</div>
              <h4>Easy Signatures</h4>
              <p>Draw and place signatures anywhere</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📑</div>
              <h4>Merge PDFs</h4>
              <p>Combine documents with drag-to-reorder</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/pdfmarmot" className="btn">
              Discover PDF Marmot
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>VocalCoach</h3>
          <p>
            Your personal AI-powered speaking coach. Get instant feedback on
            pace, clarity, filler words, and more. Perfect for interviews,
            presentations, and everyday communication.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎤</div>
              <h4>Speech Analysis</h4>
              <p>Instant feedback on pace, clarity, and filler words</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h4>Practice Modes</h4>
              <p>Interview prep, presentations, and pitch practice</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h4>100% Private</h4>
              <p>All analysis on-device, your audio never leaves</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/vocalcoach" className="btn">
              Discover VocalCoach
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
