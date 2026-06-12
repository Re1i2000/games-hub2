import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Criar usuários de teste
  const usuario1 = await prisma.usuario.create({
    data: {
      email: "test1@example.com",
      username: "player_one",
      senha_hash: await hash("password123", 10),
      perfil: {
        create: {
          pontos_totais: 1500,
          nivel: 8,
          bio: "Gamer entusiasta",
          cidade: "São Paulo",
        },
      },
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      email: "test2@example.com",
      username: "gaming_pro",
      senha_hash: await hash("password123", 10),
      perfil: {
        create: {
          pontos_totais: 2800,
          nivel: 12,
          bio: "Pro gamer",
          cidade: "Rio de Janeiro",
        },
      },
    },
  });

  // Criar jogos de exemplo
  const flappyBird = await prisma.jogo.create({
    data: {
      titulo: "Flappy Bird Clone",
      descricao: "Um clássico desafio de reflexos. Navegue pelo labirinto de obstáculos!",
      categoria: "ACAO",
      dificuldade: "FACIL",
      cover_url: "/games/flappy-bird.jpg",
      screenshots: JSON.stringify([]),
      instrucoes: "Clique ou pressione espaço para fazer o pássaro pular",
      tempo_medio: 60,
    },
  });

  const spaceShooter = await prisma.jogo.create({
    data: {
      titulo: "Space Shooter",
      descricao: "Derrote as ondas de inimigos espaciais! Colete power-ups e sobreviva o máximo possível.",
      categoria: "ACAO",
      dificuldade: "MEDIA",
      cover_url: "/games/space-shooter.jpg",
      screenshots: JSON.stringify([]),
      instrucoes: "Use WASD ou setas para se mover. Espaço para atirar.",
      tempo_medio: 120,
    },
  });

  const mazePuzzle = await prisma.jogo.create({
    data: {
      titulo: "Maze Runner",
      descricao: "Navegue por labirintos cada vez mais complexos. Colete itens e encontre a saída!",
      categoria: "PUZZLE",
      dificuldade: "MEDIA",
      cover_url: "/games/maze-runner.jpg",
      screenshots: JSON.stringify([]),
      instrucoes: "Use WASD para se mover. Encontre a porta de saída para completar o nível.",
      tempo_medio: 180,
    },
  });

  // Criar conquistas
  const firstScore = await prisma.conquista.create({
    data: {
      titulo: "Primeiro Score",
      descricao: "Jogar o seu primeiro jogo",
      icon_url: "🎮",
      condicao: "first_game",
    },
  });

  const hundredPoints = await prisma.conquista.create({
    data: {
      titulo: "100 Pontos",
      descricao: "Ganhar 100 pontos em um único jogo",
      icon_url: "⭐",
      condicao: "100_points_single",
    },
  });

  const expertAction = await prisma.conquista.create({
    data: {
      titulo: "Expert em Ação",
      descricao: "Acumular 500 pontos em jogos de Ação",
      icon_url: "💥",
      condicao: "500_points_action",
    },
  });

  const champion = await prisma.conquista.create({
    data: {
      titulo: "Campeão",
      descricao: "Estar no TOP 10 do ranking global",
      icon_url: "👑",
      condicao: "top_10_global",
    },
  });

  // Adicionar algumas conquistas ao usuário 2
  await prisma.usuarioConquista.create({
    data: {
      usuario_id: usuario2.id,
      conquista_id: firstScore.id,
    },
  });

  await prisma.usuarioConquista.create({
    data: {
      usuario_id: usuario2.id,
      conquista_id: hundredPoints.id,
    },
  });

  await prisma.usuarioConquista.create({
    data: {
      usuario_id: usuario2.id,
      conquista_id: expertAction.id,
    },
  });

  // Adicionar alguns scores
  await prisma.score.create({
    data: {
      usuario_id: usuario1.id,
      jogo_id: flappyBird.id,
      pontos: 850,
      tempo_jogo: 120,
    },
  });

  await prisma.score.create({
    data: {
      usuario_id: usuario2.id,
      jogo_id: spaceShooter.id,
      pontos: 1200,
      tempo_jogo: 180,
    },
  });

  await prisma.score.create({
    data: {
      usuario_id: usuario2.id,
      jogo_id: mazePuzzle.id,
      pontos: 750,
      tempo_jogo: 240,
    },
  });

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
