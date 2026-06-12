"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface User {
  id: string;
  email: string;
  username: string;
}

export default function TopNav() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 border-b border-purple-500/30 backdrop-blur-md shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-3xl group-hover:scale-110 transition-transform">🎮</div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Games Hub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
          </Link>
          <Link href="/jogos" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
            Jogos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
          </Link>
          <Link href="/ranking" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
            Ranking
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
          </Link>
          {user && (
            <>
              <Link href="/perfil" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Perfil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
              </Link>
              <Link href="/conquistas" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Conquistas
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
              </Link>
            </>
          )}
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {!loading && user && (
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400/50">
                <p className="text-sm font-medium text-cyan-300">@{user.username}</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-red-500/50"
              >
                Sair
              </button>
            </div>
          )}

          {!loading && !user && (
            <Link
              href="/login"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all font-semibold shadow-lg hover:shadow-cyan-500/50"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-800 to-purple-900 border-t border-purple-500/30 px-4 py-4 space-y-2">
          <Link href="/" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors font-medium">
            Home
          </Link>
          <Link href="/jogos" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors font-medium">
            Jogos
          </Link>
          <Link href="/ranking" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors font-medium">
            Ranking
          </Link>
          {user && (
            <>
              <Link href="/perfil" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors font-medium">
                Perfil
              </Link>
              <Link href="/conquistas" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors font-medium">
                Conquistas
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
