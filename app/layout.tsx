import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";

export const metadata: Metadata = {
  title: "Games Hub - Jogos Online",
  description: "Plataforma de jogos online para entretenimento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
            color: white;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: 'Space Mono', monospace;
          }
          html {
            background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
          }
          .hero-title, .main-title {
            font-family: 'Press Start 2P', cursive;
            letter-spacing: 2px;
          }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
