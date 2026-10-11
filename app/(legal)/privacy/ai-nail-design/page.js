import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - AI Nail Design",
  description:
    "Privacy Policy for the AI Nail Design application by EasyTech Agency",
};

export default function AINailDesignPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - AI Nail Design</h1>
      <p>
        <strong>Last updated:</strong> March 7, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the AI Nail Design
        mobile application (the "App"). This Privacy Policy explains how we
        collect, use, and protect your information when you use our App.`}
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We collect minimal data necessary to provide and improve the App:
      </p>

      <h3>2.1 Account Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Authentication information (via Firebase Authentication — email or
          anonymous sign-in)
        </li>
        <li>A unique user identifier to sync your data across devices</li>
      </ul>

      <h3>2.2 Design and Usage Data</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Text prompts you provide to generate nail designs (e.g., style
          descriptions, color preferences, nail shape selections)
        </li>
        <li>Generated nail design images associated with your account</li>
        <li>Favorited designs and saved collections</li>
        <li>Generation history and usage statistics</li>
      </ul>

      <h3>2.3 Photos and Camera Data</h3>
      <p>
        The App uses your device camera and photo library for the virtual
        try-on feature. This is a critical section — please read carefully:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Hand photos you take for virtual try-on are sent to our
          servers</strong> (via Firebase Cloud Functions) for AI processing to
          generate the try-on result
        </li>
        <li>
          Hand photos are processed solely to apply the selected nail design
          onto your hand image
        </li>
        <li>
          <strong>We do not use your photos to train AI models</strong>
        </li>
        <li>
          <strong>We do not perform facial recognition or biometric
          analysis</strong> on your photos — only hand/nail detection is
          performed for the try-on feature
        </li>
        <li>
          Hand photos and try-on results are stored in your private account
          (Firebase Storage) and are not shared with other users
        </li>
        <li>
          Photos imported from your gallery for design purposes are uploaded
          to your private storage
        </li>
        <li>
          You can delete your photos and try-on results at any time from
          within the App
        </li>
        <li>
          Camera and photo library access can be revoked at any time in your
          device settings
        </li>
      </ul>

      <h3>2.4 AI-Generated Content</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          When you generate a nail design, your text prompt and style
          preferences are sent to our AI service (via Firebase Cloud Functions)
          to generate images
        </li>
        <li>
          Generated images are stored in your private account for you to
          access, save, and share
        </li>
        <li>
          Generated images may expire after 24 hours unless saved to your
          favorites
        </li>
        <li>
          We may use anonymized, aggregated prompt data (without any personal
          information or photos) to improve the quality of AI-generated designs
        </li>
      </ul>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        {`In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat may collect:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>An anonymous identifier to manage your subscription</li>
        <li>Your in-app purchase history</li>
        <li>No payment information (handled directly by Apple)</li>
      </ul>
      <p>
        For more information, see the{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat Privacy Policy
        </a>
        .
      </p>

      <h2>4. How We Use Your Data</h2>
      <p>We use your data to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Generate nail art designs based on your prompts</li>
        <li>Process hand photos for the virtual try-on feature</li>
        <li>Store your designs, favorites, and try-on results</li>
        <li>Manage your subscription and account</li>
        <li>Provide trending designs and personalized suggestions</li>
        <li>Improve the quality and performance of our AI services</li>
      </ul>

      <h2>5. Analytics</h2>
      <p>
        We collect anonymized usage analytics to improve the App, such as:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Feature usage statistics (generations, try-ons, exports)</li>
        <li>App performance metrics</li>
        <li>Device type and iOS version (anonymized)</li>
      </ul>
      <p>
        Analytics data is aggregated and cannot be used to identify individual
        users.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        {`We do not sell, trade, or transfer your personal information or photos
        to third parties, except in the following cases:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
        <li>
          With service providers who assist in operating the App (Firebase,
          OpenAI, Google Cloud AI, RevenueCat, PostHog) — as described in
          Section 7
        </li>
      </ul>
      <p>
        <strong>
          Your hand photos and try-on results are never shared with other
          users, sold to third parties, or used for advertising purposes.
        </strong>
      </p>

      <h2>7. AI-Powered Features and Third-Party AI Services</h2>
      <p>
        AI Nail Design uses third-party artificial intelligence services to
        power its core features. When you use these features, certain data is
        sent to these services for processing:
      </p>

      <h3>7.1 Design Generation</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your text prompts describing nail designs,
          selected nail shape, style, and color preferences
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for prompt optimization) and Google
          Vertex AI / Imagen (for image generation)
        </li>
        <li>
          <strong>Purpose:</strong> To generate AI-created nail art designs
          based on your descriptions
        </li>
      </ul>

      <h3>7.2 Virtual Try-On</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your hand photo and the selected nail
          design image
        </li>
        <li>
          <strong>Sent to:</strong> Google Gemini (for AI image editing)
        </li>
        <li>
          <strong>Purpose:</strong> To preview how nail designs would look on
          your actual hands
        </li>
      </ul>

      <h3>7.3 AI Suggestions</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Data sent:</strong> Your style preferences, selected shapes,
          and colors
        </li>
        <li>
          <strong>Sent to:</strong> OpenAI (for text generation)
        </li>
        <li>
          <strong>Purpose:</strong> To suggest personalized nail design ideas
        </li>
      </ul>

      <p>
        These third-party AI services process your data solely to provide the
        requested features.{" "}
        <strong>
          Your data is not used by these providers to train AI models.
        </strong>{" "}
        The App requests your explicit consent before sending personal data
        (such as hand photos) to third-party AI services.
      </p>

      <h3>7.4 All Third-Party Services</h3>
      <p>The App uses the following third-party services:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Firebase</strong> (Google) — Authentication, Cloud Functions
          (server-side processing), Cloud Storage (image storage)
        </li>
        <li>
          <strong>OpenAI</strong> — AI text generation (prompt enrichment and
          design suggestions). See the{" "}
          <a
            href="https://openai.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI Privacy Policy
          </a>
        </li>
        <li>
          <strong>Google Vertex AI / Imagen</strong> — AI image generation. See
          the{" "}
          <a
            href="https://cloud.google.com/terms/cloud-privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Cloud Privacy Notice
          </a>
        </li>
        <li>
          <strong>Google Gemini</strong> — AI image editing (virtual try-on).
          See the{" "}
          <a
            href="https://cloud.google.com/terms/cloud-privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Cloud Privacy Notice
          </a>
        </li>
        <li>
          <strong>RevenueCat</strong> — Subscription management. See the{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat Privacy Policy
          </a>
        </li>
        <li>
          <strong>PostHog</strong> — Anonymized analytics. See the{" "}
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostHog Privacy Policy
          </a>
        </li>
      </ul>

      <h2>8. Data Security</h2>
      <p>
        {`We take data security seriously. Your data is stored securely using
        Firebase's infrastructure with industry-standard encryption. Photos
        and generated images are stored in private, access-controlled storage
        buckets. Subscription data is secured by Apple and RevenueCat.`}
      </p>

      <h2>9. Data Retention</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Designs and try-on results are retained as long as your account is
          active
        </li>
        <li>
          Unsaved generated designs may expire after 24 hours
        </li>
        <li>
          Hand photos used for try-on processing are retained in your private
          storage until you delete them
        </li>
        <li>
          You can delete your account and all associated data (including all
          photos and designs) at any time from within the App
        </li>
      </ul>

      <h2>10. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access your personal data</li>
        <li>
          Delete your account and all associated data, including all photos,
          designs, and try-on results
        </li>
        <li>Request data portability</li>
        <li>Withdraw your consent at any time</li>
        <li>Object to data processing</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        {`The App is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe we
        have collected data from a child under 13, please contact us
        immediately.`}
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        {`We reserve the right to modify this Privacy Policy at any time. Changes
        will take effect upon publication. We encourage you to review this page
        periodically.`}
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
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
