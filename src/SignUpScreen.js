import { useState } from "react";
import ChannelScreen from "./ChannelScreen";

function SignUpScreen() {
const [screen, setScreen] = useState("signup");

if (screen === "channel") {
return <ChannelScreen />;
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
<div style={{ padding: "12px 24px 44px" }}>
<p style={{ color: "white", fontSize: 16, fontWeight: 700, margin: "0 0 20px" }}>
Create an account
</p>
<div style={{
display: "flex", alignItems: "center", gap: 10,
backgroundColor: "rgba(255,255,255,0.09)", borderRadius: 8,
padding: "13px 14px", marginBottom: 12,
border: "1px solid rgba(255,255,255,0.18)",
}}>
<span style={{ fontSize: 14 }}>👤</span>
<input type="text" placeholder="Name or Email" style={{
background: "none", border: "none", outline: "none",
color: "white", fontSize: 13, flex: 1,
}} />
</div>
<div style={{
display: "flex", alignItems: "center", gap: 10,
backgroundColor: "rgba(255,255,255,0.09)", borderRadius: 8,
padding: "13px 14px", marginBottom: 12,
border: "1px solid rgba(255,255,255,0.18)",
}}>
<span style={{ fontSize: 14 }}>🔒</span>
<input type="password" placeholder="Password" style={{
background: "none", border: "none", outline: "none",
color: "white", fontSize: 13, flex: 1,
}} />
</div>
<div style={{
display: "flex", alignItems: "center", gap: 10,
backgroundColor: "rgba(255,255,255,0.09)", borderRadius: 8,
padding: "13px 14px", marginBottom: 20,
border: "1px solid rgba(255,255,255,0.18)",
}}>
<span style={{ fontSize: 14 }}>🔒</span>
<input type="password" placeholder="Confirm password" style={{
background: "none", border: "none", outline: "none",
color: "white", fontSize: 13, flex: 1,
}} />
</div>
<button
onClick={() => setScreen("channel")}
style={{
width: "100%", padding: "15px 0", borderRadius: 10,
backgroundColor: "white", color: "#295F2D",
fontWeight: 700, fontSize: 15, border: "none",
cursor: "pointer", marginBottom: 16,
}}>
Sign Up
</button>
<p style={{
color: "rgba(255,255,255,0.45)", fontSize: 11,
textAlign: "center", margin: "0 0 10px",
}}>Sign in with</p>
<div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 18 }}>
{["G", "f", "in"].map(s => (
<div key={s} style={{
width: 36, height: 36, borderRadius: "50%",
backgroundColor: "rgba(255,255,255,0.1)",
border: "1px solid rgba(255,255,255,0.25)",
display: "flex", alignItems: "center", justifyContent: "center",
color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer",
}}>{s}</div>
))}
</div>
<p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, textAlign: "center", margin: 0 }}>
Already have an account?{" "}
<span style={{ color: "white", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>
Sign In
</span>
</p>
</div>
</div>
</div>
);
}

export default SignUpScreen;
