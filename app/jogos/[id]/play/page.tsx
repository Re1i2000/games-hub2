"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Jogo {
  id: string;
  titulo: string;
  instrucoes: string;
}

export default function PlayPage() {
  const params = useParams();
  const router = useRouter();
  const jogoId = params.id as string;

  const [jogo, setJogo] = useState<Jogo | null>(null);
  const [pontos, setPontos] = useState(0);
  const [gameOver, setGameOver] = useState(false);
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

  useEffect(() => {
    if (!jogo) return;

    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mini-game simples: clicar para ganhar pontos
    let gamePoints = 0;
    let isGameRunning = true;
    let timeLeft = 30; // 30 segundos

    const updateTimer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        isGameRunning = false;
        setGameOver(true);
        clearInterval(updateTimer);
        clearInterval(gameLoop);
      }
    }, 1000);

    const gameLoop = setInterval(() => {
      ctx.fillStyle = "#f0f0f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#333";
      ctx.font = "24px bold";
      ctx.fillText(`Pontos: ${gamePoints}`, 20, 40);
      ctx.fillText(`Tempo: ${timeLeft}s`, 20, 80);

      if (!isGameRunning) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "48px bold";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2 - 40);
        ctx.font = "32px";
        ctx.fillText(`Score Final: ${gamePoints}`, canvas.width / 2, canvas.height / 2 + 40);
      }
    }, 50);

    const handleClick = () => {
      if (isGameRunning) {
        gamePoints += Math.floor(Math.random() * 50) + 10;
        setPontos(gamePoints);

        // Animação de clique
        const x = Math.random() * (canvas.width - 100) + 50;
        const y = Math.random() * (canvas.height - 100) + 50;

        ctx.fillStyle = "#4CAF50";
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.font = "20px bold";
        ctx.textAlign = "center";
        ctx.fillText("+10", x, y + 5);
      }
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      canvas.removeEventListener("click", handleClick);
      clearInterval(updateTimer);
      clearInterval(gameLoop);
    };
  }, [jogo]);

  const handleSaveScore = async () => {
    try {
      const res = await fetch("/api/pontuacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jogo_id: jogoId,
          pontos,
          tempo_jogo: 30,
        }),
      });

      if (res.ok) {
        router.push(`/jogos/${jogoId}`);
      }
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Carregando jogo...</div>;
  }

  if (!jogo) {
    return <div className="text-center py-12">Jogo não encontrado</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{jogo.titulo}</h1>
      <p className="text-gray-600 mb-6">{jogo.instrucoes}</p>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <canvas
          id="gameCanvas"
          width={600}
          height={400}
          className="w-full bg-gray-100 cursor-pointer"
        ></canvas>
      </div>

      {gameOver && (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Jogo Finalizado!</h2>
          <p className="text-4xl font-bold text-blue-600 mb-6">{pontos} Pontos</p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleSaveScore}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Salvar Score
            </button>
            <button
              onClick={() => router.push(`/jogos/${jogoId}`)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
