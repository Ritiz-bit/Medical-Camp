import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

export const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const submit = () => {
    axios.post("http://localhost:8080/login", {
      email: email,
      password: password
    })
    .then(res => {
     
      setUser(res.data);      
      navigate("/home"); 
    })
    .catch(err => {
      setStatus("Invalid email or password");
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
       <Link to={'/Home'}>
      <button onClick={submit}>Login</button></Link>
      <div>{status}</div>
    </>
  );
};
