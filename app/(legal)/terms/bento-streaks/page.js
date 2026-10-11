import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Bento Streaks",
  description:
    "Terms of Use for the Bento Streaks application by EasyTech Agency",
};

export default function BentoStreaksTerms() {
  return (
    <div className="legal-content">
      <h1>{"Terms of Use - Bento Streaks"}</h1>
      <p>
        <strong>Last updated:</strong> January 28, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Bento Streaks application
        (the "App"), you agree to be bound by these terms of use ("Terms"). If
        you do not accept these Terms, do not use the App.`}
      </p>

      <h2>2. Service Description</h2>
      <p>
        {`Bento Streaks is an iOS habit tracking application that allows you to
        track your daily streaks. The App features a gamified bento box system
        that fills with food as you maintain your habits. An iOS widget allows
        you to view your progress directly on your home screen.`}
      </p>

      <h2>3. Premium Subscription</h2>
      <p>
        {`Bento Streaks offers a limited free version and a premium subscription.
        The premium subscription provides access to:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Unlimited habits (free version is limited to 1 habit)"}</li>
        <li>{"Premium bento layouts"}</li>
        <li>{"Rare foods to customize your bento"}</li>
        <li>{"Exclusive color themes"}</li>
      </ul>
      <p>
        {`Subscriptions are billed monthly or annually based on your choice.
        Payment will be charged to your Apple account upon purchase confirmation.
        The subscription automatically renews unless canceled at least 24 hours
        before the end of the current period.`}
      </p>

      <h2>{"4. License"}</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes, in accordance with these Terms.`}
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Use the App in accordance with its intended purpose"}</li>
        <li>{"Not attempt to circumvent the limitations of the free version"}</li>
        <li>{"Respect all intellectual property rights"}</li>
        <li>{"Not attempt to compromise the security of the App"}</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to text,
        graphics, food illustrations, logos, icons, and software, are the
        property of EasyTech Agency and are protected by intellectual property
        laws.`}
      </p>

      <h2>7. User Data</h2>
      <p>
        {`Your habit data is stored locally on your device. Your use of the App
        is also governed by our Privacy Policy, which is incorporated into these
        Terms by reference.`}
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Bento Streaks
        is designed as a personal motivation tool and does not replace medical
        or professional advice.`}
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use of
        the App, including loss of habit data.`}
      </p>

      <h2>10. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms. You may
        cancel your subscription at any time through your Apple account settings.`}
      </p>

      <h2>11. Changes</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon posting. Your continued use of the App after
        modifications constitutes your acceptance of the new Terms.`}
      </p>

      <h2>12. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject to
        the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>13. Contact</h2>
      <p>
        {
          "For any questions regarding these terms of use, please contact us at:"
        }
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/bento-streaks" className="btn">
          Back to Bento Streaks
        </Link>
      </div>
    </div>
  );
}
