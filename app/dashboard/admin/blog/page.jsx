"use client";

import React, { useState, useEffect } from 'react';

// Main Blog Management Component
const Page = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  // Fetch posts from the server (simulated with useEffect)
  useEffect(() => {
    const fetchPosts = () => {
      return [
        { id: 1, title: 'First Post', content: 'This is the first post.', metaTitle: 'First Post SEO', metaDescription: 'Description for first post' },
        { id: 2, title: 'Second Post', content: 'This is the second post.', metaTitle: 'Second Post SEO', metaDescription: 'Description for second post' },
      ];
    };
    setPosts(fetchPosts());
  }, []);

  // Handle form submission for creating or editing a post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPostId) {
      // Update post
      setPosts(posts.map(post => 
        post.id === editingPostId 
          ? { ...post, title, content, metaTitle, metaDescription } 
          : post
      ));
    } else {
      // Create new post
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        metaTitle,
        metaDescription,
      };
      setPosts([...posts, newPost]);
    }
    resetForm();
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setContent('');
    setMetaTitle('');
    setMetaDescription('');
    setEditingPostId(null);
  };

  // Delete a post
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Edit a post
  const editPost = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setMetaTitle(post.metaTitle);
    setMetaDescription(post.metaDescription);
    setEditingPostId(post.id);
  };

  return (
    <div className="container mx-auto p-6 h-screen overflow-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Management System</h1>
      
      {/* Dashboard Overview */}
      <div className="bg-gray-100 p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p>Total Posts: <span className="font-bold">{posts.length}</span></p>
      </div>

      {/* Post Form */}
      <form onSubmit={handleSubmit} aria-label="Post Form" className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">{editingPostId ? 'Edit Post' : 'Create New Post'}</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Title:</span>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Content:</span>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Meta Title:</span>
          <input 
            type="text" 
            value={metaTitle} 
            onChange={(e) => setMetaTitle(e.target.value)} 
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Meta Description:</span>
          <textarea 
            value={metaDescription} 
            onChange={(e) => setMetaDescription(e.target.value)} 
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {editingPostId ? 'Update Post' : 'Save Post'}
        </button>
      </form>

      {/* Post List */}
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      {posts.length > 0 ? (
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
              <p className="text-gray-600"><strong>SEO:</strong> {post.metaTitle}</p>
              <p className="text-gray-600">{post.metaDescription}</p>
              <div className="mt-2 flex space-x-2">
                <button onClick={() => editPost(post)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Edit</button>
                <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Page;
