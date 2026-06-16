import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl w-full px-6 mx-auto text-center relative z-10">
          {/* Badge */}
          <p className="text-sm tracking-widest mb-12" style={{fontFamily: "'Space Mono', monospace", color: '#06b6d4', letterSpacing: '2px'}}>
            ⚡ PLATAFORMA DE JOGOS NEXT-GEN
          </p>

          {/* Main Title */}
          <h1 className="mb-6" style={{
            fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            fontFamily: "'Press Start 2P', cursive",
            color: '#06b6d4',
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 150, 0.6)',
            animation: 'neon-flicker 0.15s infinite',
            lineHeight: '1.1'
          }}>
            GAMES HUB
          </h1>

          {/* Subtitle */}
          <p className="text-2xl mb-8" style={{fontFamily: "'Orbitron', sans-serif", color: '#ffffff', letterSpacing: '1px', textShadow: '0 0 15px rgba(255, 0, 150, 0.6)'}}>
            O Universo dos Jogos
          </p>

          {/* Description */}
          <p className="text-base mb-12 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings. Sua próxima aventura começa aqui.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/jogos"
              className="px-8 py-3 border-2 font-bold text-sm tracking-wider transition-all hover:shadow-lg"
              style={{
                borderColor: '#06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
              }}
            >
              ▶ JOGAR AGORA
            </Link>
            <Link
              href="/ranking"
              className="px-8 py-3 border-2 font-bold text-sm tracking-wider transition-all hover:shadow-lg"
              style={{
                borderColor: '#ff0096',
                color: '#ff0096',
                fontFamily: "'Space Mono', monospace",
                textShadow: '0 0 10px rgba(255, 0, 150, 0.6)'
              }}
            >
              👑 RANKING
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: '1000+', label: 'PLAYERS' },
              { value: '50+', label: 'GAMES' },
              { value: '24/7', label: 'ONLINE' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 border-2" style={{borderColor: 'rgba(0, 255, 255, 0.3)', backgroundColor: 'rgba(0, 255, 255, 0.08)'}}>
                <p className="text-xl font-black" style={{color: '#ff0096', fontFamily: "'Orbitron', sans-serif", marginBottom: '4px'}}>
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest" style={{color: '#b0e0e6', fontFamily: "'Space Mono', monospace"}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-24 px-6" style={{borderTop: '2px solid rgba(0, 255, 255, 0.3)'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'}}>
            POR QUE GAMES HUB?
          </h2>
          <p className="text-center text-xs tracking-widest mb-16" style={{fontFamily: "'Space Mono', monospace", color: '#ff0096'}}>
            A PLATAFORMA MAIS COMPLETA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎮', title: 'DIVERSOS GÊNEROS', desc: 'Ação, Terror, RPG, Puzzle, Estratégia' },
              { icon: '⚡', title: 'SESSÕES RÁPIDAS', desc: 'Jogue quando quiser, entre aulas ou maratonas' },
              { icon: '👑', title: 'RANKING GLOBAL', desc: 'Compita com jogadores do mundo inteiro' },
            ].map((f) => (
              <div key={f.title} className="p-6 border-2 transition-all hover:scale-105" style={{borderColor: 'rgba(0, 255, 255, 0.4)', backgroundColor: 'rgba(0, 255, 255, 0.08)'}}>
                <p className="text-3xl mb-3">{f.icon}</p>
                <h3 className="text-sm font-black mb-2 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
                  {f.title}
                </h3>
                <p className="text-xs" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6', lineHeight: '1.5'}}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GAMES SECTION ===== */}
      <section className="py-24 px-6" style={{borderTop: '2px solid rgba(255, 0, 150, 0.3)'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#ff0096', textShadow: '0 0 15px rgba(255, 0, 150, 0.5)'}}>
            JOGOS EM DESTAQUE
          </h2>
          <p className="text-center text-xs tracking-widest mb-16" style={{fontFamily: "'Space Mono', monospace", color: '#06b6d4'}}>
            ESCOLHA ENTRE CENTENAS DE TÍTULOS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'FLAPPY BIRD', emoji: '🐦', cat: 'AÇÃO' },
              { name: 'SPACE SHOOTER', emoji: '🚀', cat: 'AÇÃO' },
              { name: 'MAZE RUNNER', emoji: '🎯', cat: 'PUZZLE' },
            ].map((game) => (
              <Link key={game.name} href="/jogos" className="group border-2 overflow-hidden transition-all hover:scale-105" style={{borderColor: 'rgba(0, 255, 255, 0.4)', backgroundColor: 'rgba(0, 255, 255, 0.05)'}}>
                <div className="aspect-video flex items-center justify-center text-5xl" style={{backgroundColor: 'rgba(0, 255, 255, 0.08)'}}>
                  {game.emoji}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-black mb-2 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
                    {game.name}
                  </h3>
                  <p className="text-xs mb-3 tracking-widest" style={{fontFamily: "'Space Mono', monospace", color: '#ff0096'}}>
                    {game.cat}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: '#ffd700'}}>★</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/jogos" className="px-8 py-3 border-2 font-bold text-sm tracking-wider inline-block transition-all hover:shadow-lg" style={{borderColor: '#06b6d4', color: '#06b6d4', fontFamily: "'Space Mono', monospace", textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'}}>
              ▶ VER TODOS OS +50 JOGOS
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto p-12 border-4 text-center" style={{borderStyle: 'double', borderColor: '#06b6d4', backgroundColor: 'rgba(0, 255, 255, 0.05)'}}>
          <h2 className="text-3xl font-black mb-4 tracking-wider" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'}}>
            PRONTO PARA A PRÓXIMA PARTIDA?
          </h2>
          <p className="text-sm mb-8 leading-relaxed" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
            Milhares de jogadores já estão se divertindo. Comece sua jornada para o topo do ranking agora!
          </p>
          <Link href="/jogos" className="px-8 py-3 border-2 font-bold text-sm tracking-wider inline-block transition-all hover:shadow-lg" style={{borderColor: '#ff0096', color: '#ff0096', fontFamily: "'Space Mono', monospace", textShadow: '0 0 10px rgba(255, 0, 150, 0.6)'}}>
            ▶ JOGAR AGORA
          </Link>
        </div>
      </section>
    </main>
  );
}
