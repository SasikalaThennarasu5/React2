import React, { useState } from 'react';

const Task5 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 5: Select Dropdown</h2>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">-- Select a fruit --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Mango">Mango</option>
      </select>

      {selectedOption && (
        <p><strong>Selected:</strong> {selectedOption}</p>
      )}
    </div>
  );
};

export default Task5;
