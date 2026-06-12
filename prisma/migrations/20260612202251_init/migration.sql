-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuario_id" TEXT NOT NULL,
    "bio" TEXT,
    "avatar_url" TEXT,
    "data_nascimento" DATETIME,
    "cidade" TEXT,
    "pontos_totais" INTEGER NOT NULL DEFAULT 0,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Perfil_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jogo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "categoria" TEXT NOT NULL,
    "dificuldade" TEXT NOT NULL,
    "cover_url" TEXT NOT NULL,
    "screenshots" TEXT NOT NULL DEFAULT '[]',
    "instrucoes" TEXT,
    "tempo_medio" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Score" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuario_id" TEXT NOT NULL,
    "jogo_id" TEXT NOT NULL,
    "pontos" INTEGER NOT NULL,
    "tempo_jogo" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Score_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Score_jogo_id_fkey" FOREIGN KEY ("jogo_id") REFERENCES "Jogo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jogo_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "estrelas" INTEGER NOT NULL,
    "comentario" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Avaliacao_jogo_id_fkey" FOREIGN KEY ("jogo_id") REFERENCES "Jogo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conquista" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,
    "condicao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UsuarioConquista" (
    "usuario_id" TEXT NOT NULL,
    "conquista_id" TEXT NOT NULL,
    "desbloqueiAem" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("usuario_id", "conquista_id"),
    CONSTRAINT "UsuarioConquista_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UsuarioConquista_conquista_id_fkey" FOREIGN KEY ("conquista_id") REFERENCES "Conquista" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Amizade" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuario_id" TEXT NOT NULL,
    "amigo_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Amizade_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Amizade_amigo_id_fkey" FOREIGN KEY ("amigo_id") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_usuario_id_key" ON "Perfil"("usuario_id");

-- CreateIndex
CREATE INDEX "Jogo_categoria_idx" ON "Jogo"("categoria");

-- CreateIndex
CREATE INDEX "Jogo_ativo_idx" ON "Jogo"("ativo");

-- CreateIndex
CREATE INDEX "Score_usuario_id_idx" ON "Score"("usuario_id");

-- CreateIndex
CREATE INDEX "Score_jogo_id_idx" ON "Score"("jogo_id");

-- CreateIndex
CREATE INDEX "Score_createdAt_idx" ON "Score"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_jogo_id_usuario_id_key" ON "Avaliacao"("jogo_id", "usuario_id");

-- CreateIndex
CREATE INDEX "Amizade_status_idx" ON "Amizade"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Amizade_usuario_id_amigo_id_key" ON "Amizade"("usuario_id", "amigo_id");
