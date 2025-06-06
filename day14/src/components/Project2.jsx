import React, { useState } from 'react';

const Project2 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks(prev => [...prev, task.trim()]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Mini Project 2: Dynamic Todo List</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.length === 0 && <li>No tasks added yet</li>}
        {tasks.map((task, index) => (
          <li key={index}>
            {task} {' '}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project2;
