function WhatsAppAlert() {
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

{/* Header */}
<div style={{ backgroundColor: "#295F2D", padding: "16px 16px 14px" }}>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<span style={{ color: "white", fontSize: 22 }}>back</span>
<div style={{
width: 34, height: 34, borderRadius: "50%",
backgroundColor: "#429949",
display: "flex", alignItems: "center",
justifyContent: "center",
color: "white", fontWeight: 700, fontSize: 12,
}}>AC</div>
<div>
<p style={{ color: "white", fontSize: 13, fontWeight: 700, margin: 0 }}>AGRICARE Alerts</p>
<p style={{ color: "#08F071", fontSize: 10, margin: 0 }}>IoT Monitoring Active</p>
</div>
<span style={{ marginLeft: "auto", color: "white", fontSize: 20 }}>...</span>
</div>
</div>

{/* Messages */}
<div style={{ padding: "12px 14px", backgroundColor: "#e8f5e1", minHeight: 500 }}>

{/* Normal alert */}
<div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 14 }}>
<div style={{
maxWidth: "85%", backgroundColor: "white",
borderRadius: "4px 12px 12px 12px",
padding: "10px 12px",
boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
}}>
<p style={{ color: "#08F071", fontSize: 10, fontWeight: 800, margin: "0 0 4px" }}>
SENSOR UPDATE - COOP A
</p>
<p style={{ color: "#1a1a1a", fontSize: 12, margin: 0, lineHeight: 1.65 }}>
Good morning Adamu! Your Coop A sensors are showing normal readings.{"\n\n"}
Temperature: 32C{"\n"}
Humidity: 65%{"\n"}
Status: Normal
</p>
<p style={{ color: "rgba(0,0,0,0.3)", fontSize: 9, textAlign: "right", margin: "4px 0 0" }}>
6:00 AM done
</p>
</div>
</div>

{/* Critical alert */}
<div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 14 }}>
<div style={{
maxWidth: "85%", backgroundColor: "white",
borderRadius: "4px 12px 12px 12px",
padding: "10px 12px",
boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
border: "1px solid rgba(244,63,63,0.3)",
}}>
<p style={{ color: "#F43F3F", fontSize: 10, fontWeight: 800, margin: "0 0 4px" }}>
HIGH TEMPERATURE ALERT - COOP B
</p>
<p style={{ color: "#1a1a1a", fontSize: 12, margin: 0, lineHeight: 1.65 }}>
URGENT: High temperature detected in Coop B!{"\n\n"}
Temperature: 38C (CRITICAL){"\n"}
Humidity: 80% (HIGH){"\n\n"}
Please take action immediately:{"\n"}
1. Open coop windows{"\n"}
2. Turn on fans{"\n"}
3. Check water supply
</p>
<div style={{ display: "flex", gap: 8, marginTop: 10 }}>
<button style={{
flex: 1, padding: "8px 0",
backgroundColor: "#F43F3F", color: "white",
border: "none", borderRadius: 6,
fontSize: 11, fontWeight: 700, cursor: "pointer",
}}>Call Vet</button>
<button style={{
flex: 1, padding: "8px 0",
backgroundColor: "#295F2D", color: "white",
border: "none", borderRadius: 6,
fontSize: 11, fontWeight: 700, cursor: "pointer",
}}>View Dashboard</button>
</div>
<p style={{ color: "rgba(0,0,0,0.3)", fontSize: 9, textAlign: "right", margin: "6px 0 0" }}>
9:30 AM done
</p>
</div>
</div>

{/* Farmer reply */}
<div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
<div style={{
maxWidth: "78%", backgroundColor: "#367D3B",
borderRadius: "12px 4px 12px 12px",
padding: "10px 12px",
}}>
<p style={{ color: "white", fontSize: 12, margin: 0 }}>
I have opened the windows
</p>
<p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, textAlign: "right", margin: "4px 0 0" }}>
9:35 AM done
</p>
</div>
</div>

{/* Follow up */}
<div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 14 }}>
<div style={{
maxWidth: "85%", backgroundColor: "white",
borderRadius: "4px 12px 12px 12px",
padding: "10px 12px",
boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
}}>
<p style={{ color: "#08F071", fontSize: 10, fontWeight: 800, margin: "0 0 4px" }}>
TEMPERATURE DROPPING - COOP B
</p>
<p style={{ color: "#1a1a1a", fontSize: 12, margin: 0, lineHeight: 1.65 }}>
Good work! Temperature is now dropping.{"\n\n"}
Temperature: 35C (improving){"\n"}
Humidity: 72%{"\n\n"}
Keep monitoring for the next 30 minutes.
</p>
<p style={{ color: "rgba(0,0,0,0.3)", fontSize: 9, textAlign: "right", margin: "4px 0 0" }}>
9:45 AM done
</p>
</div>
</div>

</div>

{/* Input */}
<div style={{
backgroundColor: "white", padding: "10px 14px",
display: "flex", alignItems: "center", gap: 8,
borderTop: "1px solid #ddd",
}}>
<input placeholder="Type a message..." style={{
flex: 1, border: "none", outline: "none",
fontSize: 13, color: "#333",
}} />
<button style={{
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

export default WhatsAppAlert;
