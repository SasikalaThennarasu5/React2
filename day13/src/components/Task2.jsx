import React from "react";
import useToggle from "../hooks/useToggle";

const Task2 = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <div>
      <h2>Task2 - useToggle</h2>
      <p>Toggle state: {isOpen ? "Open" : "Closed"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Task2;
