function ImpactDashboard() {
const stats = [
{ label: "Farmers Reached", value: "12,450", icon: "F", color: "#295F2D" },
{ label: "Cases Resolved", value: "8,320", icon: "C", color: "#08F071" },
{ label: "Active Vets", value: "47", icon: "V", color: "#429949" },
{ label: "Revenue Generated", value: "N2.4M", icon: "R", color: "#F43F3F" },
];

const regions = [
{ name: "Lagos", farmers: 3200, color: "#295F2D" },
{ name: "Abuja", farmers: 2100, color: "#367D3B" },
{ name: "Kano", farmers: 1800, color: "#429949" },
{ name: "Enugu", farmers: 1500, color: "#A6C78E" },
{ name: "Others", farmers: 3850, color: "#BCD5AA" },
];

const total = regions.reduce((a, b) => a + b.farmers, 0);

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
<span style={{ color: "white", fontSize: 14, cursor: "pointer" }}>back</span>
</div>
<div style={{ padding: "4px 22px 14px" }}>
<p style={{ color: "white", fontSize: 16, fontWeight: 800, margin: 0 }}>
Impact Dashboard
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: "2px 0 0" }}>
AGRICARE internal metrics
</p>
</div>

<div style={{
display: "grid", gridTemplateColumns: "1fr 1fr",
gap: 10, padding: "0 20px 14px",
}}>
{stats.map((s, i) => (
<div key={i} style={{
backgroundColor: "rgba(255,255,255,0.1)",
borderRadius: 12, padding: "14px",
border: "1px solid rgba(255,255,255,0.15)",
}}>
<div style={{
width: 32, height: 32, borderRadius: "50%",
backgroundColor: s.color,
display: "flex", alignItems: "center",
justifyContent: "center",
color: "white", fontWeight: 800,
fontSize: 12, marginBottom: 8,
}}>{s.icon}</div>
<p style={{
color: "white", fontSize: 20,
fontWeight: 800, margin: "0 0 4px",
}}>{s.value}</p>
<p style={{
color: "rgba(255,255,255,0.6)",
fontSize: 10, margin: 0,
}}>{s.label}</p>
</div>
))}
</div>

<div style={{ padding: "0 20px 20px" }}>
<p style={{
color: "white", fontSize: 13,
fontWeight: 700, margin: "0 0 12px",
}}>Farmers by Region</p>

{regions.map((r, i) => (
<div key={i} style={{ marginBottom: 10 }}>
<div style={{
display: "flex", justifyContent: "space-between",
marginBottom: 4,
}}>
<span style={{ color: "white", fontSize: 11 }}>{r.name}</span>
<span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
{r.farmers.toLocaleString()}
</span>
</div>
<div style={{
width: "100%", height: 8,
backgroundColor: "rgba(255,255,255,0.1)",
borderRadius: 4,
}}>
<div style={{
width: `${(r.farmers / total) * 100}%`,
height: "100%",
backgroundColor: r.color,
borderRadius: 4,
}} />
</div>
</div>
))}
</div>

<div style={{ padding: "0 20px 20px" }}>
<p style={{
color: "white", fontSize: 13,
fontWeight: 700, margin: "0 0 12px",
}}>Monthly Growth</p>

<div style={{
display: "flex", alignItems: "flex-end",
gap: 8, height: 80,
}}>
{[40, 55, 45, 70, 65, 90, 85].map((h, i) => (
<div key={i} style={{
flex: 1, display: "flex",
flexDirection: "column", alignItems: "center", gap: 4,
}}>
<div style={{
width: "100%",
height: `${h}%`,
backgroundColor: i === 6 ? "#08F071" : "rgba(255,255,255,0.3)",
borderRadius: "4px 4px 0 0",
}} />
<span style={{ color: "rgba(255,255,255,0.5)", fontSize: 8 }}>
{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
</span>
</div>
))}
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

export default ImpactDashboard;
