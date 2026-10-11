import { pageMeta } from "@/lib/site";
import { products } from "@/data/products";
import ProductCard from "@/components/marketing/ProductCard";

export const metadata = pageMeta({
  title: "Products",
  description: "Mapable, decko, Flightdeck and vusurplan: the four SaaS products EASYTECH builds and runs.",
  path: "/products",
});

export default function ProductsIndex() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Products</h1>
        <p className="lede">Four SaaS products, built and run by EASYTECH. Each card says where the product stands today.</p>
      </section>
      <section className="wrap section tight">
        <div className="wall">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
