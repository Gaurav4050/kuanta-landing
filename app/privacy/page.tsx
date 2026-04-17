import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service | Kuanta",
  description: "Kuanta privacy policy and terms of service.",
};

export default function PrivacyPage() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <div style={{ position:"relative", zIndex:1, paddingTop:72 }}>
        <section style={{ padding:"6rem 0 3rem" }}>
          <div className="container" style={{ maxWidth:820 }}>
            <ScrollReveal>
              <div className="section-label" style={{ display:"inline-flex", marginBottom:"2rem" }}>Legal</div>
              <h1 className="section-title" style={{ marginBottom:"0.5rem" }}>Privacy Policy</h1>
              <p style={{ color:"#4a5568", fontSize:"0.875rem", marginBottom:"3rem" }}>Last updated: January 2026</p>
            </ScrollReveal>

            <div id="privacy">
              {[
                { title:"1. Information We Collect", content:"We collect information you provide directly to us, such as when you create an account, book a demo, or contact us. This may include your name, email address, company name, and usage data from our platform." },
                { title:"2. How We Use Your Information", content:"We use the information we collect to provide, maintain, and improve our services, communicate with you about our products, and comply with legal obligations. We do not sell your personal data to third parties." },
                { title:"3. Data Security", content:"We implement industry-standard security measures to protect your personal information. All data transmitted to and from our platform is encrypted using TLS. We store data in secure, SOC 2 compliant infrastructure." },
                { title:"4. Data Retention", content:"We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us at privacy@kuanta.ai." },
                { title:"5. International Transfer", content:"Kuanta operates from the Netherlands and Singapore. Your information may be transferred to and processed in countries other than your own. We ensure adequate data protection safeguards are in place." },
                { title:"6. Contact Us", content:"If you have questions about this Privacy Policy, contact us at: privacy@kuanta.ai or through our registered office in the Netherlands." },
              ].map(section => (
                <ScrollReveal key={section.title}>
                  <div style={{ marginBottom:"2rem", padding:"2rem", borderRadius:20, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.08)" }}>
                    <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.1rem", fontWeight:600, color:"#f0f4ff", marginBottom:"0.75rem" }}>{section.title}</h2>
                    <p style={{ color:"#8b9cbf", lineHeight:1.8, fontSize:"0.9rem" }}>{section.content}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Terms */}
            <ScrollReveal>
              <h1 className="section-title" id="t-c" style={{ marginTop:"4rem", marginBottom:"0.5rem" }}>Terms of Service</h1>
              <p style={{ color:"#4a5568", fontSize:"0.875rem", marginBottom:"3rem" }}>Last updated: January 2026</p>
            </ScrollReveal>

            {[
              { title:"1. Acceptance of Terms", content:"By accessing or using Kuanta's platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our service." },
              { title:"2. Use of Service", content:"Kuanta grants you a limited, non-exclusive, non-transferable license to use our platform for your internal business purposes. You may not reverse engineer, copy, or create derivative works based on our service." },
              { title:"3. Intellectual Property", content:"Our platform, including all content, features, and functionality, is owned by Kuanta and is protected by international copyright, trademark, and other intellectual property laws." },
              { title:"4. Limitation of Liability", content:"Kuanta shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our AI assessments are analytical tools, not investment advice." },
              { title:"5. Governing Law", content:"These Terms shall be governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law provisions." },
            ].map(section => (
              <ScrollReveal key={section.title}>
                <div style={{ marginBottom:"2rem", padding:"2rem", borderRadius:20, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.1rem", fontWeight:600, color:"#f0f4ff", marginBottom:"0.75rem" }}>{section.title}</h2>
                  <p style={{ color:"#8b9cbf", lineHeight:1.8, fontSize:"0.9rem" }}>{section.content}</p>
                </div>
              </ScrollReveal>
            ))}

            <div style={{ textAlign:"center", marginTop:"3rem", paddingBottom:"3rem" }}>
              <Link href="/" className="btn-ghost">← Back to Home</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
