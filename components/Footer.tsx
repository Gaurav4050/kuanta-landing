"use client";
import Link from "next/link";
import Image from "next/image";
import { useBookDemo } from "@/app/DemoModalProvider";
import { useTheme } from "@/app/ThemeProvider";

export default function Footer() {
  const { open: openDemo } = useBookDemo();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer style={{
      background: isDark
        ? "linear-gradient(180deg, #030712 0%, #050d1a 40%, #020810 100%)"
        : "var(--k-bg)",
      borderTop: isDark ? "none" : "1.5px solid var(--k-border)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Dark mode decorative gradient bar at top */}
      {isDark && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent 0%, #FFB759 30%, #00e5ff 70%, transparent 100%)",
          opacity: 0.4,
        }} />
      )}
      {/* Dark mode ambient glow orbs */}
      {isDark && (
        <>
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,183,89,0.05) 0%, transparent 70%)", top: -150, left: -100, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)", bottom: -100, right: -50, pointerEvents: "none" }} />
        </>
      )}

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Top padding block ── */}
        <div style={{ paddingTop: "3.5rem" }}>
          <div className="footer-grid">

            {/* ── Brand Column ── */}
            <div className="footer-brand">
              <Link href="/" style={{ display: "inline-block", marginBottom: "1.1rem" }}>
                <Image
                  src="/kuanta.svg"
                  alt="Kuanta"
                  width={130}
                  height={34}
                  style={{
                    height: 30, width: "auto", objectFit: "contain", display: "block",
                    /* In light mode the logo is white — keep as-is, user will handle a dark version */
                  }}
                />
              </Link>
              <p style={{
                color: isDark ? "rgba(255,255,255,0.45)" : "var(--t-secondary)",
                fontSize: "0.85rem", lineHeight: 1.75, maxWidth: 260, margin: "0 0 1.1rem",
              }}>
                An agentic AI research and evaluation platform. Validating, benchmarking, and scouting startups globally.
              </p>

              {/* Locations */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.1rem" }}>
                <span style={{ fontSize: "0.78rem", color: isDark ? "rgba(255,255,255,0.3)" : "var(--t-muted)" }}>🇳🇱 Netherlands</span>
                <span style={{ color: isDark ? "rgba(255,255,255,0.15)" : "var(--k-border)" }}>·</span>
                <span style={{ fontSize: "0.78rem", color: isDark ? "rgba(255,255,255,0.3)" : "var(--t-muted)" }}>🇸🇬 Singapore</span>
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {[
                  { label: "in", title: "LinkedIn" },
                  { label: "𝕏", title: "X / Twitter" },
                ].map(s => (
                  <a key={s.label} href="#" aria-label={s.title} style={{
                    width: 34, height: 34, borderRadius: 9,
                    background: isDark ? "rgba(255,255,255,0.06)" : "var(--k-surface)",
                    border: isDark ? "1.5px solid rgba(255,255,255,0.1)" : "1.5px solid var(--k-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.8rem",
                    color: isDark ? "rgba(255,255,255,0.45)" : "var(--t-muted)",
                    transition: "all 0.25s ease", textDecoration: "none",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#FFB759"; e.currentTarget.style.color = "#FFB759"; }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "var(--k-border, rgba(0,48,73,0.1))";
                      e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.45)" : "var(--t-muted, #7a9bb0)";
                    }}>{s.label}</a>
                ))}
              </div>
            </div>

            {/* ── Platform ── */}
            <div>
              <h4 style={{
                fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                color: isDark ? "rgba(255,255,255,0.25)" : "var(--t-muted)",
                marginBottom: "1.1rem",
              }}>Platform</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { href: "/how-kuanta-works", label: "How Kuanta Works" },
                  { href: "/#products", label: "Kuanta Core" },
                  { href: "/#products", label: "Kuanta Intelligence" },
                  { href: "/#verticals", label: "Verticals" },
                  { href: "https://app.kuanta.ai", label: "Login", ext: true },
                ].map(l => (
                  <li key={l.label}>
                    <FooterLink href={l.href} isDark={isDark} ext={l.ext}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Company ── */}
            <div>
              <h4 style={{
                fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                color: isDark ? "rgba(255,255,255,0.25)" : "var(--t-muted)",
                marginBottom: "1.1rem",
              }}>Company</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/investors", label: "Investors" },
                  { href: "/blog", label: "Blog" },
                ].map(l => (
                  <li key={l.label}>
                    <FooterLink href={l.href} isDark={isDark}>{l.label}</FooterLink>
                  </li>
                ))}
                <li>
                  <button onClick={openDemo} style={{
                    fontSize: "0.85rem",
                    color: isDark ? "rgba(255,255,255,0.45)" : "var(--t-secondary)",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    fontFamily: "'Inter',sans-serif", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FFB759")}
                    onMouseLeave={e => (e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.45)" : "var(--t-secondary, #2a5570)")}>
                    Book a Demo
                  </button>
                </li>
              </ul>
            </div>

            {/* ── Legal + CTA ── */}
            <div>
              <h4 style={{
                fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                color: isDark ? "rgba(255,255,255,0.25)" : "var(--t-muted)",
                marginBottom: "1.1rem",
              }}>Legal</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1.5rem" }}>
                {[
                  { href: "/privacy#privacy", label: "Privacy Policy" },
                  { href: "/privacy#t-c", label: "Terms of Service" },
                ].map(l => (
                  <li key={l.label}>
                    <FooterLink href={l.href} isDark={isDark}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>

              {/* Mini CTA */}
              <div style={{
                padding: "1.1rem",
                background: isDark ? "rgba(255,183,89,0.07)" : "rgba(255,183,89,0.08)",
                border: "1.5px solid rgba(255,183,89,0.2)",
                borderRadius: 14,
              }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFB759", marginBottom: "0.4rem" }}>
                  Ready to try Kuanta?
                </div>
                <button onClick={openDemo} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  padding: "0.45rem 1rem", borderRadius: 9999,
                  background: "linear-gradient(135deg, #FFB759 0%, #e8963a 100%)",
                  color: "#fff", fontSize: "0.8rem", fontWeight: 600,
                  cursor: "pointer", border: "none", fontFamily: "'Inter',sans-serif",
                  boxShadow: "0 4px 14px rgba(255,183,89,0.4)", transition: "all 0.25s ease",
                }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,183,89,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,183,89,0.4)")}
                >Book a Demo →</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.25rem 0",
          borderTop: isDark ? "1.5px solid rgba(255,255,255,0.06)" : "1.5px solid var(--k-border)",
          marginTop: "2.5rem",
          flexWrap: "wrap", gap: "0.75rem",
        }}>
          <span style={{ fontSize: "0.78rem", color: isDark ? "rgba(255,255,255,0.25)" : "var(--t-muted)" }}>
            © {new Date().getFullYear()} Kuanta B.V. · All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {[
              { href: "/privacy#privacy", label: "Privacy Policy" },
              { href: "/privacy#t-c", label: "Terms of Service" },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{
                fontSize: "0.78rem",
                color: isDark ? "rgba(255,255,255,0.25)" : "var(--t-muted)",
                textDecoration: "none", transition: "color 0.2s",
              }}>{l.label}</Link>
            ))}
          </div>
          <span style={{ fontSize: "0.75rem", color: isDark ? "rgba(255,255,255,0.18)" : "var(--t-muted)", opacity: 0.7 }}>
            🇳🇱 NL · 🇸🇬 SG
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ── Reusable themed link ── */
function FooterLink({ href, children, isDark, ext }: { href: string; children: React.ReactNode; isDark: boolean; ext?: boolean }) {
  const base: React.CSSProperties = {
    fontSize: "0.85rem",
    color: isDark ? "rgba(255,255,255,0.45)" : "var(--t-secondary)",
    textDecoration: "none", transition: "color 0.2s", display: "inline-block",
  };
  const handlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#FFB759"),
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.45)" : "var(--t-secondary, #2a5570)"),
  };
  if (ext) return <a href={href} style={base} {...handlers}>{children}</a>;
  return <Link href={href} style={base} {...handlers as Record<string, unknown>}>{children}</Link>;
}
