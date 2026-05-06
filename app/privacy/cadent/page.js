import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Cadent: Japanese Walking Method",
  description:
    "Privacy Policy for the Cadent: Japanese Walking Method application by EasyTech Agency",
};

export default function CadentPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Cadent: Japanese Walking Method</h1>
      <p>
        <strong>Last updated:</strong> May 6, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Cadent: Japanese
        Walking Method mobile application (the "Service" or "App"). This page
        informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service.`}
      </p>
      <p>
        Cadent is built on a privacy-first principle:{" "}
        <strong>
          your profile, calibration, session history, and progress data stay on
          your device.
        </strong>{" "}
        We do not run servers that store your personal walking or health data.
      </p>

      <h2>2. Data We Collect</h2>

      <h3>2.1 Locally Stored Data (never leaves your device)</h3>
      <p>
        The following data is stored on your device only and is not transmitted
        to any server:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Onboarding answers (age, goals, activity level, health conditions
          you disclose, days-per-week target, preferred time of day, audio
          preference)
        </li>
        <li>
          Pace calibration values (your measured normal cadence and the brisk
          cadence derived from it)
        </li>
        <li>
          Interval protocol settings (fast / slow seconds, number of cycles)
        </li>
        <li>
          Session history: per-session start time, duration, step count,
          distance, average brisk cadence, average easy cadence
        </li>
        <li>Streak data (current weekly streak, best weekly streak, sessions completed)</li>
        <li>Notification preferences and app settings</li>
      </ul>

      <h3>2.2 Motion &amp; Fitness (CoreMotion)</h3>
      <p>
        Cadent reads motion data from the iPhone&apos;s built-in pedometer and
        motion sensors during a session in order to count steps, measure
        distance, and compute your live cadence. This data is processed on
        device in real time and is not transmitted to our servers. iOS will
        prompt you to grant Motion &amp; Fitness access on first session; you
        can revoke it at any time in iOS Settings → Privacy &amp; Security →
        Motion &amp; Fitness → Cadent.
      </p>

      <h3>2.3 Apple Health (HealthKit)</h3>
      <p>
        With your permission, Cadent integrates with Apple Health:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Read access</strong> may be requested for resting heart rate,
          step count, walking/running distance, and active energy. These values
          are used only on device to inform your session display and are never
          transmitted off device.
        </li>
        <li>
          <strong>Write access</strong> is used to save each completed session
          as a walking workout (HKWorkout) along with the matching distance and
          active-energy samples, so your activity counts toward your Apple
          Health rings.
        </li>
        <li>
          HealthKit data is never sent to our servers, never shared with third
          parties, and never used for advertising. You may revoke any
          permission at any time in iOS Settings → Health → Data Access &amp;
          Devices → Cadent.
        </li>
      </ul>

      <h3>2.4 Notifications</h3>
      <p>
        All reminders (your scheduled session times) are scheduled and
        delivered locally by your device using Apple&apos;s local-notification
        system. We do not operate any push-notification servers and we do not
        store your reminder preferences off device.
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
        We use PostHog (EU-hosted) to collect anonymized usage analytics to
        improve the App. We capture only essential funnel and usage events
        such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Onboarding step completion and overall completion</li>
        <li>
          Pace calibration outcome (measured vs. defaulted), without storing
          the underlying personal cadence value on the analytics side
        </li>
        <li>Paywall views, purchases, dismissals, and trial-expiry lockouts</li>
        <li>
          Session lifecycle events (session started, completed, abandoned), and
          aggregate session counts
        </li>
        <li>Permission prompts shown and accepted/denied (Motion, Health, Notifications, Tracking)</li>
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
        Cadent uses the TikTok Business SDK to measure which advertising
        channels help people discover the App. This is a tracking SDK as
        defined by Apple, and it is governed by Apple&apos;s App Tracking
        Transparency framework.
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          On first launch, the App will ask you for permission to track. You
          may deny this prompt at any time, in which case no device identifier
          is shared with TikTok and ad-attribution events are not sent.
        </li>
        <li>
          If you allow tracking, an Apple-issued advertising identifier may be
          shared with TikTok along with conversion events such as registration
          completion and subscription start.
        </li>
        <li>
          You can change your decision at any time in iOS Settings → Privacy
          &amp; Security → Tracking → Cadent.
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
      <p>
        Your HealthKit data is never shared with any of these providers and
        never leaves your device.
      </p>

      <h2>7. Data Security</h2>
      <p>
        {`We take data security seriously. Your profile, sessions, and
        calibration are stored locally on your device and are protected by your
        device's built-in security features. HealthKit data is protected by
        Apple's HealthKit framework. Subscription data is secured by Apple and
        RevenueCat.`}
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data — all of it is on your device</li>
        <li>Delete your data by uninstalling the App (this removes everything stored by the App)</li>
        <li>
          Revoke Motion, Health, Notification, or Tracking permissions at any
          time in iOS Settings
        </li>
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

      <h2>10. Health Disclaimer</h2>
      <p>
        Cadent is a fitness aid, not a medical device. The data it displays is
        an estimate based on consumer-grade phone sensors and should not be
        used for medical decision-making. See our Terms of Use for the full
        health disclaimer.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        {`We reserve the right to modify this Privacy Policy at any time. Changes
        will take effect upon publication. We encourage you to review this page
        periodically.`}
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/cadent" className="btn">
          Back to Cadent
        </Link>
      </div>
    </div>
  );
}
