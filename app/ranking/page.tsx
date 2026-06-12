"use client";

import { useEffect, useState } from "react";
import { Trophy, Medal } from "lucide-react";

interface RankingEntry {
  usuario: {
    username: string;
    id: string;
  };
  pontos_totais: number;
  nivel: number;
}

export default function RankingPage() {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<"global" | "semanal" | "mensal">(
    "global"
  );

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/ranking?filtro=${filtro}`);
        if (res.ok) {
          const data = await res.json();
          setRanking(data);
        }
      } catch (error) {
        console.error("Error fetching ranking:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, [filtro]);

  const getMedalIcon = (posicao: number) => {
    if (posicao === 1) return "🥇";
    if (posicao === 2) return "🥈";
    if (posicao === 3) return "🥉";
    return posicao;
  };

  const getNivelColor = (nivel: number) => {
    if (nivel >= 20) return "text-purple-600";
    if (nivel >= 15) return "text-blue-600";
    if (nivel >= 10) return "text-green-600";
    if (nivel >= 5) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Trophy className="w-10 h-10 text-yellow-500" />
          <h1 className="text-4xl font-bold">Ranking Global</h1>
          <Trophy className="w-10 h-10 text-yellow-500" />
        </div>
        <p className="text-gray-600">
          Veja os melhores jogadores da plataforma
        </p>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 mb-8 justify-center">
        {(["global", "semanal", "mensal"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              filtro === f
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Ranking Table */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Carregando ranking...</p>
        </div>
      ) : ranking.length === 0 ? (
        <div className="bg-white p-12 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-lg">Nenhum jogo ainda</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Posição
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Jogador
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Nível
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  Pontos
                </th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((entry, index) => (
                <tr
                  key={entry.usuario.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                    index < 3 ? "bg-yellow-50" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold">
                        {getMedalIcon(index + 1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      @{entry.usuario.username}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getNivelColor(
                        entry.nivel
                      )}`}
                    >
                      Nível {entry.nivel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold text-blue-600 text-lg">
                      {entry.pontos_totais.toLocaleString("pt-BR")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
