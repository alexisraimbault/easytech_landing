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
        <strong>Date de dernière mise à jour :</strong> 15 mars 2026
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
        Voici comment vos données audio sont traitées :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>
            {"Les enregistrements audio restent sur votre appareil"}
          </strong>
          {" — ils ne sont jamais transmis à nos serveurs ni à des tiers"}
        </li>
        <li>
          {
            "L'analyse des métriques de livraison (rythme, clarté, volume, etc.) se fait entièrement sur votre appareil"
          }
        </li>
        <li>
          {
            "La transcription utilise les technologies natives d'Apple (Speech Framework), qui peut traiter l'audio sur les serveurs d'Apple lorsque la reconnaissance sur appareil n'est pas disponible"
          }
        </li>
        <li>
          {
            "Vous pouvez supprimer vos enregistrements à tout moment depuis l'application"
          }
        </li>
      </ul>

      <h2>3. Coaching IA personnalisé</h2>
      <p>
        {`Pour vous fournir un coaching personnalisé après chaque exercice, les données suivantes sont envoyées à notre propre modèle IA auto-hébergé sur nos serveurs :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"La transcription textuelle de votre enregistrement"}</li>
        <li>
          {"Vos scores de métriques vocales (rythme, clarté, volume, etc.)"}
        </li>
        <li>{"Le contexte de l'exercice (type de mode, instructions)"}</li>
        <li>{"Un résumé anonymisé de votre historique de progression"}</li>
      </ul>
      <p>
        {`Ces données sont traitées en temps réel pour générer vos retours personnalisés et ne sont pas stockées sur nos serveurs après le traitement. Aucun enregistrement audio n'est transmis — uniquement le texte transcrit et les scores.`}
      </p>

      <h2>4. Collecte et utilisation des informations</h2>
      <p>
        {`Nous collectons un minimum d'informations pour vous fournir notre Service :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {
            "Données de progression et statistiques d'utilisation (stockées localement sur votre appareil)"
          }
        </li>
        <li>
          {
            "Informations d'achat pour la gestion des abonnements (via RevenueCat)"
          }
        </li>
        <li>
          {
            "Données d'analyse anonymisées pour améliorer l'application (via PostHog)"
          }
        </li>
        <li>
          {"Données techniques anonymisées (type d'appareil, version iOS)"}
        </li>
      </ul>

      <h2>5. Abonnements et paiements</h2>
      <p>
        {`Les achats intégrés et abonnements sont gérés par RevenueCat, un service tiers.
        RevenueCat peut collecter :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Un identifiant anonyme pour gérer votre abonnement"}</li>
        <li>{"L'historique de vos achats dans l'application"}</li>
        <li>
          {"Aucune information de paiement (gérée directement par Apple)"}
        </li>
      </ul>
      <p>
        {`Pour plus d'informations, consultez la `}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité de RevenueCat
        </a>
        .
      </p>

      <h2>6. Services tiers</h2>
      <p>{`Notre application utilise les services tiers suivants :`}</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Apple Speech Framework</strong>
          {" — pour la transcription vocale (soumis à la "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"politique de confidentialité d'Apple"}
          </a>
          {")"}
        </li>
        <li>
          <strong>RevenueCat</strong>
          {" — pour la gestion des abonnements ("}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>
          {")"}
        </li>
        <li>
          <strong>PostHog</strong>
          {" — pour l'analyse d'utilisation anonymisée ("}
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>
          {")"}
        </li>
        <li>
          <strong>Firebase Authentication</strong>
          {" — pour l'authentification anonyme sécurisée ("}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>
          {")"}
        </li>
      </ul>

      <h2>7. Partage des données</h2>
      <p>
        {`Nous ne vendons, n'échangeons, ni ne transférons vos informations
        personnelles à des tiers, sauf dans les cas suivants :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {
            "Avec les services tiers mentionnés ci-dessus, dans le cadre de leur fonction"
          }
        </li>
        <li>Avec votre consentement explicite</li>
        <li>Pour respecter une obligation légale</li>
        <li>Pour protéger nos droits ou votre sécurité</li>
      </ul>

      <h2>8. Sécurité des données</h2>
      <p>
        {`La sécurité de vos données est notre priorité. Vos enregistrements audio
        restent sur votre appareil. Les transcriptions envoyées à notre IA sont
        traitées en temps réel et ne sont pas conservées. Les données d'abonnement
        sont sécurisées par les standards de l'industrie via Apple et RevenueCat.`}
      </p>

      <h2>9. Vos droits</h2>
      <p>Vous avez le droit de :</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {
            "Supprimer tous vos enregistrements et données depuis l'application (Réglages > Réinitialiser)"
          }
        </li>
        <li>{"Accéder à vos données personnelles"}</li>
        <li>{"Demander la portabilité de vos données"}</li>
        <li>{"Retirer votre consentement à tout moment"}</li>
      </ul>

      <h2>10. Modifications</h2>
      <p>
        {`Nous nous réservons le droit de modifier cette politique de confidentialité
        à tout moment. Les modifications prendront effet dès leur publication.
        Nous vous encourageons à consulter régulièrement cette page.`}
      </p>

      <h2>11. Contact</h2>
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
