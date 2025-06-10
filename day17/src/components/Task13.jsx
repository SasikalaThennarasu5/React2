// Task13.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Task13 = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setUser(data);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>Website: {user.website}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Task13;
