// Task9.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Task9 = () => {
  const { id = 'default' } = useParams();
  return <h2>User ID: {id}</h2>;
};

export default Task9;
