// Task10.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Task10 = () => {
  const { id } = useParams();
  const isValid = !isNaN(Number(id));

  return (
    <div>
      {isValid ? <h2>Valid ID: {id}</h2> : <h2 style={{ color: 'red' }}>Invalid User ID</h2>}
    </div>
  );
};

export default Task10;
