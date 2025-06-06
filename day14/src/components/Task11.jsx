import React, { useState } from 'react';

const Task11 = () => {
  const [fields, setFields] = useState(['']);

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, '']);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 11: Dynamic Form Fields</h2>
      {fields.map((field, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Field ${index + 1}`}
          value={field}
          onChange={(e) => handleChange(index, e.target.value)}
          style={{ display: 'block', marginBottom: '10px' }}
        />
      ))}
      <button onClick={addField}>Add Field</button>
      <div style={{ marginTop: '10px' }}>
        <strong>Values:</strong>
        <ul>
          {fields.map((field, i) => (
            <li key={i}>{field || '(empty)'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task11;
