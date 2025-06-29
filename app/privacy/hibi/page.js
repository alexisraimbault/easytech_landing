export const metadata = {
  title: "Politique de confidentialité - Hibi",
  description:
    "Politique de confidentialité de l'application Hibi par EasyTech Agency",
};

export default function HibiPrivacy() {
  return (
    <div className="legal-content">
      <h1>Politique de confidentialité - Hibi</h1>
      <p>
        <strong>Date de dernière mise à jour :</strong> 29 juin 2025
      </p>

      <h2>1. Introduction</h2>
      <p>
        EasyTech Agency ("nous", "notre" ou "nos") exploite l'application mobile
        Hibi (le "Service"). Cette page vous informe de nos politiques
        concernant la collecte, l'utilisation et la divulgation des données
        personnelles lorsque vous utilisez notre Service.
      </p>

      <h2>2. Collecte et utilisation des informations</h2>
      <p>
        Nous collectons plusieurs types d'informations à des fins diverses pour
        vous fournir et améliorer notre Service :
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Données d'habitudes et de suivi personnel</li>
        <li>Informations d'utilisation de l'application</li>
        <li>Données techniques (type d'appareil, système d'exploitation)</li>
        <li>Informations de contact si vous nous contactez</li>
      </ul>

      <h2>3. Utilisation des données</h2>
      <p>Hibi utilise les données collectées pour :</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Fournir et maintenir notre Service</li>
        <li>Personnaliser votre expérience avec l'IA</li>
        <li>Améliorer nos services</li>
        <li>Vous contacter avec des notifications importantes</li>
        <li>Fournir un support client</li>
      </ul>

      <h2>4. Partage des données</h2>
      <p>
        Nous ne vendons, n'échangeons, ni ne transférons vos informations
        personnelles à des tiers, sauf dans les cas suivants :
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Avec votre consentement explicite</li>
        <li>Pour respecter une obligation légale</li>
        <li>Pour protéger nos droits ou votre sécurité</li>
      </ul>

      <h2>5. Sécurité des données</h2>
      <p>
        La sécurité de vos données personnelles est importante pour nous. Nous
        utilisons des mesures de sécurité commercialement acceptables pour
        protéger vos informations personnelles.
      </p>

      <h2>6. Vos droits</h2>
      <p>Vous avez le droit de :</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Accéder à vos données personnelles</li>
        <li>Corriger des données inexactes</li>
        <li>Demander la suppression de vos données</li>
        <li>Retirer votre consentement</li>
      </ul>

      <h2>7. Contact</h2>
      <p>
        Si vous avez des questions concernant cette politique de
        confidentialité, contactez-nous à :
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <a href="/apps/hibi" className="btn">
          Retour à Hibi
        </a>
      </div>
    </div>
  );
}
