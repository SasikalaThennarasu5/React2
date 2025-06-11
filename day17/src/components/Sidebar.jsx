import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Left Navbar */}
        <div className="col-md-3 bg-light p-3 border-end">
          <h4>Navigation</h4>
          <nav className="nav flex-column">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/task1" className="nav-link">Task 1</Link>
            <Link to="/user/1" className="nav-link">User ID 1</Link>
            <Link to="/user/2/Jane" className="nav-link">User 2 (Jane)</Link>
            {/* <Link to="/project1/1" className="nav-link">Project 1</Link>
            <Link to="/products" className="nav-link">Project 2</Link>
            <Link to="/posts" className="nav-link">Project 3</Link>
            <Link to="/movies" className="nav-link">Project 4</Link> */}
          </nav>
        </div>
        <div className="col-md-9 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;