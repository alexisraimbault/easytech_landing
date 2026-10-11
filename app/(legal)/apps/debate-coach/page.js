import Image from "next/image";

export const metadata = {
  title: "Argue - Hot Takes Party Game",
  description:
    "Argue: pass the phone, argue a hot take out loud, and let an AI judge with a real voice pick the winner. 600+ takes, seasons and ranks.",
};

export default function ArgueApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Argue</span>
        </h2>
        <p>Pass the phone. Argue the take. The judge decides.</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/id6759858462"
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
        <h3>About Argue</h3>
        <p>
          Argue (formerly AI Debate Coach) is a hot takes party game for 2 to
          8 players. Draw a take like &quot;cereal is a soup&quot;, pass the
          phone, and each side gets 30 seconds to make its case out loud. Then
          the AI judge rules, out loud: who won, by how much, why, and the best
          line of the round. It calls out dodges and bad logic too.
        </p>
      </section>

      <section className="app-card">
        <h3>What&apos;s Inside</h3>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h4>Pass the Phone</h4>
            <p>
              Party games for 2 to 8 players, or a 1v1, with optional comebacks
              and a jury vote
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚖️</div>
            <h4>An AI Judge With a Voice</h4>
            <p>
              Every verdict is spoken, with your names, the reason you won and
              the best line
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🃏</div>
            <h4>600+ Takes in 12 Decks</h4>
            <p>
              Silly, Red Flag or Green Flag, Would You Rather, Couples, Work,
              Family, Spicy and more
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏆</div>
            <h4>Seasons and Ranks</h4>
            <p>
              Climb from Rookie to Legend, play each season&apos;s new deck,
              and keep your rivalries
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤖</div>
            <h4>Solo vs the AI</h4>
            <p>
              No one around? Argue against the AI. With Pro, it fights back and
              quotes what you said
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h4>No Audio Kept</h4>
            <p>
              No email or login. Your voice becomes words on your phone and is
              never uploaded
            </p>
          </div>
        </div>
      </section>

      <section className="app-card">
        <h3>Free and Pro</h3>
        <p>
          One party game and one solo spar a day are free, and your progress is
          never paywalled. Pro unlocks unlimited games, every deck and season
          deck, an AI opponent that argues back, the roast verdict at the end
          of a game, and custom decks from your own theme. Argue plays in
          English.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Argue? Our team is here to help.
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
          <a href="/privacy/debate-coach" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/debate-coach" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
