import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';

import PostForm from 'components/PostForm';
import PostFilter from 'components/PostFilter';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Type Script', body: 'Learn Type Script' },
    { id: 2, title: 'Node.js', body: 'Discover Node.js' },
    { id: 3, title: 'JavaScript', body: 'Get good at JavaScript' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    // console.log('Сортування');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постів"
      />
    </div>
  );
};

export default App;
