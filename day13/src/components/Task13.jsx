import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Task13 = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Task13 - useOnlineStatus</h2>
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
};

export default Task13;
