import React, { useState } from 'react';

const Task2 = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 2: Basic Controlled Input</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default Task2;
