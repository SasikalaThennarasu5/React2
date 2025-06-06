// src/components/Project4.jsx
import React, { useState, useEffect } from 'react';
import './Project4.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const Project4 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 5))); // load 5 users initially
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = { ...updated[editIndex], ...formData };
      setUsers(updated);
      setEditIndex(null);
    } else {
      const newUser = {
        id: Date.now(),
        ...formData
      };
      setUsers(prev => [...prev, newUser]);
    }
    setFormData({ name: '', email: '' });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData({ name: users[index].name, email: users[index].email });
    setShowModal(true);
  };

  return (
    <div className="user-container">
      <h2>User Management System</h2>
      <button onClick={() => { setFormData({ name: '', email: '' }); setShowModal(true); }}>
        Add User
      </button>

      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
            <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </div>
      )}

      <ul className="user-list">
        {users.map((user, index) => (
          <li key={user.id}>
            <span><strong>{user.name}</strong> - {user.email}</span>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project4;
