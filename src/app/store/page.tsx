"use client";

import useReveal from "@/components/useReveal";

const items = [
  { name: "Himal", description: "Inspired by elevation and stillness. A piece shaped by quiet strength — minimal, grounded, and enduring.", count: "0/5" },
  { name: "Terra", description: "Rooted in earth. Warm, raw, and textured — reflecting the natural irregularities of the material itself.", count: "0/5" },
  { name: "Fog",   description: "Soft, muted, and transitional. A piece that sits between presence and absence — subtle but intentional.", count: "0/5" },
];

export default function Store() {
  useReveal();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <section className="container-clean section-padding" style={{ borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <p className="reveal" style={{ fontFamily: "var(--sans)", fontSize: "clamp(0.7rem,1.2vw,0.85rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.25rem" }}>
          The Circle of Fifteen
        </p>
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(3rem,8vw,6.5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--accent)" }}>
          Cycle One.
        </h1>
        <p className="reveal d2" style={{ fontFamily: "var(--sans)", fontSize: "clamp(0.7rem,1.2vw,0.85rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginTop: "1.5rem" }}>
          Limited Release
        </p>
      </section>

      {/* PRODUCTS — 3-col desktop → 1-col mobile */}
      <section>
        <div className="grid-3">
          {items.map((item, i) => (
            <a
              key={item.name}
              href="https://instagram.com/kiefdot"
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal d${i + 1}`}
              style={{ background: "var(--bg)", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit" }}
            >
              {/* square placeholder — 1:1 on all screen sizes */}
              <div style={{ position: "relative", aspectRatio: "1/1", background: "rgba(240,237,232,0.025)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "clamp(0.6rem,1vw,0.72rem)", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,237,232,0.22)" }}>
                  Coming Soon
                </p>
              </div>

              <div style={{ padding: "1.5rem clamp(1.25rem,3vw,2rem) 2rem", display: "flex", flexDirection: "column", gap: "0.6rem", borderTop: "1px solid rgba(240,237,232,0.05)" }}>
                <p className="font-serif" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 300 }}>{item.name}</p>
                <p className="text-muted" style={{ fontSize: "clamp(0.82rem,1.1vw,0.92rem)", lineHeight: 1.85 }}>{item.description}</p>
                <p className="font-serif" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--accent)", marginTop: "0.4rem" }}>{item.count}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER BAND */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)", padding: "clamp(4rem,8vw,7rem) 0", textAlign: "center" }}>
        <div className="container-clean">
          <p className="eyebrow reveal" style={{ marginBottom: "2rem" }}>Availability</p>
          <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 300, maxWidth: "32ch", margin: "0 auto 2.5rem", lineHeight: 1.3 }}>
            Each variation is limited to five pieces.<br /><em>Once sold out, it will not return.</em>
          </p>
          <div className="reveal d2">
            <a
              href="https://instagram.com/kiefdot"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--sans)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#ffffff", background: "var(--accent)", padding: "0.9rem 2rem", textDecoration: "none", transition: "opacity .25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View on Instagram →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
