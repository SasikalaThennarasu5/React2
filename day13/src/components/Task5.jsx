import React from "react";
import useInput from "../hooks/useInput";

const Task5 = () => {
  const name = useInput("");

  return (
    <div>
      <h2>Task5 - useInput</h2>
      <input value={name.value} onChange={name.onChange} />
      <button onClick={name.reset}>Reset</button>
      <p>Input: {name.value}</p>
    </div>
  );
};

export default Task5;
