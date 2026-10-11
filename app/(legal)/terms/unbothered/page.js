import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Unbothered",
  description:
    "Terms of Use for the Unbothered application by EasyTech Agency",
};

export default function UnbotheredTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Unbothered</h1>
      <p>
        <strong>Last updated:</strong> October 7, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Unbothered application ("the App"), you agree to be bound by these Terms
        of Use ("Terms"). If you do not agree to these Terms, do not use the
        App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Unbothered helps people stop checking an ex's social media after a
        breakup. The App combines a scripted "bestie" chat, a game in which
        your progress is shown as damage to a boss, short lessons, voice-guided
        SOS sessions for difficult moments, daily quests, and an optional
        Shield that uses Apple's Screen Time to guard the apps you choose
        during the hours you choose. The bestie is pre-written content, not a
        human and not an AI chatbot.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Unbothered requires a subscription to access its full content. A
        3-day free trial may be available for new users on some plans:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Prices are displayed in the App and may vary by region</li>
        <li>Subscriptions renew automatically unless cancelled</li>
        <li>
          You may cancel your subscription at any time through your Apple
          account settings, at least 24 hours before the end of the current
          period
        </li>
        <li>
          {`Refunds are handled in accordance with Apple's policies`}
        </li>
        <li>
          The free trial converts to a paid subscription automatically unless
          cancelled before the trial period ends
        </li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>
          Not use the App to monitor, contact, or harass any other person
        </li>
        <li>Not attempt to reverse-engineer the App or its content</li>
        <li>
          Not redistribute or share premium content or audio without
          authorization
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>6. The Shield</h2>
      <p>
        {`The Shield relies on Apple's Screen Time and is subject to how iOS
        applies it. You stay in control: you can open a guarded app anyway at
        any moment, change your schedule, or turn the Shield off. We do not
        guarantee that every app or website will be blocked in every
        situation.`}
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to chat
        scripts, lessons, voice recordings, graphics, logos, icons, and
        software, are the property of EasyTech Agency or its licensors and are
        protected by intellectual property laws.`}
      </p>

      <h2>8. Wellbeing Disclaimer</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Unbothered
        is a self-help tool for general wellbeing after a breakup. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not constitute medical or psychological advice and is not a
          substitute for therapy, counseling, or professional care
        </li>
        <li>Does not diagnose or treat any condition</li>
        <li>Does not guarantee specific results or outcomes</li>
        <li>
          Is not a crisis service. If you are thinking about harming yourself
          or are in danger, contact your local emergency number now. In the
          US, call or text 988 (Suicide & Crisis Lifeline). Elsewhere, find a
          helpline at{" "}
          <a
            href="https://findahelpline.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            findahelpline.com
          </a>
        </li>
      </ul>

      <h2>9. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App.`}
      </p>

      <h2>10. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication in the App. Continued use of the App after
        changes constitutes acceptance of the updated Terms.`}
      </p>

      <h2>12. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject to
        the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>13. Contact</h2>
      <p>
        For any questions regarding these Terms of Use, contact us at:
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
