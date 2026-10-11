import Link from "next/link";

export const metadata = {
  title: "Terms of Use - PDF Marmot",
  description:
    "Terms of Use for the PDF Marmot application by EasyTech Agency",
};

export default function PDFMarmotTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - PDF Marmot</h1>
      <p>
        <strong>Last updated:</strong> February 4, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the PDF Marmot application
        (the "App"), you agree to be bound by these terms of use ("Terms"). If
        you do not accept these Terms, do not use the App.`}
      </p>

      <h2>2. Service Description</h2>
      <p>
        {`PDF Marmot is an iOS application that allows you to scan documents,
        add electronic signatures, and merge PDF files. The App includes a
        gamification system with badges and achievements, as well as a mascot
        named Marvin the Marmot to guide your experience.`}
      </p>

      <h2>3. Premium Subscription</h2>
      <p>
        {`PDF Marmot offers a limited free version and a premium subscription.
        The free version includes:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"3 document scans per month"}</li>
        <li>{"2 document merges per month"}</li>
        <li>{"1 saved signature"}</li>
        <li>{"Watermark on exported documents"}</li>
      </ul>
      <p>The premium subscription (PDF Marmot Pro) provides:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{"Unlimited document scans"}</li>
        <li>{"Unlimited document merges"}</li>
        <li>{"Unlimited saved signatures"}</li>
        <li>{"No watermarks on documents"}</li>
      </ul>
      <p>
        {`Subscriptions are billed monthly or annually based on your choice.
        Payment will be charged to your Apple account upon purchase confirmation.
        The subscription automatically renews unless canceled at least 24 hours
        before the end of the current period.`}
      </p>

      <h2>4. License</h2>
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
        <li>{"Not use the App for illegal document forgery or fraud"}</li>
        <li>{"Respect all intellectual property rights"}</li>
        <li>{"Not attempt to compromise the security of the App"}</li>
      </ul>

      <h2>6. User Content</h2>
      <p>
        {`You retain ownership of all documents and signatures you create or scan
        using the App. You are solely responsible for the content of your
        documents and for ensuring you have the right to sign any documents you
        process through the App.`}
      </p>

      <h2>7. Electronic Signatures</h2>
      <p>
        {`PDF Marmot provides a tool for adding electronic signatures to documents.
        The legal validity of electronic signatures varies by jurisdiction and
        document type. It is your responsibility to ensure that electronic
        signatures are appropriate and legally binding for your specific use case.
        EasyTech Agency makes no representations about the legal validity of
        signatures created using the App.`}
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to text,
        graphics, Marvin the Marmot character and animations, logos, icons, and
        software, are the property of EasyTech Agency and are protected by
        intellectual property laws.`}
      </p>

      <h2>9. User Data</h2>
      <p>
        {`Your documents and signatures are stored locally on your device. Your use
        of the App is also governed by our Privacy Policy, which is incorporated
        into these Terms by reference.`}
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. PDF Marmot is
        designed as a document management tool and does not replace professional
        legal or notary services. We do not guarantee the legal validity of
        documents or signatures created using the App.`}
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use of
        the App, including loss of documents, invalid signatures, or any legal
        consequences resulting from the use of documents processed through the App.`}
      </p>

      <h2>12. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time, without
        notice, for any reason, including if you violate these Terms. You may
        cancel your subscription at any time through your Apple account settings.
        Upon termination, your locally stored data remains on your device.`}
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
        For any questions regarding these terms of use, please contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/pdfmarmot" className="btn">
          Back to PDF Marmot
        </Link>
      </div>
    </div>
  );
}
