import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EasyTech Agency",
  description: "Personal development mobile applications",
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
              <h1 className="logo">EasyTech</h1>
              <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/apps/hibi">Our Apps</Link>
                <Link href="mailto:contact@easytech-agency.net">Contact</Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2025 EasyTech Agency. All rights reserved.</p>
            <p>
              Contact:{" "}
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
