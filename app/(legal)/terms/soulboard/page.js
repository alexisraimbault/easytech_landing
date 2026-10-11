import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Soulboard: Vision Board & Manifestation",
  description:
    "Terms of Use for the Soulboard manifestation and vision-board application by EasyTech Agency",
};

export default function SoulboardTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Soulboard: Vision Board &amp; Manifestation</h1>
      <p>
        <strong>Last updated:</strong> May 18, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Soulboard mobile application
        ("the App"), you agree to be bound by these Terms of Use ("Terms").
        If you do not agree to these Terms, do not use the App.`}
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Soulboard is a manifestation and vision-board mobile application. The
        App features a personalized onboarding flow that captures your dream
        categories, named intentions, aesthetic tone, and blockers; AI-generated
        daily affirmations and feed; AI-generated letters from your future
        self; AI-generated shadow-work journal questions; a template-based
        vision-board editor with wallpaper, story, and widget surfaces;
        photo import with crop-and-fit controls; per-slot text and background
        customization; multi-locale content across twelve languages; local
        notifications; and share-ready image exports.
      </p>

      <h2>3. License</h2>
      <p>
        EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        and revocable license to use the App for personal, non-commercial
        purposes in accordance with these Terms.
      </p>

      <h2>4. Subscriptions and Purchases</h2>
      <p>
        Soulboard requires a subscription to access its full content. A free
        trial is available for new users:
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
          When the free trial expires without conversion, your boards,
          journal entries, and letters remain on your device. Access to
          AI-generation features resumes if you subscribe later.
        </li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>Not attempt to reverse-engineer the App or its algorithms</li>
        <li>
          Not redistribute or share premium content or generated text in a
          way that violates these Terms
        </li>
        <li>
          Not upload photos to which you do not hold the rights, or that
          depict third parties without their consent
        </li>
        <li>
          Not use the AI-generation features to produce content that is
          unlawful, hateful, harassing, sexually explicit, or otherwise
          violates the underlying AI provider&apos;s terms of use
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App, its backend,
          or its services
        </li>
      </ul>

      <h2>6. User Content and AI-Generated Content</h2>
      <p>
        You retain ownership of the photos, text, and other content you add
        to your boards and journal entries. AI-generated text (affirmations,
        future-self letters, journal questions) is produced by a third-party
        large-language-model provider (Google Gemini) and is provided to you
        for personal, non-commercial use within the App and for your own
        reflection and sharing.
      </p>
      <p>
        Generated text is produced by a probabilistic system. We do not
        warrant the accuracy, suitability, or originality of any AI-generated
        text. You are solely responsible for how you interpret and act on
        any generated content.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        The App and all its content, including but not limited to template
        layouts, illustrations, animations, graphics, logos, icons, ornament
        designs, color palette, and software, are the property of EasyTech
        Agency and are protected by intellectual property laws.
      </p>

      <h2>8. Disclaimers — Mental and Spiritual Wellness</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. Soulboard
        is designed for personal reflection, intention-setting, and
        creative-expression purposes. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not constitute medical, psychological, psychiatric, or
          spiritual-counseling advice and is not a substitute for
          professional consultation
        </li>
        <li>
          Does not guarantee specific life, financial, relationship,
          emotional, or spiritual outcomes
        </li>
        <li>
          Should not be used as a replacement for treatment prescribed by a
          mental-health or healthcare professional
        </li>
        <li>
          Includes shadow-work and journaling features that may surface
          difficult emotional material. If you are in crisis, struggling
          with severe distress, or have a diagnosed mental-health condition,
          please consult a qualified professional rather than relying on
          the App.
        </li>
      </ul>

      <h2>9. Limitation of Liability</h2>
      <p>
        In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use
        of the App, including but not limited to emotional distress,
        financial decisions, or life decisions made in reliance on
        AI-generated affirmations, letters, or journal questions.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may terminate or suspend your access to the App at any time,
        without notice, for any reason, including if you violate these Terms.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication in the App. Continued use of the App
        after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by French law. Any dispute shall be subject
        to the exclusive jurisdiction of the French courts.
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
        <Link href="/apps/soulboard" className="btn">
          Back to Soulboard
        </Link>
      </div>
    </div>
  );
}
