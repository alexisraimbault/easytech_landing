import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - PDF Marmot",
  description:
    "Privacy Policy for the PDF Marmot application by EasyTech Agency",
};

export default function PDFMarmotPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - PDF Marmot</h1>
      <p>
        <strong>Last updated:</strong> February 4, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we", "our" or "us") operates the PDF Marmot mobile
        application (the "Service"). This page informs you of our policies
        regarding the collection, use, and disclosure of personal data when you
        use our Service.`}
      </p>

      <h2>2. Information Collection and Use</h2>
      <p>
        {`PDF Marmot is designed with privacy in mind. Your documents and
        signatures are stored locally on your device and are not transmitted to
        our servers.`}
      </p>
      <p>We collect the following types of data:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Scanned documents (stored locally on your device)"}</li>
        <li>{"Signature data (stored locally on your device)"}</li>
        <li>{"Usage statistics (document count, scans, merges - stored locally)"}</li>
        <li>{"Purchase information for premium subscriptions (managed by Apple)"}</li>
        <li>{"Anonymous technical data (device type, iOS version)"}</li>
        <li>Contact information if you reach out to us for support</li>
      </ul>

      <h2>3. Data Storage</h2>
      <p>
        {`Your documents, signatures, and user statistics are stored exclusively
        on your device using iOS local storage (SwiftData). This data never
        leaves your device unless you explicitly share or export a document.`}
      </p>

      <h2>4. Subscriptions and Payments</h2>
      <p>
        {`Premium subscriptions are managed entirely by Apple through the App Store.
        We do not have access to your payment information. Apple handles all
        transactions in accordance with its own privacy policy.`}
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        {`We use RevenueCat to manage subscriptions. RevenueCat only receives the
        information necessary to manage your subscription (anonymous identifier,
        subscription status). Please refer to RevenueCat's privacy policy for
        more information.`}
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information to third
        parties. Your documents and signatures remain on your device. We only
        share data in the following circumstances:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent when you share or export documents</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights or your safety</li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        {`Your local data is protected by iOS's built-in security mechanisms. We
        recommend enabling a passcode or Face ID/Touch ID on your device for
        additional protection of your sensitive documents.`}
      </p>

      <h2>8. Data Retention</h2>
      <p>
        {`Your documents and signatures are stored on your device until you delete
        them. Uninstalling the app will remove all locally stored data. We do not
        retain any copies of your documents on our servers.`}
      </p>

      <h2>9. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Delete individual documents and signatures within the app</li>
        <li>Delete all your data by uninstalling the app</li>
        <li>Manage your subscriptions through your Apple account settings</li>
        <li>Contact us with any questions about your data</li>
      </ul>

      <h2>10. Children's Privacy</h2>
      <p>
        {`PDF Marmot is not directed at children under 13. We do not knowingly
        collect personal information from children under 13. If you believe we
        have collected such information, please contact us immediately.`}
      </p>

      <h2>11. Changes</h2>
      <p>
        {`We reserve the right to modify this privacy policy at any time. Changes
        will be posted on this page with a new update date. We encourage you to
        review this policy periodically.`}
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
        <Link href="/apps/pdfmarmot" className="btn">
          Back to PDF Marmot
        </Link>
      </div>
    </div>
  );
}
