import Image from "next/image";

export const metadata = {
  title: "ScanCode - QR Code Scanner & Creator",
  description:
    "The only QR code app you need. Scan instantly, create beautifully, share anywhere.",
};

export default function ScanCodeApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">ScanCode</span>
        </h2>
        <p>QR Code Scanner & Creator</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/us/app/scancode-qr-code-scanner/id6758902839"
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
        <h3>About ScanCode</h3>
        <p>
          The only QR code app you need. Scan instantly, create beautifully,
          share anywhere. ScanCode is a powerful QR code toolkit — from scanning
          a restaurant menu to creating branded QR codes for your business. Fast
          scanning, beautiful custom designs, and professional export options.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">📷</div>
          <h4>Instant Scanner</h4>
          <p>
            Point your camera at any QR code or barcode and get instant results
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h4>Custom QR Codes</h4>
          <p>
            Create beautiful branded QR codes with custom colors and designs
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔗</div>
          <h4>All Code Types</h4>
          <p>
            QR codes, EAN, UPC, Code 128, and all standard barcode formats
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📤</div>
          <h4>Easy Sharing</h4>
          <p>
            Share created QR codes via messages, email, or save to your gallery
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📶</div>
          <h4>WiFi Connect</h4>
          <p>
            Scan WiFi QR codes and connect instantly — or create one for your
            network
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📋</div>
          <h4>Scan History</h4>
          <p>
            Access all your previous scans and created codes anytime
          </p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about ScanCode? We&apos;d love to hear from you.
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
          <a href="/privacy/scancode" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/scancode" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
