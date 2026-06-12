import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const scoreSchema = z.object({
  jogo_id: z.string(),
  pontos: z.number(),
  tempo_jogo: z.number().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = await request.json();
    const { jogo_id, pontos, tempo_jogo } = scoreSchema.parse(body);

    // Salvar score
    const score = await prisma.score.create({
      data: {
        usuario_id: session.sub,
        jogo_id,
        pontos,
        tempo_jogo,
      },
    });

    // Atualizar perfil com novos pontos
    await prisma.perfil.update({
      where: { usuario_id: session.sub },
      data: {
        pontos_totais: {
          increment: pontos,
        },
      },
    });

    return NextResponse.json(score, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Error saving score:", error);
    return NextResponse.json(
      { error: "Erro ao salvar score" },
      { status: 500 }
    );
  }
}
