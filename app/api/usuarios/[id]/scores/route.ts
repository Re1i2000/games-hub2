import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);

    const scores = await prisma.score.findMany({
      where: {
        usuario_id: id,
      },
      include: {
        jogo: {
          select: {
            titulo: true,
            categoria: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });

    return NextResponse.json(scores);
  } catch (error) {
    console.error("Error fetching scores:", error);
    return NextResponse.json(
      { error: "Erro ao buscar scores" },
      { status: 500 }
    );
  }
}
