import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Soulboard: Vision Board & Manifestation",
  description:
    "Privacy Policy for the Soulboard manifestation and vision-board application by EasyTech Agency",
};

export default function SoulboardPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Soulboard: Vision Board &amp; Manifestation</h1>
      <p>
        <strong>Last updated:</strong> October 15, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Soulboard mobile
        application (the "Service" or "App"). This page explains what the App
        does with your information.`}
      </p>
      <p>
        Soulboard is a planner for the goals you save: a board of what you
        want, a daily routine, a journal, and (with a free trial or a
        subscription) a weekly letter written from your own words.{" "}
        <strong>
          Your board, your photos, your journal pages and your plan stay on
          your device.
        </strong>{" "}
        What leaves your device is limited to what is listed in section 3. The
        App has no account with a password or email.
      </p>

      <h2>2. What stays on your device</h2>
      <p>
        The following is stored on your device. It is not sent to us or to any
        provider listed on this page, except for the exceptions described in
        section 3.2 (letters), which concern only the items marked there:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Your onboarding answers: your first name, what you want, the three
          words you chose, what gets in your way (and the note you may add),
          your rhythm and your reminder times
        </li>
        <li>
          Your board: the photos you add, their crops, the words you write on
          it
        </li>
        <li>
          Your daily routine, 3-6-9 sessions, journal pages, scripts and the
          line you write under &ldquo;What changed this week?&rdquo;
        </li>
        <li>
          Your affirmations, the letters you have received, your progress,
          your plan, your year view and your settings
        </li>
        <li>
          The Learn pages and the Your year screen: nothing in them is sent
          anywhere (only a coarse analytics event that you opened one, see
          section 5)
        </li>
      </ul>
      <p>
        Photos you add to your board come from Apple&apos;s photo picker, so
        the App only receives the photos you select (it does not ask for
        access to your photo library). The App copies them into its own
        storage on your device. They are never uploaded and are never used to
        write a letter.
      </p>

      <h2>3. What we send, and when</h2>

      <h3>3.1 Without a subscription</h3>
      <p>
        Before you start a trial or subscribe, nothing you write is sent
        anywhere. The App still makes some network requests:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Firebase gives your installation an anonymous identifier and checks
          that the install is genuine (see 3.3).
        </li>
        <li>
          RevenueCat manages purchases and checks your subscription (see
          section 4).
        </li>
        <li>
          PostHog receives coarse usage events (see section 5). This starts
          when the App opens, for everyone. The App has no in-App switch for
          it; see section 9 to object.
        </li>
        <li>
          The App fetches a small configuration from a Google Cloud service
          that we operate and share with some of our other apps. The request
          names the App (&ldquo;soulboard&rdquo;) and carries no account
          information. It tells the App whether to start the advertising
          measurement described in section 7.
        </li>
        <li>
          If that configuration enables them, the TikTok and Meta SDKs start
          (see section 7). They do not read Apple&apos;s advertising identifier
          unless you allow tracking in Apple&apos;s prompt.
        </li>
      </ul>
      <p>
        As with any request over the internet, the servers receive your IP
        address with each of these requests: ours, Google (Firebase),
        RevenueCat and PostHog, and TikTok and Meta when their SDKs send
        something.
      </p>

      <h3>3.2 Letters (free trial or subscription only)</h3>
      <p>
        The App sends a letter request only if you are on a free trial or
        have a subscription. It sends one when your first letter is written
        after you get access, and again when your Sunday letter is due (or
        was missed and is asked for later in the week). A person without access (free or lapsed)
        never sends a letter request. A request goes to our
        server, which runs on Google Cloud, and contains:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>Your anonymous identifiers (see 3.3), sent with the request</li>
        <li>
          The first name you entered in the onboarding (it is required there),
          sent together with the anonymous identifier
        </li>
        <li>
          What you want and the three words you chose, as you answered them
          in the onboarding quiz, and what gets in your way (our wording of
          what you picked, plus the note you typed if you added one). These
          are not the words on your board
        </li>
        <li>
          The number of days you showed up in the last seven days, your
          language setting, and the dates of the letter
        </li>
        <li>
          Only if you turn on &ldquo;Ask future you to read this&rdquo; for a
          journal page, a script or your line under &ldquo;What changed this
          week?&rdquo;: that text, for your Sunday letter. At most one page
          or script and one weekly line go with a request, each cut to a
          short length. A marked text is sent once; after the letter is
          stored on your device, the mark clears (the page stays in your
          journal)
        </li>
      </ul>
      <p>
        The App never sends your board, your board words, your photos, your
        unmarked journal pages, your plan or your affirmations with a letter
        request, and it sends no audio or image. The App checks every
        request against a fixed list of allowed fields before it is sent.
      </p>
      <p>
        Your words are first checked by a safety filter on our server. If they
        suggest a crisis, abuse, a medical emergency or that the writer is
        under 18, no letter is written and the App shows a fixed message and
        support resources instead. Otherwise our server asks an AI model to
        write the letter and sends it back to your device. Our server keeps
        counters and a short in-memory copy (about ten minutes) of the answer
        that lets a lost response be resent; see section 9 for what this means
        for deletion. Our logs keep request identifiers, your anonymous
        identifier, costs and counts, not the text of what you send.
      </p>
      <p>
        The letter is generated by an AI model. It is written from your own
        words, it is not a prediction, and it is not therapy or medical
        advice.
      </p>

      <h3>3.3 Anonymous identifiers and device checks</h3>
      <p>
        When the App starts, Firebase Authentication assigns your installation
        an anonymous identifier (UID), and the App creates a random install
        id. The UID is also the user id used by RevenueCat and PostHog. They
        are used to authenticate requests to our server, to apply limits that
        prevent abuse, to recognise your subscription, and to match usage
        events to the same installation. We also use Firebase App Check
        (Apple App Attest) so that only genuine copies of the App can use our
        server. These identifiers are not linked to your Apple ID or email.
        However, a letter request carries your first name together with your
        UID, so for that request they are sent together. Our server does not
        store the name; it keeps counters and timestamps for the limits.
      </p>

      <h3>3.4 Camera (mirror moment)</h3>
      <p>
        The optional mirror moment shows your front camera live, like a
        mirror, for about one minute. It is a live preview only: nothing is
        recorded, saved, photographed or sent, and the App does not use the
        microphone. The App asks for camera access only when you open it, and
        you can use the moment without the camera.
      </p>

      <h3>3.5 Notifications</h3>
      <p>
        Reminders, your 3-6-9 windows, the end-of-week nudge, the trial
        reminder and the notice that your Sunday letter is ready are
        notifications created on your device, after you allow notifications.
        The letter notice is posted only after a letter has been stored on your
        device. We do not operate a push-notification server.
      </p>

      <h3>3.6 Widgets and lock screen</h3>
      <p>
        Widgets and lock-screen widgets are fed by data the App writes on
        your device (shared with the widget through an Apple App Group): a
        line for today, five dots for your steps, a day count, and a picture
        of your board. The widgets have no network code and send nothing.
        Your own words appear in a widget or in the board picture only if you
        switch on &ldquo;Show my words outside the app&rdquo;, which is off
        by default. Captions and the board title are removed from the board
        picture.
      </p>

      <h3>3.7 Sharing and saving images</h3>
      <p>
        Board images and keepsake cards are created on your device. They
        leave your device only if you share one through the iOS share sheet,
        and then they go where you send them. If you choose &ldquo;Save
        Image&rdquo; there, the App uses add-only access to your Photos; it
        does not read your library.
      </p>

      <h2>4. Subscriptions and payments</h2>
      <p>
        In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat receives your anonymous identifier
        (the same UID as in 3.3), the PostHog identifier and your purchase
        history so that your subscription works across installs and so that
        our server can confirm it, and it receives your IP address with each
        request. Payment details are handled directly by Apple and are never
        seen by us. See the{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat Privacy Policy
        </a>
        .
      </p>

      <h2>5. Analytics</h2>
      <p>
        We use PostHog (our project is hosted in the EU) for usage analytics.
        It starts when the App opens, for everyone. PostHog identifies you by
        your RevenueCat user id (the same anonymous UID as in 3.3) and
        receives a few coarse properties: your plan, your stage, your language
        setting and the App version. The App sends product events such as
        which onboarding step you reached, paywall views, trial starts and
        purchases, which features you use, the kind of letter requested,
        received or opened (never its text), which Learn lesson you opened,
        which kind of card you shared, which setting you changed (the setting
        and on or off), and when you used Delete my data. PostHog also
        receives your IP address with each request, as any server does, and
        may use it to estimate a country or city.{" "}
        <strong>
          Your first name, your wants, your three words, your journal pages,
          your letters and your photos are never sent to analytics.
        </strong>{" "}
        The App enforces this with a fixed list of allowed events and fields.
        See the{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostHog Privacy Policy
        </a>
        .
      </p>

      <h2>6. AI providers</h2>
      <p>
        Letters are written by Anthropic&apos;s Claude models, with Google&apos;s
        Gemini models (Google Cloud Vertex AI) as a fallback. The letter
        request described in 3.2 is sent to them by our server over an
        encrypted connection for the sole purpose of writing that letter. The
        unmarked parts of your journal are never part of it. Their handling of
        API content is governed by their terms: see the{" "}
        <a
          href="https://www.anthropic.com/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anthropic Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://cloud.google.com/terms/cloud-privacy-notice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Cloud Privacy Notice
        </a>
        .
      </p>

      <h2>7. Advertising attribution (App Tracking Transparency)</h2>
      <p>
        Soulboard uses the TikTok Business SDK and the Meta SDK to measure
        which advertising helps people discover the App. These are tracking
        SDKs as defined by Apple, and they are governed by Apple&apos;s App
        Tracking Transparency framework. They start only when the
        configuration described in 3.1 enables them.
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          After you have tried the App, it may explain what this is for and
          then asks for your permission through Apple&apos;s tracking prompt.
          If you decline, the App does not read Apple&apos;s advertising
          identifier, and iOS blocks the connections to the domains these SDKs
          declare for tracking, so the conversion events below are not
          delivered.
        </li>
        <li>
          If you allow tracking, the Apple advertising identifier and your IP
          address may be shared with TikTok and Meta together with conversion
          events: completing onboarding, finishing the first guided moment,
          being shown the subscription offer, starting a trial and
          subscribing. For the last two the event carries the amount, the
          currency and the product id. The SDKs may also report their own
          standard signals, such as app installs and opens. Your words, name,
          goals, letters and photos are never part of these events.
        </li>
        <li>
          You can change your decision at any time in iOS Settings → Privacy
          &amp; Security → Tracking → Soulboard.
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

      <h2>8. Data sharing and security</h2>
      <p>
        We do not sell your personal information. We share data only with the
        service providers that operate the App (Google Cloud and Firebase,
        Anthropic, RevenueCat, PostHog, and, as described in section 7, TikTok
        and Meta), with your consent, to comply with a legal obligation, or to
        protect our rights or your safety. Traffic to these services is
        encrypted. Your board, journal and letters are protected by your
        device&apos;s built-in security. If device backups are on, the
        App&apos;s data may be included in your backup, which Apple controls.
        Some providers are based outside the European Union or process data
        outside it, for example in the United States; their own policies
        describe the safeguards they use.
      </p>

      <h2>9. Your rights and deleting your data</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Access: everything you wrote is on your device and visible in the
          App.
        </li>
        <li>
          Delete on your device: Settings has a &ldquo;Delete my data&rdquo;
          option. It erases your boards and board photos, widget pictures,
          answers, plan, journal pages, scripts, affirmations, progress,
          letters and the data from the earlier version of the App on your
          device, cancels the notifications the App created, resets your
          analytics identity, and asks Firebase to delete your anonymous user.
          It does not remove your purchase: that belongs to your Apple
          account, RevenueCat keeps the purchase record, and Restore brings
          your access back. To cancel a subscription, use your Apple ID
          settings. Uninstalling the App removes what is stored on the device.
        </li>
        <li>
          What our server holds: counters and timestamps used for limits, with
          an automatic expiry, and the short in-memory copy of an answer
          (about ten minutes). Our server has no delete function that you can
          use from the App, so Delete my data does not erase these counters.
          They contain no text you wrote. To ask us to delete them, write to
          us at the address below; we may ask for something that helps us find
          your record. Providers (RevenueCat, PostHog, TikTok, Meta, Anthropic
          and Google) keep data under their own policies. Resetting through
          &ldquo;Delete my data&rdquo; starts a new analytics identity but does
          not by itself erase past events held by PostHog. You can also ask us
          to forward a deletion request to a provider.
        </li>
        <li>
          Withdraw tracking consent at any time in iOS Settings. The usage
          analytics in section 5 have no in-App switch; to object to them,
          write to us.
        </li>
        <li>Object to processing, or ask a question, by writing to us.</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France).
        </li>
      </ul>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Soulboard is not directed to children under 13, and we do not
        knowingly collect personal information from children under 13. If you
        believe a child has used the App, please contact us immediately.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time.
        Changes will take effect upon publication. We encourage you to
        review this page periodically.
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
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
