"use client";

import { useState } from "react";
import Image from "next/image";
import useReveal from "@/components/useReveal";
import Countdown from "@/components/Countdown";

// ── Water comparison data ────────────────────────────────────────────
const materials = [
  {
    name: "Industrial Cotton",
    litres: 10000,
    color: "#c0392b",
    note: "~10,000 litres per kg — one of the thirstiest crops on earth",
  },
  {
    name: "Polyester",
    litres: 125,
    color: "#e67e22",
    note: "Lower water use but derived from fossil fuels — never biodegrades",
  },
  {
    name: "Viscose / Rayon",
    litres: 4500,
    color: "#d4a017",
    note: "~4,500 litres per kg — heavy chemical processing required",
  },
  {
    name: "Hemp",
    litres: 300,
    color: "#6b7d5c",
    note: "~300 litres per kg — restores soil, needs no pesticides",
  },
];

export default function Hemp() {
  useReveal();

  const [activeIdx, setActiveIdx] = useState(0);
  const activeMat = materials[activeIdx];
  const maxLitres = 10000;
  const barPct = Math.max(3, (activeMat.litres / maxLitres) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      {/*
        The decorative glow on the left was creating a very wide element on
        mobile (500px fixed width). Clamped to screen width below.
      */}
      <section className="container-clean" style={{ minHeight: "70vh", display: "flex", alignItems: "flex-end", paddingBottom: "clamp(3rem,8vw,6rem)", paddingTop: "clamp(5rem,9vw,8rem)", position: "relative", overflow: "hidden" }}>
        {/* thin left accent line */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "rgba(107,125,92,0.3)", pointerEvents: "none" }} />
        {/* glow — clamped to viewport width so it doesn't overflow on mobile */}
        <div style={{ position: "absolute", left: 0, top: 0, width: "min(500px, 100vw)", height: "100%", background: "radial-gradient(ellipse at left center, rgba(107,125,92,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p className="eyebrow reveal" style={{ color: "var(--accent)" }}>Our first material</p>
          <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(4rem,14vw,11rem)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-0.03em" }}>Hemp</h1>
          <div className="reveal d2" style={{ color: "var(--accent)" }}>
            <Countdown />
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── WHY SRI LANKA ─────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div style={{ maxWidth: "44rem" }}>
          <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
            <span className="font-serif" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, color: "var(--accent)" }}>01</span>
            <span style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "clamp(0.8rem,1.5vw,1.05rem)", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 300 }}>Why Sri Lanka</span>
          </div>
          <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "2.5rem" }}>
            A tradition of craft,<br /><em>often overlooked.</em>
          </h2>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Sri Lanka holds a deep-rooted tradition of craftsmanship — one that is often overlooked on a global scale. By building here, we are not only creating garments, but unlocking a system of value that can extend far beyond borders.
          </p>
          <p className="text-muted reveal d3" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>
            The intention is not local impact alone, but a model that can scale globally — where conscious production, community investment, and design coexist as one system.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* ── WHY HEMP — text only, no images ───────────────────────────── */}
      <section className="container-clean section-padding">
        <div style={{ maxWidth: "44rem" }}>
          <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
            <span className="font-serif" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, color: "var(--accent)" }}>02</span>
            <span style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "clamp(0.8rem,1.5vw,1.05rem)", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 300 }}>Why Hemp</span>
          </div>
          <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "2rem" }}>
            One of the oldest,<br /><em>most resilient fibres.</em>
          </h2>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Hemp requires very little water, restores soil health, and produces a fabric that strengthens with time.
          </p>
          <div className="reveal d3" style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--rule)" }}>
            {[
              { n: "01", label: "Breathable & thermoregulating" },
              { n: "02", label: "Highly durable and long-lasting" },
              { n: "03", label: "Minimally processed" },
            ].map((p) => (
              <div key={p.n} style={{ display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "1.5rem", padding: "1.25rem 0", borderBottom: "1px solid var(--rule)", alignItems: "center" }}>
                <span className="font-serif" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--accent)" }}>{p.n}</span>
                <span style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", letterSpacing: "0.02em" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── WHY LIMITED ───────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div className="grid-2">
          <div>
            <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
              <span className="font-serif" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, color: "var(--accent)" }}>03</span>
              <span style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "clamp(0.8rem,1.5vw,1.05rem)", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 300 }}>Why Limited</span>
            </div>
            <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15 }}>
              Intentional creation,<br /><em>not mass production.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingTop: "0.25rem" }}>
            {[
              "We work with materials and processes that take time — sourcing, weaving, and shaping each piece with care.",
              "Producing in excess would mean compromising that process. Instead, we create in small quantities, ensuring nothing is rushed, wasted, or disconnected from its origin.",
              "Each release exists as a moment — not mass production, but intentional creation.",
            ].map((t, i) => (
              <p key={i} className={`text-muted reveal d${i + 1}`} style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── WATER COMPARISON INTERACTIVE ──────────────────────────────── */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>The Real Cost</p>
        <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "1rem", maxWidth: "32rem" }}>
          Water used per kilogram<br /><em>of fabric produced.</em>
        </h2>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginBottom: "3rem", maxWidth: "36rem" }}>
          The fashion industry is one of the largest consumers of fresh water on earth. Select a material to see its true cost.
        </p>

        {/* material selector buttons */}
        <div className="reveal d3" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
          {materials.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActiveIdx(i)}
              style={{
                padding: "0.6rem 1.25rem",
                fontFamily: "var(--font-sans,'DM Sans',sans-serif)",
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                border: `1px solid ${i === activeIdx ? m.color : "rgba(240,237,232,0.12)"}`,
                background: i === activeIdx ? `${m.color}18` : "transparent",
                color: i === activeIdx ? m.color : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.25s",
                borderRadius: 0,
              }}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* visual comparison */}
        <div className="reveal d4">

          {/* big number */}
          <div style={{ marginBottom: "2rem" }}>
            <p className="font-serif" style={{ fontSize: "clamp(3.5rem,10vw,7rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", color: activeMat.color, transition: "color 0.4s" }}>
              {activeMat.litres.toLocaleString()}
            </p>
            <p className="eyebrow" style={{ marginTop: "0.75rem" }}>litres of water per kg of {activeMat.name.toLowerCase()}</p>
          </div>

          {/* bar */}
          <div style={{ position: "relative", height: "6px", background: "rgba(240,237,232,0.06)", marginBottom: "1.5rem", maxWidth: "480px" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${barPct}%`, background: activeMat.color, transition: "width 0.6s cubic-bezier(0.16,1,0.3,1), background 0.4s" }} />
          </div>

          {/* context note */}
          <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "36rem", marginBottom: "2.5rem" }}>
            {activeMat.note}
          </p>

          {/* comparison row — always show hemp vs selected */}
          {activeIdx !== 3 && (
            <div style={{ borderTop: "1px solid rgba(240,237,232,0.05)", paddingTop: "2rem" }}>
              <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>vs Hemp</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "480px" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: activeMat.color, marginBottom: "0.5rem" }}>{activeMat.name}</p>
                  <p className="font-serif" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, color: activeMat.color }}>{activeMat.litres.toLocaleString()}L</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>Hemp</p>
                  <p className="font-serif" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, color: "var(--accent)" }}>300L</p>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-serif,'Cormorant Garamond',serif)", fontStyle: "italic", fontSize: "clamp(0.9rem,1.5vw,1.05rem)", fontWeight: 300, color: "rgba(240,237,232,0.5)", marginTop: "1.5rem" }}>
                Hemp uses {Math.round(activeMat.litres / 300)}× less water than {activeMat.name.toLowerCase()}.
              </p>
            </div>
          )}

          {activeIdx === 3 && (
            <div style={{ borderTop: "1px solid rgba(240,237,232,0.05)", paddingTop: "2rem" }}>
              <p className="font-serif" style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", fontStyle: "italic", color: "rgba(240,237,232,0.55)", lineHeight: 1.8, maxWidth: "32rem" }}>
                Hemp also sequesters carbon, suppresses weeds naturally, and leaves soil richer than it found it. Compare it to any other fabric — the difference speaks for itself.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── WIDE IMAGE ────────────────────────────────────────────────── */}
      <section className="img-zoom reveal" style={{ position: "relative", height: "clamp(260px,50vw,560px)" }}>
        <Image src="/images/hemp-wide.jpg" alt="Hemp fabric" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.25)" }} />
      </section>

    </div>
  );
}
