"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useBookDemo } from "@/app/DemoModalProvider";

const VIDEOS = [
  {
    id: "evaluation",
    label: "⚡ Evaluation",
    title: "Kuanta Core — Startup Evaluation",
    desc: "See how Kuanta analyzes any startup in under 2 minutes, benchmarking it against 3.7M+ global profiles with validated claims, red-flag detection, and outlier scoring.",
    features: ["Validated Claims", "Competitor Benchmarking", "Risk Flags", "Outlier Score"],
    tagline: "Kuanta Core",
    headline: "Analyse any startup in under 2 minutes.",
    body: "Drop in a name, URL, or upload a deck. Kuanta's AI agents run the full evaluation stack — validation, benchmarking, and scoring — so your team focuses on decisions, not research.",
    steps: [
      { icon: "📥", label: "Drop in startup URL or name" },
      { icon: "🤖", label: "AI agents gather & validate data" },
      { icon: "📊", label: "Benchmark against 3.7M+ profiles" },
      { icon: "📋", label: "Structured report with verdict" },
    ],
  },
  {
    id: "scouting",
    label: "🔍 Scouting",
    title: "Kuanta Intelligence — Startup Scouting",
    desc: "Watch how Kuanta actively scouts thesis-fit startups across continents, using vector similarity to surface companies you'd never find through traditional databases.",
    features: ["Thesis-Fit Matching", "Global Scouting", "Industry Intelligence", "API Access"],
    tagline: "Kuanta Intelligence",
    headline: "Scout thesis-fit startups globally.",
    body: "Define what you're looking for. Kuanta searches across 3.7M+ validated profiles using vector similarity — finding startups that are functionally similar, not just same-category noise.",
    steps: [
      { icon: "🎯", label: "Define your investment thesis" },
      { icon: "🌍", label: "Scout across 3.7M+ startups" },
      { icon: "🔬", label: "Score by vector similarity" },
      { icon: "📤", label: "Export list with full profiles" },
    ],
  },
];

export default function VideoShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { open: openDemo } = useBookDemo();
  const v = VIDEOS[active];

  const switchTab = (i: number) => { setActive(i); setPlaying(false); };

  return (
    <section className="video-section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <ScrollReveal><div className="section-label" style={{ display: "inline-flex" }}>See It In Action</div></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              From zero to insight — <span className="accent">watch it live.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-sub" style={{ margin: "1rem auto 0" }}>
              Two powerful workflows. See exactly how Kuanta evaluates and scouts startups in real time.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab switcher */}
        <ScrollReveal delay={0.1}>
          <div className="video-tabs">
            {VIDEOS.map((vid, i) => (
              <button key={vid.id} className={`video-tab${active === i ? " active" : ""}`} onClick={() => switchTab(i)}>
                {vid.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="video-grid-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "center" }}>
          {/* Left: video player */}
          <ScrollReveal>
            <div className="glass-card video-card">
              {/* Animated demo preview */}
              <div style={{ position: "relative", aspectRatio: "16/9", background: "linear-gradient(145deg, var(--k-bg-3), var(--k-bg-2))", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "80%", maxWidth: 320 }}>
                    {/* Mock terminal */}
                    <div style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(16px)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", padding: "1.1rem", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                      <div style={{ display: "flex", gap: 5, marginBottom: "0.75rem" }}>
                        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                        <span style={{ marginLeft: 7, fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", fontFamily: "'JetBrains Mono',monospace" }}>{v.id === "evaluation" ? "kuanta_evaluate.ai" : "kuanta_scout.ai"}</span>
                      </div>
                      {v.steps.map((step, i) => (
                        <div key={i} style={{
                          display: "flex", alignItems: "center", gap: "0.55rem",
                          padding: "0.45rem 0.55rem", borderRadius: 8, marginBottom: "0.35rem",
                          background: i === 1 ? "rgba(255,183,89,0.15)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${i === 1 ? "rgba(255,183,89,0.3)" : "rgba(255,255,255,0.05)"}`,
                        }}>
                          <span style={{ fontSize: "0.85rem" }}>{step.icon}</span>
                          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", fontFamily: "'JetBrains Mono',monospace" }}>{step.label}</span>
                          {i === 1 && <div style={{ marginLeft: "auto", width: 7, height: 7, borderRadius: "50%", background: "#28c840", animation: "pulse-dot 1.2s ease infinite" }} />}
                        </div>
                      ))}
                      {/* Score bar */}
                      <div style={{ marginTop: "0.6rem", padding: "0.55rem", background: "rgba(255,183,89,0.1)", borderRadius: 8, border: "1px solid rgba(255,183,89,0.25)" }}>
                        <div style={{ fontSize: "0.66rem", color: "rgba(255,183,89,0.9)", fontFamily: "'JetBrains Mono',monospace", marginBottom: "0.25rem" }}>kuanta_score</div>
                        <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
                          <div style={{ width: "87%", height: "100%", background: "linear-gradient(90deg, #FFB759, #e8963a)", borderRadius: 2, animation: "grow-bar 2s ease 0.5s both" }} />
                        </div>
                        <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem", textAlign: "right" }}>87/100 — Top 4% globally</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play overlay */}
                {!playing && (
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem", background: "rgba(0,0,0,0.15)", backdropFilter: "blur(2px)" }}>
                    <button className="play-btn" onClick={() => setPlaying(true)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5l13 7-13 7V5z"/></svg>
                    </button>
                    <span className="video-label">{v.title}</span>
                  </div>
                )}
                {playing && (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.65rem", background: "rgba(0,0,0,0.55)" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2.5px solid rgba(255,255,255,0.25)", borderTopColor: "#FFB759", animation: "spin-slow 0.8s linear infinite" }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>Loading demo video…</span>
                    <button onClick={() => setPlaying(false)} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", cursor: "pointer", background: "none", border: "none", fontFamily: "inherit" }}>Cancel</button>
                  </div>
                )}
              </div>

              {/* Info below video */}
              <div className="video-info">
                <div className="video-title">{v.title}</div>
                <div className="video-desc">{v.desc}</div>
                <div className="video-features">
                  {v.features.map(f => <span key={f} className="video-feature">{f}</span>)}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ScrollReveal delay={0.1}>
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--k-amber)", marginBottom: "0.65rem" }}>
                  {v.id === "evaluation" ? "⚡" : "🔍"} {v.tagline}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--t-primary)", marginBottom: "0.65rem", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
                  {v.headline}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--t-secondary)", lineHeight: 1.7 }}>{v.body}</p>
              </div>
            </ScrollReveal>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {v.steps.map((step, i) => (
                <ScrollReveal key={i} delay={0.05 * i}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", padding: "0.8rem 1rem", background: "var(--k-surface)", border: "1.5px solid var(--k-border)", borderRadius: 12, transition: "all 0.2s" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,183,89,0.08)", border: "1.5px solid rgba(255,183,89,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{step.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "var(--t-muted)", fontFamily: "'JetBrains Mono', monospace", marginBottom: "0.1rem" }}>step {String(i + 1).padStart(2, "0")}</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--t-primary)" }}>{step.label}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <button onClick={openDemo} className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Watch Live Demo
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grow-bar { from{width:0%} to{width:87%} }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}
