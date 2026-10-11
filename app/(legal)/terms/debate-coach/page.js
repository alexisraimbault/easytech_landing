import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Argue: Hot Takes Party Game",
  description:
    "Terms of Use for Argue (formerly AI Debate Coach), the hot takes party game with an AI judge by EasyTech Agency",
};

export default function ArgueTerms() {
  return (
    <div className="legal-content">
      <h1>Terms of Use - Argue: Hot Takes Party Game</h1>
      <p>
        <strong>Last updated:</strong> October 8, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        {`By downloading, installing, or using the Argue application, formerly
        called AI Debate Coach (the "App"), operated by EasyTech Agency ("we,"
        "our," or "us"), you agree to be bound by these Terms of Use
        ("Terms"). If you do not agree to these Terms, do not use the App.
        Apple's standard Licensed Application End User License Agreement also
        applies.`}
      </p>

      <h2>2. Description of the Service</h2>
      <p>
        {`Argue is a party game. Players pass the phone, each argues one side
        of a hot take out loud, and an AI judge picks the winner and explains
        why with a spoken verdict. It includes decks of takes, a solo mode
        against the AI, levels, ranks and seasons. Verdicts are produced
        automatically by software and artificial intelligence, as described
        in our Privacy Policy.`}
      </p>

      <h2>3. Game Content and Verdicts</h2>
      <p>
        {`The takes in Argue are opinion prompts written to start a fun
        argument. They do not reflect our views, and the side you are given
        is not a position you are asked to hold. Verdicts, scores, best lines,
        objections, roasts and lines spoken by the AI opponent are
        entertainment. They may be inaccurate, unfair or simply wrong, and
        they are not a judgment of anyone's character, beliefs or abilities.
        Takes generated from a theme you type (custom decks) are written by
        AI and filtered for safety, but may still be imperfect.`}
      </p>

      <h2>4. License</h2>
      <p>
        {`EasyTech Agency grants you a limited, non-exclusive, non-transferable,
        revocable license to use the App for personal, non-commercial purposes,
        in accordance with these Terms.`}
      </p>

      <h2>5. Subscriptions and Purchases</h2>
      <p>
        {`Argue offers free features (one party game and one solo spar a day)
        and premium features ("Pro") available through an auto-renewing
        subscription purchased through Apple:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Weekly and yearly plans are offered; prices are shown in the App
          before purchase and may vary by country
        </li>
        <li>
          Payment is charged to your Apple ID account when you confirm the
          purchase
        </li>
        <li>
          If a free trial is offered, it is shown before purchase; at the end
          of the trial the subscription starts and you are charged, unless you
          cancel at least 24 hours before the trial ends
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
        <li>
          Free play is limited per day, and server-backed features, including
          Pro features, are subject to reasonable daily limits to keep the
          Service available for everyone
        </li>
      </ul>

      <h2>6. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Use the App for its intended purpose: a game among friends</li>
        <li>
          Play only with people who agree to take part, and not use the App
          to listen to or capture anyone who has not agreed
        </li>
        <li>
          Not enter abusive, hateful or offensive player names or deck themes,
          and not use other people&apos;s names to harass or mock them
        </li>
        <li>Not say or submit illegal or harmful content</li>
        <li>Respect all intellectual property rights</li>
        <li>
          Not attempt to compromise the security of the App or its servers, or
          to bypass usage limits
        </li>
        <li>Not use the App for commercial purposes without authorization</li>
      </ul>
      <p>
        {`Names and themes may be refused by our safety filters. We may remove
        a shared name clip that breaks these rules.`}
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        {`The App and all of its content, including but not limited to text,
        graphics, logos, icons, decks and takes, judge voice lines, judging
        algorithms and software, are the property of EasyTech Agency and are
        protected by intellectual property laws.`}
      </p>

      <h2>8. What You Say</h2>
      <p>
        {`You keep all rights to what you say. Argue never saves audio: speech
        is turned into words, the words are sent to our server for the verdict
        and are not kept after processing. Player names you type may be turned
        into a shared spoken clip that we keep, as explained in our Privacy
        Policy. You are solely responsible for what you and the people you play
        with say and type.`}
      </p>

      <h2>9. Privacy</h2>
      <p>
        Your use of the App is also governed by our{" "}
        <Link href="/privacy/debate-coach">Privacy Policy</Link>, which is
        incorporated into these Terms by reference.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        {`The App is provided "as is" without warranty of any kind. The App:`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Is a game, made for entertainment</li>
        <li>
          Does not provide professional, legal, educational or debate-coaching
          advice, and verdicts should not be used to settle real disputes
        </li>
        <li>Does not guarantee that verdicts are accurate or fair</li>
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
        <Link href="/apps/debate-coach" className="btn">
          Back to Argue
        </Link>
      </div>
    </div>
  );
}
