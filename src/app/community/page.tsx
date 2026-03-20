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
        <h1 className="font-serif reveal d1" style={{ fontSize: "clamp(2.6rem,6vw,5rem)", fontWeight: 300, lineHeight: 1.05 }}>
          Built beyond<br /><em>clothing.</em>
        </h1>
        <p className="text-muted reveal d2" style={{ marginTop: "2rem", maxWidth: "30rem" }}>
          A part of Kief exists beyond the garment — directed outward, into the communities that make it possible.
        </p>
      </section>

      {/* STAT */}
      <section style={{ borderTop: "1px solid rgba(240,237,232,0.05)", borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="container-clean section-padding">
          <div className="grid-2">
            <div>
              <p className="eyebrow reveal">Impact</p>
              <p className="font-serif reveal d1" style={{ fontSize: "clamp(5rem,12vw,9rem)", color: "var(--accent)" }}>30%</p>
            </div>
            <div>
              <p className="font-serif reveal d1">
                of all profits go into a community fund.
              </p>
              <p className="text-muted reveal d2">
                Every piece contributes to something larger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* 🔥 PREMIUM SLIDER */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="font-serif reveal" style={{ marginBottom: "3rem" }}>
          Impact Projection
        </p>

        <div style={{ maxWidth: "420px", margin: "0 auto 3rem" }}>
          <div
            style={{ position: "relative", height: "2px", background: "rgba(240,237,232,0.08)" }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setYear(Math.round(p * 4) + 1);
            }}
          >
            <div
              style={{
                position: "absolute",
                width: `${pct}%`,
                height: "100%",
                background: "linear-gradient(90deg,#22c55e,#16a34a)",
                transition: "width .5s ease",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: `${pct}%`,
                top: "50%",
                width: 18,
                height: 18,
                background: "#22c55e",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 15px rgba(34,197,94,0.6)",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
            {[1, 2, 3, 4, 5].map((y) => (
              <button key={y} onClick={() => setYear(y)} style={{
                color: y === year ? "#22c55e" : "gray",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}>
                Year {y}
              </button>
            ))}
          </div>
        </div>

        <p style={{
          fontSize: "clamp(5rem,14vw,10rem)",
          color: "#22c55e",
          textShadow: "0 0 25px rgba(34,197,94,0.25)"
        }}>
          {studentImpact[year - 1]}
        </p>

        <p style={{ color: "gray" }}>
          total students supported
        </p>
      </section>

      <hr className="rule" />

      {/* SIGNUP */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <form action="https://formspree.io/f/myknorrq" method="POST">
          <input type="email" name="email" required placeholder="Your email" />
          <button type="submit">Join</button>
        </form>
      </section>

    </div>
  );
}