import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Sculpt - Face Yoga & Exercises",
  description:
    "Privacy Policy for the Sculpt - Face Yoga & Exercises application by EasyTech Agency",
};

export default function SculptPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Sculpt - Face Yoga &amp; Exercises</h1>
      <p>
        <strong>Last updated:</strong> October 15, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency ("we," "our," or "us") operates the Sculpt - Face Yoga & Exercises
        mobile application (the "Service" or "App"). This page explains what
        the App does with your information.`}
      </p>
      <p>
        Sculpt is a daily face and neck routine with a guided coach, for adults.
        It is a wellness routine, not medical advice.{" "}
        <strong>
          Your plan, your answers, your practice history and your safety
          choices stay on your device.
        </strong>{" "}
        The App has no account and no server of our own that stores your
        content. What leaves your device is limited to what is listed in
        section 3.
      </p>

      <h2>2. What stays on your device</h2>
      <p>
        The following is stored on your device only and is not sent to us or to
        any provider listed on this page:
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Your onboarding answers: the first name you enter (optional), the
          goals and moments you pick, how you said you feel on camera, your
          routine time and session length, your coach and your reminder time
        </li>
        <li>
          Your health and safety answers: the &ldquo;Anything we should
          avoid?&rdquo; list (for example jaw, neck, injections, recent surgery,
          pregnancy) and any dates you give with it, your daily checks and any
          time you tapped that something hurts. They are used only on your
          device to leave out moves that may not suit you
        </li>
        <li>
          Your practice history, programs, favorites, streaks, glow days and
          sticker sheet
        </li>
        <li>
          Your settings (coach, voice, music, sound, haptics, reminders)
        </li>
        <li>
          Your birth year is used once to check that you are 18 or over and is
          not kept. The App keeps only that you are an adult (or, if you are
          not, that Sculpt is not available to you)
        </li>
      </ul>
      <p>
        The App does not use your camera, microphone, photo library, location,
        contacts or Health data, and does not ask permission for them. The coach
        you see is an illustration drawn in the App, not an image of you. The
        coach voices and the session music are audio files inside the App and
        are not streamed.
      </p>

      <h2>3. What we send, and when</h2>

      <h3>3.1 Always (once you have confirmed you are an adult)</h3>
      <p>
        Purchases and subscriptions go through Apple (iPhone) or Google Play
        (Android) and RevenueCat (see section 4). This is the only network activity the App needs to work.
        Before you confirm your age, nothing is started.
      </p>

      <h3>3.2 Only if you allowed it: usage statistics</h3>
      <p>
        During setup the App asks you to choose &ldquo;Allow&rdquo; or
        &ldquo;Only what&apos;s needed&rdquo;. If you allow it, anonymous usage
        events are sent to PostHog (see section 5). If you choose &ldquo;Only
        what&apos;s needed&rdquo;, no usage statistics are sent. You can change
        this at any time in Settings → Privacy.
      </p>

      <h3>3.3 Only if you allowed it: ad measurement</h3>
      <p>
        If you allow ad measurement, the App fetches a small configuration from
        our own server (a Google Cloud service in Europe, shared by several of
        our apps) telling it which ad networks to start, then reports a few
        conversion events to TikTok and Meta (see section 6). This request
        carries the name of the App (&ldquo;sculpt&rdquo;) and, as with any
        network request, your IP address; we do not link it to any content from
        your practice. If you choose &ldquo;Only what&apos;s needed&rdquo;, this
        request is not made and the ad networks are not started.
      </p>

      <h3>3.4 Notifications, widgets, session controls and sharing</h3>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Reminders (your daily reminder, the optional notes in your first two
          weeks and the free-trial reminder) are scheduled and delivered
          locally by your device. We do not operate a push-notification server.
        </li>
        <li>
          On iPhone, the home and lock-screen widgets and the session Live
          Activity are fed by data the App writes on your device (shared with
          the widget through an Apple App Group). On Android, the home screen
          widget is fed by data the App writes on your device, and while a
          session runs the App shows an ongoing notification with Pause and
          Resume. That notification comes from a foreground service of the
          media playback type, which only keeps the guided audio and the
          session timer running when the screen is off. It starts when you
          start a session and stops when the session ends. Nothing in the
          widgets, the Live Activity or the notification is sent anywhere.
        </li>
        <li>
          Share cards (for example your week strip) are images the App creates
          on your device. They leave your device only if you choose to share one through the
          system share sheet, and then they go where you send them.
        </li>
      </ul>

      <h2>4. Subscriptions and payments</h2>
      <p>
        In-app purchases and subscriptions are managed by RevenueCat, a
        third-party service. RevenueCat receives an anonymous identifier
        generated for your installation and your purchase history, so that
        Sculpt Pro can be unlocked and restored. Payment details are handled directly by Apple (iPhone) or by Google
        Play (Android) and are never seen by us. See the{" "}
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
        If you allowed usage statistics, we use PostHog (our project is hosted
        in the EU) to count how the App is used. The App sends product events
        such as the onboarding step reached, the coach you selected, whether a
        session was started, completed or left early and for how long, paywall
        views, trial starts and purchases (plan and price), reminder permission
        results, and whether a share was completed. Events carry coarse
        identifiers only (step names, coach and program ids, minutes, plan
        names), together with the App version and the operating system version (iOS or
        Android).
      </p>
      <p>
        On Android, if you allowed usage statistics, the App may also read the
        Google Play Install Referrer once after installation (the campaign
        link that led to the install, if any, and the click and install times)
        and send it as a single event. The events are tied to the same
        anonymous RevenueCat identifier, and
        RevenueCat is given the PostHog identifier, so that subscription
        outcomes can be matched to the same install. There is no email, name or
        account. PostHog also receives your IP address with each request, as
        any server does.{" "}
        <strong>
          Your first name, your safety and health answers, the avoid list, how
          you said you feel, whether something hurt, your goals and moments, and
          any text you type are never sent to analytics.
        </strong>{" "}
        The App enforces this with a fixed list of allowed event fields.
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

      <h2>6. Advertising attribution (App Tracking Transparency and the Android advertising ID)</h2>
      <p>
        Sculpt uses the TikTok Business SDK and the Meta SDK to measure which
        advertising helps people discover the App. On iPhone these are tracking SDKs as defined by Apple, governed by
        Apple&apos;s App Tracking Transparency framework. On Android they use
        the advertising ID of your device. On both, they start only if you
        answered &ldquo;Allow&rdquo; during setup and only when the ad
        networks are enabled in our server configuration.
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          On iPhone, the App explains this and then shows Apple&apos;s
          tracking permission prompt. If you decline, no Apple advertising
          identifier is shared. On Android, which has no such system prompt,
          the App shows its own screen asking whether Sculpt may use your
          Android advertising ID. If you tap &ldquo;Not now&rdquo;, the ad
          SDKs are not started and no advertising ID is shared. The App
          declares the advertising ID permission
          (com.google.android.gms.permission.AD_ID) and does not read the ID
          before you tap &ldquo;Allow&rdquo;.
        </li>
        <li>
          If you allow tracking (iPhone) or tap &ldquo;Allow&rdquo; (Android),
          the advertising identifier may be shared with
          TikTok and Meta together with conversion events: finishing the
          onboarding, starting a trial and subscribing (with the plan, price,
          currency and transaction id for the last two). The SDKs may also
          report their own standard signals, such as app installs and opens.
          Your practice, answers and safety choices are never part of these
          events.
        </li>
        <li>
          You can change your decision at any time in iOS Settings → Privacy
          &amp; Security → Tracking → Sculpt, or on Android by deleting or
          resetting your advertising ID in Settings → Privacy → Ads, and the
          ad measurement choice in Settings → Privacy inside the App. A change to the in-App choice
          applies fully the next time you open the App.
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

      <h2>7. Health and safety answers</h2>
      <p>
        Sculpt asks what you would like it to avoid (for example jaw pain, neck
        problems, injections, recent surgery or pregnancy) so that it can leave
        out moves that may not suit you. These answers are about your health, so
        we are explicit: they are stored on your device only. They are never
        sent to us, to analytics, to the ad networks or to any other provider.
        Sculpt is a wellness routine and does not diagnose, treat or give
        medical advice; if you have pain, an injury or a medical condition,
        check with your doctor first.
      </p>

      <h2>8. Data sharing and security</h2>
      <p>
        We do not sell your personal information. We share data only with the
        service providers described above (Apple or Google Play, RevenueCat,
        and, if you allowed them, PostHog, TikTok and Meta), with your
        consent, to comply
        with a legal obligation, or to protect our rights or your safety.
        Traffic to these services is encrypted. Your plan, answers and history
        are protected by your device&apos;s built-in security. If device backups are on, the App&apos;s data may be included in your
        backup, which Apple (iCloud or iTunes) or Google (Android Auto Backup,
        stored in your Google account) controls. On Android, the backup covers
        your plan, onboarding answers, practice history, settings and the few
        small markers described in section 9. Your safety and health answers
        (the avoid list, your dates and any time you tapped that something
        hurts) are never part of the Android backup or of a device-to-device
        transfer: after a restore, the App asks them again. Some providers are based outside the European Union or
        process data outside it, for example in the United States; their own
        policies describe the safeguards they use.
      </p>

      <h2 id="delete-your-data">9. Your rights and deleting your data</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>
          Access: everything you entered is on your device and visible in the
          App. Settings → Care → &ldquo;What leaves your phone&rdquo; summarises
          section 3.
        </li>
        <li>
          Delete: Settings → Privacy has a &ldquo;Delete my data&rdquo; option
          that erases your plan, answers (including your safety answers),
          sticker sheet and history from the device, cancels the reminders the App scheduled, stops any session
          notification, refreshes the widget so that it shows nothing of your
          history, and resets the anonymous analytics identity on the device.
          It keeps your two privacy choices and does not cancel your
          subscription (manage it in your Apple ID settings on iPhone, or in
          Google Play under Payments &amp; subscriptions on Android; you can
          restore it later). If you used an earlier version of Sculpt and kept private
          progress photos, this version does not upload them; they remain on your
          device until you uninstall the App. A few small markers (for example that the free first session was
          used, and which purchases were already reported) stay in your
          device&apos;s keychain on iPhone, which also survives uninstalling,
          and in a small preferences file on Android, which may be restored
          from your Google backup. They contain no personal information.
          Uninstalling the App removes everything else stored on the device.
          The App has no account, so there is no account to delete.
        </li>
        <li>
          Data held by providers: RevenueCat and PostHog identify you only by
          anonymous identifiers, and there is no account. To have your records
          deleted, write to us at the address below; we may ask for something
          that lets us find your record, such as an Apple or Google Play order number, and we
          will forward the request to the provider. Resetting through
          &ldquo;Delete my data&rdquo; starts a new analytics identity but does
          not by itself erase past events held by PostHog. We keep analytics
          and purchase records only as long as needed to run and improve the
          App, or until you ask us to delete them.
        </li>
        <li>
          Withdraw consent at any time: turn off &ldquo;Anonymous usage
          statistics&rdquo; or &ldquo;Ad measurement&rdquo; in Settings →
          Privacy, and tracking in iOS Settings or the advertising ID in Android
          Settings.
        </li>
        <li>Object to processing, or ask a question, by writing to us.</li>
        <li>
          Lodge a complaint with a supervisory authority (CNIL in France).
        </li>
      </ul>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Sculpt is for adults aged 18 and over. The App asks for your birth year
        before anything else is set up. If you are under 18, the App does not
        set up a plan and starts no purchases, analytics or ad measurement, and
        we do not knowingly collect personal information from anyone under 18.
        If you believe a child has used the App, please contact us immediately.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time. Changes
        will take effect upon publication. We encourage you to review this page
        periodically.
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
        <Link href="/apps/sculpt" className="btn">
          Back to Sculpt - Face Yoga & Exercises
        </Link>
      </div>
    </div>
  );
}
