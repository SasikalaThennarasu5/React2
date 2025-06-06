import React, { useState } from 'react';

const Project1 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Logged in with Email: ${formData.email}`);
      // Clear form
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Mini Project 1: Login Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '5px' }}
          />
          {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '5px' }}
          />
          {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Project1;
