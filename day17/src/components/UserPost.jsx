import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPost = () => {
  const { id } = useParams();  // Task 3: Access Route Parameters
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();

    return () => setPosts([]);  // Task 13: Cleanup with useEffect
  }, [id]);

  return (
    <div>
      <h3>User {id}'s Posts</h3>  {/* Task 4: Display Route Parameter */}
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>  /* Task 12: Filter Data Based on Route Parameter */
        ))}
      </ul>
    </div>
  );
};

export default UserPost;