import { SITE_URL } from "@/lib/site";
import { products } from "@/data/products";
import appsData from "@/data/apps.json";
import shipping from "@/data/shipping.json";

// Marketing pages and the public app pages. Privacy and terms pages are not
// listed on purpose: they stay reachable at their historical URLs, nothing more.
export default function sitemap() {
  const lastShip = new Date(shipping.generatedAt);
  const entry = (path, priority, lastModified) => ({ url: `${SITE_URL}${path}`, priority, lastModified });
  return [
    entry("/", 1, lastShip),
    entry("/products", 0.8, lastShip),
    ...products.map((p) => entry(`/products/${p.slug}`, 0.7, lastShip)),
    entry("/shipping", 0.7, lastShip),
    entry("/apps", 0.8, lastShip),
    ...appsData.apps.filter((a) => a.slug).map((a) => entry(`/apps/${a.slug}`, 0.5)),
    entry("/about", 0.5, lastShip),
  ];
}
