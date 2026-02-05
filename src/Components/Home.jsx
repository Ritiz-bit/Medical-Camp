export const Home = () => {
  return (
    <div
      style={{padding: "40px 20px",backgroundColor: "#f3f4f6",minHeight: "100vh",}}>
      <div style={{ maxWidth: "900px",margin: "auto",backgroundColor: "#ffffff",padding: "30px",borderRadius: "10px",boxShadow: "0 4px 12px rgba(0,0,0,0.1)",textAlign: "center",}}>
        <h1 style={{ color: "#1e3a8a", marginBottom: "5px" }}>Free Medical Camp</h1>
        <h4 style={{ color: "#374151", marginBottom: "20px" }}>Your Health, Our Priority</h4>

        <img
          src="https://azbigmedia.com/wp-content/uploads/2023/11/Free-Medical-Camp.jpg"
          alt="Medical Camp"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", margin: "20px 0", }}/>
        <p
          style={{ maxWidth: "700px", margin: "20px auto", fontSize: "16px", lineHeight: "1.6",color: "#4b5563", }} >
          We are organizing a <strong>free medical camp</strong> to provide
          essential health check-ups, medical consultations, and health
          awareness programs for the community. Qualified doctors and trained
          medical staff will be available throughout the camp.
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#111827", marginBottom: "15px" }}>
            Camp Details
          </h3>

          <p><strong>Date:</strong> 30th January 2026</p>
          <p><strong>Time:</strong> 9:00 AM – 4:00 PM</p>
          <p><strong>Location:</strong> PSR Engineering College</p>
        </div>
      </div>
    </div>
  );
};
