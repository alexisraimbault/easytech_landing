import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Argue: Hot Takes Party Game",
  description:
    "Privacy Policy for Argue (formerly AI Debate Coach), the hot takes party game with an AI judge by EasyTech Agency",
};

export default function ArguePrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Argue: Hot Takes Party Game</h1>
      <p>
        <strong>Last updated:</strong> October 8, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Argue mobile
        application, formerly called AI Debate Coach (the "Service" or "App").
        This page informs you of our policies regarding the collection, use,
        and disclosure of personal data when you use our Service.`}
      </p>
      <p>
        In short: <strong>you never create an account with your email or
        name.</strong> Speech is turned into words by Apple&apos;s speech
        recognition, and <strong>Argue never saves audio or sends it to our
        server</strong>. The words of each round and the players&apos; names
        go to our server so the AI judge can rule, and are{" "}
        <strong>not kept</strong>. The one exception is the spoken clip of a
        player&apos;s name, described in section 2.5. We do not sell your
        data.
      </p>
      <p>
        This policy replaces the previous AI Debate Coach policy and applies
        to Argue 2.0 and later.
      </p>

      <h2>2. Data We Collect and How We Use It</h2>

      <h3>2.1 Anonymous Account</h3>
      <p>
        On first launch, the App signs you in silently with Firebase Anonymous
        Authentication (Google). This creates a random identifier (UID) for
        your installation. We never ask for your email, name, phone number or
        a password, and the UID is not linked to your Apple ID. It is used to
        authenticate requests to our server, apply daily usage limits, link
        your subscription (RevenueCat) and group analytics events (PostHog).
        The App also creates a random install identifier, stored in your
        device&apos;s Keychain, used only to apply daily limits.
      </p>

      <h3>2.2 Microphone and Speech Recognition</h3>
      <p>
        While it is a player&apos;s turn to argue, Argue listens through the
        microphone, with your permission (iOS microphone and speech
        recognition prompts). The sound is passed straight to Apple&apos;s
        Speech framework, which turns it into words with timings. On
        supported iPhones this happens on your device; when on-device
        recognition is not available, Apple may process the audio on its
        servers under{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>
        . The App keeps only the words.{" "}
        <strong>
          Argue never writes your voice to a file, never saves audio and never
          sends audio to our server.
        </strong>{" "}
        Because everyone at the table speaks into the same phone, please only
        play with people who agree to take part.
      </p>

      <h3>2.3 Text Sent to Our Server for Judging</h3>
      <p>
        After each round, the App sends our server text only: the hot take
        being argued, the side labels, the words of each speech with their
        timings, the players&apos; names and, in party games, the jury votes.
        Our server runs on Google Cloud Run in the European Union (region
        europe-west1, Belgium). The speeches are judged by TypeSafe&apos;s Jev
        text-analysis service; player names are not sent to Jev (the speeches
        are labeled &quot;speech 1&quot; and &quot;speech 2&quot;). The
        verdict is sent back to your phone.
      </p>
      <p>
        <strong>
          We do not store your transcripts or verdicts on our servers.
        </strong>{" "}
        They are processed in memory to produce the verdict and discarded once
        the response is sent. We never use them to train AI models. If our
        server cannot be reached, the App judges the round on your phone.
      </p>

      <h3>2.4 Pro Features: AI Opponent, Roast and Custom Decks</h3>
      <p>With a Pro subscription, the following also go to our server:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Solo spar against the AI:</strong> the hot take, the sides,
          the words of your argument and the previous turns of the exchange,
          so the AI opponent can answer you.
        </li>
        <li>
          <strong>Roast verdict:</strong> at the end of a game, a summary of
          each round (the take, the players&apos; names and sides, what each
          player said, the winner and the best line), so the judge can deliver
          a spoken ruling about what was actually said.
        </li>
        <li>
          <strong>Custom decks:</strong> the theme you type (for example
          &quot;our office&quot;) and the vibe you pick, to write new takes.
        </li>
      </ul>
      <p>
        These replies, roasts and takes are written by Google Gemini through
        Vertex AI and checked for safety by TypeSafe&apos;s Jev. The AI
        opponent&apos;s and the judge&apos;s lines are then spoken by a
        synthetic voice generated by ElevenLabs (text-to-speech). The
        generated audio is returned to your phone and{" "}
        <strong>not stored</strong>, and the texts you sent are not kept after
        the response is sent.
      </p>

      <h3>2.5 Player Names Read Aloud by the Judge</h3>
      <p>
        The judge says the players&apos; names out loud. Many common names
        are already included in the App, and then nothing is sent. Otherwise,
        when you type a name, the App sends that name (and only the name) to
        our server. A new name is checked by TypeSafe&apos;s Jev to filter
        out insults and is turned into a short spoken clip by ElevenLabs
        (text-to-speech).
      </p>
      <p>
        <strong>
          To avoid generating the same name twice, the clip is kept
          indefinitely in our Google Cloud Storage as a shared audio file.
        </strong>{" "}
        It is stored under a code computed from the name itself (a hash of
        the normalized name and the judge&apos;s voice), with no user
        identifier, UID or device information attached. Anyone who types the
        same name gets the same clip. The clip is the judge&apos;s synthetic
        voice saying the name, never a recording of you. If you want a name
        clip removed, contact us with the exact name.
      </p>

      <h3>2.6 What Our Server Keeps</h3>
      <p>Our server stores no audio, transcripts or verdicts. It keeps only:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Daily usage counters keyed by your anonymous UID and install
          identifier (Google Cloud Firestore), used to enforce daily limits.
          They expire automatically after about two days.
        </li>
        <li>
          Technical logs (for example, which feature was called, its
          estimated cost, your anonymous UID and error messages), kept for a
          limited time for security and troubleshooting. They contain no
          transcript text.
        </li>
        <li>The shared name clips described in section 2.5.</li>
      </ul>

      <h3>2.7 Data Stored on Your Device</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Players&apos; names and each player&apos;s progress on this phone:
          XP, levels, ranks, style, scores, rivalries and season progress
        </li>
        <li>Recently played takes, so games don&apos;t repeat</li>
        <li>Downloaded name clips (section 2.5)</li>
        <li>Your onboarding answers and reminder settings</li>
      </ul>
      <p>
        Nothing is synced to a cloud. You can delete all of it at any time in{" "}
        <strong>Settings &gt; Delete my data</strong>: this wipes players,
        progress, name clips and onboarding answers from the device, cancels
        scheduled reminders, signs out the anonymous account (a new anonymous
        identifier is created) and resets the analytics identifier.
        Uninstalling the App also removes this data.
      </p>

      <h3>2.8 Notifications</h3>
      <p>
        Reminders (for example the daily hot take, or before a free trial
        ends) are scheduled locally on your device, only if you allow
        notifications. We do not run a push-notification server.
      </p>

      <h3>2.9 Sharing Results</h3>
      <p>
        Share cards and verdict videos are made on your phone. They leave
        your device only if you choose to share them, through the iOS share
        sheet, with the people or apps you pick.
      </p>

      <h2>3. Subscriptions and Payments</h2>
      <p>
        In-app purchases and subscriptions are processed by Apple and managed
        through RevenueCat, a third-party service. RevenueCat may collect:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          An anonymous app user identifier (your anonymous UID) to manage your
          subscription
        </li>
        <li>Your in-app purchase history and subscription status</li>
        <li>No payment information (handled directly by Apple)</li>
      </ul>
      <p>
        Our server asks RevenueCat whether your UID has an active Pro
        subscription before running Pro features. For more information, see
        the{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat Privacy Policy
        </a>
        .
      </p>

      <h2>4. Analytics</h2>
      <p>
        We use PostHog to understand how the App is used and improve it. We
        send product events such as onboarding steps and answers, permission
        results, paywall views and purchases, and games started, rounds
        judged and games completed (with details such as the mode, number of
        players, deck, take identifier and score). Events are linked to your
        anonymous UID, not to your name or email.{" "}
        <strong>
          No audio, no transcript text and no player names are ever sent to
          analytics.
        </strong>{" "}
        For more information, see the{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostHog Privacy Policy
        </a>
        .
      </p>

      <h2>5. Advertising Attribution (App Tracking Transparency)</h2>
      <p>
        Argue uses the TikTok Business SDK and the Meta (Facebook) SDK to
        measure which advertising campaigns help people discover the App. The
        events sent are limited to: onboarding completed, game completed (at
        most once a day), free trial started and subscription started (with
        the product and price).
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          The App may ask your permission to track through Apple&apos;s App
          Tracking Transparency prompt. Only if you allow it is your
          device&apos;s advertising identifier (IDFA) shared with TikTok and
          Meta.
        </li>
        <li>
          If you decline (or are never asked), no advertising identifier is
          shared and we do not track you across other companies&apos; apps
          and websites. The events above may still be sent without that
          identifier, for aggregated measurement such as Apple&apos;s
          SKAdNetwork.
        </li>
        <li>
          You can change your choice at any time in iOS Settings &gt; Privacy
          &amp; Security &gt; Tracking.
        </li>
      </ul>
      <p>
        See the{" "}
        <a
          href="https://www.tiktok.com/legal/page/global/privacy-policy/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok Privacy Policy
        </a>{" "}
        and the{" "}
        <a
          href="https://www.facebook.com/privacy/policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta Privacy Policy
        </a>
        .
      </p>

      <h2>6. Service Providers</h2>
      <p>
        We rely on the following providers, each limited to the role
        described:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Google</strong> (Firebase Authentication, Cloud Run,
          Firestore, Cloud Storage, Vertex AI / Gemini): anonymous sign-in,
          hosting of our server, usage counters, the shared name clips, and
          the Pro AI opponent, roast and custom decks (
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase privacy
          </a>
          ,{" "}
          <a
            href="https://cloud.google.com/terms/cloud-privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Cloud privacy notice
          </a>
          )
        </li>
        <li>
          <strong>ElevenLabs</strong>: text-to-speech for the name clips and
          for the voices of the AI opponent and the judge (
          <a
            href="https://elevenlabs.io/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          )
        </li>
        <li>
          <strong>TypeSafe (Jev)</strong>: text-only judgment of the speeches,
          and safety checks on names, deck themes and generated lines
        </li>
        <li>
          <strong>Apple</strong>: speech recognition, purchases, App Tracking
          Transparency
        </li>
        <li>
          <strong>RevenueCat</strong>: subscription management
        </li>
        <li>
          <strong>PostHog</strong>: product analytics
        </li>
        <li>
          <strong>TikTok and Meta</strong>: advertising attribution (section
          5)
        </li>
      </ul>
      <p>
        Our server is located in the European Union. Some providers (for
        example ElevenLabs, RevenueCat, PostHog, TikTok and Meta) may process
        data outside the European Union, and when Google&apos;s EU capacity is
        saturated, Gemini requests may be handled in other regions. Such
        transfers rely on appropriate safeguards such as the European
        Commission&apos;s Standard Contractual Clauses or the EU-U.S. Data
        Privacy Framework.
      </p>

      <h2>7. Data Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information. We share it
        only:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          With the service providers listed above, for the purposes described
        </li>
        <li>With your explicit consent</li>
        <li>To comply with a legal obligation</li>
        <li>To protect our rights or your safety</li>
      </ul>

      <h2>8. Data Retention</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Audio: never saved and never sent to our server</li>
        <li>
          Transcripts, names and other texts sent to our server: not kept
          after the response is sent
        </li>
        <li>
          Generated voice audio (AI opponent, roast): returned to your phone,
          not stored
        </li>
        <li>
          Name clips: kept indefinitely as shared files with no user
          identifier (section 2.5), unless you ask us to remove one
        </li>
        <li>Daily usage counters: expire after about two days</li>
        <li>
          On-device data: until you delete it (Settings &gt; Delete my data)
          or uninstall the App
        </li>
        <li>
          Subscription, analytics and attribution data: as long as needed for
          these purposes, according to each provider&apos;s policy
        </li>
      </ul>

      <h2>9. Data Security</h2>
      <p>
        All traffic between the App and our server uses TLS encryption, and
        every request to our server must carry a valid Firebase token. Data on
        your device is protected by your device&apos;s built-in security
        features. Subscription data is secured by Apple and RevenueCat.
      </p>

      <h2>10. Your Rights</h2>
      <p>Under the GDPR and similar laws, you have the right to:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Access the personal data we hold about you</li>
        <li>
          Delete your data: in the App with Settings &gt; Delete my data, or by
          asking us (including the removal of a name clip)
        </li>
        <li>Correct or receive a copy of your data (portability)</li>
        <li>Object to or restrict processing</li>
        <li>
          Withdraw your consent at any time (microphone, speech recognition,
          notifications and tracking can be changed in iOS Settings)
        </li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France)
        </li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
        . Because we never know your name or email, we may need your help to
        find the data linked to your anonymous account; the quickest way to
        erase what the App holds is Settings &gt; Delete my data.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Argue is a party game rated 12+ on the App Store. It is not directed
        to children under 13 (or under 16 in countries of the European Union
        where that is the age of digital consent). We do not knowingly
        collect personal information from children. If you believe a child
        has used the App and data was collected, please contact us and we
        will delete it.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time.
        Changes will take effect upon publication. We encourage you to review
        this page periodically.
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact EasyTech
        Agency at:
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
