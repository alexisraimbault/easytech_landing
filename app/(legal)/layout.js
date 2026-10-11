// LEGAL group: this layout and globals.css are the original site layout, moved
// unchanged. Do not restyle: they wrap /privacy, /terms and /apps/<slug>, which
// are referenced by App Store Connect. The favicon now comes from app/icon.svg.
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EASYTECH — AI studio, Annecy",
  description:
    "EASYTECH is an AI studio based in Annecy, France. Apps and SaaS products, privacy policies and terms.",
  metadataBase: new URL("https://www.easytech-agency.net"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav">
            <div className="nav-container">
              <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
                <span className="logo-dot"></span>
                EasyTech
              </Link>
              <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/apps">Apps</Link>
                <Link
                  href="mailto:contact@easytech-agency.net"
                  className="nav-cta"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2025 EasyTech. All rights reserved.</p>
            <p>
              <a href="mailto:contact@easytech-agency.net">
                contact@easytech-agency.net
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
