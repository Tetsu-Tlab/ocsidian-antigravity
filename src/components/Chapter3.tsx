import { UserCheck, Sparkles, Wand2, Lightbulb } from 'lucide-react';

const Chapter3 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <UserCheck size={24} color="#a78bfa" />
        </div>
        <h2>Step 3: あなたの「色」を伝える (Identity Sync)</h2>
      </div>

      <p style={{ marginBottom: '32px' }}>
        AIを「借り物」にしないための最も重要な工程。それが **『アイデンティティの同期』** だよ。✨<br />
        あなたが誰で、何を大切にしているのか。それをAntigravityに教えることで、AIは「あなたの分身」へと進化するんだ。
      </p>

      <div className="glass-card" style={{ marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}>
          <Sparkles size={100} color="#a78bfa" />
        </div>
        <h3 style={{ color: '#a78bfa', marginTop: 0 }}>自分プロファイルの作成</h3>
        <p>Obsidianの中に <code>Identity.md</code> というノートを作って、以下の内容を自由に書いてみよう！</p>
        <ul style={{ lineHeight: '2', color: '#cbd5e1' }}>
          <li><Wand2 size={16} style={{ marginRight: '8px' }} /> <strong>あなたの役割</strong>: 「小学校5年生の担任」「ICT主任」「バスケ部の顧問」など。</li>
          <li><Lightbulb size={16} style={{ marginRight: '8px' }} /> <strong>教育理念</strong>: 「子どもたちの個性を伸ばしたい」「効率化して、子どもと向き合う時間を増やしたい」。</li>
          <li>🎯 <strong>得意なこと・苦手なこと</strong>: 「文章を書くのは好きだけど、事務処理は苦手」。</li>
        </ul>
      </div>

      <div className="glass-card" style={{ borderLeft: '4px solid #a78bfa', background: 'rgba(167, 139, 250, 0.05)' }}>
        <h3>「同期」の魔法をかける</h3>
        <p>ファイルを作ったら、Antigravityにこう話しかけてみて！</p>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', fontStyle: 'italic', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.2)' }}>
          「Identity.md を読んで。これからは私のパートナーとして、この理念に基づいた提案をしてほしい。」
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.95rem' }}>すると、次からの回答がぐっと「あなたらしく」なるはずだよ。学級通信の案も、授業のアイデアも、まるで自分自身が考えたかのようなしっくり感に驚くはず！🤩</p>
      </div>
    </section>
  );
};

export default Chapter3;
