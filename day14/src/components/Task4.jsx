import React, { useState } from 'react';

const Task4 = () => {
  const [message, setMessage] = useState('');

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 4: Textarea Input</h2>
      <textarea
        rows="5"
        cols="40"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p><strong>Typed Message:</strong> {message}</p>
    </div>
  );
};

export default Task4;
