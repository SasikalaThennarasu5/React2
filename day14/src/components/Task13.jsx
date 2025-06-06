import React, { useState, useEffect, useRef } from 'react';

const Task13 = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 13: Form with useEffect</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Auto-focused input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p><strong>Input value:</strong> {inputValue}</p>
    </div>
  );
};

export default Task13;
