import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categoria = searchParams.get("categoria");
    const dificuldade = searchParams.get("dificuldade");

    const where: any = { ativo: true };

    if (categoria) {
      where.categoria = categoria;
    }

    if (dificuldade) {
      where.dificuldade = dificuldade;
    }

    const jogos = await prisma.jogo.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(jogos);
  } catch (error) {
    console.error("Error fetching jogos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar jogos" },
      { status: 500 }
    );
  }
}
