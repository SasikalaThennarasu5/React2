// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Project1 from './components/Project1'; // Personal Blog Website
import Project2 from './components/Project2'; // Todo List Application
import Project3 from './components/Project3'; // Weather App
import Project4 from './components/Project4'; // User Management System
import Project5 from './components/Project5'; // Ecommerce Product List

import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h2 className="logo">My React Projects</h2>
          <ul className="nav-links">
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/ecommerce">Ecommerce</Link></li>
          </ul>
        </nav>

        <main className="main-container">
          <Routes>
            <Route path="/" element={<Project1 />} />
            <Route path="/todo" element={<Project2 />} />
            <Route path="/weather" element={<Project3 />} />
            <Route path="/users" element={<Project4 />} />
            <Route path="/ecommerce" element={<Project5 />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} React Project Showcase</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
