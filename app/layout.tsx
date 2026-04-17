import type { Metadata } from "next";
import { ThemeProvider } from "./ThemeProvider";
import { DemoModalProvider } from "./DemoModalProvider";
import BookDemoModal from "@/components/BookDemoModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUANTA | genAI-Powered Startup Intelligence Platform",
  description:
    "Kuanta helps investors, corporates & public institutions discover & evaluate startups in minutes instead of weeks — benchmarked against 3.7M+ companies globally.",
  openGraph: {
    title: "KUANTA | genAI-Powered Startup Intelligence Platform",
    description: "Discover and evaluate startups in minutes, not weeks. Powered by AI, benchmarked against 3.7M+ profiles.",
    type: "website",
    url: "https://kuanta.ai",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        {/* Prevent FOUC: read saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('kuanta-theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <DemoModalProvider>
            {children}
            <BookDemoModal />
          </DemoModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
