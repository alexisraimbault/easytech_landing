import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Compose: Photo Wallpapers",
  description:
    "Terms of Use for the Compose: Photo Wallpapers application by EasyTech Agency",
};

export default function ComposeTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Compose: Photo Wallpapers</h1>
      <p>
        <strong>Last updated:</strong> March 4, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Compose: Photo Wallpapers
        application ("the App"), you agree to be bound by these Terms of Use
        ("Terms"). If you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Compose is a mobile application that allows users to create custom photo
        wallpapers and widgets using a variety of templates, layouts, and design
        tools. The App provides a library of templates to help users personalize
        their device screens.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Compose offers both free and premium features. Premium features are
        accessible through a paid subscription:`}
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

      <h2>5. User Content and Responsibility</h2>
      <p>
        {`When you use your own photos or images within the App, you are solely
        responsible for ensuring that you have the right to use those photos.
        You agree not to use images that infringe on third-party copyrights,
        trademarks, or other intellectual property rights.`}
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the App or its algorithms</li>
        <li>
          Not redistribute or share premium templates without authorization
        </li>
        <li>
          Only use photos and images that you own or have permission to use
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to templates,
        design elements, graphics, logos, icons, and software, are the property
        of EasyTech Agency and are protected by intellectual property laws.
        Templates provided by the App are licensed for personal use only and
        may not be redistributed, resold, or used for commercial purposes.`}
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. EasyTech
        Agency:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not guarantee that the App will be compatible with all devices
          or screen sizes
        </li>
        <li>
          Is not responsible for user-generated content created with the App
        </li>
        <li>
          Does not warrant that templates will meet your specific requirements
        </li>
      </ul>

      <h2>9. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App.`}
      </p>

      <h2>10. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication in the App. Continued use of the App after
        changes constitutes acceptance of the updated Terms.`}
      </p>

      <h2>12. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject to
        the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>13. Contact</h2>
      <p>
        For any questions regarding these Terms of Use, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/compose" className="btn">
          Back to Compose
        </Link>
      </div>
    </div>
  );
}
