// Task4.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Task4 = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Profile Page</h2>
      <p>User ID: {id}</p>
    </div>
  );
};

export default Task4;
