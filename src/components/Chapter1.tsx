import { Archive } from 'lucide-react';

const Chapter1 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <Archive size={24} color="#38bdf8" />
        </div>
        <h2>Step 1: 知恵のアーカイブ (Obsidian)</h2>
      </div>

      <p style={{ marginBottom: '32px' }}>
        「第2の脳」を作るための最初のステップ。それは、あなたの知恵を蓄える **『安全で自由な書庫』** を用意することだよ！✨<br />
        たちが選んだ最強のツール—— それが **Obsidian（オブシディアン）** なんだ。
      </p>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#38bdf8', marginTop: 0 }}>そもそも、Obsidianって何がすごいの？</h3>
        <p>「普通のメモアプリと何が違うの？」という疑問に、3つのポイントで答えるね！</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '24px' }}>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 12px 0' }}>📂 1. データの「完全所有」</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>多くのアプリはクラウドにデータを預けるけど、Obsidianは「あなたのPC内」に保存するよ。授業案や生徒への想いというプライベートな情報を、誰にも渡さない安心感があるんだ。</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 12px 0' }}>📄 2. 「一生使える」形式</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>メモは「マークダウン (.md)」という世界標準のテキスト形式で保存される。もしObsidianがなくなっても、他のソフトで100年後も読める！これこそが「資産化」だね。</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 12px 0' }}>🕸️ 3. 「脳の繋がり」を再現</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>点と点をリンクで繋いでいくことで、過去のメモから新しいアイデアが自然と生まれる。単なるメモ帳が「考える相棒」に変わる瞬間だよ。</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 12px 0' }}>🚀 4. AIへの最高の「燃料」</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>PC内に整理されたテキストファイルは、Antigravity（AI）にとって最も読みやすく、理解しやすいデータソースになるんだ！</p>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ borderLeft: '4px solid #38bdf8' }}>
        <h3 style={{ marginTop: 0 }}>準備のステップ（まずはここから！）</h3>
        <p>難しい設定はいらないよ。まずは「書庫」の入り口を作ろう！</p>
        <ol style={{ lineHeight: '2' }}>
          <li><a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>公式サイト</a>からインストーラーをダウンロード！</li>
          <li>起動したら 「Create new vault（保管庫を作成）」 を選択するよ。</li>
          <li>名前を <code>PersonalArchive</code> にして、自分のPCの好きな場所にフォルダを作るだけ！</li>
        </ol>
        <div className="info-box" style={{ marginTop: '20px' }}>
          <p style={{ margin: 0 }}>🍎 <strong>Macユーザー:</strong> .dmg ファイルを開いて、Obsidianを「アプリケーション」フォルダにドラッグしてね！</p>
          <p style={{ margin: '8px 0 0 0' }}>💻 <strong>Windowsユーザー:</strong> .exe を実行してインストールすれば、スタートメニューに現れるよ！</p>
        </div>
      </div>
    </section>
  );
};

export default Chapter1;
