// Task11.jsx
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const Posts = () => {
  const { id } = useParams();
  return <h3>Posts of User ID: {id}</h3>;
};

const Task11 = () => {
  return (
    <div>
      <h2>User Details</h2>
      <Routes>
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default Task11;
