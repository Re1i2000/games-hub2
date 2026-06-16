import Link from "next/link";

export default function Home() {
  const games = [
    { id: 1, name: 'Flappy Bird', emoji: '🐦', category: 'Ação', difficulty: 'Easy' },
    { id: 2, name: 'Space Shooter', emoji: '🚀', category: 'Ação', difficulty: 'Medium' },
    { id: 3, name: 'Maze Runner', emoji: '🎯', category: 'Puzzle', difficulty: 'Hard' },
    { id: 4, name: 'Puzzle Quest', emoji: '🧩', category: 'Puzzle', difficulty: 'Medium' },
    { id: 5, name: 'Dino Jump', emoji: '🦕', category: 'Ação', difficulty: 'Easy' },
    { id: 6, name: 'Memory Game', emoji: '🧠', category: 'Puzzle', difficulty: 'Easy' },
    { id: 7, name: 'Brick Break', emoji: '🧱', category: 'Ação', difficulty: 'Medium' },
    { id: 8, name: 'Snake Master', emoji: '🐍', category: 'Estratégia', difficulty: 'Hard' },
  ];

  return (
    <main className="min-h-screen" style={{backgroundColor: '#0a0e27'}}>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full text-center">
          {/* Main Title with Neon Glow */}
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(3rem, 12vw, 5rem)',
              fontFamily: "'Press Start 2P', cursive",
              color: '#06b6d4',
              letterSpacing: '3px',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 150, 0.6)',
              animation: 'neon-flicker 0.15s infinite',
              lineHeight: '1.1'
            }}
          >
            GAMES HUB
          </h1>

          {/* Subtitle */}
          <p className="text-xl mb-6" style={{fontFamily: "'Orbitron', sans-serif", color: '#ffffff', letterSpacing: '1px', textShadow: '0 0 10px rgba(255, 0, 150, 0.5)'}}>
            O Universo dos Jogos
          </p>

          {/* Description */}
          <p className="text-sm mb-10 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6'}}>
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/jogos"
              className="px-10 py-3 border-2 font-bold text-sm tracking-wider transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                backgroundColor: 'rgba(6, 182, 212, 0.1)'
              }}
            >
              ▶ EXPLORAR JOGOS
            </Link>
            <Link
              href="/ranking"
              className="px-10 py-3 border-2 font-bold text-sm tracking-wider transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#ff0096',
                color: '#ff0096',
                fontFamily: "'Space Mono', monospace",
                backgroundColor: 'rgba(255, 0, 150, 0.1)'
              }}
            >
              👑 RANKING GLOBAL
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[
              { value: '1000+', label: 'PLAYERS' },
              { value: '50+', label: 'GAMES' },
              { value: '24/7', label: 'ONLINE' },
            ].map((stat) => (
              <div key={stat.label} className="p-3" style={{backgroundColor: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.2)'}}>
                <p className="font-black text-lg" style={{color: '#ff0096', fontFamily: "'Orbitron', sans-serif"}}>
                  {stat.value}
                </p>
                <p className="text-xs" style={{color: '#b0e0e6', fontFamily: "'Space Mono', monospace", marginTop: '4px'}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION - Grid Style */}
      <section className="px-6 py-20" style={{borderTop: '1px solid rgba(6, 182, 212, 0.2)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-2" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
              Explore
            </h2>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Buscar jogos..."
                  className="w-full px-4 py-2 text-sm"
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.05)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    color: '#b0e0e6',
                    fontFamily: "'Space Mono', monospace"
                  }}
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 flex-wrap">
                {['Todos', 'Fácil', 'Médio', 'Difícil'].map((filter) => (
                  <button
                    key={filter}
                    className="px-3 py-2 text-xs font-bold border transition-all"
                    style={{
                      borderColor: filter === 'Todos' ? '#06b6d4' : 'rgba(6, 182, 212, 0.2)',
                      color: filter === 'Todos' ? '#06b6d4' : '#b0e0e6',
                      backgroundColor: filter === 'Todos' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                      fontFamily: "'Space Mono', monospace"
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/jogos/${game.id}`}
                className="group overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  cursor: 'pointer'
                }}
              >
                {/* Game Image/Emoji */}
                <div
                  className="aspect-video flex items-center justify-center text-5xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.1)'
                  }}
                >
                  {game.emoji}
                </div>

                {/* Game Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
                    {game.name}
                  </h3>

                  {/* Category & Difficulty Badges */}
                  <div className="flex gap-2 flex-wrap mb-2">
                    <span className="text-xs px-2 py-1" style={{backgroundColor: 'rgba(0, 255, 255, 0.15)', color: '#06b6d4', border: '1px solid rgba(0, 255, 255, 0.3)', fontFamily: "'Space Mono', monospace"}}>
                      {game.category}
                    </span>
                    <span className="text-xs px-2 py-1" style={{backgroundColor: 'rgba(255, 0, 150, 0.15)', color: '#ff0096', border: '1px solid rgba(255, 0, 150, 0.3)', fontFamily: "'Space Mono', monospace"}}>
                      {game.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: i < 4 ? '#ffd700' : 'rgba(255, 215, 0, 0.3)'}}>★</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* See All Button */}
          <div className="text-center mt-12">
            <Link
              href="/jogos"
              className="px-8 py-3 border-2 font-bold text-sm tracking-wider inline-block transition-all"
              style={{
                borderColor: '#06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                backgroundColor: 'rgba(6, 182, 212, 0.1)'
              }}
            >
              ▶ VER TODOS OS JOGOS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
