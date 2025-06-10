// Task12.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Task12 = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Task12;
