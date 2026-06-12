"use client";

import { useEffect, useState } from "react";
import { User, Trophy, Zap, Award } from "lucide-react";

interface Perfil {
  id: string;
  username: string;
  email: string;
  bio?: string;
  avatar_url?: string;
  pontos_totais: number;
  nivel: number;
  cidade?: string;
  data_nascimento?: string;
}

interface Score {
  id: string;
  pontos: number;
  tempo_jogo: number | null;
  createdAt: string;
  jogo: {
    titulo: string;
  };
}

export default function PerfilPage() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const meRes = await fetch("/api/auth/me");
        if (meRes.ok) {
          const meData = await meRes.json();
          setPerfil(meData);

          // Fetch scores
          const scoresRes = await fetch(`/api/usuarios/${meData.id}/scores`);
          if (scoresRes.ok) {
            const scoresData = await scoresRes.json();
            setScores(scoresData);
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Carregando perfil...</div>;
  }

  if (!perfil) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Erro ao carregar perfil</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Perfil Header */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-5xl">
              👤
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                @{perfil.username}
              </h1>
              <p className="text-gray-600 mb-2">{perfil.email}</p>
              {perfil.bio && <p className="text-gray-700 italic">"{perfil.bio}"</p>}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Nível</span>
            </div>
            <p className="text-3xl font-bold text-blue-600">{perfil.nivel}</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium text-gray-700">Pontos Totais</span>
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {perfil.pontos_totais.toLocaleString("pt-BR")}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Partidas</span>
            </div>
            <p className="text-3xl font-bold text-green-600">{scores.length}</p>
          </div>
        </div>
      </div>

      {/* Histórico de Scores */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-500" />
          Histórico de Scores
        </h2>

        {scores.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Você ainda não jogou nenhum jogo
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Jogo
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Pontos
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Tempo
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.slice(0, 10).map((score) => (
                  <tr
                    key={score.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">{score.jogo.titulo}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-bold text-blue-600">
                        {score.pontos}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {score.tempo_jogo ? `${score.tempo_jogo}s` : "-"}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-gray-600">
                      {new Date(score.createdAt).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
