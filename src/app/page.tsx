"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useReveal from "@/components/useReveal";

export default function Home() {
  useReveal();

  // ── Hero: single full-screen image (mainpic only) ─────────────────
  // The "slideshow" dots from before were the problem — removed.

  // ── Process strip: 5 images, swipeable on mobile ─────────────────
  const processImages = [
    { src: "/images/process1.png", alt: "Process step 1" },
    { src: "/images/process2.png", alt: "Process step 2" },
    { src: "/images/process3.png", alt: "Process step 3" },
    { src: "/images/process4.png", alt: "Process step 4" },
    { src: "/images/process5.png", alt: "Process step 5" },
  ];

  // Touch handling for process strip
  const stripRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── HERO — single image, no distracting UI ────────────────────── */}
      <section style={{ height: "100svh", position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/mainpic.png"
          alt="Kief Campaign"
          fill
          priority
          sizes="100vw"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,13,11,0.72) 0%, rgba(14,13,11,0.12) 55%, rgba(14,13,11,0.28) 100%)" }} />

        {/* logo + tagline */}
        <div style={{ position: "absolute", bottom: "clamp(2.5rem,6vw,5rem)", left: "clamp(1.5rem,5vw,5rem)" }}>
          <div className="animate-blur-in">
            <Image src="/images/logo-v2.png" alt="Kief" width={220} height={80} priority
              style={{ width: "clamp(120px,16vw,220px)", height: "auto" }} />
          </div>
          <p className="eyebrow animate-blur-in delay-2" style={{ color: "rgba(240,237,232,0.45)", marginTop: "1rem" }}>
            From the Leaf, For the Life.
          </p>
        </div>

        {/* scroll indicator */}
        <div className="animate-blur-in delay-3" style={{ position: "absolute", bottom: "clamp(2.5rem,6vw,5rem)", right: "clamp(1.5rem,5vw,5rem)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "1px", height: "48px", background: "rgba(240,237,232,0.15)", display: "block" }} />
          <span className="eyebrow" style={{ color: "rgba(240,237,232,0.2)", writingMode: "vertical-rl", letterSpacing: "0.25em" }}>Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(240,237,232,0.05)", borderBottom: "1px solid rgba(240,237,232,0.05)", padding: "1.25rem 0", overflow: "hidden" }}>
        <div className="marquee-track">
          {["Hemp & Linen", "Built Slowly", "Released Briefly", "Sri Lanka", "Cycle One", "From the Leaf", "Natural Fibres",
            "Hemp & Linen", "Built Slowly", "Released Briefly", "Sri Lanka", "Cycle One", "From the Leaf", "Natural Fibres"].map((t, i) => (
              <span key={i} className="marquee-item">{t}</span>
            ))}
        </div>
      </div>

      {/* ── PHILOSOPHY ────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div style={{ maxWidth: "36rem" }}>
          <p className="eyebrow reveal">Philosophy</p>
          <p className="font-serif reveal d1" style={{ fontSize: "clamp(2.4rem,5.5vw,4rem)", fontWeight: 300, lineHeight: 1.15, marginTop: "1.5rem" }}>
            Built slowly.<br />Released briefly.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* ── MATERIAL TEXT ─────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div className="grid-2">
          <p className="font-serif reveal" style={{ fontSize: "clamp(1.05rem,1.8vw,1.2rem)", fontWeight: 300, lineHeight: 1.85, fontStyle: "italic" }}>
            We work with materials that take time.
            That grow slowly.
            That change with use.
          </p>
          <p className="font-serif reveal d2" style={{ fontSize: "clamp(1.05rem,1.8vw,1.2rem)", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)" }}>
            Hemp. Linen.<br />
            Not because they are trends,<br />
            but because they hold a process within them.
          </p>
        </div>
      </section>

      {/* ── PROCESS IMAGE STRIP ───────────────────────────────────────── */}
      {/* Desktop: 5 images side by side fixed strip                      */}
      {/* Mobile:  horizontal scroll / swipe                              */}
      <section className="reveal">
        <style>{`
          .process-strip {
            display: flex;
            gap: 0;
            overflow: hidden;
          }
          .process-strip .ps-item {
            position: relative;
            flex: 1;
            min-width: 0;
            height: clamp(260px, 40vw, 520px);
            overflow: hidden;
            cursor: pointer;
          }
          .process-strip .ps-item img {
            transition: transform 1.1s cubic-bezier(0.16,1,0.3,1) !important;
          }
          .process-strip .ps-item:hover img {
            transform: scale(1.06) !important;
          }
          /* label overlay */
          .process-strip .ps-label {
            position: absolute;
            bottom: 1.25rem;
            left: 1.25rem;
            font-family: var(--font-sans, 'DM Sans', sans-serif);
            font-size: 8px;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            color: rgba(240,237,232,0.5);
            opacity: 0;
            transition: opacity 0.3s;
          }
          .process-strip .ps-item:hover .ps-label { opacity: 1; }

          /* ── MOBILE: horizontal scroll strip ── */
          @media (max-width: 768px) {
            .process-strip {
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              gap: 2px;
            }
            .process-strip::-webkit-scrollbar { display: none; }
            .process-strip .ps-item {
              flex: 0 0 80vw;
              min-width: 80vw;
              height: 60vw;
              scroll-snap-align: start;
            }
          }
        `}</style>

        <div className="process-strip" ref={stripRef}>
          {processImages.map((img, i) => (
            <div key={i} className="ps-item img-zoom">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 80vw, 20vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.15)" }} />
              <span className="ps-label">0{i + 1}</span>
            </div>
          ))}
        </div>

        {/* mobile scroll hint */}
        <p style={{ textAlign: "center", fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", padding: "0.75rem 0" }}
          className="mobile-only">
          Swipe to explore
        </p>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)", borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="grid-stats">
          {[
            { num: "01", label: "Cycle", sub: "First release — limited run" },
            { num: "100%", label: "Natural", sub: "Hemp & linen, nothing synthetic" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="reveal" style={{ background: "var(--bg)", padding: "clamp(2.5rem,6vw,5rem) clamp(1.5rem,4vw,4rem)" }}>
              <p className="font-serif" style={{ fontSize: "clamp(4rem,11vw,8rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--accent)" }}>{num}</p>
              <p className="eyebrow" style={{ color: "var(--fg)", marginTop: "1.25rem" }}>{label}</p>
              <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.4vw,1rem)", marginTop: "0.6rem", lineHeight: 1.7 }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <div style={{ maxWidth: "40rem" }}>
          <p className="eyebrow reveal">Process</p>
          <h2 className="font-serif reveal d1" style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)", fontWeight: 300, lineHeight: 1.15, marginTop: "1.5rem", letterSpacing: "-0.01em" }}>
            From the Leaf,<br /><em>For the Life.</em>
          </h2>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.9rem,1.6vw,1.05rem)", lineHeight: 1.9, marginTop: "2rem", maxWidth: "28rem" }}>
            Every piece begins long before it is worn.
            In the soil. In the fiber.
            In the hands that shape it.
          </p>
          <Link href="/process" className="kief-link reveal d3" style={{ display: "inline-flex", marginTop: "2rem" }}>
            Our Process <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ── COMMUNITY ─────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)", borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="container-clean section-padding">
          <div className="grid-2">
            <div>
              <p className="eyebrow reveal">Community</p>
              <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300, lineHeight: 1.2, marginTop: "1.5rem" }}>
                A part of Kief exists<br />beyond clothing.
              </p>
            </div>
            <div className="reveal d2" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p className="text-muted" style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", lineHeight: 1.9 }}>
                Built with and for communities in Sri Lanka.
                Every purchase sustains the hands and land behind the cloth.
              </p>
              <Link href="/community" className="kief-link" style={{ alignSelf: "flex-start" }}>
                Explore Community <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <Link href="/store" className="img-zoom reveal" style={{ position: "relative", height: "clamp(280px,45vw,520px)", display: "block" }}>
        <Image src="/images/collection.png" alt="Cycle One" fill sizes="100vw" quality={90} style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,13,11,0.55)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
          <p className="eyebrow" style={{ color: "rgba(240,237,232,0.35)" }}>Coming Soon</p>
          <p className="font-serif" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 300, letterSpacing: "0.02em" }}>Cycle One</p>
          <span className="kief-link" style={{ pointerEvents: "none" }}>
            Shop the Collection <span className="arrow">→</span>
          </span>
        </div>
      </Link>

    </div>
  );
}
