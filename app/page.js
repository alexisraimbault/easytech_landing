export const metadata = {
  title: "EasyTech Agency - Applications mobiles innovantes",
  description:
    "Développement d'applications mobiles de développement personnel avec intelligence artificielle",
};

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h2>Applications mobiles innovantes</h2>
        <p>Développement personnel et intelligence artificielle</p>
      </section>

      <section className="contact-info">
        <h3>Contact</h3>
        <p>
          Pour toute question ou collaboration :<br />
          <a href="mailto:contact@easytech-agency.net">
            contact@easytech-agency.net
          </a>
        </p>
      </section>

      <section className="apps-section">
        <h3>Nos Applications</h3>
        <div className="app-card">
          <h3>Hibi</h3>
          <p>
            Application de développement personnel et suivi d'habitudes avec
            intelligence artificielle. Transformez votre quotidien avec des
            conseils personnalisés et un suivi intelligent de vos habitudes.
          </p>
          <div className="app-links">
            <a href="/apps/hibi" className="btn">
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
