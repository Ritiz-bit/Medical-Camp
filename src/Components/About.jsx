export const About = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

      <h2 style={{ color: "blue" }}>About Our Medical Camp</h2>

      <p style={{ margin: "20px ", fontSize: "16px" }}>
        Medical camps are organized by dedicated health professionals to provide
        essential healthcare services to underprivileged communities.
        Our mission is to offer free health check-ups, basic treatments, and
        health awareness programs to improve the overall well-being of society.
      </p>

      <img
        src="https://plus.unsplash.com/premium_photo-1722945737349-aceb8e0adb01?w=500&auto=format&fit=crop&q=60"
        alt="Medical Camp"
        style={{
          width: "700px",
          marginTop: "20px"
        }}
      />

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          
        }}
      >
        <h3>Our Objective</h3>
        <p>
          To ensure accessible and affordable healthcare for everyone by
          conducting regular medical camps with qualified doctors, nurses,
          and volunteers.
        </p>
      </div>

    </div>
  );
};
