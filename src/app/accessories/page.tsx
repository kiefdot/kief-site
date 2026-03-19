"use client";

import Link from "next/link";

export default function Accessories() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>

      <p style={{ fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "2.5rem" }}>
        Coming Soon
      </p>

      <h1 style={{ fontFamily: "var(--font-serif,'Cormorant Garamond',serif)", fontSize: "clamp(4rem,10vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--fg)" }}>
        Accessories
      </h1>

      <p style={{ fontFamily: "var(--font-serif,'Cormorant Garamond',serif)", fontSize: "clamp(1.05rem,2vw,1.3rem)", fontWeight: 300, fontStyle: "italic", color: "var(--muted)", marginTop: "1.75rem", maxWidth: "22ch", lineHeight: 1.65 }}>
        We are still preparing this chapter.
      </p>

      <Link
        href="/"
        style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-sans,'DM Sans',sans-serif)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--fg)", textDecoration: "none", paddingBottom: "3px", borderBottom: "1px solid rgba(240,237,232,0.15)", marginTop: "3.5rem", transition: "opacity .25s" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        ← Back to Home
      </Link>

    </div>
  );
}
