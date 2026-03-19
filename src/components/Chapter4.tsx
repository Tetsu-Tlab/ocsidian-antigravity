import React from 'react';
import { Rocket, Mic, Coffee, Share2, Award, Zap } from 'lucide-react';

const Chapter4 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <Rocket size={24} color="#eab308" />
        </div>
        <h2>Step 4: 未来の教育を「加速」させる実践マスター</h2>
      </div>

      <p>
        おめでとう！👏 これであなたの手元には、あなたの思考を100%理解する**「第2の脳」**が完成したよ！<br />
        最後に、この相棒を使いこなして「時間」と「心の余裕」を生み出す3つの魔法を紹介するね。✨
      </p>

      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <Mic size={32} color="#f43f5e" style={{ marginBottom: '16px' }} />
            <h4 style={{ margin: '0 0 10px 0' }}>① 音声一括アウトプット</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
              帰り道の歩きながらの5分間の発話。それをAIに「学級通信の下書き」と「Xのポスト用」に整理させよう！帰宅した時には明日の仕事が終わっている感覚を味わえるよ。
            </p>
          </div>
          <div className="glass-card" style={{ padding: '24px' }}>
            <Zap size={32} color="#38bdf8" style={{ marginBottom: '16px' }} />
            <h4 style={{ margin: '0 0 10px 0' }}>② 授業案の瞬間生成</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
              「去年のメモと、今見ているこの記事の良さを組み合わせて、新しい授業構成を作って」── 指定フォルダ内の全知識を検索して、あなた好みのアイデアを瞬時に提案！
            </p>
          </div>
          <div className="glass-card" style={{ padding: '24px' }}>
            <Share2 size={32} color="#10b981" style={{ marginBottom: '16px' }} />
            <h4 style={{ margin: '0 0 10px 0' }}>③ 知識のマルチユース</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
              一度Obsidianに溜まった知恵は、AIが何度でも再利用してくれる。書けば書くほど、AIが賢くなり、あなたの手間が減っていく。「知識の複利」だね！
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginBottom: '60px', borderColor: '#eab308', background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.05) 0%, rgba(0,0,0,0) 100%)' }}>
        <h3 style={{ color: '#fbbf24', textAlign: 'center' }}>
          <Award size={24} style={{ display: 'inline', verticalAlign: '-5px', marginRight: 8 }} />
          その先にある、新しい景色
        </h3>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
          AIを使う理由は、ただ「速く終わらせる」ためじゃないんだ。<br /><br />
          事務作業から解放されたその時間で、<br />
          <strong>もっと子供一人ひとりの瞳を見つめたり</strong>、<br />
          <strong>自分自身の人生を彩る趣味に没頭したり</strong>すること。<br /><br />
          AIという「最高のナビゲーター」は、あなたが一番大切にしたいことに集中するために、ここにいるんだよ。✨
        </p>
      </div>

      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
          「さあ、相棒と一緒に。新しい冒険に出かけよう！🚀✨」
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px' }}>
          <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.8rem' }}>T-Lab Edition v1.0</div>
          <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.8rem' }}>Presented for Educators</div>
        </div>
      </div>
    </section>
  );
};

export default Chapter4;
