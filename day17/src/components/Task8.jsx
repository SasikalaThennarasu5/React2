// Task8.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Task8 = () => {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate('/task3/456');
  };

  return (
    <div>
      <h2>Navigate Programmatically</h2>
      <button onClick={goToUser}>Go to User 456</button>
    </div>
  );
};

export default Task8;
