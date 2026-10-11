import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Nervine: Somatic Exercises",
  description:
    "Terms of Use for the Nervine: Somatic Exercises application by EasyTech Agency",
};

export default function NervineTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Nervine: Somatic Exercises</h1>
      <p>
        <strong>Last updated:</strong> April 17, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Nervine: Somatic Exercises
        application ("the App"), you agree to be bound by these Terms of Use
        ("Terms"). If you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Nervine is a mobile application that provides guided somatic exercises
        for nervous system regulation. The App features 30+ voice-guided
        exercises across 7 categories (vagal toning, orienting, discharge,
        breathwork, grounding, release, and activation), structured multi-day
        programs, before/after nervous system check-ins, and an instant-relief
        mode based on your current state.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Nervine requires a subscription to access its full content. A 7-day free
        trial is available for new users:`}
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
        {`The App and all its content, including but not limited to somatic
        exercise routines, voice guidance audio, illustrations, animations,
        graphics, logos, icons, and software, are the property of EasyTech
        Agency and are protected by intellectual property laws.`}
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Nervine is
        designed for general wellness and nervous system regulation purposes.
        The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not constitute medical advice and is not a substitute for
          professional medical, psychological, or psychiatric consultation
        </li>
        <li>Does not guarantee specific health results or outcomes</li>
        <li>
          Should not be used as a replacement for treatment prescribed by a
          healthcare professional
        </li>
        <li>
          Is not a substitute for therapy or professional trauma treatment
        </li>
        <li>
          People with PTSD, dissociative disorders, epilepsy, cardiovascular
          conditions, or any medical concerns should consult a healthcare
          provider before using the App
        </li>
        <li>
          If you experience distress during any exercise, stop immediately
          and seek professional support
        </li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App.`}
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
        <Link href="/apps/nervine" className="btn">
          Back to Nervine
        </Link>
      </div>
    </div>
  );
}
