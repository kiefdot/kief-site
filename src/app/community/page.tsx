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
        <h1 className="font-serif reveal d1" style={{
          fontSize: "clamp(2.6rem,6vw,5rem)",
          fontWeight: 300,
          lineHeight: 1.05
        }}>
          Built beyond<br /><em>clothing.</em>
        </h1>
        <p className="text-muted reveal d2" style={{
          marginTop: "2rem",
          maxWidth: "30rem"
        }}>
          A part of Kief exists beyond the garment — directed outward, into the communities that make it possible.
        </p>
      </section>

      {/* STAT */}
      <section style={{
        borderTop: "1px solid rgba(240,237,232,0.05)",
        borderBottom: "1px solid rgba(240,237,232,0.05)"
      }}>
        <div className="container-clean section-padding">
          <div className="grid-2">
            <div>
              <p className="eyebrow reveal">Impact</p>
              <p className="font-serif reveal d1" style={{
                fontSize: "clamp(5rem,12vw,9rem)",
                color: "var(--accent)"
              }}>
                30%
              </p>
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

      {/* 🔥 SLIDER */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>

        <p className="font-serif reveal" style={{
          fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
          fontStyle: "italic",
          color: "var(--muted)",
          marginBottom: "3rem"
        }}>
          Impact Projection
        </p>

        <p className="font-serif reveal d1" style={{
          fontSize: "clamp(1.1rem,2.5vw,1.7rem)",
          fontWeight: 300,
          marginBottom: "3rem"
        }}>
          If we grow together over the next 5 years
        </p>

        <div className="reveal d2" style={{
          maxWidth: "380px",
          margin: "0 auto 3rem",
          padding: "0 1rem"
        }}>
          <div
            style={{
              position: "relative",
              height: "2px",
              background: "rgba(240,237,232,0.08)",
              cursor: "pointer",
              userSelect: "none"
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setYear(Math.round(p * 4) + 1);
            }}
          >
            {/* progress */}
            <div style={{
              position: "absolute",
              width: `${pct}%`,
              height: "100%",
              background: "var(--accent)",
              transition: "width .4s cubic-bezier(.16,1,.3,1)"
            }} />

            {/* knob */}
            <div
              style={{
                position: "absolute",
                left: `${pct}%`,
                top: "50%",
                width: 16,
                height: 16,
                background: "var(--accent)",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                cursor: "grab"
              }}
              onMouseDown={(e) => {
                e.preventDefault();

                const track = e.currentTarget.parentElement as HTMLElement;

                const move = (ev: MouseEvent) => {
                  const r = track.getBoundingClientRect();
                  const p = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width));
                  setYear(Math.round(p * 4) + 1);
                };

                const up = () => {
                  document.removeEventListener("mousemove", move);
                  document.removeEventListener("mouseup", up);
                };

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", up);
              }}
            />
          </div>

          {/* years */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem"
          }}>
            {[1, 2, 3, 4, 5].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  color: y === year ? "var(--accent)" : "var(--muted)",
                  background: "none",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Year {y}
              </button>
            ))}
          </div>
        </div>

        {/* main number */}
        <p className="font-serif reveal d3" style={{
          fontSize: "clamp(4.5rem,13vw,9rem)",
          fontWeight: 300,
          color: "var(--accent)"
        }}>
          {studentImpact[year - 1].toLocaleString()}
        </p>

        <p className="font-serif reveal d4" style={{
          fontStyle: "italic",
          color: "var(--muted)"
        }}>
          total students supported
        </p>
      </section>

      <hr className="rule" />

      {/* SIGNUP */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>

          <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>
            Community Access
          </p>

          <h3 className="font-serif reveal d1" style={{
            fontSize: "clamp(1.7rem,4vw,3rem)",
            fontWeight: 300,
            marginBottom: "1rem"
          }}>
            Join the Kief Community.
          </h3>

          <p className="text-muted reveal d2" style={{
            marginBottom: "2.5rem"
          }}>
            Updates on releases, initiatives, and community impact.<br />
            No spam — only meaningful updates.
          </p>

          <form
            action="https://formspree.io/f/myknorrq"
            method="POST"
            className="reveal d3"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              style={{
                flex: "1 1 200px",
                padding: "0.9rem 1rem",
                background: "transparent",
                border: "1px solid rgba(240,237,232,0.08)",
                color: "var(--fg)",
                outline: "none"
              }}
            />

            <button
              type="submit"
              style={{
                padding: "0.9rem 2rem",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.3em",
                textTransform: "uppercase"
              }}
            >
              Join
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}