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
import { getPageCount } from 'utils/pages';
import Pagination from 'components/UI/pagination/Pagination';
import { getPagesArray } from 'utils/pages';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, _setLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      // console.log(response.headers['x-total-count']);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );
  // console.log(setTotalPages);

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  const changePage = page => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get Post</button>
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

      {/* <Pagination page={page} changePage={changePage} totalPage={totalPages} /> */}
      <div className="page__wrapper">
        {pagesArray.map(p => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
