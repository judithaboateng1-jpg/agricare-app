import { useState } from "react";

function VetChatScreen() {
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([
{ from: "vet", text: "Hello! I am Dr. Amaka. I have reviewed your case. Your chickens may have Newcastle Disease. How many birds are affected?" },
{ from: "farmer", text: "About 50 birds out of 200" },
{ from: "vet", text: "Okay. Have you isolated the sick birds from the healthy ones yet?" },
]);

const sendMessage = () => {
if (message.trim() === "") return;
setMessages([...messages, { from: "farmer", text: message }]);
setMessage("");
};

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
<span style={{ color: "white", fontSize: 22, cursor: "pointer" }}>back</span>
<div style={{
width: 40, height: 40, borderRadius: "50%",
backgroundColor: "#429949",
display: "flex", alignItems: "center",
justifyContent: "center",
color: "white", fontWeight: 700, fontSize: 12,
}}>DR</div>
<div>
<p style={{ color: "white", fontSize: 13, fontWeight: 700, margin: 0 }}>Dr. Amaka</p>
<p style={{ color: "#08F071", fontSize: 10, margin: 0 }}>Online - Veterinary Doctor</p>
</div>
<div style={{ marginLeft: "auto" }}>
<span style={{
backgroundColor: "#F43F3F",
color: "white", fontSize: 9,
fontWeight: 700, padding: "3px 8px",
borderRadius: 10,
}}>PAY N2,500</span>
</div>
</div>
</div>

<div style={{
backgroundColor: "rgba(244,63,63,0.1)",
padding: "10px 16px",
borderBottom: "1px solid rgba(244,63,63,0.2)",
}}>
<p style={{
color: "#F43F3F", fontSize: 11,
fontWeight: 600, margin: 0, textAlign: "center",
}}>
This session costs N2,500. Charged after consultation.
</p>
</div>

<div style={{
padding: "12px 14px",
backgroundColor: "#e8f5e1",
minHeight: 360,
maxHeight: 360,
overflowY: "auto",
}}>
{messages.map((m, i) => {
const isVet = m.from === "vet";
return (
<div key={i} style={{
display: "flex",
justifyContent: isVet ? "flex-start" : "flex-end",
marginBottom: 10,
}}>
{isVet && (
<div style={{
width: 28, height: 28, borderRadius: "50%",
backgroundColor: "#295F2D",
display: "flex", alignItems: "center",
justifyContent: "center",
color: "white", fontWeight: 700, fontSize: 9,
marginRight: 6, flexShrink: 0,
}}>DR</div>
)}
<div style={{
maxWidth: "72%",
backgroundColor: isVet ? "white" : "#367D3B",
borderRadius: isVet ? "4px 12px 12px 12px" : "12px 4px 12px 12px",
padding: "10px 12px",
boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
}}>
<p style={{
color: isVet ? "#1a1a1a" : "white",
fontSize: 12, margin: 0, lineHeight: 1.65,
}}>{m.text}</p>
<p style={{
color: isVet ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)",
fontSize: 9, textAlign: "right", margin: "4px 0 0",
}}>11:32 PM done</p>
</div>
</div>
);
})}
</div>

<div style={{
backgroundColor: "white",
padding: "8px 14px",
display: "flex", gap: 8, overflowX: "auto",
borderTop: "1px solid #eee",
}}>
{["Yes, I have", "Not yet", "Send photo", "Call me"].map(r => (
<button key={r} onClick={() => setMessage(r)} style={{
backgroundColor: "#e8f5e1",
border: "1px solid #295F2D",
borderRadius: 20, padding: "5px 12px",
fontSize: 11, color: "#295F2D",
fontWeight: 600, cursor: "pointer",
whiteSpace: "nowrap",
}}>{r}</button>
))}
</div>

<div style={{
backgroundColor: "white", padding: "10px 14px",
display: "flex", alignItems: "center", gap: 8,
borderTop: "1px solid #ddd",
}}>
<input
placeholder="Type a message..."
value={message}
onChange={e => setMessage(e.target.value)}
onKeyPress={e => e.key === "Enter" && sendMessage()}
style={{
flex: 1, border: "none", outline: "none",
fontSize: 13, color: "#333",
}}
/>
<button onClick={sendMessage} style={{
backgroundColor: "#295F2D", color: "white",
border: "none", borderRadius: 20,
padding: "8px 16px", cursor: "pointer",
fontSize: 12, fontWeight: 700,
}}>Send</button>
</div>

</div>
</div>
);
}

export default VetChatScreen;

