import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Breathly - Breathing Exercises",
  description:
    "Privacy Policy for the Breathly - Breathing Exercises application by EasyTech Agency",
};

export default function BreathlyPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Breathly - Breathing Exercises</h1>
      <p>
        <strong>Last updated:</strong> October 14, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Breathly - Breathing Exercises
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
        <li>Breathing session history and duration</li>
        <li>Technique preferences and favorite exercises</li>
        <li>App settings and customization preferences</li>
      </ul>
      <p>
        This data never leaves your device and is not transmitted to any server.
        On Android, the app opts out of Google backups, so this data is not
        copied to your Google account either; uninstalling the app removes it.
      </p>

      <h3>2.2 Widgets and App Groups</h3>
      <p>
        The App may include widgets that display breathing exercises or session
        data on your home screen. Widget data is shared between the App and its
        widgets via App Groups, an on-device mechanism provided by Apple. This
        data stays entirely on your device and is never transmitted externally.
        Widgets and App Groups apply to the iOS app only.
      </p>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        {`In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat may collect:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>An anonymous identifier to manage your subscription</li>
        <li>Your in-app purchase history</li>
        <li>
          Basic device and app information (operating system, device model,
          language, app version)
        </li>
        <li>
          No payment information (handled directly by Apple on iOS and by
          Google Play on Android)
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
        We use PostHog (hosted in the European Union) to collect anonymized
        usage analytics to improve the App, such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Which breathing techniques are most popular</li>
        <li>Session completion rates</li>
        <li>App performance metrics</li>
        <li>
          The goals you pick during onboarding and the choices you make when
          personalizing the App
        </li>
        <li>Device type and operating system version (anonymized)</li>
      </ul>
      <p>
        These events are linked to a random anonymous identifier, never to
        your name or email, because the App has no account. Your mood
        check-ins, session history and streaks are not sent.
      </p>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users.
      </p>

      <h2>4.1 Android specifics</h2>
      <p>
        The Android version is sold through Google Play, and purchases are
        handled by Google Play Billing. The App does not use the Android
        advertising ID, contains no advertising and no advertising or
        attribution SDK. It uses the notification permission only for the
        optional daily reminder and the quiet notification shown while a
        session is running.
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
          With service providers who assist in operating the App (RevenueCat for
          subscriptions, PostHog for analytics)
          — under strict data processing agreements
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        {`We take data security seriously. Your session and preference data is
        stored locally on your device and is protected by your device's built-in
        security features. Subscription data is secured by Apple or
        Google Play and by RevenueCat. All data sent to our service providers
        travels over HTTPS.`}
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>Delete your data by uninstalling the App</li>
        <li>
          Ask us to delete the anonymous analytics and subscription records
          tied to your device, by writing to the address below
        </li>
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
        <Link href="/apps/breathly" className="btn">
          Back to Breathly - Breathing Exercises
        </Link>
      </div>
    </div>
  );
}
