import React, { useState } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';

import PostForm from 'components/UI/PostForm';
import MySelect from 'components/UI/select/MySelect';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Type Script', body: 'Learn Type Script' },
    { id: 2, title: 'Node.js', body: 'Discover Node.js' },
    { id: 3, title: 'JavaScript', body: 'Get good at JavaScript' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  const sortPosts = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортування по"
          options={[
            { value: 'title', name: 'По назві' },
            { value: 'body', name: 'По списку' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постів" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пости не знайдені</h1>
      )}
    </div>
  );
};

export default App;
