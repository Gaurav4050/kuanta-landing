import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Kuanta — Startup Intelligence Insights",
  description: "Insights on venture intelligence, startup evaluation, AI-powered analysis, and the future of investing.",
};

const POSTS = [
  { emoji:"🚀", tag:"Evaluation", title:"Why Stage-Specific Scoring Changes Everything in Startup Evaluation", excerpt:"Generic frameworks treat a Series A fintech the same as a pre-seed biotech. Here's why that's costing you outlier deals.", date:"Apr 12, 2026", readTime:"5 min read" },
  { emoji:"🧠", tag:"AI Research", title:"RAG vs. Fine-tuning: How Kuanta Chooses the Right AI Architecture", excerpt:"A deep dive into why retrieval-augmented generation outperforms fine-tuning for dynamic, high-stakes investment research.", date:"Apr 5, 2026", readTime:"7 min read" },
  { emoji:"📊", tag:"Data", title:"3.7 Million Startups: What We Learned Building the World's Largest Vectorized Startup Database", excerpt:"Size matters — but so does structure. How we turned millions of startup profiles into precise vector embeddings.", date:"Mar 28, 2026", readTime:"8 min read" },
  { emoji:"💡", tag:"Venture Capital", title:"The Outlier Problem: Why 80% of Unicorn Bets Were Available in 2019", excerpt:"Looking back at which signals were available early. The data was there — the tooling wasn't.", date:"Mar 20, 2026", readTime:"6 min read" },
  { emoji:"🌍", tag:"Global Markets", title:"Scouting Startups in Emerging Markets: A Framework That Actually Works", excerpt:"Innovation doesn't happen only in Silicon Valley. How Kuanta surfaces high-potential startups from Southeast Asia, MENA, and beyond.", date:"Mar 14, 2026", readTime:"5 min read" },
  { emoji:"🔍", tag:"Deep Tech", title:"Evaluating Deep Tech Startups: Why 57 Metrics for Defense Tech Isn't Overkill", excerpt:"Capital-intensive, IP-driven models need nuanced evaluation. A look at how we built the Defense Tech vertical playbook.", date:"Mar 7, 2026", readTime:"9 min read" },
];

export default function BlogPage() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <div style={{ position:"relative", zIndex:1 }}>
        {/* Hero */}
        <section className="page-hero">
          <div className="orb orb-1" /><div className="orb orb-2" />
          <div className="container">
            <ScrollReveal><div className="section-label" style={{ display:"inline-flex" }}>Insights</div></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="section-title" style={{ marginBottom:"1rem" }}>
                Venture intelligence.<br/><span className="accent">Straight from the source.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-sub" style={{ margin:"0 auto" }}>
                Deep dives into startup evaluation, AI-powered research, and the future of venture intelligence — written by our team.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog grid */}
        <section className="section">
          <div className="container">
            <div className="blog-grid">
              {POSTS.map((post, i) => (
                <div key={post.title} className="glass-card blog-card" style={{ opacity:1, animation:`fade-up-card 0.5s ease ${i*0.08}s both` }}>
                    <div className="blog-thumbnail" style={{ background: i % 3 === 0 ? "linear-gradient(135deg,rgba(0,229,255,0.08),rgba(59,130,246,0.06))" : i % 3 === 1 ? "linear-gradient(135deg,rgba(139,92,246,0.08),rgba(59,130,246,0.06))" : "linear-gradient(135deg,rgba(20,184,166,0.08),rgba(59,130,246,0.06))" }}>
                      <span style={{ fontSize:"2.5rem" }}>{post.emoji}</span>
                    </div>
                    <div className="blog-content">
                      <span className="blog-tag">{post.tag}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="blog-meta">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                </div>
              ))}
            </div>
            <style>{`@keyframes fade-up-card{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
          </div>
        </section>

        {/* Newsletter */}
        <section className="cta-banner">
          <div className="container">
            <ScrollReveal>
              <div className="cta-inner">
                <div className="section-label" style={{ display:"inline-flex", margin:"0 auto 1.5rem" }}>Stay Ahead</div>
                <h2 className="section-title">Get venture intelligence<br/><span className="accent">in your inbox.</span></h2>
                <p className="section-sub" style={{ margin:"1rem auto 2rem" }}>Weekly insights on startup evaluation, AI research, and emerging sectors — from the Kuanta team.</p>
                <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", maxWidth:480, margin:"0 auto" }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      flex:1, padding:"0.85rem 1.25rem",
                      background:"rgba(255,255,255,0.05)",
                      border:"1px solid rgba(255,255,255,0.12)",
                      borderRadius:9999, color:"#f0f4ff",
                      fontSize:"0.95rem", outline:"none", minWidth:220,
                    }}
                  />
                  <button className="btn-primary">Subscribe</button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Back to home CTA */}
        <div style={{ textAlign:"center", paddingBottom:"3rem" }}>
          <Link href="/" className="btn-ghost">← Back to Home</Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
