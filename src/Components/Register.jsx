import { useState } from "react"

export const Register = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [apttime, setApttime] = useState("")
  const [patients, setPatients] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const add = (e) => {
    e.preventDefault();
    if (!name || !age || !phone || !apttime) return
    if (editIndex !== null) {
      const updated = [...patients];
      updated[editIndex] = { name, age, phone, apttime }
      setPatients(updated)
      setEditIndex(null)
    } else {
      setPatients([...patients, { name, age, phone, apttime }])
    }
    setName("")
    setAge("")
    setPhone("")
    setApttime("")
  }

  const deldata = (index) => {
    setPatients(patients.filter((_, i) => i !== index))
  }

  const updatedata = (index) => {
    const pat = patients[index]
    setName(pat.name)
    setAge(pat.age)
    setPhone(pat.phone)
    setApttime(pat.apttime)
    setEditIndex(index)
  }
  return (
    <div style={{  minHeight: "100vh",  backgroundColor: "#f3f4f6",  padding: "40px 20px", }}>
      <div style={{maxWidth: "900px", margin: "auto", backgroundColor: "#fff", padding: "30px", borderRadius: "10px",boxShadow: "0 4px 12px rgba(0,0,0,0.1)", }}>
        <h2 style={{ textAlign: "center", color: "#1e3a8a" }}> Patient Registration </h2>
        <img src="https://img.freepik.com/free-vector/patient-taking-medical-examination-illustrated_23-2148850285.jpg" style={{ display: "block", margin: "20px auto", maxWidth: "350px",}}/>
        <form onSubmit={add} style={{ marginTop: "20px" }}>
          <div style={{ display: "grid", gap: "15px" }}>
            <input placeholder="Patient Name" value={name}onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
              <input type="number"placeholder="Phone Number"value={phone}onChange={(e) => setPhone(e.target.value)} /> 
              <input type="datetime-local" value={apttime} onChange={(e) => setApttime(e.target.value)}/>
            <button type="submit" style={{  padding: "10px", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "5px",cursor: "pointer",}}>
              {editIndex !== null ? "Update Patient" : "Register Patient"}
            </button>
          </div>
        </form>

        {patients.length > 0 && (
          <table
            style={{
              width: "100%",
              marginTop: "30px",
              borderCollapse: "collapse",
            }}
          >
            <thead style={{ backgroundColor: "#e5e7eb" }}>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Appointment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((pat, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{pat.name}</td>
                  <td>{pat.age}</td>
                  <td>{pat.phone}</td>
                  <td>{pat.apttime}</td>
                  <td>
                    <button onClick={() => updatedata(index)}>Edit</button>{" "}
                    <button onClick={() => deldata(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
