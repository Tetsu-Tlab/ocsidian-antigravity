import { Fingerprint, Heart, MessageCircle, Sparkles } from 'lucide-react';

const PcmSection = () => {
    return (
        <section className="slide-up" style={{ padding: '60px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <Fingerprint size={24} color="#10b981" />
                </div>
                <h2>T-Lab流：PCMプロファイルの「同期」</h2>
            </div>

            <p style={{ marginBottom: '40px' }}>
                T-Labの受講生なら誰もが知っている**PCM（プロセス・コミュニケーション・モデル）**。✨<br />
                これをAIに教えることで、Antigravityは単なる「道具」を超えて、あなたの心の動きを理解する「最高の伴走者（パートナー）」になるんだ！
            </p>

            <div className="glass-card" style={{ marginBottom: '40px', border: '1px solid var(--accent-color)' }}>
                <h3 style={{ color: '#38bdf8', marginTop: 0 }}>なぜ「PCM」を食わせるべきなのか？</h3>
                <p>
                    AIの回答が「なんだか冷たい」「自分の心に響かない」と感じたことはないかな？それは、AIがあなたの**『心理的ニーズ』**を知らないからなんだ。<br />
                    自分のベースやフェーズ、心理的ニーズを書き留めたメモをVaultに入れるだけで、AIとの対話が一気に「心地よいもの」に変わるよ！
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <Heart size={20} color="#f43f5e" /> <strong>1. プロファイルを保存する</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                        Vaultの中に <code>my-profile.md</code> というファイルを作って、自分のPCM診断結果や「大切にしていること」を箇条書きで書いておこう！
                    </p>
                </div>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <MessageCircle size={20} color="#38bdf8" /> <strong>2. 接し方をリクエストする</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                        「私はハーモナイザーベースだから、共感性を大切にして答えて」「プロモーターだから、結論からシンプルに話して」とAIに一言伝えるだけで、あなたの好みのトーンに激変するよ。
                    </p>
                </div>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <Sparkles size={20} color="#fbbf24" /> <strong>3. アウトプットを自分流に</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                        学級通信を書く時も「私のフェーズに合わせて、遊び心のある文章にして！」と頼めば、無理に自分を作らなくても「あなたらしい言葉」が勝手に出てくるようになるんだ！
                    </p>
                </div>
            </div>

            <div className="info-box" style={{ background: 'rgba(110, 231, 183, 0.05)', borderColor: '#10b981' }}>
                <p style={{ fontWeight: 600, color: '#10b981', marginBottom: '10px' }}>💡 ワンポイント・アドバイス</p>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                    「PCM診断書のPDF」があるなら、その内容をObsidianに転記してAntigravityに読み込ませてみて。AIがあなたの強みやストレスポイントを完璧に把握して、疲れている時にはそっと寄り添うような言葉をかけてくれるようになるよ。これこそがT-Lab流のパーソナライズだね！😆✨
                </p>
            </div>
        </section>
    );
};

export default PcmSection;
