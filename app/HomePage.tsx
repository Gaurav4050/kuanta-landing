"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";
import VideoShowcase from "@/components/VideoShowcase";
import { COUNTRY_DATA, type Country } from "@/components/InteractiveGlobe";
import { useBookDemo } from "@/app/DemoModalProvider";

const InteractiveGlobe = dynamic(() => import("@/components/InteractiveGlobe"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", maxWidth: 420, aspectRatio: "1", borderRadius: "50%", background: "var(--k-bg-3)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-muted)", fontSize: "0.85rem" }}>Loading globe…</div>
  ),
});

/* ─── Static data ───────────────────────────────────────────── */
const VERTICALS = [
  { name:"SaaS / Software",         cat:"tech",    metrics:"37 metrics", desc:"Core digital business models" },
  { name:"Infrastructure / API",    cat:"tech",    metrics:"21 metrics", desc:"APIs, developer platforms" },
  { name:"Marketplace / Platform",  cat:"tech",    metrics:"28 metrics", desc:"Multi-sided platforms" },
  { name:"Fintech",                 cat:"tech",    metrics:"37 metrics", desc:"Financial technology" },
  { name:"Hardware / Deep Tech",    cat:"deeptech",metrics:"28 metrics", desc:"Capital-intensive, IP-driven" },
  { name:"Defense Tech",            cat:"deeptech",metrics:"57 metrics", desc:"Defense & security technology" },
  { name:"Robotics / Autonomous",   cat:"deeptech",metrics:"41 metrics", desc:"Automation & robotics systems" },
  { name:"Climate Tech / Clean Energy", cat:"deeptech", metrics:"44 metrics", desc:"Sustainable energy solutions" },
  { name:"Biotech / Life Sciences", cat:"health",  metrics:"24 metrics", desc:"Research & bioengineering" },
  { name:"Healthtech / Digital Health", cat:"health", metrics:"52 metrics", desc:"Regulated, evidence-driven" },
  { name:"Consumer / D2C",          cat:"consumer",metrics:"26 metrics", desc:"Revenue-driven brands" },
  { name:"Services / Consulting",   cat:"consumer",metrics:"28 metrics", desc:"Professional services" },
  { name:"Proptech / Real Estate",  cat:"consumer",metrics:"31 metrics", desc:"Asset-heavy real estate tech" },
  { name:"Edtech",                  cat:"consumer",metrics:"37 metrics", desc:"Learning & education platforms" },
  { name:"Agtech / Foodtech",       cat:"consumer",metrics:"37 metrics", desc:"Agriculture & food innovation" },
  { name:"Mobility / Logistics",    cat:"consumer",metrics:"34 metrics", desc:"Transport & supply chain" },
  { name:"Gaming",                  cat:"frontier",metrics:"30 metrics", desc:"Games & interactive media" },
  { name:"SpaceTech",               cat:"frontier",metrics:"25 metrics", desc:"Commercial space ventures" },
  { name:"Web3 / Blockchain",       cat:"frontier",metrics:"28 metrics", desc:"Decentralized technologies" },
  { name:"Sharia Compliance",       cat:"frontier",metrics:"Custom",     desc:"Islamic finance screening" },
  { name:"IP / Patent Evaluation",  cat:"frontier",metrics:"Custom",     desc:"IP matchmaking & assessment" },
];

const TICKER_ITEMS = [
  "Venture Capital","Corporate Innovation","SaaS · 37 Metrics","Defense Tech · 57 Metrics",
  "BioTech · 24 Metrics","Climate Tech · 44 Metrics","Healthtech · 52 Metrics",
  "Web3 · Blockchain","SpaceTech · 25 Metrics","Robotics · 41 Metrics","Fintech · 37 Metrics","AgriTech · 37 Metrics",
];

