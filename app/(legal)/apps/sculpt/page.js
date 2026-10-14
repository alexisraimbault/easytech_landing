import Image from "next/image";

export const metadata = {
  title: "Sculpt: Guided Face & Neck Routine",
  description:
    "Sculpt is a guided daily face and neck routine for adults. An animated coach shows each move, in sessions of 5, 10 or 15 minutes. Your first guided session is free.",
};

export default function SculptApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Sculpt</span>
        </h2>
        <p>
          Not sure which face exercises to do, or for how long? Sculpt is a
          guided daily face and neck routine. An animated coach shows and counts
          every move, so you can follow along in 5, 10 or 15 minutes.
        </p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/sculpt-face-yoga-exercises/id6759115699"
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
        <h3>About Sculpt</h3>
        <p>
          Sculpt is for adults (18+) who want a simple daily routine for the
          face and neck without planning it themselves. You choose how much time
          you have, pick a coach, and follow the moves on screen. The screens
          and coach voices are in English.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🧘</div>
          <h4>75 Guided Moves</h4>
          <p>
            Each move is shown by an animated coach, counted out loud and
            captioned.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">👥</div>
          <h4>8 Coaches, 2 Voices</h4>
          <p>
            Choose the coach you like. You can switch the voice off at any time.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📅</div>
          <h4>6 Programs</h4>
          <p>Programs of 7 to 28 days, so you always know what comes next.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⏱️</div>
          <h4>5, 10 or 15 Minutes</h4>
          <p>Pick the session length that fits your day.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎒</div>
          <h4>6 Occasion Packs</h4>
          <p>Short routines for particular moments of your day.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📖</div>
          <h4>24 Short Lessons</h4>
          <p>Read how each move works before or after you practice.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎵</div>
          <h4>Music Choice</h4>
          <p>Nothing, Calm, Relaxing or Dynamic, under your session.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔔</div>
          <h4>Reminders and Widgets</h4>
          <p>
            A reminder at the time you choose, plus home screen and lock screen
            widgets.
          </p>
        </div>
      </section>

      <section className="app-card">
        <h3>How It Works</h3>
        <ol>
          <li>Answer a few setup questions about your goals and your day.</li>
          <li>Choose a session length (5, 10 or 15 minutes) and a coach.</li>
          <li>Follow the animated coach, move by move, with spoken counts and captions.</li>
          <li>Come back the next day, or pick a program or an occasion pack.</li>
        </ol>
      </section>

      <section className="app-card">
        <h3>What Is Free, and What Sculpt Pro Unlocks</h3>
        <p>
          Sculpt is free to download. The setup and your first guided session
          are free.
        </p>
        <p>
          Sculpt Pro unlocks the rest: your day-by-day plan, all 75 moves, the 6
          programs, the 6 occasion packs, the 24 lessons, all 8 coaches, session
          music and the widgets.
        </p>
        <p>
          Sculpt Pro is an auto-renewing subscription with an annual plan and a
          monthly plan. A free trial is shown in the app when you are eligible.
          Prices and the trial are shown in the app and in the App Store before
          you subscribe, and nothing is charged until you confirm. Payment is
          charged to your Apple ID, the subscription renews automatically unless
          you cancel at least 24 hours before the end of the current period, and
          you can cancel any time in your Apple ID settings under Subscriptions.
          In the App Store, Sculpt Pro is listed as Sculpt Premium.
        </p>
      </section>

      <section className="app-card">
        <h3>Privacy and Safety</h3>
        <p>
          Sculpt does not use your camera, microphone or photos. Your practice
          and your safety answers stay on your device.
        </p>
        <p>
          Go gently, and stop if anything hurts. Sculpt is a wellness routine,
          not medical advice.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about Sculpt? We&apos;d love to hear from you.
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
          <a href="/privacy/sculpt" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/sculpt" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
