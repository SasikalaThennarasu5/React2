import React, { useState } from 'react';

const Task12 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 12: Reset Form Fields</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <strong>Current Values:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Task12;
