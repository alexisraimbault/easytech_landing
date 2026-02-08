import Link from "next/link";

export const metadata = {
  title: "Terms of Use - EasyTech Agency",
  description:
    "Terms of Use for applications published by EasyTech Agency",
};

export default async function GenericTerms({ searchParams }) {
  const params = await searchParams;
  const appName = params?.app || null;
  const title = appName ? `Terms of Use - ${appName}` : "Terms of Use";

  return (
    <div className="legal-content">
      <h1>{title}</h1>
      <p>
        <strong>Last updated:</strong> February 8, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using ${appName ? `the ${appName} application` : "any application published by EasyTech Agency"}
        (the "App"), you agree to be bound by these terms of use ("Terms"). If
        you do not accept these Terms, do not use the App.`}
      </p>

      <h2>2. Service Description</h2>
      <p>
        {`${appName || "The App"} is an iOS application published by EasyTech Agency.
        The App may include both free and premium features accessible through
        an optional subscription.`}
      </p>

      <h2>3. Premium Subscription</h2>
      <p>
        {`The App may offer a premium subscription that unlocks additional
        features. Subscriptions are billed monthly or annually based on your
        choice. Payment will be charged to your Apple account upon purchase
        confirmation.`}
      </p>
      <p>
        {`The subscription automatically renews unless canceled at least 24
        hours before the end of the current period. You can manage and cancel
        your subscription at any time through your Apple account settings.`}
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
        <li>
          {"Not attempt to circumvent the limitations of the free version"}
        </li>
        <li>{"Respect all intellectual property rights"}</li>
        <li>{"Not attempt to compromise the security of the App"}</li>
        <li>
          {
            "Not use the App for any unlawful purpose or in violation of any applicable laws"
          }
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        {`The App and all its content, including but not limited to text,
        graphics, illustrations, logos, icons, and software, are the property
        of EasyTech Agency and are protected by intellectual property laws.`}
      </p>

      <h2>7. User Data</h2>
      <p>
        {`Your data is stored locally on your device. Your use of the App is
        also governed by our Privacy Policy, which is incorporated into these
        Terms by reference.`}
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        {`The App may integrate third-party services (such as RevenueCat for
        subscription management, or AI APIs for certain features). Your use of
        these services is subject to their respective terms and privacy
        policies.`}
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind, either
        express or implied. We do not guarantee that the App will be
        uninterrupted, error-free, or free of harmful components. The App is
        not intended to replace professional advice of any kind.`}
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        {`In no event shall EasyTech Agency be liable for any indirect,
        incidental, special, or consequential damages arising from your use of
        the App, including but not limited to loss of data, revenue, or
        profits.`}
      </p>

      <h2>11. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time,
        without notice, for any reason, including if you violate these Terms.
        You may stop using the App and cancel your subscription at any time
        through your Apple account settings.`}
      </p>

      <h2>12. Changes</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon posting on this page. Your continued use of the App
        after modifications constitutes your acceptance of the new Terms.`}
      </p>

      <h2>13. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute shall be subject
        to the exclusive jurisdiction of the French courts.`}
      </p>

      <h2>14. Contact</h2>
      <p>
        For any questions regarding these terms of use, please contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
