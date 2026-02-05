export const Contact = () => {
  return (
    <div style={{padding: "40px 20px", backgroundColor: "#f9fafb",minHeight: "100vh",}}>
      <div
        style={{maxWidth: "800px",margin: "auto",backgroundColor: "#ffffff",padding: "30px",borderRadius: "10px",boxShadow: "0 4px 12px rgba(0,0,0,0.1)",textAlign: "center",}}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>Contact Us </h2>
        <p style={{ color: "#4b5563", marginBottom: "30px" }}>
           We are here to assist you. Feel free to reach out to us using theinformation below.
        </p>
        <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&auto=format&fit=crop&q=60" style={{width: "100%",maxWidth: "350px",marginBottom: "30px",borderRadius: "8px",}}/>
        <div style={{display: "grid",gap: "20px",textAlign: "left",}}>
          <p>
            <strong>Office Address</strong><br />
            123, Sample Street,<br />
            PSR College,<br />
            Tamil Nadu, India
          </p>
          <p><strong>Email</strong><br />support@example.com</p>
          <p><strong>Phone</strong><br />+91 98765 43210</p>
          <p><strong>Website</strong><br />www.example.com</p>
        </div>
        <p
          style={{
            marginTop: "30px",
            fontSize: "14px",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          © 2026 Medical Camp. All rights reserved.
        </p>
      </div>
    </div>
  )
}
