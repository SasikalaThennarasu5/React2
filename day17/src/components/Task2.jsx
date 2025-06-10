// Task2.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Task2 = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li><Link to="/task3/1">User 1</Link></li>
        <li><Link to="/task3/2">User 2</Link></li>
      </ul>
    </div>
  );
};

export default Task2;
