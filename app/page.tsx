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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
        </div>

        <div className="max-w-5xl w-full text-center relative z-10">
          {/* Main Title with Neon Glow */}
          <h1
            className="mb-4 leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 14vw, 5.5rem)',
              fontFamily: "'Press Start 2P', cursive",
              color: '#06b6d4',
              letterSpacing: '4px',
              textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6), 0 0 40px rgba(255, 0, 150, 0.8), 0 0 60px rgba(255, 0, 150, 0.6), 0 0 80px rgba(255, 0, 150, 0.4)',
              animation: 'neon-flicker 0.15s infinite'
            }}
          >
            GAMES HUB
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl mb-8" style={{fontFamily: "'Orbitron', sans-serif", color: '#ffffff', letterSpacing: '2px', textShadow: '0 0 15px rgba(255, 0, 150, 0.7)'}}>
            O UNIVERSO DOS JOGOS
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base mb-12 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6', fontSize: '14px'}}>
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings.
            <br />Sua próxima aventura começa aqui.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/jogos"
              className="px-8 sm:px-12 py-4 border-2 font-bold text-sm tracking-widest transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
              style={{
                borderColor: '#06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
              }}
            >
              ▶ EXPLORAR JOGOS
            </Link>
            <Link
              href="/ranking"
              className="px-8 sm:px-12 py-4 border-2 font-bold text-sm tracking-widest transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
              style={{
                borderColor: '#ff0096',
                color: '#ff0096',
                fontFamily: "'Space Mono', monospace",
                backgroundColor: 'rgba(255, 0, 150, 0.1)',
                textShadow: '0 0 10px rgba(255, 0, 150, 0.6)'
              }}
            >
              👑 RANKING GLOBAL
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto">
            {[
              { value: '1000+', label: 'PLAYERS' },
              { value: '50+', label: 'GAMES' },
              { value: '24/7', label: 'ONLINE' },
            ].map((stat) => (
              <div key={stat.label} className="p-4" style={{backgroundColor: 'rgba(6, 182, 212, 0.12)', border: '2px solid rgba(6, 182, 212, 0.3)'}}>
                <p className="font-black text-xl sm:text-2xl" style={{color: '#ff0096', fontFamily: "'Orbitron', sans-serif"}}>
                  {stat.value}
                </p>
                <p className="text-xs mt-2 tracking-wider" style={{color: '#b0e0e6', fontFamily: "'Space Mono', monospace"}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{height: '1px', background: 'linear-gradient(90deg, rgba(6, 182, 212, 0), rgba(6, 182, 212, 0.5), rgba(6, 182, 212, 0))'}} />

      {/* EXPLORE SECTION */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', letterSpacing: '2px', textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'}}>
              Explore
            </h2>
            <p className="text-sm" style={{fontFamily: "'Space Mono', monospace", color: '#ff0096', letterSpacing: '1px'}}>
              &gt;&gt; CENTENAS DE TÍTULOS INCRÍVEIS &lt;&lt;
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
            <div className="flex-1 w-full relative">
              <input
                type="text"
                placeholder="🔍 Buscar jogos..."
                className="w-full px-4 py-3 text-sm transition-all"
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.08)',
                  border: '2px solid rgba(6, 182, 212, 0.25)',
                  color: '#b0e0e6',
                  fontFamily: "'Space Mono', monospace",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(6, 182, 212, 0.8)';
                  e.target.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(6, 182, 212, 0.25)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 flex-wrap">
              {['Todos', 'Fácil', 'Médio', 'Difícil'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 text-xs font-bold border-2 transition-all duration-200 cursor-pointer"
                  style={{
                    borderColor: filter === 'Todos' ? '#06b6d4' : 'rgba(6, 182, 212, 0.2)',
                    color: filter === 'Todos' ? '#06b6d4' : '#b0e0e6',
                    backgroundColor: filter === 'Todos' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                    fontFamily: "'Space Mono', monospace",
                    textShadow: filter === 'Todos' ? '0 0 10px rgba(0, 255, 255, 0.6)' : 'none'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/jogos/${game.id}`}
                className="group overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.08)',
                  border: '2px solid rgba(6, 182, 212, 0.25)'
                }}
              >
                {/* Game Image/Emoji */}
                <div
                  className="aspect-video flex items-center justify-center text-5xl sm:text-6xl transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.12)'
                  }}
                >
                  {game.emoji}
                </div>

                {/* Game Info */}
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-3 line-clamp-2" style={{fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', letterSpacing: '0.5px'}}>
                    {game.name}
                  </h3>

                  {/* Category & Difficulty Badges */}
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="text-xs px-2 py-1 font-bold" style={{backgroundColor: 'rgba(0, 255, 255, 0.15)', color: '#06b6d4', border: '1px solid rgba(0, 255, 255, 0.3)', fontFamily: "'Space Mono', monospace"}}>
                      {game.category}
                    </span>
                    <span className="text-xs px-2 py-1 font-bold" style={{backgroundColor: 'rgba(255, 0, 150, 0.15)', color: '#ff0096', border: '1px solid rgba(255, 0, 150, 0.3)', fontFamily: "'Space Mono', monospace"}}>
                      {game.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: i < game.rating ? '#ffd700' : 'rgba(255, 215, 0, 0.2)', fontSize: '14px'}}>★</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* See All Button */}
          <div className="text-center">
            <Link
              href="/jogos"
              className="px-10 py-4 border-2 font-bold text-sm tracking-widest inline-block transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
              style={{
                borderColor: '#06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
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
