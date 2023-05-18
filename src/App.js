import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';

import PostForm from 'components/PostForm';
import PostFilter from 'components/PostFilter';
import MyModal from 'components/UI/MyModal/MyModal';
import MyButton from 'components/UI/button/MyButton';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Type Script', body: 'Learn Type Script' },
    { id: 2, title: 'Node.js', body: 'Discover Node.js' },
    { id: 3, title: 'JavaScript', body: 'Get good at JavaScript' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

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
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Створити користувача
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

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