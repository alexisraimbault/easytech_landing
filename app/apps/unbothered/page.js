export const metadata = {
  title: "Unbothered - Stop Checking Your Ex",
  description:
    "Your bestie vs. the ex. A Shield for the late-night checks, a boss fight you win by not looking, and lessons that make it stop hurting.",
};

export default function UnbotheredApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Unbothered</span>
        </h2>
        <p>Your bestie vs. the ex</p>
      </section>

      <section className="app-card">
        <h3>About Unbothered</h3>
        <p>
          They moved on and you keep checking. Unbothered turns breaking the
          habit into a game you play with your bestie: every check you resist
          damages the boss, every night you survive builds your streak, and in
          about 90 days you&apos;re unbothered for real.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h4>The Shield</h4>
          <p>
            Guards the apps you pick during your worst hours, using Screen
            Time on your own phone. We never see what you look at.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚔️</div>
          <h4>Boss Fight</h4>
          <p>
            Each urge you beat lands a hit. Four phases, from withdrawal to the
            last look
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">😌</div>
          <h4>Your Bestie</h4>
          <p>
            Check-ins before the hard hours and a recap every morning, in a
            chat that feels like texting a friend
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎧</div>
          <h4>SOS</h4>
          <p>
            Voice-guided sessions for when you&apos;re about to check, about to
            text, or just saw them together
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📚</div>
          <h4>Lessons</h4>
          <p>
            Short chats on why it hurts so much, the rebound myth, and the
            highlight reel
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔥</div>
          <h4>Streaks & Loot</h4>
          <p>
            Daily quests, streak freezes and a weekly report you can share
            (never with their name)
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Unbothered? We&apos;d love to hear from you.
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
          <a href="/privacy/unbothered" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/unbothered" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
