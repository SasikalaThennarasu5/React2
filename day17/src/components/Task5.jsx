// Task5.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Task5 = () => {
  const { id, name } = useParams();
  return (
    <div>
      <h2>User Info</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Task5;
