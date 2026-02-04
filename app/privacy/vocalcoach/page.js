import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité - VocalCoach",
  description:
    "Politique de confidentialité de l'application VocalCoach par EasyTech Agency",
};

export default function VocalCoachPrivacy() {
  return (
    <div className="legal-content">
      <h1>Politique de confidentialité - VocalCoach</h1>
      <p>
        <strong>Date de dernière mise à jour :</strong> 4 février 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("nous", "notre" ou "nos") exploite l'application mobile
        VocalCoach (le "Service"). Cette page vous informe de nos politiques
        concernant la collecte, l'utilisation et la divulgation des données
        personnelles lorsque vous utilisez notre Service.`}
      </p>

      <h2>2. Données audio et traitement sur appareil</h2>
      <p>
        {`VocalCoach enregistre votre voix pour analyser votre élocution.
        Il est important de noter que :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>{"Tout le traitement audio se fait localement sur votre appareil"}</strong>
        </li>
        <li>{"Vos enregistrements audio ne sont jamais transmis à nos serveurs"}</li>
        <li>{"Vos enregistrements audio ne sont jamais partagés avec des tiers"}</li>
        <li>{"L'analyse de la parole utilise les technologies natives d'Apple (Speech Framework)"}</li>
        <li>{"Vous pouvez supprimer vos enregistrements à tout moment depuis l'application"}</li>
      </ul>

      <h2>3. Collecte et utilisation des informations</h2>
      <p>
        {`Nous collectons un minimum d'informations pour vous fournir notre Service :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Données de progression et statistiques d'utilisation (stockées localement)"}</li>
        <li>{"Informations d'achat pour la gestion des abonnements (via RevenueCat)"}</li>
        <li>{"Données techniques anonymisées (type d'appareil, version iOS)"}</li>
      </ul>

      <h2>4. Abonnements et paiements</h2>
      <p>
        {`Les achats intégrés et abonnements sont gérés par RevenueCat, un service tiers.
        RevenueCat peut collecter :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Un identifiant anonyme pour gérer votre abonnement"}</li>
        <li>{"L'historique de vos achats dans l'application"}</li>
        <li>{"Aucune information de paiement (gérée directement par Apple)"}</li>
      </ul>
      <p>
        {`Pour plus d'informations, consultez la `}
        <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
          politique de confidentialité de RevenueCat
        </a>.
      </p>

      <h2>5. Partage des données</h2>
      <p>
        {`Nous ne vendons, n'échangeons, ni ne transférons vos informations
        personnelles à des tiers, sauf dans les cas suivants :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Avec votre consentement explicite</li>
        <li>Pour respecter une obligation légale</li>
        <li>Pour protéger nos droits ou votre sécurité</li>
      </ul>

      <h2>6. Sécurité des données</h2>
      <p>
        {`La sécurité de vos données est notre priorité. Vos enregistrements audio
        et données personnelles restent sur votre appareil et ne sont jamais
        transmis à nos serveurs. Les données d'abonnement sont sécurisées par
        les standards de l'industrie via Apple et RevenueCat.`}
      </p>

      <h2>7. Vos droits</h2>
      <p>Vous avez le droit de :</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Supprimer tous vos enregistrements depuis l'application"}</li>
        <li>{"Supprimer votre compte et toutes les données associées"}</li>
        <li>{"Accéder à vos données personnelles"}</li>
        <li>{"Demander la portabilité de vos données"}</li>
        <li>{"Retirer votre consentement à tout moment"}</li>
      </ul>

      <h2>8. Modifications</h2>
      <p>
        {`Nous nous réservons le droit de modifier cette politique de confidentialité
        à tout moment. Les modifications prendront effet dès leur publication.
        Nous vous encourageons à consulter régulièrement cette page.`}
      </p>

      <h2>9. Contact</h2>
      <p>
        Si vous avez des questions concernant cette politique de
        confidentialité, contactez-nous à :
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/vocalcoach" className="btn">
          Retour à VocalCoach
        </Link>
      </div>
    </div>
  );
}
