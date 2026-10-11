import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Unbothered",
  description:
    "Privacy Policy for the Unbothered application by EasyTech Agency",
};

export default function UnbotheredPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Unbothered</h1>
      <p>
        <strong>Last updated:</strong> October 7, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Unbothered mobile application (the "Service" or "App"). This
        page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data to provide and improve our Service. Everything
        personal you tell the App stays on your device.
      </p>

      <h3>2.1 Locally Stored Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {`The first name you give for your ex (optional), used only to
          personalize the App's messages`}
        </li>
        <li>
          Your onboarding answers (how long since the breakup, how often you
          check, where and when, how you feel afterwards)
        </li>
        <li>
          Progress data: boss health, streaks, experience points, lessons and
          daily quests completed
        </li>
        <li>Shield schedule and App settings</li>
      </ul>
      <p>
        This data never leaves your device and is not transmitted to any
        server.
      </p>

      <h3>2.2 Screen Time (the Shield)</h3>
      <p>
        {`If you turn on the Shield, the App uses Apple's Screen Time
        frameworks (Family Controls, Managed Settings and Device Activity) to
        guard the apps and websites you choose during the hours you choose.
        Your selection is stored by iOS as opaque tokens: we cannot see which
        apps or websites you picked, what you do in them, or whose profiles you
        visit. The App only records, on your device, when the Shield appeared
        and whether you closed it or opened the app anyway, so it can update
        your progress. This information is never transmitted to us or to any
        third party.`}
      </p>

      <h3>2.3 Notifications</h3>
      <p>
        Check-in reminders, morning recaps and Shield follow-ups are local
        notifications scheduled on your device. No push notification service
        or server is involved.
      </p>

      <h3>2.4 Anonymous Usage Analytics</h3>
      <p>
        We collect anonymized usage analytics through PostHog (hosted in the
        European Union) to help us improve the App. This includes:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Onboarding funnel steps reached</li>
        <li>
          Which features are used (lessons, daily quests, SOS sessions, fights)
        </li>
        <li>Whether the Shield is turned on, and how many apps it guards</li>
        <li>Device type and iOS version (anonymized)</li>
      </ul>
      <p>
        Analytics never include the name you enter, your written or selected
        answers, or which apps you guard. Analytics data is aggregated and
        cannot be used to identify individual users.
      </p>

      <h3>2.5 Advertising Attribution (with your permission)</h3>
      <p>
        If you grant tracking permission when prompted (via the iOS App
        Tracking Transparency dialog), we share your device advertising
        identifier (IDFA) and basic events (install, trial start, subscription)
        with the TikTok Business SDK and the Meta (Facebook) SDK. This is used
        solely to measure which marketing campaigns helped people discover
        Unbothered. If you decline the tracking prompt, no advertising
        identifier is shared. None of your answers, names or Screen Time data
        are ever shared with these services.
      </p>

      <h2>3. Sensitive Information</h2>
      <p>
        Information about your breakup and your emotional state is sensitive.
        It is stored <strong>only on your device</strong>, is never transmitted
        to our servers, and is not shared with third parties. Images you
        choose to share from the App (such as a weekly report) never contain
        the name you entered. You can delete all of this data at any time by
        uninstalling the App.
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
        <li>
          <strong>Meta SDK</strong> — marketing attribution (only with your
          explicit tracking permission).{" "}
          <a
            href="https://www.facebook.com/privacy/policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta Privacy Policy
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
          PostHog, TikTok, Meta) — under strict data processing agreements
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        {`We take data security seriously. Your answers, progress and Shield
        data are stored locally on your device and are protected by your
        device's built-in security features. Subscription data is secured by
        Apple and RevenueCat. Analytics data is transmitted over encrypted
        connections.`}
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>Delete your data by uninstalling the App</li>
        <li>
          Turn off the Shield at any time in the App, or revoke Screen Time
          access in iOS Settings → Screen Time
        </li>
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
        <Link href="/apps/unbothered" className="btn">
          Back to Unbothered
        </Link>
      </div>
    </div>
  );
}
