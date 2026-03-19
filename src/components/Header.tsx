import React from 'react';

const Header = () => {
  return (
    <header className="glass">
      <div className="logo text-gradient" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '1.5rem' }}>🚢</span>
        Wisdom Navigator Guide
      </div>
      <nav className="nav-links">
        <a href="#intro">🏠 Home</a>
        <a href="#glossary">📚 用語</a>
        <a href="#step1">📦 Step 1</a>
        <a href="#step2">⚡ Step 2</a>
        <a href="#step3">👤 Step 3</a>
        <a href="#step4">🚀 Step 4</a>
      </nav>
    </header>
  );
};

export default Header;
