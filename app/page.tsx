import Link from "next/link";
import { Gamepad2, Zap, Trophy, Sparkles, ArrowRight, Star, Flame, Crown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section - 90s Vaporwave */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .1) 25%, rgba(0, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .1) 75%, rgba(0, 255, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 150, .1) 25%, rgba(255, 0, 150, .1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 150, .1) 75%, rgba(255, 0, 150, .1) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-cyan-500/30 rotate-45 animate-pulse" />
          <div className="absolute bottom-32 right-20 w-56 h-56 border-2 border-purple-500/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-10 w-32 h-32 border-2 border-pink-500/20 animate-pulse delay-500" />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="mb-12 inline-block">
            <span className="px-6 py-3 rounded-none border-2 border-cyan-400 text-cyan-300 text-sm font-mono tracking-wider" style={{fontFamily: "'Space Mono', monospace"}}>
              ⚡ RETRO GAMING PLATFORM ⚡
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mb-8">
            <span
              className="block mb-2"
              style={{
                fontSize: '4rem',
                fontFamily: "'Press Start 2P', cursive",
                color: '#06b6d4',
                letterSpacing: '4px',
                textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 50px rgba(255, 0, 150, 1), 0 0 60px rgba(255, 0, 150, 0.8), 0 0 70px rgba(255, 0, 150, 0.6), 2px 2px 5px rgba(255, 0, 150, 0.8), -2px -2px 5px rgba(0, 255, 255, 0.8), 0 0 100px rgba(0, 255, 255, 0.4)',
                animation: 'neon-flicker 0.15s infinite'
              }}
            >
              GAMES HUB
            </span>
            <span
              className="block text-2xl"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#ffffff',
                letterSpacing: '2px',
                textShadow: '0 0 10px rgba(255, 0, 150, 1), 0 0 20px rgba(255, 0, 150, 0.8)'
              }}
            >
              O UNIVERSO DOS JOGOS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg mb-16 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
            &gt; Explore centenas de jogos incríveis<br/>
            &gt; Compita globalmente e domine os rankings<br/>
            &gt; Sua próxima aventura começa aqui &lt;
          </p>

          {/* CTA Buttons - Vaporwave Style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link
              href="/jogos"
              className="group relative px-12 py-4 font-mono text-lg font-bold transition-all overflow-hidden"
              style={{
                border: '2px solid #06b6d4',
                color: '#06b6d4',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                ▶ JOGAR AGORA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-20 transition-all" />
            </Link>
            <Link
              href="/ranking"
              className="group relative px-12 py-4 font-mono text-lg font-bold transition-all overflow-hidden"
              style={{
                border: '2px solid #ff0096',
                color: '#ff0096',
                textShadow: '0 0 10px rgba(255, 0, 150, 0.8)',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                ◆ RANKING
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-transparent opacity-0 group-hover:opacity-20 transition-all" />
            </Link>
          </div>

          {/* Stats Grid - Minimalist */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "1000+", label: "PLAYERS", icon: "◆" },
              { value: "50+", label: "GAMES", icon: "▲" },
              { value: "24/7", label: "ONLINE", icon: "●" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-6 transition-all cursor-pointer"
                style={{
                  border: '2px solid rgba(0, 255, 255, 0.3)',
                  backgroundColor: 'rgba(0, 255, 255, 0.05)'
                }}
              >
                <p className="text-2xl font-bold mb-2" style={{color: '#06b6d4', fontFamily: "'Space Mono', monospace"}}>
                  {stat.icon}
                </p>
                <p className="text-2xl font-black" style={{color: '#ff0096', fontFamily: "'Orbitron', sans-serif"}}>
                  {stat.value}
                </p>
                <p className="text-xs mt-2 tracking-widest" style={{color: '#b0e0e6', fontFamily: "'Space Mono', monospace"}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - 90s Grid Style */}
      <section className="py-32 border-t-2 border-cyan-500/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-4 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'}}>
            POR QUE GAMES HUB?
          </h2>
          <p className="text-center mb-16 text-sm tracking-widest" style={{fontFamily: "'Space Mono', monospace", color: '#ff0096'}}>
            &gt;&gt; A PLATAFORMA MAIS COMPLETA PARA VOCÊ SE DIVERTIR &lt;&lt;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "DIVERSOS GÊNEROS",
                desc: "Ação, Terror, RPG,\nPuzzle, Estratégia",
                icon: "▶",
                color: "#06b6d4"
              },
              {
                title: "SESSÕES RÁPIDAS",
                desc: "Jogar entre aulas ou\nlongas maratonas",
                icon: "⚡",
                color: "#ff0096"
              },
              {
                title: "RANKING GLOBAL",
                desc: "Compete com jogadores\ndo mundo inteiro",
                icon: "◆",
                color: "#00ffff"
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 transition-all hover:scale-105 cursor-pointer"
                style={{
                  border: `2px solid ${feature.color}`,
                  backgroundColor: `${feature.color}15`,
                  textShadow: `0 0 10px ${feature.color}80`
                }}
              >
                <p className="text-4xl mb-4">{feature.icon}</p>
                <h3 className="text-xl font-black mb-3 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: feature.color}}>
                  {feature.title}
                </h3>
                <p className="text-sm whitespace-pre-wrap" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Preview - Pixel Art Grid */}
      <section className="py-32 border-t-2 border-purple-500/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-2 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#ff0096', textShadow: '0 0 20px rgba(255, 0, 150, 0.6)'}}>
            JOGOS EM DESTAQUE
          </h2>
          <p className="text-center mb-16 text-sm tracking-widest" style={{fontFamily: "'Space Mono', monospace", color: '#06b6d4'}}>
            &gt;&gt; ESCOLHA ENTRE CENTENAS DE TÍTULOS INCRÍVEIS &lt;&lt;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "FLAPPY BIRD", emoji: "🐦", category: "AÇÃO" },
              { name: "SPACE SHOOTER", emoji: "🚀", category: "AÇÃO" },
              { name: "MAZE RUNNER", emoji: "🎯", category: "PUZZLE" },
            ].map((game, idx) => (
              <Link
                key={idx}
                href="/jogos"
                className="group relative overflow-hidden transition-all hover:scale-105"
                style={{
                  border: '2px solid rgba(0, 255, 255, 0.5)',
                  backgroundColor: 'rgba(88, 28, 135, 0.3)'
                }}
              >
                {/* Game Emoji */}
                <div className="aspect-video flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: 'rgba(0, 255, 255, 0.1)'}}>
                  {game.emoji}
                </div>

                {/* Game Info */}
                <div className="p-6">
                  <h3 className="text-lg font-black mb-2 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
                    {game.name}
                  </h3>
                  <p className="text-xs tracking-widest mb-4" style={{fontFamily: "'Space Mono', monospace", color: '#ff0096'}}>
                    {game.category}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: '#ffd700'}}>★</span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" style={{boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.3)'}} />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/jogos"
              className="inline-block px-10 py-4 font-mono font-bold transition-all tracking-wider"
              style={{
                border: '2px solid #06b6d4',
                color: '#06b6d4',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              ▶ VER TODOS OS +50 JOGOS
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Retro Steps */}
      <section className="py-32 border-t-2 border-cyan-500/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-2 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'}}>
            COMECE EM 4 PASSOS
          </h2>
          <p className="text-center mb-16 text-sm tracking-widest" style={{fontFamily: "'Space Mono', monospace", color: '#ff0096'}}>
            &gt;&gt; DO ZERO AO HERÓI EM MINUTOS &lt;&lt;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { number: "1", title: "CADASTRE-SE", desc: "Email", icon: "📝" },
              { number: "2", title: "ESCOLHA", desc: "Seu Jogo", icon: "🎮" },
              { number: "3", title: "JOGUE", desc: "Ganhe Pontos", icon: "⚡" },
              { number: "4", title: "DOMINE", desc: "Ranking", icon: "👑" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 text-center transition-all hover:scale-105 relative"
                style={{
                  border: '2px solid rgba(255, 0, 150, 0.5)',
                  backgroundColor: 'rgba(0, 255, 255, 0.05)'
                }}
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg" style={{border: '2px solid #06b6d4', color: '#06b6d4', fontFamily: "'Space Mono', monospace"}}>
                  {step.number}
                </div>
                <h3 className="text-sm font-black mb-1 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#ff0096'}}>
                  {step.title}
                </h3>
                <p className="text-xs" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Vaporwave */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden p-12 text-center group transition-all" style={{border: '3px double #06b6d4', backgroundColor: 'rgba(0, 255, 255, 0.08)'}}>
            {/* Geometric decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-pink-500/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-cyan-500/40" />

            <h2 className="text-4xl md:text-5xl font-black mb-4 relative z-10 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'}}>
              PRONTO PARA A PRÓXIMA PARTIDA?
            </h2>
            <p className="text-lg mb-10 relative z-10 max-w-2xl mx-auto" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
              &gt; Milhares de jogadores já estão se divertindo<br/>
              &gt; Comece sua jornada para o topo do ranking agora &lt;
            </p>

            <Link
              href="/jogos"
              className="inline-block relative z-10 px-12 py-5 font-mono font-bold text-lg transition-all tracking-wider"
              style={{
                border: '2px solid #ff0096',
                color: '#ff0096',
                textShadow: '0 0 10px rgba(255, 0, 150, 0.8)',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              ▶ JOGAR AGORA - GRÁTIS!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
