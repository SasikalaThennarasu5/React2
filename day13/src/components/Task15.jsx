import React from "react";
import useTheme from "../hooks/useTheme";

const Task15 = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Task15 - useTheme</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Task15;
