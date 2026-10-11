import Link from "next/link";
import SiteNav from "./SiteNav";

export default function SiteHeader() {
  return (
    <header className="top">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="EASYTECH home">
          <i aria-hidden="true"></i>EASYTECH
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
