"use client";
import { useEffect } from "react";
import { useBookDemo } from "@/app/DemoModalProvider";

export default function BookDemoModal() {
  const { isOpen, close } = useBookDemo();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0, 30, 50, 0.7)",
          backdropFilter: "blur(8px)",
          animation: "fade-in-backdrop 0.2s ease",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "relative", zIndex: 1,
        width: "100%", maxWidth: 680,
        background: "var(--k-card-bg)",
        border: "1.5px solid var(--k-border)",
        borderRadius: 24,
        boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
        overflow: "hidden",
        animation: "modal-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.25rem 1.75rem",
          borderBottom: "1.5px solid var(--k-border)",
          background: "var(--k-surface)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "var(--k-amber, #FFB759)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.9rem",
            }}>📅</div>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--t-primary)", lineHeight: 1.2 }}>Book a Demo</div>
              <div style={{ fontSize: "0.78rem", color: "var(--t-muted)" }}>30 minutes · Free · No commitment</div>
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: "var(--k-surface)",
              border: "1.5px solid var(--k-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--t-muted)", fontSize: "1.1rem",
              cursor: "pointer", transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
          >✕</button>
        </div>

        {/* Calendly iframe */}
        <div style={{ position: "relative", height: 520 }}>
          <iframe
            src="https://calendly.com/riticka-kuanta/30min?embed_domain=kuanta.ai&embed_type=Inline&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a demo with Kuanta"
            style={{ display: "block", border: "none" }}
          />
          {/* Loading fallback state shown behind iframe */}
          <div style={{
            position: "absolute", inset: 0, display: "flex",
            alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "0.75rem",
            color: "var(--t-muted)", fontSize: "0.9rem", zIndex: -1,
          }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2.5px solid var(--k-border)", borderTopColor: "var(--k-amber, #FFB759)", animation: "spin-slow 0.8s linear infinite" }} />
            Loading calendar…
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-backdrop { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-enter { from { opacity: 0; transform: scale(0.96) translateY(16px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
