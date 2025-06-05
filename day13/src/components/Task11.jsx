import React from "react";
import useClipboard from "../hooks/useClipboard";

const Task11 = () => {
  const { copy } = useClipboard();
  const text = "Copy this text";

  return (
    <div>
      <h2>Task11 - useClipboard</h2>
      <p>{text}</p>
      <button onClick={() => copy(text)}>Copy</button>
    </div>
  );
};

export default Task11;
