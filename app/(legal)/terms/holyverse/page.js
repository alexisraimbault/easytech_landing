import Link from "next/link";

export const metadata = {
  title: "Terms of Use - HolyVerse: Daily Bible Verse",
  description:
    "Terms of Use for HolyVerse: Daily Bible Verse, the daily verse, prayer and offline Bible application by EasyTech Agency",
};

export default function HolyVerseTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - HolyVerse: Daily Bible Verse</h1>
      <p>
        <strong>Last updated:</strong> October 9, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the HolyVerse: Daily Bible Verse
        application and its widgets (the "App"), operated by EasyTech Agency
        ("we," "our," or "us"), you agree to be bound by these Terms of Use
        ("Terms"). If you do not agree to these Terms, do not use the App.
        Apple's standard Licensed Application End User License Agreement also
        applies.`}
      </p>

      <h2>2. Description of the Service</h2>
      <p>
        {`HolyVerse gives you one Bible verse each morning with a short
        reflection and a prayer, on your Home Screen and Lock Screen widgets
        and in the App. It also includes journeys through themes and the
        Christian year, the whole Bible offline with search, reading plans,
        memorization, a prayer journal, highlights, saved verses and
        shareable verse cards.`}
      </p>

      <h2>3. Scripture and Devotional Content</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          {`The Bible text in the App comes from three public-domain
          translations: the King James Version, the World English Bible and
          the Bible in Basic English.`}
        </li>
        <li>
          {`The reflections, prayers, journey texts and titles are devotional
          content written for HolyVerse. They are labelled as such and are not
          Scripture. They reflect a broadly Christian perspective and are not
          affiliated with or endorsed by any church or denomination.`}
        </li>
        <li>
          {`This content is offered for encouragement and personal devotion.
          It is not professional counsel: it is not pastoral, medical,
          psychological, legal or financial advice, and it does not replace
          your church, a counselor or a doctor. If you are in crisis or in
          danger, please contact your local emergency services or a crisis
          line.`}
        </li>
        <li>
          {`The narration of the daily verses uses a synthetic voice created
          with AI text-to-speech. Dates of the Christian year shown in the App
          follow a common calendar and may differ from your own tradition.`}
        </li>
      </ul>

      <h2>4. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        revocable license to use the App for personal, non-commercial purposes,
        in accordance with these Terms.`}
      </p>

      <h2>5. Subscriptions and Purchases</h2>
      <p>
        {`Scripture stays free: the whole Bible, the daily verse with its
        reflection and prayer, saved verses, reading plans, the prayer journal
        and widgets in the free styles. HolyVerse Premium adds features such as
        listening to the daily verse, all journeys, a second verse for what
        you carry, and illuminated art for widgets and cards. Premium is
        available through an auto-renewing subscription purchased through
        Apple:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Yearly and monthly plans are offered; prices are shown in the App
          before purchase and may vary by country
        </li>
        <li>
          Payment is charged to your Apple ID account when you confirm the
          purchase
        </li>
        <li>
          If a free trial is offered (currently one week, for eligible new
          subscribers), it is shown before purchase; at the end of the trial
          the subscription starts and you are charged, unless you cancel at
          least 24 hours before the trial ends
        </li>
        <li>
          The subscription renews automatically for the same period and price
          unless you cancel at least 24 hours before the end of the current
          period
        </li>
        <li>
          You can manage or cancel your subscription at any time in your Apple
          ID settings (Settings &gt; your name &gt; Subscriptions); cancellation
          takes effect at the end of the current period
        </li>
        <li>Refunds are handled by Apple according to its policies</li>
      </ul>

      <h2>6. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App in accordance with its intended purpose</li>
        <li>
          Not redistribute the App&apos;s premium content, narration or
          original devotional texts without authorization
        </li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to reverse-engineer the App or to compromise its
          security, or to bypass its subscription checks
        </li>
        <li>Not use the App for commercial purposes without authorization</li>
      </ul>

      <h2>7. Intellectual Property and Credits</h2>
      <p>
        {`The Bible translations in the App are in the public domain. The
        paintings used for widget art, journey covers and other imagery are
        public-domain works (for example by Frederic Edwin Church, John
        Frederick Kensett, George Inness, Caspar David Friedrich and John
        Singer Sargent), obtained from museum open-access collections and
        credited by artist and title in the App under Settings > Art credits.
        A few journey covers were created with the help of AI image
        generation. The typefaces EB Garamond and Cormorant Garamond are used
        under the SIL Open Font License.`}
      </p>
      <p>
        {`All other content of the App, including but not limited to the
        reflections, prayers, journeys and their selection of verses, the
        narration recordings, design, widget designs, graphics, logos, icons
        and software, is the property of EasyTech Agency and is protected by
        intellectual property laws.`}
      </p>

      <h2>8. Your Content</h2>
      <p>
        {`What you write in the App (your words under a verse, prayer requests,
        names and notes) is yours and is stored only on your device, as
        explained in our Privacy Policy. We cannot see, back up or restore it;
        if you delete the App or use Delete my data, it is gone. Content shown
        in widgets may be visible to anyone who can see your screen.`}
      </p>

      <h2>9. Privacy</h2>
      <p>
        Your use of the App is also governed by our{" "}
        <Link href="/privacy/holyverse">Privacy Policy</Link>, which is
        incorporated into these Terms by reference.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. EasyTech
        Agency:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Does not guarantee that the App is free of errors, including in
          verse text, references or dates
        </li>
        <li>
          Does not guarantee that the App will be compatible with all devices
          or iOS versions
        </li>
        <li>
          Is not affiliated with any religious organization or denomination
        </li>
      </ul>

      <h2>11. Limitation of Liability</h2>
      <p>
        {`To the extent permitted by law, EasyTech Agency shall not be liable
        for any indirect, incidental, special, or consequential damages
        resulting from your use of the App.`}
      </p>

      <h2>12. Termination</h2>
      <p>
        {`We may terminate or suspend your access to the App at any time,
        without notice, for any reason, including if you violate these Terms.`}
      </p>

      <h2>13. Changes</h2>
      <p>
        {`We reserve the right to modify these Terms at any time. Changes will
        take effect upon publication.`}
      </p>

      <h2>14. Governing Law</h2>
      <p>
        {`These Terms are governed by French law. Any dispute will be subject to
        the exclusive jurisdiction of the French courts, subject to any
        mandatory consumer protection rules of your country of residence.`}
      </p>

      <h2>15. Contact</h2>
      <p>
        For any questions about these Terms of Use, contact us at:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/holyverse" className="btn">
          Back to HolyVerse
        </Link>
      </div>
    </div>
  );
}
