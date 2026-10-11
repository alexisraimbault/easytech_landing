import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="foot-site">
      <div className="wrap">
        <div>
          <small>&copy; {new Date().getFullYear()} EASYTECH, Annecy, France</small>
          <small>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </small>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/apps">Apps</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
