import "./globals.css";

export const metadata = {
  title: "EasyTech Agency",
  description: "Applications mobiles de développement personnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <nav className="nav">
            <div className="nav-container">
              <h1 className="logo">EasyTech</h1>
              <div className="nav-links">
                <a href="/">Accueil</a>
                <a href="/apps/hibi">Nos Apps</a>
                <a href="mailto:contact@easytech-agency.net">Contact</a>
              </div>
            </div>
          </nav>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2025 EasyTech Agency. Tous droits réservés.</p>
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
