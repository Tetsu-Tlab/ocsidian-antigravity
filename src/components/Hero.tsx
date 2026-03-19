import React from 'react';
import { Sparkles, Map } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="hero-glow"></div>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', color: '#c4b5fd', fontWeight: 600 }}>
        <Sparkles size={16} /> T-Lab 完全オリジナル
      </div>

      <h1>
        <span className="text-gradient">智慧の航海ガイド</span>
        <br />
        自分専用のAIパートナーを<br />構築するロードマップ
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px' }}>
        先生、日々の膨大な情報に溺れていませんか？✨<br />
        このガイドは、あなたの経験やひらめきを「資産」として蓄え、<br />
        それをAIが完璧に理解してサポートしてくれる、<br />
        そんな夢のような教育環境を一緒に作り上げるための招待状だよ！😆
      </p>

      <div className="screenshot-container" style={{ minHeight: '340px', background: 'radial-gradient(circle at center, #1e1b4b 0%, #0b0f19 100%)' }}>
        <img
          src="/wisdom_voyage_hero.png"
          alt="Wisdom Voyage Visual"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div style={{ position: 'absolute', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
          Navigating Your Future Education...
        </div>
      </div>

      <div className="glass-card" style={{ textAlign: 'left', marginBottom: '48px', borderLeft: '4px solid var(--primary-color)' }}>
        <h3 style={{ marginTop: 0, color: '#c4b5fd' }}>
          <Map size={24} style={{ display: 'inline', verticalAlign: '-5px', marginRight: 8 }} />
          なぜ「自分専用」でなければならないのか？
        </h3>
        <p>
          今のAIはとても優秀だけど、あなたの「明日の授業への想い」や「去年の失敗から学んだこと」は知らないよね。
          だから、どこまでも他人行儀な回答しか返ってこないんだ。
        </p>
        <p style={{ marginBottom: 0 }}>
          私たちが作るのは、単なる自動化ツールじゃない。<br />
          あなたの<strong>過去（経験）</strong>と<strong>未来（構想）</strong>を繋ぐ、最強の分身なんだ！🚢✨
        </p>
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <a href="#glossary" className="btn">
          まずは用語ガイドを見る 📚
        </a>
        <a href="#step1" className="btn btn-secondary">
          Step 1へスキップする 🚀
        </a>
      </div>
    </section>
  );
};

export default Hero;
