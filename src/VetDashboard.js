import { useState } from "react";
import ChatScreen from "./ChatScreen";

function VetDashboard() {
const [screen, setScreen] = useState("vetdashboard");

if (screen === "chat") {
return <ChatScreen />;
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
<div style={{ padding: "4px 20px 12px" }}>
<p style={{ color: "white", fontSize: 14, fontWeight: 700, margin: 0 }}>
Good Morning, Dr Kay.
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: "2px 0 0" }}>
Here is an overview of your cases
</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 20px 14px" }}>
<div style={{ backgroundColor: "#F43F3F", borderRadius: 10, padding: "12px 14px" }}>
<p style={{ color: "white", fontSize: 10, margin: "0 0 4px" }}>Critical Cases</p>
<p style={{ color: "white", fontSize: 28, fontWeight: 800, margin: 0 }}>35</p>
</div>
<div style={{ backgroundColor: "rgba(255,255,255,0.13)", borderRadius: 10, padding: "12px 14px" }}>
<p style={{ color: "white", fontSize: 10, margin: "0 0 4px" }}>All Cases</p>
<p style={{ color: "white", fontSize: 28, fontWeight: 800, margin: 0 }}>108</p>
</div>
<div style={{ backgroundColor: "#08F071", borderRadius: 10, padding: "12px 14px" }}>
<p style={{ color: "white", fontSize: 10, margin: "0 0 4px" }}>New Alerts</p>
<p style={{ color: "white", fontSize: 28, fontWeight: 800, margin: 0 }}>26</p>
</div>
<div style={{ backgroundColor: "rgba(255,255,255,0.13)", borderRadius: 10, padding: "12px 14px" }}>
<p style={{ color: "white", fontSize: 10, margin: "0 0 4px" }}>Active Cases</p>
<p style={{ color: "white", fontSize: 28, fontWeight: 800, margin: 0 }}>78</p>
</div>
</div>
</div>
</div>
);
}

export default ChatScreen;
