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

      {/* PILLARS — 3-col desktop, 1-col mobile */}
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
        <Image src="/images/fabric-1.png" alt="fabric-1.png" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.3)" }} />
      </section>

      {/* PRINCIPLES — number + text, responsive column width */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "0.5rem" }}>Principles</p>
        {[
          { num: "01", title: "Premium Minimalism", desc: "Stripping away excess to highlight silhouette and material." },
          { num: "02", title: "Slow Fashion", desc: "Rejecting seasonal trends in favor of timeless, durable pieces." },
          { num: "03", title: "Cultural Reinterpretation", desc: "Elevating cannabis into a design language — beyond function." },
        ].map((item, i) => (
          <div key={i} className={`reveal d${i + 1}`} style={{
            display: "grid",
            gridTemplateColumns: "4rem 1fr",
            gap: "1.5rem",
            padding: "clamp(1.75rem,4vw,3rem) 0",
            borderTop: "1px solid rgba(240,237,232,0.05)",
            alignItems: "start",
          }}>
            <p className="font-serif" style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 300, color: "var(--accent)", lineHeight: 1 }}>{item.num}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h2 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 300 }}>{item.title}</h2>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="rule" />

      {/* CYCLE — 2-col desktop, 1-col mobile */}
      <section className="container-clean section-padding">
        <div className="grid-2">
          <div className="img-zoom reveal" style={{ position: "relative", height: "clamp(260px,40vw,460px)" }}>
            <Image src="/images/circular.png" alt="circular.png" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.5)", display: "flex", alignItems: "flex-end", padding: "2.5rem" }}>
              <p className="font-serif" style={{ fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.1 }}>Cycle One</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <p className="eyebrow reveal">The Kief Cycle</p>
            <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, lineHeight: 1.2 }}>
              Circular.<br /><em>Intentional.</em><br />Expanding.
            </p>
            <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>
              Each release builds the foundation for the next — creating continuity, not repetition.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* SCARCITY — 3-col desktop, 1-col mobile */}
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

    </div>
  );
}
