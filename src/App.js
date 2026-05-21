import { useState } from "react";
import RoleScreen from "./RoleScreen";

function App() {
const [screen, setScreen] = useState("splash");

if (screen === "role") {
return <RoleScreen />;
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
<div style={{
backgroundColor: "#A6C78E",
height: 380,
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: 120,
}}>
🐔
</div>

<div style={{ padding: "28px 24px 44px" }}>
<h1 style={{
color: "white", fontSize: 30,
fontWeight: 800, letterSpacing: 2, margin: "0 0 10px",
}}>AGRICARE</h1>

<p style={{
color: "rgba(255,255,255,0.7)", fontSize: 13,
lineHeight: 1.7, margin: "0 0 28px",
}}>
We're here to help you raise healthy chickens
and reduce losses via real-time IoT monitoring.
</p>

<button
onClick={() => setScreen("role")}
style={{
width: "100%", padding: "15px 0", borderRadius: 10,
backgroundColor: "white", color: "#295F2D",
fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer",
}}>
Continue
</button>

<div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 20 }}>
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
