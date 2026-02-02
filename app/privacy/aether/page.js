import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Aether",
  description:
    "Privacy Policy for the Aether couples connection application by EasyTech Agency",
};

export default function AetherPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Aether</h1>
      <p>
        <strong>Last updated:</strong> February 2, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we", "our" or "us") operates the Aether mobile
        application (the "Service"). This page informs you of our policies
        regarding the collection, use, and disclosure of personal data when you
        use our Service.`}
      </p>

      <h2>2. Information Collection and Use</h2>
      <p>
        {`Aether is designed with privacy as a priority. We use anonymous
        authentication, meaning you don't need to provide an email address,
        phone number, or any personal information to use the app.`}
      </p>
      <p>We collect the following types of data:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Anonymous user identifier (automatically generated)"}</li>
        <li>{"Pulse and whisper data exchanged with your partner"}</li>
        <li>{"Pairing information to connect you with your partner"}</li>
        <li>{"Purchase information for premium subscriptions (managed by Apple)"}</li>
        <li>{"Anonymous technical data (device type, iOS version)"}</li>
        <li>Contact information if you reach out to us for support</li>
      </ul>

      <h2>3. Data Storage</h2>
      <p>
        {`Your pulse and whisper data is stored securely in Firebase Firestore,
        a cloud database service provided by Google. This allows you and your
        partner to sync your connection in real-time across devices.`}
      </p>
      <p>
        {`Widget data is stored locally on your device via iOS App Groups to
        enable the home screen widget functionality.`}
      </p>

      <h2>4. Partner Data Sharing</h2>
      <p>
        {`By design, Aether shares your pulses and whispers with your paired
        partner. When you send a pulse or whisper, it becomes visible to your
        partner. When you unpair, you may choose to delete shared data.`}
      </p>

      <h2>5. Subscriptions and Payments</h2>
      <p>
        {`Premium subscriptions are managed entirely by Apple through the App Store.
        We do not have access to your payment information. Apple handles all
        transactions in accordance with its own privacy policy.`}
      </p>

      <h2>6. Third-Party Services</h2>
      <p>We use the following third-party services:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {`Firebase (Google): For anonymous authentication and data storage.
          Please refer to Google's privacy policy for more information.`}
        </li>
        <li>
          {`RevenueCat: To manage subscriptions. RevenueCat only receives the
          information necessary to manage your subscription (anonymous identifier,
          subscription status).`}
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        {`Your data is protected by Firebase's security infrastructure, including
        encryption in transit and at rest. Access to your data is restricted to
        you and your paired partner only.`}
      </p>

      <h2>8. Data Retention</h2>
      <p>
        {`Your pulse and whisper history is retained while you have an active
        pairing. If you unpair from your partner or delete your account, you
        may request deletion of your data.`}
      </p>

      <h2>9. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access the data associated with your anonymous account</li>
        <li>Request deletion of your data by contacting us</li>
        <li>Unpair from your partner at any time</li>
        <li>Manage your subscriptions through your Apple account settings</li>
        <li>Contact us with any questions about your data</li>
      </ul>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        {`Aether is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children under 13.`}
      </p>

      <h2>11. Changes</h2>
      <p>
        {`We reserve the right to modify this privacy policy at any time. Changes
        will be posted on this page with a new update date.`}
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us
        at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/aether" className="btn">
          Back to Aether
        </Link>
      </div>
    </div>
  );
}
