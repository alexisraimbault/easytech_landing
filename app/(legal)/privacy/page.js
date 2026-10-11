import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - EasyTech Agency",
  description:
    "Privacy Policy for applications published by EasyTech Agency",
};

export default async function GenericPrivacy({ searchParams }) {
  const params = await searchParams;
  const appName = params?.app || null;
  const title = appName ? `Privacy Policy - ${appName}` : "Privacy Policy";

  return (
    <div className="legal-content">
      <h1>{title}</h1>
      <p>
        <strong>Last updated:</strong> February 8, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we", "our" or "us") publishes mobile applications
        for iOS. This privacy policy explains how we handle your data when you
        use ${appName ? `the ${appName} application` : "our applications"}
        (the "Service").`}
      </p>

      <h2>2. Information Collection and Use</h2>
      <p>
        {`Our applications are designed with privacy in mind. Your personal data
        (settings, preferences, content you create) is stored locally on your
        device and is not transmitted to our servers unless explicitly stated
        otherwise.`}
      </p>
      <p>We may collect the following types of data:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"App data (stored locally on your device)"}</li>
        <li>
          {"Purchase information for premium subscriptions (managed by Apple)"}
        </li>
        <li>{"Anonymous technical data (device type, iOS version)"}</li>
        <li>Contact information if you reach out to us for support</li>
      </ul>

      <h2>3. Data Storage</h2>
      <p>
        {`Your data is stored exclusively on your device via iOS local storage
        (including SwiftData and UserDefaults). If the application includes a
        widget, data may be shared between the main app and the widget via
        Apple App Groups, but it never leaves your device.`}
      </p>

      <h2>4. Subscriptions and Payments</h2>
      <p>
        {`Premium subscriptions, if available, are managed entirely by Apple
        through the App Store. We do not have access to your payment
        information. Apple handles all transactions in accordance with its own
        privacy policy.`}
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information to third
        parties. Your data remains on your device.`}
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        {`We use RevenueCat to manage subscriptions. RevenueCat only receives
        the information necessary to manage your subscription status (anonymous
        identifier, subscription status). Please refer to RevenueCat's privacy
        policy for more information.`}
      </p>
      <p>
        {`Some applications may use third-party APIs (such as AI services) to
        provide functionality. In such cases, only the data you explicitly
        submit is sent to these services, and it is not stored beyond what is
        necessary to fulfill your request.`}
      </p>

      <h2>7. Data Security</h2>
      <p>
        {`Your local data is protected by iOS's built-in security mechanisms,
        including device encryption. We recommend enabling a passcode or
        biometric authentication on your device for additional protection.`}
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Delete all your data by uninstalling the application</li>
        <li>Manage your subscriptions through your Apple account settings</li>
        <li>Contact us with any questions about your data</li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        {`Our applications are not directed to children under 13. We do not
        knowingly collect personal information from children. If you believe
        your child has provided us with personal data, please contact us.`}
      </p>

      <h2>10. Changes</h2>
      <p>
        {`We reserve the right to modify this privacy policy at any time.
        Changes will be posted on this page with a new update date.`}
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us
        at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
