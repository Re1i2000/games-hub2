import Link from "next/link";

export default function Home() {
  const games = [
    { id: 1, name: 'Flappy Bird', emoji: '🐦', category: 'Ação', difficulty: 'Easy', rating: 5 },
    { id: 2, name: 'Space Shooter', emoji: '🚀', category: 'Ação', difficulty: 'Medium', rating: 5 },
    { id: 3, name: 'Maze Runner', emoji: '🎯', category: 'Puzzle', difficulty: 'Hard', rating: 4 },
    { id: 4, name: 'Puzzle Quest', emoji: '🧩', category: 'Puzzle', difficulty: 'Medium', rating: 4 },
    { id: 5, name: 'Dino Jump', emoji: '🦕', category: 'Ação', difficulty: 'Easy', rating: 5 },
    { id: 6, name: 'Memory Game', emoji: '🧠', category: 'Puzzle', difficulty: 'Easy', rating: 5 },
    { id: 7, name: 'Brick Break', emoji: '🧱', category: 'Ação', difficulty: 'Medium', rating: 4 },
    { id: 8, name: 'Snake Master', emoji: '🐍', category: 'Estratégia', difficulty: 'Hard', rating: 4 },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl w-full text-center">
          {/* Main Title */}
          <h1
            className="mb-4"
            style={{
              fontSize: 'clamp(2rem, 12vw, 4.5rem)',
              fontFamily: "'Press Start 2P', cursive",
              color: '#06b6d4',
              letterSpacing: '3px',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(255, 0, 150, 0.6)',
              animation: 'neon-flicker 0.15s infinite',
              lineHeight: '1.1'
            }}
          >
            GAMES HUB
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg mb-8" style={{fontFamily: "'Orbitron', sans-serif", color: '#ffffff', letterSpacing: '1px'}}>
            O Universo dos Jogos
          </p>

          {/* Description */}
          <p className="text-sm mb-10 max-w-xl mx-auto" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6', lineHeight: '1.6'}}>
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/jogos"
              className="px-6 sm:px-8 py-2 text-sm font-bold border transition-all hover:scale-105"
              style={{
                borderColor: '#06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                border: '1px solid rgba(6, 182, 212, 0.6)'
              }}
            >
              Explorar Jogos
            </Link>
            <Link
              href="/ranking"
              className="px-6 sm:px-8 py-2 text-sm font-bold border transition-all hover:scale-105"
              style={{
                borderColor: '#ff0096',
                color: '#ff0096',
                fontFamily: "'Space Mono', monospace",
                border: '1px solid rgba(255, 0, 150, 0.6)'
              }}
            >
              Ranking Global
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[
              { value: '1000+', label: 'PLAYERS' },
              { value: '50+', label: 'GAMES' },
              { value: '24/7', label: 'ONLINE' },
            ].map((stat) => (
              <div key={stat.label} style={{borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '8px'}}>
                <p className="font-black text-lg" style={{color: '#06b6d4', fontFamily: "'Orbitron', sans-serif"}}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{color: '#b0e0e6', fontFamily: "'Space Mono', monospace"}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-1" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
              Explore
            </h2>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-8">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 sm:px-4 py-2 text-sm bg-slate-900 text-gray-300"
                style={{
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  fontFamily: "'Space Mono', monospace",
                  outline: 'none'
                }}
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 flex-wrap">
              {['All', 'Easy', 'Medium', 'Hard'].map((filter) => (
                <button
                  key={filter}
                  className="px-3 py-2 text-xs font-bold transition-all"
                  style={{
                    borderBottom: filter === 'All' ? '2px solid #06b6d4' : '1px solid rgba(6, 182, 212, 0.2)',
                    color: filter === 'All' ? '#06b6d4' : '#b0e0e6',
                    backgroundColor: 'transparent',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid - Horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/jogos/${game.id}`}
                className="group overflow-hidden transition-all hover:scale-105"
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.15)'
                }}
              >
                {/* Game Image */}
                <div
                  className="aspect-video flex items-center justify-center text-4xl sm:text-5xl transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.08)'
                  }}
                >
                  {game.emoji}
                </div>

                {/* Game Info */}
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-xs sm:text-sm mb-2 line-clamp-2" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4'}}>
                    {game.name}
                  </h3>

                  {/* Badges */}
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs px-1.5 py-0.5" style={{backgroundColor: 'rgba(0, 255, 255, 0.1)', color: '#06b6d4', border: '1px solid rgba(0, 255, 255, 0.2)', fontFamily: "'Space Mono', monospace"}}>
                      {game.category}
                    </span>
                    <span className="text-xs px-1.5 py-0.5" style={{backgroundColor: 'rgba(255, 0, 150, 0.1)', color: '#ff0096', border: '1px solid rgba(255, 0, 150, 0.2)', fontFamily: "'Space Mono', monospace"}}>
                      {game.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: i < game.rating ? '#ffd700' : 'rgba(255, 215, 0, 0.15)', fontSize: '12px'}}>★</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
