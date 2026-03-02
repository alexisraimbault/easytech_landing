import Link from "next/link";

export const metadata = {
  title: "Terms of Use - AI Debate Coach",
  description:
    "Terms of Use for the AI Debate Coach application by EasyTech Agency",
};

export default function DebateCoachTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - AI Debate Coach</h1>
      <p>
        <strong>Last updated:</strong> March 2, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the AI Debate Coach application
        ("the App"), you agree to be bound by these Terms of Use ("Terms"). If
        you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`AI Debate Coach is a mobile application designed to improve critical
        thinking and argumentation skills through interactive exercises. The App
        uses artificial intelligence to generate debate content, evaluate
        arguments, and provide feedback. Exercise types include fallacy
        detection, argument analysis, argument building, counterargument drills,
        and AI-powered debate simulations. Some features may use speech
        recognition to enable voice-based interactions.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`AI Debate Coach offers both free and premium features. Premium features
        are accessible through a paid subscription:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Prices are displayed in the App and may vary by region</li>
        <li>Subscriptions renew automatically unless cancelled</li>
        <li>
          You may cancel your subscription at any time through your Apple
          account settings
        </li>
        <li>
          {`Refunds are handled in accordance with Apple's policies`}
        </li>
      </ul>

      <h2>5. AI-Generated Content</h2>
      <p>
        {`The App uses artificial intelligence to generate debate topics, arguments,
        fallacies, feedback, and other educational content. You acknowledge that:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          AI-generated content is created for educational purposes only and
          does not represent the views of EasyTech Agency
        </li>
        <li>
          Arguments and positions presented in exercises may be intentionally
          flawed for training purposes
        </li>
        <li>
          AI feedback is automated and should not be considered professional
          advice
        </li>
        <li>
          Content may occasionally contain inaccuracies inherent to AI
          generation
        </li>
      </ul>

      <h2>6. Voice Recognition and Speech Data</h2>
      <p>
        {`Certain features of the App may use speech recognition to allow
        voice-based interactions. When using voice features:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {`Speech recognition is powered by Apple's on-device Speech Framework`}
        </li>
        <li>
          Audio is processed locally on your device and is not stored or
          transmitted to our servers
        </li>
        <li>
          You may be prompted to grant microphone access, which you can revoke
          at any time in your device settings
        </li>
        <li>
          Voice features are optional — all exercises can be completed using
          tap-based interactions
        </li>
      </ul>

      <h2>7. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the AI models or algorithms</li>
        <li>
          Not use the App to generate content that is illegal, harmful, or
          abusive
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>8. User Content</h2>
      <p>
        {`When you create custom topics or provide text input during exercises,
        this content is sent to our AI service for processing. We do not claim
        ownership of your input. Custom topics and exercise results are stored
        locally on your device or in your private account.`}
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to text, graphics,
        logos, icons, AI models, algorithms, and software, are the property of
        EasyTech Agency and are protected by intellectual property laws.`}
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. AI Debate
        Coach is designed for educational and personal development purposes.
        The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not replace professional debate coaching or academic instruction
        </li>
        <li>Does not guarantee specific learning outcomes or results</li>
        <li>
          May contain AI-generated arguments that are intentionally flawed for
          educational purposes
        </li>
      </ul>

      <h2>11. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App.`}
      </p>

      <h2>12. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>13. Changes to Terms</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication in the App. Continued use of the App after
        changes constitutes acceptance of the updated Terms.`}
      </p>

      <h2>14. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject to
        the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>15. Contact</h2>
      <p>
        For any questions regarding these Terms of Use, contact us at:
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
