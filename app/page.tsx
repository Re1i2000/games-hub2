import Link from "next/link";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section - Clean & Bold */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Subtitle Badge */}
          <div className="mb-8" style={{fontFamily: "'Space Mono', monospace"}}>
            <p style={{color: '#06b6d4', fontSize: '14px', letterSpacing: '2px', marginBottom: '40px'}}>
              ⚡ PLATAFORMA DE JOGOS NEXT-GEN
            </p>
          </div>

          {/* Main Title - HUGE */}
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontFamily: "'Press Start 2P', cursive",
            color: '#06b6d4',
            letterSpacing: '3px',
            marginBottom: '20px',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 150, 0.6)',
            animation: 'neon-flicker 0.15s infinite',
            lineHeight: '1.2'
          }}>
            GAMES HUB
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.5rem',
            fontFamily: "'Orbitron', sans-serif",
            color: '#ffffff',
            letterSpacing: '1px',
            marginBottom: '40px',
            textShadow: '0 0 15px rgba(255, 0, 150, 0.6)'
          }}>
            O Universo dos Jogos
          </p>

          {/* Description */}
          <p style={{
            fontSize: '16px',
            fontFamily: "'Space Mono', monospace",
            color: '#b0e0e6',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '50px',
            lineHeight: '1.8'
          }}>
            Explore centenas de jogos incríveis, compita globalmente e domine os rankings.
            <br />Sua próxima aventura começa aqui.
          </p>

          {/* CTA Buttons */}
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px'}}>
            <Link
              href="/jogos"
              style={{
                padding: '16px 40px',
                border: '2px solid #06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'inline-block',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 20px rgba(0, 255, 255, 0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ▶ JOGAR AGORA
            </Link>
            <Link
              href="/ranking"
              style={{
                padding: '16px 40px',
                border: '2px solid #ff0096',
                color: '#ff0096',
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'inline-block',
                textShadow: '0 0 10px rgba(255, 0, 150, 0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 150, 0.8), inset 0 0 20px rgba(255, 0, 150, 0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 150, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              👑 RANKING
            </Link>
          </div>

          {/* Stats */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: '450px', marginLeft: 'auto', marginRight: 'auto'}}>
            {[
              { value: '1000+', label: 'PLAYERS' },
              { value: '50+', label: 'GAMES' },
              { value: '24/7', label: 'ONLINE' },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  border: '2px solid rgba(0, 255, 255, 0.3)',
                  backgroundColor: 'rgba(0, 255, 255, 0.08)',
                  textAlign: 'center'
                }}
              >
                <p style={{fontSize: '24px', fontWeight: 'bold', color: '#ff0096', fontFamily: "'Orbitron', sans-serif", marginBottom: '8px'}}>
                  {stat.value}
                </p>
                <p style={{fontSize: '12px', color: '#b0e0e6', fontFamily: "'Space Mono', monospace", letterSpacing: '1px'}}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{padding: '80px 24px', borderTop: '2px solid rgba(0, 255, 255, 0.3)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Orbitron', sans-serif",
            color: '#06b6d4',
            textAlign: 'center',
            marginBottom: '12px',
            letterSpacing: '2px',
            textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
          }}>
            POR QUE GAMES HUB?
          </h2>
          <p style={{textAlign: 'center', fontFamily: "'Space Mono', monospace", color: '#ff0096', fontSize: '12px', letterSpacing: '1px', marginBottom: '60px'}}>
            A PLATAFORMA MAIS COMPLETA PARA VOCÊ SE DIVERTIR
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            {[
              { icon: '🎮', title: 'DIVERSOS GÊNEROS', desc: 'Ação, Terror, RPG, Puzzle, Estratégia e muito mais' },
              { icon: '⚡', title: 'SESSÕES RÁPIDAS', desc: 'Jogar entre aulas ou longas maratonas quando quiser' },
              { icon: '👑', title: 'RANKING GLOBAL', desc: 'Compete com jogadores do mundo inteiro' },
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  padding: '30px',
                  border: '2px solid rgba(0, 255, 255, 0.4)',
                  backgroundColor: 'rgba(0, 255, 255, 0.08)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <p style={{fontSize: '2.5rem', marginBottom: '15px'}}>{feature.icon}</p>
                <h3 style={{fontSize: '1.2rem', fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', marginBottom: '10px', letterSpacing: '1px'}}>
                  {feature.title}
                </h3>
                <p style={{fontFamily: "'Space Mono', monospace", color: '#b0e0e6', fontSize: '14px', lineHeight: '1.6'}}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section style={{padding: '80px 24px', borderTop: '2px solid rgba(255, 0, 150, 0.3)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Orbitron', sans-serif",
            color: '#ff0096',
            textAlign: 'center',
            marginBottom: '12px',
            letterSpacing: '2px',
            textShadow: '0 0 15px rgba(255, 0, 150, 0.5)'
          }}>
            JOGOS EM DESTAQUE
          </h2>
          <p style={{textAlign: 'center', fontFamily: "'Space Mono', monospace", color: '#06b6d4', fontSize: '12px', letterSpacing: '1px', marginBottom: '60px'}}>
            ESCOLHA ENTRE CENTENAS DE TÍTULOS INCRÍVEIS
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px'}}>
            {[
              { name: 'FLAPPY BIRD', emoji: '🐦', category: 'AÇÃO' },
              { name: 'SPACE SHOOTER', emoji: '🚀', category: 'AÇÃO' },
              { name: 'MAZE RUNNER', emoji: '🎯', category: 'PUZZLE' },
            ].map((game, idx) => (
              <Link
                key={idx}
                href="/jogos"
                style={{
                  border: '2px solid rgba(0, 255, 255, 0.4)',
                  backgroundColor: 'rgba(0, 255, 255, 0.05)',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.8)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', backgroundColor: 'rgba(0, 255, 255, 0.08)'}}>
                  {game.emoji}
                </div>
                <div style={{padding: '24px'}}>
                  <h3 style={{fontSize: '1.1rem', fontFamily: "'Orbitron', sans-serif", color: '#06b6d4', marginBottom: '8px', letterSpacing: '1px'}}>
                    {game.name}
                  </h3>
                  <p style={{fontSize: '12px', color: '#ff0096', fontFamily: "'Space Mono', monospace", marginBottom: '12px', letterSpacing: '1px'}}>
                    {game.category}
                  </p>
                  <div style={{display: 'flex', gap: '4px'}}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: '#ffd700', fontSize: '14px'}}>★</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign: 'center'}}>
            <Link
              href="/jogos"
              style={{
                padding: '14px 32px',
                border: '2px solid #06b6d4',
                color: '#06b6d4',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.3s',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ▶ VER TODOS OS +50 JOGOS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{padding: '80px 24px'}}>
        <div className="max-w-4xl mx-auto">
          <div style={{
            padding: '60px 40px',
            border: '3px double #06b6d4',
            backgroundColor: 'rgba(0, 255, 255, 0.05)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: "'Orbitron', sans-serif",
              color: '#06b6d4',
              marginBottom: '20px',
              letterSpacing: '2px',
              textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
            }}>
              PRONTO PARA A PRÓXIMA PARTIDA?
            </h2>
            <p style={{
              fontSize: '16px',
              fontFamily: "'Space Mono', monospace",
              color: '#b0e0e6',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}>
              Milhares de jogadores já estão se divertindo.
              <br />Comece sua jornada para o topo do ranking agora!
            </p>
            <Link
              href="/jogos"
              style={{
                padding: '16px 40px',
                border: '2px solid #ff0096',
                color: '#ff0096',
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.3s',
                textShadow: '0 0 10px rgba(255, 0, 150, 0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 150, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 150, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ▶ JOGAR AGORA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
