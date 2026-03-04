import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Widgetly: Widget & Icon Themes",
  description:
    "Terms of Use for the Widgetly: Widget & Icon Themes application by EasyTech Agency",
};

export default function WidgetlyTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Widgetly: Widget & Icon Themes</h1>
      <p>
        <strong>Last updated:</strong> March 4, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Widgetly: Widget & Icon Themes
        application ("the App"), you agree to be bound by these Terms of Use
        ("Terms"). If you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`Widgetly is a mobile application that allows users to create custom
        widgets and apply icon themes to personalize their iPhone home screen.
        The App provides a library of templates, themes, and design tools for
        home screen customization.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`Widgetly offers both free and premium features. Premium features are
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

      <h2>5. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the App or its algorithms</li>
        <li>
          Not redistribute, resell, or share premium templates or themes
          without authorization
        </li>
        <li>Use templates and themes for personal use only</li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to templates,
        icon themes, design elements, graphics, logos, icons, and software, are
        the property of EasyTech Agency and are protected by intellectual
        property laws. All templates and themes provided by the App are licensed
        for personal use only and may not be redistributed, resold, or used for
        commercial purposes.`}
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. EasyTech
        Agency:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not guarantee that the App will be compatible with all devices
          or iOS versions
        </li>
        <li>
          Is not responsible for changes to iOS that may affect widget or icon
          theme functionality
        </li>
        <li>
          Does not warrant that all templates will meet your specific
          requirements
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
        <Link href="/apps/widgetly" className="btn">
          Back to Widgetly
        </Link>
      </div>
    </div>
  );
}
