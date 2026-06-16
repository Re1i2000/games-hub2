'use client';

import Link from "next/link";

export default function Home() {
  const categories = [
    { name: 'Ação', emoji: '⚔️', count: 12400, color: '#ff0096' },
    { name: 'Puzzle', emoji: '🧩', count: 8200, color: '#00ffff' },
    { name: 'Estratégia', emoji: '🎯', count: 5100, color: '#ffff00' },
    { name: 'RPG', emoji: '🗡️', count: 6700, color: '#00ff00' },
    { name: 'Corrida', emoji: '🏎️', count: 9300, color: '#ff00ff' },
    { name: 'Esportes', emoji: '🏀', count: 7800, color: '#ff8800' },
  ];

  const trendingGames = [
    { name: 'Flappy Bird', file: 'Flappy Bird.exe', badge: 'HOT', badgeColor: '#ff0000', gradient: 'from-cyan-500 to-purple-500', category: 'AçãoFÁCIL' },
    { name: 'Space Shooter', file: 'Space Shooter.exe', badge: 'TOP', badgeColor: '#ffff00', gradient: 'from-purple-500 to-pink-500', category: 'AçãoMÉDIO' },
    { name: 'Maze Runner', file: 'Maze Runner.exe', badge: 'NEW', badgeColor: '#ffff00', gradient: 'from-yellow-500 to-black', category: 'PuzzleDIFÍCIL' },
    { name: 'Puzzle Quest', file: 'Puzzle Quest.exe', badge: 'GEM', badgeColor: '#00ffff', gradient: 'from-green-500 to-black', category: 'PuzzleMÉDIO' },
    { name: 'Dino Jump', file: 'Dino Jump.exe', badge: 'FAST', badgeColor: '#ff8800', gradient: 'from-orange-500 to-black', category: 'AçãoFÁCIL' },
    { name: 'Memory Game', file: 'Memory Game.exe', badge: 'PICK', badgeColor: '#00ffff', gradient: 'from-blue-500 to-black', category: 'PuzzleFÁCIL' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-slate-950">
      {/* CHECKERED HEADER */}
      <div className="w-full h-8 flex" style={{background: 'repeating-linear-gradient(45deg, #00ffff 0px, #00ffff 8px, #ff00ff 8px, #ff00ff 16px)'}}>
      </div>

      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 text-center">
        {/* Main Title - Pixel Art Style */}
        <h1
          className="mb-4 leading-none"
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
            fontFamily: "'Press Start 2P', cursive",
            color: '#ffffff',
            textShadow: '3px 3px 0px #ff00ff, 6px 6px 0px #00ffff, 9px 9px 0px #ff0000',
            letterSpacing: '4px',
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))'
          }}
        >
          GAMES HUB
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg mb-6" style={{fontFamily: "'Space Mono', monospace", color: '#ff0000', letterSpacing: '2px', fontWeight: 'bold'}}>
          ⭐ O UNIVERSO DOS JOGOS ⭐
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm mb-8 max-w-2xl mx-auto" style={{fontFamily: "'Space Mono', monospace", color: '#cccccc'}}>
          Explore centenas de jogos incríveis, compita globalmente e domine os rankings. 100% radical, 100% anos 90. 😎
        </p>

        {/* CTA Buttons - Windows 95 Style */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/jogos"
            className="px-6 sm:px-10 py-3 text-sm sm:text-base font-bold transition-all hover:scale-105"
            style={{
              backgroundColor: '#00ffff',
              color: '#000000',
              border: '3px solid #00ffff',
              fontFamily: "'Space Mono', monospace",
              textShadow: '1px 1px 0px rgba(0,0,0,0.3)',
              boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.8), inset -1px -1px 0px rgba(0,0,0,0.3)'
            }}
          >
            ▶ EXPLORAR JOGOS
          </Link>
          <Link
            href="/ranking"
            className="px-6 sm:px-10 py-3 text-sm sm:text-base font-bold transition-all hover:scale-105"
            style={{
              backgroundColor: '#ff00ff',
              color: '#ffffff',
              border: '3px solid #ff00ff',
              fontFamily: "'Space Mono', monospace",
              textShadow: '1px 1px 0px rgba(0,0,0,0.3)',
              boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.8), inset -1px -1px 0px rgba(0,0,0,0.3)'
            }}
          >
            👑 RANKING GLOBAL
          </Link>
        </div>

        {/* Stats - Windows .exe style */}
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {[
            { file: 'stats.exe', value: '1000+', label: 'PLAYERS', color: '#00ffff' },
            { file: 'stats.exe', value: '50+', label: 'GAMES', color: '#00ffff' },
            { file: 'stats.exe', value: '24/7', label: 'ONLINE', color: '#00ffff' },
          ].map((stat, i) => (
            <div key={i} className="border-4" style={{borderColor: stat.color, backgroundColor: '#cccccc', padding: '6px 12px', minWidth: '120px'}}>
              <p className="text-xs" style={{fontFamily: "'Space Mono', monospace", color: '#000000', fontWeight: 'bold'}}>
                {stat.file}
              </p>
              <p className="text-lg font-black" style={{fontFamily: "'Orbitron', sans-serif", color: stat.color, textShadow: `0 0 10px ${stat.color}`}}>
                {stat.value}
              </p>
              <p className="text-xs" style={{fontFamily: "'Space Mono', monospace", color: '#000000', fontWeight: 'bold'}}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GÊNEROS SECTION */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-black" style={{fontFamily: "'Press Start 2P', cursive", color: '#00ffff', textShadow: '2px 2px 0px #ff00ff'}}>
              ◄ GÊNEROS ►
            </h2>
            <p style={{fontFamily: "'Space Mono', monospace", color: '#ff00ff', fontSize: '12px', fontWeight: 'bold'}}>
              VER TUDO →
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="p-3 border-4 transition-all hover:scale-105 cursor-pointer"
                style={{borderColor: cat.color, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
              >
                <p className="text-2xl mb-1">{cat.emoji}</p>
                <p className="text-sm font-bold" style={{fontFamily: "'Space Mono', monospace", color: cat.color}}>
                  {cat.count.toLocaleString()}
                </p>
                <p className="text-xs" style={{fontFamily: "'Space Mono', monospace", color: '#ffffff', fontSize: '10px'}}>
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EM ALTA SECTION */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black" style={{fontFamily: "'Press Start 2P', cursive", color: '#ffff00', textShadow: '2px 2px 0px #000000'}}>
              ▲ EM ALTA ▼
            </h2>
            <p style={{fontFamily: "'Space Mono', monospace", color: '#ffff00', fontSize: '12px', fontWeight: 'bold'}}>
              Mais jogados desta semana
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {trendingGames.map((game, i) => (
              <Link
                key={i}
                href={`/jogos/${i}`}
                className="group transition-all hover:scale-105 overflow-hidden"
                style={{border: '3px solid #cccccc'}}
              >
                {/* Window Title Bar */}
                <div
                  className="px-2 py-1 flex items-center justify-between"
                  style={{
                    backgroundColor: '#000080',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 'bold'
                  }}
                >
                  <span>{game.file}</span>
                  <span>_⬜❌</span>
                </div>

                {/* Game Image */}
                <div
                  className="aspect-video flex items-center justify-center text-4xl relative overflow-hidden group-hover:scale-110 transition-transform"
                  style={{background: `linear-gradient(135deg, var(--color1), var(--color2))`, '--color1': game.gradient.split(' to-')[0].replace('from-', ''), '--color2': game.gradient.split(' to-')[1]}}
                >
                  {/* Badge */}
                  <div
                    className="absolute top-2 left-2 px-2 py-1 text-xs font-black"
                    style={{
                      backgroundColor: game.badgeColor,
                      color: '#000000',
                      border: '2px solid #000000',
                      fontFamily: "'Space Mono', monospace"
                    }}
                  >
                    {game.badge}
                  </div>

                  {/* Placeholder Icon */}
                  <span style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>▌</span>
                </div>

                {/* Game Info */}
                <div style={{backgroundColor: '#cccccc', padding: '8px'}}>
                  <h3 className="font-bold text-xs mb-1" style={{fontFamily: "'Space Mono', monospace", color: '#000000'}}>
                    {game.name}
                  </h3>
                  <div className="flex gap-1 mb-2 flex-wrap">
                    <span className="text-xs px-1" style={{backgroundColor: '#ff00ff', color: '#ffffff', fontFamily: "'Space Mono', monospace", fontWeight: 'bold', border: '1px solid #000000'}}>
                      {game.category.slice(0, 6)}
                    </span>
                    <span className="text-xs px-1" style={{backgroundColor: '#ffff00', color: '#000000', fontFamily: "'Space Mono', monospace", fontWeight: 'bold', border: '1px solid #000000'}}>
                      {game.category.slice(6)}
                    </span>
                  </div>
                  <button
                    className="w-full text-xs font-bold py-1 border-t border-b-2"
                    style={{
                      backgroundColor: '#cccccc',
                      borderColor: '#000000',
                      fontFamily: "'Space Mono', monospace",
                      color: '#000000'
                    }}
                  >
                    ▶ JOGAR AGORA
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
