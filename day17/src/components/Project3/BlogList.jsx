import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogList = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blog Posts</h2>
      <ul className="list-group">
        {blogPosts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;