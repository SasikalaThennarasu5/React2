import React from "react";
import useHover from "../hooks/useHover";

const Task8 = () => {
  const [isHovered, ref] = useHover();

  return (
    <div>
      <h2>Task8 - useHover</h2>
      <div
        ref={ref}
        style={{ padding: "20px", backgroundColor: isHovered ? "lightgreen" : "lightgray" }}
      >
        Hover me!
      </div>
      <p>{isHovered ? "Hovered!" : "Not Hovered"}</p>
    </div>
  );
};

export default Task8;
