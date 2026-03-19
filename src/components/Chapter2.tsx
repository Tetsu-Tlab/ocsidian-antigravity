import React from 'react';
import { Cpu, Zap, Activity, Info } from 'lucide-react';

const Chapter2 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <Cpu size={24} color="#a78bfa" />
        </div>
        <h2>Step 2: 知恵を加速させる「思考エンジン」 (Antigravity)</h2>
      </div>

      <p>
        あなただけの「書庫（Obsidain）」ができあがったら、次はそこに<strong>『最新の頭脳』</strong>を招待しよう！🤖<br />
        Googleが開発したワークパートナー <strong>Antigravity（アンチグラビティ）</strong> が、あなたの知恵を読み解く案内役（ナビゲーター）になってくれるよ。
      </p>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3>Antigravityが「普通のAI」と違うところ</h3>
        <p>
          一般的なChatGPTなどのAIは、「インターネット上の一般的な情報」しか知らないよね。
          でも、Antigravityは<strong>「あなたの目の前にあるフォルダ」</strong>を直接読み込むことができるんだ。
        </p>

        <ul style={{ paddingLeft: '24px', lineHeight: '2' }}>
          <li><strong>あなたの文脈を理解する</strong>: ネットの知識ではなく、「あなたのメモ」に基づいて回答してくれる。</li>
          <li><strong>一緒に作業する</strong>: ファイルの作成や修正を、あなたと肩を並べて実行してくれる。</li>
          <li><strong>プライバシーの尊重</strong>: ローカルフォルダを安全に読み込み、あなたの知的資産を外部に漏らさない！</li>
        </ul>
      </div>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3>航海への合流（インストールと接続）</h3>
        <p>準備は簡単！書庫の鍵をエンジンに預けるだけだよ。✨</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
          <div className="glass-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ color: '#a78bfa' }}>1. エンジンの起動</h4>
            <p style={{ fontSize: '0.9rem' }}>Antigravityを立ち上げよう。真っ新なキャンバスが広がっているはずだよ。</p>
          </div>
          <div className="glass-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ color: '#38bdf8' }}>2. 書庫の指定</h4>
            <p style={{ fontSize: '0.9rem' }}>「Open Folder」ボタンから、Step 1で作った <code>PersonalArchive</code> フォルダを選択！</p>
          </div>
        </div>

        <div className="info-box" style={{ background: 'rgba(167, 139, 250, 0.1)', borderLeftColor: '#a78bfa', marginTop: '32px' }}>
          <p>
            <strong>💡 これでバッチリ！</strong><br />
            左側のエクスプローラーにあなたのメモファイルがズラッと並んだら、AIとの「思考の同期」の準備が200%整った証拠だよ！😆
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chapter2;
