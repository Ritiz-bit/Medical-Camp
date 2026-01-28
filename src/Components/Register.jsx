import { useState } from "react"

export const Register = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [apttime, setApttime] = useState("")
  const [patients, setPatients] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const add = (e) => {
    e.preventDefault()
    if (!name || !age || !phone || !apttime) return
    if (editIndex !== null) {
      const updatedPatients = [...patients]
      updatedPatients[editIndex] = { name, age, phone, apttime }
      setPatients(updatedPatients)
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
    <div>
      <center>
        <h3>Register</h3>
         <img src="https://img.freepik.com/free-vector/patient-taking-medical-examination-illustrated_23-2148850285.jpg?t=st=1769574469~exp=1769578069~hmac=58939034b3451c5d61c75ee3701b71ad6279c0fa2aec11a83561be8f62a9beac" height={200} width={350}/>
        <form onSubmit={add}>
          <table style={{backgroundColor:"beige" ,margin:'30'}}>
            <tbody>
              <tr>
                <td>
                  Name:
                  <input value={name} onChange={e => setName(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  Age:
                  <input type="number" value={age} onChange={e => setAge(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  Phone:
                  <input type="number" value={phone} onChange={e => setPhone(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  Appointment Time:
                  <input type="datetime-local" value={apttime} onChange={e => setApttime(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">
                    {editIndex !== null ? "Update" : "Submit"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <table border="1">
          <thead>
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
              <tr key={index}>
                <td>{pat.name}</td>
                <td>{pat.age}</td>
                <td>{pat.phone}</td>
                <td>{pat.apttime}</td>
                <td>
                  <button onClick={() => updatedata(index)}>Update</button>
                  <button onClick={() => deldata(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  )
}
