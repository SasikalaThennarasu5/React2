// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import User from './components/User';
import UserDetails from './components/UserDetails';
import UserPosts from './components/UserPosts';
import NotFound from './components/Notfound';
import Task1 from './components/Task1';
import Project1 from "./components/Project1";
import ProductList from "./components/Project2/ProductList";
import ProductDetails from "./components/Project2/ProductDetails";
import BlogList from "./components/Project3/BlogList";
import BlogDetails from "./components/Project3/BlogDetails";
import MovieList from "./components/Project4/Movielist";
import MovieDetails from "./components/Project4/MovieDetails";
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="user" element={<User />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="user/:id/:name" element={<UserDetails />} />
          <Route path="user/:id/posts" element={<UserPosts />} />
          <Route path="project1/:id" element={<Project1 />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="posts" element={<BlogList />} />
          <Route path="post/:id" element={<BlogDetails />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;