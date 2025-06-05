import React, { useState } from "react";
import useTitle from "../hooks/useTitle";

const Task9 = () => {
  const [count, setCount] = useState(0);
  useTitle(`Clicked ${count} times`);

  return (
    <div>
      <h2>Task9 - useTitle</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Task9;
