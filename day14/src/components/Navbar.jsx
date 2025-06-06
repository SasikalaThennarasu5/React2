import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">ReactForms</a>
        <ul className="navbar-menu">
          <li><a href="#tasks" className="navbar-link">Tasks</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
