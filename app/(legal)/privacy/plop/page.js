import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Plop: Notes in Jars",
  description:
    "Privacy Policy for the Plop: Notes in Jars application by EasyTech Agency",
};

export default function PlopPrivacy() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy - Plop: Notes in Jars</h1>
      <p>
        <strong>Last updated:</strong> October 17, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        {`EasyTech Agency (EASYTECH SASU, 2 rue de la Libération, 74000 Annecy, France; "we," "our," or "us") operates the Plop: Notes in Jars mobile application, available on iOS and on Android (the "Service" or "App"). Plop keeps the things you want to remember in jars. Each jar holds one kind of thing. You add notes, photos, links, voice notes and TikToks, and Plop sorts them into the right jar. You can give a jar a goal and a reward, draw a random note from a jar, and seal a jar until a date you choose (you can open it early). Nothing is shared with other users. This page explains what data we collect, why, and how we handle it.`}
      </p>
      <h2>2. Data We Collect</h2>
      <p>
        {`Plop has no sign-up wall: there is no email address, password or name to enter. On first launch the App creates an anonymous identifier with Firebase Authentication, and everything below is tied to that identifier.`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{`Content you add: notes, links, photos, videos, voice recordings, the questions you ask, your jars, goals and rewards, sealed jars, to-dos and check-ins. It is typed, dictated or added by you in the App, and stored on our servers so it can be filed, found again and answered about.`}</li>
        <li>{`Device settings sent with requests: your time zone and language, so dates and wording match your device.`}</li>
        <li>{`Install source (Android only): when the App first opens, it reads the Google Play install referrer, a short campaign string that tells us which link or ad led to the install. It contains no personal data.`}</li>
        <li>{`Usage data: which screens and features are used (for example screen names, counts and product ids, never the text of your notes or searches), collected with PostHog analytics. Events are tied to the same anonymous identifier. We use them to improve the App.`}</li>
        <li>{`Subscription status: whether you hold an active subscription, handled by Apple or Google Play and by RevenueCat.`}</li>
        <li>{`Calendar (optional): if you allow access, the App reads today's events on your device to show them next to your to-dos, and adds events you approve. Your calendar is read on the device and is never sent to our servers, except an event the App itself noticed in a note you wrote, which travels as the text of that note.`}</li>
      </ul>
      <p>
        {`The App may also ask for access to your microphone and to speech recognition (to record a voice note or to type what you say), your photos (only the pictures you pick), and notifications (reminders you ask for). You can change each permission at any time in the Settings of your iPhone or Android phone. Plop also shows a home-screen widget that displays a jar from information stored on your device.`}
      </p>
      <h2>3. How We Use Your Data</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{`To provide and operate the Service: store, file, tag and find your content, and answer your questions.`}</li>
        <li>{`To transcribe your voice notes when you use the microphone.`}</li>
        <li>{`To measure and improve the App through aggregated usage analytics.`}</li>
        <li>{`To unlock your subscription.`}</li>
      </ul>
      <p>
        {`We do not sell your data, and we do not use your content to train AI models.`}
      </p>
      <h2>4. AI Services and Your Permission</h2>
      <p>
        {`To work, Plop sends what you add to the following AI services, from our servers (not from your phone):`}
      </p>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{`Google (Google Cloud Vertex AI, Gemini): receives the text of your notes, check-ins and questions, and the photos, videos and link content you add. It is used to file, tag and connect your content and to answer your questions. Google does not use this data to train its models, under its API data usage terms.`}</li>
        <li>{`ElevenLabs: receives the audio of your voice recordings, and returns text (speech-to-text).`}</li>
      </ul>
      <p>
        {`This data is sent only to provide the feature you are using. Before anything is sent, Plop tells you what is sent and to whom, and asks for your permission. If you do not agree, nothing is sent: what you add stays on your phone. You can withdraw your permission at any time in Plop, under Settings > AI and your data, and give it again later. Withdrawing stops new uploads from that moment. It does not delete what is already on our servers; to delete that, see section 7. We only work with providers that protect your data in the same way as this policy.`}
      </p>
      <h2>5. Other Third-Party Services</h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
        <li>{`Google Firebase Authentication: creates the anonymous identifier used to recognise your data.`}</li>
        <li>{`PostHog (EU): product analytics.`}</li>
        <li>{`Apple, Google Play and RevenueCat: process subscriptions. Payment is handled by Apple on iOS and by Google Play on Android; RevenueCat receives your purchase status and the identifier needed to unlock your subscription. We never see your payment details.`}</li>
        <li>{`TikTok and Meta (advertising measurement): we may use the ad attribution tools of TikTok and Meta to measure which ads led to an install of the App. When they are in use, they receive a few events (finishing the first setup, starting a free trial, subscribing, with the price, currency and product) and technical information about your device. They never receive the content of your notes. On iOS, the tracking question that iOS asks controls whether your device advertising identifier is available to them; if you refuse, it is not. You can change your choice at any time in iOS Settings → Privacy & Security → Tracking. On Android, the measurement uses your Android advertising ID, which you can reset or delete at any time in Android Settings → Privacy → Ads. We never sell your data.`}</li>
        <li>{`Speech recognition on your phone: when you dictate, iOS (Apple) or Android (Google) may process your speech under their own privacy terms.`}</li>
      </ul>
      <h2>6. Data Hosting and Transfers</h2>
      <p>
        {`Your content is hosted on Google Cloud Platform in Belgium (europe-west1 region): our server, our database and the storage of your photos and recordings are all in that region, and Google Vertex AI (Gemini) processes your content in the same region. Some of the other services described in sections 4 and 5 (for example ElevenLabs, RevenueCat, TikTok and Meta) may process data outside the European Economic Area, including in the United States. Where that happens, the transfer relies on the safeguards provided by the GDPR, such as an adequacy decision (for example the EU-U.S. Data Privacy Framework) or standard contractual clauses.`}
      </p>
      <h2>7. Retention and Deletion</h2>
      <p>
        {`We keep your data for as long as you use Plop. In the iPhone app you can delete it yourself at any time: open Settings, tap Delete my data, and confirm twice. We then permanently delete everything we store about you on our servers: your jars, things and sealed jars, photos and voice recordings and the files you uploaded, goals, todos and check-ins, the analytics events we store, and your anonymous identifier. Plop then starts over on your phone like a new app. This cannot be undone. Analytics events held by PostHog are linked only to that anonymous identifier, which is discarded, so they can no longer be tied to you or your phone. Deleting your data does not cancel a subscription: manage or cancel it in your Apple Account settings. If you cannot use the button in the app (for example on Android), write to contact@easytech-agency.net from the device concerned, mentioning the App; we delete your content and identifier within 30 days, except where the law requires us to keep something. Deleting the App from your device removes the local data stored on it, but not the content already stored on our servers, so use Delete my data first. On Android, the App opts out of Google backups, so its local data is not copied to your Google account either.`}
      </p>
      <h2>8. Your Rights</h2>
      <p>
        {`Under the GDPR you have the right to access, rectify, delete and export your personal data, and to object to or restrict some processing. To exercise these rights, contact contact@easytech-agency.net. We respond within 30 days. You may also lodge a complaint with your data protection authority (in France, the CNIL). In the iPhone app, you can delete your data and withdraw your permission for AI processing yourself in Settings.`}
      </p>
      <h2>9. Your Content</h2>
      <p>
        {`You keep full ownership of the content you add. You grant us a limited, non-exclusive licence to store, process and display it solely to provide the Service to you. We claim no intellectual property rights over it.`}
      </p>
      <h2>10. Children</h2>
      <p>
        {`Plop is not directed at children under 13, and we do not knowingly collect personal data from them. If you believe a child has used the App, contact us and we will delete the data.`}
      </p>
      <h2>11. Changes to This Policy</h2>
      <p>
        {`We may update this policy from time to time. The date at the top shows the latest version. Continued use of the App after a change means you accept the updated policy.`}
      </p>
      <h2>12. Contact</h2>
      <p>
        For any question about this policy or your personal data:
        <br />
        <a href="mailto:contact@easytech-agency.net">
          contact@easytech-agency.net
        </a>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/apps/plop" className="btn">
          Back to Plop
        </Link>
      </div>
    </div>
  );
}
