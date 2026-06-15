import Link from "next/link";
import { Gamepad2, Zap, Trophy, Sparkles, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/50 text-cyan-300 text-sm font-semibold">
              🎮 Plataforma de Jogos Multiplay
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Bem-vindo ao <br /> Games Hub
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mergulhe em um universo de entretenimento infinito. Jogue, compita e desfrute de centenas de jogos incríveis com amigos do mundo todo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/jogos"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all font-bold text-lg shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              Começar a Jogar
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/ranking"
              className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-xl hover:bg-purple-400/10 transition-all font-bold text-lg"
            >
              Ver Ranking
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm">
            <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/50">
              <p className="text-2xl font-bold text-cyan-300">1000+</p>
              <p className="text-gray-400">Jogadores Ativos</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/50">
              <p className="text-2xl font-bold text-purple-300">50+</p>
              <p className="text-gray-400">Jogos Incríveis</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/50">
              <p className="text-2xl font-bold text-pink-300">24/7</p>
              <p className="text-gray-400">Sempre Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Por Que Games Hub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Diversos Jogos",
                desc: "Ação, Terror, RPG, Puzzle, Estratégia e muito mais para todos os gostos",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Zap,
                title: "Jogabilidade Rápida",
                desc: "Divirta-se com sessões rápidas ou longas partidas quando tiver tempo",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Trophy,
                title: "Ranking Global",
                desc: "Compete com jogadores do mundo e suba nos rankings",
                color: "from-pink-500 to-red-500",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/80 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all`} />

                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Preview */}
      <section className="py-20 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Jogos em Destaque
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Confira nossa coleção de jogos incríveis prontos para você jogar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Flappy Bird Clone", emoji: "🐦", category: "Ação", rating: 5 },
              { name: "Space Shooter", emoji: "🚀", category: "Ação", rating: 5 },
              { name: "Maze Runner", emoji: "🎯", category: "Puzzle", rating: 4 },
              { name: "Dragon Quest", emoji: "🐉", category: "RPG", rating: 5 },
              { name: "Night Terror", emoji: "👻", category: "Terror", rating: 4 },
              { name: "Tower Defense", emoji: "🏰", category: "Estratégia", rating: 5 },
            ].map((game, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-purple-900 border border-purple-400/30 hover:border-purple-400/80 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {game.emoji}
                </div>

                <div className="p-6 relative z-10 bg-gradient-to-t from-slate-900/90 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400/50 text-purple-300">
                      {game.category}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < game.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 via-transparent to-transparent group-hover:from-purple-600/20 transition-all pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/jogos"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 transition-all font-bold"
            >
              Ver Todos os Jogos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1", title: "Crie Sua Conta", desc: "Registre-se rapidamente com email e username" },
              { number: "2", title: "Escolha um Jogo", desc: "Explore vários gêneros e encontre seus favoritos" },
              { number: "3", title: "Jogue e Pontue", desc: "Acumule pontos e desbloqueie conquistas" },
              { number: "4", title: "Suba no Ranking", desc: "Compita com amigos e jogadores do mundo" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl border border-purple-400/50 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6 font-bold text-2xl text-white">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>

                {idx < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-purple-400/50 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-5 transition-opacity rounded-2xl" />

            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
              Pronto para se divertir?
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Junte-se a milhares de jogadores. Jogue agora, sem compromisso.
            </p>

            <Link
              href="/jogos"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all font-bold text-lg shadow-xl hover:shadow-purple-500/50 relative z-10"
            >
              Começar Gratuitamente
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/30 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🎮</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Games Hub
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Sua plataforma de jogos online. Jogue, compita e divirta-se com amigos do mundo todo.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/jogos" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Jogos
                  </Link>
                </li>
                <li>
                  <Link href="/ranking" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Ranking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Conta</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/login" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Criar Conta
                  </Link>
                </li>
                <li>
                  <Link href="/perfil" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Perfil
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Categorias</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Ação</li>
                <li className="text-gray-400">RPG</li>
                <li className="text-gray-400">Puzzle</li>
                <li className="text-gray-400">Estratégia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/30 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Games Hub. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
