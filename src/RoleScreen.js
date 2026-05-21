import LandingScreen from "./LandingScreen";
import { useState } from "react";

function RoleScreen() {
const [screen, setScreen] = useState("role");

if (screen === "landing") {
return <LandingScreen />;
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

{/* Phone Container */}
<div style={{
width: 360,
backgroundColor: "#295F2D",
borderRadius: 40,
overflow: "hidden",
boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
}}>

{/* Back arrow */}
<div style={{ padding: "16px 22px 0" }}>
<span style={{ color: "white", fontSize: 22 }}>‹</span>
</div>

{/* Content */}
<div style={{ padding: "14px 24px" }}>

<p style={{
color: "white",
fontSize: 16,
fontWeight: 700,
margin: "0 0 22px",
}}>
Who's Using Agricare?
</p>

{/* Farmer option */}
<div style={{
display: "flex",
alignItems: "center",
gap: 14,
padding: "16px 18px",
borderRadius: 12,
backgroundColor: "rgba(255,255,255,0.13)",
border: "1.5px solid white",
marginBottom: 12,
cursor: "pointer",
}}>
<div style={{
width: 22, height: 22, borderRadius: "50%",
backgroundColor: "#08F071",
border: "2px solid #08F071",
display: "flex", alignItems: "center",
justifyContent: "center",
color: "#295F2D", fontWeight: 900, fontSize: 12,
}}>✓</div>
<span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>Farmer</span>
</div>

{/* Vet Doctor option */}
<div style={{
display: "flex",
alignItems: "center",
gap: 14,
padding: "16px 18px",
borderRadius: 12,
backgroundColor: "rgba(255,255,255,0.06)",
border: "1.5px solid rgba(255,255,255,0.22)",
marginBottom: 12,
cursor: "pointer",
}}>
<div style={{
width: 22, height: 22, borderRadius: "50%",
backgroundColor: "transparent",
border: "2px solid rgba(255,255,255,0.45)",
}}></div>
<span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>Vet Doctor</span>
</div>

{/* Guest User option */}
<div style={{
display: "flex",
alignItems: "center",
gap: 14,
padding: "16px 18px",
borderRadius: 12,
backgroundColor: "rgba(255,255,255,0.06)",
border: "1.5px solid rgba(255,255,255,0.22)",
marginBottom: 30,
cursor: "pointer",
}}>
<div style={{
width: 22, height: 22, borderRadius: "50%",
backgroundColor: "transparent",
border: "2px solid rgba(255,255,255,0.45)",
}}></div>
<span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>Guest User</span>
</div>

{/* Get Started Button */}
<button
onClick={() => setScreen("landing")}
style={{
width: "100%",
padding: "15px 0",
borderRadius: 10,
backgroundColor: "white",
color: "#295F2D",
fontWeight: 700,
fontSize: 15,
border: "none",
cursor: "pointer",
}}>
Get Started
</button>

</div>
</div>

</div>
);
}

export default RoleScreen;
