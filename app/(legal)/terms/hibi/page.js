import Link from "next/link";

export const metadata = {
  title: "Conditions d'utilisation - Hibi",
  description:
    "Conditions d'utilisation de l'application Hibi par EasyTech Agency",
};

export default function HibiTerms() {
  return (
    <div className="legal-content">
      <h1>{"Conditions d'utilisation - Hibi"}</h1>
      <p>
        <strong>Date de dernière mise à jour :</strong> 29 juin 2025
      </p>

      <h2>1. Acceptation des conditions</h2>
      <p>
        {`En téléchargeant, installant ou utilisant l'application Hibi
        ("l'Application"), vous acceptez d'être lié par ces conditions
        d'utilisation ("Conditions"). Si vous n'acceptez pas ces Conditions,
        n'utilisez pas l'Application.`}
      </p>

      <h2>2. Description du service</h2>
      <p>
        {`Hibi est une application mobile de développement personnel qui utilise
        l'intelligence artificielle pour aider les utilisateurs à créer et
        maintenir de bonnes habitudes. L'Application fournit des conseils
        personnalisés, un suivi des habitudes et des analyses comportementales.`}
      </p>

      <h2>{"3. Licence d'utilisation"}</h2>
      <p>
        {`EasyTech Agency vous accorde une licence limitée, non exclusive, non
        transférable et révocable pour utiliser l'Application à des fins
        personnelles et non commerciales, conformément à ces Conditions.`}
      </p>

      <h2>4. Utilisation acceptable</h2>
      <p>Vous vous engagez à :</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Utiliser l'Application conformément à sa destination"}</li>
        <li>{"Fournir des informations exactes"}</li>
        <li>{"Respecter tous les droits de propriété intellectuelle"}</li>
        <li>{"Ne pas tenter de compromettre la sécurité de l'Application"}</li>
      </ul>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        {`L'Application et tout son contenu, y compris mais sans s'y limiter, le
        texte, les graphiques, les logos, les icônes et les logiciels, sont la
        propriété d'EasyTech Agency et sont protégés par les lois sur la
        propriété intellectuelle.`}
      </p>

      <h2>6. Collecte de données</h2>
      <p>
        {`Votre utilisation de l'Application est également régie par notre
        Politique de confidentialité, qui est incorporée dans ces Conditions par
        référence.`}
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        {`L'Application est fournie "en l'état" sans garantie d'aucune sorte. Hibi
        est conçu à des fins de bien-être général et ne remplace pas un conseil
        médical, psychologique ou professionnel.`}
      </p>

      <h2>8. Limitation de responsabilité</h2>
      <p>
        {`En aucun cas EasyTech Agency ne sera responsable de dommages indirects,
        accessoires, spéciaux ou consécutifs résultant de votre utilisation de
        l'Application.`}
      </p>

      <h2>9. Résiliation</h2>
      <p>
        {`Nous pouvons résilier ou suspendre votre accès à l'Application à tout
        moment, sans préavis, pour quelque raison que ce soit, y compris si vous
        violez ces Conditions.`}
      </p>

      <h2>10. Modifications</h2>
      <p>
        {`Nous nous réservons le droit de modifier ces Conditions à tout moment.
        Les modifications prendront effet dès leur publication dans
        l'Application.`}
      </p>

      <h2>11. Droit applicable</h2>
      <p>
        {`Ces Conditions sont régies par le droit français. Tout litige sera
        soumis à la juridiction exclusive des tribunaux français.`}
      </p>

      <h2>12. Contact</h2>
      <p>
        {
          "Pour toute question concernant ces conditions d'utilisation, contactez-nous à :"
        }
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/hibi" className="btn">
          Retour à Hibi
        </Link>
      </div>
    </div>
  );
}
