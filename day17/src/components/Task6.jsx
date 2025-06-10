// Task6.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Task6 = () => {
  const { id } = useParams();
  return <h2>{id ? `User ID: ${id}` : 'No user ID provided'}</h2>;
};

export default Task6;
