"use client";

import Link from "next/link";
import Image from "next/image";

const NAV = [
  {
    label: "Explore",
    links: [
      { name: "Store",        href: "/store",        external: false },
      { name: "What is Kief", href: "/what-is-kief",  external: false },
      { name: "Community",    href: "/community",     external: false },
      { name: "Process",      href: "/process",       external: false },
    ],
  },
  {
    label: "Materials",
    links: [
      { name: "Hemp",        href: "/hemp",        external: false },
      { name: "Linen",       href: "/linen",       external: false },
      { name: "Accessories", href: "/accessories", external: false },
    ],
  },
  {
    label: "Connect",
    links: [
      { name: "Instagram", href: "https://instagram.com/kiefdot", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(240,237,232,0.05)" }}>
      <div className="container-clean" style={{ paddingTop: "clamp(4rem,8vw,7rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>

        {/* TOP ROW — grid-footer collapses brand + nav on mobile */}
        <div className="grid-footer">

          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "22rem" }}>
            <Image
              src="/images/logo-v2.png"
              alt="Kief"
              width={90}
              height={34}
              style={{ width: 90, height: "auto", opacity: 0.55 }}
            />
            <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.85 }}>
              Built through process.<br />Designed with intention.
            </p>
            <p style={{ fontFamily: "var(--font-serif,'Cormorant Garamond',serif)", fontStyle: "italic", fontSize: "clamp(0.9rem,1.5vw,1.05rem)", fontWeight: 300, color: "rgba(240,237,232,0.18)", lineHeight: 1.4 }}>
              From the Leaf, For the Life.
            </p>
          </div>

          {/* Nav — grid-footer-nav collapses to 2-col on narrow mobile */}
          <div className="grid-footer-nav">
            {NAV.map((col) => (
              <div key={col.label} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p className="eyebrow" style={{ marginBottom: "0.25rem" }}>{col.label}</p>
                {col.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.38)", transition: "color 0.25s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.85)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.38)")}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.38)", transition: "color 0.25s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.85)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.38)")}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div style={{ borderTop: "1px solid rgba(240,237,232,0.05)", paddingTop: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p className="eyebrow">© {new Date().getFullYear()} Kief — Sri Lanka</p>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {["Privacy", "Terms"].map((t) => (
              <a key={t} href="#" className="eyebrow" style={{ transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
