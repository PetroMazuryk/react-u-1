import React, { useState } from 'react';
import './styles/App.css';
import PostItem from 'components/PostItem';

export const App = () => {
  const [posts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);
  return (
    <div className="App">
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default App;
