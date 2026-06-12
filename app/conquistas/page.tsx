"use client";

import { useEffect, useState } from "react";
import { Star, Lock } from "lucide-react";

interface Conquista {
  titulo: string;
  descricao: string;
  icon_url: string;
  desbloqueiAem: string;
  desbloqueada: boolean;
}

export default function ConquistasPage() {
  const [conquistas, setConquistas] = useState<Conquista[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConquistas = async () => {
      try {
        const res = await fetch("/api/conquistas");
        if (res.ok) {
          const data = await res.json();
          setConquistas(data);
        }
      } catch (error) {
        console.error("Error fetching conquistas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConquistas();
  }, []);

  const conquistasDesbloqueadas = conquistas.filter((c) => c.desbloqueada);
  const conquistasBloqueadas = conquistas.filter((c) => !c.desbloqueada);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Minhas Conquistas</h1>
        <p className="text-gray-600">
          Desbloqueie badges jogando e completando desafios
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">
              {conquistasDesbloqueadas.length}
            </p>
            <p className="text-sm text-gray-600">Desbloqueadas</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-2xl font-bold text-gray-600">
              {conquistasBloqueadas.length}
            </p>
            <p className="text-sm text-gray-600">Bloqueadas</p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Carregando conquistas...</p>
        </div>
      ) : (
        <>
          {/* Desbloqueadas */}
          {conquistasDesbloqueadas.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Desbloqueadas ({conquistasDesbloqueadas.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {conquistasDesbloqueadas.map((conquista, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
                  >
                    <div className="text-5xl mb-3">✨</div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {conquista.titulo}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">
                      {conquista.descricao}
                    </p>
                    <p className="text-xs text-gray-500">
                      Desbloqueada em{" "}
                      {new Date(conquista.desbloqueiAem).toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bloqueadas */}
          {conquistasBloqueadas.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6 text-gray-400" />
                Bloqueadas ({conquistasBloqueadas.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {conquistasBloqueadas.map((conquista, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-6 rounded-lg text-center opacity-60"
                  >
                    <div className="text-5xl mb-3">🔒</div>
                    <h3 className="font-bold text-gray-700 mb-1">
                      {conquista.titulo}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {conquista.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {conquistas.length === 0 && (
            <div className="bg-white p-12 rounded-lg shadow-lg text-center">
              <p className="text-gray-500 text-lg mb-4">
                Você ainda não desbloqueou nenhuma conquista
              </p>
              <p className="text-gray-600">
                Comece a jogar para desbloquear badges
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}
