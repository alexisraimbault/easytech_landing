import "./marketing.css";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import SiteHeader from "@/components/marketing/SiteHeader";
import SiteFooter from "@/components/marketing/SiteFooter";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});
const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

// Document for the marketing pages: /, /products, /shipping, /about, /apps.
// It is a root layout of its own (see app/(legal)/layout.js for the other one),
// so the two sets of pages never share CSS.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | An AI studio that ships`, template: `%s | ${SITE_NAME}` },
  description:
    "EASYTECH is an AI studio in Annecy, France. We ship our own apps and SaaS products, and offer an AI Audit & Roadmap.",
};

export default function MarketingLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
