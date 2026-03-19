"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "What is Kief", href: "/what-is-kief" },
    { label: "Hemp",         href: "/hemp" },
    { label: "Store",        href: "/store" },
    { label: "Community",    href: "/community" },
    { label: "Linen",        href: "/linen" },
    { label: "Accessories",  href: "/accessories" },
  ];

  return (
    <>
      <style>{`
        .kief-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background 0.5s, border-color 0.5s;
        }
        .kief-nav.transparent {
          background: transparent;
          border-bottom: 1px solid rgba(240,237,232,0.04);
        }
        .kief-nav.solid {
          background: rgba(14,13,11,0.93);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(240,237,232,0.05);
        }
        .kief-nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(1.5rem, 5vw, 5rem); height: 64px;
        }
        .kief-nav-links {
          display: flex; gap: clamp(1.5rem, 2.5vw, 2.5rem);
          list-style: none; margin: 0; padding: 0;
        }
        @media (max-width: 900px) { .kief-nav-links { display: none; } }
        .kief-nav-links a {
          font-family: var(--font-sans, 'DM Sans', sans-serif);
          font-size: 9px; font-weight: 300;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(240,237,232,0.5); text-decoration: none;
          transition: color 0.25s; position: relative; padding-bottom: 2px;
        }
        .kief-nav-links a::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: rgba(240,237,232,0.45);
          transition: width 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .kief-nav-links a:hover { color: rgba(240,237,232,0.9); opacity: 1; }
        .kief-nav-links a:hover::after { width: 100%; }
        .kief-burger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        @media (max-width: 900px) { .kief-burger { display: flex; } }
        .kief-burger span {
          display: block; width: 22px; height: 1px;
          background: rgba(240,237,232,0.65); transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s;
        }
        .kief-burger.active span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .kief-burger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .kief-burger.active span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        .kief-mobile-menu {
          position: fixed; inset: 0; background: #0e0d0b; z-index: 99;
          display: flex; flex-direction: column; justify-content: center;
          align-items: flex-start; padding: 0 clamp(1.5rem, 8vw, 5rem);
          transform: translateX(100%);
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .kief-mobile-menu.open { transform: translateX(0); }
        .kief-mobile-menu ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2.5rem; }
        .kief-mobile-menu a {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: clamp(2rem, 9vw, 3.5rem); font-weight: 300; font-style: italic;
          color: rgba(240,237,232,0.85); text-decoration: none; transition: color 0.2s;
        }
        .kief-mobile-menu a:hover { color: rgba(240,237,232,0.3); opacity: 1; }
        .kief-mobile-footer {
          position: absolute; bottom: 2.5rem; left: clamp(1.5rem, 8vw, 5rem);
          font-family: var(--font-sans, 'DM Sans', sans-serif);
          font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(240,237,232,0.12);
        }
      `}</style>

      <nav className={`kief-nav ${scrolled ? "solid" : "transparent"}`}>
        <div className="kief-nav-inner">
          <Link href="/" aria-label="Kief Home">
            {/* NO filter — original logo colours */}
            <Image
              src="/images/logo-v3.png"
              alt="Kief"
              width={44}
              height={22}
              style={{ width: 44, height: "auto", display: "block" }}
              priority
            />
          </Link>

          <ul className="kief-nav-links">
            {links.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>

          <button
            className={`kief-burger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`kief-mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
        <p className="kief-mobile-footer">Kief — From the Leaf, For the Life.</p>
      </div>
    </>
  );
}
