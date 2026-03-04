import Image from "next/image";

export const metadata = {
  title: "Our Apps — EasyTech",
  description:
    "Mobile applications by EasyTech — personal development, AI creative tools, productivity, and more.",
};

export default function AppsPage() {
  return (
    <div>
      <section className="hero">
        <h2>
          Our <span className="hero-accent">Applications</span>
        </h2>
        <p>
          14+ apps on the App Store and Google Play — from AI-powered creative
          tools to personal development companions
        </p>
      </section>

      <section className="apps-section">
        <div className="app-card">
          <h3>Hibi</h3>
          <div className="app-visual">
            <Image
              src="/hibi_visual.png"
              alt="Hibi - Personal development application"
              width={600}
              height={400}
              className="app-visual-image"
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              priority
            />
          </div>
          <p>
            Personal development and habit tracking application with artificial
            intelligence. Transform your daily life with personalized advice and
            intelligent tracking of your habits.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Smart Tracking</h4>
              <p>Track your habits with detailed analytics</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h4>AI Coaching</h4>
              <p>Receive personalized recommendations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h4>Statistics</h4>
              <p>Visualize your progress over time</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/hibi" className="btn">
              Discover Hibi
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Aether</h3>
          <p>
            A beautifully minimal way for couples to stay connected. Send gentle
            pulses and whispers to your partner, and watch your bond grow through
            a stunning living visualization.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💗</div>
              <h4>Pulses</h4>
              <p>A gentle tap to say &quot;thinking of you&quot;</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h4>Whispers</h4>
              <p>Share short, meaningful messages</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h4>Living Bond</h4>
              <p>Watch your connection grow and glow</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/aether" className="btn">
              Discover Aether
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Bento Streaks</h3>
          <p>
            Track your habits and build streaks with a unique gamified bento box
            system. Watch your bento fill with delicious food as you maintain
            your daily habits.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🍱</div>
              <h4>Bento System</h4>
              <p>Fill your bento as you build streaks</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔥</div>
              <h4>Streak Tracking</h4>
              <p>Build and maintain daily habits</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Widget First</h4>
              <p>Beautiful widgets for your home screen</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/bento-streaks" className="btn">
              Discover Bento Streaks
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>PDF Marmot</h3>
          <p>
            Your friendly PDF companion! Scan documents, add signatures, and
            merge files with ease. Meet Marvin the Marmot who guides you through
            your paperless journey with badges and achievements.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📸</div>
              <h4>Smart Scanning</h4>
              <p>Capture perfect scans with edge detection</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✍️</div>
              <h4>Easy Signatures</h4>
              <p>Draw and place signatures anywhere</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📑</div>
              <h4>Merge PDFs</h4>
              <p>Combine documents with drag-to-reorder</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/pdfmarmot" className="btn">
              Discover PDF Marmot
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>VocalCoach</h3>
          <p>
            Your personal AI-powered speaking coach. Get instant feedback on
            pace, clarity, filler words, and more. Perfect for interviews,
            presentations, and everyday communication.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎤</div>
              <h4>Speech Analysis</h4>
              <p>Instant feedback on pace, clarity, and filler words</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h4>Practice Modes</h4>
              <p>Interview prep, presentations, and pitch practice</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h4>100% Private</h4>
              <p>All analysis on-device, your audio never leaves</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/vocalcoach" className="btn">
              Discover VocalCoach
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>AI Debate Coach</h3>
          <p>
            Sharpen your critical thinking with AI-powered exercises. Detect
            logical fallacies, evaluate argument strength, and build reasoning
            skills — all through quick, tap-based sessions.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h4>Fallacy Detection</h4>
              <p>Spot logical fallacies in AI-generated arguments</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚖️</div>
              <h4>Argument Analysis</h4>
              <p>Compare arguments and pick the strongest one</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🧠</div>
              <h4>AI-Powered</h4>
              <p>Unique exercises every time, with instant feedback</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/debate-coach" className="btn">
              Discover AI Debate Coach
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>AI Nail Design</h3>
          <p>
            Generate stunning AI nail art designs and try them on your real hands
            with virtual try-on. Describe any look, pick your shape and style,
            and see it on your nails before booking your next salon appointment.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h4>AI Generator</h4>
              <p>Describe your dream nails and AI creates them</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📸</div>
              <h4>Virtual Try-On</h4>
              <p>See designs on your actual hands with camera</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💅</div>
              <h4>Every Style</h4>
              <p>French, chrome, gel, ombre, glitter and more</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/ai-nail-design" className="btn">
              Discover AI Nail Design
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>LightMeter Pro</h3>
          <p>
            Turn your iPhone into a professional light meter for photographers,
            filmmakers, and plant growers. Real-time Lux, EV, and color
            temperature readings with AI-powered scene analysis.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h4>Precise Readings</h4>
              <p>Lux, Foot-candle, EV, and color temperature</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h4>AI Scene Analysis</h4>
              <p>AI-powered lighting recommendations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎛️</div>
              <h4>Manual Control</h4>
              <p>Set ISO, shutter speed, and aperture</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/lightmeter-pro" className="btn">
              Discover LightMeter Pro
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Sculpt</h3>
          <p>
            Transform your face naturally with personalized face yoga routines.
            Guided exercises for jawline, cheekbones, symmetry, and more — just
            a few minutes a day.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🧘</div>
              <h4>Face Yoga</h4>
              <p>Personalized daily routines for your goals</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Target Areas</h4>
              <p>Jawline, cheekbones, forehead, neck</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h4>Progress</h4>
              <p>Track consistency and build your routine</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/sculpt" className="btn">
              Discover Sculpt
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Breathly</h3>
          <p>
            Guided breathing exercises for stress relief, better sleep, sharper
            focus, and more energy. 15+ techniques with beautiful animations,
            haptic feedback, and ambient sounds.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌬️</div>
              <h4>15+ Techniques</h4>
              <p>Box Breathing, 4-7-8, Wim Hof, and more</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h4>Animations</h4>
              <p>Mesmerizing visuals synced to your breath</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">😴</div>
              <h4>Sleep & Calm</h4>
              <p>Techniques for sleep and stress relief</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/breathly" className="btn">
              Discover Breathly
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Compose</h3>
          <p>
            Turn your favorite photos into stunning wallpapers and home screen
            widgets. Designer-quality templates for couples, family, friends, and
            pets — no design skills needed.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🖼️</div>
              <h4>Templates</h4>
              <p>Professionally designed photo layouts</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Wallpapers</h4>
              <p>Beautiful lock screen and home screen</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📲</div>
              <h4>Widgets</h4>
              <p>Photo collage widgets in all sizes</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/compose" className="btn">
              Discover Compose
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>ScanCode</h3>
          <p>
            The only QR code app you need. Scan instantly, create beautifully,
            share anywhere. Fast scanning, custom QR code designs, and
            professional export options.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📷</div>
              <h4>Instant Scan</h4>
              <p>Point and scan any QR code or barcode</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h4>Create</h4>
              <p>Design beautiful custom QR codes</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📤</div>
              <h4>Share</h4>
              <p>Export and share codes anywhere</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/scancode" className="btn">
              Discover ScanCode
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>Widgetly</h3>
          <p>
            Design your home screen with beautifully customizable widgets and
            icon themes. 200+ templates — countdowns, photo frames, clocks,
            quotes, calendars, and more.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h4>200+ Templates</h4>
              <p>Every aesthetic — minimal, neon, vintage</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Custom Widgets</h4>
              <p>Countdowns, clocks, quotes, photos</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🖌️</div>
              <h4>Icon Themes</h4>
              <p>Replace app icons with themed designs</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/widgetly" className="btn">
              Discover Widgetly
            </a>
          </div>
        </div>

        <div className="app-card">
          <h3>HolyVerse</h3>
          <p>
            Start every day with beautiful scripture on your home screen. Daily
            Bible verses, stunning widgets, notifications, and a thoughtfully
            designed reading experience.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📖</div>
              <h4>Daily Verse</h4>
              <p>Hand-picked scripture every day</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Widgets</h4>
              <p>Beautiful verse widgets for your screen</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔔</div>
              <h4>Reminders</h4>
              <p>Daily verse notifications</p>
            </div>
          </div>
          <div className="app-links">
            <a href="/apps/holyverse" className="btn">
              Discover HolyVerse
            </a>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h3>Contact</h3>
        <p>
          Have a question or project? Get in touch!
          <br />
          <a href="mailto:contact@easytech-agency.net">
            contact@easytech-agency.net
          </a>
        </p>
      </section>
    </div>
  );
}
