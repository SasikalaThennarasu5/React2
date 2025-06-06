import React, { useState } from 'react';

const Task7 = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 7: Radio Button Group</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={selectedGender === 'Male'}
          onChange={handleChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={selectedGender === 'Female'}
          onChange={handleChange}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={selectedGender === 'Other'}
          onChange={handleChange}
        />
        Other
      </label>

      {selectedGender && (
        <p><strong>Selected Gender:</strong> {selectedGender}</p>
      )}
    </div>
  );
};

export default Task7;
