import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Kuanta Works | Data Ecosystem & AI Architecture",
  description: "Kuanta is built on a proprietary foundation — a vectorized reasoning engine trained on over 700,000 startups, premium data sources, and localized industry intelligence.",
};

export default function HowKuantaWorksPage() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <div style={{ position:"relative", zIndex:1 }}>
        {/* Hero */}
        <section className="page-hero">
          <div className="orb orb-1" /><div className="orb orb-2" />
          <div className="container">
            <ScrollReveal><div className="section-label" style={{ display:"inline-flex" }}>The Technology</div></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="section-title" style={{ marginBottom:"1rem" }}>
                Built on a <span className="accent">proprietary<br/>intelligence engine.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-sub" style={{ margin:"0 auto" }}>
                Most analysis platforms rely on generic models. Kuanta is built on a proprietary foundation — a vectorized reasoning engine trained on over 700,000 startups, premium data sources, and localized industry intelligence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Data Ecosystem */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Data Ecosystem</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Our data ecosystem — <span className="accent">the numbers that matter.</span></h2></ScrollReveal>
            </div>
            <div className="data-ecosystem-grid">
              {[
                { num:"700K+", title:"Startup Profiles", desc:"Complete ecosystem mapping across global markets — from emerging markets to Silicon Valley disruptors. Every startup is converted into advanced vector embeddings for accurate and contextual competitor matching." },
                { num:"300K+", title:"Industry Intelligence Chunks", desc:"Real-time market intelligence from the latest industry reports, research papers, and market analysis — all vectorized and instantly searchable. This isn&apos;t static data; it&apos;s living intelligence that updates with market movements." },
                { num:"🌍", title:"Global Market Coverage", desc:"Strategic intelligence across continents — gain insights with coverage spanning emerging markets and global players. Our platform curates intelligence through expert analysis, real-time data, and ground signals." },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 0.1}>
                  <div className="glass-card ecosystem-card">
                    <span className="ecosystem-num">{card.num}</span>
                    <h3>{card.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: card.desc }} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What is a chunk */}
        <section className="section" style={{ background:"linear-gradient(180deg,transparent,rgba(0,229,255,0.02) 50%,transparent)" }}>
          <div className="container">
            <div style={{ maxWidth:820, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Core Concept</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title" style={{ marginBottom:"1rem" }}>What is a <span className="accent">&quot;chunk&quot;?</span></h2></ScrollReveal>
              <ScrollReveal delay={0.2}><p style={{ color:"#8b9cbf", fontSize:"1rem", lineHeight:1.8, marginBottom:"2rem" }}>Chunks are processed segments of content extracted from high-quality industry reports — cleansed, structured, and semantically embedded for richer AI understanding.</p></ScrollReveal>
            </div>
            <div className="chunk-features">
              {[
                { label:"Contextually Enriched", title:"Cleansed & Structured", desc:"Segments extracted from real-world industry data, cleaned and normalized for AI consumption." },
                { label:"Semantically Embedded", title:"Deep Vector Embeddings", desc:"Converted using domain-tuned LLMs for richer understanding beyond surface-level keyword matching." },
                { label:"Source-Linked", title:"Auditable & Trustworthy", desc:"Each chunk is traceable to its original source or report — built for auditability and trust in enterprise environments." },
              ].map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 0.1}>
                  <div className="glass-card chunk-feature">
                    <div className="chunk-feature-label">{f.label}</div>
                    <div className="chunk-feature-title">{f.title}</div>
                    <p>{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">The Kuanta Difference</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Traditional AI vs. <span className="accent">Kuanta&apos;s approach.</span></h2></ScrollReveal>
            </div>
            <div className="comparison-split">
              <ScrollReveal>
                <div className="glass-card compare-panel old">
                  <h3>Traditional AI Platform</h3>
                  <div className="compare-flow">
                    {["Generic LLM (GPT wrapper)","Basic surface-level analysis","Limited, generic insight","High hallucination risk","No auditability"].map(s => (
                      <div key={s} className="compare-step">{s}</div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="glass-card compare-panel new">
                  <h3>Kuanta&apos;s Approach</h3>
                  <div className="compare-flow">
                    {["Proprietary dataset + VC-tuned reasoning","Contextual intelligence with real data","Actionable, explainable outputs","Evidence-backed — no hallucination","Full source traceability"].map(s => (
                      <div key={s} className="compare-step">{s}</div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why scale matters */}
        <section className="section" style={{ background:"linear-gradient(180deg,transparent,rgba(139,92,246,0.03) 50%,transparent)" }}>
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Why Scale Matters</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">700K+ Startups = <span className="accent">Better pattern recognition.</span></h2></ScrollReveal>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1.25rem", marginTop:"3rem" }}>
              {[
                { icon:"🎯", title:"Spotting Outliers Early", desc:"Even pre-unicorns. Our AI understands patterns across the global startup ecosystem at a scale that enables early signal detection." },
                { icon:"✅", title:"True Market Fit Analysis", desc:"No false positives. Vector similarity means we find functionally similar companies — not just same-category noise." },
                { icon:"📡", title:"Prediction from Real Signals", desc:"Not speculation. Real investment trends, actual business performance data, and vetted market intelligence." },
                { icon:"🌐", title:"Context-Aware Analysis", desc:"Every recommendation is backed by 300K+ industry data points, ensuring insights that align with current market conditions." },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={(i % 2) * 0.1}>
                  <div className="glass-card" style={{ padding:"2rem", display:"flex", gap:"1.25rem", alignItems:"flex-start" }}>
                    <div style={{ fontSize:"1.75rem", flexShrink:0 }}>{card.icon}</div>
                    <div>
                      <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1rem", fontWeight:600, color:"#f0f4ff", marginBottom:"0.4rem" }}>{card.title}</h3>
                      <p style={{ fontSize:"0.875rem", color:"#8b9cbf", lineHeight:1.65 }}>{card.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Technical Architecture</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Kuanta blends <span className="accent">AI-native insight<br/>with human-level research depth.</span></h2></ScrollReveal>
            </div>
            <div className="tech-stack">
              {[
                { title:"Unified Knowledge Engine", items:["700k+ startup profiles (India + global)","300k+ research content chunks","Structured, searchable, and semantically ranked"] },
                { title:"LLM + RAG (Retrieval-Augmented Generation)", items:["Answers grounded in real documents","Not just smart guesses — evidence-backed reasoning","Domain-tuned models for venture intelligence"] },
                { title:"Relevance Scoring + Explainability", items:["Every result is ranked by contextual relevance","Full reasoning transparency — why this result?","Auditable for enterprise compliance needs"] },
                { title:"Enterprise-Grade Use Cases", items:["Market mapping & competitor benchmarking","Strategy decks generation in minutes","Due diligence prep — not hours, minutes"] },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={(i % 2) * 0.1}>
                  <div className="glass-card tech-card">
                    <h4>{card.title}</h4>
                    <ul>
                      {card.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-banner">
          <div className="container">
            <ScrollReveal>
              <div className="cta-inner">
                <div className="section-label" style={{ display:"inline-flex", margin:"0 auto 1.5rem" }}>See It In Action</div>
                <h2 className="section-title">Experience the difference<br/><span className="accent">firsthand.</span></h2>
                <p className="section-sub" style={{ margin:"1rem auto 2rem" }}>See how Kuanta&apos;s proprietary intelligence engine evaluates startups faster and more accurately than anything else on the market.</p>
                <div className="cta-btns">
                  <a href="https://calendly.com/riticka-kuanta/30min" className="btn-primary">
                    Book a Demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <Link href="/investors" className="btn-ghost">For Investors →</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
