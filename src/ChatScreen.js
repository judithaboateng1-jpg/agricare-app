import { useState } from "react";
import FeedbackScreen from "./FeedbackScreen";

function ChatScreen() {
const [screen, setScreen] = useState("chat");

if (screen === "feedback") {
return <FeedbackScreen />;
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
backgroundColor: "#e8f5e1",
borderRadius: 40,
overflow: "hidden",
boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
}}>
<div style={{ backgroundColor: "#295F2D", padding: "16px 16px 14px" }}>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<span style={{ color: "white", fontSize: 22 }}>‹</span>
<div style={{
width: 34, height: 34, borderRadius: "50%",
backgroundColor: "#429949",
display: "flex", alignItems: "center",
justifyContent: "center", fontSize: 16,
}}>🌿</div>
<div>
<p style={{ color: "white", fontSize: 13, fontWeight: 700, margin: 0 }}>AGRICARE</p>
<p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, margin: 0 }}>Online</p>
</div>
<span style={{ marginLeft: "auto", color: "white", fontSize: 20 }}>⋮</span>
</div>
</div>

<div style={{ padding: "12px 14px", backgroundColor: "#e8f5e1", minHeight: 400 }}>

<div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 10 }}>
<div style={{
maxWidth: "78%", backgroundColor: "white",
borderRadius: "4px 12px 12px 12px", padding: "10px 12px",
}}>
<p style={{ color: "#1a1a1a", fontSize: 12, margin: 0, lineHeight: 1.65 }}>
Hello Adamu. Hope the chickens are doing well?
</p>
<p style={{ color: "rgba(0,0,0,0.3)", fontSize: 9, textAlign: "right", margin: "4px 0 0" }}>
11:30 PM ✓✓
</p>
</div>
</div>

<div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
<div style={{
maxWidth: "78%", backgroundColor: "#367D3B",
borderRadius: "12px 4px 12px 12px", padding: "10px 12px",
}}>
<p style={{ color: "white", fontSize: 12, margin: 0 }}>
My chickens are weak and not eating
</p>
<p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, textAlign: "right", margin: "4px 0 0" }}>
11:31 PM ✓✓
</p>
</div>
</div>

<div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 10 }}>
<div style={{
maxWidth: "78%", backgroundColor: "white",
borderRadius: "4px 12px 12px 12px", padding: "10px 12px",
}}>
<p style={{ color: "#F43F3F", fontSize: 10, fontWeight: 800, margin: "0 0 6px" }}>
Possible Case: Newcastle Disease
</p>
<p style={{ color: "#1a1a1a", fontSize: 12, margin: 0, lineHeight: 1.65 }}>
1. Stop birds movement{"\n"}
2. Isolate sick birds{"\n"}
3. Disinfect feeders{"\n"}
4. Wash hands before re-entry
</p>
<p style={{ color: "#F43F3F", fontSize: 11, fontWeight: 700, margin: "8px 0 6px" }}>
Seek help from a Veterinary Doctor.
</p>
<button style={{
backgroundColor: "#F43F3F", color: "white",
border: "none", borderRadius: 6,
padding: "7px 18px", fontSize: 11,
fontWeight: 700, cursor: "pointer",
}}>Call Vet</button>
<p style={{ color: "rgba(0,0,0,0.3)", fontSize: 9, textAlign: "right", margin: "4px 0 0" }}>
11:32 PM ✓✓
</p>
</div>
</div>

{/* Feedback prompt */}
<div style={{
backgroundColor: "white", borderRadius: 12,
padding: "14px", marginTop: 10,
textAlign: "center",
boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
}}>
<p style={{ color: "#1a1a1a", fontSize: 12, fontWeight: 600, margin: "0 0 10px" }}>
Was this helpful? Rate your experience!
</p>
<button
onClick={() => setScreen("feedback")}
style={{
backgroundColor: "#295F2D", color: "white",
border: "none", borderRadius: 8,
padding: "8px 20px", fontSize: 12,
fontWeight: 700, cursor: "pointer",
}}>
Give Feedback ⭐
</button>
</div>

</div>

<div style={{
backgroundColor: "white", padding: "10px 14px",
display: "flex", alignItems: "center", gap: 8,
borderTop: "1px solid #ddd",
}}>
<span style={{ fontSize: 18, opacity: 0.45 }}>😊</span>
<input placeholder="What would you like to know?" style={{
flex: 1, border: "none", outline: "none",
fontSize: 13, color: "#333",
}} />
<span style={{ fontSize: 18, opacity: 0.45 }}>📎</span>
<span style={{ fontSize: 18, opacity: 0.45 }}>🎤</span>
</div>
</div>
</div>
);
}

export default ChatScreen;