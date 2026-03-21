"use client";

import { useState } from "react";
import Image from "next/image";
import useReveal from "@/components/useReveal";

export default function Community() {
  useReveal();

  const [year, setYear] = useState(1);
  const studentImpact = [500, 1200, 2200, 3500, 5000];
  const pct = ((year - 1) / 4) * 100;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal">Community</p>
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(2.6rem,6vw,5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: "1.5rem" }}>
          Built beyond<br /><em>clothing.</em>
        </h1>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginTop: "2rem", maxWidth: "30rem" }}>
          A part of Kief exists beyond the garment — directed outward, into the communities that make it possible.
        </p>
      </section>

      {/* ── 30% STAT BAND ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)", borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="container-clean section-padding">
          <div className="grid-2">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>Impact</p>
              <p className="font-serif reveal d1" style={{ fontSize: "clamp(5rem,12vw,9rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--accent)" }}>30%</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.1rem,2.5vw,1.8rem)", fontWeight: 300, lineHeight: 1.3 }}>
                of all profits go into a community fund that supports local initiatives in Sri Lanka.
              </p>
              <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9 }}>
                Every piece you buy contributes to something larger — direct impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="font-serif reveal" style={{ fontSize: "clamp(1.5rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.25, maxWidth: "26ch", margin: "0 auto" }}>
          This is not just clothing.<br /><em>It is a process extended into the world around it.</em>
        </p>
      </section>

      <hr className="rule" />

      {/* ── INITIATIVES ───────────────────────────────────────────────── */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "3rem" }}>Cycle One Kief Community Initiative</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4rem,8vw,7rem)" }}>

          <div className="reveal d1">
            <div className="grid-2">
              <div className="img-zoom" style={{ position: "relative", height: "clamp(240px,35vw,460px)" }}>
                <Image src="/images/community_kids2.jpg" alt="Supporting rural school children" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
                <p className="eyebrow" style={{ opacity: 0.35 }}>01</p>
                <h3 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 300, lineHeight: 1.2 }}>
                  Supporting rural school children
                </h3>
                <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>
                  Providing essential school supplies and creating access to learning and creativity.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal d2">
            <div className="grid-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
                <p className="eyebrow" style={{ opacity: 0.35 }}>02</p>
                <h3 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 300, lineHeight: 1.2 }}>
                  Street animal meal program
                </h3>
                <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>
                  A meal initiative providing consistent support to street animals across Sri Lanka.
                </p>
              </div>
              <div className="img-zoom" style={{ position: "relative", height: "clamp(240px,35vw,460px)" }}>
                <Image src="/images/community_animals2.jpg" alt="Street animal meal program" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className="rule" />

      {/* ── IMPACT PROJECTION SLIDER ──────────────────────────────────── */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="font-serif reveal" style={{ fontSize: "clamp(0.9rem,1.5vw,1.1rem)", fontStyle: "italic", color: "var(--muted)", marginBottom: "3rem" }}>
          Impact Projection
        </p>
        <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.1rem,2.5vw,1.7rem)", fontWeight: 300, maxWidth: "30ch", margin: "0 auto 3rem" }}>
          If we grow together over the next 5 years
        </p>

        <div className="reveal d2" style={{ maxWidth: "380px", margin: "0 auto 3rem", padding: "0 1rem" }}>
          <div
            style={{ position: "relative", height: "2px", background: "rgba(240,237,232,0.08)", cursor: "pointer", userSelect: "none" }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setYear(Math.round(p * 4) + 1);
            }}
          >
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: "var(--accent)", transition: "width .4s cubic-bezier(.16,1,.3,1)" }} />
            <div
              style={{ position: "absolute", top: "50%", left: `${pct}%`, width: 16, height: 16, background: "var(--accent)", borderRadius: "50%", transform: "translate(-50%,-50%)", cursor: "grab" }}
              onMouseDown={(e) => {
                e.preventDefault();
                const track = e.currentTarget.parentElement as HTMLElement;
                const move = (ev: MouseEvent) => {
                  const r = track.getBoundingClientRect();
                  const p = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width));
                  setYear(Math.round(p * 4) + 1);
                };
                const up = () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); };
                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", up);
              }}
              onTouchMove={(e) => {
                const track = (e.currentTarget.parentElement as HTMLElement);
                const r = track.getBoundingClientRect();
                const p = Math.max(0, Math.min(1, (e.touches[0].clientX - r.left) / r.width));
                setYear(Math.round(p * 4) + 1);
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
            {[1,2,3,4,5].map((y) => (
              <button key={y} onClick={() => setYear(y)} style={{ fontFamily: "var(--serif)", fontSize: "clamp(0.8rem,1.4vw,1rem)", fontStyle: "italic", color: y === year ? "var(--accent)" : "var(--muted)", background: "none", border: "none", cursor: "pointer", transition: "color .2s", fontWeight: 300, padding: "0.25rem" }}>
                Year {y}
              </button>
            ))}
          </div>
        </div>

        <p className="font-serif reveal d3" style={{ fontSize: "clamp(4.5rem,13vw,9rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--accent)" }}>
          {studentImpact[year - 1].toLocaleString()}
        </p>
        <p className="font-serif reveal d4" style={{ fontSize: "clamp(0.85rem,1.4vw,1rem)", fontStyle: "italic", color: "var(--muted)", marginTop: "1.25rem" }}>
          total students supported
        </p>
      </section>

      <hr className="rule" />

      {/* ── WHY + APPROACH ────────────────────────────────────────────── */}
      <section className="container-clean section-padding" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {[
          { label: "Why it matters", body: ["Everything we build starts with process.", "It is about where it comes from and who it impacts."] },
          { label: "Approach",       body: ["We start with what is needed most.", "Growing with each release and expanding across Sri Lanka."] },
        ].map((block) => (
          <div key={block.label} className="grid-2">
            <p className="eyebrow reveal">{block.label}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {block.body.map((t, i) => (
                <p key={i} className={`reveal d${i + 1}`} style={{ fontSize: "clamp(0.95rem,1.6vw,1.1rem)", lineHeight: 1.9, color: i === 0 ? "var(--fg)" : "var(--muted)" }}>{t}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr className="rule" />

      {/* ── SIGNUP ────────────────────────────────────────────────────── */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>Community Access</p>
          <h3 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "1rem" }}>
            Join the Kief Community.
          </h3>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
            Updates on releases, initiatives, and community impact.<br />No spam — only meaningful updates.
          </p>
          <form
            action="https://formspree.io/f/myknorrq"
            method="POST"
            className="reveal d3"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0" }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              style={{ flex: "1 1 200px", maxWidth: "100%", padding: "0.9rem 1rem", background: "transparent", border: "1px solid rgba(240,237,232,0.08)", fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "clamp(0.85rem,1.1vw,0.95rem)", fontWeight: 300, color: "var(--fg)", outline: "none" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(240,237,232,0.25)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(240,237,232,0.08)")}
            />
            <button
              type="submit"
              style={{ flex: "0 0 auto", padding: "0.9rem 2rem", background: "var(--accent)", color: "#ffffff", fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "opacity .25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Join
            </button>
          </form>
        </div>
      </section>

      {/* ── FUTURE ────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="container-clean section-padding" style={{ textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>Future</p>
          <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.2 }}>
            This is only the beginning.
          </p>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginTop: "1.25rem", maxWidth: "28rem", marginLeft: "auto", marginRight: "auto" }}>
            As Kief grows, so will the scope of the community work.
          </p>
        </div>
      </section>

      {/* ── PDF DOWNLOAD ──────────────────────────────────────────────── */}
      {/*
        HOW TO ADD YOUR PDF:
        1. Put your PDF file inside /public  e.g. /public/kief-community-initiative.pdf
        2. The href below will work automatically — no other changes needed
        3. Rename the file to match the href if needed
      */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="container-clean section-padding" style={{ textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>Read More</p>
          <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Our Community Initiative
          </p>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, maxWidth: "28rem", margin: "0 auto 2.5rem" }}>
            Download our full Kief Community Initiative document to learn more about what we are building.
          </p>
          <div className="reveal d3">
            <a
              href="/kief-community-initiative.pdf"
              download
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
              Download PDF ↓
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
