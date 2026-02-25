import { useState, useEffect, useRef } from “react”;

const questions = [
{
id: 1,
category: “attachment”,
text: “好きな人から返信が遅いとき、あなたはどうしますか？”,
options: [
{ text: “少し気になるが、忙しいのだろうと思って待てる”, scores: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
{ text: “何度も確認してしまい、不安で他のことが手につかない”, scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
{ text: “自分のことに集中する。向こうが返したいときに返すだろう”, scores: { secure: 1, anxious: 0, avoidant: 3, fearful: 0 } },
{ text: “嫌われたかもと思い、自分から距離を置き始める”, scores: { secure: 0, anxious: 1, avoidant: 1, fearful: 3 } },
],
},
{
id: 2,
category: “lovelang”,
text: “パートナーに一番愛情を感じる瞬間はどれですか？”,
options: [
{ text: “「好き」「大切」など言葉で伝えてくれたとき”, scores: { words: 3, acts: 0, gifts: 0, time: 1, touch: 0 } },
{ text: “さりげなく助けてくれたり、気遣ってくれたとき”, scores: { words: 0, acts: 3, gifts: 0, time: 1, touch: 0 } },
{ text: “プレゼントや「これ好きかと思って」と渡してくれたとき”, scores: { words: 0, acts: 0, gifts: 3, time: 0, touch: 1 } },
{ text: “ただ一緒にいてくれる時間が増えたとき”, scores: { words: 0, acts: 1, gifts: 0, time: 3, touch: 0 } },
{ text: “手を繋いだり、ハグしてくれたとき”, scores: { words: 0, acts: 0, gifts: 0, time: 1, touch: 3 } },
],
},
{
id: 3,
category: “conflict”,
text: “パートナーと意見が衝突したとき、あなたはどうしますか？”,
options: [
{ text: “感情的になっても、最終的には話し合いで解決しようとする”, scores: { secure: 2, anxious: 1, avoidant: 0, fearful: 0 } },
{ text: “相手が怒ったら怖くて、すぐ謝ってしまう”, scores: { secure: 0, anxious: 2, avoidant: 0, fearful: 2 } },
{ text: “言い合いになりそうなら、その場を離れて一人になる”, scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
{ text: “自分の気持ちを抑えて、相手の意見に合わせる”, scores: { secure: 0, anxious: 1, avoidant: 1, fearful: 2 } },
],
},
{
id: 4,
category: “lovelang”,
text: “あなたが恋人に一番してあげたいことは？”,
options: [
{ text: “毎日メッセージや言葉で愛情を伝える”, scores: { words: 3, acts: 0, gifts: 0, time: 0, touch: 0 } },
{ text: “困っているときに先回りして助ける”, scores: { words: 0, acts: 3, gifts: 0, time: 0, touch: 0 } },
{ text: “誕生日や記念日に特別なプレゼントを贈る”, scores: { words: 0, acts: 0, gifts: 3, time: 0, touch: 0 } },
{ text: “予定を合わせてできるだけ一緒にいる”, scores: { words: 0, acts: 0, gifts: 0, time: 3, touch: 0 } },
{ text: “疲れているときに寄り添ってあげる”, scores: { words: 0, acts: 0, gifts: 0, time: 1, touch: 3 } },
],
},
{
id: 5,
category: “pattern”,
text: “恋愛が始まると、あなたはどんな変化がありますか？”,
options: [
{ text: “相手のことを考えつつ、自分の生活リズムも保てる”, scores: { healthy: 3, codep: 0, indep: 1, intense: 0 } },
{ text: “相手中心の生活になり、友人との約束を断ることが増える”, scores: { healthy: 0, codep: 3, indep: 0, intense: 1 } },
{ text: “恋愛でもマイペース。相手に合わせすぎることが苦手”, scores: { healthy: 1, codep: 0, indep: 3, intense: 0 } },
{ text: “全力で愛して全力で傷つく。感情の振れ幅が大きい”, scores: { healthy: 0, codep: 1, indep: 0, intense: 3 } },
],
},
{
id: 6,
category: “attachment”,
text: “「この人は本当に自分のことが好きなのかな」と感じることが…”,
options: [
{ text: “ほとんどない。信頼していれば大丈夫だと思う”, scores: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
{ text: “よくある。確かめたくて試してしまうこともある”, scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
{ text: “あまりない。というか深く考えないようにしている”, scores: { secure: 1, anxious: 0, avoidant: 3, fearful: 0 } },
{ text: “頻繁にある。好きになるほど不安が大きくなる”, scores: { secure: 0, anxious: 2, avoidant: 0, fearful: 3 } },
],
},
{
id: 7,
category: “pattern”,
text: “過去の恋愛を振り返ったとき、最も多いパターンは？”,
options: [
{ text: “お互いを尊重しながら自然に深まっていった”, scores: { healthy: 3, codep: 0, indep: 1, intense: 0 } },
{ text: “急激に燃え上がり、急激に燃え尽きた”, scores: { healthy: 0, codep: 1, indep: 0, intense: 3 } },
{ text: “好きになられると冷めてしまう、を繰り返した”, scores: { healthy: 0, codep: 0, indep: 3, intense: 0 } },
{ text: “相手に尽くしすぎて疲弊した”, scores: { healthy: 0, codep: 3, indep: 0, intense: 1 } },
],
},
{
id: 8,
category: “lovelang”,
text: “恋人に「ありがとう」を伝えるとしたら？”,
options: [
{ text: “ストレートに言葉で伝える”, scores: { words: 3, acts: 0, gifts: 0, time: 0, touch: 0 } },
{ text: “相手の好きな料理を作るなど行動で示す”, scores: { words: 0, acts: 3, gifts: 1, time: 0, touch: 0 } },
{ text: “小さなプレゼントをそっと渡す”, scores: { words: 0, acts: 0, gifts: 3, time: 0, touch: 0 } },
{ text: “「今日どこか行こう」と時間を作る”, scores: { words: 0, acts: 0, gifts: 0, time: 3, touch: 0 } },
{ text: “背中をさすったり、手を握る”, scores: { words: 1, acts: 0, gifts: 0, time: 0, touch: 3 } },
],
},
{
id: 9,
category: “attachment”,
text: “「もっと自由にしたい」と感じるのはいつ？”,
options: [
{ text: “あまり感じない。一緒にいる時間が自然と好き”, scores: { secure: 3, anxious: 0, avoidant: 0, fearful: 1 } },
{ text: “相手が自分に無関心に見えるとき”, scores: { secure: 0, anxious: 2, avoidant: 0, fearful: 2 } },
{ text: “相手が近づいてくるほど逃げたくなる”, scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
{ text: “好きなのに近づかれると怖くて距離を取りたくなる”, scores: { secure: 0, anxious: 1, avoidant: 1, fearful: 3 } },
],
},
{
id: 10,
category: “pattern”,
text: “理想の恋愛のペースは？”,
options: [
{ text: “ゆっくり時間をかけて信頼を積み上げたい”, scores: { healthy: 3, codep: 0, indep: 2, intense: 0 } },
{ text: “早く深い関係になりたい。距離感が縮まるほど安心する”, scores: { healthy: 0, codep: 3, indep: 0, intense: 1 } },
{ text: “お互いの生活を大切にしながら、ゆるくつながっていたい”, scores: { healthy: 1, codep: 0, indep: 3, intense: 0 } },
{ text: “最初から全力で。その激しさが恋愛だと思う”, scores: { healthy: 0, codep: 1, indep: 0, intense: 3 } },
],
},
{
id: 11,
category: “meta”,
text: “恋愛において、あなたが最も恐れていることは？”,
options: [
{ text: “捨てられること・見捨てられること”, scores: { anxious: 3, fearful: 2, avoidant: 0, secure: 0 } },
{ text: “深く傷つくこと・傷つけられること”, scores: { fearful: 3, avoidant: 1, anxious: 1, secure: 0 } },
{ text: “自分を失うこと・束縛されること”, scores: { avoidant: 3, indep: 2, codep: 0, healthy: 0 } },
{ text: “相手を傷つけてしまうこと”, scores: { secure: 1, healthy: 2, anxious: 1, fearful: 1 } },
],
},
{
id: 12,
category: “meta”,
text: “「愛している」という言葉を、あなたはどう感じますか？”,
options: [
{ text: “素直に嬉しいし、自分も伝えたいと思う”, scores: { secure: 3, healthy: 2, words: 2 } },
{ text: “嬉しいけど、本当かな？と少し疑ってしまう”, scores: { anxious: 3, fearful: 1 } },
{ text: “なんとなくこそばゆくて、うまく受け取れない”, scores: { avoidant: 2, indep: 2 } },
{ text: “嬉しいのに、それが怖くて距離を置きたくなる”, scores: { fearful: 3, avoidant: 1 } },
],
},
];

const attachmentTypes = {
secure: {
name: “安定型”,
emoji: “🌿”,
color: “#4ade80”,
desc: “自己肯定感が高く、信頼ベースの恋愛ができます。相手を信じながらも自立しており、健全な距離感を保てる「恋愛の理想形」と言えます。”,
},
anxious: {
name: “不安型”,
emoji: “🌊”,
color: “#60a5fa”,
desc: “愛情に飢えており、確認や試し行動が出やすいタイプ。愛されたい気持ちが強いぶん、深く愛することもできます。”,
},
avoidant: {
name: “回避型”,
emoji: “🌙”,
color: “#a78bfa”,
desc: “親密さに対し無意識の防衛が働くタイプ。独立心は強く魅力的ですが、本当の意味でのつながりを避ける傾向があります。”,
},
fearful: {
name: “恐れ・回避型”,
emoji: “🌪️”,
color: “#f87171”,
desc: “愛されたいのに近づくのが怖い、という矛盾した感情を持つタイプ。内面の豊かさと繊細さを持っています。”,
},
};

const loveLangTypes = {
words: { name: “言葉の愛情表現”, emoji: “💬”, color: “#fbbf24” },
acts: { name: “親切な行為”, emoji: “🤝”, color: “#34d399” },
gifts: { name: “贈り物”, emoji: “🎁”, color: “#f472b6” },
time: { name: “クオリティタイム”, emoji: “⏳”, color: “#60a5fa” },
touch: { name: “スキンシップ”, emoji: “💞”, color: “#fb923c” },
};

const patternTypes = {
healthy: { name: “バランス型”, emoji: “☯️”, color: “#4ade80” },
codep: { name: “共依存型”, emoji: “🔗”, color: “#f87171” },
indep: { name: “自立優先型”, emoji: “🦅”, color: “#a78bfa” },
intense: { name: “情熱燃焼型”, emoji: “🔥”, color: “#fb923c” },
};

function RadarChart({ data, size = 200 }) {
const center = size / 2;
const radius = size / 2 - 30;
const keys = Object.keys(data);
const n = keys.length;
const max = Math.max(…Object.values(data), 1);

const angleStep = (2 * Math.PI) / n;
const points = keys.map((key, i) => {
const angle = i * angleStep - Math.PI / 2;
const val = data[key] / max;
return {
key,
x: center + radius * val * Math.cos(angle),
y: center + radius * val * Math.sin(angle),
gx: center + (radius + 22) * Math.cos(angle),
gy: center + (radius + 22) * Math.sin(angle),
};
});

const polygon = points.map((p) => `${p.x},${p.y}`).join(” “);
const gridLevels = [0.25, 0.5, 0.75, 1];

return (
<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
{gridLevels.map((lv) => {
const gp = keys.map((*, i) => {
const angle = i * angleStep - Math.PI / 2;
return `${center + radius * lv * Math.cos(angle)},${center + radius * lv * Math.sin(angle)}`;
}).join(” “);
return <polygon key={lv} points={gp} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />;
})}
{keys.map((*, i) => {
const angle = i * angleStep - Math.PI / 2;
return (
<line
key={i}
x1={center} y1={center}
x2={center + radius * Math.cos(angle)}
y2={center + radius * Math.sin(angle)}
stroke=“rgba(255,255,255,0.1)” strokeWidth=“1”
/>
);
})}
<polygon points={polygon} fill="rgba(180,100,255,0.25)" stroke="rgba(200,130,255,0.8)" strokeWidth="2" />
{points.map((p) => (
<circle key={p.key} cx={p.x} cy={p.y} r="4" fill="#c084fc" />
))}
{points.map((p) => (
<text
key={p.key + “l”}
x={p.gx} y={p.gy}
textAnchor=“middle”
dominantBaseline=“middle”
fill=“rgba(255,255,255,0.6)”
fontSize=“9”
fontFamily=”‘Noto Sans JP’, sans-serif”
>
{p.key}
</text>
))}
</svg>
);
}

function BarMeter({ label, value, max, color, emoji }) {
const pct = Math.round((value / Math.max(max, 1)) * 100);
return (
<div style={{ marginBottom: “10px” }}>
<div style={{ display: “flex”, justifyContent: “space-between”, fontSize: “12px”, color: “rgba(255,255,255,0.7)”, marginBottom: “4px” }}>
<span>{emoji} {label}</span>
<span style={{ color }}>{pct}%</span>
</div>
<div style={{ background: “rgba(255,255,255,0.08)”, borderRadius: “99px”, height: “8px”, overflow: “hidden” }}>
<div
style={{
width: `${pct}%`,
height: “100%”,
background: `linear-gradient(90deg, ${color}88, ${color})`,
borderRadius: “99px”,
transition: “width 1.2s cubic-bezier(0.23,1,0.32,1)”,
}}
/>
</div>
</div>
);
}

export default function LoveDiagnosis() {
const [phase, setPhase] = useState(“intro”); // intro | quiz | result
const [current, setCurrent] = useState(0);
const [answers, setAnswers] = useState([]);
const [selected, setSelected] = useState(null);
const [animating, setAnimating] = useState(false);
const [result, setResult] = useState(null);
const [resultVisible, setResultVisible] = useState(false);
const particlesRef = useRef(null);

const q = questions[current];

function calcResult(ans) {
const scores = {
secure: 0, anxious: 0, avoidant: 0, fearful: 0,
words: 0, acts: 0, gifts: 0, time: 0, touch: 0,
healthy: 0, codep: 0, indep: 0, intense: 0,
};
ans.forEach(({ option }) => {
Object.entries(option.scores).forEach(([k, v]) => {
if (k in scores) scores[k] += v;
});
});

```
const attachKey = ["secure", "anxious", "avoidant", "fearful"].reduce((a, b) => scores[a] > scores[b] ? a : b);
const langKey = ["words", "acts", "gifts", "time", "touch"].reduce((a, b) => scores[a] > scores[b] ? a : b);
const patKey = ["healthy", "codep", "indep", "intense"].reduce((a, b) => scores[a] > scores[b] ? a : b);

return { scores, attachKey, langKey, patKey };
```

}

function handleSelect(optIdx) {
if (animating || selected !== null) return;
setSelected(optIdx);
}

function handleNext() {
if (selected === null || animating) return;
setAnimating(true);
const newAnswers = […answers, { qid: q.id, option: q.options[selected] }];
setTimeout(() => {
if (current + 1 < questions.length) {
setAnswers(newAnswers);
setCurrent(current + 1);
setSelected(null);
setAnimating(false);
} else {
const r = calcResult(newAnswers);
setResult(r);
setPhase(“result”);
setAnimating(false);
setTimeout(() => setResultVisible(true), 100);
}
}, 400);
}

function restart() {
setPhase(“intro”);
setCurrent(0);
setAnswers([]);
setSelected(null);
setResult(null);
setResultVisible(false);
setAnimating(false);
}

const progress = ((current) / questions.length) * 100;

return (
<div style={{
minHeight: “100vh”,
background: “linear-gradient(135deg, #0a0015 0%, #120025 40%, #0d0020 70%, #05000f 100%)”,
fontFamily: “‘Noto Sans JP’, ‘Hiragino Sans’, sans-serif”,
color: “#f0e8ff”,
position: “relative”,
overflow: “hidden”,
}}>
{/* Stars background */}
<div style={{ position: “fixed”, inset: 0, pointerEvents: “none”, zIndex: 0 }}>
{Array.from({ length: 60 }).map((_, i) => (
<div key={i} style={{
position: “absolute”,
width: Math.random() * 2 + 1 + “px”,
height: Math.random() * 2 + 1 + “px”,
borderRadius: “50%”,
background: “white”,
left: Math.random() * 100 + “%”,
top: Math.random() * 100 + “%”,
opacity: Math.random() * 0.6 + 0.1,
animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
animationDelay: Math.random() * 4 + “s”,
}} />
))}
</div>

```
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
    @keyframes twinkle { from { opacity: 0.1; transform: scale(1); } to { opacity: 0.7; transform: scale(1.3); } }
    @keyframes floatUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(180,100,255,0.3); } 50% { box-shadow: 0 0 40px rgba(180,100,255,0.6), 0 0 80px rgba(120,50,200,0.3); } }
    @keyframes orb-float { 0%,100%{ transform: translate(0,0) scale(1); } 33%{ transform: translate(30px,-20px) scale(1.05); } 66%{ transform: translate(-20px,15px) scale(0.95); } }
    @keyframes shimmer { 0%{ background-position: -200% center; } 100%{ background-position: 200% center; } }
    .opt-btn { transition: all 0.25s ease; cursor: pointer; }
    .opt-btn:hover { transform: translateX(6px); }
  `}</style>

  {/* Orbs */}
  {[
    { c: "#6600cc", x: "-10%", y: "10%", s: "500px" },
    { c: "#cc0066", x: "80%", y: "60%", s: "400px" },
    { c: "#003388", x: "40%", y: "80%", s: "350px" },
  ].map((o, i) => (
    <div key={i} style={{
      position: "fixed", left: o.x, top: o.y,
      width: o.s, height: o.s,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${o.c}33 0%, transparent 70%)`,
      animation: `orb-float ${8 + i * 2}s ease-in-out infinite`,
      animationDelay: `${i * 2}s`,
      pointerEvents: "none", zIndex: 0,
    }} />
  ))}

  <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "40px 20px 80px" }}>

    {/* INTRO */}
    {phase === "intro" && (
      <div style={{ textAlign: "center", animation: "floatUp 0.8s ease both" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🔮</div>
        <div style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(20px, 5vw, 32px)",
          letterSpacing: "0.1em",
          background: "linear-gradient(90deg, #c084fc, #f9a8d4, #c084fc)",
          backgroundSize: "200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 4s linear infinite",
          marginBottom: "8px",
        }}>
          LOVE ORACLE
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "rgba(240,232,255,0.6)", letterSpacing: "0.3em", marginBottom: "40px" }}>
          深層恋愛診断
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(180,100,255,0.2)",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "40px",
          backdropFilter: "blur(20px)",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "2", color: "rgba(240,232,255,0.75)", margin: 0 }}>
            あなたの無意識に潜む恋愛パターンを、心理学に基づく
            <br />
            <strong style={{ color: "#c084fc" }}>12の質問</strong>で多角的に診断します。
            <br /><br />
            <span style={{ fontSize: "13px", color: "rgba(240,232,255,0.5)" }}>
              ・愛着スタイル（安定型／不安型／回避型／恐れ回避型）
              <br />
              ・愛情言語（5つのラブランゲージ）
              <br />
              ・恋愛パターン傾向
              <br />
              ・総合的な恋愛プロファイル
            </span>
          </p>
        </div>

        <button
          onClick={() => setPhase("quiz")}
          style={{
            background: "linear-gradient(135deg, #7c3aed, #db2777)",
            border: "none",
            borderRadius: "99px",
            padding: "18px 56px",
            fontSize: "17px",
            fontWeight: "700",
            color: "white",
            cursor: "pointer",
            letterSpacing: "0.1em",
            fontFamily: "'Noto Sans JP', sans-serif",
            animation: "pulse-glow 3s ease-in-out infinite",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        >
          診断をはじめる ✦
        </button>
      </div>
    )}

    {/* QUIZ */}
    {phase === "quiz" && (
      <div style={{ animation: animating ? "none" : "floatUp 0.5s ease both", opacity: animating ? 0.3 : 1, transition: "opacity 0.3s" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "13px", color: "rgba(192,132,252,0.7)", letterSpacing: "0.2em" }}>
            LOVE ORACLE
          </div>
          <div style={{ fontSize: "13px", color: "rgba(240,232,255,0.5)" }}>
            {current + 1} / {questions.length}
          </div>
        </div>

        {/* Progress */}
        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "99px", height: "3px", marginBottom: "40px", overflow: "hidden" }}>
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #7c3aed, #db2777)",
            borderRadius: "99px",
            transition: "width 0.4s ease",
          }} />
        </div>

        {/* Category badge */}
        <div style={{
          display: "inline-block",
          background: "rgba(124,58,237,0.2)",
          border: "1px solid rgba(124,58,237,0.4)",
          borderRadius: "99px",
          padding: "4px 14px",
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#c084fc",
          marginBottom: "20px",
        }}>
          {{attachment:"愛着スタイル", lovelang:"愛情言語", pattern:"恋愛パターン", conflict:"葛藤対処", meta:"深層心理"}[q.category]}
        </div>

        {/* Question */}
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(20px, 4vw, 26px)",
          fontWeight: "600",
          lineHeight: "1.6",
          marginBottom: "36px",
          color: "#f0e8ff",
        }}>
          {q.text}
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          {q.options.map((opt, i) => {
            const isSel = selected === i;
            return (
              <button
                key={i}
                className="opt-btn"
                onClick={() => handleSelect(i)}
                style={{
                  background: isSel
                    ? "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(219,39,119,0.3))"
                    : "rgba(255,255,255,0.04)",
                  border: isSel
                    ? "1px solid rgba(192,132,252,0.7)"
                    : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "18px 22px",
                  textAlign: "left",
                  color: isSel ? "#f0e8ff" : "rgba(240,232,255,0.75)",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.25s ease",
                  boxShadow: isSel ? "0 4px 30px rgba(124,58,237,0.3)" : "none",
                }}
              >
                <span style={{
                  minWidth: "26px", height: "26px",
                  borderRadius: "50%",
                  border: `2px solid ${isSel ? "#c084fc" : "rgba(255,255,255,0.2)"}`,
                  background: isSel ? "#7c3aed" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: "700",
                  color: isSel ? "white" : "rgba(255,255,255,0.4)",
                  transition: "all 0.2s",
                  flexShrink: 0,
                  marginTop: "1px",
                }}>
                  {isSel ? "✓" : String.fromCharCode(65 + i)}
                </span>
                <span>{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleNext}
            disabled={selected === null}
            style={{
              background: selected !== null
                ? "linear-gradient(135deg, #7c3aed, #db2777)"
                : "rgba(255,255,255,0.05)",
              border: "none",
              borderRadius: "99px",
              padding: "14px 40px",
              fontSize: "15px",
              fontWeight: "700",
              color: selected !== null ? "white" : "rgba(255,255,255,0.2)",
              cursor: selected !== null ? "pointer" : "not-allowed",
              transition: "all 0.25s",
              letterSpacing: "0.05em",
            }}
          >
            {current + 1 === questions.length ? "結果を見る →" : "次へ →"}
          </button>
        </div>
      </div>
    )}

    {/* RESULT */}
    {phase === "result" && result && (
      <div style={{
        opacity: resultVisible ? 1 : 0,
        transform: resultVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>✦</div>
          <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "13px", letterSpacing: "0.3em", color: "#c084fc", marginBottom: "12px" }}>
            YOUR LOVE PROFILE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 5vw, 32px)", fontStyle: "italic" }}>
            診断結果
          </div>
        </div>

        {/* Main attachment card */}
        {(() => {
          const at = attachmentTypes[result.attachKey];
          return (
            <div style={{
              background: `linear-gradient(135deg, ${at.color}18, ${at.color}08)`,
              border: `1px solid ${at.color}44`,
              borderRadius: "24px",
              padding: "36px",
              marginBottom: "24px",
              backdropFilter: "blur(20px)",
              animation: "floatUp 0.6s ease both",
              animationDelay: "0.2s",
              opacity: resultVisible ? 1 : 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ fontSize: "44px" }}>{at.emoji}</div>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(240,232,255,0.5)", marginBottom: "4px" }}>
                    愛着スタイル
                  </div>
                  <div style={{ fontSize: "26px", fontWeight: "700", color: at.color }}>
                    {at.name}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(240,232,255,0.8)", margin: 0 }}>
                {at.desc}
              </p>
            </div>
          );
        })()}

        {/* Love language + Pattern row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          {[
            { key: result.langKey, types: loveLangTypes, label: "愛情言語" },
            { key: result.patKey, types: patternTypes, label: "恋愛パターン" },
          ].map(({ key, types, label }, idx) => {
            const t = types[key];
            return (
              <div key={idx} style={{
                background: `linear-gradient(135deg, ${t.color}15, ${t.color}06)`,
                border: `1px solid ${t.color}33`,
                borderRadius: "20px",
                padding: "24px",
                backdropFilter: "blur(15px)",
                animation: `floatUp 0.6s ease both`,
                animationDelay: `${0.3 + idx * 0.1}s`,
                opacity: resultVisible ? 1 : 0,
              }}>
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>{t.emoji}</div>
                <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,232,255,0.45)", marginBottom: "4px" }}>
                  {label}
                </div>
                <div style={{ fontSize: "15px", fontWeight: "700", color: t.color }}>
                  {t.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Score breakdown */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "24px",
          backdropFilter: "blur(15px)",
          animation: "floatUp 0.6s ease both",
          animationDelay: "0.5s",
          opacity: resultVisible ? 1 : 0,
        }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.2em", color: "rgba(240,232,255,0.45)", marginBottom: "24px" }}>
            DETAILED ANALYSIS
          </div>

          <div style={{ marginBottom: "28px" }}>
            <div style={{ fontSize: "13px", color: "rgba(240,232,255,0.6)", marginBottom: "14px" }}>▸ 愛着スタイル</div>
            {Object.entries(attachmentTypes).map(([k, v]) => (
              <BarMeter key={k} label={v.name} value={result.scores[k]} max={15} color={v.color} emoji={v.emoji} />
            ))}
          </div>

          <div style={{ marginBottom: "28px" }}>
            <div style={{ fontSize: "13px", color: "rgba(240,232,255,0.6)", marginBottom: "14px" }}>▸ 愛情言語</div>
            {Object.entries(loveLangTypes).map(([k, v]) => (
              <BarMeter key={k} label={v.name} value={result.scores[k]} max={12} color={v.color} emoji={v.emoji} />
            ))}
          </div>

          <div>
            <div style={{ fontSize: "13px", color: "rgba(240,232,255,0.6)", marginBottom: "14px" }}>▸ 恋愛パターン</div>
            {Object.entries(patternTypes).map(([k, v]) => (
              <BarMeter key={k} label={v.name} value={result.scores[k]} max={12} color={v.color} emoji={v.emoji} />
            ))}
          </div>
        </div>

        {/* Radar + advice */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "24px",
            display: "flex", flexDirection: "column", alignItems: "center",
            animation: "floatUp 0.6s ease both",
            animationDelay: "0.6s",
            opacity: resultVisible ? 1 : 0,
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(240,232,255,0.4)", marginBottom: "16px" }}>
              RADAR CHART
            </div>
            <RadarChart
              size={200}
              data={{
                "安定": result.scores.secure,
                "不安": result.scores.anxious,
                "回避": result.scores.avoidant,
                "恐れ": result.scores.fearful,
                "健全": result.scores.healthy,
                "情熱": result.scores.intense,
              }}
            />
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "24px",
            animation: "floatUp 0.6s ease both",
            animationDelay: "0.7s",
            opacity: resultVisible ? 1 : 0,
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(240,232,255,0.4)", marginBottom: "16px" }}>
              ADVICE
            </div>
            <div style={{ fontSize: "13px", lineHeight: "1.85", color: "rgba(240,232,255,0.7)" }}>
              {result.attachKey === "secure" && "あなたの安定感は大きな強みです。その信頼の根を、まだ不安を抱える相手のために惜しまず分けてあげて。"}
              {result.attachKey === "anxious" && "「確かめなくても大丈夫」という経験を少しずつ積んでいこう。自分自身を満たすことが、愛される鍵です。"}
              {result.attachKey === "avoidant" && "距離を置くのは防衛本能。傷つくことを恐れすぎず、少しだけ心の鍵を開けてみると世界が変わります。"}
              {result.attachKey === "fearful" && "引力と斥力が同時に働くあなたの恋愛は深く複雑。まず自分自身と安心できる関係を築くことが大切です。"}
            </div>
          </div>
        </div>

        {/* Compatibility hint */}
        <div style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(219,39,119,0.15))",
          border: "1px solid rgba(192,132,252,0.25)",
          borderRadius: "20px",
          padding: "24px",
          marginBottom: "32px",
          animation: "floatUp 0.6s ease both",
          animationDelay: "0.8s",
          opacity: resultVisible ? 1 : 0,
        }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#c084fc", marginBottom: "12px" }}>
            ✦ 相性の良いタイプ
          </div>
          <div style={{ fontSize: "14px", lineHeight: "1.8", color: "rgba(240,232,255,0.75)" }}>
            {result.attachKey === "secure" && "どのタイプとも相性良し。特に不安型や恐れ回避型のパートナーの安全基地になれる可能性があります。"}
            {result.attachKey === "anxious" && "安定型との関係で安心感を学ぶのが理想。同じ不安型同士は共鳴しやすいが、不安が増幅することも。"}
            {result.attachKey === "avoidant" && "安定型が最良のパートナー。押しつけず、でも離れない安心感ある存在が心を開かせてくれます。"}
            {result.attachKey === "fearful" && "安定型のパートナーが最も助けになります。焦らず、ゆっくりと信頼を積み上げる関係が理想的。"}
          </div>
        </div>

        {/* Retry */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={restart}
            style={{
              background: "transparent",
              border: "1px solid rgba(192,132,252,0.4)",
              borderRadius: "99px",
              padding: "14px 40px",
              fontSize: "14px",
              color: "rgba(192,132,252,0.8)",
              cursor: "pointer",
              letterSpacing: "0.1em",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.target.style.background = "rgba(192,132,252,0.1)"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; }}
          >
            もう一度診断する
          </button>
        </div>

      </div>
    )}
  </div>
</div>
```

);
}
