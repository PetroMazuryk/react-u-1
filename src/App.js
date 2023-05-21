import React, { useState, useEffect } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';

import PostForm from 'components/PostForm';
import PostFilter from 'components/PostFilter';
import MyModal from 'components/UI/MyModal/MyModal';
import MyButton from 'components/UI/button/MyButton';
import { usePosts } from 'hooks/usePosts';
import Loader from 'components/UI/Loader/Loader';
import { useFetching } from 'hooks/useFetching';
import PostService from 'API/PostService';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPost}>Get Post</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Створити користувача
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h2>Відбулася помилка ${postError}</h2>}
      {isPostLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постів"
        />
      )}
    </div>
  );
};

export default App;
