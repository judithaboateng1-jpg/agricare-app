import { useState } from "react";
import RoleScreen from "./RoleScreen";
import VetChatScreen from "./VetChatScreen";
import ImpactDashboard from "./ImpactDashboard";
import B2BPortal from "./B2BPortal";
import IoTDashboard from "./IoTDashboard";
import WhatsAppAlert from "./WhatsAppAlert";

function App() {
const [screen, setScreen] = useState("splash");

if (screen === "role") return <RoleScreen />;
if (screen === "vetchat") return <VetChatScreen />;
if (screen === "impact") return <ImpactDashboard />;
if (screen === "b2b") return <B2BPortal />;
if (screen === "iot") return <IoTDashboard />;
if (screen === "whatsappalert") return <WhatsAppAlert />;

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
<div style={{
backgroundColor: "#A6C78E",
height: 180,
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: 80,
}}>
🐔
</div>

<div style={{ padding: "18px 24px 32px" }}>
<h1 style={{
color: "white", fontSize: 26,
fontWeight: 800, letterSpacing: 2, margin: "0 0 6px",
}}>AGRICARE</h1>

<p style={{
color: "rgba(255,255,255,0.7)", fontSize: 12,
lineHeight: 1.6, margin: "0 0 14px",
}}>
AI-powered poultry advisory platform.
</p>

{[
{ label: "Continue", screen: "role", primary: true },
{ label: "Live Vet Chat", screen: "vetchat" },
{ label: "Impact Dashboard", screen: "impact" },
{ label: "B2B Partner Portal", screen: "b2b" },
{ label: "IoT Sensor Dashboard", screen: "iot" },
{ label: "WhatsApp Alerts", screen: "whatsappalert" },
].map((btn, i) => (
<button key={i} onClick={() => setScreen(btn.screen)} style={{
width: "100%", padding: "12px 0", borderRadius: 10,
backgroundColor: btn.primary ? "white" : "transparent",
color: btn.primary ? "#295F2D" : "white",
fontWeight: btn.primary ? 700 : 600,
fontSize: 13,
border: btn.primary ? "none" : "1.5px solid rgba(255,255,255,0.55)",
cursor: "pointer", marginBottom: 8,
}}>{btn.label}</button>
))}

<div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 8 }}>
<div style={{ width: 22, height: 7, borderRadius: 4, backgroundColor: "white" }} />
<div style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.3)" }} />
<div style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.3)" }} />
</div>
</div>
</div>
</div>
);
}

export default App;
