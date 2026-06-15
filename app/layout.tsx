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
        <style>{`
          body {
            background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
            color: white;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
          html {
            background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
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
