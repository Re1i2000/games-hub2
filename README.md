# Games Hub 🎮

Plataforma de jogos online para entretenimento e descontração com sistema de pontuação e ranking.

## Setup Rápido

```bash
# Instalar dependências
npm install

# Criar banco de dados
npx prisma migrate dev

# Seedar dados de teste (via API)
curl -X POST http://localhost:3000/api/seed

# Iniciar servidor
npm run dev
```

Acesse: `http://localhost:3000`

## Credenciais de Teste

**Usuário 1:**
- Email: `test1@example.com`
- Senha: `password123`
- Username: `player_one`

**Usuário 2:**
- Email: `test2@example.com`
- Senha: `password123`
- Username: `gaming_pro`

## Features Implementadas

✅ Autenticação JWT com cookies
✅ Catálogo de jogos com filtros
✅ Mini-games funcionais
✅ Sistema de pontuação e ranking
✅ Perfil de usuário com histórico
✅ Conquistas/Badges
✅ Design responsivo

## Estrutura

```
src/
├── app/
│   ├── api/          # API routes
│   ├── jogos/        # Páginas de jogos
│   ├── ranking/      # Ranking
│   ├── perfil/       # Perfil do usuário
│   ├── conquistas/   # Badges
│   ├── login/signup  # Autenticação
│   └── page.tsx      # Home
├── components/       # Componentes React
└── lib/             # Utilidades
```

## Próximas Features

- [ ] Mais mini-games (Space Shooter, Maze Runner)
- [ ] Sistema de amigos
- [ ] Multiplayer turn-based
- [ ] Mobile app