/* ─── Globe section (restructured) ────────────────────────── */
function GlobeSection() {
  const [selected, setSelected] = useState<Country>(COUNTRY_DATA[0]);
  const { open: openDemo } = useBookDemo();

  return (
    <section className="globe-section" id="global-reach">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 3rem" }}>
          <ScrollReveal><div className="section-label" style={{ display: "inline-flex" }}>Active Globally</div></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Active across <span className="accent">continents,<br/>markets & industries.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-sub" style={{ margin: "1rem auto 0" }}>
              Explore our startup coverage country by country. Drag the globe and click any dot to explore.
            </p>
          </ScrollReveal>
        </div>

        {/* ── ROW 1: Globe (left) + Selected Country (right) ── */}
        <div className="globe-row-1" style={{ marginBottom: "1.5rem" }}>
          {/* Globe */}
          <ScrollReveal>
            <div className="globe-container">
              <div className="globe-canvas-wrap">
                <InteractiveGlobe onSelect={setSelected} selectedCountry={selected} />
              </div>
            </div>
          </ScrollReveal>

          {/* Selected country card */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card globe-selected-card" style={{ height: "100%", minHeight: 360 }}>
              <div className="selected-country-header">
                <span className="selected-flag">{selected.flag}</span>
                <div style={{ flex: 1 }}>
                  <div className="selected-country-name">{selected.name}</div>
                  <div className="selected-country-sub">GDP: {selected.gdp}</div>
                </div>
                <div className="country-growth-badge">{selected.growth}</div>
              </div>

              <div className="selected-metric-grid">
                {[
                  { val: selected.startups,           lbl: "Startup Profiles" },
                  { val: selected.deals.toLocaleString(), lbl: "Deals Tracked" },
                  { val: `${selected.sectors.length} sectors`, lbl: "Active Sectors" },
                  { val: selected.growth,             lbl: "YoY Growth" },
                ].map(m => (
                  <div key={m.lbl} className="sel-metric">
                    <span className="sel-metric-val">{m.val}</span>
                    <span className="sel-metric-lbl">{m.lbl}</span>
                  </div>
                ))}
              </div>

              <div className="sel-sectors" style={{ marginBottom: "1.25rem" }}>
                {selected.sectors.map(s => <span key={s} className="sel-sector-tag">{s}</span>)}
              </div>

              {/* Quick actions */}
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                <button onClick={openDemo} className="btn-primary" style={{ fontSize: "0.82rem", padding: "0.5rem 1.25rem" }}>
                  Scout Startups in {selected.name.split(" ")[0]}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── ROW 2: Featured Markets list + Quick stats ── */}
        <div className="globe-row-2">
          {/* Featured markets */}
          <ScrollReveal>
            <div className="glass-card globe-markets-card">
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--t-muted)", marginBottom: "0.85rem" }}>
                Featured Markets — click to explore
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.4rem" }}>
                {COUNTRY_DATA.map(c => (
                  <div
                    key={c.name}
                    className={`globe-region-item${selected.name === c.name ? " active-region" : ""}`}
                    onClick={() => setSelected(c)}
                  >
                    <div className="region-info">
                      <span className="region-flag">{c.flag}</span>
                      <div>
                        <div className="region-name">{c.name}</div>
                        <div className="region-startups">{c.startups} startups</div>
                      </div>
                    </div>
                    <span className="region-growth">{c.growth}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick stats column */}
          <ScrollReveal delay={0.1}>
            <div className="globe-quick-stats">
              {[
                { num: "3.7M+", lbl: "Startup Profiles", icon: "🌐" },
                { num: "21",    lbl: "Sector Frameworks", icon: "📊" },
                { num: "17",    lbl: "Countries Active", icon: "📍" },
                { num: "80%",   lbl: "Time Saved",       icon: "⚡" },
              ].map(s => (
                <div key={s.lbl} className="gqs-item glass-card" style={{ borderRadius: 14, boxShadow: "var(--k-shadow)" }}>
                  <div style={{ fontSize: "1.5rem" }}>{s.icon}</div>
                  <div>
                    <div className="gqs-num">{s.num}</div>
                    <div className="gqs-lbl">{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Homepage ─────────────────────────────────────────── */
export default function HomePage() {
  const [activeFeature, setActiveFeature]   = useState(0);
  const [verticalFilter, setVerticalFilter] = useState("all");
  const { open: openDemo } = useBookDemo();

  const visibleVerticals = verticalFilter === "all"
    ? VERTICALS
    : VERTICALS.filter(v => v.cat === verticalFilter);

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 68, overflow: "hidden" }}>
        <div className="hero-gradient-mesh" />
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />

        <div className="container">
          <div style={{ textAlign: "center", paddingTop: "5rem", paddingBottom: "3.5rem", position: "relative", zIndex: 2 }}>
            {/* Announcement badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.38rem 1rem 0.38rem 0.55rem", background: "rgba(255,183,89,0.1)", border: "1.5px solid rgba(255,183,89,0.3)", borderRadius: 9999, fontSize: "0.82rem", fontWeight: 500, color: "var(--t-secondary)", marginBottom: "1.75rem" }}>
              <div style={{ width: 22, height: 22, background: "var(--grad-brand)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem" }}>⚡</div>
              <span style={{ background: "var(--grad-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700 }}>NEW</span>
              ·&nbsp;Benchmarking against 3.7M+ startups globally
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", fontWeight: 900, lineHeight: 1.04, letterSpacing: "-0.04em", marginBottom: "1.5rem", color: "var(--t-primary)" }}>
              Discover & Evaluate<br />
              <span style={{ background: "var(--grad-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Startups in Minutes,</span><br />
              Not Weeks.
            </h1>

            <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", color: "var(--t-secondary)", maxWidth: 620, margin: "0 auto 2.25rem", lineHeight: 1.75 }}>
              We help investors, corporates & public institutions discover & evaluate startups
              even without a pitch deck — benchmarked against 3.7M+ companies globally.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.85rem", flexWrap: "wrap" }}>
              <button onClick={openDemo} className="btn-primary">
                Book a Demo
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <Link href="/how-kuanta-works" className="btn-ghost">See How It Works</Link>
            </div>

            {/* Stats bar */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
              <div className="hero-stats-bar">
                {[
                  { num: "3.7M+", label: "Startup Profiles" },
                  { num: "8,500+", label: "Startups Analyzed" },
                  { num: "80%", label: "Time Saved" },
                  { num: "21", label: "Vertical Frameworks" },
                ].map(({ num, label }) => (
                  <div key={label} className="hero-stat">
                    <span className="hero-stat-number">{num}</span>
                    <span className="hero-stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", color: "var(--t-muted)", fontSize: "0.72rem", letterSpacing: "0.1em" }}>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, transparent, var(--k-amber), transparent)", animation: "ping 2s ease infinite" }} />
          scroll
        </div>
      </section>

      {/* ══════ TICKER ══════ */}
      <div className="ticker-strip">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item"><span className="ticker-dot" />{item}</span>
          ))}
        </div>
      </div>

      {/* ══════ PROBLEMS ══════ */}
      <section className="section" id="problems">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <ScrollReveal><div className="section-label">The Problem</div></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title">Startup volume has exploded.<br /><span className="accent">High potential slips through.</span></h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin: "1rem auto 0" }}>The old way of evaluating startups is slow, biased, and often misses the hidden gems.</p></ScrollReveal>
          </div>
          <div className="problem-grid" style={{ marginTop: "2.5rem" }}>
            {[
              { icon: "👁️‍🗨️", title: "Deals You Never See", desc: "Stale databases with inactive startups. Generic peers and irrelevant competition. Startups solving the same problem differently never show up." },
              { icon: "🔬", title: "Same Lens For Every Startup", desc: "A BioTech and AgriTech startup are different, but scored against the same generic SaaS frameworks — without stage-specific criteria or institutional rigor." },
              { icon: "📊", title: "Numbers Nobody Checks", desc: "Unreliable insights. Inflated metrics without cross-checking. Startups that don't exist in any registry — yet still pass through filters." },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="glass-card problem-card">
                  <div className="problem-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SOLUTION ══════ */}
      <section className="section" id="solution" style={{ background: "linear-gradient(180deg, transparent, rgba(255,183,89,0.02) 50%, transparent)" }}>
        <div className="container">
          <div className="solution-split">
            <div>
              <ScrollReveal><div className="section-label">The Solution</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Evaluate any startup<br /><span className="accent">instantly.</span></h2></ScrollReveal>
              <ScrollReveal delay={0.2}><p className="section-sub" style={{ marginTop: "1rem" }}>Even without a pitch deck — by benchmarking it against the most similar companies globally.</p></ScrollReveal>
              <div className="feature-list">
                {[
                  { icon: "✅", title: "Validate Metrics & Claims", desc: "We cross-check claims against latest news and developments in the market before you commit time to a deal." },
                  { icon: "🚩", title: "Interpret Highlights & Flags", desc: "We translate startup & market data into a clear view of risk, upsides and red flags with deep analysis." },
                  { icon: "⚡", title: "Benchmark Competitors", desc: "Benchmark every startup against thousands of similar companies instantly, revealing whether traction is strong for stage & market position." },
                ].map((f, i) => (
                  <ScrollReveal key={f.title} delay={i * 0.1}>
                    <div className={`feature-item${activeFeature === i ? " active" : ""}`} onClick={() => setActiveFeature(i)}>
                      <div className="feature-icon">{f.icon}</div>
                      <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="solution-panel">
                <div className="panel-header">
                  <div className="panel-dot r" /><div className="panel-dot y" /><div className="panel-dot g" />
                  <span className="panel-title">kuanta_evaluation.report</span>
                </div>
                {[
                  { label: "market_traction",   val: "87/100 ↑", pct: 87 },
                  { label: "team_strength",     val: "91/100 ↑", pct: 91 },
                  { label: "competitive_moat",  val: "74/100 →", pct: 74 },
                  { label: "revenue_growth",    val: "96/100 ↑", pct: 96 },
                ].map(({ label, val, pct }) => (
                  <div key={label} style={{ marginBottom: "0.8rem" }}>
                    <div className="panel-metric">
                      <span className="panel-metric-label">{label}</span>
                      <span className="panel-metric-value">{val}</span>
                    </div>
                    <div className="panel-score-bar"><div className="panel-score-fill" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
                <div style={{ marginTop: "1.25rem", padding: "0.9rem 1rem", background: "rgba(255,183,89,0.06)", border: "1.5px solid rgba(255,183,89,0.18)", borderRadius: 11 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--k-amber)", fontWeight: 700, marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Kuanta Verdict</div>
                  <div style={{ fontSize: "0.84rem", color: "var(--t-secondary)" }}>Strong outlier signal. Top 3% of stage-matched peers. Recommend fast-track review.</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ VIDEO SHOWCASE ══════ */}
      <VideoShowcase />

      {/* ══════ PRODUCTS ══════ */}
      <section className="section" id="products" style={{ background: "linear-gradient(180deg, transparent, rgba(0,48,73,0.02) 50%, transparent)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <ScrollReveal><div className="section-label">Core Products</div></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title">Built for <span className="accent">sophisticated investing.</span></h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin: "1rem auto 0" }}>Two powerful intelligence products. One unified platform.</p></ScrollReveal>
          </div>
          <div className="products-bento">
            <ScrollReveal className="bento-wide glass-card">
              <div className="product-label">⚡ Kuanta Core</div>
              <div className="product-name">VC-Grade Startup Evaluation</div>
              <div className="product-desc">Built for sophisticated users like VCs, corporates, and accelerators to analyze startups like a senior analyst — fast, unbiased, and fully documented.</div>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {["Validated Profiles","Deep Evaluations","Live Data Sources","Analyst Time Saved"].map(t => (
                  <span key={t} style={{ padding: "0.25rem 0.75rem", background: "rgba(255,183,89,0.07)", border: "1.5px solid rgba(255,183,89,0.18)", borderRadius: 9999, fontSize: "0.76rem", color: "var(--k-amber)", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <div className="comparison-block">
                {[
                  ["evaluation_speed","2–3 weeks","under 2 min"],
                  ["benchmarking","manual research","3.7M+ profiles auto"],
                  ["validation","gut instinct","cross-checked claims"],
                ].map(([lbl, old, nw]) => (
                  <div key={lbl} className="comp-row">
                    <span className="comp-label">{lbl}</span>
                    <span className="comp-old">{old}</span>
                    <span className="comp-arrow">→</span>
                    <span className="comp-new">{nw}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="bento-narrow glass-card" delay={0.1} style={{ background: "linear-gradient(135deg, rgba(255,183,89,0.04) 0%, rgba(0,48,73,0.03) 100%)" } as React.CSSProperties}>
              <div className="product-label" style={{ color: "var(--k-navy-mid, #004a73)" }}>🧠 Kuanta Intelligence</div>
              <div className="product-name">Premium Research Engine</div>
              <div className="product-desc">Proprietary vectorized knowledge model trained on exclusive intelligence. Built for advanced competitors, industry research, and market mapping.</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["300k+ industry intelligence chunks","RAG-powered contextual analysis","Real-time market intelligence","Strategy decks in minutes","API access for enterprise teams"].map(item => (
                  <li key={item} style={{ fontSize: "0.875rem", color: "var(--t-secondary)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "var(--k-amber)" }}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {[
              { icon: "🎯", title: "Vertical Playbooks", desc: "21 sector-specific frameworks with the right metrics for every startup type" },
              { icon: "🌍", title: "Global Coverage", desc: "USA, Europe, Asia, Middle East — active across continents, markets & industries" },
              { icon: "🔌", title: "API & White-label", desc: "Embed evaluation and scouting directly into your product in just weeks" },
            ].map((card, i) => (
              <ScrollReveal key={card.title} className="bento-third glass-card" delay={i * 0.1}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.65rem" }}>{card.icon}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--t-primary)", marginBottom: "0.45rem" }}>{card.title}</div>
                <div style={{ fontSize: "0.83rem", color: "var(--t-secondary)" }}>{card.desc}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ VERTICALS ══════ */}
      <section className="section" id="verticals">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 2rem" }}>
            <ScrollReveal><div className="section-label">Vertical Intelligence</div></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title">The right metrics for <span className="accent">every type</span> of startup.</h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin: "1rem auto 0" }}>A Robotics startup is not BioTech. Clean Energy is not SaaS. Kuanta knows the difference.</p></ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="verticals-tabs">
              {[
                { id: "all",      label: "All Verticals" },
                { id: "tech",     label: "Technology" },
                { id: "deeptech", label: "Deep Tech" },
                { id: "health",   label: "Life Sciences" },
                { id: "consumer", label: "Consumer" },
                { id: "frontier", label: "Frontier" },
              ].map(tab => (
                <button key={tab.id} className={`tab-btn${verticalFilter === tab.id ? " active" : ""}`} onClick={() => setVerticalFilter(tab.id)}>{tab.label}</button>
              ))}
            </div>
          </ScrollReveal>
          <div className="verticals-grid">
            {visibleVerticals.map((v, i) => (
              <div key={v.name} className="glass-card vertical-card" style={{ animation: `fade-up-card 0.4s ease ${i * 0.04}s both` }}>
                <div className="vertical-card-header">
                  <span className="vertical-name">{v.name}</span>
                  <span className="vertical-badge">{v.metrics}</span>
                </div>
                <p className="vertical-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHO WE SERVE ══════ */}
      <section className="section" id="who-we-serve" style={{ background: "linear-gradient(180deg, transparent, rgba(255,183,89,0.025) 50%, transparent)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <ScrollReveal><div className="section-label">Who We Serve</div></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title">Embedded into <span className="accent">your workflow.</span></h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin: "1rem auto 0" }}>Tailored to your priorities — whether you&apos;re a VC, university, government, or building a platform.</p></ScrollReveal>
          </div>
          <div className="segments-grid">
            {[
              { icon: "🏦", num: "01", title: "Venture Capital", desc: "Scout thesis-fit startups across 3.7M+ profiles with validated claims.", points: ["Thesis-fit scouting across 3.7M+ validated startup profiles","Stage-specific scoring, pre-seed to Series C","Competitive landscape with functional substitutes"] },
              { icon: "🏢", num: "02", title: "Corporate Innovation", desc: "Scout startups for strategic priorities across business units.", points: ["Strategic relevance matching per business unit","Supplier and partner scouting","Structured evaluation for CVC due diligence"] },
              { icon: "🎓", num: "03", title: "Universities", desc: "Evaluate student business plans with institutional-grade feedback.", points: ["Structured, explainable feedback students learn from","Batch evaluation for hundreds of submissions","Consistent judging across reviewers"] },
              { icon: "🏛️", num: "04", title: "Government & Grants", desc: "Screen grant applicants with evidence-based evaluation.", points: ["Auditable, structured grant qualification","Ecosystem scouting by region and sector","Outcome tracking for programme ROI"] },
              { icon: "🚀", num: "05", title: "Competitions & Accelerators", desc: "Evaluate applicants at intake with consistent, explainable scoring.", points: ["AI-scored intake across hundreds of applications","Cohort benchmarking against stage and sector peers","Explainable scoring that founders can act on"] },
              { icon: "🔌", num: "06", title: "Platforms & API", desc: "Embed evaluation and scouting directly into your product.", points: ["API and white-label integration in weeks","Evaluation and scouting embedded in your UX","Your brand, Kuanta&apos;s infrastructure underneath"] },
            ].map((seg, i) => (
              <ScrollReveal key={seg.title} delay={(i % 3) * 0.1}>
                <div className="glass-card segment-card">
                  <span className="segment-num">{seg.num}</span>
                  <div className="segment-icon-wrap">{seg.icon}</div>
                  <h3>{seg.title}</h3>
                  <p className="sub-desc">{seg.desc}</p>
                  <ul className="segment-checklist">{seg.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ GLOBE ══════ */}
      <GlobeSection />

      {/* ══════ HOW IT WORKS ══════ */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <ScrollReveal><div className="section-label">Process</div></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title">From input to <span className="accent">insight in minutes.</span></h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin: "1rem auto 0" }}>Kuanta&apos;s agentic AI runs the full evaluation stack so your team focuses on decisions, not research.</p></ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="how-steps">
              {[
                { n: "01 / 04", icon: "📥", title: "Submit Startup", desc: "Drop in a URL, pitch deck, or just a name. Kuanta finds the startup and begins data aggregation instantly." },
                { n: "02 / 04", icon: "🤖", title: "AI Analysis", desc: "Sector-specific agents validate claims, map competitors, and score against 252 curated metrics." },
                { n: "03 / 04", icon: "🔎", title: "Benchmarking", desc: "Vector embeddings find truly similar companies from 3.7M+ profiles — functionally similar, not just same-category." },
                { n: "04 / 04", icon: "📋", title: "Structured Report", desc: "Get a fully documented evaluation with highlights, red flags, competitive position, and an outlier verdict." },
              ].map(step => (
                <div key={step.n} className="how-step">
                  <span className="step-number">{step.n}</span>
                  <span className="step-icon">{step.icon}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/how-kuanta-works" className="btn-ghost">Deep-dive: How Kuanta Works →</Link>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <div className="section-label" style={{ display: "inline-flex", margin: "0 auto 1.25rem" }}>Ready to start?</div>
              <h2 className="section-title">Stop missing <span className="accent">outlier startups.</span></h2>
              <p className="section-sub" style={{ margin: "1rem auto 1.75rem" }}>Evaluate startups like a senior partner — in minutes. Join investors, corporates, and universities already using Kuanta.</p>
              <div className="cta-btns">
                <button onClick={openDemo} className="btn-primary">
                  Book a Demo
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <Link href="/investors" className="btn-ghost">For Investors →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
