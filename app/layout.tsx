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
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white" suppressHydrationWarning>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
