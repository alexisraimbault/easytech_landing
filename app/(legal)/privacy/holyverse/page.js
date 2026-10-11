import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - HolyVerse: Daily Bible Verse",
  description:
    "Privacy Policy for HolyVerse: Daily Bible Verse, the daily verse, prayer and offline Bible application by EasyTech Agency",
};

export default function HolyVersePrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - HolyVerse: Daily Bible Verse</h1>
      <p>
        <strong>Last updated:</strong> October 9, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the HolyVerse: Daily
        Bible Verse mobile application and its widgets (the "Service" or
        "App"). This page informs you of our policies regarding the
        collection, use, and disclosure of personal data when you use our
        Service.`}
      </p>
      <p>
        In short: <strong>you never create an account with your email or
        name.</strong> Your saved verses, your words under each verse, your
        prayer journal, highlights and progress{" "}
        <strong>stay on your phone</strong>; we do not have a server that
        stores them. The Bible, the daily verses and their narration are
        built into the App and work offline. We use anonymous analytics and,
        only while we run ads, the advertising attribution described in
        section 5. We do not sell your data.
      </p>
      <p>
        This policy replaces the previous HolyVerse policy and covers version
        1.1.2 and later.
      </p>

      <h2>2. Data We Collect and How We Use It</h2>

      <h3>2.1 No Account</h3>
      <p>
        HolyVerse has no sign-up and never asks for your email, name, phone
        number or a password. Two random identifiers are created on your
        device by the services we use: one by RevenueCat to manage your
        subscription (section 3) and one by PostHog to group analytics events
        (section 4). Neither is linked to your Apple ID, name or email.
      </p>

      <h3>2.2 Data Stored on Your Device Only</h3>
      <p>
        The following stays on your device. The App does not send it to us
        or to any third party, and does not sync it to iCloud:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Your onboarding choices (who you want to become, what you carry,
          your season of life), your translation, reminder time and widget
          style (your choices from the App&apos;s lists are also counted in
          analytics, see section 4)
        </li>
        <li>Your saved verses and the verses of your past mornings</li>
        <li>
          The words you write under a verse, and your prayer journal
          (requests, the names you enter, prayers marked as prayed or
          answered, and your notes)
        </li>
        <li>
          Your highlights, verses you are learning by heart, reading plan and
          journey progress, Amen days and streak
        </li>
      </ul>
      <p>
        Like any app data, it may be included in the backups of your device
        that you make yourself (for example iCloud Backup or a computer
        backup), under Apple&apos;s terms.
      </p>

      <h3>2.3 Widgets and App Groups</h3>
      <p>
        To show your verse on the Home Screen and Lock Screen, even before
        you open the App, the App writes the next 14 days of verses, your
        widget style, your streak, whether you have Premium and, for the
        Praying for widget, up to three of your open prayer requests into an
        App Group: an on-device storage area shared between the App and its
        widgets, provided by Apple. This data stays on your device and is
        never transmitted externally. Please note that anything a widget
        shows, including prayer requests, is visible to anyone who can see
        your screen.
      </p>

      <h3>2.4 Scripture, Narration and Art Are Built In</h3>
      <p>
        The three Bible translations (King James Version, World English Bible
        and Bible in Basic English), the daily verses with their reflections
        and prayers, the narration of the daily verses and the artwork are
        bundled inside the App. Reading, searching the Bible and listening do
        not send anything over the internet. HolyVerse does not use your
        microphone, does not record your voice, and does not access your
        contacts, photos or location.
      </p>

      <h3>2.5 Notifications</h3>
      <p>
        If you allow notifications, your morning reminders (which contain the
        day&apos;s verse) and, if you start a free trial, a reminder two days
        before it ends are scheduled locally on your device. We do not run a
        push-notification server.
      </p>

      <h3>2.6 Deleting Your Data</h3>
      <p>
        In <strong>Settings &gt; Delete my data</strong>, the App deletes your
        saved verses, mornings, writing, prayers, progress, onboarding
        choices and settings from your device, cancels your reminders and
        clears the widget data. Uninstalling the App also removes this data.
        This does not reset the anonymous subscription and analytics
        identifiers (sections 3 and 4); to have analytics data linked to your
        device deleted, contact us (section 10).
      </p>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        In-app purchases and subscriptions are processed by Apple and managed
        through RevenueCat, a third-party service. RevenueCat may collect:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          An anonymous app user identifier, created on your device, to manage
          your subscription
        </li>
        <li>Your in-app purchase history and subscription status</li>
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
        We use PostHog (EU cloud) to understand how the App is used and
        improve it. We send product events such as: onboarding steps and the
        choices you pick from the App&apos;s lists (who you want to become,
        what you carry, for example &quot;worry&quot; or &quot;grief&quot;,
        your season of life and translation); your notification and tracking
        choices; paywall views and purchases; your Amen, with the streak, the
        id of the day&apos;s verse and the translation; listening to, saving
        and sharing a verse; journey, reading plan and memorization progress;
        widget style changes; and the number of results of a Bible search.
        PostHog also receives basic technical information such as the app
        version, device model and iOS version. Events are linked to the
        anonymous PostHog identifier, not to your name or email.
      </p>
      <p>
        <strong>
          We never send the text of your prayers, of what you write under a
          verse, or of your Bible searches to analytics.
        </strong>{" "}
        For a prayer we only note whether it is for someone, and for your
        writing only its approximate length. Because HolyVerse is a Bible
        app, using it and your onboarding choices may say something about
        your faith: we use these events only to improve the App and never
        share them with advertising partners. For more information, see the{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostHog Privacy Policy
        </a>
        .
      </p>
      <p>
        If you have chosen to share analytics with app developers in iOS
        settings, Apple may also share crash reports and diagnostics with us.
      </p>

      <h2>5. Advertising Attribution (App Tracking Transparency)</h2>
      <p>
        HolyVerse includes the TikTok Business SDK and the Meta (Facebook) SDK
        to measure which advertising campaigns help people discover the App.
        These SDKs are only started while we run campaigns on those
        platforms; to know this, the App fetches a small configuration from
        our server (hosted on Google Cloud Run in the European Union), which
        receives no personal data beyond the technical details of the request
        itself. When started, the events sent are limited to: onboarding
        completed, free trial started and subscription started (with the
        product and price), along with the SDKs&apos; standard app install and
        launch signals used for measurement.
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          The App may ask your permission to track through Apple&apos;s App
          Tracking Transparency prompt. Only if you allow it is your
          device&apos;s advertising identifier (IDFA) shared with TikTok and
          Meta.
        </li>
        <li>
          If you decline (or are never asked), no advertising identifier is
          shared and we do not track you across other companies&apos; apps
          and websites. The events above may still be sent without that
          identifier, for aggregated measurement such as Apple&apos;s
          SKAdNetwork.
        </li>
        <li>
          You can change your choice at any time in iOS Settings &gt; Privacy
          &amp; Security &gt; Tracking.
        </li>
      </ul>
      <p>
        See the{" "}
        <a
          href="https://www.tiktok.com/legal/page/global/privacy-policy/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok Privacy Policy
        </a>{" "}
        and the{" "}
        <a
          href="https://www.facebook.com/privacy/policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta Privacy Policy
        </a>
        .
      </p>

      <h2>6. Service Providers</h2>
      <p>
        We rely on the following providers, each limited to the role
        described:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Apple</strong>: purchases, notifications, widgets, App
          Tracking Transparency
        </li>
        <li>
          <strong>RevenueCat</strong>: subscription management
        </li>
        <li>
          <strong>PostHog</strong>: product analytics
        </li>
        <li>
          <strong>Google Cloud</strong>: hosting of the small advertising
          configuration described in section 5 (
          <a
            href="https://cloud.google.com/terms/cloud-privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Cloud privacy notice
          </a>
          )
        </li>
        <li>
          <strong>TikTok and Meta</strong>: advertising attribution, only
          while campaigns run (section 5)
        </li>
      </ul>
      <p>
        Some providers (for example RevenueCat, TikTok and Meta) may process
        data outside the European Union. Such transfers rely on appropriate
        safeguards such as the European Commission&apos;s Standard
        Contractual Clauses or the EU-U.S. Data Privacy Framework.
      </p>

      <h2>7. Data Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information. We share it
        only:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          With the service providers listed above, for the purposes described
        </li>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
      </ul>
      <p>
        When you share a verse card, it goes only where you choose through
        the iOS share sheet.
      </p>

      <h2>8. Data Retention</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          On-device data: until you delete it (Settings &gt; Delete my data)
          or uninstall the App
        </li>
        <li>
          Subscription, analytics and attribution data: as long as needed for
          these purposes, according to each provider&apos;s policy
        </li>
      </ul>

      <h2>9. Data Security</h2>
      <p>
        Your verses, writing and prayers are stored on your device and are
        protected by your device&apos;s built-in security features. Network
        traffic to our providers uses TLS encryption. Subscription data is
        secured by Apple and RevenueCat.
      </p>

      <h2>10. Your Rights</h2>
      <p>Under the GDPR and similar laws, you have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access the personal data we hold about you</li>
        <li>
          Delete your data: in the App with Settings &gt; Delete my data, or by
          asking us
        </li>
        <li>Correct or receive a copy of your data (portability)</li>
        <li>Object to or restrict processing</li>
        <li>
          Withdraw your consent at any time (notifications and tracking can
          be changed in iOS Settings)
        </li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
        . Because we never know your name or email, we may need your help to
        find the data linked to your anonymous identifiers. What you write in
        the App exists only on your device, so we cannot read, restore or
        delete it for you: use Settings &gt; Delete my data.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        The App is not directed to children under 13 (or under 16 in
        countries of the European Union where that is the age of digital
        consent). We do not knowingly collect personal information from
        children. If you believe a child has used the App and data was
        collected, please contact us and we will delete it.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time.
        Changes will take effect upon publication. We encourage you to review
        this page periodically.
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact EasyTech
        Agency at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/holyverse" className="btn">
          Back to HolyVerse
        </Link>
      </div>
    </div>
  );
}
