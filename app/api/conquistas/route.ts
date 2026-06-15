import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    // Buscar todas as conquistas
    const allConquistas = await prisma.conquista.findMany();

    // Buscar conquistas do usuário
    const usuarioConquistas = await prisma.usuarioConquista.findMany({
      where: {
        usuario_id: session.sub,
      },
    });

    const usuarioConquistaIds = new Set<string>(
      usuarioConquistas.map((uc: { conquista_id: string }) => uc.conquista_id)
    );

    // Montar resposta com flags de desbloqueio
    const conquistas = allConquistas.map((c: any) => {
      const usuarioConquista = usuarioConquistas.find(
        (uc) => uc.conquista_id === c.id
      );
      return {
        ...c,
        desbloqueada: usuarioConquistaIds.has(c.id),
        desbloqueiAem: usuarioConquista?.desbloqueiAem || new Date(),
      };
    });

    return NextResponse.json(conquistas);
  } catch (error) {
    console.error("Error fetching conquistas:", error);
    return NextResponse.json(
      { error: "Erro ao buscar conquistas" },
      { status: 500 }
    );
  }
}
