import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - AI Debate Coach",
  description:
    "Privacy Policy for the AI Debate Coach application by EasyTech Agency",
};

export default function DebateCoachPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - AI Debate Coach</h1>
      <p>
        <strong>Last updated:</strong> March 2, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the AI Debate Coach
        mobile application (the "Service"). This page informs you of our
        policies regarding the collection, use, and disclosure of personal data
        when you use our Service.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data to provide and improve our Service:
      </p>

      <h3>2.1 Account Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Authentication information (via Firebase Authentication — email or
          anonymous sign-in)
        </li>
        <li>A unique user identifier to sync your progress across devices</li>
      </ul>

      <h3>2.2 Exercise and Progress Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Exercise results, scores, and skill assessments</li>
        <li>Streak and daily challenge completion data</li>
        <li>Topics you have practiced with</li>
      </ul>
      <p>
        This data is stored securely on your device and in your private account
        to track your progress and personalize your experience.
      </p>

      <h3>2.3 AI Interaction Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          When you start an exercise, your selected topic and difficulty are
          sent to our AI service (via Firebase Cloud Functions) to generate
          exercise content
        </li>
        <li>
          Custom topics you create are sent to our AI service for content
          generation
        </li>
        <li>
          We do not store the content of individual AI-generated exercises on
          our servers after delivery
        </li>
      </ul>

      <h3>2.4 Voice and Speech Data</h3>
      <p>
        Certain features of the App may use voice input for speech-based
        exercises. When using voice features:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>
            Speech recognition is performed on-device using Apple&apos;s Speech
            Framework
          </strong>
        </li>
        <li>Audio recordings are never transmitted to our servers</li>
        <li>Audio recordings are never shared with third parties</li>
        <li>
          Only the transcribed text may be sent to our AI service for feedback
          — never raw audio
        </li>
        <li>
          You can revoke microphone access at any time in your device settings
        </li>
        <li>
          Voice features are entirely optional — all exercises can be completed
          with tap-based interactions
        </li>
      </ul>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        {`In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat may collect:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>An anonymous identifier to manage your subscription</li>
        <li>Your in-app purchase history</li>
        <li>
          No payment information (handled directly by Apple)
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
        We may collect anonymized usage analytics to improve the App, such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Which exercise types are most popular</li>
        <li>Exercise completion rates</li>
        <li>App performance metrics</li>
        <li>Device type and iOS version (anonymized)</li>
      </ul>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users.
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
          With service providers who assist in operating the App (Firebase,
          RevenueCat) — under strict data processing agreements
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        {`We take data security seriously. Your exercise data is stored securely
        using Firebase's infrastructure with industry-standard encryption.
        Voice data never leaves your device. Subscription data is secured by
        Apple and RevenueCat.`}
      </p>

      <h2>7. Data Retention</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Exercise and progress data is retained as long as your account is
          active
        </li>
        <li>
          AI-generated content is ephemeral and not stored on our servers after
          delivery
        </li>
        <li>
          You can delete your account and all associated data at any time from
          within the App
        </li>
      </ul>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>Delete your account and all associated data</li>
        <li>Request data portability</li>
        <li>Withdraw your consent at any time</li>
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
        <Link href="/apps/debate-coach" className="btn">
          Back to AI Debate Coach
        </Link>
      </div>
    </div>
  );
}
