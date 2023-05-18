import React, { useState } from 'react';
import './styles/App.css';
import PostList from 'components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/MyInput';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewpost = e => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Назва поста"
        />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="Опис поста"
        />
        <MyButton onClick={addNewpost}>Створити пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постів" />
    </div>
  );
};

export default App;
