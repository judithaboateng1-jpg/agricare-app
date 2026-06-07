function IoTDashboard() {
const sensors = [
{ id: "SENSOR-001", location: "Coop A", temp: 32, humidity: 65, status: "Normal" },
{ id: "SENSOR-002", location: "Coop B", temp: 38, humidity: 80, status: "Critical" },
{ id: "SENSOR-003", location: "Coop C", temp: 29, humidity: 55, status: "Normal" },
];

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
<span style={{ color: "white", fontSize: 14 }}>back</span>
</div>
<div style={{ padding: "4px 22px 14px" }}>
<p style={{ color: "white", fontSize: 16, fontWeight: 800, margin: 0 }}>
IoT Sensor Dashboard
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: "2px 0 0" }}>
Real-time farm monitoring
</p>
</div>
<div style={{
display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
gap: 8, padding: "0 20px 14px",
}}>
{[
{ label: "Total Sensors", value: "3" },
{ label: "Online", value: "3" },
{ label: "Alerts", value: "1" },
].map((s, i) => (
<div key={i} style={{
backgroundColor: "rgba(255,255,255,0.1)",
borderRadius: 10, padding: "12px 10px",
textAlign: "center",
}}>
<p style={{ color: "white", fontSize: 22, fontWeight: 800, margin: "0 0 2px" }}>
{s.value}
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 9, margin: 0 }}>
{s.label}
</p>
</div>
))}
</div>
<div style={{ padding: "0 20px 14px" }}>
<p style={{ color: "white", fontSize: 13, fontWeight: 700, margin: "0 0 10px" }}>
Live Sensor Data
</p>
{sensors.map((s, i) => (
<div key={i} style={{
backgroundColor: "rgba(255,255,255,0.08)",
borderRadius: 12, padding: "14px", marginBottom: 10,
border: s.status === "Critical"
? "1px solid rgba(244,63,63,0.4)"
: "1px solid rgba(255,255,255,0.15)",
}}>
<div style={{
display: "flex", justifyContent: "space-between",
alignItems: "center", marginBottom: 10,
}}>
<div>
<p style={{ color: "white", fontSize: 12, fontWeight: 700, margin: 0 }}>
{s.location}
</p>
<p style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, margin: 0 }}>
{s.id}
</p>
</div>
<span style={{
backgroundColor: s.status === "Critical" ? "#F43F3F" : "#08F071",
color: "#0f172a", fontSize: 9, fontWeight: 800,
padding: "3px 10px", borderRadius: 10,
}}>{s.status}</span>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
<div style={{
backgroundColor: "rgba(255,255,255,0.08)",
borderRadius: 8, padding: "10px", textAlign: "center",
}}>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 9, margin: "0 0 4px" }}>
Temperature
</p>
<p style={{
color: s.temp > 35 ? "#F43F3F" : "#08F071",
fontSize: 20, fontWeight: 800, margin: 0,
}}>
{s.temp} C
</p>
</div>
<div style={{
backgroundColor: "rgba(255,255,255,0.08)",
borderRadius: 8, padding: "10px", textAlign: "center",
}}>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 9, margin: "0 0 4px" }}>
Humidity
</p>
<p style={{
color: s.humidity > 75 ? "#F43F3F" : "#08F071",
fontSize: 20, fontWeight: 800, margin: 0,
}}>
{s.humidity}%
</p>
</div>
</div>
</div>
))}
</div>
<div style={{ padding: "0 20px 20px" }}>
<p style={{ color: "white", fontSize: 13, fontWeight: 700, margin: "0 0 10px" }}>
Temperature Trend (24hrs)
</p>
<div style={{
backgroundColor: "rgba(255,255,255,0.08)",
borderRadius: 12, padding: "14px",
}}>
<div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 70 }}>
{[28, 30, 32, 35, 38, 36, 34, 32, 30, 29, 31, 33].map((h, i) => (
<div key={i} style={{
flex: 1, display: "flex",
flexDirection: "column", alignItems: "center", gap: 3,
}}>
<div style={{
width: "100%",
height: `${((h - 25) / 15) * 100}%`,
backgroundColor: h > 35 ? "#F43F3F" : "#08F071",
borderRadius: "3px 3px 0 0",
}} />
<span style={{ color: "rgba(255,255,255,0.4)", fontSize: 7 }}>
{i * 2}h
</span>
</div>
))}
</div>
</div>
</div>
<div style={{
display: "flex", justifyContent: "space-around",
padding: "10px 0 20px",
borderTop: "1px solid rgba(255,255,255,0.1)",
}}>
{["Home", "Help", "Profile", "Alerts", "Settings"].map((t, i) => (
<span key={i} style={{
fontSize: 10, color: "white",
opacity: i === 0 ? 1 : 0.4, cursor: "pointer",
}}>{t}</span>
))}
</div>
</div>
</div>
);
}

export default IoTDashboard;

