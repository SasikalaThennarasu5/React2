import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id, name } = useParams();  // Task 3: Access Route Parameters
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isNaN(id)) {
      setError('Invalid ID: Must be a number');  // Task 10: URL Parameter Validation
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);  // Task 12: Fetch based on param
        const data = await res.json();
        setUser(data);
        setError('');
      } catch (err) {
        setError('Error fetching user data.');
      }
    };

    fetchUser();

    return () => {
      setUser(null);  // Task 13: Cleanup with useEffect
    };
  }, [id]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>  {/* Task 4: Display Route Parameter */}
      {name && <p>User Name: {name}</p>}  {/* Task 5: Multiple Route Parameters */}
      {user && <p>Email: {user.email}</p>}  {/* Task 12: Display fetched data */}
    </div>
  );
};

export default UserDetails;