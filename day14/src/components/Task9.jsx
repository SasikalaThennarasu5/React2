import React, { useState } from 'react';

const Task9 = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Form submitted with: ${text}`);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 9: Prevent Default Behavior</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task9;
