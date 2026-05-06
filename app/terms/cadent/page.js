import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Cadent: Japanese Walking Method",
  description:
    "Terms of Use for the Cadent: Japanese Walking Method application by EasyTech Agency",
};

export default function CadentTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Cadent: Japanese Walking Method</h1>
      <p>
        <strong>Last updated:</strong> May 6, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Cadent: Japanese Walking
        Method application ("the App"), you agree to be bound by these Terms
        of Use ("Terms"). If you do not agree to these Terms, do not use the
        App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Cadent is a mobile application that guides you through Interval
        Walking Training (also known as the Japanese Walking Method): a
        repeating sequence of brisk-walk and easy-walk intervals based on the
        protocol described by Nemoto et al. (Shinshu University). The App
        calibrates your fast and slow target cadence from a short walking
        measurement, then drives live sessions with on-screen instructions,
        live cadence, voice or chime cues, and haptic feedback. Sessions can
        be saved as walking workouts in Apple Health.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Cadent requires a subscription to access its full content. A free
        trial may be available for new users:`}
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
        <li>
          The free trial converts to a paid subscription automatically unless
          cancelled before the trial period ends
        </li>
        <li>
          When the free trial expires without conversion, your profile,
          calibration, and session history remain on your device. Access to
          sessions resumes if you subscribe later.
        </li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the App or its algorithms</li>
        <li>
          Not redistribute or share premium content without authorization
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        {`The App and all its content — including its illustrations, copy,
        audio cues, voice prompts, screen designs, icons, and software — are
        the property of EasyTech Agency and are protected by intellectual
        property laws. The Japanese Walking Method itself is a public-domain
        training protocol; the App's specific implementation, content, and
        coaching guidance are not.`}
      </p>

      <h2>7. Disclaimers — Health, Fitness &amp; Safety</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Cadent is a
        general fitness aid for self-paced interval walking. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not constitute medical, fitness, or cardiology advice and is
          not a substitute for professional consultation
        </li>
        <li>
          Is not a medical device. Cadence, distance, step counts, and
          calorie estimates are derived from consumer-grade phone sensors and
          must not be used for medical decision-making
        </li>
        <li>
          Does not guarantee specific health, weight, fitness, blood-pressure,
          or cardiovascular outcomes. Scientific findings cited within the
          App reflect published group-level results and do not guarantee
          individual outcomes
        </li>
        <li>
          Should not be used as a replacement for treatment prescribed by a
          healthcare professional
        </li>
        <li>
          Includes brisk-walking intervals that raise heart rate. Consult a
          qualified healthcare professional before beginning any new exercise
          program, especially if you have a heart condition, high or
          uncontrolled blood pressure, diabetes, joint or balance problems,
          recent surgery, are pregnant, or are taking medication that affects
          heart rate or balance
        </li>
        <li>
          Brisk walking outdoors carries real-world risks including traffic,
          uneven ground, and weather. Stay aware of your surroundings; do not
          rely on audio cues to the exclusion of normal awareness; and do not
          use the App while operating a vehicle
        </li>
        <li>
          If you experience chest pain, dizziness, shortness of breath beyond
          normal exertion, faintness, severe joint pain, or any other adverse
          symptom while using the App, stop the session immediately and seek
          medical attention
        </li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use of
        the App, including but not limited to physical injury, illness,
        cardiovascular events, falls, traffic incidents, or psychological
        distress related to performing walking sessions guided by the App.`}
      </p>

      <h2>9. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication in the App. Continued use of the App after
        changes constitutes acceptance of the updated Terms.`}
      </p>

      <h2>11. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject to
        the exclusive jurisdiction of the French courts.`}
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
        <Link href="/apps/cadent" className="btn">
          Back to Cadent
        </Link>
      </div>
    </div>
  );
}
