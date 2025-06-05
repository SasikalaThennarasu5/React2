import React from "react";
import useFetch from "../hooks/useFetch";

const Task4 = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>Task4 - useFetch</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task4;
