'use client';

import Link from "next/link";

export default function Home() {
  const categories = [
    { emoji: '⚔️', count: 12400, color: '#ff00ff' },
    { emoji: '🎯', count: 8200, color: '#00ffff' },
    { emoji: '🎨', count: 5100, color: '#ffff00' },
    { emoji: '🎲', count: 6700, color: '#00ff00' },
    { emoji: '⚡', count: 9300, color: '#ff8800' },
    { emoji: '🏀', count: 7800, color: '#00ff00' },
  ];

  const games = [
    { name: 'Flappy Bird', file: 'Flappy Bird.exe', badge: 'HOT', badgeColor: '#ff0000', category: 'AÇÃO', difficulty: 'FÁCIL' },
    { name: 'Space Shooter', file: 'Space Shooter.exe', badge: 'TOP', badgeColor: '#ffff00', category: 'AÇÃO', difficulty: 'MÉDIO' },
    { name: 'Maze Runner', file: 'Maze Runner.exe', badge: 'NEW', badgeColor: '#ffff00', category: 'PUZZLE', difficulty: 'DIFÍCIL' },
    { name: 'Puzzle Quest', file: 'Puzzle Quest.exe', badge: 'GEM', badgeColor: '#00ffff', category: 'PUZZLE', difficulty: 'MÉDIO' },
    { name: 'Dino Jump', file: 'Dino Jump.exe', badge: 'FAST', badgeColor: '#ff8800', category: 'AÇÃO', difficulty: 'FÁCIL' },
    { name: 'Memory Game', file: 'Memory Game.exe', badge: 'PICK', badgeColor: '#00ffff', category: 'PUZZLE', difficulty: 'FÁCIL' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-slate-900 to-purple-950 relative overflow-hidden">
      {/* CHECKERED HEADER - MUST BE VISIBLE */}
      <div style={{
        width: '100%',
        height: '24px',
        position: 'relative',
        zIndex: 50,
        background: 'repeating-linear-gradient(45deg, #00ffff 0px, #00ffff 8px, #ff00ff 8px, #ff00ff 16px)',
        boxShadow: '0 2px 0 rgba(0, 255, 255, 0.8)'
      }}>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-20 px-4 sm:px-6 py-16 sm:py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="mb-2" style={{
            fontSize: 'clamp(2rem, 12vw, 4.5rem)',
            fontFamily: "'Press Start 2P', cursive",
            color: '#ffffff',
            letterSpacing: '3px',
            textShadow: '3px 3px 0px #00ffff, 6px 6px 0px #ff00ff, 0 0 20px rgba(0, 255, 255, 0.8)',
            lineHeight: '1.1'
          }}>
            GAMES HUB
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg mb-4" style={{fontFamily: "'Space Mono', monospace", color: '#ff0000', letterSpacing: '1px', fontWeight: 'bold'}}>
            ⭐ O UNIVERSO DOS JOGOS ⭐
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm mb-6 max-w-2xl mx-auto" style={{fontFamily: "'Space Mono', monospace", color: '#cccccc'}}>
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings. 100% radical, 100% anos 90. 😎
          </p>

          {/* Yellow Description Lines - VISIBLE */}
          <div style={{backgroundColor: '#ffff00', padding: '8px', margin: '8px auto', maxWidth: '100%', fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: '#000000', fontSize: '12px'}}>
            &gt;&gt;&gt; EXPLORE CENTENAS DE JOGOS INCRÍVEIS &lt;&lt;&lt;
          </div>
          <div style={{backgroundColor: '#ffff00', padding: '8px', margin: '0 auto 16px auto', maxWidth: '100%', fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: '#000000', fontSize: '12px'}}>
            &gt;&gt;&gt; COMPITA GLOBALMENTE E DOMINE OS RANKINGS &lt;&lt;&lt;
          </div>

          {/* CTA Buttons - Proper Style */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 max-w-2xl mx-auto">
            <button
              className="w-full py-3 font-black text-sm transition-all hover:scale-105"
              style={{
                color: '#000000',
                backgroundColor: '#00ffff',
                border: 'none',
                fontFamily: "'Space Mono', monospace",
                cursor: 'pointer',
                textShadow: '0 0 5px rgba(0,0,0,0.3)'
              }}
            >
              ▶ EXPLORAR JOGOS
            </button>
            <button
              className="w-full py-3 font-black text-sm transition-all hover:scale-105"
              style={{
                color: '#ffffff',
                backgroundColor: '#ff00ff',
                border: 'none',
                fontFamily: "'Space Mono', monospace",
                cursor: 'pointer',
                textShadow: '0 0 5px rgba(0,0,0,0.3)'
              }}
            >
              👑 RANKING GLOBAL
            </button>
          </div>

          {/* Stats */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', maxWidth: '800px', margin: '0 auto'}}>
            {[
              { value: '1000+', label: 'PLAYERS', color: '#00ffff' },
              { value: '50+', label: 'GAMES', color: '#ff00ff' },
              { value: '24/7', label: 'ONLINE', color: '#00ffff' },
            ].map((stat, i) => (
              <div key={i} style={{
                border: `3px solid ${stat.color}`,
                backgroundColor: '#cccccc',
                padding: '12px',
                fontFamily: "'Space Mono', monospace",
                textAlign: 'center'
              }}>
                <p style={{color: '#000000', fontWeight: 'bold', margin: '0 0 4px 0', fontSize: '10px'}}>stats.exe</p>
                <p style={{color: stat.color, fontWeight: 'bold', margin: '6px 0', fontSize: '20px', fontFamily: "'Orbitron', sans-serif", textShadow: `0 0 10px ${stat.color}`}}>
                  {stat.value}
                </p>
                <p style={{color: '#000000', fontWeight: 'bold', margin: '4px 0 0 0', fontSize: '11px'}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GÊNEROS SECTION */}
      <section style={{position: 'relative', zIndex: 20, padding: '48px 16px', backgroundImage: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent)'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
            <h2 style={{fontFamily: "'Press Start 2P', cursive", color: '#00ffff', fontSize: 'clamp(1.2rem, 5vw, 2rem)', textShadow: '2px 2px 0px #ff00ff', margin: 0}}>
              ◄ GÊNEROS ►
            </h2>
            <p style={{fontFamily: "'Space Mono', monospace", color: '#ff00ff', fontSize: '12px', fontWeight: 'bold', margin: 0}}>
              VER TUDO →
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px'}}>
            {categories.map((cat, i) => (
              <div key={i} style={{
                border: `3px solid ${cat.color}`,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '16px 12px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: `0 0 15px ${cat.color}40`
              }}
              onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = `0 0 25px ${cat.color}80`}}
              onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 0 15px ${cat.color}40`}}
              >
                <p style={{fontSize: '2.5rem', margin: '0 0 8px 0'}}>{cat.emoji}</p>
                <p style={{fontFamily: "'Space Mono', monospace", color: cat.color, fontWeight: 'bold', margin: '0', fontSize: '12px'}}>
                  {(cat.count / 1000).toFixed(1)}k
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EM ALTA SECTION */}
      <section className="relative z-20 px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 style={{fontFamily: "'Press Start 2P', cursive", color: '#ffff00', fontSize: 'clamp(1.2rem, 5vw, 2rem)', textShadow: '2px 2px 0px #000000'}}>
              ▲ EM ALTA ▼
            </h2>
            <p style={{fontFamily: "'Space Mono', monospace", color: '#ffff00', fontSize: '12px', fontWeight: 'bold'}}>
              Mais jogados desta semana
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {games.map((game, i) => (
              <div key={i} style={{border: '3px solid #cccccc', overflow: 'hidden'}}>
                {/* Window Title Bar */}
                <div style={{
                  backgroundColor: '#000080',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 'bold',
                  padding: '2px 4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{game.file}</span>
                  <span>_⬜❌</span>
                </div>

                {/* Game Image */}
                <div style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    backgroundColor: game.badgeColor,
                    color: '#000000',
                    border: '2px solid #000000',
                    padding: '2px 6px',
                    fontSize: '8px',
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 'bold'
                  }}>
                    {game.badge}
                  </div>
                  <span style={{textShadow: '0 0 10px rgba(0,0,0,0.8)'}}>🎮</span>
                </div>

                {/* Game Info */}
                <div style={{backgroundColor: '#cccccc', padding: '6px'}}>
                  <h3 style={{fontFamily: "'Space Mono', monospace", color: '#000000', fontWeight: 'bold', margin: '0 0 4px 0', fontSize: '10px'}}>
                    {game.name}
                  </h3>
                  <div style={{display: 'flex', gap: '2px', marginBottom: '4px'}}>
                    <span style={{fontSize: '8px', backgroundColor: '#ff00ff', color: '#ffffff', padding: '1px 3px', fontWeight: 'bold', border: '1px solid #000000', fontFamily: "'Space Mono', monospace"}}>
                      {game.category}
                    </span>
                    <span style={{fontSize: '8px', backgroundColor: '#ffff00', color: '#000000', padding: '1px 3px', fontWeight: 'bold', border: '1px solid #000000', fontFamily: "'Space Mono', monospace"}}>
                      {game.difficulty}
                    </span>
                  </div>
                  <button style={{
                    width: '100%',
                    padding: '3px 0',
                    fontSize: '8px',
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 'bold',
                    color: '#000000',
                    backgroundColor: '#cccccc',
                    border: '1px solid #000000',
                    borderTop: '1px solid #000000',
                    borderBottom: '2px solid #000000',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    ▶ JOGAR AGORA
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
