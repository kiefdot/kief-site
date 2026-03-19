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

      {/* STAT BAND — 2-col, stacks on mobile */}
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

      {/* QUOTE */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="font-serif reveal" style={{ fontSize: "clamp(1.5rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.25, maxWidth: "26ch", margin: "0 auto" }}>
          This is not just clothing.<br /><em>It is a process extended into the world around it.</em>
        </p>
      </section>

      <hr className="rule" />

      {/* INITIATIVES — alternating layout, stacks on mobile */}
      <section className="container-clean section-padding">
        <p className="eyebrow reveal" style={{ marginBottom: "3rem" }}>Cycle One Kief Community Initiative</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4rem,8vw,7rem)" }}>
          {[
            { num: "01", title: "Supporting rural school children",  desc: "Providing essential school supplies and creating access to learning and creativity.", img: "/images/community_kids2.jpg",    alt: "Community kids" },
            { num: "02", title: "Street animal meal program",        desc: "A meal initiative providing consistent support to street animals across Sri Lanka.",  img: "/images/community_animals2.jpg", alt: "Community animals" },
          ].map((item, i) => (
            <div key={i} className={`reveal d${i + 1}`}>
              {/* On mobile always image-on-top; on desktop alternates */}
              <div className="grid-2">
                {i % 2 === 0 ? (
                  <>
                    <div className="img-zoom" style={{ position: "relative", height: "clamp(240px,35vw,460px)" }}>
                      <Image src={item.img} alt={item.alt} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
                      <p className="eyebrow" style={{ opacity: 0.3 }}>{item.num}</p>
                      <h3 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 300, lineHeight: 1.2 }}>{item.title}</h3>
                      <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>{item.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
                      <p className="eyebrow" style={{ opacity: 0.3 }}>{item.num}</p>
                      <h3 className="font-serif" style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 300, lineHeight: 1.2 }}>{item.title}</h3>
                      <p className="text-muted" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.85 }}>{item.desc}</p>
                    </div>
                    <div className="img-zoom" style={{ position: "relative", height: "clamp(240px,35vw,460px)" }}>
                      <Image src={item.img} alt={item.alt} fill style={{ objectFit: "cover" }} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* IMPACT PROJECTION */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <p className="font-serif reveal" style={{ fontSize: "clamp(0.9rem,1.5vw,1.1rem)", fontStyle: "italic", color: "var(--muted)", marginBottom: "3rem" }}>
          Impact Projection
        </p>
        <p className="font-serif reveal d1" style={{ fontSize: "clamp(1.1rem,2.5vw,1.7rem)", fontWeight: 300, maxWidth: "30ch", margin: "0 auto 3rem" }}>
          If we grow together over the next 5 years
        </p>

        <div className="reveal d2" style={{ maxWidth: "360px", margin: "0 auto 3rem", padding: "0 1rem" }}>
          <div
            style={{ position: "relative", height: "1px", background: "rgba(240,237,232,0.05)", cursor: "pointer" }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setYear(Math.round(p * 4) + 1);
            }}
          >
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: "var(--accent)", transition: "width .4s cubic-bezier(.16,1,.3,1)" }} />
            <div
              style={{ position: "absolute", top: "50%", left: `${pct}%`, width: 14, height: 14, background: "var(--accent)", borderRadius: "50%", transform: "translate(-50%,-50%)", cursor: "grab", touchAction: "none" }}
              onMouseDown={(e) => {
                const track = e.currentTarget.parentElement as HTMLElement;
                const move = (ev: MouseEvent) => {
                  const r = track.getBoundingClientRect();
                  setYear(Math.round(Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)) * 4) + 1);
                };
                const up = () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); };
                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", up);
              }}
              onTouchMove={(e) => {
                const track = (e.currentTarget.parentElement as HTMLElement);
                const r = track.getBoundingClientRect();
                setYear(Math.round(Math.max(0, Math.min(1, (e.touches[0].clientX - r.left) / r.width)) * 4) + 1);
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

        <p className="font-serif reveal d3" style={{ fontSize: "clamp(3.5rem,12vw,8rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--accent)" }}>
          {studentImpact[year - 1].toLocaleString()}
        </p>
        <p className="font-serif reveal d4" style={{ fontSize: "clamp(0.85rem,1.4vw,1rem)", fontStyle: "italic", color: "var(--muted)", marginTop: "1.25rem" }}>
          total students supported
        </p>
      </section>

      <hr className="rule" />

      {/* WHY + APPROACH — label-left layout, stacks on mobile */}
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

      {/* SIGNUP — centred, full-width input on mobile */}
      <section className="container-clean section-padding" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1.5rem" }}>Community Access</p>
          <h3 className="font-serif reveal d1" style={{ fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "1rem" }}>
            Join the Kief Community.
          </h3>
          <p className="text-muted reveal d2" style={{ fontSize: "clamp(0.85rem,1.1vw,0.95rem)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
            Updates on releases, initiatives, and community impact.<br />No spam — only meaningful updates.
          </p>
          {/* stacks to column on very narrow screens */}
          <div className="reveal d3" style={{ display: "flex", flexWrap: "wrap", gap: "0" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{ flex: "1 1 200px", padding: "0.9rem 1rem", background: "transparent", border: "1px solid rgba(240,237,232,0.08)", fontFamily: "var(--sans)", fontSize: "clamp(0.85rem,1.1vw,0.95rem)", fontWeight: 300, color: "var(--fg)", outline: "none" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(240,237,232,0.2)")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(240,237,232,0.08)")}
            />
            <button
              style={{ flex: "0 0 auto", padding: "0.9rem 2rem", background: "var(--accent)", color: "#ffffff", fontFamily: "var(--sans)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "opacity .25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Join
            </button>
          </div>
        </div>
      </section>

      {/* FUTURE */}
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

    </div>
  );
}
