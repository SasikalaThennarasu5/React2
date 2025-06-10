// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';

import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

const App = () => {
  return (
    <Router>
      <div style={{ padding: "10px" }}>
        <h1>React Dynamic Routing Tasks</h1>
        <nav>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {[...Array(13)].map((_, i) => (
              <li key={i}><Link to={`/task${i + 1}`}>Task{i + 1}</Link></li>
            ))}
            <li><Link to="/user/1">Project1 – User Profile</Link></li>
            <li><Link to="/product/1">Project2 – Product Details</Link></li>
            <li><Link to="/post/1">Project3 – Blog App</Link></li>
            <li><Link to="/movie/1">Project4 – Movie Details</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3/:id" element={<Task3 />} />
          <Route path="/task4/:id" element={<Task4 />} />
          <Route path="/task5/:id/:name" element={<Task5 />} />
          <Route path="/task6/:id?" element={<Task6 />} />
          <Route path="/task7" element={<Task7 />} />
          <Route path="/task8" element={<Task8 />} />
          <Route path="/task9/:id?" element={<Task9 />} />
          <Route path="/task10/:id" element={<Task10 />} />
          <Route path="/task11/:id/*" element={<Task11 />} />
          <Route path="/task12/:id" element={<Task12 />} />
          <Route path="/task13/:id" element={<Task13 />} />

          {/* Mini Projects */}
          <Route path="/user/:id" element={<Project1 />} />
          <Route path="/product/:id" element={<Project2 />} />
          <Route path="/post/:id" element={<Project3 />} />
          <Route path="/movie/:id" element={<Project4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
