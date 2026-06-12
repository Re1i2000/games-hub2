import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filtro = searchParams.get("filtro") || "global";
    const limite = parseInt(searchParams.get("limite") || "50");

    // Para MVP, retornaremos apenas ranking global
    // Em versões futuras, adicionar semanal/mensal
    const ranking = await prisma.perfil.findMany({
      select: {
        usuario: {
          select: {
            username: true,
            id: true,
          },
        },
        pontos_totais: true,
        nivel: true,
      },
      orderBy: {
        pontos_totais: "desc",
      },
      take: limite,
    });

    return NextResponse.json(ranking);
  } catch (error) {
    console.error("Error fetching ranking:", error);
    return NextResponse.json(
      { error: "Erro ao buscar ranking" },
      { status: 500 }
    );
  }
}
