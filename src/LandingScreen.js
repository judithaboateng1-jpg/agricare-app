import { useState } from "react";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import LanguageScreen from "./LanguageScreen";

function LandingScreen() {
const [screen, setScreen] = useState("landing");

if (screen === "signup") {
return <SignUpScreen />;
}

if (screen === "signin") {
return <SignInScreen />;
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
height: 280,
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: 100,
}}>
👩‍🌾
</div>

{/* Bottom dark green content */}
<div style={{ padding: "26px 24px 44px" }}>

<h1 style={{
color: "white",
fontSize: 28,
fontWeight: 800,
letterSpacing: 2,
margin: "0 0 8px",
}}>
AGRICARE
</h1>

<p style={{
color: "rgba(255,255,255,0.65)",
fontSize: 13,
lineHeight: 1.7,
margin: "0 0 28px",
}}>
Get reliable poultry care advice anytime,
with or without internet.
</p>

{/* Sign Up Button */}
<button
onClick={() => setScreen("signup")}
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
Sign Up
</button>

{/* Sign In Button */}
<button
onClick={() => setScreen("signin")}
style={{
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
Sign In
</button>

</div>
</div>

</div>
);
}

export default LandingScreen;


