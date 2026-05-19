import Link from "next/link";

export const metadata = {
  title: "Terms of Use - WorldMonitor",
  description:
    "Terms of Use for the WorldMonitor application by EasyTech Agency",
};

export default function WorldMonitorTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - WorldMonitor</h1>
      <p>
        <strong>Last updated:</strong> May 18, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the WorldMonitor application
        ("the App"), you agree to be bound by these Terms of Use ("Terms"). If
        you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`WorldMonitor is a mobile application that displays real-time disaster
        and natural-event data sourced from official public agencies (USGS,
        NASA EONET, NOAA, GDACS) and delivers push notifications when events
        match user-configured alert rules. The App is provided for
        informational purposes only.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        WorldMonitor offers an optional Pro subscription that unlocks
        additional features (multiple alert rules, custom thresholds,
        proximity-based alerts beyond worldwide, all hazard categories, and
        extended history):
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Prices are displayed in the App and may vary by region</li>
        <li>Subscriptions renew automatically unless cancelled</li>
        <li>
          You may cancel your subscription at any time through your Apple
          account settings
        </li>
        <li>Refunds are handled in accordance with Apple&apos;s policies</li>
        <li>
          If a free introductory offer is available, it converts to a paid
          subscription automatically unless cancelled before the offer period
          ends
        </li>
      </ul>

      <h2>5. Disclaimers — Disaster Information</h2>
      <p>
        <strong>
          This section is important. Please read it carefully.
        </strong>
      </p>
      <p>
        The App aggregates publicly available disaster data from third-party
        sources. EasyTech Agency:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not generate, validate, or warrant the accuracy, completeness,
          or timeliness of any event data
        </li>
        <li>
          Is not a substitute for official emergency alert systems (such as
          the U.S. Wireless Emergency Alerts, the European EU-Alert, or any
          national tsunami warning system)
        </li>
        <li>
          Should not be relied upon as the sole source of information during
          an actual emergency
        </li>
        <li>
          Cannot guarantee that any specific event will be detected, included,
          or delivered to your device. Push notifications are delivered on a
          best-effort basis and may be delayed or missed due to network,
          Apple Push Notification service, device, or upstream data-source
          issues
        </li>
      </ul>
      <p>
        <strong>
          In an actual emergency, always follow guidance from local civil
          protection authorities. Do not rely on this App as a life-safety
          system.
        </strong>
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the App or its backend</li>
        <li>
          Not redistribute or share premium content without authorization
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
        <li>
          Not use the App in any way that could overload, disrupt, or impair
          the backend infrastructure (e.g. automated polling)
        </li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        {`The App and its original content, design, code, illustrations,
        animations, icons, and trademarks are the property of EasyTech Agency
        and are protected by intellectual property laws. Disaster data
        displayed in the App belongs to its respective source agencies and
        retains their licensing terms.`}
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        {`To the maximum extent permitted by law, EasyTech Agency shall not be
        liable for any direct, indirect, incidental, special, consequential,
        or punitive damages arising from your use of or reliance on the App
        or any data displayed within it, including but not limited to losses
        resulting from a missed, delayed, inaccurate, or absent disaster
        notification.`}
      </p>

      <h2>9. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time,
        without notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication in the App. Continued use of the App
        after changes constitutes acceptance of the updated Terms.`}
      </p>

      <h2>11. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject
        to the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>12. Contact</h2>
      <p>
        For any questions regarding these Terms of Use, contact us at:
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
