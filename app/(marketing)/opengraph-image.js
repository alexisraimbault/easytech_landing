import { ImageResponse } from "next/og";

export const alt = "EASYTECH, an AI studio that ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F1FF",
          color: "#18153A",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 800 }}>
          <div style={{ width: 52, height: 52, background: "#FF5C93", border: "4px solid #18153A", borderRadius: "26px 26px 26px 10px", display: "flex" }} />
          EASYTECH
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 0.95, letterSpacing: -4 }}>An AI studio that ships.</div>
          <div style={{ display: "flex", gap: 14 }}>
            {[["Mapable", "#FFD43B"], ["decko", "#FF5C93"], ["Flightdeck", "#9189FF"], ["vusurplan", "#27D3A2"]].map(([n, c]) => (
              <div key={n} style={{ display: "flex", background: c, border: "4px solid #18153A", borderRadius: 999, padding: "10px 26px", fontSize: 32, fontWeight: 700 }}>{n}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#4B4777" }}>Annecy, France</div>
      </div>
    ),
    size
  );
}
