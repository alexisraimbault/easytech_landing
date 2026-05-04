import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Ninety: 90 Day Challenge Tracker",
  description:
    "Terms of Use for the Ninety: 90 Day Challenge Tracker application by EasyTech Agency",
};

export default function NinetyTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Ninety: 90 Day Challenge Tracker</h1>
      <p>
        <strong>Last updated:</strong> May 4, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Ninety: 90 Day Challenge
        Tracker application ("the App"), you agree to be bound by these Terms
        of Use ("Terms"). If you do not agree to these Terms, do not use the
        App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Ninety is a mobile application that delivers a personalised 90-day
        discipline-tracking program. The App features a 14-step onboarding flow
        that builds your daily contract from your goals, level, schedule, and
        the habits you want to break; a catalog of 99 daily disciplines across
        10 areas of life; on-device progress photos; an honest streak counter
        and generous day counter; a soft-reset mechanic for missed-day recovery;
        plan calendar and per-day customisation; progress charts; share-ready
        streak art cards; and local notifications.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Ninety requires a subscription to access its full content. A free
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
        <li>
          When the free trial expires without conversion, your program data is
          preserved on your device. Access resumes if you subscribe later.
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
        {`The App and all its content, including but not limited to the
        discipline catalog, illustrations, animations, graphics, logos, icons,
        streak-art templates, and software, are the property of EasyTech Agency
        and are protected by intellectual property laws.`}
      </p>

      <h2>7. Disclaimers — Health and Wellness</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Ninety is
        designed for general behaviour-change, habit-formation, and personal
        accountability purposes. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not constitute medical, fitness, nutritional, or psychological
          advice and is not a substitute for professional consultation
        </li>
        <li>Does not guarantee specific health, physical, or behavioural results</li>
        <li>
          Should not be used as a replacement for treatment prescribed by a
          healthcare professional
        </li>
        <li>
          Includes disciplines (workouts, cold exposure, intermittent fasting,
          dietary restrictions, sauna / heat exposure) that may not be
          appropriate for all individuals. Consult a qualified healthcare
          professional before beginning any new fitness, nutrition, or
          temperature-exposure regimen, especially if you have any medical
          condition, are pregnant, or are taking medication.
        </li>
        <li>
          Includes disciplines related to sleep schedules, alcohol abstention,
          and digital detox. If you have a substance-use disorder or sleep
          disorder, consult a healthcare professional before changing your
          routine.
        </li>
        <li>
          If you experience pain, distress, or any adverse symptom while
          performing a discipline, stop immediately and seek professional
          support.
        </li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use of
        the App, including but not limited to physical injury, illness, or
        psychological distress related to performing the disciplines you select.`}
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
        <Link href="/apps/ninety" className="btn">
          Back to Ninety
        </Link>
      </div>
    </div>
  );
}
