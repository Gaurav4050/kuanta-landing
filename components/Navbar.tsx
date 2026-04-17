"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/ThemeProvider";
import { useBookDemo } from "@/app/DemoModalProvider";

const NAV_LINKS = [
  { href: "/how-kuanta-works", label: "How Kuanta Works" },
  { href: "/investors", label: "Investors" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { open: openDemo } = useBookDemo();
  const isDark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <CursorGlow />

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        padding: "0 1.5rem",
        height: scrolled ? "60px" : "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled ? "var(--k-nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1.5px solid var(--k-border)" : "none",
        boxShadow: scrolled ? "var(--k-shadow)" : "none",
      }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/kuanta.svg"
            alt="Kuanta"
            width={110}
            height={30}
            style={{ objectFit: "contain", height: 28, width: "auto", display: "block" }}
            priority
          />
        </Link>

        {/* ── Desktop nav ── */}
        <ul style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none", margin: 0 }} className="k-desktop-nav">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                padding: "0.45rem 0.9rem", fontSize: "0.875rem", fontWeight: 500,
                borderRadius: 9999, transition: "all 0.2s ease", display: "block",
                color: pathname === href ? "var(--k-amber)" : "var(--t-secondary)",
                background: pathname === href ? "rgba(255,183,89,0.08)" : "transparent",
                fontFamily: "'Inter', sans-serif",
              }}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop actions ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="k-desktop-actions">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: 36, height: 36, borderRadius: 9,
              background: "var(--k-surface)", border: "1.5px solid var(--k-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", cursor: "pointer", color: "var(--t-secondary)",
              transition: "all 0.25s ease", fontFamily: "inherit",
            }}
          >{isDark ? "☀️" : "🌙"}</button>

          <a href="https://app.kuanta.ai" style={{
            padding: "0.42rem 1.1rem", border: "1.5px solid var(--k-border)",
            borderRadius: 9999, fontSize: "0.85rem", fontWeight: 500, color: "var(--t-secondary)",
            transition: "all 0.25s ease", background: "var(--k-surface)",
            fontFamily: "'Inter', sans-serif",
          }}>Login</a>

          <button
            onClick={openDemo}
            className="btn-primary"
            style={{ padding: "0.48rem 1.3rem", fontSize: "0.85rem" }}
          >Book a Demo</button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="k-hamburger"
            aria-label="Open menu"
            style={{ display: "none", flexDirection: "column", gap: 5, padding: 4, cursor: "pointer", background: "none", border: "none" }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ width: 22, height: 2, background: "var(--t-secondary)", borderRadius: 2, display: "block" }} />
            ))}
          </button>
        </div>
      </header>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0, 30, 50, 0.5)", backdropFilter: "blur(4px)",
          zIndex: 9998,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Mobile drawer ── */}
      <nav style={{
        position: "fixed", top: 0, right: mobileOpen ? 0 : "-100%",
        width: "min(300px, 85vw)", height: "100dvh",
        background: "var(--k-bg)", borderLeft: "1.5px solid var(--k-border)",
        zIndex: 9999, transition: "right 0.35s cubic-bezier(0.16,1,0.3,1)",
        padding: "4.5rem 1.5rem 2rem", display: "flex", flexDirection: "column", gap: 4,
        boxShadow: "-8px 0 32px rgba(0,0,0,0.12)", overflowY: "auto",
      }}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{ position: "absolute", top: "1rem", right: "1rem", width: 34, height: 34, borderRadius: 8, background: "var(--k-surface)", border: "1.5px solid var(--k-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-muted)", fontSize: "1.1rem", cursor: "pointer", fontFamily: "inherit" }}
        >✕</button>

        {/* Mobile logo in drawer */}
        <div style={{ marginBottom: "0.75rem" }}>
          <Image src="/kuanta-logo-white.png" alt="Kuanta" width={100} height={28} style={{ height: 24, width: "auto", objectFit: "contain", display: "block" }} />
        </div>

        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{
            padding: "0.8rem 1rem", borderRadius: 12,
            color: pathname === href ? "var(--k-amber)" : "var(--t-secondary)",
            fontSize: "0.92rem", fontWeight: 500,
            background: pathname === href ? "rgba(255,183,89,0.07)" : "transparent",
            border: "1.5px solid transparent", transition: "all 0.2s",
            fontFamily: "'Inter', sans-serif",
          }}>{label}</Link>
        ))}

        <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            onClick={toggle}
            style={{ padding: "0.8rem", border: "1.5px solid var(--k-border)", borderRadius: 9999, background: "var(--k-surface)", color: "var(--t-secondary)", textAlign: "center", fontSize: "0.9rem", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
          >{isDark ? "☀️  Light Mode" : "🌙  Dark Mode"}</button>

          <a href="https://app.kuanta.ai" style={{ padding: "0.8rem", border: "1.5px solid var(--k-border)", borderRadius: 9999, color: "var(--t-secondary)", textAlign: "center", background: "var(--k-surface)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>Login</a>

          <button
            onClick={() => { setMobileOpen(false); openDemo(); }}
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
          >Book a Demo</button>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) { .k-desktop-nav { display: none !important; } }
        @media (max-width: 640px) {
          .k-desktop-actions a,
          .k-desktop-actions button:not(.k-hamburger) { display: none !important; }
          .k-hamburger { display: flex !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .k-desktop-actions > a:first-child { display: none !important; }
          .k-hamburger { display: flex !important; }
          .k-desktop-actions button.btn-primary { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function CursorGlow() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.cssText = "position:fixed;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(255,183,89,0.04) 0%,transparent 70%);pointer-events:none;z-index:0;left:-200px;top:-200px;transition:left 0.08s ease,top 0.08s ease;";
    document.body.appendChild(el);
    const fn = (e: MouseEvent) => { el.style.left = e.clientX - 140 + "px"; el.style.top = e.clientY - 140 + "px"; };
    window.addEventListener("mousemove", fn);
    return () => { window.removeEventListener("mousemove", fn); document.body.contains(el) && document.body.removeChild(el); };
  }, []);
  return null;
}
