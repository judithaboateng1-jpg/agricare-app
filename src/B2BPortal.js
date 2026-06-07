import { useState } from "react";

function B2BPortal() {
const [activeTab, setActiveTab] = useState("overview");

const partners = [
{ name: "AgroVet Nigeria", type: "Veterinary Chain", farmers: 1200, status: "Active" },
{ name: "FarmFirst Co.", type: "Feed Supplier", farmers: 850, status: "Active" },
{ name: "PoultryPro Ltd", type: "Equipment", farmers: 620, status: "Pending" },
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
B2B Partner Portal
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: "2px 0 0" }}>
Manage your business partnerships
</p>
</div>

<div style={{ display: "flex", padding: "0 22px 14px" }}>
{["overview", "partners", "reports"].map(tab => (
<button key={tab} onClick={() => setActiveTab(tab)} style={{
flex: 1, padding: "8px 0",
backgroundColor: activeTab === tab ? "white" : "transparent",
color: activeTab === tab ? "#295F2D" : "rgba(255,255,255,0.6)",
border: "1px solid rgba(255,255,255,0.3)",
cursor: "pointer", fontSize: 11, fontWeight: 700,
textTransform: "capitalize",
}}>{tab}</button>
))}
</div>

{activeTab === "overview" && (
<div style={{ padding: "0 20px 20px" }}>
<div style={{
display: "grid", gridTemplateColumns: "1fr 1fr",
gap: 10, marginBottom: 16,
}}>
{[
{ label: "Total Partners", value: "12" },
{ label: "Farmers Covered", value: "4,200" },
{ label: "Active Deals", value: "8" },
{ label: "Monthly Revenue", value: "N850K" },
].map((s, i) => (
<div key={i} style={{
backgroundColor: "rgba(255,255,255,0.1)",
borderRadius: 12, padding: "14px",
}}>
<p style={{ color: "white", fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>
{s.value}
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, margin: 0 }}>
{s.label}
</p>
</div>
))}
</div>
<button style={{
width: "100%", padding: "14px 0", borderRadius: 10,
backgroundColor: "white", color: "#295F2D",
fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
}}>
Add New Partner
</button>
</div>
)}

{activeTab === "partners" && (
<div style={{ padding: "0 20px 20px" }}>
{partners.map((p, i) => (
<div key={i} style={{
backgroundColor: "rgba(255,255,255,0.08)",
borderRadius: 12, padding: "14px",
marginBottom: 10,
border: "1px solid rgba(255,255,255,0.15)",
}}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<p style={{ color: "white", fontSize: 13, fontWeight: 700, margin: "0 0 2px" }}>
{p.name}
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, margin: "0 0 4px" }}>
{p.type}
</p>
<p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, margin: 0 }}>
{p.farmers.toLocaleString()} farmers
</p>
</div>
<span style={{
backgroundColor: p.status === "Active" ? "#08F071" : "#f59e0b",
color: "#0f172a",
fontSize: 9, fontWeight: 800,
padding: "4px 10px", borderRadius: 10,
}}>{p.status}</span>
</div>
</div>
))}
<button style={{
width: "100%", padding: "14px 0", borderRadius: 10,
backgroundColor: "white", color: "#295F2D",
fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
}}>
Invite Partner
</button>
</div>
)}

{activeTab === "reports" && (
<div style={{ padding: "0 20px 20px" }}>
{[
{ title: "Q1 Impact Report", date: "March 2026", size: "2.4 MB" },
{ title: "Partner Performance", date: "April 2026", size: "1.8 MB" },
{ title: "Revenue Summary", date: "May 2026", size: "1.2 MB" },
].map((r, i) => (
<div key={i} style={{
backgroundColor: "rgba(255,255,255,0.08)",
borderRadius: 12, padding: "14px",
marginBottom: 10,
display: "flex", justifyContent: "space-between", alignItems: "center",
border: "1px solid rgba(255,255,255,0.15)",
}}>
<div>
<p style={{ color: "white", fontSize: 12, fontWeight: 700, margin: "0 0 2px" }}>
{r.title}
</p>
<p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, margin: 0 }}>
{r.date} - {r.size}
</p>
</div>
<button style={{
backgroundColor: "#08F071", color: "#0f172a",
border: "none", borderRadius: 8,
padding: "6px 12px", fontSize: 10,
fontWeight: 700, cursor: "pointer",
}}>Download</button>
</div>
))}
</div>
)}

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

export default B2BPortal;
