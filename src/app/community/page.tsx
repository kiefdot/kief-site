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

      {/* HERO */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal">Community</p>
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(2.6rem,6vw,5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: "1.5rem" }}>
          Built beyond<br /><em>clothing.</em>
        </h1>
        <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginTop: "2rem", maxWidth: "30rem" }}>
          A part of Kief exists beyond the garment — directed outward, into the communities that make it possible.
        </p>
      </section>

      {/* STAT */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)", borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="container-clean section-padding">
          <div className="grid-2">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>Impact</p>
              <p className="font-serif reveal d1" style={{ fontSize: "clamp(5rem,12vw,9rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--accent)" }}>30%</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.1rem,2.5vw,1.8rem)", fontWeight: 300 }}>
                of all profits go into a community fund.
              </p>
              <p className="text-muted reveal d2">
                Every piece you buy contributes to something larger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* SIGNUP — ✅ FIXED */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <p className="eyebrow reveal">Community Access</p>

          <h3 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300 }}>
            Join the Kief Community.
          </h3>

          <p className="text-muted reveal d2" style={{ marginBottom: "2rem" }}>
            No spam — only meaningful updates.
          </p>

          {/* ✅ FORM START */}
          <form
            action="https://formspree.io/f/myknorrq"
            method="POST"
            style={{ display: "flex", flexWrap: "wrap" }}
            onSubmit={() => {
              setTimeout(() => {
                alert("You're in. Welcome to Kief.");
              }, 200);
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              style={{
                flex: "1",
                padding: "1rem",
                background: "transparent",
                border: "1px solid rgba(240,237,232,0.08)",
                color: "white",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "1rem 2rem",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              JOIN
            </button>
          </form>
          {/* ✅ FORM END */}

        </div>
      </section>

    </div>
  );
}