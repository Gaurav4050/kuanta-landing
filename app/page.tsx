import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "KUANTA | genAI-Powered Startup Intelligence Platform",
  description: "Kuanta helps investors, corporates & public institutions discover & evaluate startups in minutes instead of weeks — benchmarked against 3.7M+ companies globally.",
};

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
