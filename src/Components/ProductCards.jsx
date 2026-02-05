import React, { useState } from "react";
import "./ProductCards.css";
import axios from "axios";

const ProductCards = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields required");
      return;
    }

    axios.post("http://localhost:8080/signup", formData)
      .then(() => {
        alert("Signup successful");
        setFormData({ name: "", email: "", password: "" });
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <form className="product-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>
    </>
  );
};

export default ProductCards;
