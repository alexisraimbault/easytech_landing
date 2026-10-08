import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Clarion: Speaking Practice",
  description:
    "Terms of Use for Clarion (formerly Vocal Coach), the speaking practice application by EasyTech Agency",
};

export default function ClarionTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Clarion: Speaking Practice</h1>
      <p>
        <strong>Last updated:</strong> October 9, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Clarion application, formerly
        called Vocal Coach (the "App"), operated by EasyTech Agency ("we,"
        "our," or "us"), you agree to be bound by these Terms of Use
        ("Terms"). If you do not agree to these Terms, do not use the App.
        Apple's standard Licensed Application End User License Agreement also
        applies.`}
      </p>

      <h2>2. Description of the Service</h2>
      <p>
        {`Clarion is a speaking practice app. You record short spoken answers
        and receive feedback on your pace, pauses, filler words, structure and
        delivery. It includes a path of ranks to climb, Daily reps, a Mock
        interview with a synthetic interviewer, Talk run-throughs and a
        Progress view. Some feedback is produced automatically by software and
        artificial intelligence, as described in our Privacy Policy.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        revocable license to use the App for personal, non-commercial purposes,
        in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Clarion offers free features (including your first 3 levels) and premium
        features ("Pro") available through an auto-renewing
        subscription purchased through Apple:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Weekly and yearly plans are offered; prices are shown in the App
          before purchase and may vary by country
        </li>
        <li>
          Payment is charged to your Apple ID account when you confirm the
          purchase
        </li>
        <li>
          If a free trial is offered, it is shown before purchase; at the end
          of the trial the subscription starts and you are charged, unless you
          cancel at least 24 hours before the trial ends
        </li>
        <li>
          The subscription renews automatically for the same period and price
          unless you cancel at least 24 hours before the end of the current
          period
        </li>
        <li>
          You can manage or cancel your subscription at any time in your Apple
          ID settings (Settings &gt; your name &gt; Subscriptions); cancellation
          takes effect at the end of the current period
        </li>
        <li>Refunds are handled by Apple according to its policies</li>
        <li>
          Server-backed features are subject to reasonable daily limits to
          keep the Service available for everyone
        </li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App for its intended purpose</li>
        <li>
          Record only your own voice, and not record other people without
          their consent
        </li>
        <li>Not record or submit illegal or harmful content</li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its servers, or
          to bypass usage limits
        </li>
        <li>Not use the App for commercial purposes without authorization</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        {`The App and all of its content, including but not limited to text,
        graphics, logos, icons, practice prompts, analysis algorithms and
        software, are the property of EasyTech Agency and are protected by
        intellectual property laws.`}
      </p>

      <h2>7. Your Recordings</h2>
      <p>
        {`You keep all rights to your recordings and to what you say. Your
        recordings are stored on your device. Some features send a recording
        or its transcript to our server to produce feedback; these are not
        kept after processing. The optional voice clone used during onboarding
        requires your explicit consent and is deleted immediately after use.
        See our Privacy Policy for details. You are solely responsible for the
        content you record.`}
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your use of the App is also governed by our{" "}
        <Link href="/privacy/vocalcoach">Privacy Policy</Link>, which is
        incorporated into these Terms by reference.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Feedback in
        Clarion, including AI-generated feedback, is general guidance for
        practice. It may be inaccurate or incomplete. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Is not professional advice and does not replace a professional
          speaking coach, career advisor or speech-language therapist
        </li>
        <li>Does not provide medical advice</li>
        <li>
          Does not guarantee specific results, such as passing an interview
        </li>
      </ul>

      <h2>10. Limitation of Liability</h2>
      <p>
        {`To the extent permitted by law, EasyTech Agency shall not be liable
        for any indirect, incidental, special, or consequential damages
        resulting from your use of the App.`}
      </p>

      <h2>11. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time,
        without notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>12. Changes</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication.`}
      </p>

      <h2>13. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute will be subject to
        the exclusive jurisdiction of the French courts, subject to any
        mandatory consumer protection rules of your country of residence.`}
      </p>

      <h2>14. Contact</h2>
      <p>
        For any questions about these Terms of Use, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/vocalcoach" className="btn">
          Back to Clarion
        </Link>
      </div>
    </div>
  );
}
