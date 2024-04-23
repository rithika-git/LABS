
import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
