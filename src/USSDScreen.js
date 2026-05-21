import { useState } from "react";
import LanguageScreen from "./LanguageScreen";

function USSDScreen() {
const [screen, setScreen] = useState("ussd");

if (screen === "language") {
return <LanguageScreen />;
}

return (
<div style={{
backgroundColor: "#071407",
minHeight: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontFamily: "Inter, sans-serif",
}}>

<div style={{
width: 360,
backgroundColor: "#295F2D",
borderRadius: 40,
overflow: "hidden",
boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
}}>

{/* Header */}
<div style={{
padding: "16px 22px 0",
display: "flex", alignItems: "center", gap: 8,
}}>
<span style={{ color: "white", fontSize: 22 }}>‹</span>
<span style={{ color: "white", fontSize: 13, fontWeight: 600 }}>
Connecting to Agricare USSD
</span>
</div>

{/* Content */}
<div style={{
padding: "24px 30px 40px",
display: "flex", flexDirection: "column", alignItems: "center",
}}>

{/* Display */}
<div style={{
width: "100%",
backgroundColor: "rgba(255,255,255,0.1)",
borderRadius: 10, padding: "16px",
textAlign: "center", marginBottom: 28,
minHeight: 46,
border: "1px solid rgba(255,255,255,0.2)",
}}>
<span style={{ color: "white", fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>
*347#
</span>
</div>

{/* Keypad */}
<div style={{
display: "grid",
gridTemplateColumns: "repeat(3, 1fr)",
gap: 14, width: "100%",
}}>
{[
{ k: "1", s: "" }, { k: "2", s: "ABC" }, { k: "3", s: "DEF" },
{ k: "4", s: "GHI" }, { k: "5", s: "JKL" }, { k: "6", s: "MNO" },
{ k: "7", s: "PQRS" }, { k: "8", s: "TUV" }, { k: "9", s: "WXYZ" },
{ k: "*", s: "" }, { k: "0", s: "" }, { k: "#", s: "" },
].map(({ k, s }, i) => (
<button key={i} style={{
height: 62, borderRadius: "50%",
backgroundColor: k === "3" ? "#429949" : "rgba(255,255,255,0.1)",
border: "1px solid rgba(255,255,255,0.18)",
display: "flex", flexDirection: "column",
alignItems: "center", justifyContent: "center",
cursor: "pointer", color: "white",
fontFamily: "Inter, sans-serif",
}}>
<span style={{ fontSize: 18, fontWeight: 700 }}>{k}</span>
{s && <span style={{ fontSize: 7, opacity: 0.55, letterSpacing: 1 }}>{s}</span>}
</button>
))}
</div>

{/* Call button */}
<div style={{ marginTop: 16 }}>
<button style={{
width: 62, height: 62, borderRadius: "50%",
backgroundColor: "#08F071", border: "none",
display: "flex", alignItems: "center",
justifyContent: "center",
fontSize: 24, cursor: "pointer",
}}>📞</button>
</div>

{/* Change Language link */}
<p
onClick={() => setScreen("language")}
style={{
color: "rgba(255,255,255,0.7)",
fontSize: 12, marginTop: 20,
textDecoration: "underline", cursor: "pointer",
}}>
Change Language
</p>

</div>

{/* Bottom Nav */}
<div style={{
display: "flex", justifyContent: "space-around",
padding: "10px 0 20px",
borderTop: "1px solid rgba(255,255,255,0.1)",
}}>
{["🏠", "❓", "👤", "🔔", "⚙️"].map((icon, i) => (
<span key={i} style={{
fontSize: 18, opacity: i === 0 ? 1 : 0.4, cursor: "pointer",
}}>{icon}</span>
))}
</div>

</div>
</div>
);
}

export default USSDScreen;
