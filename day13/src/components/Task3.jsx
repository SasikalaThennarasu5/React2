import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Task3 = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <h2>Task3 - useLocalStorage</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Stored Name: {name}</p>
    </div>
  );
};

export default Task3;
