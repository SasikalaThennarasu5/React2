import './Project2.css';
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Project2 = () => {
  const [tasks, setTasks] = useLocalStorage('todoTasks', []);
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState('All');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add new task
  const addTask = e => {
    e.preventDefault();
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  // Toggle completed
  const toggleCompleted = id => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  // Delete task with confirmation
  const deleteTask = id => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  // Start editing task
  const startEdit = task => {
    setEditId(task.id);
    setEditText(task.text);
  };

  // Save edited task
  const saveEdit = id => {
    if (!editText.trim()) return;
    const updated = tasks.map(task =>
      task.id === id ? { ...task, text: editText.trim() } : task
    );
    setTasks(updated);
    setEditId(null);
    setEditText('');
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
  };

  // Filtered tasks
  const filteredTasks = tasks.filter(FILTER_MAP[filter]);

  return (
    <section className="todo-container">
    <h2>Todo List Application</h2>

    <form onSubmit={addTask} className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="todo-button">Add</button>
    </form>

    <div className="filter-buttons">
      {FILTER_NAMES.map(name => (
        <button
          key={name}
          onClick={() => setFilter(name)}
          className={filter === name ? 'active' : ''}
        >
          {name}
        </button>
      ))}
    </div>

    <ul className="task-list">
      {filteredTasks.map(task => (
        <li key={task.id} className="task-item">
          <div className="task-left">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            {editId === task.id ? (
              <input
                className="task-edit-input"
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
            ) : (
              <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
            )}
          </div>

          <div className="task-actions">
            {editId === task.id ? (
              <>
                <button onClick={() => saveEdit(task.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)} className="delete">Delete</button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  </section>
);
};

export default Project2;
