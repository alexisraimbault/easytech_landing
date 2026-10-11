"use client";

import { useEffect, useRef } from "react";

// Numbers are rendered on the server. On the client the dots animate in once
// when the section scrolls into view (skipped with prefers-reduced-motion).
export default function Scoreboard({ apps, saas, sinceLabel }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    el.classList.add("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("on");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dots = (n) =>
    Array.from({ length: n }, (_, i) => <i key={i} style={{ "--i": i }} />);

  return (
    <div className="score" ref={ref}>
      <div className="tile t-apps">
        <div className="row">
          <div className="num">{apps}</div>
          <div className="units" aria-hidden="true">{dots(apps)}</div>
        </div>
        <div className="lab">apps live on the App Store</div>
      </div>
      <div className="tile t-saas">
        <div className="row">
          <div className="num">{saas}</div>
          <div className="units" aria-hidden="true">{dots(saas)}</div>
        </div>
        <div className="lab">SaaS products</div>
      </div>
      <div className="tile t-since">
        <div className="num small">{sinceLabel}</div>
        <div className="lab">company created in Annecy</div>
      </div>
    </div>
  );
}
