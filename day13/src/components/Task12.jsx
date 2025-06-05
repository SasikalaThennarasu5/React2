import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Task12 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <h2>Task12 - useMediaQuery</h2>
      <p>{isMobile ? "Mobile View" : "Desktop View"}</p>
    </div>
  );
};

export default Task12;
