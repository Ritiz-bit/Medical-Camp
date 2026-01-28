export const Home = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{color:'blue'}}></h1>
      <h4>Your Health, Our Priority</h4>

      <img
        src="https://img.freepik.com/free-photo/mother-daughter-talking-african-american-doctor-while-wearing-face-masks-hospital-waiting-room_637285-11238.jpg?t=st=1769573417~exp=1769577017~hmac=452273a31769035d256412aed324112998a2ff5845b52a1d22e3d2f21f84268d"
        alt="Medical Camp"
        style={{ width: "360px", margin: "20px " }}
      />

      <p style={{  margin: "auto", fontSize: "16px" }}>
        We are organizing a <strong>free medical camp</strong> to provide basic
        health checkups, consultations, and awareness for the community.
        Qualified doctors and medical staff will be available.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
        }}
      >
        <h3>Camp Details</h3>
        <p><strong>Date:</strong> 30th Jan 2026</p>
        <p><strong>Time:</strong> 9:00 AM – 4:00 PM</p>
        <p><strong>Location:</strong> PSR Enginnering College</p>
      </div>

      

    </div>
  )
}
