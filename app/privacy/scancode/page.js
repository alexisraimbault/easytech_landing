import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ScanCode - QR Code Scanner",
  description:
    "Privacy Policy for the ScanCode - QR Code Scanner application by EasyTech Agency",
};

export default function ScanCodePrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - ScanCode - QR Code Scanner</h1>
      <p>
        <strong>Last updated:</strong> March 4, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the ScanCode - QR Code Scanner
        mobile application (the "Service"). This page informs you of our
        policies regarding the collection, use, and disclosure of personal data
        when you use our Service.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data to provide and improve our Service. All your
        personal data is stored locally on your device.
      </p>

      <h3>2.1 Locally Stored Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Scan history and scanned content</li>
        <li>QR codes and barcodes you have created</li>
        <li>App settings and preferences</li>
      </ul>
      <p>
        This data never leaves your device and is not transmitted to any server.
      </p>

      <h3>2.2 Camera Access</h3>
      <p>
        The App uses your camera to scan QR codes and barcodes. When using
        camera features:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>
            The camera is used solely for scanning QR codes and barcodes
          </strong>
        </li>
        <li>No photos or videos are captured, stored, or transmitted</li>
        <li>No camera data is sent to any server or third party</li>
        <li>
          You can revoke camera access at any time in your device settings
        </li>
      </ul>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        {`In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat may collect:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>An anonymous identifier to manage your subscription</li>
        <li>Your in-app purchase history</li>
        <li>
          No payment information (handled directly by Apple)
        </li>
      </ul>
      <p>
        For more information, see the{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat Privacy Policy
        </a>
        .
      </p>

      <h2>4. Analytics</h2>
      <p>
        We may collect anonymized usage analytics to improve the App, such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Which features are most used (scanning vs. creating)</li>
        <li>Types of codes scanned (QR, barcode, etc.)</li>
        <li>App performance metrics</li>
        <li>Device type and iOS version (anonymized)</li>
      </ul>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information to third
        parties, except in the following cases:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
        <li>
          With service providers who assist in operating the App (RevenueCat)
          — under strict data processing agreements
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        {`We take data security seriously. Your scan history and created codes are
        stored locally on your device and are protected by your device's
        built-in security features. Camera data never leaves your device.
        Subscription data is secured by Apple and RevenueCat.`}
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>Delete your data by uninstalling the App</li>
        <li>Withdraw your consent at any time</li>
        <li>Object to data processing</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        {`The App is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe we
        have collected data from a child under 13, please contact us
        immediately.`}
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        {`We reserve the right to modify this Privacy Policy at any time. Changes
        will take effect upon publication. We encourage you to review this page
        periodically.`}
      </p>

      <h2>10. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/scancode" className="btn">
          Back to ScanCode - QR Code Scanner
        </Link>
      </div>
    </div>
  );
}
