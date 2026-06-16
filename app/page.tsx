'use client';

import Link from "next/link";

export default function Home() {
  const trendingGames = [
    { name: 'Flappy Bird', category: 'Ação/Fácil' },
    { name: 'Space Shooter', category: 'Ação/Médio' },
    { name: 'Maze Runner', category: 'Puzzle/Difícil' },
    { name: 'Puzzle Quest', category: 'Puzzle/Médio' },
    { name: 'Dino Jump', category: 'Ação/Fácil' },
    { name: 'Memory Game', category: 'Puzzle/Fácil' },
  ];

  return (
    <main className="min-h-screen" style={{backgroundColor: '#1a0033', position: 'relative', overflow: 'hidden'}}>
      {/* Animated Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: '#ffffff',
              opacity: Math.random() * 0.7 + 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* CHECKERED HEADER - Colorful */}
      <div className="w-full h-6 flex relative z-10" style={{
        background: 'repeating-linear-gradient(45deg, #ffff00 0px, #ffff00 6px, #0088ff 6px, #0088ff 12px, #00ff00 12px, #00ff00 18px, #ff00ff 18px, #ff00ff 24px)',
        boxShadow: '0 4px 0px rgba(0, 255, 255, 0.8)'
      }}>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-20 px-4 sm:px-6 py-16 sm:py-24 text-center min-h-screen flex items-center justify-center">
        {/* Main Titles */}
        <div>
          {/* GAMES */}
          <h1
            className="leading-none mb-0"
            style={{
              fontSize: 'clamp(2.5rem, 14vw, 5.5rem)',
              fontFamily: "'Press Start 2P', cursive",
              color: '#00ff00',
              letterSpacing: '6px',
              textShadow: '0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00, 0 0 80px rgba(0, 255, 0, 0.6), 3px 3px 0px #ff00ff',
              fontWeight: 'bold'
            }}
          >
            GAMES
          </h1>

          {/* HUB */}
          <h1
            className="leading-none mt-0"
            style={{
              fontSize: 'clamp(2.5rem, 14vw, 5.5rem)',
              fontFamily: "'Press Start 2P', cursive",
              color: '#ff00ff',
              letterSpacing: '6px',
              textShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 80px rgba(255, 0, 255, 0.6), 3px 3px 0px #00ff00',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}
          >
            HUB
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg mb-6" style={{fontFamily: "'Space Mono', monospace", color: '#00ffff', letterSpacing: '2px', fontWeight: 'bold', textShadow: '0 0 10px #00ffff'}}>
            O UNIVERSO DOS JOGOS
          </p>

          {/* Description Lines */}
          <p className="text-xs sm:text-sm mb-3" style={{fontFamily: "'Space Mono', monospace", color: '#ffff00', fontWeight: 'bold', textShadow: '0 0 5px #ffff00'}}>
            &gt;&gt;&gt; EXPLORE CENTENAS DE JOGOS INCRÍVEIS &lt;&lt;&lt;
          </p>
          <p className="text-xs sm:text-sm mb-8" style={{fontFamily: "'Space Mono', monospace", color: '#ffff00', fontWeight: 'bold', textShadow: '0 0 5px #ffff00'}}>
            &gt;&gt;&gt; COMPITA GLOBALMENTE E DOMINE OS RANKINGS &lt;&lt;&lt;
          </p>

          {/* CTA Buttons - Neon Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/jogos"
              className="px-8 sm:px-12 py-3 text-sm sm:text-base font-black transition-all hover:scale-110"
              style={{
                color: '#00ff00',
                fontFamily: "'Space Mono', monospace",
                border: '3px solid #00ff00',
                backgroundColor: 'transparent',
                textShadow: '0 0 10px #00ff00',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.8), inset 0 0 20px rgba(0, 255, 0, 0.1)',
                letterSpacing: '1px'
              }}
            >
              ▶ EXPLORAR
            </Link>
            <Link
              href="/ranking"
              className="px-8 sm:px-12 py-3 text-sm sm:text-base font-black transition-all hover:scale-110"
              style={{
                color: '#ff00ff',
                fontFamily: "'Space Mono', monospace",
                border: '3px solid #ff00ff',
                backgroundColor: 'transparent',
                textShadow: '0 0 10px #ff00ff',
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.8), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                letterSpacing: '1px'
              }}
            >
              👑 RANKING
            </Link>
          </div>

          {/* Stats - Neon Style */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: '1000+', label: 'PLAYERS', color: '#00ff00' },
              { value: '50+', label: 'GAMES', color: '#ff00ff' },
              { value: '24/7', label: 'ONLINE', color: '#00ffff' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 transition-all hover:scale-105"
                style={{
                  border: `3px solid ${stat.color}`,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: `0 0 15px ${stat.color}, inset 0 0 15px ${stat.color}20`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <p className="font-black text-2xl mb-2" style={{color: stat.color, fontFamily: "'Orbitron', sans-serif", textShadow: `0 0 10px ${stat.color}`}}>
                  {stat.value}
                </p>
                <p className="text-xs font-bold" style={{color: stat.color, fontFamily: "'Space Mono', monospace", letterSpacing: '1px'}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative Triangles */}
          <div className="flex gap-4 justify-center mt-12">
            <div style={{width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '25px solid #ffff00'}} />
            <div style={{width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '25px solid #ff00ff'}} />
            <div style={{width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '25px solid #00ffff'}} />
          </div>
        </div>
      </section>

      {/* GAMES SHOWCASE */}
      <section className="relative z-20 px-4 sm:px-6 py-16 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10" style={{fontFamily: "'Press Start 2P', cursive", color: '#00ffff', textShadow: '0 0 20px #00ffff'}}>
            ◄ EM ALTA ►
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingGames.map((game, i) => (
              <Link
                key={i}
                href={`/jogos/${i}`}
                className="group transition-all hover:scale-105 overflow-hidden"
                style={{
                  border: '3px solid #00ffff',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}
              >
                <div
                  className="aspect-video flex items-center justify-center text-5xl relative"
                  style={{
                    background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                    boxShadow: 'inset 0 0 30px rgba(0, 255, 255, 0.3)'
                  }}
                >
                  <span style={{textShadow: '0 0 20px rgba(0,0,0,0.8)', filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.8))'}}>🎮</span>
                </div>

                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '12px', borderTop: '2px solid #00ffff'}}>
                  <h3 className="font-black text-sm mb-2" style={{fontFamily: "'Space Mono', monospace", color: '#00ffff', textShadow: '0 0 10px #00ffff'}}>
                    {game.name}
                  </h3>
                  <p className="text-xs" style={{fontFamily: "'Space Mono', monospace", color: '#ffff00', marginBottom: '8px'}}>
                    {game.category}
                  </p>
                  <button
                    className="w-full py-2 text-xs font-black transition-all"
                    style={{
                      color: '#00ff00',
                      fontFamily: "'Space Mono', monospace",
                      border: '2px solid #00ff00',
                      backgroundColor: 'transparent',
                      textShadow: '0 0 10px #00ff00',
                      boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)'
                    }}
                  >
                    ▶ JOGAR
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
