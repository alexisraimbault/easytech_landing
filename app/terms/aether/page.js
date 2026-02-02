import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Aether",
  description:
    "Terms of Use for the Aether couples connection application by EasyTech Agency",
};

export default function AetherTerms() {
  return (
    <div className="legal-content">
      <h1>{"Terms of Use - Aether"}</h1>
      <p>
        <strong>Last updated:</strong> February 2, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Aether application
        (the "App"), you agree to be bound by these terms of use ("Terms"). If
        you do not accept these Terms, do not use the App.`}
      </p>

      <h2>2. Service Description</h2>
      <p>
        {`Aether is an iOS application designed for couples to stay connected.
        The App allows users to send "pulses" (quick taps) and "whispers"
        (short messages) to their paired partner. The App features a visual
        representation of your connection and home screen widgets.`}
      </p>

      <h2>3. Account and Pairing</h2>
      <p>
        {`Aether uses anonymous authentication. When you first use the App, an
        anonymous account is automatically created. To use the App's features,
        you must pair with another user using a unique pairing code.`}
      </p>
      <p>
        {`By pairing with another user, you consent to sharing your pulses and
        whispers with that person. You may unpair at any time through the App's
        settings.`}
      </p>

      <h2>4. Premium Subscription</h2>
      <p>
        {`Aether offers a free tier with usage limits and a premium subscription
        for unlimited access:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Free tier: 10 pulses per day, 3 whispers per 48 hours"}</li>
        <li>{"Premium: Unlimited pulses and whispers"}</li>
        <li>{"Premium is automatically shared with your paired partner"}</li>
      </ul>
      <p>
        {`Subscriptions are billed monthly or annually based on your choice.
        Payment will be charged to your Apple account upon purchase confirmation.
        The subscription automatically renews unless canceled at least 24 hours
        before the end of the current period.`}
      </p>

      <h2>{"5. License"}</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes, in accordance with these Terms.`}
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Use the App only with the consent of your paired partner"}</li>
        <li>{"Not send harassing, abusive, or inappropriate content"}</li>
        <li>{"Not attempt to circumvent the limitations of the free version"}</li>
        <li>{"Respect all intellectual property rights"}</li>
        <li>{"Not attempt to compromise the security of the App"}</li>
        <li>{"Not use the App for any illegal purpose"}</li>
      </ul>

      <h2>7. User Content</h2>
      <p>
        {`You are solely responsible for the whispers and any content you send
        through the App. By sending content, you confirm that you have the right
        to share it and that it does not violate any laws or these Terms.`}
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to text,
        graphics, visual elements, logos, icons, and software, are the
        property of EasyTech Agency and are protected by intellectual property
        laws.`}
      </p>

      <h2>9. User Data</h2>
      <p>
        {`Your use of the App is governed by our Privacy Policy, which is
        incorporated into these Terms by reference. By using the App, you
        consent to the collection and use of data as described in our Privacy
        Policy.`}
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. We do not
        guarantee that the App will be available at all times or that it will
        be error-free. Aether is designed as a personal connection tool and
        does not replace direct communication with your partner.`}
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use of
        the App, including but not limited to loss of data, relationship issues,
        or inability to access the service.`}
      </p>

      <h2>12. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms. You may
        unpair and stop using the App at any time. You may cancel your
        subscription at any time through your Apple account settings.`}
      </p>

      <h2>13. Changes</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon posting. Your continued use of the App after
        modifications constitutes your acceptance of the new Terms.`}
      </p>

      <h2>14. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject to
        the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>15. Contact</h2>
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
        <Link href="/apps/aether" className="btn">
          Back to Aether
        </Link>
      </div>
    </div>
  );
}
