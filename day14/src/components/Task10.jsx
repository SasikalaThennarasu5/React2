import React, { useState } from 'react';

const Task10 = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError('Input cannot be empty!');
    } else {
      setError('');
      alert(`Submitted: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 10: Validation Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Task10;
