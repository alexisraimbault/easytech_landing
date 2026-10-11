import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className={`prod p-${product.color}`}>
      <span className={`glyph g-${product.glyph}`} aria-hidden="true"></span>
      <span className="tag">{product.status}</span>
      <h3>
        <Link href={`/products/${product.slug}`}>{product.name}</Link>
      </h3>
      <p>{product.summary}</p>
      <div className="foot">
        <a className="ext" href={product.url} rel="noopener">
          {product.urlLabel} <span aria-hidden="true">&#8599;</span>
          <span className="sr-only"> (opens the product site)</span>
        </a>
        <span className="more" aria-hidden="true">Read more</span>
      </div>
    </article>
  );
}
