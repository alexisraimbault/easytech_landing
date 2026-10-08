import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Clarion: Speaking Practice",
  description:
    "Privacy Policy for Clarion (formerly Vocal Coach), the speaking practice application by EasyTech Agency",
};

export default function ClarionPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Clarion: Speaking Practice</h1>
      <p>
        <strong>Last updated:</strong> October 9, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Clarion mobile
        application, formerly called Vocal Coach (the "Service" or "App").
        This page informs you of our policies regarding the collection, use,
        and disclosure of personal data when you use our Service.`}
      </p>
      <p>
        In short: <strong>you never create an account with your email or
        name.</strong> Your recorded takes, free or Pro, are sent to our
        server to be transcribed word for word (so filler words like
        &quot;um&quot; can be counted) and analyzed, then{" "}
        <strong>not kept</strong>. Without a connection, takes are analyzed
        on your device instead. We do not sell your data.
      </p>
      <p>
        This policy replaces the previous Vocal Coach policy. Unlike earlier
        versions of the App, Clarion sends your recorded takes to our server,
        as described in section 2.4.
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
        device&apos;s Keychain, used only to make sure the one-time onboarding
        voice check (section 2.4) runs once per device and to apply daily
        limits.
      </p>

      <h3>2.2 Microphone and Speech Recognition</h3>
      <p>
        Clarion records your voice while you practice, with your permission
        (iOS microphone and speech recognition prompts). Your recording is
        also turned into words with timings by Apple&apos;s Speech framework,
        for live meters while you speak and as a fallback when our server
        cannot be reached (section 2.4). On supported iPhones this happens on
        your device; when on-device recognition is not available, Apple may
        process the audio on its servers under{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>
        . Pitch and volume are measured on your device. Without a
        connection, pace, pauses and filler words are measured on your device
        too, from Apple&apos;s words (filler words are then estimated, and the
        App says so).
      </p>

      <h3>2.3 Text Sent to Our Server (no audio)</h3>
      <p>
        In the following cases, the App sends text only, never audio, to our
        server:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>Free path levels:</strong> after your take has been
          transcribed (section 2.4), its transcript (the words and their
          timings), the practice prompt and a few measurements, so that our
          server can judge things like whether you made a clear point or gave
          a specific example.
        </li>
        <li>
          <strong>Mock interview answers (Pro):</strong> the on-device
          transcript of each answer, with the role and optional company you
          entered and the questions so far, so the interviewer can ask the
          next question or follow up on what you said.
        </li>
        <li>
          <strong>Long Talk run-throughs (Pro, over 2 minutes):</strong> the
          transcript of your rehearsal (up to its first 1,500 words).
        </li>
      </ul>

      <h3>2.4 Audio Sent to Our Server</h3>
      <p>Your recording is uploaded to our server in these cases only:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          <strong>The onboarding voice check</strong> (once per device): a
          short take of about 20 seconds (25 seconds at most), so you can see
          your own real feedback before you start, with filler words counted
          from a word-for-word transcript.
        </li>
        <li>
          <strong>Free path levels</strong> (your first 3 levels, up to 2
          minutes a take): each take is transcribed word for word so filler
          words can be counted; the analysis is then completed with the text
          described in section 2.3.
        </li>
        <li>
          <strong>Pro reps</strong> (path levels and Daily reps, up to 2
          minutes), for a word-for-word transcript and written coaching.
        </li>
        <li>
          <strong>Pro Talk run-throughs</strong> of 2 minutes or less.
        </li>
        <li>
          <strong>Mock interview (Pro):</strong> the recording of your best
          answer only (up to 2 minutes), for word-for-word coaching in the
          debrief.
        </li>
      </ul>
      <p>
        Our server runs on Google Cloud Run in the European Union (region
        europe-west1, Belgium). There, your audio is transcribed by ElevenLabs
        (speech-to-text). The transcript is judged by TypeSafe&apos;s Jev
        text-analysis service, and short coaching sentences (or, for the voice
        check, an improved version of your answer) are written by Google
        Gemini through Vertex AI. The results are sent back to your phone.
        Takes are uploaded only if they contain some speech. If there is no
        connection, or our server is unavailable, the take is not sent and is
        analyzed on your device with Apple&apos;s speech recognition (section
        2.2).
      </p>
      <p>
        <strong>
          We do not store your audio or your transcripts on our servers.
        </strong>{" "}
        They are processed in memory to produce your feedback and discarded
        once the response is sent. We never use them to train AI models.
      </p>

      <h3>2.5 &quot;Hear the Future You&quot; (Voice Cloning, With Your Consent)</h3>
      <p>
        During onboarding, Clarion offers to play an improved version of your
        voice-check answer in your own voice. This only happens if you
        explicitly agree on that screen. If you do, your voice-check recording
        is used to create a temporary voice with ElevenLabs (instant voice
        cloning), which reads the improved answer once.{" "}
        <strong>
          The cloned voice is deleted immediately after that single reading.
        </strong>{" "}
        It is used for nothing else, never shared, never reused and never used
        by us to train any model. This happens at most once per device. If you
        do not agree, no cloned voice is created (the App may use a standard
        coach voice instead, or no audio at all).
      </p>

      <h3>2.6 Mock Interview Voice</h3>
      <p>
        In a Mock interview, the interviewer (Maya) speaks with a synthetic
        voice generated by ElevenLabs (text-to-speech) from the text of her
        lines. Her lines are written by Google Gemini, based on the role,
        company and answer text described in section 2.3. To avoid generating
        the same audio twice, the audio of Maya&apos;s lines is cached in our
        Google Cloud Storage, under a name derived from the text itself. This
        cache contains no recording of your voice and no identifier of you;
        however, a follow-up question may briefly quote words from your
        answer.
      </p>

      <h3>2.7 What Our Server Keeps</h3>
      <p>Our server stores no audio, transcripts or feedback. It keeps only:</p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Daily usage counters keyed by your anonymous UID and install
          identifier (Google Cloud Firestore), used to enforce daily limits
          (for example, the number of free takes transcribed each day). They
          contain counts only, no content.
          They expire automatically after about two days.
        </li>
        <li>
          A record that your UID and install identifier have used the
          one-time onboarding voice check (a date only, no content).
        </li>
        <li>
          Technical logs (for example, which feature was called, its
          estimated cost, your anonymous UID and error messages), kept for a
          limited time for security and troubleshooting.
        </li>
        <li>The interviewer audio cache described in section 2.6.</li>
      </ul>

      <h3>2.8 Data Stored on Your Device</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Your recordings (the most recent reps, plus a few kept for &quot;your
          voice then vs now&quot;). They are excluded from iCloud and device
          backups, and older audio is deleted automatically.
        </li>
        <li>
          Your progress: ranks, levels, stars, XP, skills, streaks and the
          measurements of each rep
        </li>
        <li>Talks you write or paste for Talk run-throughs</li>
        <li>
          Your onboarding choices, mock interview setup (role, company,
          seniority), coach voice and reminder settings
        </li>
      </ul>
      <p>
        You can delete all of it at any time in{" "}
        <strong>Settings &gt; Delete my data</strong>: this wipes your
        progress, recordings, talks, interviews and profile from the device,
        signs out the anonymous account (a new anonymous identifier is
        created) and resets the analytics identifier. Uninstalling the App
        also removes this data.
      </p>

      <h3>2.9 Notifications</h3>
      <p>
        Daily reminders are scheduled locally on your device, only if you
        allow notifications. We do not run a push-notification server.
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
        send product events such as onboarding steps, paywall views and
        purchases, and rep, interview and run-through completions with their
        measurements (for example duration, pace, filler count, stars).
        Events are linked to your anonymous UID, not to your name or email.{" "}
        <strong>
          No audio and no transcript text are ever sent to analytics.
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
        Clarion uses the TikTok Business SDK and the Meta (Facebook) SDK to
        measure which advertising campaigns help people discover the App. The
        events sent are limited to: onboarding completed, free trial started
        and subscription started (with the product and price).
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
          hosting of our server, usage counters, interviewer audio cache and
          coaching text (
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
          <strong>ElevenLabs</strong>: speech-to-text for uploaded audio, the
          interviewer&apos;s voice, and the temporary voice clone (with
          consent) (
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
          <strong>TypeSafe (Jev)</strong>: text-only judgment of your
          transcripts
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
        <li>
          Audio and transcripts sent to our server: not kept after the
          response is sent
        </li>
        <li>Cloned voice (if you consented): deleted right after one use</li>
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
          asking us
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
        The App is not directed to children under 13 (or under 16 in
        countries of the European Union where that is the age of digital
        consent). We do not knowingly collect personal information from
        children. If you believe a child has used the App and data was
        collected, please contact us and we will delete it.
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
        <Link href="/apps/vocalcoach" className="btn">
          Back to Clarion
        </Link>
      </div>
    </div>
  );
}
