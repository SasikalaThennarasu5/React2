import React, { useState } from 'react';

const Project4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreed: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.agreed) newErrors.agreed = 'You must agree to terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Thank you for subscribing, ${formData.name}!`);
      setFormData({ name: '', email: '', agreed: false });
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Mini Project 4: Subscription Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '5px' }}
          />
          {errors.name && <p style={{ color: 'red', margin: 0 }}>{errors.name}</p>}
        </div>
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
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />{' '}
            I agree to the terms and conditions
          </label>
          {errors.agreed && <p style={{ color: 'red', margin: 0 }}>{errors.agreed}</p>}
        </div>
        <button type="submit" disabled={!formData.agreed}>Subscribe</button>
      </form>
    </div>
  );
};

export default Project4;
