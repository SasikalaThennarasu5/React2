import React from "react";
import useCounter from "../hooks/useCounter";

const Task1 = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Task1 - useCounter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>🔁</button>
    </div>
  );
};

export default Task1;
