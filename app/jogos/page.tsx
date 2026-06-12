"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CATEGORIES, DIFFICULTIES } from "@/lib/game-constants";
import { Star } from "lucide-react";

interface Jogo {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  dificuldade: string;
  cover_url: string;
}

export default function JogosPage() {
  const [jogos, setJogos] = useState<Jogo[]>([]);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("");
  const [filtroDificuldade, setFiltroDificuldade] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const params = new URLSearchParams();
        if (filtroCategoria) params.append("categoria", filtroCategoria);
        if (filtroDificuldade) params.append("dificuldade", filtroDificuldade);

        const res = await fetch(`/api/jogos?${params.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setJogos(data);
        }
      } catch (error) {
        console.error("Error fetching jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, [filtroCategoria, filtroDificuldade]);

  const getCategoryLabel = (categoria: string) => {
    return CATEGORIES.find((c) => c.value === categoria)?.label || categoria;
  };

  const getDifficultyLabel = (dificuldade: string) => {
    return DIFFICULTIES.find((d) => d.value === dificuldade)?.label || dificuldade;
  };

  const getDifficultyColor = (dificuldade: string) => {
    const colors: Record<string, string> = {
      FACIL: "bg-green-100 text-green-800",
      MEDIA: "bg-yellow-100 text-yellow-800",
      DIFICIL: "bg-orange-100 text-orange-800",
      EXTREMA: "bg-red-100 text-red-800",
    };
    return colors[dificuldade] || "bg-gray-100 text-gray-800";
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Catálogo de Jogos</h1>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoria
            </label>
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas as Categorias</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dificuldade
            </label>
            <select
              value={filtroDificuldade}
              onChange={(e) => setFiltroDificuldade(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas as Dificuldades</option>
              {DIFFICULTIES.map((dif) => (
                <option key={dif.value} value={dif.value}>
                  {dif.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid de Jogos */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Carregando jogos...</p>
        </div>
      ) : jogos.length === 0 ? (
        <div className="bg-white p-12 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-lg">Nenhum jogo encontrado</p>
          <button
            onClick={() => {
              setFiltroCategoria("");
              setFiltroDificuldade("");
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogos.map((jogo) => (
            <Link key={jogo.id} href={`/jogos/${jogo.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <span className="text-5xl">🎮</span>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {jogo.titulo}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {jogo.descricao}
                  </p>

                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                      {getCategoryLabel(jogo.categoria)}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(
                        jogo.dificuldade
                      )}`}
                    >
                      {getDifficultyLabel(jogo.dificuldade)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-sm text-gray-600">4.5</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {Math.floor(Math.random() * 500) + 100} jogadas
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
