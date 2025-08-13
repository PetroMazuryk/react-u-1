import React from "react";
import {Routes, Route} from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ToDoPage from "./pages/ToDoPage";
import About from "./pages/About/About";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import Buttons from "./pages/Buttons/Buttons";
import Error from "./pages/Error";

import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="about" element={<About />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post/:id" element={<PostIdPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
