import Link from "next/link";
import { Gamepad2, Zap, Trophy, Sparkles, ArrowRight, Star, Flame, Crown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section - PREMIUM */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-400/50 text-cyan-300 text-sm font-semibold hover:border-cyan-400 transition-all cursor-pointer">
              ⚡ Plataforma de Jogos Next-Gen
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span
              className="block mb-4 text-cyan-400"
              style={{
                fontSize: '2.5rem',
                color: '#06b6d4',
                fontFamily: "'Press Start 2P', cursive",
                letterSpacing: '2px',
                textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(255, 0, 150, 0.8), 0 0 40px rgba(255, 0, 150, 0.6), 2px 2px 0 rgba(255, 0, 150, 0.5), -2px -2px 0 rgba(0, 255, 255, 0.5)',
                animation: 'neon-flicker 0.15s infinite'
              }}
            >
              GAMES HUB
            </span>
            <span
              className="text-3xl md:text-5xl text-white font-bold"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(255, 0, 150, 0.8)'
              }}
            >
              O Universo dos Jogos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings. Sua próxima aventura começa aqui.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/jogos"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                🚀 Começar a Jogar
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/ranking"
              className="group px-10 py-5 border-2 border-purple-400 text-purple-300 rounded-2xl hover:bg-purple-400/10 transition-all font-bold text-lg flex items-center justify-center gap-3"
            >
              👑 Ver Ranking
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
            {[
              { value: "1000+", label: "Jogadores Ativos", icon: "👥" },
              { value: "50+", label: "Jogos Incríveis", icon: "🎮" },
              { value: "24/7", label: "Sempre Online", icon: "⚡" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-purple-500/20 to-cyan-500/10 rounded-xl p-6 border border-purple-400/30 hover:border-cyan-400/50 hover:from-purple-500/30 transition-all cursor-pointer"
              >
                <p className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - MODERN CARDS */}
      <section className="py-32 border-t border-purple-500/30 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Por Que Games Hub?
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            A plataforma mais completa para você se divertir
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Diversos Gêneros",
                desc: "Ação, Terror, RPG, Puzzle, Estratégia e muito mais",
                color: "from-cyan-500 to-blue-500",
                gradient: "from-cyan-500/20 to-blue-500/10",
              },
              {
                icon: Zap,
                title: "Sessões Rápidas",
                desc: "Jogar entre aulas ou longas maratonas quando quiser",
                color: "from-yellow-500 to-orange-500",
                gradient: "from-yellow-500/20 to-orange-500/10",
              },
              {
                icon: Crown,
                title: "Ranking Global",
                desc: "Compete com jogadores do mundo inteiro",
                color: "from-pink-500 to-red-500",
                gradient: "from-pink-500/20 to-red-500/10",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br ${feature.gradient} border border-purple-400/30 rounded-3xl p-10 hover:border-purple-400/80 transition-all hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden`}
                >
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all`} />

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8 group-hover:scale-125 transition-transform`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{feature.desc}</p>

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                    Saiba Mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Preview - SHOWCASE */}
      <section className="py-32 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 text-white">
            Jogos em Destaque
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Escolha entre centenas de títulos incríveis
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { name: "Flappy Bird Clone", emoji: "🐦", category: "Ação", rating: 5 },
              { name: "Space Shooter", emoji: "🚀", category: "Ação", rating: 5 },
              { name: "Maze Runner", emoji: "🎯", category: "Puzzle", rating: 5 },
            ].map((game, idx) => (
              <Link
                key={idx}
                href="/jogos"
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-purple-900 border border-purple-400/30 hover:border-cyan-400/80 transition-all hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer"
              >
                {/* Game Background */}
                <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="relative z-10">{game.emoji}</span>
                </div>

                {/* Game Info */}
                <div className="p-8 relative z-20 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{game.name}</h3>
                      <span className="inline-block px-4 py-2 rounded-full bg-purple-500/50 border border-purple-400/50 text-purple-200 text-sm font-semibold">
                        {game.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(game.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/0 via-transparent to-transparent group-hover:from-cyan-600/20 transition-all pointer-events-none" />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/jogos"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-all font-bold text-lg"
            >
              🎮 Ver Todos os +50 Jogos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - TIMELINE */}
      <section className="py-32 border-t border-purple-500/30 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 text-white">
            Comece em 4 Passos
          </h2>
          <p className="text-center text-gray-400 mb-20 text-lg">
            Do zero ao herói em minutos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
            {[
              { number: "1", title: "Cadastre-se", desc: "Registre com email", icon: "📝" },
              { number: "2", title: "Escolha", desc: "Selecione seu jogo", icon: "🎮" },
              { number: "3", title: "Jogue", desc: "Ganhe pontos", icon: "⚡" },
              { number: "4", title: "Domine", desc: "Suba no ranking", icon: "👑" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {/* Card */}
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl border border-purple-400/50 p-8 text-center h-full hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6 font-bold text-xl text-white">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>

                {/* Arrow Connector */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - PREMIUM */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 border-2 border-purple-400/50 p-16 text-center group hover:border-cyan-400/80 transition-all">
            {/* Background Glow */}
            <div className="absolute -inset-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur-2xl transition-all" />

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 relative z-10">
              Pronto para a <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Próxima Partida?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 relative z-10 max-w-2xl mx-auto">
              Milhares de jogadores já estão se divertindo. Junte-se agora e comece sua jornada para o topo do ranking!
            </p>

            <Link
              href="/jogos"
              className="inline-block relative z-10 px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl hover:from-cyan-600 hover:to-purple-600 transition-all font-bold text-xl shadow-2xl hover:shadow-cyan-500/50"
            >
              🚀 Jogar Agora - É Grátis!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
