export const About = () => {
  return (
    <div style={{padding: "40px 20px",textAlign: "center",backgroundColor: "#f9fafb",}}>
      <h2 style={{color: "#1e3a8a",marginBottom: "20px",fontSize: "28px"}}>About Our Medical Camp</h2>
      <p style={{maxWidth: "750px",margin: "0 auto 30px",fontSize: "16px",lineHeight: "1.6",color: "#374151"}}>
        Our medical camps are organized by dedicated healthcare professionals
        with the goal of delivering essential medical services to
        underprivileged communities. We focus on providing free health
        check-ups, basic treatments, and health awareness programs to promote
        a healthier society.
      </p>
      <img src="https://plus.unsplash.com/premium_photo-1722945737349-aceb8e0adb01?w=500&auto=format&fit=crop&q=60" style={{width: "100%",maxWidth: "700px",borderRadius: "8px",boxShadow: "0 4px 12px rgba(0,0,0,0.1)", }}/>
      <div
        style={{ marginTop: "40px",padding: "25px",maxWidth: "700px",marginInline: "auto",backgroundColor: "#ffffff",borderRadius: "8px",boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "10px", color: "#111827" }}>Our Objective</h3>
        <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
           To ensure accessible and affordable healthcare for all by conducting regular medical camps with qualified doctors, nurses, and trained volunteers.
        </p>
      </div>
    </div>
  )
}
