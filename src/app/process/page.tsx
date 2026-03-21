"use client";

import Image from "next/image";
import Link from "next/link";
import useReveal from "@/components/useReveal";

export default function Process() {
  useReveal();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal">Process</p>
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(2.4rem,5.5vw,4.5rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.02em", marginTop: "1.5rem", maxWidth: "18ch" }}>
          Every piece begins<br /><em>long before it is worn.</em>
        </h1>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", lineHeight: 1.9, marginTop: "2rem", maxWidth: "32rem" }}>
          In the soil. In the fiber. In the hands that shape it.
          We do not create garments for trends — we create through process.
        </p>
      </section>

      <hr className="rule" />

      {/* ── STEPS ─────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "0.5rem" }}>From Field to Form</p>
        {[
          {
            num: "01",
            title: "The Seed",
            desc: "Hemp is planted in carefully selected soil across Sri Lanka. The crop requires minimal water, restores the earth it grows in, and matures without pesticides.",
          },
          {
            num: "02",
            title: "The Harvest",
            desc: "Harvested by hand at the right moment — when the fibre is at its densest. Nothing is rushed. The timing is read from the plant, not a calendar.",
          },
          {
            num: "03",
            title: "The Fibre",
            desc: "The raw plant is retted, broken, and scutched to release the long bast fibre. This is the material that will become cloth — already carrying the story of where it came from.",
          },
          {
            num: "04",
            title: "The Weave",
            desc: "Sri Lankan artisans weave the fibre into fabric using techniques passed through generations. Each cloth is slightly different — shaped by the hands that made it.",
          },
          {
            num: "05",
            title: "The Form",
            desc: "The fabric is cut and constructed with precision. Minimal seams. Clean silhouettes. Nothing added that doesn't need to be there.",
          },
          {
            num: "06",
            title: "The Release",
            desc: "Each piece enters the world in a limited cycle — never repeated. This is not scarcity for its own sake. It is respect for the process that made it.",
          },
        ].map((item, i) => (
          <div key={i} className={`reveal d${Math.min(i + 1, 4)}`} style={{
            display: "grid",
            gridTemplateColumns: "4rem 1fr",
            gap: "1.5rem",
            padding: "clamp(2rem,4vw,3rem) 0",
            borderTop: "1px solid rgba(240,237,232,0.05)",
            alignItems: "start",
          }}>
            <p className="font-serif" style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 300, color: "var(--accent)", lineHeight: 1 }}>{item.num}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h2 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 300 }}>{item.title}</h2>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "42rem" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="rule" />

      {/* ── PHILOSOPHY QUOTE ──────────────────────────────────────────── */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="font-serif reveal" style={{ fontSize: "clamp(1.6rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.25, maxWidth: "26ch", margin: "0 auto" }}>
          <em>Each piece carries the story<br />of where it came from.</em>
        </p>
      </section>

      {/* ── FULL IMAGE ────────────────────────────────────────────────── */}
      <section className="img-zoom reveal" style={{ position: "relative", height: "clamp(280px,50vw,560px)" }}>
        <Image src="/images/process.png" alt="Kief Process" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.3)" }} />
      </section>

      {/* ── MATERIAL NOTES ────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div className="grid-2">
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>Materials</p>
            <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15 }}>
              Hemp &amp; Linen.<br /><em>Nothing synthetic.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingTop: "0.25rem" }}>
            <p className="text-muted reveal d1" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>
              We use only hemp and linen — not because they are trends, but because they hold a process within them. They grow slowly, strengthen with use, and age with dignity.
            </p>
            <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>
              These fibres require patience from everyone who works with them. That patience becomes part of the garment.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── CTA TO STORE ──────────────────────────────────────────────── */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>The Result</p>
        <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Experience the result of this process.
        </p>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "28rem", margin: "0 auto 2.5rem" }}>
          Cycle One — five pieces each. Built slowly. Released once.
        </p>
        <div className="reveal d3">
          <Link
            href="/store"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-sans,'DM Sans',sans-serif)",
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "var(--accent)",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              transition: "opacity .25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Shop Cycle One →
          </Link>
        </div>
      </section>

    </div>
  );
}
