"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// All nav CSS is in globals.css — NO <style> tag here.
// That was causing Next.js hydration mismatch (server vs client quote encoding).

const links = [
  { label: "What is Kief", href: "/what-is-kief" },
  { label: "Hemp",         href: "/hemp" },
  { label: "Store",        href: "/store" },
  { label: "Community",    href: "/community" },
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

          {/* Logo — original colours, no filter */}
          <Link href="/" aria-label="Kief Home">
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

          {/* Hamburger — always visible on mobile */}
          <button
            className={`kief-burger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* ── MOBILE MENU ──────────────────────────────────────────────── */}
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
