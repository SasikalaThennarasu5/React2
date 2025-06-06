import React, { useState } from 'react';

const Task8 = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Data:\nUsername: ${formData.username}\nAge: ${formData.age}`);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 8: Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task8;
