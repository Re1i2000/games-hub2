import { prisma } from "@/lib/prisma";
import { createToken, setSessionCookie } from "@/lib/auth";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email("Email inválido"),
  username: z.string().min(3, "Username deve ter pelo menos 3 caracteres"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, username, password } = signupSchema.parse(body);

    // Verificar se usuário já existe
    const existingUser = await prisma.usuario.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email ou username já registrado" },
        { status: 400 }
      );
    }

    // Hash da senha
    const senha_hash = await hash(password, 10);

    // Criar usuário e perfil
    const usuario = await prisma.usuario.create({
      data: {
        email,
        username,
        senha_hash,
        perfil: {
          create: {},
        },
      },
    });

    // Criar token JWT
    const token = await createToken({
      sub: usuario.id,
      email: usuario.email,
      username: usuario.username,
    });

    // Salvar token no cookie
    const response = NextResponse.json(
      {
        success: true,
        user: {
          id: usuario.id,
          email: usuario.email,
          username: usuario.username,
        },
      },
      { status: 201 }
    );

    // Set cookie manualmente
    response.cookies.set("games_hub_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Erro ao registrar usuário" },
      { status: 500 }
    );
  }
}
