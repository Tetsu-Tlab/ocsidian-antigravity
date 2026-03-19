import React from 'react';
import {
  Compass, Archive, Zap, UserCheck, Play, Book, Fingerprint
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  return (
    <aside className="sidebar glass-card">
      <h3 style={{ marginTop: 0, fontSize: '1.2rem', color: '#c4b5fd' }}>
        航海のアウトライン
      </h3>
      <ul>
        <li>
          <a href="#intro" className={activeSection === 'intro' ? 'active' : ''}>
            <Compass size={18} style={{ marginRight: 8 }} />
            はじめに
          </a>
        </li>
        <li>
          <a href="#glossary" className={activeSection === 'glossary' ? 'active' : ''}>
            <Book size={18} style={{ marginRight: 8 }} />
            用語ガイド (Glossary)
          </a>
        </li>
        <li>
          <a href="#pcm" className={activeSection === 'pcm' ? 'active' : ''}>
            <Fingerprint size={18} style={{ marginRight: 8 }} />
            PCMプロファイル同期 💎
          </a>
        </li>
        <li>
          <a href="#step1" className={activeSection === 'step1' ? 'active' : ''}>
            <Archive size={18} style={{ marginRight: 8 }} />
            Step 1: 知恵の書庫 (Obsidian)
          </a>
        </li>
        <li>
          <a href="#step2" className={activeSection === 'step2' ? 'active' : ''}>
            <Zap size={18} style={{ marginRight: 8 }} />
            Step 2: 思考のエンジン (Antigravity)
          </a>
        </li>
        <li>
          <a href="#step3" className={activeSection === 'step3' ? 'active' : ''}>
            <UserCheck size={18} style={{ marginRight: 8 }} />
            Step 3: あなたの「色」を伝える
          </a>
        </li>
        <li>
          <a href="#step4" className={activeSection === 'step4' ? 'active' : ''}>
            <Play size={18} style={{ marginRight: 8 }} />
            Step 4: 実践マスター
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
