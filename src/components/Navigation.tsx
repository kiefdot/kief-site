"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// All nav CSS lives in globals.css — no <style> tag (hydration fix)

const links = [
  { label: "What is Kief", href: "/what-is-kief" },
  { label: "Hemp",         href: "/hemp" },
  { label: "Store",        href: "/store" },
  { label: "Community",    href: "/community" },
  { label: "Process",      href: "/process" },
  { label: "Linen",        href: "/linen" },
  { label: "Accessories",  href: "/accessories" },
];

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

  return (
    <>
      {/* ── NAV BAR ──────────────────────────────────────────────────── */}
      <nav className={`kief-nav ${scrolled ? "solid" : "transparent"}`}>
        <div className="kief-nav-inner">

          {/* Logo — always visible, sits behind open menu */}
          <Link href="/" aria-label="Kief Home" style={{ position: "relative", zIndex: 202 }}>
            <Image
              src="/images/logo-v3.png"
              alt="Kief"
              width={44}
              height={22}
              style={{ width: 44, height: "auto", display: "block" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="kief-nav-links">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — z-index 202 so it always sits above the slide-in menu */}
          <button
            className={`kief-burger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ position: "relative", zIndex: 202 }}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* ── MOBILE MENU — slides in from right, starts BELOW nav bar ─── */}
      <div
        className={`kief-mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="kief-mobile-footer">Kief — From the Leaf, For the Life.</p>
      </div>
    </>
  );
}
