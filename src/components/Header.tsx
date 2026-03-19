import { Sparkles, ArrowRight, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="header glass-card">
      <div className="header-logo">
        <Sparkles size={24} color="var(--accent-color)" />
        <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          Wisdom Navigator Guide
        </span>
      </div>
      <nav className="header-nav">
        <a href="#intro">🏡 Home</a>
        <a href="#glossary">📖 用語</a>
        <a href="#step1">📦 Step 1</a>
        <a href="#step2">⚡ Step 2</a>
        <a href="#step3">👤 Step 3</a>
        <a href="#step4">🚀 Step 4</a>
        <a href="https://github.com/Tetsu-Tlab/ocsidian-antigravity" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--accent-color)', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 600 }}>
          <Github size={20} />
          GitHub
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
