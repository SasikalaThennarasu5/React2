import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Project1 = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [posts, setPosts] = useLocalStorage('blogPosts', [
    { id: 1, title: 'Welcome to my blog!' },
    { id: 2, title: 'React is awesome' },
  ]);
  const [newPostTitle, setNewPostTitle] = useState('');

  // Update document title with latest post title
  useEffect(() => {
    if (posts.length > 0) {
      document.title = `${posts[posts.length - 1].title} | Personal Blog`;
    } else {
      document.title = 'Personal Blog';
    }
  }, [posts]);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPostTitle.trim()) return;
    const newPost = {
      id: Date.now(),
      title: newPostTitle.trim(),
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
  };

  return (
  <section
    className="project1-section"
    data-theme={darkMode ? 'dark' : 'light'}
  >
    <h2>Personal Blog Website</h2>

    <button className="theme-toggle-btn" onClick={toggleTheme}>
      Switch to {darkMode ? 'Light' : 'Dark'} Theme
    </button>

    <form onSubmit={handleAddPost}>
      <input
        type="text"
        placeholder="Enter new post title"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>

    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </section>
);

};

export default Project1;
