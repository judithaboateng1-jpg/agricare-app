import { useState } from "react";

function FeedbackScreen() {
const [rating, setRating] = useState(0);
const [comment, setComment] = useState("");
const [submitted, setSubmitted] = useState(false);

if (submitted) {
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
padding: "60px 24px",
textAlign: "center",
}}>
<div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
<h2 style={{ color: "white", fontSize: 22, fontWeight: 800, margin: "0 0 10px" }}>
Thank You!
</h2>
<p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>
Your feedback has been submitted successfully. We will use it to improve Agricare.
</p>
</div>
</div>
);
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

{/* Header */}
<div style={{ padding: "16px 22px 0", display: "flex", alignItems: "center", gap: 8 }}>
<span style={{ color: "white", fontSize: 22 }}>‹</span>
<span style={{ color: "white", fontSize: 13, fontWeight: 600 }}>
Give Feedback
</span>
</div>

{/* Content */}
<div style={{ padding: "20px 24px 44px" }}>

{/* Icon */}
<div style={{ textAlign: "center", marginBottom: 20 }}>
<div style={{ fontSize: 50 }}>🌿</div>
<p style={{ color: "white", fontSize: 16, fontWeight: 700, margin: "10px 0 4px" }}>
How was your experience?
</p>
<p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
Rate your experience with Agricare
</p>
</div>

{/* Star Rating */}
<div style={{
display: "flex",
justifyContent: "center",
gap: 12,
marginBottom: 28,
}}>
{[1, 2, 3, 4, 5].map(star => (
<span
key={star}
onClick={() => setRating(star)}
style={{
fontSize: 40,
cursor: "pointer",
opacity: star <= rating ? 1 : 0.3,
transition: "opacity 0.15s",
}}
>
⭐
</span>
))}
</div>

{/* Rating label */}
{rating > 0 && (
<p style={{
color: "#08F071",
fontSize: 13,
textAlign: "center",
margin: "0 0 20px",
fontWeight: 600,
}}>
{rating === 1 ? "Poor 😞" :
rating === 2 ? "Fair 😐" :
rating === 3 ? "Good 🙂" :
rating === 4 ? "Very Good 😊" :
"Excellent! 🎉"}
</p>
)}

{/* Comment box */}
<div style={{ marginBottom: 20 }}>
<p style={{ color: "white", fontSize: 13, fontWeight: 600, margin: "0 0 8px" }}>
Leave a comment (optional)
</p>
<textarea
placeholder="Tell us what you think about Agricare..."
value={comment}
onChange={e => setComment(e.target.value)}
rows={4}
style={{
width: "100%",
backgroundColor: "rgba(255,255,255,0.09)",
border: "1px solid rgba(255,255,255,0.2)",
borderRadius: 10,
padding: "12px 14px",
color: "white",
fontSize: 13,
fontFamily: "Inter, sans-serif",
outline: "none",
resize: "none",
boxSizing: "border-box",
}}
/>
</div>

{/* Submit Button */}
<button
onClick={() => rating > 0 && setSubmitted(true)}
style={{
width: "100%",
padding: "15px 0",
borderRadius: 10,
backgroundColor: rating > 0 ? "white" : "rgba(255,255,255,0.3)",
color: "#295F2D",
fontWeight: 700,
fontSize: 15,
border: "none",
cursor: rating > 0 ? "pointer" : "not-allowed",
}}>
Submit Feedback
</button>

{rating === 0 && (
<p style={{
color: "rgba(255,255,255,0.5)",
fontSize: 11,
textAlign: "center",
marginTop: 8,
}}>
Please select a star rating first
</p>
)}

</div>

{/* Bottom Nav */}
<div style={{
display: "flex", justifyContent: "space-around",
padding: "10px 0 20px",
borderTop: "1px solid rgba(255,255,255,0.1)",
}}>
{["🏠", "❓", "👤", "🔔", "⚙️"].map((icon, i) => (
<span key={i} style={{
fontSize: 18, opacity: i === 0 ? 1 : 0.4, cursor: "pointer",
}}>{icon}</span>
))}
</div>

</div>
</div>
);
}

export default FeedbackScreen;
