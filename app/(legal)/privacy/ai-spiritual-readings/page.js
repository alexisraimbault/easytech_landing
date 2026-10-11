import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - AI Spiritual Readings",
  description:
    "Privacy Policy for the AI Spiritual Readings application by EasyTech Agency",
};

export default function AISpiritualReadingsPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - AI Spiritual Readings</h1>
      <p>
        <strong>Last updated:</strong> March 12, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the AI Spiritual Readings
        mobile application (the "App"). This Privacy Policy explains how we
        collect, use, and protect your information when you use our App.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data necessary to provide and improve the App:
      </p>

      <h3>2.1 Account Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Authentication information (via Firebase Authentication — anonymous
          sign-in)
        </li>
        <li>A unique user identifier to sync your data across devices</li>
        <li>
          Optional profile data you provide: display name, birth date, birth
          time, birth place
        </li>
      </ul>

      <h3>2.2 Spiritual Profile Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Your zodiac sign (calculated from your birth date) and other
          astrological data (moon sign, rising sign)
        </li>
        <li>Spiritual interests you select during onboarding</li>
        <li>Life path number and other numerology data</li>
        <li>Notification preferences and reminder times</li>
      </ul>

      <h3>2.3 Reading and Usage Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Text prompts and questions you provide for tarot readings
        </li>
        <li>Angel number lookups and sighting logs</li>
        <li>Saved readings in your journal</li>
        <li>Usage statistics and feature interaction data</li>
      </ul>

      <h3>2.4 Photos and Camera Data (Palm Reading)</h3>
      <p>
        The App uses your device camera for the palm reading feature. This is a
        critical section — please read carefully:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>
            Palm photos you take are sent to our servers
          </strong>{" "}
          (via Firebase Cloud Functions) for AI analysis and annotation
        </li>
        <li>
          Palm photos are processed solely to analyze palm lines and mounts
          and generate your reading
        </li>
        <li>
          <strong>We do not use your photos to train AI models</strong>
        </li>
        <li>
          <strong>
            We do not perform facial recognition or biometric analysis
          </strong>{" "}
          on your photos — only hand/palm detection is performed for the reading
        </li>
        <li>
          Palm photos are processed in memory and are not permanently stored on
          our servers
        </li>
        <li>
          Camera access can be revoked at any time in your device settings
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

      <h2>4. How We Use Your Data</h2>
      <p>We use your data to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Generate personalized spiritual readings (tarot, horoscope,
          numerology, palm reading, angel numbers, daily guidance)
        </li>
        <li>Process palm photos for AI-powered palm analysis</li>
        <li>Store your saved readings in your personal journal</li>
        <li>Manage your subscription and account</li>
        <li>Send daily reminder notifications (if enabled)</li>
        <li>Improve the quality and performance of our AI services</li>
      </ul>

      <h2>5. Analytics</h2>
      <p>
        We collect anonymized usage analytics to improve the App, such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Feature usage statistics</li>
        <li>App performance metrics</li>
        <li>Device type and iOS version (anonymized)</li>
      </ul>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information or photos
        to third parties, except in the following cases:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
        <li>
          With service providers who assist in operating the App (Firebase,
          OpenAI, RevenueCat) — as described in Section 7
        </li>
      </ul>
      <p>
        <strong>
          Your palm photos and personal spiritual data are never shared with
          other users, sold to third parties, or used for advertising purposes.
        </strong>
      </p>

      <h2>7. AI-Powered Features and Third-Party AI Services</h2>
      <p>
        AI Spiritual Readings uses third-party artificial intelligence services
        to power its core features. When you use these features, certain data is
        sent to these services for processing:
      </p>

      <h3>7.1 Tarot Readings</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your question, drawn cards, spread type,
          and zodiac information
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for AI text generation)
        </li>
        <li>
          <strong>Purpose:</strong> To generate personalized tarot card
          interpretations
        </li>
      </ul>

      <h3>7.2 Daily Horoscope</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your sun sign, moon sign, and rising sign
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for AI text generation)
        </li>
        <li>
          <strong>Purpose:</strong> To generate personalized daily horoscope
          forecasts
        </li>
      </ul>

      <h3>7.3 Palm Reading</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your palm photo (as a base64-encoded
          image)
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for AI vision analysis) and
          processed on our servers using MediaPipe (for hand landmark detection
          and line annotation)
        </li>
        <li>
          <strong>Purpose:</strong> To analyze palm lines and mounts and
          generate a detailed reading with annotated image
        </li>
      </ul>

      <h3>7.4 Numerology</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your calculated numerology numbers, birth
          date, and full name
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for AI text generation)
        </li>
        <li>
          <strong>Purpose:</strong> To generate personalized numerology
          interpretations
        </li>
      </ul>

      <h3>7.5 Angel Numbers</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> The number sequence you look up
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for AI text generation)
        </li>
        <li>
          <strong>Purpose:</strong> To generate spiritual interpretations of
          angel number sequences
        </li>
      </ul>

      <h3>7.6 Daily Guidance</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your sun sign and spiritual interests
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for AI text generation)
        </li>
        <li>
          <strong>Purpose:</strong> To generate personalized daily affirmations
          and guidance
        </li>
      </ul>

      <p>
        These third-party AI services process your data solely to provide the
        requested features.{" "}
        <strong>
          Your data is not used by these providers to train AI models.
        </strong>{" "}
        The App requests your explicit consent before sending personal data
        (such as palm photos) to third-party AI services.
      </p>

      <h3>7.7 All Third-Party Services</h3>
      <p>The App uses the following third-party services:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Firebase</strong> (Google) — Authentication, Cloud Functions
          (server-side processing), Firestore (data storage)
        </li>
        <li>
          <strong>OpenAI</strong> — AI text generation and vision analysis for
          all reading features. See the{" "}
          <a
            href="https://openai.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI Privacy Policy
          </a>
        </li>
        <li>
          <strong>MediaPipe</strong> (Google) — On-server hand landmark
          detection for palm reading annotation
        </li>
        <li>
          <strong>RevenueCat</strong> — Subscription management. See the{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat Privacy Policy
          </a>
        </li>
      </ul>

      <h2>8. Data Security</h2>
      <p>
        {`We take data security seriously. Your data is stored securely using
        Firebase's infrastructure with industry-standard encryption. Palm photos
        are processed in memory and not permanently stored. Subscription data is
        secured by Apple and RevenueCat.`}
      </p>

      <h2>9. Data Retention</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Saved readings in your journal are retained as long as your account is
          active
        </li>
        <li>
          Palm photos are processed in real-time and not permanently stored on
          our servers
        </li>
        <li>
          Daily horoscopes and guidance are generated fresh each day
        </li>
        <li>
          You can delete individual readings from your journal at any time
        </li>
      </ul>

      <h2>10. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>
          Delete your account and all associated data, including all saved
          readings and profile information
        </li>
        <li>Request data portability</li>
        <li>Withdraw your consent at any time</li>
        <li>Object to data processing</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        {`The App is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe we
        have collected data from a child under 13, please contact us
        immediately.`}
      </p>

      <h2>12. Disclaimer</h2>
      <p>
        {`AI Spiritual Readings is intended for entertainment and personal
        reflection purposes only. Readings generated by the App should not be
        used as a substitute for professional advice (medical, financial, legal,
        or psychological). The App does not predict the future and does not
        diagnose medical conditions. Palm reading does not diagnose medical
        conditions.`}
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        {`We reserve the right to modify this Privacy Policy at any time. Changes
        will take effect upon publication. We encourage you to review this page
        periodically.`}
      </p>

      <h2>14. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/ai-spiritual-readings" className="btn">
          Back to AI Spiritual Readings
        </Link>
      </div>
    </div>
  );
}
