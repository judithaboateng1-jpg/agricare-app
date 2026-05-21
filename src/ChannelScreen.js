import { useState } from "react";
import ChatScreen from "./ChatScreen";
import USSDScreen from "./USSDScreen";

function ChannelScreen() {
const [screen, setScreen] = useState("channel");
const [selected, setSelected] = useState("whatsapp");

if (screen === "chat") {
return <ChatScreen />;
}

if (screen === "ussd") {
return <USSDScreen />;
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

<div style={{ padding: "16px 22px 0" }}>
<span style={{ color: "white", fontSize: 22 }}>‹</span>
</div>

<div style={{ padding: "14px 24px 44px" }}>

<p style={{
color: "white", fontSize: 16,
fontWeight: 700, margin: "0 0 6px",
}}>
Hello Adamu,
</p>

<p style={{
color: "rgba(255,255,255,0.7)", fontSize: 13,
lineHeight: 1.7, margin: "0 0 30px",
}}>
I am Agricare, your poultry Assistant.
How would you like to reach out to us?
</p>

{/* USSD Option */}
<div
onClick={() => setSelected("ussd")}
style={{
display: "flex", alignItems: "center", gap: 14,
padding: "16px 18px", borderRadius: 12,
backgroundColor: selected === "ussd"
? "rgba(255,255,255,0.13)"
: "rgba(255,255,255,0.06)",
border: `1.5px solid ${selected === "ussd" ? "white" : "rgba(255,255,255,0.22)"}`,
marginBottom: 12, cursor: "pointer",
}}>
<div style={{
width: 22, height: 22, borderRadius: "50%",
backgroundColor: selected === "ussd" ? "#08F071" : "transparent",
border: `2px solid ${selected === "ussd" ? "#08F071" : "rgba(255,255,255,0.45)"}`,
display: "flex", alignItems: "center", justifyContent: "center",
color: "#295F2D", fontWeight: 900, fontSize: 12,
}}>
{selected === "ussd" ? "✓" : ""}
</div>
<span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>
USSD System
</span>
</div>

{/* WhatsApp Option */}
<div
onClick={() => setSelected("whatsapp")}
style={{
display: "flex", alignItems: "center", gap: 14,
padding: "16px 18px", borderRadius: 12,
backgroundColor: selected === "whatsapp"
? "rgba(255,255,255,0.13)"
: "rgba(255,255,255,0.06)",
border: `1.5px solid ${selected === "whatsapp" ? "white" : "rgba(255,255,255,0.22)"}`,
marginBottom: 30, cursor: "pointer",
}}>
<div style={{
width: 22, height: 22, borderRadius: "50%",
backgroundColor: selected === "whatsapp" ? "#08F071" : "transparent",
border: `2px solid ${selected === "whatsapp" ? "#08F071" : "rgba(255,255,255,0.45)"}`,
display: "flex", alignItems: "center", justifyContent: "center",
color: "#295F2D", fontWeight: 900, fontSize: 12,
}}>
{selected === "whatsapp" ? "✓" : ""}
</div>
<span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>
WhatsApp
</span>
</div>

{/* Continue Button */}
<button
onClick={() => setScreen(selected === "whatsapp" ? "chat" : "ussd")}
style={{
width: "100%", padding: "15px 0", borderRadius: 10,
backgroundColor: "white", color: "#295F2D",
fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer",
}}>
Continue
</button>

</div>

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

export default ChannelScreen;