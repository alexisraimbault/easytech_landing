export const metadata = {
  title: "Plop: Notes in Jars",
  description:
    "Plop by EasyTech Agency: Plop keeps the things you want to remember in jars. Each jar holds one kind of thing. You add notes, photos, links, voice notes and TikToks, and Plop sorts them into the right jar. You can give a jar a goal and a reward, draw a random note from a jar, and seal a jar until a date you choose (you can open it early). Nothing is shared with other users.",
};

export default function PlopApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">Plop</span>
        </h2>
        <p>Notes in Jars</p>
      </section>

      <section className="app-card">
        <h3>About Plop</h3>
        <p>
          {`Plop keeps the things you want to remember in jars. Each jar holds one kind of thing. You add notes, photos, links, voice notes and TikToks, and Plop sorts them into the right jar. You can give a jar a goal and a reward, draw a random note from a jar, and seal a jar until a date you choose (you can open it early). Nothing is shared with other users.`}
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
