export const metadata = {
  title: "Nom: Cute Notes & Brain Dump",
  description:
    "Nom by EasyTech Agency: a companion that keeps what is in your head: you dump thoughts, notes, to-dos, links and photos, Nom files them, reflects back, suggests tiny quests, and shows your day, your energy and your calendar.",
};

export default function NomApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Nom</span>
        </h2>
        <p>Cute Notes & Brain Dump</p>
      </section>

      <section className="app-card">
        <h3>About Nom</h3>
        <p>
          {`Nom is a companion that keeps what is in your head: you dump thoughts, notes, to-dos, links and photos, Nom files them, reflects back, suggests tiny quests, and shows your day, your energy and your calendar.`}
        </p>
      </section>

      <section className="contact-info">
        <h3>Support &amp; Contact</h3>
        <p>
          Have questions about Nom? We&apos;d love to hear from you.
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
          <a href="/privacy/nom" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/nom" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
