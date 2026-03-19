import React from 'react';
import { Book, FileText, Link, Box, Cpu, Sparkles } from 'lucide-react';

const Glossary = () => {
    return (
        <section className="slide-up" style={{ padding: '60px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <Book size={24} color="#38bdf8" />
                </div>
                <h2>これだけは知っておきたい！Obsidian用語ガイド</h2>
            </div>

            <p style={{ marginBottom: '40px' }}>
                教育現場で使いこなすために、まずはObsidian独特の「名前」に慣れておこう！✨<br />
                どれも「自分専用の資産」を作るための大切なパーツだよ。
            </p>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', marginTop: 0 }}>
                        <Box size={20} color="#38bdf8" /> Vault（保管庫）
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                        「保管庫」といっても難しく考える必要はないよ！実は**あなたのPCにあるただの「フォルダ」**のことなんだ。<br />
                        このフォルダの中にすべてのノートが保存される。「自分のデジタル書斎」そのものだと思えばOK！
                    </p>
                </div>

                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', marginTop: 0 }}>
                        <FileText size={20} color="#10b981" /> Markdown（マークダウン / .md）
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                        ノートの保存形式のこと。普通のWord等とは違って、**「ただのテキストデータ」**だからめちゃくちゃ軽いし、100年後のパソコンでも開ける！<br />
                        Antigravity（AI）がもっとも得意とする形式だから、AIとの相性もバッチリなんだ。✨
                    </p>
                </div>

                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', marginTop: 0 }}>
                        <Link size={20} color="#a78bfa" /> Backlink（バックリンク / 逆リンク）
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                        「AというノートからBにリンクを貼る」だけでなく、**「Bのノート側から、誰が自分を見てくれているか」**がわかる仕組み。<br />
                        これによって、過去の授業案と最新の教育ニュースが思わぬところで繋がったりするんだ。脳のネットワークそのものだね！🧠
                    </p>
                </div>

                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', marginTop: 0 }}>
                        <Cpu size={20} color="#f43f5e" /> Plugin（プラグイン）
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                        Obsidainに新しい機能を追加する「拡張パーツ」のこと。<br />
                        カレンダーを表示したり、音声を自動で文字起こししたり。自分の使いやすいようにカスタマイズして、世界に一つだけの相棒に育てていけるよ！
                    </p>
                </div>

                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', marginTop: 0 }}>
                        <Sparkles size={20} color="#fbbf24" /> Graph View（グラフビュー）
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                        あなたのメモ同士の繋がりを、まるで宇宙の「星座」のように視覚化する機能！<br />
                        「あ、この授業案とあの子の成長記録が繋がってる！」といった新しい発見が目に見えてわかる、Obsidianで一番ワクワクする瞬間だよ。✨
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Glossary;
