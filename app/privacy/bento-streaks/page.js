import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Bento Streaks",
  description:
    "Privacy Policy for the Bento Streaks application by EasyTech Agency",
};

export default function BentoStreaksPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Bento Streaks</h1>
      <p>
        <strong>Last updated:</strong> January 28, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we", "our" or "us") operates the Bento Streaks mobile
        application (the "Service"). This page informs you of our policies
        regarding the collection, use, and disclosure of personal data when you
        use our Service.`}
      </p>

      <h2>2. Information Collection and Use</h2>
      <p>
        {`Bento Streaks is designed with privacy in mind. Your habit data is
        stored locally on your device and is not transmitted to our servers.`}
      </p>
      <p>We collect the following types of data:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Habit and tracking data (stored locally on your device)"}</li>
        <li>{"Purchase information for premium subscriptions (managed by Apple)"}</li>
        <li>{"Anonymous technical data (device type, iOS version)"}</li>
        <li>Contact information if you reach out to us for support</li>
      </ul>

      <h2>3. Data Storage</h2>
      <p>
        {`Your habit data, including your streaks and bento configurations, is
        stored exclusively on your device via iOS local storage. This data is
        shared between the main app and the widget via Apple App Groups, but
        never leaves your device.`}
      </p>

      <h2>4. Subscriptions and Payments</h2>
      <p>
        {`Premium subscriptions are managed entirely by Apple through the App Store.
        We do not have access to your payment information. Apple handles all
        transactions in accordance with its own privacy policy.`}
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information to third
        parties. Your habit data remains on your device.`}
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        {`We use RevenueCat to manage subscriptions. RevenueCat only receives the
        information necessary to manage your subscription (anonymous identifier,
        subscription status). Please refer to RevenueCat's privacy policy for
        more information.`}
      </p>

      <h2>7. Data Security</h2>
      <p>
        {`Your local data is protected by iOS's built-in security mechanisms. We
        recommend enabling a passcode on your device for additional protection.`}
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Delete all your data by uninstalling the app</li>
        <li>Manage your subscriptions through your Apple account settings</li>
        <li>Contact us with any questions about your data</li>
      </ul>

      <h2>9. Changes</h2>
      <p>
        {`We reserve the right to modify this privacy policy at any time. Changes
        will be posted on this page with a new update date.`}
      </p>

      <h2>10. Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us
        at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/bento-streaks" className="btn">
          Back to Bento Streaks
        </Link>
      </div>
    </div>
  );
}
