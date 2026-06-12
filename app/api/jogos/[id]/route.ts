import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);

    const jogo = await prisma.jogo.findUnique({
      where: { id },
      include: {
        scores: {
          select: {
            pontos: true,
            usuario: {
              select: {
                username: true,
              },
            },
          },
          orderBy: { pontos: "desc" },
          take: 10,
        },
      },
    });

    if (!jogo) {
      return NextResponse.json({ error: "Jogo não encontrado" }, { status: 404 });
    }

    return NextResponse.json(jogo);
  } catch (error) {
    console.error("Error fetching jogo:", error);
    return NextResponse.json(
      { error: "Erro ao buscar jogo" },
      { status: 500 }
    );
  }
}
