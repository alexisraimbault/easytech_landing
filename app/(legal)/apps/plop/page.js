export const metadata = {
  title: "Plop: Cute Notes & Habit Jar",
  description:
    "Plop by EasyTech Agency: a cheerful home for everything in your head: you drop notes, good things, to-dos and habits into jars, shake a jar to draw an old note, and seal jars to open on a future date.",
};

export default function PlopApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Plop</span>
        </h2>
        <p>Cute Notes & Habit Jar</p>
      </section>

      <section className="app-card">
        <h3>About Plop</h3>
        <p>
          {`Plop is a cheerful home for everything in your head: you drop notes, good things, to-dos and habits into jars, shake a jar to draw an old note, and seal jars to open on a future date.`}
        </p>
      </section>

      <section className="contact-info">
        <h3>Support &amp; Contact</h3>
        <p>
          Have questions about Plop? We&apos;d love to hear from you.
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
          <a href="/privacy/plop" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/plop" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
