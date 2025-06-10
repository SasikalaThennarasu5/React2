// Task3.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Task3 = () => {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
};

export default Task3;
