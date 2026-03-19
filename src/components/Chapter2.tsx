import { Zap, Network, Share2, Compass } from 'lucide-react';

const Chapter2 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <Zap size={24} color="#f59e0b" />
        </div>
        <h2>Step 2: 知恵を加速させる「思考エンジン」 (Antigravity)</h2>
      </div>

      <p style={{ marginBottom: '32px' }}>
        あなただけの「書庫（Obsidian）」ができあがったら、次はそこに **『最新の頭脳』** を招待しよう！🧠<br />
        Googleが開発したワークパートナー **Antigravity（アンチグラビティ）** が、あなたの知恵を読み解く案内役（ナビゲーター）になってくれるよ。
      </p>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#f59e0b', marginTop: 0 }}>Antigravityが「普通のAI」と違うところ</h3>
        <p>一般的なChatGPTなどのAIは、「インターネット上の一般的な情報」しか知らないよね。でも、Antigravityは **「あなたの目の前にあるフォルダ」** を直接読み込むことができるんだ。</p>

        <ul style={{ lineHeight: '1.8' }}>
          <li><Network size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>あなたの文脈を理解する</strong>: ネットの知識ではなく、「あなたのメモ」に基づいて回答してくれる。</li>
          <li><Share2 size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>一緒に作業する</strong>: ファイルの作成や修正を、あなたと肩を並べて実行してくれる。</li>
          <li><Compass size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>プライバシーの尊重</strong>: ローカルフォルダを安全に読み込み、あなたの知的財産を外部に漏らさない！</li>
        </ul>
      </div>

      <div className="glass-card" style={{ borderLeft: '4px solid #f59e0b' }}>
        <h3 style={{ marginTop: 0 }}>航海への合流（インストールと接続）</h3>
        <p>準備は簡単！書庫の鍵をエンジンに預けるだけだよ。✨</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>1. エンジンの起動</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Antigravityを立ち上げよう。真っ新なキャンバスが広がっているはずだよ。</p>
          </div>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>2. 書庫の指定</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>「Open Folder」ボタンから、Step 1で作った <code>PersonalArchive</code> フォルダを選択！</p>
          </div>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>3. 接続完了！</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>右上のステータスが緑に光れば、AIがあなたの書庫にアクセスできるようになった証拠だよ。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter2;
