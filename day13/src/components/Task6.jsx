import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Task6 = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  return (
    <div>
      <h2>Task6 - useDebounce</h2>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <p>Debounced: {debouncedSearch}</p>
    </div>
  );
};

export default Task6;
