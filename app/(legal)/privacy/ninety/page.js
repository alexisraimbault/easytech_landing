import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Ninety: 90 Day Challenge Tracker",
  description:
    "Privacy Policy for the Ninety: 90 Day Challenge Tracker application by EasyTech Agency",
};

export default function NinetyPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Ninety: 90 Day Challenge Tracker</h1>
      <p>
        <strong>Last updated:</strong> May 4, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Ninety: 90 Day
        Challenge Tracker mobile application (the "Service" or "App"). This
        page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service.`}
      </p>
      <p>
        Ninety is built on a privacy-first principle: <strong>all of your
        program data — including your daily disciplines, completion history,
        progress photos, journal entries, and streak record — stays on your
        device.</strong> We do not run servers that store your personal data.
      </p>

      <h2>2. Data We Collect</h2>

      <h3>2.1 Locally Stored Data (never leaves your device)</h3>
      <p>
        The following data is stored on your device only and is not transmitted
        to any server:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Onboarding answers (goals, fitness level, schedule, blockers, why-now reason)</li>
        <li>Your selected pillars (areas of focus) and daily disciplines</li>
        <li>Your 90-day program: daily plans, task completion records, day-fully-completed timestamps</li>
        <li>Streak record (current streak, longest streak, total resets)</li>
        <li>Progress photos and workout-evidence photos</li>
        <li>Journal entries (gratitude, reflections, MIT lists, appreciation messages)</li>
        <li>Notification preferences</li>
        <li>App settings and customization preferences</li>
      </ul>
      <p>
        Photos are stored in the App&apos;s sandbox storage on your device. They
        are never uploaded to our servers and are not visible to other apps. You
        may explicitly export individual photos to your iOS Photos library at
        your discretion (in which case Apple&apos;s standard Photos handling
        applies).
      </p>

      <h3>2.2 Camera Access</h3>
      <p>
        The App requests camera permission to capture progress photos and
        workout-evidence photos. Camera access is used only when you explicitly
        invoke a photo task. We never record without your action, and we do not
        access your microphone.
      </p>

      <h3>2.3 Notifications</h3>
      <p>
        All reminders are scheduled and delivered locally by your device using
        Apple&apos;s local-notification system. We do not operate any push-
        notification servers and we do not store your notification preferences
        off-device.
      </p>

      <h2>3. Subscriptions and Payments</h2>
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

      <h2>4. Analytics</h2>
      <p>
        We use PostHog to collect anonymized usage analytics to improve the App.
        We capture only essential funnel events such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Onboarding step completion and overall completion</li>
        <li>Pillars and disciplines selected (counts and ids, not personal context)</li>
        <li>Paywall views, purchases, dismissals, and trial-expiry lockouts</li>
        <li>Program-day completion and milestone reaches</li>
        <li>Soft-reset offers and the option chosen</li>
        <li>Streak-card share events</li>
      </ul>
      <p>
        Analytics events are anonymous, are not linked to your identity, and
        cannot be used to identify you individually. For more information, see
        the{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostHog Privacy Policy
        </a>
        .
      </p>

      <h2>5. Advertising Attribution (App Tracking Transparency)</h2>
      <p>
        Ninety uses the TikTok Business SDK to measure which advertising
        channels help people discover the App. This is a tracking SDK as defined
        by Apple, and it is governed by Apple&apos;s App Tracking Transparency
        framework.
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          On first launch, the App will ask you for permission to track. You may
          deny this prompt at any time, in which case no device identifier is
          shared with TikTok and ad-attribution events are not sent.
        </li>
        <li>
          If you allow tracking, an Apple-issued advertising identifier may be
          shared with TikTok along with conversion events such as registration
          completion and subscription start.
        </li>
        <li>
          You can change your decision at any time in iOS Settings → Privacy
          &amp; Security → Tracking → Ninety.
        </li>
      </ul>
      <p>
        For more information, see the{" "}
        <a
          href="https://www.tiktok.com/legal/page/global/privacy-policy/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok Privacy Policy
        </a>
        .
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information to third
        parties, except in the following cases:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
        <li>
          With service providers who assist in operating the App (RevenueCat,
          PostHog, TikTok Business SDK) — under strict data processing
          agreements and limited to the categories above
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        {`We take data security seriously. Your program data, photos, and
        journal entries are stored locally on your device and are protected by
        your device's built-in security features. Subscription data is secured
        by Apple and RevenueCat.`}
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data — all of it is on your device</li>
        <li>Delete your data by uninstalling the App (this removes everything)</li>
        <li>Withdraw your tracking consent at any time in iOS Settings</li>
        <li>Object to data processing</li>
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
        <Link href="/apps/ninety" className="btn">
          Back to Ninety: 90 Day Challenge Tracker
        </Link>
      </div>
    </div>
  );
}
