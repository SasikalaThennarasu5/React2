import React, { useState } from 'react';

const Project3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Thank you, ${formData.name}! Your message has been received.`);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Mini Project 3: Contact Form</h2>
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
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '5px', width: '100%', height: '100px' }}
          />
          {errors.message && <p style={{ color: 'red', margin: 0 }}>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Project3;
