import { useState } from "react";
import VetDashboard from "./VetDashboard";

function SignInScreen() {
const [screen, setScreen] = useState("signin");

if (screen === "vetdashboard") {
return <VetDashboard />;
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

{/* Top sage green image area */}
<div style={{
backgroundColor: "#A6C78E",
height: 250,
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: 100,
}}>
🐓
</div>

{/* Bottom dark green content */}
<div style={{ padding: "24px 24px 44px" }}>

<h1 style={{
color: "white",
fontSize: 26,
fontWeight: 800,
letterSpacing: 2,
margin: "0 0 6px",
}}>
AGRICARE
</h1>

<p style={{
color: "rgba(255,255,255,0.6)",
fontSize: 12,
lineHeight: 1.7,
margin: "0 0 22px",
}}>
We will guide you step by step, just like
a trusted farm advisor.
</p>

{/* Name or Email field */}
<div style={{
display: "flex",
alignItems: "center",
gap: 10,
backgroundColor: "rgba(255,255,255,0.09)",
borderRadius: 8,
padding: "13px 14px",
marginBottom: 12,
border: "1px solid rgba(255,255,255,0.18)",
}}>
<span style={{ fontSize: 14 }}>👤</span>
<input
type="text"
placeholder="Name or Email"
style={{
background: "none",
border: "none",
outline: "none",
color: "white",
fontSize: 13,
flex: 1,
}}
/>
</div>

{/* Password field */}
<div style={{
display: "flex",
alignItems: "center",
gap: 10,
backgroundColor: "rgba(255,255,255,0.09)",
borderRadius: 8,
padding: "13px 14px",
marginBottom: 20,
border: "1px solid rgba(255,255,255,0.18)",
}}>
<span style={{ fontSize: 14 }}>🔒</span>
<input
type="password"
placeholder="Password"
style={{
background: "none",
border: "none",
outline: "none",
color: "white",
fontSize: 13,
flex: 1,
}}
/>
</div>

{/* Sign In Button */}
<button
onClick={() => setScreen("vetdashboard")}
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
marginBottom: 12,
}}>
Sign In
</button>

{/* Sign Up Button */}
<button style={{
width: "100%",
padding: "14px 0",
borderRadius: 10,
backgroundColor: "transparent",
color: "white",
fontWeight: 600,
fontSize: 15,
border: "1.5px solid rgba(255,255,255,0.55)",
cursor: "pointer",
}}>
Sign Up
</button>

</div>
</div>

</div>
);
}

export default SignInScreen;
