import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - WorldMonitor",
  description:
    "Privacy Policy for the WorldMonitor application by EasyTech Agency",
};

export default function WorldMonitorPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - WorldMonitor</h1>
      <p>
        <strong>Last updated:</strong> May 18, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the WorldMonitor
        mobile application (the "Service"). This page informs you of our
        policies regarding the collection, use, and disclosure of personal data
        when you use our Service.`}
      </p>

      <h2>2. Data We Collect</h2>

      <h3>2.1 Locally Stored Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Your alert preferences (categories, thresholds, optional center
          coordinates and radius)
        </li>
        <li>
          App settings and last-seen event identifiers (for de-duplication)
        </li>
        <li>The categories you choose to display on the map</li>
      </ul>
      <p>
        This data is also synced to our backend so we can deliver the right push
        notifications to your device. See section 2.3.
      </p>

      <h3>2.2 Location Data</h3>
      <p>
        {`If you grant location permission, the App uses your last-known
        coordinates only to filter alerts by proximity to the center you set
        in each alert rule. Your real-time location is not continuously tracked
        and is not transmitted unless you explicitly attach a radius to an
        alert rule (in which case the center coordinates are sent to our
        backend as part of that rule). Any coordinates transmitted to our
        backend are rounded to approximately one kilometre (two decimal places)
        before they leave your device, so we only ever receive an approximate
        location, never your precise position.`}
      </p>

      <h3>2.3 Backend-Stored Data</h3>
      <p>
        To deliver push notifications, our backend (running on Cloudflare
        Workers) stores the following per device:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Your Apple Push Notification (APNs) device token</li>
        <li>
          {
            'Your device locale (e.g. "en-US") to localize the notification text'
          }
        </li>
        <li>
          Your alert rules (category, threshold, optional center + radius)
        </li>
        <li>A flag indicating whether you have a Pro subscription</li>
        <li>Timestamps for record-keeping (created, updated)</li>
      </ul>
      <p>
        We do not store your name, email address, IP address, or any other
        personally identifying information. The APNs token is an opaque
        identifier issued by Apple and revoked when you uninstall the App.
      </p>

      <h3>2.4 Disaster Event Data</h3>
      <p>
        Event data shown in the App is fetched from public sources: the U.S.
        Geological Survey (USGS), NASA Earth Observatory Natural Event Tracker
        (EONET), the National Oceanic and Atmospheric Administration (NOAA), and
        the Global Disaster Alert and Coordination System (GDACS). This data is
        public and does not identify you in any way.
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

      <h2>4. Analytics & Attribution</h2>
      <p>
        We collect anonymized usage analytics through PostHog to improve the
        App, such as which features are used, onboarding completion rates, and
        app performance metrics. We also use the TikTok Business SDK to measure
        ad performance — if you grant App Tracking Transparency permission, an
        event is sent to TikTok when you complete onboarding or start a
        subscription, so we can measure the effectiveness of ads.
      </p>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users. You can revoke tracking permission at any time in iOS Settings.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell, trade, or transfer your data to third parties, except in
        the following cases:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>
          With infrastructure providers strictly necessary for operating the App
          (Cloudflare, Apple Push Notification service, RevenueCat, PostHog,
          TikTok) — under strict data processing agreements
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        All communication between the App and our backend is encrypted with
        HTTPS. Our backend runs on Cloudflare Workers with a managed D1
        database. APNs tokens are stored in plain text but are device-specific
        opaque identifiers with no personal value outside of Apple&apos;s push
        infrastructure.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Delete your data by uninstalling the App — your backend record is
          automatically removed when Apple invalidates your APNs token
        </li>
        <li>Disable all alerts at any time in the Settings tab</li>
        <li>Revoke location or tracking permissions in iOS Settings</li>
        <li>Request manual deletion by contacting us</li>
        <li>Lodge a complaint with a supervisory authority (CNIL in France)</li>
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
        <Link href="/apps/worldmonitor" className="btn">
          Back to WorldMonitor
        </Link>
      </div>
    </div>
  );
}
