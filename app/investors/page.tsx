import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors | Kuanta — AI-Powered Venture Intelligence",
  description: "Kuanta helps VCs, accelerators, corporates & universities analyze startups and navigate industries with the speed and clarity of a senior partner — at scale.",
};

export default function InvestorsPage() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <div style={{ position:"relative", zIndex:1 }}>
        {/* Hero */}
        <section className="page-hero">
          <div className="orb orb-1" /><div className="orb orb-2" />
          <div className="container">
            <ScrollReveal><div className="section-label" style={{ display:"inline-flex" }}>For Investors</div></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="section-title" style={{ marginBottom:"1rem" }}>
                Analyze startups like a<br/><span className="accent">senior partner — at scale.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-sub" style={{ margin:"0 auto 2rem" }}>
                Kuanta helps VCs, accelerators, corporates, and universities analyze startups and navigate industries with the speed, clarity, and consistency of a senior partner — at scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
                <a href="https://calendly.com/riticka-kuanta/30min" className="btn-primary">
                  Book Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <Link href="/how-kuanta-works" className="btn-ghost">How It Works →</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Problems */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">The Problem</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Modern investment decisions need more than <span className="accent">intuition.</span></h2></ScrollReveal>
              <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin:"1rem auto 0" }}>Manual triage, analyst bottlenecks, subjective bets, and scattered research are slowing innovation.</p></ScrollReveal>
            </div>
            <div className="problem-grid" style={{ marginTop:"3rem" }}>
              {[
                { icon:"📥", title:"Deal Flow Overload", desc:"Analysts are drowning in decks — missing winners and wasting time on weak fits that don't match thesis." },
                { icon:"🎲", title:"Gut-Based Calls", desc:"Manual decisions don't scale. Junior analysts often lack the seasoned perspective of senior partners." },
                { icon:"📂", title:"Fragmented Research", desc:"Critical insight is buried in PDFs or siloed across teams — slow, static, and hard to action in real time." },
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

        {/* Solutions */}
        <section className="section" style={{ background:"linear-gradient(180deg,transparent,rgba(0,229,255,0.02) 50%,transparent)" }}>
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Our Solutions</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Two problems. <span className="accent">One platform.</span></h2></ScrollReveal>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem", marginTop:"3rem" }}>
              <ScrollReveal>
                <div className="glass-card" style={{ padding:"2.5rem" }}>
                  <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#00e5ff", marginBottom:"1rem" }}>⚡ EVALUATION ENGINE</div>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.3rem", fontWeight:700, color:"#f0f4ff", marginBottom:"0.5rem" }}>For VCs, Accelerators, Universities</h3>
                  <p style={{ fontSize:"0.875rem", color:"#8b9cbf", lineHeight:1.75, marginBottom:"1.25rem" }}>Analyze based on your own custom rulebook. Evaluate hundreds of decks in minutes.</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                    {["Analyze hundreds of decks in minutes","Back every call with structured logic and relevant research","Spot red flags and surface hidden outliers","Share actionable feedback instantly"].map(pt => (
                      <li key={pt} style={{ fontSize:"0.875rem", color:"#8b9cbf", display:"flex", gap:"0.5rem" }}>
                        <span style={{ color:"#00e5ff", flexShrink:0 }}>✓</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="glass-card" style={{ padding:"2.5rem", background:"linear-gradient(135deg,rgba(139,92,246,0.08),rgba(59,130,246,0.06))" }}>
                  <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#8b5cf6", marginBottom:"1rem" }}>🧠 MARKET INTELLIGENCE</div>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.3rem", fontWeight:700, color:"#f0f4ff", marginBottom:"0.5rem" }}>For Corporates, Governments, R&D Teams</h3>
                  <p style={{ fontSize:"0.875rem", color:"#8b9cbf", lineHeight:1.75, marginBottom:"1.25rem" }}>Explore industries with AI reasoning powered by exclusive, paid market research.</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                    {["Vectorized knowledge base for strategic insight","Access to exclusive paid market research","Clean API for product, strategy and innovation teams","Real-time intelligence on industry gaps"].map(pt => (
                      <li key={pt} style={{ fontSize:"0.875rem", color:"#8b9cbf", display:"flex", gap:"0.5rem" }}>
                        <span style={{ color:"#8b5cf6", flexShrink:0 }}>✦</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What Kuanta Offers */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">What Kuanta Offers</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Your AI co-pilot for evaluations <span className="accent">& innovation assessment.</span></h2></ScrollReveal>
              <ScrollReveal delay={0.2}><p className="section-sub" style={{ margin:"1rem auto 0" }}>Whether you&apos;re doing evaluations or exploring emerging industries, Kuanta provides a structured, explainable layer of insight — customized to how your team works.</p></ScrollReveal>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.25rem", marginTop:"3rem" }}>
              {[
                { label:"KUANTA CORE", title:"Analyze startups like a partner, at scale.", icon:"⚡", color:"#00e5ff" },
                { label:"KUANTA INTELLIGENCE", title:"Explore industries with research-fed AI reasoning.", icon:"🧠", color:"#8b5cf6" },
                { label:"BOTH", title:"Equip your team with clarity, speed & AI-powered pattern recognition.", icon:"🚀", color:"#3b82f6" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="glass-card" style={{ padding:"2rem", textAlign:"center" }}>
                    <div style={{ fontSize:"2.5rem", marginBottom:"0.75rem" }}>{item.icon}</div>
                    <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:item.color, marginBottom:"0.5rem" }}>{item.label}</div>
                    <p style={{ fontSize:"0.9rem", color:"#8b9cbf", lineHeight:1.65 }}>{item.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What makes Kuanta different */}
        <section className="section" style={{ background:"linear-gradient(180deg,transparent,rgba(139,92,246,0.03) 50%,transparent)" }}>
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Best In The Industry</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">What makes Kuanta <span className="accent">different?</span></h2></ScrollReveal>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.25rem", marginTop:"3rem" }}>
              {[
                { icon:"🎯", title:"Purpose-built AI", desc:"Our models are specifically trained on venture intelligence and exclusive industry data — not just general knowledge like a ChatGPT wrapper. Highly relevant, nuanced analysis tailored for investment." },
                { icon:"🔍", title:"Explainable by Design", desc:"Every output is traceable. Get full transparency on scoring rationale, red flags, and direct citations — building trust and enabling deeper understanding." },
                { icon:"🔌", title:"Flexible & Enterprise-Ready", desc:"Access Kuanta via our intuitive platform, integrate directly with our powerful API, or leverage white-label solutions. We adapt to your workflow." },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 0.1}>
                  <div className="glass-card" style={{ padding:"2rem" }}>
                    <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{card.icon}</div>
                    <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1rem", fontWeight:600, color:"#f0f4ff", marginBottom:"0.5rem" }}>{card.title}</h3>
                    <p style={{ fontSize:"0.875rem", color:"#8b9cbf", lineHeight:1.65 }}>{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">Kuanta By Numbers</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Proven impact. <span className="accent">Early traction.</span></h2></ScrollReveal>
            </div>
            <div className="metrics-row" style={{ marginTop:"3rem" }}>
              {[
                { num:"8,500+", label:"Startups Analyzed" },
                { num:"80%", label:"Time Saved" },
                { num:"90%", label:"Pilot Conversion After Demo" },
                { num:"6", label:"Countries Active" },
              ].map((m, i) => (
                <ScrollReveal key={m.label} delay={i * 0.1}>
                  <div className="glass-card metric-card">
                    <span className="metric-number">{m.num}</span>
                    <span className="metric-label">{m.label}</span>
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
                <div className="section-label" style={{ display:"inline-flex", margin:"0 auto 1.5rem" }}>Get Started</div>
                <h2 className="section-title">Ready to transform<br/><span className="accent">your deal flow?</span></h2>
                <p className="section-sub" style={{ margin:"1rem auto 2rem" }}>Join the investors and institutions already using Kuanta to find outlier startups before anyone else.</p>
                <div className="cta-btns">
                  <a href="https://calendly.com/riticka-kuanta/30min" className="btn-primary">
                    Book a Demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <Link href="/about" className="btn-ghost">About Kuanta →</Link>
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
