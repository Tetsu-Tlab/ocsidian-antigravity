import { Play, Rocket, GraduationCap, Layout } from 'lucide-react';

const Chapter4 = () => {
  return (
    <section className="slide-up" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
          <Play size={24} color="#10b981" />
        </div>
        <h2>Step 4: 実践マスター (Take Action!)</h2>
      </div>

      <p style={{ marginBottom: '40px' }}>
        さあ、最後は実践だ！準備した **『書庫』** と **『エンジン』** 、そして **『個性』** を組み合わせて、教育の現場でどんなことができるか見ていこう。✨🚀
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        <div className="glass-card" style={{ transition: 'all 0.3s ease', cursor: 'default' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Rocket size={20} color="#10b981" /> 授業案の「火種」作り</h3>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>「過去の授業案を元に、今のクラスに合ったアレンジをして！」と頼んでみて。AIがあなたのメモから知識を拾い、最新の指導案を生成してくれるよ。</p>
        </div>
        <div className="glass-card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><GraduationCap size={20} color="#10b981" /> 子どものための「個別最適化」</h3>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>「あの子の指導記録を参考に、褒め方のバリエーションを考えて」といった、個々の生徒に合わせた関わりのヒントをAIと一緒に練り上げよう。</p>
        </div>
        <div className="glass-card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Layout size={20} color="#10b981" /> 学級通信の「下書き」爆速作成</h3>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>箇条書きでメモを入れるだけで、あなたのトーンで、読みやすく、心に響く文章が出来上がる。時間を節約して、その分子どもたちと話そう！☕️</p>
        </div>
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%)' }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '2.5rem', background: 'linear-gradient(90deg, #10b981, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>もう、一歩踏み出している。</h2>
        <p style={{ fontSize: '1.2rem', color: '#d1d5db', maxWidth: '600px', lineHeight: '1.6', margin: '0 0 40px 0' }}>「AIは使いこなすのが難しそう……」そう思っていた日々はもう終わりだよ。あなたの中にある知恵と、AIのパワーが手を取り合う準備は整ったんだ。✨</p>
        <button className="primary-button" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>新しい教育の航海へ出発する！🚢🚀</button>
      </div>
    </section>
  );
};

export default Chapter4;
