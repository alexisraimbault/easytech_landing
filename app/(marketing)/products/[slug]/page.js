import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/site";
import { products, getProduct } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMeta({ title: p.name, description: p.summary, path: `/products/${p.slug}` });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <>
      <section className="wrap page-head">
        <Link className="crumb" href="/products">&larr; All products</Link>
        <div className={`product-hero p-${p.color}`}>
          <span className={`glyph g-${p.glyph}`} aria-hidden="true"></span>
          <span className="tag">{p.status}</span>
          <h1>{p.name}</h1>
          <p className="sum">{p.summary}</p>
        </div>
      </section>

      <section className="wrap section tight">
        <div className="two-col">
          <div className="prose">
            {p.description.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <div className="btn-row">
              {p.links.map((l, i) => (
                <a key={l.href} className={i === 0 ? "btn" : "btn alt"} href={l.href} rel="noopener">
                  {l.label} <span aria-hidden="true">&#8599;</span>
                </a>
              ))}
            </div>
          </div>
          <dl className="facts">
            {p.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
