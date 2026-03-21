"use client";

import Image from "next/image";
import Link from "next/link";
import useReveal from "@/components/useReveal";

const steps = [
  {
    num: "01",
    title: "The Fibre",
    desc: "Hemp is cultivated in the highlands of Nepal, where the climate naturally supports strong, resilient fibre. Grown with minimal intervention, the crop restores the soil it lives in.",
  },
  {
    num: "02",
    title: "The Cloth",
    desc: "The raw fibre is processed and woven by trusted suppliers into durable hemp fabric. This stage carries generations of textile knowledge — quiet, precise, and deeply rooted.",
  },
  {
    num: "03",
    title: "The Selection",
    desc: "We source only what meets our standard. Each fabric is chosen for its texture, strength, and character — nothing excess, nothing unnecessary.",
  },
  {
    num: "04",
    title: "The Design",
    desc: "In Sri Lanka, our in-house designers shape each piece with intention. Every line, cut, and proportion is considered — built around simplicity and longevity.",
  },
  {
    num: "05",
    title: "The Make",
    desc: "Each garment is constructed by hand in small runs. Attention is given to every detail — from stitching to structure — ensuring the fabric becomes form without compromise.",
  },
  {
    num: "06",
    title: "The Release",
    desc: "Pieces are released in limited cycles. Not to create scarcity, but to honour the process, the people, and the pace at which they were made.",
  },
];

export default function Process() {
  useReveal();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal">Process</p>
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(2.4rem,5.5vw,4.5rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.02em", marginTop: "1.5rem" }}>
          From Source<br /><em>to Form.</em>
        </h1>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", lineHeight: 1.9, marginTop: "2rem", maxWidth: "32rem" }}>
          Every piece begins long before it is worn. In the fibre. In the hands that weave it. In the minds that shape it.
        </p>
      </section>

      <hr className="rule" />

      {/* ── STEPS ─────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        {steps.map((item, i) => (
          <div
            key={item.num}
            className={`reveal d${Math.min(i + 1, 4)}`}
            style={{
              display: "grid",
              gridTemplateColumns: "4rem 1fr",
              gap: "1.5rem",
              padding: "clamp(2rem,4vw,3rem) 0",
              borderTop: "1px solid rgba(240,237,232,0.05)",
              alignItems: "start",
            }}
          >
            <p className="font-serif" style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 300, color: "var(--accent)", lineHeight: 1 }}>
              {item.num}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h2 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 300 }}>
                {item.title}
              </h2>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "42rem" }}>
                {item.desc}
              </p>
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
        <Image
          src="/images/process.png"
          alt="process.png"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.3)" }} />
      </section>

      {/* ── MATERIALS ─────────────────────────────────────────────────── */}
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
          Cycle One — fifteen pieces. Built slowly. Released once.
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
