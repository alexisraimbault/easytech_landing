import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Second Spring: Tai Chi for Menopause",
  description:
    "Privacy Policy for the Second Spring: Tai Chi for Menopause application by EasyTech Agency",
};

export default function SecondSpringPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Second Spring: Tai Chi for Menopause</h1>
      <p>
        <strong>Last updated:</strong> April 27, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Second Spring:
        Tai Chi for Menopause mobile application (the "Service" or "App").
        This page informs you of our policies regarding the collection, use,
        and disclosure of personal data when you use our Service.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data to provide and improve our Service. Most of
        your personal data is stored locally on your device and never leaves
        it.
      </p>

      <h3>2.1 Locally Stored Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Practice session history and duration</li>
        <li>Exercise preferences and program progress</li>
        <li>Daily streak and achievement data</li>
        <li>App settings and customization preferences</li>
        <li>
          Onboarding answers (menopause stage and selected symptoms —
          stored only on your device)
        </li>
      </ul>
      <p>
        This data never leaves your device and is not transmitted to any
        server.
      </p>

      <h3>2.2 Bundled Video Content</h3>
      <p>
        The App includes pre-recorded tai chi instruction videos that are
        bundled with the application. No video or audio is recorded from your
        device. The App does not access your camera or microphone.
      </p>

      <h3>2.3 Anonymous Usage Analytics</h3>
      <p>
        We collect anonymized usage analytics through PostHog (hosted in the
        European Union) to help us improve the App. This includes:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Which exercises, routines, and programs are most used</li>
        <li>Session completion rates</li>
        <li>Onboarding funnel metrics</li>
        <li>App performance metrics</li>
        <li>Device type and iOS version (anonymized)</li>
      </ul>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users.
      </p>

      <h3>2.4 Advertising Attribution (with your permission)</h3>
      <p>
        If you grant tracking permission when prompted (via the iOS App
        Tracking Transparency dialog), we share your device advertising
        identifier (IDFA) with the TikTok Business SDK. This is used solely
        to measure which marketing channels helped people discover Second
        Spring. If you decline the tracking prompt, no advertising identifier
        is shared.
      </p>

      <h2>3. Sensitive Health Information</h2>
      <p>
        Your menopause stage and symptom selections are considered sensitive
        health information. They are stored <strong>only on your device</strong>,
        are never transmitted to our servers, and are not shared with third
        parties. You can clear this data at any time by uninstalling the App.
      </p>

      <h2>4. Subscriptions and Payments</h2>
      <p>
        {`In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat may collect:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>An anonymous identifier to manage your subscription</li>
        <li>Your in-app purchase history</li>
        <li>No payment information (handled directly by Apple)</li>
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

      <h2>5. Third-Party Services</h2>
      <p>The App uses the following third-party services:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>RevenueCat</strong> — subscription management (privacy
          policy linked above)
        </li>
        <li>
          <strong>PostHog</strong> (EU-hosted) — anonymous product analytics.{" "}
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostHog Privacy Policy
          </a>
        </li>
        <li>
          <strong>TikTok Business SDK</strong> — marketing attribution (only
          with your explicit tracking permission).{" "}
          <a
            href="https://www.tiktok.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok Privacy Policy
          </a>
        </li>
      </ul>

      <h2>6. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information to third
        parties, except in the following cases:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent (such as ATT tracking permission)</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
        <li>
          With service providers who assist in operating the App (RevenueCat,
          PostHog, TikTok) — under strict data processing agreements
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        {`We take data security seriously. Your session and symptom data is
        stored locally on your device and is protected by your device's
        built-in security features. Subscription data is secured by Apple and
        RevenueCat. Analytics data is transmitted over encrypted connections.`}
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>Delete your data by uninstalling the App</li>
        <li>
          Withdraw tracking consent at any time in iOS Settings → Privacy &
          Security → Tracking
        </li>
        <li>Object to data processing</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        {`The App is not directed to children under 13. We do not knowingly
        collect personal information from children under 13.`}
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
        <Link href="/apps/second-spring" className="btn">
          Back to Second Spring
        </Link>
      </div>
    </div>
  );
}
