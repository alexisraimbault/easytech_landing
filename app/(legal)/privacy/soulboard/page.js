import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Soulboard: Vision Board & Manifestation",
  description:
    "Privacy Policy for the Soulboard manifestation and vision-board application by EasyTech Agency",
};

export default function SoulboardPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Soulboard: Vision Board &amp; Manifestation</h1>
      <p>
        <strong>Last updated:</strong> May 18, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Soulboard mobile
        application (the "Service" or "App"). This page informs you of our
        policies regarding the collection, use, and disclosure of personal
        data when you use our Service.`}
      </p>
      <p>
        Soulboard is built around a privacy-first principle:{" "}
        <strong>
          your vision boards, photos, journal entries, future-self letters,
          and affirmation history stay on your device.
        </strong>{" "}
        We use a small backend only to generate AI content on-demand; we do
        not retain your prompts or generated content on our servers.
      </p>

      <h2>2. Data We Collect</h2>

      <h3>2.1 Locally Stored Data (never leaves your device)</h3>
      <p>
        The following data is stored on your device only and is not transmitted
        to any server we operate:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Onboarding answers (your name, selected dream categories, named
          intentions, aesthetic tone, blockers, practice level)
        </li>
        <li>
          Your vision boards: template, slot layout, photos you upload, photo
          crop frames, text content, background styles
        </li>
        <li>Generated and favorited affirmations</li>
        <li>Future-self letters you have generated and saved</li>
        <li>Shadow-work journal entries, prompts, and mood tags</li>
        <li>Streak record, read counts, and favorite counts</li>
        <li>Notification preferences and app settings</li>
      </ul>
      <p>
        Photos imported into a vision board are stored in the App&apos;s
        sandbox storage on your device. They are never uploaded to our
        servers. You may explicitly export individual boards to your iOS
        Photos library or to share sheets at your discretion (in which case
        Apple&apos;s standard handling applies).
      </p>

      <h3>2.2 Anonymous Identifier</h3>
      <p>
        On first launch, Firebase Authentication assigns your installation
        an anonymous identifier (UID). This UID is used solely to authenticate
        requests to our AI-generation backend and to apply per-installation
        rate limits. It is not linked to your Apple ID, email, name, or any
        other personal identifier we can resolve back to you.
      </p>

      <h3>2.3 AI-Generation Requests (transient)</h3>
      <p>
        When you ask Soulboard to generate an affirmation, a future-self
        letter, or a journal question, the App sends the following data to
        our backend (hosted on Google Cloud Run / Firebase Cloud Functions):
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Your anonymous Firebase UID</li>
        <li>
          The first name you entered during onboarding (used to personalize
          generated text — you may leave this blank)
        </li>
        <li>
          Your selected dream categories, intentions, tone, and (for journal
          questions) blockers and practice level
        </li>
        <li>The recent generated texts to exclude (to avoid repetition)</li>
      </ul>
      <p>
        These requests are forwarded to Google&apos;s Gemini API to produce
        the generated text, then returned to your device. We do not store
        prompts or generated text in any database on our side, beyond a
        short-lived rate-limit record (timestamps only, no content) used to
        prevent abuse.
      </p>

      <h3>2.4 Photo Library Access</h3>
      <p>
        The App requests permission to access your Photo Library only when
        you tap to add a photo to a vision-board slot. We use Apple&apos;s
        PhotosPicker so the App receives only the photos you explicitly
        select. We do not browse, index, or upload your library.
      </p>

      <h3>2.5 Notifications</h3>
      <p>
        Reminders for your daily affirmation are scheduled and delivered
        locally by your device using Apple&apos;s local-notification system.
        We do not operate any push-notification servers and we do not store
        your notification preferences off-device.
      </p>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat may collect:
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
        We use PostHog to collect anonymized usage analytics to improve the
        App. We capture only essential funnel events such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Onboarding step completion and overall completion</li>
        <li>
          Dream categories and intention counts selected (counts and ids, not
          your personal context)
        </li>
        <li>Paywall views, purchases, dismissals, and trial-expiry lockouts</li>
        <li>Affirmation generations, board creations, journal entries created</li>
        <li>Future-letter opens and shares</li>
      </ul>
      <p>
        Analytics events are anonymous, are not linked to your identity, and
        cannot be used to identify you individually. The text content of
        affirmations, letters, and journal entries is never sent to analytics.
        For more information, see the{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostHog Privacy Policy
        </a>
        .
      </p>

      <h2>5. AI Provider (Google Gemini)</h2>
      <p>
        Generated text (affirmations, future-self letters, shadow-work
        questions) is produced by Google&apos;s Gemini large language model
        API. Generation prompts are sent to Google&apos;s API over an
        encrypted connection. Google&apos;s use of API content is governed
        by their terms — see the{" "}
        <a
          href="https://ai.google.dev/gemini-api/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Gemini API Terms
        </a>
        .
      </p>

      <h2>6. Advertising Attribution (App Tracking Transparency)</h2>
      <p>
        Soulboard uses the TikTok Business SDK to measure which advertising
        channels help people discover the App. This is a tracking SDK as
        defined by Apple, and it is governed by Apple&apos;s App Tracking
        Transparency framework.
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          On first launch, the App will ask you for permission to track. You
          may deny this prompt at any time, in which case no device
          identifier is shared with TikTok and ad-attribution events are not
          sent.
        </li>
        <li>
          If you allow tracking, an Apple-issued advertising identifier may
          be shared with TikTok along with conversion events such as
          registration completion and subscription start.
        </li>
        <li>
          You can change your decision at any time in iOS Settings → Privacy
          &amp; Security → Tracking → Soulboard.
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

      <h2>7. Data Sharing</h2>
      <p>
        We do not sell, trade, or transfer your personal information to third
        parties, except in the following cases:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
        <li>
          With service providers who assist in operating the App (Firebase,
          Google Gemini, RevenueCat, PostHog, TikTok Business SDK) — under
          strict data processing agreements and limited to the categories
          above
        </li>
      </ul>

      <h2>8. Data Security</h2>
      <p>
        We take data security seriously. Your boards, photos, journal
        entries, and letters are stored locally on your device and are
        protected by your device&apos;s built-in security features. Backend
        traffic uses TLS encryption. Subscription data is secured by Apple
        and RevenueCat.
      </p>

      <h2>9. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data — all of it is on your device</li>
        <li>
          Delete your data by uninstalling the App (this removes everything)
        </li>
        <li>Withdraw your tracking consent at any time in iOS Settings</li>
        <li>Object to data processing</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        The App is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe
        we have collected data from a child under 13, please contact us
        immediately.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time.
        Changes will take effect upon publication. We encourage you to
        review this page periodically.
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
        <Link href="/apps/soulboard" className="btn">
          Back to Soulboard
        </Link>
      </div>
    </div>
  );
}
