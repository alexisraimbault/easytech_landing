import Image from "next/image";

export const metadata = {
  title: "PDF Marmot - Scan, Sign & Merge PDFs",
  description:
    "Your friendly PDF companion. Scan documents, add signatures, and merge files with ease. Meet Marvin the Marmot!",
};

export default function PDFMarmotApp() {
  return (
    <div>
      <section className="hero">
        <span className="btn-pill">iOS App</span>
        <h2>
          <span className="hero-accent">PDF Marmot</span>
        </h2>
        <p>Your friendly companion for all things PDF</p>
        <div className="download-badges">
          <a
            href="https://apps.apple.com/app/pdf-marmot/id0000000000"
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
        <h3>About PDF Marmot</h3>
        <p>
          PDF Marmot makes document management delightful! With Marvin the
          Marmot as your guide, scanning, signing, and merging PDFs has never
          been easier or more fun. Whether you&apos;re digitizing receipts,
          signing contracts, or combining reports, PDF Marmot has you covered.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">📸</div>
          <h4>Smart Scanning</h4>
          <p>Capture perfect scans with automatic edge detection</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✍️</div>
          <h4>Easy Signatures</h4>
          <p>Draw, save, and place signatures anywhere on your documents</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📑</div>
          <h4>Merge Documents</h4>
          <p>Combine multiple PDFs into one with drag-to-reorder</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🏆</div>
          <h4>Earn Badges</h4>
          <p>Unlock achievements as you go paperless</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🐿️</div>
          <h4>Meet Marvin</h4>
          <p>Your friendly marmot guide celebrates your wins</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h4>Private & Secure</h4>
          <p>Your documents stay on your device</p>
        </div>
      </section>

      <section className="app-card">
        <h3>Free vs Pro</h3>
        <p>
          Get started for free with 3 scans and 2 merges per month. Upgrade to
          Pro for unlimited access, multiple signatures, and watermark-free
          documents.
        </p>
      </section>

      <section className="contact-info">
        <h3>Support & Contact</h3>
        <p>
          Have questions about PDF Marmot? Our team is here to help.
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
          <a href="/privacy/pdfmarmot" className="btn btn-secondary">
            Privacy Policy
          </a>
          <a href="/terms/pdfmarmot" className="btn btn-secondary">
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
