"use client";

import Image from "next/image";
import useReveal from "@/components/useReveal";

export default function WhatIsKief() {
  useReveal();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* HERO */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal">What is Kief</p>
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(2.2rem,5.5vw,4.5rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.02em", marginTop: "1.5rem" }}>
          Transforming the plant into<br /><em>premium, wearable fashion.</em>
        </h1>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", lineHeight: 1.9, marginTop: "2rem", maxWidth: "32rem" }}>
          Small-batch craft rooted in Sri Lankan artisanal production and natural materials.
        </p>
      </section>

      <hr className="rule" />

      {/* PILLARS */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "3rem" }}>Foundation</p>
        <div className="grid-3">
          {[
            { label: "Craft", title: "Small-Batch Production", desc: "Rooted in Sri Lankan artisanal techniques and natural fibers." },
            { label: "Impact", title: "Community First", desc: "Building localized systems that give back and grow over time." },
            { label: "Narrative", title: "Intentional Releases", desc: "Each piece exists within a story — not just a collection." },
          ].map((p, i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{ background: "var(--bg)", padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,3vw,3rem)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)" }}>{p.label}</p>
              <p className="font-serif" style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 300, lineHeight: 1.2 }}>{p.title}</p>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FULL IMAGE */}
      <section className="img-zoom reveal" style={{ position: "relative", height: "clamp(260px,50vw,560px)" }}>
        <Image src="/images/fabric-1.png" alt="Kief fabric" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.3)" }} />
      </section>

      {/* PRINCIPLES */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "0.5rem" }}>Principles</p>
        {[
          { num: "01", title: "Premium Minimalism", desc: "Stripping away excess to highlight silhouette and material." },
          { num: "02", title: "Slow Fashion", desc: "Rejecting seasonal trends in favor of timeless, durable pieces." },
          { num: "03", title: "Cultural Reinterpretation", desc: "Elevating cannabis into a design language — beyond function." },
        ].map((item, i) => (
          <div key={i} className={`reveal d${i + 1}`} style={{ display: "grid", gridTemplateColumns: "4rem 1fr", gap: "1.5rem", padding: "clamp(1.75rem,4vw,3rem) 0", borderTop: "1px solid rgba(240,237,232,0.05)", alignItems: "start" }}>
            <p className="font-serif" style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 300, color: "var(--accent)", lineHeight: 1 }}>{item.num}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h2 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 300 }}>{item.title}</h2>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="rule" />

      {/* ── CYCLE SECTION ─────────────────────────────────────────────── */}
      {/*
        Desktop: image left, text right — text is vertically centred to image
        Mobile:  image on top, text below and centred
      */}
      <section className="container-clean section-padding">
        <style>{`
          .cycle-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(3rem, 6vw, 6rem);
            align-items: center;
          }
          .cycle-text {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          /* Mobile: stack, centre everything below image */
          @media (max-width: 768px) {
            .cycle-grid {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
            .cycle-text {
              align-items: center;
              text-align: center;
              padding-top: 0.5rem;
            }
          }
        `}</style>

        <div className="cycle-grid">
          {/* IMAGE */}
          <div className="img-zoom reveal" style={{ position: "relative", height: "clamp(280px,42vw,480px)" }}>
            <Image src="/images/circular-1.png" alt="Kief Cycle" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.2)" }} />
          </div>

          {/* TEXT — centred to image on desktop, below image centred on mobile */}
          <div className="cycle-text">
            <p className="eyebrow reveal">The Kief Cycle</p>
            <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, lineHeight: 1.2 }}>
              Circular.<br /><em>Intentional.</em><br />Expanding.
            </p>
            <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "28rem" }}>
              Each release builds the foundation for the next — creating continuity, not repetition.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* SCARCITY */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>Scarcity</p>
        <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "3rem", maxWidth: "32rem" }}>
          The engine of scarcity<br />and collectibility.
        </h2>
        <div className="grid-3 reveal d2">
          {[
            { step: "01", title: "Strict Limitation", desc: "Extremely limited quantities ensure exclusivity." },
            { step: "02", title: "Non-Repeating", desc: "Designs are never reproduced once a cycle ends." },
            { step: "03", title: "Narrative Continuity", desc: "Each drop strengthens the story and builds demand." },
          ].map((item) => (
            <div key={item.step} style={{ background: "var(--bg)", padding: "clamp(2rem,4vw,3.5rem) clamp(1.5rem,3vw,2.5rem)", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p className="font-serif" style={{ fontSize: "3rem", fontWeight: 300, color: "var(--accent)", lineHeight: 1 }}>{item.step}</p>
              <h3 className="font-serif" style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", fontWeight: 300 }}>{item.title}</h3>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* PDF DOWNLOAD */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>The Full Picture</p>
        <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Read the Kief Project
        </p>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "28rem", margin: "0 auto 2.5rem" }}>
          Our full project document — the brand, the process, the first drop, and what comes next.
        </p>
        <div className="reveal d3">
          <a
            href="/kief-project.pdf"
            download
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#ffffff", background: "var(--accent)", padding: "1rem 2.5rem", textDecoration: "none", transition: "opacity .25s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Download PDF ↓
          </a>
        </div>
      </section>

    </div>
  );
}
