// Project1.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project1 = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading user profile...</p>;
  if (!user || !user.id) return <p>User not found.</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>{user.name}'s Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default Project1;
