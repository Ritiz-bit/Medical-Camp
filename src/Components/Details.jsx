import { useState } from "react"
export const Details = () => {
  const [role, setRole] = useState("user"); // DEFAULT USER
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState({ id: "", password: "" });
  const [camps, setCamps] = useState([
    {
      name: "Free Eye Checkup Camp",
      location: "Madurai",
      date: "2026-02-02",
      contact: "9876543210",
    },
    {
      name: "General Health Camp",
      location: "Tirunelveli",
      date: "2026-02-05",
      contact: "9123456780",
    },
  ])
  const [newCamp, setNewCamp] = useState({
    name: "",
    location: "",
    date: "",
    contact: "",
  })
  const [editIndex, setEditIndex] = useState(null)
  const handleLogin = (e) => {
    e.preventDefault();
    if (login.id === "admin" && login.password === "admin123") {
      setRole("admin");
      setShowLogin(false);
    } else {
      alert("Invalid Admin Credentials");
    }
  }
  const handleChange = (e) => {
    setNewCamp({ ...newCamp, [e.target.name]: e.target.value });
  }
  const addOrUpdateCamp = (e) => {
    e.preventDefault();
    if (!newCamp.name || !newCamp.location || !newCamp.date || !newCamp.contact)
      return;
    if (editIndex !== null) {
      const updated = [...camps];
      updated[editIndex] = newCamp;
      setCamps(updated);
      setEditIndex(null);
    } else {
      setCamps([...camps, newCamp]);
    }
    setNewCamp({ name: "", location: "", date: "", contact: "" });
  }
  const handleEdit = (index) => {
    setNewCamp(camps[index]);
    setEditIndex(index);
  }
  const handleDelete = (index) => {
    setCamps(camps.filter((_, i) => i !== index));
  }
  if (showLogin) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <form onSubmit={handleLogin}style={{ background: "#fff", padding: 30, borderRadius: 10 }}>
          <h3>Admin Login</h3>
          <input placeholder="Admin ID"value={login.id}onChange={(e) => setLogin({ ...login, id: e.target.value })}/><br /><br />
          <input type="password"placeholder="Password"value={login.password}onChange={(e) => setLogin({ ...login, password: e.target.value })}/><br /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <center><h2>Nearby Medical Camps</h2></center> 
        {role === "user" && (
          <button onClick={() => setShowLogin(true)}>Admin Login</button>
        )}
        {role === "admin" && (
          <button onClick={() => setRole("user")}>Logout</button>
        )}
      </div>
      <div style={{display: "grid",gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",gap: 20,}}>
        {camps.map((camp, index) => (
          <div key={index} style={{ background: "#fff", padding: 20, borderRadius: 10 }}>
            <h4>{camp.name}</h4>
            <p><b>Location:</b> {camp.location}</p>
            <p><b>Date:</b> {camp.date}</p>
            <p><b>Contact:</b> {camp.contact}</p>
            {role === "admin" && (
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {role === "admin" && (
        <div style={{ marginTop: 40 }}>
          <h3>{editIndex !== null ? "Edit Camp" : "Add Camp"}</h3>
          <form onSubmit={addOrUpdateCamp} style={{ display: "grid", gap: 10, maxWidth: 400 }}>
            <input name="name" placeholder="Camp Name" value={newCamp.name} onChange={handleChange} />
            <input name="location" placeholder="Location" value={newCamp.location} onChange={handleChange} />
            <input type="date" name="date" value={newCamp.date} onChange={handleChange} />
            <input name="contact" placeholder="Contact" value={newCamp.contact} onChange={handleChange} />
            <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
          </form>
        </div>
      )}
    </div>
  )
}