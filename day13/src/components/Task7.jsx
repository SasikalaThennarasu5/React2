import React, { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const Task7 = () => {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <div>
      <h2>Task7 - usePrevious</h2>
      <p>Current: {count}</p>
      <p>Previous: {prev}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task7;
