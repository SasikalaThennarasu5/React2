import React, { useState } from 'react';

const Task6 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 6: Checkbox Input</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Accept Terms and Conditions
      </label>
      <p><strong>Status:</strong> {isChecked ? 'Checked' : 'Unchecked'}</p>
    </div>
  );
};

export default Task6;
