import { pageMeta, formatDate, formatMonth } from "@/lib/site";
import shipping from "@/data/shipping.json";

export const metadata = pageMeta({
  title: "Shipping log",
  description: "A dated log of what EASYTECH has shipped: app releases and product starts, each with a source.",
  path: "/shipping",
});

const kindLabel = { app: "APP", saas: "SAAS", company: "COMPANY" };

export default function Shipping() {
  const groups = [];
  for (const e of shipping.entries) {
    const key = e.date.slice(0, 7);
    let g = groups[groups.length - 1];
    if (!g || g.key !== key) {
      g = { key, label: formatMonth(e.date), items: [] };
      groups.push(g);
    }
    g.items.push(e);
  }

  return (
    <>
      <section className="wrap page-head">
        <h1>Shipping log</h1>
        <p className="lede">
          What we released and when, newest first. An entry is listed only if its date can be checked, and each one names its source.
        </p>
      </section>
      <section className="wrap section tight">
        {groups.map((g) => (
          <div key={g.key}>
            <h2 className="month-h">{g.label}</h2>
            <ul className="log">
              {g.items.map((e) => (
                <li key={e.date + e.title}>
                  <time dateTime={e.date}>{formatDate(e.date)}</time>
                  <div>
                    <h3>
                      <span className={`kind k-${e.kind}`}>{kindLabel[e.kind]}</span>
                      {e.title}
                    </h3>
                    {e.detail && <p>{e.detail}</p>}
                    <p className="src">
                      Source:{" "}
                      {e.source.url ? (
                        <a href={e.source.url} rel="noopener">{e.source.label}</a>
                      ) : (
                        e.source.label
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="fine">{shipping.note} Last updated {formatDate(shipping.generatedAt)}.</p>
      </section>
    </>
  );
}
