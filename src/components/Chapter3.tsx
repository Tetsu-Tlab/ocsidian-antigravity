import React from 'react';
import { UserPlus, Sparkles, Wand2, MessageCircle, Heart, CheckCircle } from 'lucide-react';

const Chapter3 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <UserPlus size={24} color="#10b981" />
        </div>
        <h2>Step 3: あなたの「色」を伝える（アイデンティティ同期）</h2>
      </div>

      <p>
        ハードとソフトが繋がったら、最後は<strong>『魔法のひとしずく』</strong>……あなたの個性（アイデンティティ）を注入するよ！✨<br />
        AIを「借り物の道具」から「世界に一人だけの最高の相棒」に進化させる一番楽しいステップだ！
      </p>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3>あなたの「思考のクセ」をAIの血肉にする</h3>
        <p>
          AIに「私はこういう人間だ」と教えるための最も効率的な方法は、<strong>『素材（コンテキスト）』</strong>を渡すことだよ。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
          <div className="glass-card" style={{ borderLeft: '4px solid #38bdf8' }}>
            <h4 style={{ margin: 0 }}>🍎 方法①：自分の文章を読み込ませる</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              過去に書いた「会報」や「学級通信」、SNSへの投稿などを一つのファイルにまとめて預けてみて。「この文体で次から頼むね」と言えば、一気に『あなたっぽさ』がAIに宿るよ！
            </p>
          </div>
          <div className="glass-card" style={{ borderLeft: '4px solid #a78bfa' }}>
            <h4 style={{ margin: 0 }}>🎙️ 方法②：音声で価値観を語る</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              スマホに向かって一生懸命語った「生徒への想い」の文字起こしデータ。実はこれがAIにとって一番の好物！客観的なデータより、あなたの「熱量のある言葉」の方がAIは学習しやすいんだ。
            </p>
          </div>
          <div className="glass-card" style={{ borderLeft: '4px solid #10b981' }}>
            <h4 style={{ margin: 0 }}>🤝 方法③：AIからのインタビュー</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              「私の個性を引き出す質問を3つして」とAIに頼んで、じっくり対話してみて。答えていくうちに、自分でも気づかなかった『教育のこだわり』が見えてくるはずだよ！😆
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h3>「なんか違う」を「宝」に変える</h3>
        <p>
          AIが作った文章が少しズレていると感じたら、それは**『もっとあなたを知りたい』**というAIからの合図だよ！💎
        </p>
        <p>
          その場であなたが少しだけ手直しして、<strong>「ここをこうした理由は、私のこだわりが〇〇だからだよ。次からはこれをスタイルガイドに追加して！」</strong>と伝えてみて。<br />
          この一言で、AIはあなたの分身として一段階レベルアップするんだ！
        </p>

        <div className="info-box" style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeftColor: '#10b981' }}>
          <p>
            <CheckCircle size={16} style={{ verticalAlign: '-3px', marginRight: '5px' }} />
            <strong>たったこれだけで、AIは「道具」から「理解者」に変わる！</strong><br />
            翌日の授業案を作らせた瞬間に、「そうそう、これなんだよ！」という言葉が返ってくる快感を、ぜひ体験してほしいな！✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chapter3;
