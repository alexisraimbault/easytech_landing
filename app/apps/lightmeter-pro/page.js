import Image from "next/image";

export const metadata = {
  title: "LightMeter Pro - Professional Lux Meter for iPhone",
  description:
    "Turn your iPhone into a professional light meter with real-time Lux, EV, and color temperature readings. AI-powered scene analysis for photographers and filmmakers.",
};

export default function LightMeterProApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">LightMeter Pro</span>
        </h2>
        <p>Professional Light Meter for iPhone</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/lightmeter-pro-lux-meter/id6759503979"
            className="store-badge"
            aria-label="Download on the App Store"
          >
            <Image
              src="/app-store.png"
              alt="Download on the App Store"
              width={170}
              height={50}
              style={{ height: "auto" }}
            />
          </a>
        </div>
      </section>

      <section className="app-card">
        <h3>About LightMeter Pro</h3>
        <p>
          LightMeter Pro turns your iPhone into a professional light meter — for
          photographers, filmmakers, and plant growers alike. Get real-time Lux,
          Foot-candle, and EV readings from your camera sensor, with full manual
          control over ISO, shutter speed, and aperture.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h4>Precise Readings</h4>
          <p>
            Real-time Lux, Foot-candle, and EV readings with color temperature
            in Kelvin
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎛️</div>
          <h4>Manual Control</h4>
          <p>
            Set ISO, shutter speed, and aperture manually — like a Sekonic or
            Gossen
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🤖</div>
          <h4>AI Scene Analysis</h4>
          <p>
            AI-powered analysis of your lighting setup with professional
            recommendations
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌡️</div>
          <h4>Color Temperature</h4>
          <p>
            Visual warm/cool bar with Kelvin readings for accurate white balance
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌿</div>
          <h4>Plant Light Guide</h4>
          <p>
            Check if your plants are getting enough light with species-specific
            recommendations
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📈</div>
          <h4>History & Logs</h4>
          <p>
            Save readings and track lighting conditions over time
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about LightMeter Pro? We&apos;d love to hear from you.
          <br />
          <a href="mailto:contact@easytech-agency.net">
            contact@easytech-agency.net
          </a>
        </p>
      </section>

      <div className="section-divider"></div>

      <section className="app-card">
        <h3>Legal Information</h3>
        <p>
          Review our legal documents to learn more about our privacy policy and
          terms of use.
        </p>
        <div className="app-links">
          <a href="/privacy/lightmeter-pro" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/lightmeter-pro" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
