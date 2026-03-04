import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - LightMeter Pro",
  description:
    "Privacy Policy for the LightMeter Pro application by EasyTech Agency",
};

export default function LightMeterProPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - LightMeter Pro</h1>
      <p>
        <strong>Last updated:</strong> March 4, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the LightMeter Pro
        mobile application (the "Service"). This page informs you of our
        policies regarding the collection, use, and disclosure of personal data
        when you use our Service.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data to provide and improve our Service:
      </p>

      <h3>2.1 Camera and Sensor Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          LightMeter Pro uses your device camera sensor to measure ambient
          light levels, color temperature, and exposure values
        </li>
        <li>
          Light readings and measurement data are stored locally on your device
        </li>
        <li>
          Camera data is processed on-device and is not transmitted to our
          servers unless you use the AI Scene Analysis feature
        </li>
      </ul>

      <h3>2.2 Photos (AI Scene Analysis)</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          When you use the AI Scene Analysis feature, photos you capture are
          sent to Anthropic for processing (see Section 4 below)
        </li>
        <li>
          Photos are only sent when you explicitly tap the
          {` "Analyze" `}button — they are never sent automatically
        </li>
      </ul>

      <h3>2.3 Purchase Information</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Subscription status and purchase history (managed by Apple and
          RevenueCat)
        </li>
        <li>Anonymous technical data (device type, iOS version)</li>
      </ul>

      <h2>3. Data Storage</h2>
      <p>
        {`Your measurement data, settings, and preferences are stored exclusively
        on your device via iOS local storage (including SwiftData and
        UserDefaults). If the application includes a widget, data may be shared
        between the main app and the widget via Apple App Groups, but it never
        leaves your device.`}
      </p>

      <h2>4. Third-Party Services</h2>

      <h3>4.1 RevenueCat (Subscriptions)</h3>
      <p>
        {`We use RevenueCat to manage subscriptions. RevenueCat only receives
        the information necessary to manage your subscription status (anonymous
        identifier, subscription status). No payment information is shared with
        RevenueCat — payments are handled directly by Apple.`}
      </p>
      <p>
        {"For more information, see the "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat Privacy Policy
        </a>
        .
      </p>

      <h3>4.2 AI Scene Analysis — Anthropic (Claude)</h3>
      <p>
        {`LightMeter Pro's AI Scene Analysis feature uses Anthropic's Claude
        API to analyze photos you capture. When you use this feature:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {`Your photo is sent securely (via HTTPS) to Anthropic's servers for
          processing`}
        </li>
        <li>
          {`Along with the photo, contextual sensor data (light readings, color
          temperature) is included to improve the analysis`}
        </li>
        <li>
          {`Anthropic does not store your images after processing the request`}
        </li>
        <li>
          {`No personal information (name, location, device identifiers) is
          sent to Anthropic`}
        </li>
        <li>
          {`The AI analysis is performed only when you explicitly tap the
          "Analyze" button — photos are never sent automatically`}
        </li>
      </ul>
      <p>
        {"For more information, please refer to "}
        <a
          href="https://www.anthropic.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Anthropic's Privacy Policy"}
        </a>
        .
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
          With service providers who assist in operating the App (Anthropic,
          RevenueCat) — under strict data processing agreements
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        {`Your local data is protected by iOS's built-in security mechanisms,
        including device encryption. Photos sent to Anthropic are transmitted
        securely via HTTPS. We recommend enabling a passcode or biometric
        authentication on your device for additional protection.`}
      </p>

      <h2>7. Data Retention</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Light measurement data is stored locally on your device for as long
          as the App is installed
        </li>
        <li>
          Photos sent to Anthropic for AI analysis are not retained after
          processing
        </li>
        <li>
          You can delete all your data by uninstalling the application
        </li>
      </ul>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Delete all your data by uninstalling the application</li>
        <li>Manage your subscriptions through your Apple account settings</li>
        <li>Revoke camera access at any time in your device settings</li>
        <li>Contact us with any questions about your data</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        {`The App is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe we
        have collected data from a child under 13, please contact us
        immediately.`}
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        {`We reserve the right to modify this Privacy Policy at any time. Changes
        will take effect upon publication. We encourage you to review this page
        periodically.`}
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/lightmeter-pro" className="btn">
          Back to LightMeter Pro
        </Link>
      </div>
    </div>
  );
}
