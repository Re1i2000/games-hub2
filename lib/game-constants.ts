export const CATEGORIES = [
  { value: "ACAO", label: "Ação" },
  { value: "TERROR", label: "Terror" },
  { value: "RPG", label: "RPG" },
  { value: "PUZZLE", label: "Puzzle" },
  { value: "ESTRATEGIA", label: "Estratégia" },
  { value: "INTERACAO", label: "Interação" },
  { value: "ESPORTES", label: "Esportes" },
];

export const DIFFICULTIES = [
  { value: "FACIL", label: "Fácil" },
  { value: "MEDIA", label: "Médio" },
  { value: "DIFICIL", label: "Difícil" },
  { value: "EXTREMA", label: "Extremo" },
];

export const ACHIEVEMENTS = [
  {
    id: "first_score",
    title: "Primeiro Score",
    description: "Jogar o seu primeiro jogo",
    condition: "first_game",
  },
  {
    id: "hundred_points",
    title: "100 Pontos",
    description: "Ganhar 100 pontos em um único jogo",
    condition: "100_points_single",
  },
  {
    id: "expert_action",
    title: "Expert em Ação",
    description: "Acumular 500 pontos em jogos de Ação",
    condition: "500_points_action",
  },
  {
    id: "champion",
    title: "Campeão",
    description: "Estar no TOP 10 do ranking global",
    condition: "top_10_global",
  },
];
