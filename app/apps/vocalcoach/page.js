import Image from "next/image";

export const metadata = {
  title: "Clarion - Speaking Practice",
  description:
    "Clarion: short speaking reps on your own voice, with honest feedback in plain sentences. Daily reps, mock interviews and talk run-throughs.",
};

export default function ClarionApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Clarion</span>
        </h2>
        <p>Hear yourself the way they hear you, then fix one thing.</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/id6758733651"
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
        <h3>About Clarion</h3>
        <p>
          Clarion (formerly Vocal Coach) is speaking practice in short reps on
          your own voice. Speak for a minute or two, then get honest feedback
          in plain sentences: what landed, what got in the way (fillers,
          rushing, trailing off, hedging), and the one thing to try next. It
          is built for job interviews, presentations, and everyday moments
          when you want to sound sure of yourself.
        </p>
      </section>

      <section className="app-card">
        <h3>What&apos;s Inside</h3>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🗺️</div>
            <h4>The Path</h4>
            <p>
              Ten ranks to earn, from Finding your voice to Orator, each with
              its own levels and a final challenge
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">☀️</div>
            <h4>Daily Rep</h4>
            <p>
              A prompt picked for your goal, a short take, and feedback in
              seconds
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💼</div>
            <h4>Mock Interview</h4>
            <p>
              Maya asks real questions for your role, follows up on what you
              said, and debriefs your answers
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📽️</div>
            <h4>Talk Run-through</h4>
            <p>
              Paste your notes and rehearse with a teleprompter, a section
              timer and live pace and filler meters
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <h4>Progress</h4>
            <p>
              Your pace, fillers, pauses and skills over time, your streak, and
              your voice then vs now
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h4>Honest About Privacy</h4>
            <p>
              No email or login. Your takes are transcribed on our server to
              count every filler word, then not kept
            </p>
          </div>
        </div>
      </section>

      <section className="app-card">
        <h3>Free and Pro</h3>
        <p>
          Your first 3 levels are free. Pro unlocks the rest of the path, the
          Daily rep, Mock interviews, Talk run-throughs and written coaching. Clarion analyzes English speech.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Clarion? Our team is here to help.
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
          <a href="/privacy/vocalcoach" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/vocalcoach" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
