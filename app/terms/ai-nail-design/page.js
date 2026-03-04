import Link from "next/link";

export const metadata = {
  title: "Terms of Use - AI Nail Design",
  description:
    "Terms of Use for the AI Nail Design application by EasyTech Agency",
};

export default function AINailDesignTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - AI Nail Design</h1>
      <p>
        <strong>Last updated:</strong> March 4, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the AI Nail Design application
        ("the App"), you agree to be bound by these Terms of Use ("Terms"). If
        you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {`AI Nail Design is a mobile application that uses artificial intelligence
        to generate nail art designs based on text descriptions and user
        preferences. The App also provides a virtual try-on feature that allows
        users to see how nail designs would look on their actual hands using
        photos taken with their device camera. Additional features include
        trending design browsing, design saving and organizing, and story-ready
        collage export.`}
      </p>

      <h2>3. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.`}
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        {`AI Nail Design offers both free and premium features. Premium features
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
        <li>
          Free users are subject to daily generation limits which reset every
          24 hours
        </li>
      </ul>

      <h2>5. AI-Generated Content</h2>
      <p>
        {`The App uses artificial intelligence to generate nail art designs and
        virtual try-on results. You acknowledge and agree that:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          AI-generated nail designs are created for inspiration and
          visualization purposes
        </li>
        <li>
          Generated designs may not be perfectly reproducible in a real salon
          setting — results at a nail salon may vary depending on the
          technician, materials, and techniques used
        </li>
        <li>
          Virtual try-on results are approximate visualizations and may not
          perfectly represent how a design will look on your actual nails
        </li>
        <li>
          AI-generated content may occasionally contain imperfections or
          artifacts inherent to AI image generation
        </li>
        <li>
          EasyTech Agency does not guarantee the accuracy, quality, or
          suitability of any AI-generated design for any particular purpose
        </li>
      </ul>

      <h2>6. Photos and Camera Usage</h2>
      <p>
        {`The App uses your device camera and photo library for the virtual
        try-on feature. By using these features, you acknowledge that:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Hand photos you take are sent to our servers for AI processing to
          generate try-on results
        </li>
        <li>
          You are solely responsible for the photos you take and upload
        </li>
        <li>
          You should only take photos of your own hands or hands for which you
          have the owner&apos;s consent
        </li>
        <li>
          Photos are stored in your private account and are not visible to
          other users
        </li>
        <li>
          We do not use your photos to train AI models
        </li>
        <li>
          Camera and photo library access can be revoked at any time in your
          device settings
        </li>
      </ul>

      <h2>7. User Content and Intellectual Property</h2>
      <p>
        {`When you provide text prompts, style preferences, or photos to generate
        designs, you retain ownership of your input content. Regarding
        AI-generated designs:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          You may use AI-generated designs for personal, non-commercial
          purposes (e.g., showing your nail technician, sharing on social
          media)
        </li>
        <li>
          You may not sell, license, or commercially distribute AI-generated
          designs
        </li>
        <li>
          The App, its codebase, AI models, algorithms, and branding are the
          property of EasyTech Agency and are protected by intellectual
          property laws
        </li>
      </ul>

      <h2>8. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>
          Not submit prompts intended to generate inappropriate, offensive, or
          illegal content
        </li>
        <li>
          Not attempt to reverse-engineer the AI models, algorithms, or
          service infrastructure
        </li>
        <li>
          Not upload photos containing inappropriate content or content that
          violates the rights of others
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its services
        </li>
        <li>
          Not use automated tools, bots, or scripts to interact with the App
        </li>
      </ul>

      <h2>9. Story Export and Social Sharing</h2>
      <p>
        {`The App allows you to create collage images for sharing on social media.
        You are solely responsible for the content you share on third-party
        platforms. EasyTech Agency is not responsible for how third-party
        platforms handle content you share.`}
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Specifically:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          AI-generated designs are for inspiration only and may not be
          reproducible in real life
        </li>
        <li>
          Virtual try-on results are approximate visualizations, not exact
          representations
        </li>
        <li>
          We do not guarantee the availability or uptime of AI generation
          services
        </li>
        <li>
          EasyTech Agency is not responsible for any dissatisfaction with salon
          results based on designs generated by the App
        </li>
      </ul>

      <h2>11. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App,
        including but not limited to dissatisfaction with nail salon results,
        loss of data, or service interruptions.`}
      </p>

      <h2>12. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms. Upon
        termination, your right to use the App ceases immediately. You may
        request deletion of your data by contacting us.`}
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
        <Link href="/apps/ai-nail-design" className="btn">
          Back to AI Nail Design
        </Link>
      </div>
    </div>
  );
}
