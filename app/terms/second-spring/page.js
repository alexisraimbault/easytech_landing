import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Second Spring: Tai Chi for Menopause",
  description:
    "Terms of Use for the Second Spring: Tai Chi for Menopause application by EasyTech Agency",
};

export default function SecondSpringTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Second Spring: Tai Chi for Menopause</h1>
      <p>
        <strong>Last updated:</strong> April 27, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Second Spring: Tai Chi for
        Menopause application ("the App"), you agree to be bound by these
        Terms of Use ("Terms"). If you do not agree to these Terms, do not
        use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Second Spring is a mobile application that provides guided tai chi
        practice designed for the menopause transition — perimenopause,
        menopause, and postmenopause. The App features a library of tai chi
        exercises organized by category (cooling for hot flashes, grounding,
        hip and pelvic mobility, spine and core, weight-bearing for bone
        density, breath and calm, flow and vitality, and evening /
        restorative), daily routines, and multi-day structured programs.
        All video instruction is bundled with the App.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Second Spring requires a subscription to access its full content. A
        7-day free trial is available for new users:`}
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
        <li>
          Practice in a safe environment, with support (such as a chair or
          wall) when indicated
        </li>
        <li>Not attempt to reverse-engineer the App or its content</li>
        <li>
          Not redistribute or share premium content or videos without
          authorization
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to tai chi
        instruction videos, routines, programs, graphics, logos, icons, and
        software, are the property of EasyTech Agency or its licensors and
        are protected by intellectual property laws.`}
      </p>

      <h2>7. Health and Safety Disclaimer</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Second
        Spring is designed for general wellness and supportive practice
        during the menopause transition. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not constitute medical advice and is not a substitute for
          professional medical, gynecological, endocrinological, or
          psychological consultation
        </li>
        <li>
          Is not a replacement for hormone replacement therapy (HRT) or any
          prescribed treatment
        </li>
        <li>Does not guarantee specific health results or outcomes</li>
        <li>
          Is not a substitute for in-person physical therapy following an
          injury, surgery, or diagnosed condition
        </li>
        <li>
          People with osteoporosis, cardiovascular conditions, recent
          surgeries, pelvic organ prolapse, or any medical concerns should
          consult a healthcare provider before using the App
        </li>
        <li>
          Weight-bearing exercises (horse stance, bow stance, etc.) should
          be adapted or avoided if you have significant bone loss or joint
          disease — please consult your doctor
        </li>
        <li>
          Practice in a clear, well-lit space with support within reach if
          your balance feels uncertain
        </li>
        <li>
          If you experience pain, dizziness, shortness of breath, or
          unusual symptoms during any exercise, stop immediately and seek
          professional support
        </li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App,
        including any physical injury sustained during practice.`}
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
        <Link href="/apps/second-spring" className="btn">
          Back to Second Spring
        </Link>
      </div>
    </div>
  );
}
