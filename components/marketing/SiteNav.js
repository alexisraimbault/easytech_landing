"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/products", label: "Products" },
  { href: "/shipping", label: "Shipping" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
];

function current(pathname, href) {
  return pathname === href || pathname.startsWith(href + "/") ? "page" : undefined;
}

export default function SiteNav() {
  const pathname = usePathname() || "/";
  return (
    <>
      <nav className="nav-desktop" aria-label="Main">
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={current(pathname, l.href)}>
            {l.label}
          </Link>
        ))}
        <Link className="cta" href="/#work">
          Work with us
        </Link>
      </nav>
      {/* key={pathname} remounts the disclosure, so the menu closes after each navigation */}
      <details className="menu" key={pathname}>
        <summary>Menu</summary>
        <nav className="nav-mobile" aria-label="Main (mobile)">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(pathname, l.href)}>
              {l.label}
            </Link>
          ))}
          <Link className="cta" href="/#work">
            Work with us
          </Link>
        </nav>
      </details>
    </>
  );
}
