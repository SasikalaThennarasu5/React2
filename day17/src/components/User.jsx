import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();  // Task 3: Access Route Parameters
  const userId = id || 'default-id';  // Task 9: Default Parameter Value

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {userId}</p>  {/* Task 4: Display Route Parameter */}
    </div>
  );
};

export default User;