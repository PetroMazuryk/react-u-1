import React, { useState } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';

import PostForm from 'components/UI/PostForm';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Список постів" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пости не знайдені</h1>
      )}
    </div>
  );
};

export default App;