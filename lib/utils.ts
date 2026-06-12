import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    ACAO: "Ação",
    TERROR: "Terror",
    RPG: "RPG",
    PUZZLE: "Puzzle",
    ESTRATEGIA: "Estratégia",
    INTERACAO: "Interação",
    ESPORTES: "Esportes",
  };
  return labels[category] || category;
}

export function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    FACIL: "Fácil",
    MEDIA: "Médio",
    DIFICIL: "Difícil",
    EXTREMA: "Extremo",
  };
  return labels[difficulty] || difficulty;
}

export function formatScore(score: number): string {
  return score.toLocaleString("pt-BR");
}
