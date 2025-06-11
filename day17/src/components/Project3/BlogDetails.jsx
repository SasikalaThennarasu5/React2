
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './blogData';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (isNaN(id)) {
    return <div className="alert alert-danger text-center">Invalid ID: Must be a number</div>;
  }

  if (!post) {
    return <div className="alert alert-warning text-center">Post not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p className="mt-3">{post.content}</p>
    </div>
  );
};

export default BlogDetails;