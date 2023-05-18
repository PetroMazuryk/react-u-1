import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';

import PostForm from 'components/PostForm';
import MySelect from 'components/UI/select/MySelect';
import MyInput from 'components/UI/input/MyInput';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Type Script', body: 'Learn Type Script' },
    { id: 2, title: 'Node.js', body: 'Discover Node.js' },
    { id: 3, title: 'JavaScript', body: 'Get good at JavaScript' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    // console.log('Сортування');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  const sortPosts = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          placeholder="Пошук ..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
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
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постів"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пости не знайдені</h1>
      )}
    </div>
  );
};

export default App;
