import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="hero-glow"></div>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', color: '#c4b5fd', fontWeight: 600 }}>
        <Sparkles size={16} /> T-Lab 完全オリジナル
      </div>

      <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', lineHeight: 1.1, fontWeight: 800 }}>
        智慧の航海ガイド<br />
        <span style={{
          background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Antigravity × Obsidian</span>
      </h1>

      <p style={{ fontSize: '1.4rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.6 }}>
        教育の最前線に立つあなたへ。<br />
        点在する知識を繋ぎ、AIという強力な追い風を受けて、<br />
        「一生モノの知的資産」を築く旅に出発しましょう。🚢✨
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href="#glossary" className="primary-button">航海を始める</a>
        <a href="#pcm" className="secondary-button">自分を同期する (PCM)</a>
      </div>

      {/* Hero Image Mockup */}
      <div style={{ marginTop: '80px', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '100px',
          background: 'var(--accent-color)',
          filter: 'blur(100px)',
          opacity: 0.15,
          zIndex: -1
        }}></div>
        <img
          src="/wisdom_voyage_hero.png"
          alt="智慧の航海"
          style={{ width: '100%', maxWidth: '1000px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
        />
      </div>
    </section>
  );
};

export default Hero;
