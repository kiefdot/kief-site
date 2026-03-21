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
      { name: "Instagram", href: "https://instagram.com/kiefdot",                               external: true },
      { name: "TikTok",    href: "https://tiktok.com/@kiefdot",                                 external: true },
      { name: "Facebook",  href: "https://facebook.com/kiefdot",                                external: true },
      // WhatsApp click-to-chat — opens the number directly in WhatsApp
      { name: "WhatsApp",  href: "https://wa.me/94721542069",                                   external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(240,237,232,0.05)" }}>
      <div className="container-clean" style={{ paddingTop: "clamp(4rem,8vw,7rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>

        {/* ── TOP ROW ─────────────────────────────────────────────────── */}
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

            {/* Social icons row */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginTop: "0.5rem" }}>

              {/* Instagram */}
              <a href="https://instagram.com/kiefdot" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ color: "rgba(240,237,232,0.4)", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@kiefdot" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                style={{ color: "rgba(240,237,232,0.4)", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/kiefdot" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ color: "rgba(240,237,232,0.4)", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* WhatsApp — click opens chat with +94 721542069 */}
              <a href="https://wa.me/94721542069" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                style={{ color: "rgba(240,237,232,0.4)", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Nav columns */}
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

        {/* ── BOTTOM BAR ──────────────────────────────────────────────── */}
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
