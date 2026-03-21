"use client";

import Image from "next/image";
import useReveal from "@/components/useReveal";
import Countdown from "@/components/Countdown";

export default function Hemp() {
  useReveal();

  // 4 hemp images — swipeable on mobile, grid on desktop
  const hempImages = [
    { src: "/images/hemp-1.jpg", alt: "Hemp fabric 1" },
    { src: "/images/hemp-2.jpg", alt: "Hemp fabric 2" },
    { src: "/images/hemp-3.jpg", alt: "Hemp fabric 3" },
    { src: "/images/hemp-4.jpg", alt: "Hemp fabric 4" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      {/*
        KEY FIX: the hero section was getting z-index: 1 from position:relative
        which was stacking above the nav (z-index 200). We don't set position:relative
        on the outer container, only on the inner content div.
        The nav hamburger at z-index 202 will always show on top.
      */}
      <section className="container-clean" style={{ minHeight: "70vh", display: "flex", alignItems: "flex-end", paddingBottom: "clamp(3rem,8vw,6rem)", paddingTop: "clamp(5rem,9vw,8rem)", position: "relative", overflow: "visible" }}>
        {/* decorative left line — position absolute inside section is fine */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "rgba(107,125,92,0.3)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: "500px", height: "100%", background: "radial-gradient(ellipse at left center, rgba(107,125,92,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* hero content — no z-index set, nav sits above naturally at z-index 200 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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

      {/* ── WHY HEMP ──────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div className="grid-hemp">

          {/* text col */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
                <span className="font-serif" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, color: "var(--accent)" }}>02</span>
                <span style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "clamp(0.8rem,1.5vw,1.05rem)", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 300 }}>Why Hemp</span>
              </div>
              <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15 }}>
                One of the oldest,<br /><em>most resilient fibres.</em>
              </h2>
            </div>
            <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>
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

          {/* ── IMAGE STRIP — desktop: 2×2 grid, mobile: swipeable ─── */}
          <div className="reveal d2">
            <style>{`
              .hemp-strip {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.75rem;
              }
              .hemp-strip .hs-item {
                position: relative;
                overflow: hidden;
              }
              .hemp-strip .hs-item img {
                transition: transform 1.1s cubic-bezier(0.16,1,0.3,1) !important;
              }
              .hemp-strip .hs-item:hover img {
                transform: scale(1.05) !important;
              }
              @media (max-width: 768px) {
                .hemp-strip {
                  display: flex !important;
                  overflow-x: auto;
                  scroll-snap-type: x mandatory;
                  -webkit-overflow-scrolling: touch;
                  scrollbar-width: none;
                  gap: 2px;
                }
                .hemp-strip::-webkit-scrollbar { display: none; }
                .hemp-strip .hs-item {
                  flex: 0 0 75vw;
                  min-width: 75vw;
                  height: 85vw;
                  scroll-snap-align: start;
                  aspect-ratio: unset !important;
                  grid-column: unset !important;
                }
              }
            `}</style>

            <div className="hemp-strip">
              {/* image 1 — portrait */}
              <div className="hs-item" style={{ aspectRatio: "3/4" }}>
                <Image src="/images/hemp-1.jpg" alt="Hemp" fill style={{ objectFit: "cover" }} />
              </div>
              {/* images 2 + 3 stacked */}
              <div className="hs-item" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2.5rem" }}>
                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                  <Image src="/images/hemp-2.jpg" alt="Hemp" fill style={{ objectFit: "cover", transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)" }} />
                </div>
                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                  <Image src="/images/hemp-3.jpg" alt="Hemp" fill style={{ objectFit: "cover", transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)" }} />
                </div>
              </div>
              {/* image 4 — full width banner */}
              <div className="hs-item" style={{ aspectRatio: "2/1", gridColumn: "1 / -1" }}>
                <Image src="/images/hemp-4.jpg" alt="Hemp" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* mobile swipe hint */}
            <p style={{ textAlign: "center", fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", padding: "0.75rem 0", display: "none" }}
              className="mobile-only">
              Swipe to explore
            </p>
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

      {/* ── WIDE IMAGE ────────────────────────────────────────────────── */}
      <section className="img-zoom reveal" style={{ position: "relative", height: "clamp(260px,50vw,560px)" }}>
        <Image src="/images/hemp-wide.jpg" alt="Hemp fabric" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.25)" }} />
      </section>

    </div>
  );
}
