import React from 'react';
import { Archive, Lock, FileJson, Layers, Sparkles } from 'lucide-react';

const Chapter1 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <Archive size={24} color="#38bdf8" />
        </div>
        <h2>Step 1: 知恵のアーカイブ (Obsidian)</h2>
      </div>

      <p>
        「第2の脳」を作るための最初のステップ。それは、あなたの知恵を蓄える<strong>『安全で自由な書庫』</strong>を用意することだよ！✨<br />
        私たちが選んだ最強のツール ── それが <strong>Obsidian（オブシディアン）</strong> なんだ。
      </p>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#38bdf8' }}>そもそも、Obsidianって何がすごいの？</h3>
        <p>「普通のメモアプリと何が違うの？」という疑問に、3つのポイントで答えるね！</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
          <div className="glass-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#fff' }}>
              <Lock size={20} color="#10b981" /> <strong>1. データの「完全な所有」</strong>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              多くのアプリはクラウドにデータを預けるけど、Obsidianは「あなたのPC内」に保存するよ。授業案や生徒への想いというプライベートな情報を、誰にも渡さない安心感があるんだ。
            </p>
          </div>
          <div className="glass-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#fff' }}>
              <FileJson size={20} color="#38bdf8" /> <strong>2. 「一生使える」形式</strong>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              メモは「マークダウン (.md)」という世界標準のテキスト形式で保存される。もしObsidianがなくなっても、他のソフトで100年後も読める！これこそが「資産化」だね。
            </p>
          </div>
          <div className="glass-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#fff' }}>
              <Layers size={20} color="#a78bfa" /> <strong>3. 「脳の繋がり」を再現</strong>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              点と点をリンクで繋いでいくことで、過去のメモから新しいアイデアが自然と生まれる。単なるメモ帳が「考える相棒」に変わる瞬間だよ。
            </p>
          </div>
          <div className="glass-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#fff' }}>
              <Sparkles size={20} color="#fbbf24" /> <strong>4. AIへの最高の「燃料」</strong>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              PC内に整理されたテキストファイルは、Antigravity（AI）にとって最も読みやすく、理解しやすいデータソースになるんだ！
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3>準備のステップ（まずはここから！）</h3>
        <p>難しい設定はいらないよ。まずは「書庫」の入り口を作ろう！</p>
        <ol style={{ paddingLeft: '24px', lineHeight: '2' }}>
          <li><a href="https://obsidian.md/" target="_blank">公式サイト</a>からインストーラーをダウンロード！</li>
          <li>起動したら「Create new vault (保管庫を作成)」を選択するよ。</li>
          <li>名前を <code>PersonalArchive</code> にして、自分のPCの好きな場所にフォルダを作るだけ！</li>
        </ol>

        <div className="info-box">
          <p>
            🍎 <strong>Macユーザー</strong>: <code>.dmg</code> ファイルを開いて、Obsidianを「アプリケーション」フォルダにドラッグしてね！<br />
            🪟 <strong>Windowsユーザー</strong>: <code>.exe</code> を実行してインストールすれば、スタートメニューに現れるよ！
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chapter1;
