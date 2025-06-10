// Project3.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project3 = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setPost(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (!post || !post.id) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Project3;
