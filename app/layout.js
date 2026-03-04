import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EasyTech — AI Infrastructure & Apps",
  description:
    "AI tech company building SaaS products, AI pipelines, autonomous agents, and mobile apps. Based in Annecy, France.",
  icons: {
    icon: "/hibi_icon.png",
    apple: "/hibi_icon.png",
  },
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
