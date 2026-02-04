import Link from "next/link";

export const metadata = {
  title: "Conditions d'utilisation - VocalCoach",
  description:
    "Conditions d'utilisation de l'application VocalCoach par EasyTech Agency",
};

export default function VocalCoachTerms() {
  return (
    <div className="legal-content">
      <h1>{"Conditions d'utilisation - VocalCoach"}</h1>
      <p>
        <strong>Date de dernière mise à jour :</strong> 4 février 2026
      </p>

      <h2>1. Acceptation des conditions</h2>
      <p>
        {`En téléchargeant, installant ou utilisant l'application VocalCoach
        ("l'Application"), vous acceptez d'être lié par ces conditions
        d'utilisation ("Conditions"). Si vous n'acceptez pas ces Conditions,
        n'utilisez pas l'Application.`}
      </p>

      <h2>2. Description du service</h2>
      <p>
        {`VocalCoach est une application mobile de coaching vocal qui utilise
        l'intelligence artificielle pour analyser et améliorer vos compétences
        en prise de parole. L'Application fournit une analyse en temps réel
        du rythme, de la clarté, des mots de remplissage, du volume et de
        l'intonation de votre voix.`}
      </p>

      <h2>{"3. Licence d'utilisation"}</h2>
      <p>
        {`EasyTech Agency vous accorde une licence limitée, non exclusive, non
        transférable et révocable pour utiliser l'Application à des fins
        personnelles et non commerciales, conformément à ces Conditions.`}
      </p>

      <h2>4. Abonnements et achats</h2>
      <p>
        {`VocalCoach propose des fonctionnalités gratuites et premium. Les
        fonctionnalités premium sont accessibles via un abonnement payant :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Les prix sont affichés dans l'Application et peuvent varier selon les régions"}</li>
        <li>{"Les abonnements se renouvellent automatiquement sauf annulation"}</li>
        <li>{"Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte Apple"}</li>
        <li>{"Les remboursements sont gérés conformément aux politiques d'Apple"}</li>
      </ul>

      <h2>5. Utilisation acceptable</h2>
      <p>Vous vous engagez à :</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Utiliser l'Application conformément à sa destination"}</li>
        <li>{"Ne pas enregistrer de contenu illégal ou nuisible"}</li>
        <li>{"Respecter tous les droits de propriété intellectuelle"}</li>
        <li>{"Ne pas tenter de compromettre la sécurité de l'Application"}</li>
        <li>{"Ne pas utiliser l'Application à des fins commerciales sans autorisation"}</li>
      </ul>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        {`L'Application et tout son contenu, y compris mais sans s'y limiter, le
        texte, les graphiques, les logos, les icônes, les algorithmes d'analyse
        et les logiciels, sont la propriété d'EasyTech Agency et sont protégés
        par les lois sur la propriété intellectuelle.`}
      </p>

      <h2>7. Vos enregistrements</h2>
      <p>
        {`Vous conservez tous les droits sur vos enregistrements audio. Ces
        enregistrements sont stockés localement sur votre appareil et ne sont
        jamais transmis à nos serveurs. Vous êtes seul responsable du contenu
        que vous enregistrez.`}
      </p>

      <h2>8. Collecte de données</h2>
      <p>
        {`Votre utilisation de l'Application est également régie par notre
        Politique de confidentialité, qui est incorporée dans ces Conditions par
        référence.`}
      </p>

      <h2>9. Avertissements</h2>
      <p>
        {`L'Application est fournie "en l'état" sans garantie d'aucune sorte.
        VocalCoach est conçu à des fins éducatives et de développement personnel.
        L'Application :`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Ne remplace pas un coach vocal professionnel ou un orthophoniste"}</li>
        <li>{"Ne fournit pas de conseils médicaux"}</li>
        <li>{"Ne garantit pas de résultats spécifiques"}</li>
      </ul>

      <h2>10. Limitation de responsabilité</h2>
      <p>
        {`En aucun cas EasyTech Agency ne sera responsable de dommages indirects,
        accessoires, spéciaux ou consécutifs résultant de votre utilisation de
        l'Application.`}
      </p>

      <h2>11. Résiliation</h2>
      <p>
        {`Nous pouvons résilier ou suspendre votre accès à l'Application à tout
        moment, sans préavis, pour quelque raison que ce soit, y compris si vous
        violez ces Conditions.`}
      </p>

      <h2>12. Modifications</h2>
      <p>
        {`Nous nous réservons le droit de modifier ces Conditions à tout moment.
        Les modifications prendront effet dès leur publication dans
        l'Application.`}
      </p>

      <h2>13. Droit applicable</h2>
      <p>
        {`Ces Conditions sont régies par le droit français. Tout litige sera
        soumis à la juridiction exclusive des tribunaux français.`}
      </p>

      <h2>14. Contact</h2>
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
        <Link href="/apps/vocalcoach" className="btn">
          Retour à VocalCoach
        </Link>
      </div>
    </div>
  );
}
