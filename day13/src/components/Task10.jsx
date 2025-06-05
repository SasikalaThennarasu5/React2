import React, { useState } from "react";
import useTimeout from "../hooks/useTimeout";

const Task10 = () => {
  const [show, setShow] = useState(false);
  useTimeout(() => setShow(true), 3000);

  return (
    <div>
      <h2>Task10 - useTimeout</h2>
      {show ? <p>Hello after 3s!</p> : <p>Waiting...</p>}
    </div>
  );
};

export default Task10;
