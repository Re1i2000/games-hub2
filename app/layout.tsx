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
            position: relative;
            overflow-x: hidden;
          }

          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
              0deg,
              rgba(255, 0, 150, 0.03),
              rgba(255, 0, 150, 0.03) 1px,
              transparent 1px,
              transparent 2px
            );
            pointer-events: none;
            z-index: 1;
          }

          html {
            background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(255, 0, 150, 0.6);
          }

          .neon-title {
            font-family: 'Press Start 2P', cursive;
            letter-spacing: 2px;
            text-shadow:
              0 0 10px rgba(0, 255, 255, 1),
              0 0 20px rgba(0, 255, 255, 0.8),
              0 0 30px rgba(255, 0, 150, 0.8),
              0 0 40px rgba(255, 0, 150, 0.6),
              2px 2px 0 rgba(255, 0, 150, 0.5),
              -2px -2px 0 rgba(0, 255, 255, 0.5);
            animation: neon-flicker 0.15s infinite;
          }

          @keyframes neon-flicker {
            0%, 18%, 22%, 25%, 53%, 57%, 100% {
              text-shadow:
                0 0 10px rgba(0, 255, 255, 1),
                0 0 20px rgba(0, 255, 255, 1),
                0 0 30px rgba(0, 255, 255, 0.8),
                0 0 40px rgba(0, 255, 255, 0.6),
                0 0 50px rgba(255, 0, 150, 1),
                0 0 60px rgba(255, 0, 150, 0.8),
                0 0 70px rgba(255, 0, 150, 0.6),
                2px 2px 5px rgba(255, 0, 150, 0.8),
                -2px -2px 5px rgba(0, 255, 255, 0.8),
                0 0 100px rgba(0, 255, 255, 0.4);
            }
            19%, 23%, 24%, 54%, 56% {
              text-shadow:
                0 0 5px rgba(0, 255, 255, 0.5),
                0 0 10px rgba(255, 0, 150, 0.3);
            }
          }

          .neon-glow {
            text-shadow:
              0 0 10px rgba(0, 255, 255, 1),
              0 0 20px rgba(0, 255, 255, 0.8),
              0 0 30px rgba(255, 0, 150, 0.8);
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
