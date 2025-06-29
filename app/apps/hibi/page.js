export const metadata = {
  title: "Hibi - Application de développement personnel avec IA",
  description:
    "Développez de meilleures habitudes avec Hibi, votre coach personnel alimenté par l'intelligence artificielle",
};

export default function HibiApp() {
  return (
    <div>
      <section className="hero">
        <h2>Hibi</h2>
        <p>Votre coach personnel pour de meilleures habitudes</p>
      </section>

      <section className="app-card">
        <h3>À propos de Hibi</h3>
        <p>
          {`Hibi est une application révolutionnaire de développement personnel
          qui utilise l'intelligence artificielle pour vous aider à créer et
          maintenir de bonnes habitudes. Grâce à des algorithmes avancés, Hibi
          s'adapte à votre rythme de vie et vous propose des conseils
          personnalisés.`}
        </p>

        <h3>Fonctionnalités principales</h3>
        <ul style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
          <li>Suivi intelligent des habitudes</li>
          <li>Conseils personnalisés par IA</li>
          <li>Analyses et statistiques détaillées</li>
          <li>Rappels adaptatifs</li>
          <li>Interface intuitive et moderne</li>
        </ul>

        <div className="app-links">
          <a href="#" className="btn">
            Télécharger sur App Store
          </a>
          <a href="#" className="btn">
            Télécharger sur Google Play
          </a>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support et Contact</h3>
        <p>
          Des questions sur Hibi ? Contactez-nous :<br />
          <a href="mailto:contact@easytech-agency.net">
            contact@easytech-agency.net
          </a>
        </p>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h3>Informations légales</h3>
        <div className="app-links">
          <a href="/privacy/hibi" className="btn btn-secondary">
            Politique de confidentialité
          </a>
          <a href="/terms/hibi" className="btn btn-secondary">
            {"Conditions d'utilisation"}
          </a>
        </div>
      </section>
    </div>
  );
}
