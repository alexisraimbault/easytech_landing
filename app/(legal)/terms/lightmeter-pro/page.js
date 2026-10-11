import Link from "next/link";

export const metadata = {
  title: "Terms of Use - LightMeter Pro",
  description:
    "Terms of Use for the LightMeter Pro application by EasyTech Agency",
};

export default function LightMeterProTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - LightMeter Pro</h1>
      <p>
        <strong>Last updated:</strong> March 4, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the LightMeter Pro application
        ("the App"), you agree to be bound by these Terms of Use ("Terms"). If
        you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`LightMeter Pro is a mobile application that uses your device's camera
        sensor to measure ambient light levels, color temperature, and exposure
        values for photography and videography purposes. The App also includes
        an AI Scene Analysis feature powered by Anthropic's Claude API, which
        provides intelligent scene analysis and lighting recommendations based
        on photos you capture.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Camera Usage and Light Metering</h2>
      <p>
        {`The App requires access to your device's camera to perform light
        measurements. By granting camera access, you acknowledge that:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          The camera sensor is used to capture light data for metering purposes
        </li>
        <li>
          Light readings are processed on-device and stored locally
        </li>
        <li>
          You can revoke camera access at any time in your device settings,
          though this will prevent the App from functioning as intended
        </li>
      </ul>

      <h2>5. AI Scene Analysis</h2>
      <p>
        {`The App includes an AI Scene Analysis feature powered by Anthropic's
        Claude API. When you use this feature:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Photos you capture are sent to Anthropic for analysis only when you
          explicitly tap the {`"Analyze"`} button
        </li>
        <li>
          Contextual sensor data (light readings, color temperature) may be
          included alongside the photo to improve the analysis
        </li>
        <li>
          Anthropic does not store your photos after processing the request
        </li>
        <li>
          AI-generated analysis and recommendations are provided for
          informational and educational purposes only
        </li>
        <li>
          AI analysis may occasionally contain inaccuracies inherent to AI
          generation
        </li>
      </ul>

      <h2>6. Subscriptions and Purchases</h2>
      <p>
        {`LightMeter Pro offers both free and premium features. Premium features
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

      <h2>7. Measurement Accuracy Disclaimer</h2>
      <p>
        {`LightMeter Pro provides light measurements using your device's camera
        sensor. You acknowledge and agree that:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Light readings are approximate and may vary depending on your device
          model, camera hardware, and environmental conditions
        </li>
        <li>
          The App is not a replacement for professional-grade light metering
          equipment
        </li>
        <li>
          Measurements should be used as a reference and guide, not as
          definitive values for critical or professional applications
        </li>
        <li>
          EasyTech Agency does not guarantee the accuracy of any light readings
          or AI-generated recommendations
        </li>
      </ul>

      <h2>8. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the AI models or algorithms</li>
        <li>
          Not use the App to capture or transmit content that is illegal,
          harmful, or abusive
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to text, graphics,
        logos, icons, AI models, algorithms, and software, are the property of
        EasyTech Agency and are protected by intellectual property laws.`}
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. LightMeter
        Pro is designed as a photography and videography tool. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not replace professional light metering equipment or
          professional photography advice
        </li>
        <li>
          Does not guarantee specific results in your photography or
          videography work
        </li>
        <li>
          May produce AI-generated scene analysis that contains inaccuracies
        </li>
      </ul>

      <h2>11. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App,
        including but not limited to damages resulting from reliance on light
        readings or AI-generated recommendations.`}
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
        <Link href="/apps/lightmeter-pro" className="btn">
          Back to LightMeter Pro
        </Link>
      </div>
    </div>
  );
}
