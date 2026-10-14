import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Plop: Cute Notes & Habit Jar",
  description:
    "Terms of Use for the Plop: Cute Notes & Habit Jar application by EasyTech Agency",
};

export default function PlopTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Plop: Cute Notes & Habit Jar</h1>
      <p>
        <strong>Last updated:</strong> October 14, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Plop: Cute Notes & Habit Jar application ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree, do not use the App.`}
      </p>
      <h2>2. Description of Service</h2>
      <p>
        {`Plop is a cheerful home for everything in your head: you drop notes, good things, to-dos and habits into jars, shake a jar to draw an old note, and seal jars to open on a future date. It uses artificial intelligence to file and connect your content and to answer your questions.`}
      </p>
      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable and revocable licence to use the App for personal, non-commercial purposes in accordance with these Terms. Apple's standard Licensed Application End User License Agreement (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) also applies to the App.`}
      </p>
      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Plop can be used for free with limits. Plop Pro is an optional auto-renewing subscription, billed monthly or yearly through your Apple Account, that unlocks more of the App. The price and billing period are shown in the App before you subscribe. A free trial may be offered to new users.`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{`Payment is charged to your Apple Account when you confirm the purchase.`}</li>
        <li>{`The subscription renews automatically unless you cancel at least 24 hours before the end of the current period; renewal is charged within 24 hours before the period ends.`}</li>
        <li>{`You can manage or cancel your subscription at any time in Settings → Apple Account → Subscriptions.`}</li>
        <li>{`If a free trial is offered, it converts to a paid subscription at the end of the trial unless you cancel first, and any unused part of a free trial is forfeited when you buy a subscription.`}</li>
        <li>{`Refunds are handled by Apple, in accordance with Apple's policies.`}</li>
      </ul>
      <h2>5. Your Content</h2>
      <p>
        {`You keep ownership of everything you add to Plop. You grant EasyTech Agency a limited, non-exclusive, non-transferable licence to store, process and display it solely to operate the Service for you. You are responsible for what you add and must not add content that is illegal, infringes third-party rights, or contains malware.`}
      </p>
      <h2>6. AI Processing</h2>
      <p>
        {`Plop sends your content to AI services (Google Gemini and, for voice, ElevenLabs) to provide its features, after you give your permission in the App. We do not use your content to train AI models. AI output can be wrong or incomplete: check anything that matters before relying on it. Details are in our Privacy Policy.`}
      </p>
      <h2>7. Acceptable Use</h2>
      <p>
        {`You agree to use the App lawfully, not to attempt to access the Service or its systems without authorisation, not to interfere with or disrupt it, not to scrape or extract data from it with automated tools, and not to resell or redistribute it without our written consent.`}
      </p>
      <h2>8. Disclaimers</h2>
      <p>
        {`Plop is a notes and habit app, not a medical or mental-health service. It does not diagnose, treat or give professional advice.`}
      </p>
      <p>
        {`The App is provided "as is" without warranty of any kind. We do not guarantee uninterrupted access, and we may modify or discontinue features.`}
      </p>
      <h2>9. Limitation of Liability</h2>
      <p>
        {`To the maximum extent permitted by law, EasyTech Agency is not liable for any indirect, incidental or consequential damages arising from your use of the App. Our total liability for any claim related to the Service is limited to the amount you paid us in the 12 months before the claim (or €100 if you use the free plan).`}
      </p>
      <h2>10. Termination and Data Deletion</h2>
      <p>
        {`We may suspend or end your access if you violate these Terms. You may stop using the App at any time, and you can ask for your data to be deleted by writing to contact@easytech-agency.net; we delete it within 30 days, except where the law requires us to keep something.`}
      </p>
      <h2>11. Changes to Terms</h2>
      <p>
        {`We may modify these Terms at any time. Changes take effect when published. Continued use of the App after a change means you accept the updated Terms.`}
      </p>
      <h2>12. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute is subject to the competent courts of Annecy, France.`}
      </p>
      <h2>13. Contact</h2>
      <p>
        For any question about these Terms of Use:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/plop" className="btn">
          Back to Plop
        </Link>
      </div>
    </div>
  );
}
