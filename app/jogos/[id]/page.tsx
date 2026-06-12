"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Star, Play, Trophy } from "lucide-react";
import { getDifficultyLabel, getCategoryLabel } from "@/lib/utils";

interface Score {
  pontos: number;
  usuario: {
    username: string;
  };
}

interface Jogo {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  dificuldade: string;
  instrucoes: string;
  tempo_medio: number | null;
  scores: Score[];
}

export default function JogoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jogoId = params.id as string;

  const [jogo, setJogo] = useState<Jogo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJogo = async () => {
      try {
        const res = await fetch(`/api/jogos/${jogoId}`);
        if (res.ok) {
          const data = await res.json();
          setJogo(data);
        }
      } catch (error) {
        console.error("Error fetching jogo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJogo();
  }, [jogoId]);

  if (loading) {
    return <div className="text-center py-12">Carregando jogo...</div>;
  }

  if (!jogo) {
    return <div className="text-center py-12">Jogo não encontrado</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:underline mb-4"
        >
          ← Voltar
        </button>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-48 rounded-lg mb-6 flex items-center justify-center">
          <span className="text-8xl">🎮</span>
        </div>

        <h1 className="text-4xl font-bold mb-2">{jogo.titulo}</h1>
        <p className="text-gray-600 text-lg mb-4">{jogo.descricao}</p>

        <div className="flex gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {getCategoryLabel(jogo.categoria)}
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            {getDifficultyLabel(jogo.dificuldade)}
          </span>
          {jogo.tempo_medio && (
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              ~{jogo.tempo_medio}s
            </span>
          )}
        </div>

        <button
          onClick={() => router.push(`/jogos/${jogoId}/play`)}
          className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg"
        >
          <Play size={20} />
          Jogar Agora
        </button>
      </div>

      {/* Instruções */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-3">Como Jogar</h2>
        <p className="text-gray-700">{jogo.instrucoes}</p>
      </div>

      {/* Top Scores */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Melhores Scores
        </h2>

        {jogo.scores.length === 0 ? (
          <p className="text-gray-500">Ninguém jogou este jogo ainda</p>
        ) : (
          <div className="space-y-2">
            {jogo.scores.map((score, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded"
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg text-gray-600 w-8">
                    #{index + 1}
                  </span>
                  <span className="font-medium">@{score.usuario.username}</span>
                </div>
                <span className="font-bold text-blue-600 text-lg">
                  {score.pontos.toLocaleString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
