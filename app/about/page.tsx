import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Kuanta — genAI-Powered Startup Evaluation",
  description: "We're changing how accelerators, VCs, and corporates identify the next big thing. With Kuanta, evaluation becomes structured, fast, and fair.",
};

export default function AboutPage() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <div style={{ position:"relative", zIndex:1 }}>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="orb orb-1" /><div className="orb orb-2" />
          <div className="container">
            <ScrollReveal><div className="section-label" style={{ display:"inline-flex" }}>About Kuanta</div></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="section-title" style={{ marginBottom:"1rem" }}>
                We exist to make <span className="accent">great startups<br/>impossible to miss.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-sub" style={{ margin:"0 auto" }}>
                Kuanta transforms venture evaluation with intelligent, data-driven systems, ensuring the best innovations get discovered and backed.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="section">
          <div className="container">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }}>
              <div>
                <ScrollReveal><div className="section-label">Our Mission</div></ScrollReveal>
                <ScrollReveal delay={0.1}><h2 className="section-title">Why we exist?</h2></ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p style={{ color:"#8b9cbf", lineHeight:1.8, marginTop:"1.5rem", fontSize:"1rem" }}>
                    At Kuanta, we&apos;re changing how accelerators, VCs, and corporates identify the next big thing. With over <strong style={{ color:"#f0f4ff" }}>5,000+ startups analysed</strong> and counting, our growth speaks to a deeper truth:
                  </p>
                  <p style={{ color:"#8b9cbf", lineHeight:1.8, marginTop:"1rem", fontSize:"1rem" }}>
                    <em style={{ color:"#00e5ff" }}>The old way of evaluating startups is slow, biased, and often misses the hidden gems.</em>
                  </p>
                </ScrollReveal>
                <div style={{ display:"flex", gap:"1.25rem", marginTop:"2rem", flexWrap:"wrap" }}>
                  {["outlier spotting", "maximized productivity", "real intelligence"].map(tag => (
                    <span key={tag} style={{ padding:"0.4rem 1rem", background:"rgba(0,229,255,0.06)", border:"1px solid rgba(0,229,255,0.2)", borderRadius:9999, fontSize:"0.82rem", color:"#00e5ff", fontWeight:600 }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Stats panel */}
              <ScrollReveal delay={0.2}>
                <div className="solution-panel">
                  <div className="panel-header">
                    <div className="panel-dot r" /><div className="panel-dot y" /><div className="panel-dot g" />
                    <span className="panel-title">kuanta.impact</span>
                  </div>
                  {[
                    { label:"startups_analyzed", val:"8,500+" },
                    { label:"time_saved", val:"80%" },
                    { label:"pilot_conversion", val:"90%" },
                    { label:"countries_active", val:"6" },
                  ].map(({ label, val }) => (
                    <div key={label} className="panel-metric" style={{ marginBottom:"0.65rem" }}>
                      <span className="panel-metric-label">{label}</span>
                      <span className="panel-metric-value">{val}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What makes us different */}
        <section className="section" style={{ background:"linear-gradient(180deg,transparent,rgba(0,229,255,0.02) 50%,transparent)" }}>
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">What Makes Us Different</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">We&apos;re different — and <span className="accent">this is why it matters.</span></h2></ScrollReveal>
            </div>
            <div className="about-values-grid" style={{ marginTop:"3rem" }}>
              {[
                { icon:"🏆", title:"Premium Research", desc:"Every analysis includes investor-grade market insights, competitor lists, and comparisons backed by real, exclusive data sources." },
                { icon:"🤖", title:"AI-Powered Analysis", desc:"Our models are trained by industry experts to spot true outlier potential — not just surface-level metrics but deep signal recognition." },
                { icon:"⚡", title:"Massive Dataset, Fast Results", desc:"We automate what used to take hours, evaluating each startup in under 2 minutes based on premium paid and public market data." },
                { icon:"🎛️", title:"Custom Workflows", desc:"From solo investors to enterprise accelerators, we adapt to your decision-making needs with configurable frameworks and white-label options." },
              ].map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="glass-card value-card">
                    <div className="value-icon">{v.icon}</div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container" style={{ maxWidth:820 }}>
            <ScrollReveal><div className="section-label">Our Story</div></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title" style={{ marginBottom:"1.5rem" }}>Built by practitioners, <span className="accent">for practitioners.</span></h2></ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p style={{ color:"#8b9cbf", lineHeight:1.85, fontSize:"1.05rem", marginBottom:"1.25rem" }}>
                We&apos;ve spent years in the startup and investment world, and one problem kept showing up: evaluating startups is slow, expensive, and often biased — which led to missed opportunities and overlooked talent.
              </p>
              <p style={{ color:"#8b9cbf", lineHeight:1.85, fontSize:"1.05rem", marginBottom:"1.25rem" }}>
                So, we built Kuanta — an advanced AI model made to evaluate startups, fast and fairly. It&apos;s built for anyone who needs to assess innovation: investors, corporates, governments, and universities.
              </p>
              <p style={{ color:"#8b9cbf", lineHeight:1.85, fontSize:"1.05rem" }}>
                Kuanta transforms manual review into structured analysis, in seconds. Our platform empowers both sides of the table: analysts get sharper visibility; founders get clearer feedback.
              </p>
            </ScrollReveal>
            <div style={{ display:"flex", gap:"1.5rem", marginTop:"2rem", flexWrap:"wrap" }}>
              <div style={{ padding:"1rem 1.5rem", background:"rgba(0,229,255,0.06)", border:"1px solid rgba(0,229,255,0.15)", borderRadius:14, fontWeight:600, color:"#f0f4ff", fontSize:"0.95rem" }}>
                🇳🇱 Netherlands
              </div>
              <div style={{ padding:"1rem 1.5rem", background:"rgba(139,92,246,0.06)", border:"1px solid rgba(139,92,246,0.2)", borderRadius:14, fontWeight:600, color:"#f0f4ff", fontSize:"0.95rem" }}>
                🇸🇬 Singapore
              </div>
            </div>
          </div>
        </section>

        {/* What We Built */}
        <section className="section" style={{ background:"linear-gradient(180deg,transparent,rgba(139,92,246,0.03) 50%,transparent)" }}>
          <div className="container">
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
              <ScrollReveal><div className="section-label">What We Built</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Two products. <span className="accent">One mission.</span></h2></ScrollReveal>
            </div>
            <div className="products-grid-about">
              <ScrollReveal>
                <div className="glass-card product-card-about">
                  <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#00e5ff", marginBottom:"0.75rem" }}>⚡ KUANTA CORE</div>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.4rem", fontWeight:700, color:"#f0f4ff", marginBottom:"0.75rem" }}>VC-Grade Startup Evaluation</h3>
                  <p style={{ fontSize:"0.9rem", color:"#8b9cbf", lineHeight:1.75 }}>Built for sophisticated users like VCs, corporates, and accelerators to analyze startups like a senior analyst – fast, unbiased, and fully documented.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="glass-card product-card-about" style={{ background:"linear-gradient(135deg,rgba(139,92,246,0.08),rgba(59,130,246,0.06))" }}>
                  <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#8b5cf6", marginBottom:"0.75rem" }}>🧠 KUANTA INTELLIGENCE</div>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.4rem", fontWeight:700, color:"#f0f4ff", marginBottom:"0.75rem" }}>Premium Research Engine</h3>
                  <p style={{ fontSize:"0.9rem", color:"#8b9cbf", lineHeight:1.75 }}>Proprietary vectorized knowledge model trained on exclusive data reports. Built to support advanced competitors, industry research, and market mapping.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-banner">
          <div className="container">
            <ScrollReveal>
              <div className="cta-inner">
                <div className="section-label" style={{ display:"inline-flex", margin:"0 auto 1.5rem" }}>Partner with us</div>
                <h2 className="section-title">Interested in partnering<br/><span className="accent">with Kuanta?</span></h2>
                <p className="section-sub" style={{ margin:"1rem auto 2rem" }}>Join our early access partner program and shape the future of startup intelligence.</p>
                <div className="cta-btns">
                  <a href="https://calendly.com/riticka-kuanta/30min" className="btn-primary">
                    Contact Us
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <Link href="/investors" className="btn-ghost">Investor Info →</Link>
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
